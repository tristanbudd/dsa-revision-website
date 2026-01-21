import CodeBox from '../components/CodeBox';

function Graph() {
    const adjacencyMatrixExample = [
        {
            language: 'python',
            code: `# Graph Representation using Adjacency Matrix
class GraphMatrix:
    def __init__(self, num_vertices):
        self.num_vertices = num_vertices
        # Initialize matrix with all zeros (no edges)
        self.matrix = [[0 for _ in range(num_vertices)] 
                      for _ in range(num_vertices)]
        self.vertices = []
    
    def add_vertex(self, vertex):
        self.vertices.append(vertex)
    
    def add_edge(self, v1, v2, weight=1):
        # For unweighted graph, weight = 1
        # For weighted graph, weight = actual weight
        if v1 < self.num_vertices and v2 < self.num_vertices:
            self.matrix[v1][v2] = weight
            # For undirected graph, also add reverse edge
            # self.matrix[v2][v1] = weight
    
    def has_edge(self, v1, v2):
        return self.matrix[v1][v2] != 0
    
    def get_neighbors(self, vertex):
        neighbors = []
        for i in range(self.num_vertices):
            if self.matrix[vertex][i] != 0:
                neighbors.append(i)
        return neighbors
    
    def display(self):
        print("Adjacency Matrix:")
        for row in self.matrix:
            print(row)

# Example usage
graph = GraphMatrix(4)
graph.add_vertex('A')
graph.add_vertex('B') 
graph.add_vertex('C')
graph.add_vertex('D')

# Add edges: A->B, A->C, B->D, C->D
graph.add_edge(0, 1)  # A to B
graph.add_edge(0, 2)  # A to C
graph.add_edge(1, 3)  # B to D
graph.add_edge(2, 3)  # C to D

graph.display()`,
        },
    ];

    const adjacencyListExample = [
        {
            language: 'python',
            code: `# Graph Representation using Adjacency Lists
class GraphList:
    def __init__(self):
        self.vertices = {}
    
    def add_vertex(self, vertex):
        if vertex not in self.vertices:
            self.vertices[vertex] = []
    
    def add_edge(self, v1, v2, weight=1):
        # Add v1 -> v2 edge
        if v1 not in self.vertices:
            self.add_vertex(v1)
        if v2 not in self.vertices:
            self.add_vertex(v2)
            
        # Store as tuple (neighbor, weight)
        self.vertices[v1].append((v2, weight))
        
        # For undirected graph, add reverse edge
        # self.vertices[v2].append((v1, weight))
    
    def has_edge(self, v1, v2):
        if v1 in self.vertices:
            for neighbor, _ in self.vertices[v1]:
                if neighbor == v2:
                    return True
        return False
    
    def get_neighbors(self, vertex):
        return self.vertices.get(vertex, [])
    
    def display(self):
        print("Adjacency List:")
        for vertex, neighbors in self.vertices.items():
            neighbor_list = [f"{n}({w})" for n, w in neighbors]
            print(f"{vertex}: {neighbor_list}")

# Example usage
graph = GraphList()
graph.add_edge('A', 'B', 2)
graph.add_edge('A', 'C', 3)
graph.add_edge('B', 'D', 1)
graph.add_edge('C', 'D', 4)
graph.add_edge('D', 'E', 2)

graph.display()
# Output: A: ['B(2)', 'C(3)'], B: ['D(1)'], C: ['D(4)'], D: ['E(2)'], E: []`,
        },
    ];

    const dfsExample = [
        {
            language: 'python',
            code: `# Depth First Search (DFS) Implementation
def dfs_recursive(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    # Process current vertex
    visited.add(start)
    print(f"Visited: {start}")
    
    # Recursively visit all unvisited neighbors
    for neighbor, _ in graph.get_neighbors(start):
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)
    
    return visited

def dfs_iterative(graph, start):
    visited = set()
    stack = [start]
    result = []
    
    while stack:
        vertex = stack.pop()
        
        if vertex not in visited:
            visited.add(vertex)
            result.append(vertex)
            print(f"Visited: {vertex}")
            
            # Add neighbors to stack (in reverse order for consistent traversal)
            neighbors = graph.get_neighbors(vertex)
            for neighbor, _ in reversed(neighbors):
                if neighbor not in visited:
                    stack.append(neighbor)
    
    return result

# Example usage with our graph
# Graph: A -> B, C; B -> D; C -> D; D -> E
graph = GraphList()
graph.add_edge('A', 'B')
graph.add_edge('A', 'C')
graph.add_edge('B', 'D')
graph.add_edge('C', 'D')
graph.add_edge('D', 'E')

print("DFS Recursive:")
dfs_recursive(graph, 'A')

print("\\nDFS Iterative:")
dfs_iterative(graph, 'A')
# Possible output: A -> B -> D -> E -> C (order may vary)`,
        },
    ];

    const bfsExample = [
        {
            language: 'python',
            code: `# Breadth First Search (BFS) Implementation
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    result = []
    
    visited.add(start)
    
    while queue:
        vertex = queue.popleft()
        result.append(vertex)
        print(f"Visited: {vertex}")
        
        # Add all unvisited neighbors to queue
        for neighbor, _ in graph.get_neighbors(vertex):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    
    return result

def bfs_shortest_path(graph, start, target):
    if start == target:
        return [start]
    
    visited = set([start])
    queue = deque([(start, [start])])
    
    while queue:
        vertex, path = queue.popleft()
        
        for neighbor, _ in graph.get_neighbors(vertex):
            if neighbor == target:
                return path + [neighbor]
            
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    
    return None  # No path found

# Example usage
graph = GraphList()
graph.add_edge('A', 'B')
graph.add_edge('A', 'C')
graph.add_edge('B', 'D')
graph.add_edge('C', 'E')
graph.add_edge('D', 'F')
graph.add_edge('E', 'F')

print("BFS traversal from A:")
bfs_result = bfs(graph, 'A')
print(f"BFS order: {' -> '.join(bfs_result)}")

print("\\nShortest path from A to F:")
path = bfs_shortest_path(graph, 'A', 'F')
if path:
    print(f"Path: {' -> '.join(path)}")
else:
    print("No path found")`,
        },
    ];

    const graphApplicationExample = [
        {
            language: 'python',
            code: `# Real-World Graph Applications
class SocialNetwork:
    def __init__(self):
        self.graph = GraphList()
    
    def add_person(self, person):
        self.graph.add_vertex(person)
    
    def add_friendship(self, person1, person2):
        # Undirected friendship
        self.graph.add_edge(person1, person2)
        self.graph.add_edge(person2, person1)
    
    def find_mutual_friends(self, person1, person2):
        friends1 = set(n for n, _ in self.graph.get_neighbors(person1))
        friends2 = set(n for n, _ in self.graph.get_neighbors(person2))
        return friends1.intersection(friends2)
    
    def degrees_of_separation(self, person1, person2):
        path = bfs_shortest_path(self.graph, person1, person2)
        return len(path) - 1 if path else -1

class CoursePrerequisites:
    def __init__(self):
        self.graph = GraphList()
    
    def add_course(self, course):
        self.graph.add_vertex(course)
    
    def add_prerequisite(self, course, prerequisite):
        # prerequisite -> course (directed edge)
        self.graph.add_edge(prerequisite, course)
    
    def topological_sort(self):
        # Find courses with no prerequisites (in-degree = 0)
        in_degree = {course: 0 for course in self.graph.vertices}
        
        for course in self.graph.vertices:
            for neighbor, _ in self.graph.get_neighbors(course):
                in_degree[neighbor] += 1
        
        # Start with courses having no prerequisites
        queue = deque([course for course, degree in in_degree.items() if degree == 0])
        result = []
        
        while queue:
            course = queue.popleft()
            result.append(course)
            
            # Remove this course and update in-degrees
            for next_course, _ in self.graph.get_neighbors(course):
                in_degree[next_course] -= 1
                if in_degree[next_course] == 0:
                    queue.append(next_course)
        
        return result if len(result) == len(self.graph.vertices) else None

# Example: Course scheduling
scheduler = CoursePrerequisites()
scheduler.add_prerequisite('Math101', 'Math102')
scheduler.add_prerequisite('Math102', 'Math201')
scheduler.add_prerequisite('CS101', 'CS201')
scheduler.add_prerequisite('Math101', 'CS201')

order = scheduler.topological_sort()
print(f"Course order: {' -> '.join(order) if order else 'Cycle detected!'}")`,
        },
    ];

    const mazeExample = [
        {
            language: 'python',
            code: `# Maze Solving using Graph Traversal
class MazeSolver:
    def __init__(self, maze):
        self.maze = maze
        self.rows = len(maze)
        self.cols = len(maze[0])
        self.graph = self._build_graph()
    
    def _build_graph(self):
        graph = GraphList()
        
        # Add vertices for each cell
        for i in range(self.rows):
            for j in range(self.cols):
                if self.maze[i][j] != 1:  # Not a wall
                    graph.add_vertex((i, j))
        
        # Add edges between adjacent cells
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # right, down, left, up
        
        for i in range(self.rows):
            for j in range(self.cols):
                if self.maze[i][j] != 1:  # Current cell is not a wall
                    for di, dj in directions:
                        ni, nj = i + di, j + dj
                        if (0 <= ni < self.rows and 0 <= nj < self.cols and 
                            self.maze[ni][nj] != 1):
                            graph.add_edge((i, j), (ni, nj))
        
        return graph
    
    def find_path(self, start, end):
        # Use BFS to find shortest path
        if start not in self.graph.vertices or end not in self.graph.vertices:
            return None
        
        visited = set([start])
        queue = deque([(start, [start])])
        
        while queue:
            current, path = queue.popleft()
            
            if current == end:
                return path
            
            for neighbor, _ in self.graph.get_neighbors(current):
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append((neighbor, path + [neighbor]))
        
        return None
    
    def display_solution(self, path):
        if not path:
            print("No path found!")
            return
        
        solution = [row[:] for row in self.maze]
        for i, (row, col) in enumerate(path):
            if i == 0:
                solution[row][col] = 'S'  # Start
            elif i == len(path) - 1:
                solution[row][col] = 'E'  # End
            else:
                solution[row][col] = '*'  # Path
        
        for row in solution:
            print(' '.join(str(cell) for cell in row))

# Example maze (0 = path, 1 = wall)
maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0]
]

solver = MazeSolver(maze)
path = solver.find_path((0, 0), (4, 4))
print("Maze solution:")
solver.display_solution(path)`,
        },
    ];

    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        Graph
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">8% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    <strong>Graphs</strong> are <strong>versatile data structures</strong> consisting of nodes (vertices) where each node can have
                    &nbsp;<strong>many predecessors and many successors</strong>. Unlike linear or hierarchical structures, graphs can represent 
                    complex relationships and are used to model real-world problems like <strong>road maps, computer networks, social networks</strong>, 
                    and task scheduling. Graphs support two fundamental traversal algorithms: <strong>Depth-First Search (DFS)</strong> and
                    <strong> Breadth-First Search (BFS)</strong>, each with specific applications and performance characteristics. 
                    This page covers graph terminology, representation methods, traversal algorithms, and practical applications in 
                    problem-solving scenarios.
                </p>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Graph Terminology and Definitions
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Basic Graph Components</h4>
                            <div className="space-y-3 text-gray-300">
                                <div><strong>Graph:</strong> A collection of nodes (vertices) and line segments connecting the vertices (edges).</div>
                                <div><strong>Vertex (Node):</strong> A fundamental unit that represents an entity in the graph.</div>
                                <div><strong>Edge (Arc):</strong> A connection between two vertices that may represent a relationship or path.</div>
                                <div><strong>Adjacency:</strong> Two vertices are adjacent if they are connected by a single edge.</div>
                                <div><strong>Path:</strong> A sequence of edges connecting vertices from one node to another.</div>
                                <div><strong>Cycle:</strong> A path containing at least three vertices that starts and finishes with the same vertex.</div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Graph Types and Properties</h4>
                            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                                <div className="space-y-2">
                                    <div><strong>Undirected Graph:</strong> Edges have no direction; connection is bidirectional.</div>
                                    <div><strong>Directed Graph (Digraph):</strong> Each edge has a direction from source to destination vertex.</div>
                                    <div><strong>Weighted Graph:</strong> Edges are assigned weights representing cost, distance, or capacity.</div>
                                    <div><strong>Acyclic Graph:</strong> Contains no cycles; important for hierarchical relationships.</div>
                                </div>
                                <div className="space-y-2">
                                    <div><strong>Connected Graph:</strong> Path exists between any two vertices.</div>
                                    <div><strong>Disconnected Graph:</strong> Some vertices cannot reach others; forms separate components.</div>
                                    <div><strong>Dense Graph:</strong> Most possible edges between vertices are present.</div>
                                    <div><strong>Sparse Graph:</strong> Only a few edges between nodes exist.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Real-World Graph Applications
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Transportation and Navigation</h4>
                            <p className="text-gray-300 mb-3">
                                <strong>Air Travel Planning:</strong> Vertices represent cities/airports, edges represent flight routes with weights 
                                indicating distance, time, or cost. Enables finding shortest routes, determining connectivity, and optimizing travel paths.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Questions Answered:</strong> What is the shortest distance between two cities? 
                                What is the optimal route to visit all cities? Is direct or indirect travel possible?
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Maze Navigation and Pathfinding</h4>
                            <p className="text-gray-300 mb-3">
                                <strong>Maze Solving:</strong> Vertices represent entrance, exit, dead ends, and path intersections. 
                                Edges represent walkable paths between these points, enabling systematic exploration and route finding.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Applications:</strong> Game AI pathfinding, robotics navigation, GPS routing algorithms, 
                                and escape route planning in buildings.
                            </div>
                        </div>

                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-5">
                            <h4 className="text-lg font-bold text-cyan-300 mb-3">Academic and Task Scheduling</h4>
                            <p className="text-gray-300 mb-3">
                                <strong>Course Prerequisites:</strong> Vertices represent academic units/courses, directed edges show prerequisite 
                                relationships. Enables determining valid course sequences and detecting circular dependencies.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Key Problem:</strong> In what order should courses be taken to satisfy all prerequisites? 
                                This requires topological sorting of a directed acyclic graph.
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-bold text-orange-300 mb-3">Network and Social Systems</h4>
                            <p className="text-gray-300 mb-3">
                                <strong>Computer Networks:</strong> Vertices represent network devices (routers, switches), edges represent 
                                connections with weights indicating bandwidth, latency, or reliability.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Applications:</strong> Social media friend networks, professional networks, communication systems, 
                                and circuit board design for electrical connectivity analysis.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Graph Representation Methods
                    </h3>

                    <p className="text-gray-300 mb-6">
                        Graphs can be stored using two primary methods: <strong>adjacency matrices</strong> and <strong>adjacency lists</strong>. 
                        The choice depends on graph density, memory constraints, and the types of operations performed most frequently.
                    </p>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Adjacency Matrix Representation</h4>
                            <CodeBox examples={adjacencyMatrixExample} title="Adjacency Matrix Implementation" />
                            <div className="mt-4 space-y-3">
                                <div className="bg-gray-800/50 rounded p-3">
                                    <h5 className="font-bold text-blue-200 mb-2">Advantages:</h5>
                                    <ul className="text-xs text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>O(1) time to check if edge exists between two vertices.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>O(1) time to insert or delete an edge.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Simple implementation for dense graphs.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Easy to work with for mathematical operations.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-3">
                                    <h5 className="font-bold text-blue-200 mb-2">Disadvantages:</h5>
                                    <ul className="text-xs text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>O(V²) space complexity regardless of actual edge count.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Inefficient for sparse graphs (wastes memory).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Fixed size - number of vertices must be known in advance.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Cannot store duplicate edges between same vertices.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Adjacency List Representation</h4>
                            <CodeBox examples={adjacencyListExample} title="Adjacency List Implementation" />
                            <div className="mt-4 space-y-3">
                                <div className="bg-gray-800/50 rounded p-3">
                                    <h5 className="font-bold text-green-200 mb-2">Advantages:</h5>
                                    <ul className="text-xs text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Space-efficient for sparse graphs: O(V + E) space complexity.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Dynamic size - easy to add/remove vertices.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Can store multiple edges between same vertices.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Efficient for graph traversal operations.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-3">
                                    <h5 className="font-bold text-green-200 mb-2">Disadvantages:</h5>
                                    <ul className="text-xs text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>O(V) time to check if specific edge exists (must search list).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>O(E) time to delete an edge (must traverse list).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>More complex implementation than matrix.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Less cache-friendly for dense graphs.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Graph Representation Comparison
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Operation</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Adjacency Matrix</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Adjacency List</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Best Use Case</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-blue-400 font-medium">Space Complexity</td>
                                    <td className="px-4 py-3 text-gray-300">O(V²)</td>
                                    <td className="px-4 py-3 text-gray-300">O(V + E)</td>
                                    <td className="px-4 py-3 text-gray-300">List for sparse, Matrix for dense</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-green-400 font-medium">Check Edge Exists</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)</td>
                                    <td className="px-4 py-3 text-gray-300">O(V)</td>
                                    <td className="px-4 py-3 text-gray-300">Matrix for frequent edge queries</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Add Edge</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)</td>
                                    <td className="px-4 py-3 text-gray-300">Both equally efficient</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-purple-400 font-medium">Remove Edge</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)</td>
                                    <td className="px-4 py-3 text-gray-300">O(V)</td>
                                    <td className="px-4 py-3 text-gray-300">Matrix for frequent deletions</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-orange-400 font-medium">Get All Neighbors</td>
                                    <td className="px-4 py-3 text-gray-300">O(V)</td>
                                    <td className="px-4 py-3 text-gray-300">O(degree)</td>
                                    <td className="px-4 py-3 text-gray-300">List for traversal algorithms</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-red-400 font-medium">Add/Remove Vertex</td>
                                    <td className="px-4 py-3 text-gray-300">O(V²)</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)</td>
                                    <td className="px-4 py-3 text-gray-300">List for dynamic graphs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                        <p className="text-sm text-gray-300">
                            <strong className="text-blue-400">Selection Guide:</strong> Use adjacency matrix for dense graphs with frequent edge queries. 
                            Use adjacency list for sparse graphs, frequent traversals, or when graph structure changes frequently.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Depth-First Search (DFS)
                    </h3>

                    <p className="text-gray-300 mb-6">
                        <strong>DFS</strong> visits all descendants of a vertex before moving to an adjacent vertex, similar to pre-order tree traversal. 
                        It uses a <strong>stack data structure</strong> (explicit or via recursion) to track the traversal path and backtrack when dead ends are reached.
                    </p>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">DFS Algorithm Implementation</h4>
                            <CodeBox examples={dfsExample} title="Depth-First Search Implementation" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Process:</strong> (1) Mark start vertex as visited, (2) Process current vertex, 
                                    (3) Recursively visit unvisited neighbors, (4) Backtrack when no unvisited neighbors remain.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-bold text-purple-300 mb-3">DFS Characteristics</h4>
                            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                                <div className="space-y-2">
                                    <div><strong>Time Complexity:</strong> O(V + E) for adjacency list, O(V²) for matrix</div>
                                    <div><strong>Space Complexity:</strong> O(V) for recursion stack/explicit stack</div>
                                    <div><strong>Traversal Pattern:</strong> Goes deep before exploring siblings</div>
                                    <div><strong>Backtracking:</strong> Returns to previous node when dead end reached</div>
                                </div>
                                <div className="space-y-2">
                                    <div><strong>Applications:</strong> Cycle detection, topological sorting, pathfinding</div>
                                    <div><strong>Tree Generation:</strong> Creates depth-first spanning tree</div>
                                    <div><strong>Memory Usage:</strong> Lower memory usage than BFS for wide graphs</div>
                                    <div><strong>Solution Quality:</strong> May not find shortest path in unweighted graphs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Breadth-First Search (BFS)
                    </h3>

                    <p className="text-gray-300 mb-6">
                        <strong>BFS</strong> processes all adjacent vertices before moving to their descendants, similar to level-order tree traversal. 
                        It uses a <strong>queue data structure</strong> to maintain the order of vertex exploration and guarantees finding the shortest path in unweighted graphs.
                    </p>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">BFS Algorithm Implementation</h4>
                            <CodeBox examples={bfsExample} title="Breadth-First Search Implementation" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Process:</strong> (1) Add start vertex to queue and mark visited, (2) Dequeue and process vertex, 
                                    (3) Add all unvisited neighbors to queue, (4) Repeat until queue is empty.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-bold text-orange-300 mb-3">BFS Characteristics</h4>
                            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                                <div className="space-y-2">
                                    <div><strong>Time Complexity:</strong> O(V + E) for adjacency list, O(V²) for matrix</div>
                                    <div><strong>Space Complexity:</strong> O(V) for queue storage</div>
                                    <div><strong>Traversal Pattern:</strong> Explores all neighbors before going deeper</div>
                                    <div><strong>Level-by-Level:</strong> Visits vertices at distance 1, then 2, then 3, etc.</div>
                                </div>
                                <div className="space-y-2">
                                    <div><strong>Shortest Path:</strong> Guarantees shortest path in unweighted graphs</div>
                                    <div><strong>Applications:</strong> Shortest path, connected components, network analysis</div>
                                    <div><strong>Memory Usage:</strong> Higher memory usage for graphs with high branching factor</div>
                                    <div><strong>Tree Generation:</strong> Creates breadth-first spanning tree</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        DFS vs BFS Comparison
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Aspect</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Depth-First Search (DFS)</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Breadth-First Search (BFS)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-blue-400 font-medium">Data Structure</td>
                                    <td className="px-4 py-3 text-gray-300">Stack (explicit or recursion)</td>
                                    <td className="px-4 py-3 text-gray-300">Queue</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-green-400 font-medium">Exploration Pattern</td>
                                    <td className="px-4 py-3 text-gray-300">Deep before wide (depth-first)</td>
                                    <td className="px-4 py-3 text-gray-300">Wide before deep (level-by-level)</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Memory Usage</td>
                                    <td className="px-4 py-3 text-gray-300">O(depth) - better for wide graphs</td>
                                    <td className="px-4 py-3 text-gray-300">O(width) - better for deep graphs</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-purple-400 font-medium">Shortest Path</td>
                                    <td className="px-4 py-3 text-gray-300">Does not guarantee shortest path</td>
                                    <td className="px-4 py-3 text-gray-300">Guarantees shortest path (unweighted)</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-orange-400 font-medium">Best Use Cases</td>
                                    <td className="px-4 py-3 text-gray-300">Topological sort, cycle detection, maze solving</td>
                                    <td className="px-4 py-3 text-gray-300">Shortest path, connected components, social networks</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-red-400 font-medium">Implementation</td>
                                    <td className="px-4 py-3 text-gray-300">Simpler with recursion</td>
                                    <td className="px-4 py-3 text-gray-300">Requires explicit queue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Practical Applications and Examples
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Social Networks and Course Scheduling</h4>
                            <CodeBox examples={graphApplicationExample} title="Real-World Graph Applications" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Applications:</strong> Friend recommendation systems, influence analysis, course prerequisite validation, 
                                    and project dependency resolution using topological sorting algorithms.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Maze Solving and Pathfinding</h4>
                            <CodeBox examples={mazeExample} title="Maze Navigation using Graph Traversal" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Applications:</strong> Game AI navigation, robotics path planning, GPS routing systems, 
                                    and emergency evacuation route planning in buildings and facilities.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-bold text-purple-300 mb-3">Network Analysis and Connectivity</h4>
                            <p className="text-gray-300 mb-3">
                                Graphs model computer networks, communication systems, and infrastructure networks. 
                                Analysis includes finding connected components, identifying critical nodes, and optimizing data flow paths.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Use Cases:</strong> Internet routing protocols, social media analytics, supply chain optimization, 
                                electrical circuit analysis, and biological network modeling.
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-bold text-orange-300 mb-3">The Seven Bridges of Königsberg</h4>
                            <p className="text-gray-300 mb-3">
                                The famous historical problem asks whether it's possible to walk across all seven bridges of Königsberg 
                                exactly once and return to the starting point. This problem led to the development of graph theory.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Solution:</strong> The problem requires finding an Eulerian path (visiting every edge exactly once). 
                                Such a path exists only if the graph has at most two vertices of odd degree.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Graph Algorithm Complexity Analysis
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Algorithm</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Adjacency Matrix</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Adjacency List</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Space Complexity</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Best Use Case</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-blue-400 font-medium">DFS Traversal</td>
                                    <td className="px-4 py-3 text-gray-300">O(V²)</td>
                                    <td className="px-4 py-3 text-gray-300">O(V + E)</td>
                                    <td className="px-4 py-3 text-gray-300">O(V)</td>
                                    <td className="px-4 py-3 text-gray-300">Cycle detection, topological sort</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-green-400 font-medium">BFS Traversal</td>
                                    <td className="px-4 py-3 text-gray-300">O(V²)</td>
                                    <td className="px-4 py-3 text-gray-300">O(V + E)</td>
                                    <td className="px-4 py-3 text-gray-300">O(V)</td>
                                    <td className="px-4 py-3 text-gray-300">Shortest path, connected components</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Connected Components</td>
                                    <td className="px-4 py-3 text-gray-300">O(V²)</td>
                                    <td className="px-4 py-3 text-gray-300">O(V + E)</td>
                                    <td className="px-4 py-3 text-gray-300">O(V)</td>
                                    <td className="px-4 py-3 text-gray-300">Network analysis, clustering</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-purple-400 font-medium">Topological Sort</td>
                                    <td className="px-4 py-3 text-gray-300">O(V²)</td>
                                    <td className="px-4 py-3 text-gray-300">O(V + E)</td>
                                    <td className="px-4 py-3 text-gray-300">O(V)</td>
                                    <td className="px-4 py-3 text-gray-300">Task scheduling, dependency resolution</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-orange-400 font-medium">Cycle Detection</td>
                                    <td className="px-4 py-3 text-gray-300">O(V²)</td>
                                    <td className="px-4 py-3 text-gray-300">O(V + E)</td>
                                    <td className="px-4 py-3 text-gray-300">O(V)</td>
                                    <td className="px-4 py-3 text-gray-300">Deadlock detection, validation</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 p-4 bg-green-900/20 border border-green-700 rounded-lg">
                        <p className="text-sm text-gray-300">
                            <strong className="text-green-400">Efficiency Note:</strong> V = number of vertices, E = number of edges. 
                            Adjacency list representation is generally more efficient for sparse graphs, while adjacency matrix works well for dense graphs.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Advanced Graph Algorithms
                    </h3>

                    <p className="text-gray-300 mb-6">
                        Beyond basic traversal, graphs support sophisticated algorithms for finding shortest paths and minimum spanning trees. 
                        These algorithms are essential for optimization problems in networks, logistics, and resource allocation scenarios.
                    </p>

                    <div className="space-y-6 mb-8">
                        <div className="rounded-lg border border-yellow-600 bg-yellow-900/20 p-5">
                            <h4 className="text-lg font-bold text-yellow-300 mb-3">Dijkstra's Shortest Path Algorithm</h4>
                            <p className="text-gray-300 mb-4">
                                Finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative edge weights. 
                                Uses a greedy approach with a priority queue to always explore the closest unvisited vertex first.
                            </p>
                            <CodeBox examples={[{
                                language: 'python',
                                code: `# Dijkstra's Shortest Path Algorithm
import heapq

def dijkstra(graph, start):
    """
    Find shortest paths from start vertex to all reachable vertices
    Returns dictionary of distances and previous vertices for path reconstruction
    """
    # Initialize distances and previous vertices
    distances = {vertex: float('infinity') for vertex in graph.vertices}
    previous = {vertex: None for vertex in graph.vertices}
    distances[start] = 0
    
    # Priority queue: (distance, vertex)
    pq = [(0, start)]
    visited = set()
    
    while pq:
        current_distance, current = heapq.heappop(pq)
        
        # Skip if already processed
        if current in visited:
            continue
            
        visited.add(current)
        
        # Check all neighbors of current vertex
        for neighbor, weight in graph.get_neighbors(current):
            if neighbor not in visited:
                new_distance = current_distance + weight
                
                # If we found a shorter path, update it
                if new_distance < distances[neighbor]:
                    distances[neighbor] = new_distance
                    previous[neighbor] = current
                    heapq.heappush(pq, (new_distance, neighbor))
    
    return distances, previous

def reconstruct_path(previous, start, end):
    """Reconstruct shortest path from start to end"""
    path = []
    current = end
    
    while current is not None:
        path.append(current)
        current = previous[current]
    
    if path[-1] != start:
        return None  # No path exists
    
    return list(reversed(path))

# Example usage
graph = GraphList()
graph.add_edge('A', 'B', 4)
graph.add_edge('A', 'C', 2)
graph.add_edge('B', 'C', 1)
graph.add_edge('B', 'D', 5)
graph.add_edge('C', 'D', 8)
graph.add_edge('C', 'E', 10)
graph.add_edge('D', 'E', 2)

distances, previous = dijkstra(graph, 'A')
print("Shortest distances from A:")
for vertex, distance in distances.items():
    if distance != float('infinity'):
        path = reconstruct_path(previous, 'A', vertex)
        print(f"To {vertex}: {distance} (path: {' -> '.join(path)})")

# Output: To B: 3 (path: A -> C -> B), To C: 2 (path: A -> C), etc.`
                            }]} title="Dijkstra's Algorithm Implementation" />
                            <div className="mt-3 grid md:grid-cols-2 gap-3">
                                <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                    <strong className="text-yellow-200">Time Complexity:</strong> O((V + E) log V) with binary heap, O(V²) with array
                                </div>
                                <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                    <strong className="text-yellow-200">Applications:</strong> GPS navigation, network routing, flight planning
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-emerald-600 bg-emerald-900/20 p-5">
                            <h4 className="text-lg font-bold text-emerald-300 mb-3">Prim's Minimum Spanning Tree Algorithm</h4>
                            <p className="text-gray-300 mb-4">
                                Builds a minimum spanning tree by starting with any vertex and repeatedly adding the minimum-weight edge 
                                that connects the growing tree to a vertex not yet in the tree. Guarantees the minimum total weight.
                            </p>
                            <CodeBox examples={[{
                                language: 'python',
                                code: `# Prim's Minimum Spanning Tree Algorithm
import heapq

def prims_mst(graph, start):
    """
    Find Minimum Spanning Tree using Prim's algorithm
    Returns list of edges in MST and total weight
    """
    mst_edges = []
    mst_vertices = {start}
    total_weight = 0
    
    # Priority queue: (weight, vertex1, vertex2)
    pq = []
    
    # Add all edges from start vertex to priority queue
    for neighbor, weight in graph.get_neighbors(start):
        heapq.heappush(pq, (weight, start, neighbor))
    
    while pq and len(mst_vertices) < len(graph.vertices):
        weight, u, v = heapq.heappop(pq)
        
        # Skip if both vertices already in MST
        if v in mst_vertices:
            continue
        
        # Add edge to MST
        mst_edges.append((u, v, weight))
        mst_vertices.add(v)
        total_weight += weight
        
        # Add all edges from new vertex to priority queue
        for neighbor, edge_weight in graph.get_neighbors(v):
            if neighbor not in mst_vertices:
                heapq.heappush(pq, (edge_weight, v, neighbor))
    
    return mst_edges, total_weight

def display_mst(mst_edges, total_weight):
    """Display the minimum spanning tree"""
    print("Minimum Spanning Tree (Prim's Algorithm):")
    for u, v, weight in mst_edges:
        print(f"  {u} -- {v}: {weight}")
    print(f"Total weight: {total_weight}")

# Example: Network connection problem
graph = GraphList()
# Cities with connection costs
graph.add_edge('A', 'B', 4)
graph.add_edge('A', 'C', 6)
graph.add_edge('A', 'D', 16)
graph.add_edge('B', 'C', 10)
graph.add_edge('B', 'D', 7)
graph.add_edge('C', 'D', 2)

# For undirected graph, add reverse edges
for vertex in list(graph.vertices.keys()):
    for neighbor, weight in list(graph.vertices[vertex]):
        graph.add_edge(neighbor, vertex, weight)

mst_edges, total_weight = prims_mst(graph, 'A')
display_mst(mst_edges, total_weight)
# Output: Minimum cost to connect all cities = 12 (edges: A-B: 4, C-D: 2, B-D: 7)`
                            }]} title="Prim's Algorithm Implementation" />
                            <div className="mt-3 grid md:grid-cols-2 gap-3">
                                <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                    <strong className="text-emerald-200">Time Complexity:</strong> O((V + E) log V) with binary heap
                                </div>
                                <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                    <strong className="text-emerald-200">Applications:</strong> Network design, circuit layout, clustering
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-teal-600 bg-teal-900/20 p-5">
                            <h4 className="text-lg font-bold text-teal-300 mb-3">Kruskal's Minimum Spanning Tree Algorithm</h4>
                            <p className="text-gray-300 mb-4">
                                Builds a minimum spanning tree by sorting all edges by weight and adding them one by one, 
                                using Union-Find data structure to avoid creating cycles. Works on the entire edge set rather than growing from a vertex.
                            </p>
                            <CodeBox examples={[{
                                language: 'python',
                                code: `# Kruskal's Minimum Spanning Tree Algorithm
class UnionFind:
    """Union-Find data structure for cycle detection"""
    def __init__(self, vertices):
        self.parent = {v: v for v in vertices}
        self.rank = {v: 0 for v in vertices}
    
    def find(self, x):
        """Find root with path compression"""
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        """Union by rank"""
        px, py = self.find(x), self.find(y)
        if px == py:
            return False  # Already in same set (would create cycle)
        
        if self.rank[px] < self.rank[py]:
            px, py = py, px
        
        self.parent[py] = px
        if self.rank[px] == self.rank[py]:
            self.rank[px] += 1
        
        return True

def kruskals_mst(graph):
    """
    Find Minimum Spanning Tree using Kruskal's algorithm
    Returns list of edges in MST and total weight
    """
    # Get all edges from graph
    edges = []
    for vertex in graph.vertices:
        for neighbor, weight in graph.get_neighbors(vertex):
            # Avoid duplicate edges in undirected graph
            if vertex < neighbor:  # lexicographic comparison
                edges.append((weight, vertex, neighbor))
    
    # Sort edges by weight
    edges.sort()
    
    # Initialize Union-Find
    uf = UnionFind(graph.vertices.keys())
    mst_edges = []
    total_weight = 0
    
    # Process edges in order of weight
    for weight, u, v in edges:
        if uf.union(u, v):  # If doesn't create cycle
            mst_edges.append((u, v, weight))
            total_weight += weight
            
            # MST complete when we have V-1 edges
            if len(mst_edges) == len(graph.vertices) - 1:
                break
    
    return mst_edges, total_weight

def compare_mst_algorithms(graph, start_vertex):
    """Compare Prim's and Kruskal's algorithms"""
    print("=== MST Algorithm Comparison ===")
    
    # Prim's Algorithm
    prim_edges, prim_weight = prims_mst(graph, start_vertex)
    print(f"\\nPrim's MST (starting from {start_vertex}):")
    for u, v, weight in prim_edges:
        print(f"  {u} -- {v}: {weight}")
    print(f"Total weight: {prim_weight}")
    
    # Kruskal's Algorithm
    kruskal_edges, kruskal_weight = kruskals_mst(graph)
    print(f"\\nKruskal's MST:")
    for u, v, weight in kruskal_edges:
        print(f"  {u} -- {v}: {weight}")
    print(f"Total weight: {kruskal_weight}")
    
    print(f"\\nBoth algorithms produce MST with same weight: {prim_weight == kruskal_weight}")

# Example usage
graph = GraphList()
edges = [('A', 'B', 4), ('A', 'C', 6), ('A', 'D', 16), 
         ('B', 'C', 10), ('B', 'D', 7), ('C', 'D', 2)]

for u, v, weight in edges:
    graph.add_edge(u, v, weight)
    graph.add_edge(v, u, weight)  # Undirected

compare_mst_algorithms(graph, 'A')`
                            }]} title="Kruskal's Algorithm Implementation" />
                            <div className="mt-3 grid md:grid-cols-2 gap-3">
                                <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                    <strong className="text-teal-200">Time Complexity:</strong> O(E log E) for sorting edges
                                </div>
                                <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                    <strong className="text-teal-200">Applications:</strong> Network infrastructure, clustering, image segmentation
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h4 className="text-xl font-semibold text-white mb-4">Advanced Algorithm Comparison</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                                <thead className="bg-gray-800">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-white font-semibold">Algorithm</th>
                                        <th className="px-4 py-3 text-left text-gray-300">Problem Type</th>
                                        <th className="px-4 py-3 text-left text-gray-300">Time Complexity</th>
                                        <th className="px-4 py-3 text-left text-gray-300">Space Complexity</th>
                                        <th className="px-4 py-3 text-left text-gray-300">Best For</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-800/50">
                                    <tr className="border-t border-gray-700">
                                        <td className="px-4 py-3 text-yellow-400 font-medium">Dijkstra's</td>
                                        <td className="px-4 py-3 text-gray-300">Single-source shortest path</td>
                                        <td className="px-4 py-3 text-gray-300">O((V + E) log V)</td>
                                        <td className="px-4 py-3 text-gray-300">O(V)</td>
                                        <td className="px-4 py-3 text-gray-300">Navigation, routing</td>
                                    </tr>
                                    <tr className="border-t border-gray-700">
                                        <td className="px-4 py-3 text-emerald-400 font-medium">Prim's</td>
                                        <td className="px-4 py-3 text-gray-300">Minimum spanning tree</td>
                                        <td className="px-4 py-3 text-gray-300">O((V + E) log V)</td>
                                        <td className="px-4 py-3 text-gray-300">O(V)</td>
                                        <td className="px-4 py-3 text-gray-300">Dense graphs, network design</td>
                                    </tr>
                                    <tr className="border-t border-gray-700">
                                        <td className="px-4 py-3 text-teal-400 font-medium">Kruskal's</td>
                                        <td className="px-4 py-3 text-gray-300">Minimum spanning tree</td>
                                        <td className="px-4 py-3 text-gray-300">O(E log E)</td>
                                        <td className="px-4 py-3 text-gray-300">O(V)</td>
                                        <td className="px-4 py-3 text-gray-300">Sparse graphs, clustering</td>
                                    </tr>
                                    <tr className="border-t border-gray-700">
                                        <td className="px-4 py-3 text-blue-400 font-medium">DFS</td>
                                        <td className="px-4 py-3 text-gray-300">Graph traversal</td>
                                        <td className="px-4 py-3 text-gray-300">O(V + E)</td>
                                        <td className="px-4 py-3 text-gray-300">O(V)</td>
                                        <td className="px-4 py-3 text-gray-300">Cycle detection, topology</td>
                                    </tr>
                                    <tr className="border-t border-gray-700">
                                        <td className="px-4 py-3 text-green-400 font-medium">BFS</td>
                                        <td className="px-4 py-3 text-gray-300">Graph traversal</td>
                                        <td className="px-4 py-3 text-gray-300">O(V + E)</td>
                                        <td className="px-4 py-3 text-gray-300">O(V)</td>
                                        <td className="px-4 py-3 text-gray-300">Unweighted shortest path</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4 p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                            <p className="text-sm text-gray-300">
                                <strong className="text-purple-400">Algorithm Selection:</strong> Use Dijkstra's for shortest paths in weighted graphs, 
                                Prim's for MST in dense graphs, Kruskal's for MST in sparse graphs, DFS for cycle detection, and BFS for unweighted shortest paths.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-linear-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">Key Takeaways</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">Graph Structure and Properties</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Versatile Data Structure:</strong> Graphs model complex many-to-many relationships between entities.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Multiple Types:</strong> Directed/undirected, weighted/unweighted, connected/disconnected, dense/sparse variations.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Real-World Applications:</strong> Transportation networks, social systems, task scheduling, and maze navigation.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Terminology:</strong> Vertices (nodes), edges (arcs), adjacency, paths, cycles, and connectivity concepts.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Representation Methods</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Adjacency Matrix:</strong> O(V²) space, O(1) edge operations, best for dense graphs and frequent edge queries.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Adjacency List:</strong> O(V + E) space, efficient for sparse graphs and traversal algorithms.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Trade-offs:</strong> Matrix offers fast edge operations, list provides space efficiency and dynamic sizing.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Selection Criteria:</strong> Choose based on graph density, operation frequency, and memory constraints.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">Traversal Algorithms</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Depth-First Search:</strong> Uses stack, explores deep paths first, ideal for cycle detection and topological sorting.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Breadth-First Search:</strong> Uses queue, explores level-by-level, guarantees shortest path in unweighted graphs.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Complexity:</strong> Both algorithms run in O(V + E) time for adjacency lists, O(V²) for matrices.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Visited Tracking:</strong> Essential to mark visited vertices to avoid infinite loops in cyclic graphs.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-3">Algorithm Selection Guidelines</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Use DFS for:</strong> Cycle detection, topological sorting, maze solving, and path existence problems.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Use BFS for:</strong> Shortest path problems, connected components, minimum spanning trees, and level analysis.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Memory Considerations:</strong> DFS uses less memory for wide graphs, BFS for deep graphs.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Implementation:</strong> DFS simpler with recursion, BFS requires explicit queue management.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Practical Applications</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Transportation Systems:</strong> GPS navigation, flight route optimization, and public transit planning.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Social Networks:</strong> Friend recommendations, influence analysis, and community detection algorithms.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Computer Science:</strong> Compiler design, database query optimization, and network protocol routing.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Game Development:</strong> AI pathfinding, procedural maze generation, and decision tree systems.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Graph;