import CodeBox from '../components/CodeBox';

function Heap() {
    const maxHeapInsertExample = [
        {
            language: 'python',
            code: `# Max-Heap Insertion Algorithm
def insert_max_heap(heap, item):
    # Step 1: Add item to end of heap (last leaf)
    heap.append(item)
    current_index = len(heap) - 1
    
    # Step 2: Bubble up to restore heap property
    while current_index > 0:
        parent_index = (current_index - 1) // 2
        
        # If heap property satisfied, stop
        if heap[parent_index] >= heap[current_index]:
            break
            
        # Swap with parent and continue
        heap[parent_index], heap[current_index] = heap[current_index], heap[parent_index]
        current_index = parent_index
    
    return heap

# Example: Insert 50 into max-heap [66, 45, 38, 20, 35, 32, 12]
heap = [66, 45, 38, 20, 35, 32, 12]
result = insert_max_heap(heap, 50)
print(result)  # [66, 50, 38, 45, 35, 32, 12, 20]`,
        },
    ];

    const maxHeapRemoveExample = [
        {
            language: 'python',
            code: `# Max-Heap Removal Algorithm (Remove Maximum)
def remove_max_heap(heap):
    if not heap:
        return None
    
    if len(heap) == 1:
        return heap.pop()
    
    # Step 1: Store maximum value and replace with last element
    max_value = heap[0]
    heap[0] = heap.pop()  # Move last element to root
    
    # Step 2: Bubble down to restore heap property
    current_index = 0
    while True:
        left_child = 2 * current_index + 1
        right_child = 2 * current_index + 2
        largest = current_index
        
        # Find largest among current, left child, right child
        if (left_child < len(heap) and 
            heap[left_child] > heap[largest]):
            largest = left_child
            
        if (right_child < len(heap) and 
            heap[right_child] > heap[largest]):
            largest = right_child
        
        # If heap property satisfied, stop
        if largest == current_index:
            break
            
        # Swap with largest child and continue
        heap[current_index], heap[largest] = heap[largest], heap[current_index]
        current_index = largest
    
    return max_value

# Example: Remove maximum from [66, 45, 38, 20, 35, 32, 12]
heap = [66, 45, 38, 20, 35, 32, 12]
max_val = remove_max_heap(heap)
print(f"Removed: {max_val}, Heap: {heap}")`,
        },
    ];

    const priorityQueueExample = [
        {
            language: 'python',
            code: `# Priority Queue Implementation using Max-Heap
class PriorityQueue:
    def __init__(self):
        self.heap = []
    
    def insert(self, item, priority):
        # Store as tuple (priority, item) for comparison
        self.heap.append((priority, item))
        self._bubble_up(len(self.heap) - 1)
    
    def remove_highest_priority(self):
        if not self.heap:
            return None
            
        if len(self.heap) == 1:
            return self.heap.pop()[1]
        
        # Store highest priority item
        highest_priority = self.heap[0][1]
        
        # Replace root with last element
        self.heap[0] = self.heap.pop()
        self._bubble_down(0)
        
        return highest_priority
    
    def _bubble_up(self, index):
        while index > 0:
            parent = (index - 1) // 2
            if self.heap[parent][0] >= self.heap[index][0]:
                break
            self.heap[parent], self.heap[index] = self.heap[index], self.heap[parent]
            index = parent
    
    def _bubble_down(self, index):
        while True:
            left = 2 * index + 1
            right = 2 * index + 2
            largest = index
            
            if (left < len(self.heap) and 
                self.heap[left][0] > self.heap[largest][0]):
                largest = left
                
            if (right < len(self.heap) and 
                self.heap[right][0] > self.heap[largest][0]):
                largest = right
            
            if largest == index:
                break
                
            self.heap[index], self.heap[largest] = self.heap[largest], self.heap[index]
            index = largest

# Usage example
pq = PriorityQueue()
pq.insert("Low priority task", 1)
pq.insert("High priority task", 10)
pq.insert("Medium priority task", 5)

print(pq.remove_highest_priority())  # "High priority task"`,
        },
    ];

    const heapSortExample = [
        {
            language: 'python',
            code: `# HeapSort Algorithm Implementation
def heap_sort(arr):
    n = len(arr)
    
    # Step 1: Build max-heap from array (heapify)
    # Start from last parent node and work backwards
    for i in range(n // 2 - 1, -1, -1):
        _max_heapify(arr, n, i)
    
    # Step 2: Extract elements one by one from heap
    for i in range(n - 1, 0, -1):
        # Move current root (maximum) to end
        arr[0], arr[i] = arr[i], arr[0]
        
        # Heapify reduced heap (exclude sorted elements)
        _max_heapify(arr, i, 0)
    
    return arr

def _max_heapify(arr, heap_size, root_index):
    largest = root_index
    left = 2 * root_index + 1
    right = 2 * root_index + 2
    
    # Find largest among root, left child, right child
    if left < heap_size and arr[left] > arr[largest]:
        largest = left
    
    if right < heap_size and arr[right] > arr[largest]:
        largest = right
    
    # If largest is not root, swap and continue heapifying
    if largest != root_index:
        arr[root_index], arr[largest] = arr[largest], arr[root_index]
        _max_heapify(arr, heap_size, largest)

# Example usage
unsorted_array = [12, 11, 13, 5, 6, 7]
print("Original array:", unsorted_array)

sorted_array = heap_sort(unsorted_array.copy())
print("Sorted array:", sorted_array)

# Time Complexity: O(n log n)
# Space Complexity: O(1) - in-place sorting`,
        },
    ];

    const jobSchedulingExample = [
        {
            language: 'python',
            code: `# Job Scheduling Algorithm using Heaps
import heapq

def schedule_jobs(jobs, num_machines):
    # jobs: list of (job_id, processing_time)
    # num_machines: number of available machines
    
    # Create max-heap for jobs (negate time for max-heap behavior)
    job_heap = [(-time, job_id) for job_id, time in jobs]
    heapq.heapify(job_heap)
    
    # Create min-heap for machines (finish_time, machine_id)
    machine_heap = [(0, i) for i in range(num_machines)]
    heapq.heapify(machine_heap)
    
    schedule = []
    
    while job_heap:
        # Get job with longest processing time
        neg_time, job_id = heapq.heappop(job_heap)
        processing_time = -neg_time
        
        # Get machine that finishes earliest
        finish_time, machine_id = heapq.heappop(machine_heap)
        
        # Schedule job on this machine
        start_time = finish_time
        new_finish_time = finish_time + processing_time
        
        schedule.append({
            'job_id': job_id,
            'machine_id': machine_id,
            'start_time': start_time,
            'finish_time': new_finish_time,
            'processing_time': processing_time
        })
        
        # Update machine's finish time
        heapq.heappush(machine_heap, (new_finish_time, machine_id))
    
    # Calculate total schedule time
    total_time = max(finish_time for finish_time, _ in machine_heap)
    
    return schedule, total_time

# Example: Schedule 7 jobs on 3 machines
jobs = [(1, 2), (2, 14), (3, 4), (4, 16), (5, 6), (6, 5), (7, 3)]
schedule, total_time = schedule_jobs(jobs, 3)

print(f"Total schedule time: {total_time} units")
for task in schedule:
    print(f"Job {task['job_id']}: Machine {task['machine_id']}, "
          f"Time {task['start_time']}-{task['finish_time']}")`,
        },
    ];

    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        Heap
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">9% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    A <strong>Heap</strong> is a specialized <strong>complete binary tree</strong> that satisfies the heap property, making it ideal for implementing
                    &nbsp;<strong>priority queues</strong> and <strong>efficient sorting algorithms</strong>. In a max-heap, each parent node is greater than or equal to its children, 
                    while in a min-heap, each parent is less than or equal to its children. Heaps provide <strong>O(log n) insertion and deletion</strong> operations 
                    and can be efficiently stored in arrays using simple indexing formulas. This page covers heap fundamentals, algorithms, array implementation, 
                    priority queue applications, and practical uses like HeapSort and job scheduling systems.
                </p>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Understanding Binary Tree Properties
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Complete Binary Tree</h4>
                            <p className="text-gray-300 mb-3">
                                A binary tree is <strong>complete</strong> if all levels except possibly the last level are completely full, 
                                and the last level has all its nodes on the left side.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Key Property:</strong> Complete binary trees can be efficiently stored in arrays without wasting space, 
                                making them perfect for heap implementation.
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Full Binary Tree</h4>
                            <p className="text-gray-300 mb-3">
                                A binary tree is <strong>full</strong> if every node other than the leaf nodes has exactly two children.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Note:</strong> A tree can be complete but not full, full but not complete, both, or neither. 
                                Heaps specifically require the complete property for efficient array storage.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Priority Queue Fundamentals
                    </h3>

                    <p className="text-gray-300 mb-6">
                        A <strong>Priority Queue</strong> is an Abstract Data Type (ADT) that manages elements based on their priority rather than insertion order.
                    </p>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Core Operations</h4>
                            <div className="space-y-3 text-gray-300">
                                <div><strong>Insert (Enqueue):</strong> Add an element with an associated priority - O(1) in simple list implementation.</div>
                                <div><strong>Remove (Dequeue):</strong> Remove and return the element with highest priority - O(n) in simple list implementation.</div>
                                <div><strong>Peek:</strong> View the highest priority element without removing it.</div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-red-600 bg-red-900/20 p-5">
                            <h4 className="text-lg font-bold text-red-300 mb-3">Performance Problem with Lists</h4>
                            <p className="text-gray-300 mb-3">
                                Using a simple list for priority queues is inefficient because removing the highest priority element requires
                                &nbsp;<strong>sequential search through the entire list</strong>.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Solution:</strong> Heap data structures provide O(log n) performance for both insertion and removal operations, 
                                making them ideal for priority queue implementation.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Heap Data Structure Definition
                    </h3>

                    <p className="text-gray-300 mb-4">
                        A <strong>heap</strong> is a complete binary tree with a specific ordering property that makes the root node easily accessible.
                    </p>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Max-Heap Properties</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Complete Binary Tree:</strong> All levels filled except possibly the last, which fills left to right.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Parent ≥ Children:</strong> Every parent node's key is greater than or equal to its children's keys.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Maximum at Root:</strong> The largest element is always at the root, making it ideal for priority queues.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Recursive Property:</strong> Both subtrees are also valid max-heaps.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-5">
                            <h4 className="text-lg font-bold text-cyan-300 mb-3">Min-Heap Properties</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Complete Binary Tree:</strong> Same structural requirement as max-heap.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Parent ≤ Children:</strong> Every parent node's key is less than or equal to its children's keys.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Minimum at Root:</strong> The smallest element is always at the root.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Applications:</strong> Useful for finding minimum elements, shortest path algorithms, and minimum spanning trees.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Heap Operations and Algorithms
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Insertion Algorithm</h4>
                            <CodeBox examples={maxHeapInsertExample} title="Max-Heap Insertion Implementation" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Process:</strong> Add element to the end (last leaf), then bubble up by comparing with parent nodes 
                                    until heap property is restored. Time complexity: <strong>O(log n)</strong>.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-red-600 bg-red-900/20 p-5">
                            <h4 className="text-lg font-bold text-red-300 mb-3">Removal Algorithm</h4>
                            <CodeBox examples={maxHeapRemoveExample} title="Max-Heap Removal Implementation" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Process:</strong> Remove root (maximum), replace with last element, then bubble down by comparing 
                                    with children until heap property is restored. Time complexity: <strong>O(log n)</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Array Implementation of Heaps
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-bold text-purple-300 mb-3">Index Relationships</h4>
                            <p className="text-gray-300 mb-3">
                                Complete binary trees can be efficiently stored in arrays using level-order numbering starting from index 0 or 1.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-3">
                                    <h5 className="font-bold text-purple-200 mb-2">0-based Indexing</h5>
                                    <ul className="text-xs text-gray-300 space-y-1">
                                        <li>• Parent of node i: (i-1) // 2</li>
                                        <li>• Left child of node i: 2*i + 1</li>
                                        <li>• Right child of node i: 2*i + 2</li>
                                        <li>• Last parent: (n//2) - 1</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-3">
                                    <h5 className="font-bold text-purple-200 mb-2">1-based Indexing</h5>
                                    <ul className="text-xs text-gray-300 space-y-1">
                                        <li>• Parent of node i: i // 2</li>
                                        <li>• Left child of node i: 2*i</li>
                                        <li>• Right child of node i: 2*i + 1</li>
                                        <li>• Last parent: n//2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-bold text-orange-300 mb-3">Array Storage Example</h4>
                            <div className="bg-gray-800/50 rounded p-4 mb-3 overflow-x-auto">
                                <h5 className="font-bold text-orange-200 mb-2">Heap Tree Structure:</h5>
                                <pre className="text-xs text-gray-300 font-mono min-w-max">
{`       66
    /      \\
   45       38
  /  \\    /  \\
 20  35  32  12
/ \\ /
3 17 10`}
                                </pre>
                            </div>
                            <div className="bg-gray-800/50 rounded p-4 overflow-x-auto">
                                <h5 className="font-bold text-orange-200 mb-2">Array Representation (0-based):</h5>
                                <pre className="text-xs text-gray-300 font-mono min-w-max">
Index: [0] [1] [2] [3] [4] [5] [6] [7] [8] [9]
Value: 66  45  38  20  35  32  12   3  17  10
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Priority Queue Implementation
                    </h3>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Heap-based Priority Queue</h4>
                            <CodeBox examples={priorityQueueExample} title="Priority Queue using Max-Heap" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Advantages:</strong> O(log n) insertion and removal, O(1) access to highest priority element, 
                                    space-efficient array storage, and guaranteed performance regardless of input order.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        HeapSort Algorithm
                    </h3>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-yellow-600 bg-yellow-900/20 p-5">
                            <h4 className="text-lg font-bold text-yellow-300 mb-3">Sorting with Heaps</h4>
                            <CodeBox examples={heapSortExample} title="HeapSort Implementation" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Process:</strong> (1) Build max-heap from unsorted array, (2) Repeatedly extract maximum and place at end. 
                                    Time complexity: <strong>O(n log n)</strong>, Space complexity: <strong>O(1)</strong> - in-place sorting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Heap Performance Analysis
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Operation</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Time Complexity</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Description</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Use Case</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-green-400 font-medium">Insert</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n)</td>
                                    <td className="px-4 py-3 text-gray-300">Add element and bubble up</td>
                                    <td className="px-4 py-3 text-gray-300">Priority queue operations</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-blue-400 font-medium">Remove Max/Min</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n)</td>
                                    <td className="px-4 py-3 text-gray-300">Remove root and bubble down</td>
                                    <td className="px-4 py-3 text-gray-300">Extract highest priority</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Peek Max/Min</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)</td>
                                    <td className="px-4 py-3 text-gray-300">Access root without removal</td>
                                    <td className="px-4 py-3 text-gray-300">Check highest priority</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-purple-400 font-medium">Build Heap</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">Convert array to heap</td>
                                    <td className="px-4 py-3 text-gray-300">HeapSort initialization</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-orange-400 font-medium">Search</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">Linear search required</td>
                                    <td className="px-4 py-3 text-gray-300">Not optimized for search</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                        <p className="text-sm text-gray-300">
                            <strong className="text-blue-400">Key Insight:</strong> Heaps are optimized for accessing the maximum/minimum element, 
                            making them perfect for priority-based operations but not general searching or arbitrary element access.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Practical Applications
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Operating System Process Scheduling</h4>
                            <p className="text-gray-300 mb-3">
                                Priority queues using heaps manage process execution order based on priority levels, ensuring 
                                high-priority processes get CPU time first.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Examples:</strong> Real-time systems, interrupt handling, multi-level feedback queues.
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Graph Algorithms</h4>
                            <CodeBox examples={jobSchedulingExample} title="Job Scheduling with Heaps" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Applications:</strong> Dijkstra's shortest path, Prim's minimum spanning tree, A* pathfinding, 
                                    and Huffman coding for data compression.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-bold text-purple-300 mb-3">Event Simulation Systems</h4>
                            <p className="text-gray-300 mb-3">
                                Discrete event simulators use priority queues to manage events scheduled at different times, 
                                processing them in chronological order.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Examples:</strong> Network simulators, queuing system models, game engines, discrete-time systems.
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-bold text-orange-300 mb-3">Data Stream Processing</h4>
                            <p className="text-gray-300 mb-3">
                                Finding top-K elements in data streams, median maintenance, and sliding window maximum/minimum operations 
                                all benefit from heap-based approaches.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Examples:</strong> Real-time analytics, top-K frequent items, streaming median calculation.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Heap vs Other Data Structures
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Data Structure</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Find Max/Min</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Insert</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Remove Max/Min</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Search</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Space</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-green-400 font-medium">Binary Heap</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-blue-400 font-medium">Sorted Array</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-purple-400 font-medium">Binary Search Tree</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-orange-400 font-medium">Unsorted Array</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">Key Takeaways</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">Heap Structure and Properties</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Complete Binary Tree:</strong> All levels filled except possibly the last, which fills left to right.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Heap Property:</strong> Max-heap has parent ≥ children, min-heap has parent ≤ children.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Array Storage:</strong> Efficient representation using simple parent-child index relationships.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Root Access:</strong> Maximum or minimum element always available at the root in O(1) time.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Algorithm Complexity</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Insertion:</strong> O(log n) - add to end and bubble up to restore heap property.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Removal:</strong> O(log n) - remove root, replace with last element, and bubble down.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Build Heap:</strong> O(n) - more efficient than n insertions for converting arrays to heaps.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>HeapSort:</strong> O(n log n) time, O(1) space - optimal comparison-based sorting algorithm.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">Priority Queue Implementation</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Efficient Operations:</strong> O(log n) insert and remove vs O(n) for unsorted lists.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Space Efficient:</strong> Array-based storage with no pointer overhead unlike linked structures.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Cache Friendly:</strong> Sequential array access patterns improve memory performance.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Priority Handling:</strong> Store (priority, data) tuples to handle complex priority schemes.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-3">Real-World Applications</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Operating Systems:</strong> Process scheduling, interrupt handling, and resource management.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Graph Algorithms:</strong> Dijkstra's shortest path, Prim's MST, and A* pathfinding.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Data Processing:</strong> Top-K problems, median maintenance, and streaming algorithms.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Event Systems:</strong> Discrete event simulation and time-based scheduling systems.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Design Considerations</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Use Max-Heap:</strong> When frequently accessing the largest element or highest priority items.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Use Min-Heap:</strong> When frequently accessing the smallest element or lowest cost items.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Avoid for Search:</strong> Heaps are not optimized for arbitrary element searching or access.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Consider Variants:</strong> Binary heaps, d-ary heaps, Fibonacci heaps for specialized requirements.</span>
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

export default Heap;