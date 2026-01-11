import CodeBox from '../components/CodeBox';

function BBPlusTree() {
    const bTreeSearchExample = [
        {
            language: 'python',
            code: `# B Tree Search Algorithm
def search(node, key):
    # Start at root node and perform binary search on keys
    i = 0
    while i < node.num_keys and key > node.keys[i]:
        i += 1
    
    # If key found, return success
    if i < node.num_keys and key == node.keys[i]:
        return node, i
    
    # If leaf node and key not found, search unsuccessful
    if node.is_leaf:
        return None, -1
    
    # Follow required branch to next node and repeat
    return search(node.children[i], key)`,
        },
    ];

    const bTreeInsertExample = [
        {
            language: 'python',
            code: `# B Tree Insertion Algorithm
def insert(root, key):
    # If root is full, create new root
    if is_full(root):
        new_root = Node()
        new_root.children[0] = root
        split_child(new_root, 0)
        root = new_root
    
    # Insert key into non-full node
    insert_non_full(root, key)
    return root

def insert_non_full(node, key):
    i = node.num_keys - 1
    
    if node.is_leaf:
        # Insert key in correct position in leaf
        while i >= 0 and key < node.keys[i]:
            node.keys[i + 1] = node.keys[i]
            i -= 1
        node.keys[i + 1] = key
        node.num_keys += 1
    else:
        # Find child to insert into
        while i >= 0 and key < node.keys[i]:
            i -= 1
        i += 1
        
        # Split child if full
        if is_full(node.children[i]):
            split_child(node, i)
            if key > node.keys[i]:
                i += 1
        
        insert_non_full(node.children[i], key)`,
        },
    ];

    const bPlusTreeInsertExample = [
        {
            language: 'python',
            code: `# B+ Tree Insertion Algorithm
def insert(root, key, data):
    # Find leaf node where key should be inserted
    leaf = find_leaf(root, key)
    
    # If leaf has space, insert key directly
    if leaf.num_keys < order - 1:
        insert_in_leaf(leaf, key, data)
        return root
    
    # Leaf is full, split required
    new_leaf = split_leaf(leaf, key, data)
    
    # Copy first key of new leaf to parent (not move)
    copy_key = new_leaf.keys[0]
    
    # Insert copy_key into parent
    return insert_in_parent(leaf, copy_key, new_leaf)

def split_leaf(leaf, key, data):
    new_leaf = LeafNode()
    
    # Distribute keys evenly between old and new leaf
    mid = (order + 1) // 2
    
    # Insert new key in correct position
    temp_keys = insert_sorted(leaf.keys + [key], key)
    temp_data = insert_sorted(leaf.data + [data], data)
    
    # Split keys and data
    leaf.keys = temp_keys[:mid]
    leaf.data = temp_data[:mid]
    new_leaf.keys = temp_keys[mid:]
    new_leaf.data = temp_data[mid:]
    
    # Link new leaf in sequence
    new_leaf.next = leaf.next
    leaf.next = new_leaf
    
    return new_leaf`,
        },
    ];

    const bTreeDeleteExample = [
        {
            language: 'python',
            code: `# B Tree Deletion Algorithm
def delete(root, key):
    delete_key(root, key)
    
    # If root becomes empty, make its only child the new root
    if root.num_keys == 0:
        if not root.is_leaf:
            root = root.children[0]
    
    return root

def delete_key(node, key):
    i = find_key_index(node, key)
    
    if i < node.num_keys and node.keys[i] == key:
        if node.is_leaf:
            # Case 1: Key in leaf node
            remove_from_leaf(node, i)
        else:
            # Case 2: Key in internal node
            remove_from_non_leaf(node, i)
    else:
        if node.is_leaf:
            # Key not found
            return
        
        # Key may be in subtree
        flag = (i == node.num_keys)
        
        # If child has minimum keys, fill it first
        if node.children[i].num_keys < min_degree:
            fill(node, i)
        
        # Adjust index if needed
        if flag and i > node.num_keys:
            delete_key(node.children[i-1], key)
        else:
            delete_key(node.children[i], key)`,
        },
    ];

    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        B / B+ Tree
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">8% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    <strong>B Trees and B+ Trees</strong> are <strong>balanced multi-way search trees</strong> designed specifically for 
                    <strong>external storage systems</strong> like databases and file systems. Unlike binary search trees that work well in main memory, 
                    B Trees minimize disk accesses by storing multiple keys per node, making them ideal for large datasets that cannot fit entirely 
                    in memory. <strong>B+ Trees</strong> extend this concept by storing all data in leaf nodes and linking them sequentially, 
                    enabling both efficient random access and fast sequential scanning. This page covers B Tree fundamentals, algorithms, 
                    B* Trees, B+ Trees, and their critical role in database indexing systems.
                </p>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        External Information Retrieval Problem
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">The Challenge of Large Datasets</h4>
                            <p className="text-gray-300 mb-3">
                                <strong>Question:</strong> What happens when data is too large to fit entirely in main memory?
                            </p>
                            <p className="text-gray-300 mb-3">
                                <strong>Answer:</strong> Data must be stored externally in blocks on secondary storage (disk, SSD). 
                                Accessing external memory is significantly slower than main memory, so we need to <strong>minimize disk accesses</strong>.
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-300">
                                <li><strong>Main Memory Access:</strong> Nanoseconds (very fast).</li>
                                <li><strong>Disk Access:</strong> Milliseconds (thousands of times slower).</li>
                                <li><strong>Solution:</strong> Use B Trees to reduce the number of disk accesses required.</li>
                                <li><strong>Strategy:</strong> Store multiple keys per node to maximize information per disk access.</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Performance Comparison</h4>
                            <div className="space-y-3 text-gray-300">
                                <div><strong>2-3 Tree (1000 items):</strong> Maximum height of 10, requiring up to 10 disk accesses for search.</div>
                                <div><strong>B Tree (127 items per node):</strong> Can store 16,383 items in just 2 levels, requiring only 2 disk accesses.</div>
                                <div><strong>Impact:</strong> B Trees can reduce disk accesses by 80% or more compared to binary trees.</div>
                                <div><strong>Scalability:</strong> The larger the node capacity, the shorter the tree height becomes.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        B Tree Fundamentals
                    </h3>

                    <p className="text-gray-300 mb-6">
                        A <strong>B Tree of order m</strong> is a balanced multi-way search tree with specific properties that ensure optimal performance for external storage:
                    </p>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">B Tree Properties</h4>
                            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-300">
                                <li><strong>Root Node:</strong> Has either no children or between 2 and m children.</li>
                                <li><strong>Internal Nodes:</strong> Have between ⌈m/2⌉ and m children (at least half full).</li>
                                <li><strong>Leaf Nodes:</strong> All leaves are on the same level (perfectly balanced).</li>
                                <li><strong>Keys per Node:</strong> Between ⌈m/2⌉-1 and m-1 keys in each node.</li>
                                <li><strong>Search Property:</strong> Keys in each node are in sorted order.</li>
                            </ul>
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Example:</strong> A B Tree of order 5 has 2-5 children per internal node and 1-4 keys per node. 
                                    A 2-3 tree is actually a B Tree of order 3.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Why "B" Tree?</h4>
                            <p className="text-gray-300 mb-3">
                                Created by Rudolf Bayer, the "B" in B Tree has multiple possible meanings:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-300">
                                <li><strong>Balanced:</strong> All leaf nodes are on the same level.</li>
                                <li><strong>Bayer:</strong> Named after its creator Rudolf Bayer.</li>
                                <li><strong>Boeing:</strong> Boeing Scientific Research Labs where Bayer worked.</li>
                                <li><strong>Broad:</strong> Each node can have many children (not just 2).</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-5">
                            <h4 className="text-lg font-bold text-cyan-300 mb-3">B Tree Examples</h4>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300 space-y-2">
                                <div><strong>Binary Search Tree:</strong> B Tree of order 2 (complete).</div>
                                <div><strong>2-3 Tree:</strong> B Tree of order 3.</div>
                                <div><strong>2-3-4 Tree:</strong> B Tree of order 4.</div>
                                <div><strong>Database Index:</strong> Often B Trees of order 100-1000.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Two-Three Trees (2-3 Trees)
                    </h3>

                    <p className="text-gray-300 mb-6">
                        <strong>Two-Three trees</strong> are the simplest form of B Trees with order 3. They serve as an excellent introduction 
                        to balanced multi-way trees and demonstrate the fundamental principles that scale to larger B Trees used in database systems.
                    </p>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-violet-600 bg-violet-900/20 p-5">
                            <h4 className="text-lg font-bold text-violet-300 mb-3">2-3 Tree Properties and Structure</h4>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="space-y-3">
                                    <h5 className="font-bold text-violet-200 mb-2">Node Types:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• <strong>2-node:</strong> Contains 1 key and 2 children.</li>
                                        <li>• <strong>3-node:</strong> Contains 2 keys and 3 children.</li>
                                        <li>• <strong>No other node types allowed</strong>.</li>
                                        <li>• All leaf nodes at same level (balanced).</li>
                                    </ul>
                                </div>
                                <div className="space-y-3">
                                    <h5 className="font-bold text-violet-200 mb-2">Key Properties:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• <strong>Perfect balance:</strong> All leaves same depth.</li>
                                        <li>• <strong>Inorder traversal:</strong> Produces sorted sequence.</li>
                                        <li>• <strong>Height:</strong> O(log n) guaranteed.</li>
                                        <li>• <strong>Search:</strong> O(log n) time complexity.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Visual Structure:</strong> 2-node: [key] → left | right; 3-node: [key1|key2] → left | middle | right
                            </div>
                        </div>

                        <div className="rounded-lg border border-emerald-600 bg-emerald-900/20 p-5">
                            <h4 className="text-lg font-bold text-emerald-300 mb-3">2-3 Tree Operations Implementation</h4>
                            <CodeBox examples={[{
                                language: 'python',
                                code: `# 2-3 Tree Implementation
class TwoThreeNode:
    def __init__(self):
        self.keys = []  # 1 or 2 keys
        self.children = []  # 2 or 3 children (empty for leaf)
        self.is_leaf = True
    
    def is_2_node(self):
        return len(self.keys) == 1
    
    def is_3_node(self):
        return len(self.keys) == 2
    
    def is_full(self):
        return len(self.keys) == 2

class TwoThreeTree:
    def __init__(self):
        self.root = None
    
    def search(self, key):
        """Search for key in 2-3 tree - O(log n)"""
        return self._search_node(self.root, key)
    
    def _search_node(self, node, key):
        if node is None:
            return False
        
        # Check each key in current node
        for i, node_key in enumerate(node.keys):
            if key == node_key:
                return True
            elif key < node_key:
                # Key would be in left subtree
                if node.is_leaf:
                    return False
                return self._search_node(node.children[i], key)
        
        # Key is larger than all keys in node
        if node.is_leaf:
            return False
        return self._search_node(node.children[-1], key)
    
    def insert(self, key):
        """Insert key into 2-3 tree"""
        if self.root is None:
            self.root = TwoThreeNode()
            self.root.keys = [key]
            return
        
        # Insert and handle potential root split
        result = self._insert_node(self.root, key)
        if result is not None:  # Root was split
            new_root = TwoThreeNode()
            new_root.keys = [result[0]]
            new_root.children = [result[1], result[2]]
            new_root.is_leaf = False
            self.root = new_root
    
    def _insert_node(self, node, key):
        """
        Insert key into node. Returns None if no split needed,
        or (promoted_key, left_child, right_child) if split occurred
        """
        if node.is_leaf:
            return self._insert_in_leaf(node, key)
        
        # Find correct child to insert into
        child_index = 0
        while child_index < len(node.keys) and key > node.keys[child_index]:
            child_index += 1
        
        # Recursively insert in appropriate child
        result = self._insert_node(node.children[child_index], key)
        
        if result is None:  # No split in child
            return None
        
        # Child was split, need to promote key to this node
        promoted_key, left_child, right_child = result
        return self._insert_promoted_key(node, promoted_key, 
                                       left_child, right_child, child_index)
    
    def _insert_in_leaf(self, node, key):
        """Insert key in leaf node"""
        if key in node.keys:
            return None  # Duplicate key
        
        if not node.is_full():  # Node has space
            node.keys.append(key)
            node.keys.sort()
            return None
        
        # Node is full (2 keys), need to split
        temp_keys = node.keys + [key]
        temp_keys.sort()
        
        # Create new nodes
        left = TwoThreeNode()
        right = TwoThreeNode()
        
        left.keys = [temp_keys[0]]
        right.keys = [temp_keys[2]]
        
        # Middle key gets promoted
        return (temp_keys[1], left, right)

# Example usage and operations
tree = TwoThreeTree()

# Insert sequence: 10, 20, 30, 40, 50
keys_to_insert = [10, 20, 30, 40, 50]
for key in keys_to_insert:
    tree.insert(key)
    print(f"Inserted {key}")

# Search operations
search_keys = [20, 25, 40]
for key in search_keys:
    found = tree.search(key)
    print(f"Search {key}: {'Found' if found else 'Not found'}")

# Height analysis
def calculate_height(node):
    if node is None or node.is_leaf:
        return 0
    return 1 + max(calculate_height(child) for child in node.children)

print(f"Tree height: {calculate_height(tree.root)}")
print(f"Theoretical max height for n nodes: O(log n)")`
                            }]} title="2-3 Tree Implementation" />
                        </div>

                        <div className="rounded-lg border border-amber-600 bg-amber-900/20 p-5">
                            <h4 className="text-lg font-bold text-amber-300 mb-3">2-3 Tree Insertion Process</h4>
                            <div className="space-y-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-amber-200 mb-2">Step-by-Step Insertion Algorithm:</h5>
                                    <ol className="text-sm text-gray-300 space-y-2 list-decimal list-inside">
                                        <li><strong>Find leaf position:</strong> Search down tree to locate where key belongs</li>
                                        <li><strong>Try insert in leaf:</strong> If leaf has space (1 key), simply add new key</li>
                                        <li><strong>Split full leaf:</strong> If leaf full (2 keys), create two new leaves</li>
                                        <li><strong>Promote middle key:</strong> Send middle key up to parent level</li>
                                        <li><strong>Recurse upward:</strong> Repeat process at parent level if needed</li>
                                        <li><strong>Create new root:</strong> If root splits, tree height increases by one</li>
                                    </ol>
                                </div>
                                
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-amber-200 mb-2">Example: Inserting 10, 20, 30, 40, 50</h5>
                                    <div className="grid md:grid-cols-2 gap-3 text-xs text-gray-300">
                                        <div>
                                            <strong>Step 1:</strong> Insert 10 → [10]<br/>
                                            <strong>Step 2:</strong> Insert 20 → [10|20]<br/>
                                            <strong>Step 3:</strong> Insert 30 → Split needed
                                        </div>
                                        <div>
                                            <strong>Result:</strong> Tree with root [20], children [10] and [30]<br/>
                                            <strong>Continue:</strong> Further insertions may cause more splits<br/>
                                            <strong>Balance:</strong> Tree stays perfectly balanced
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-teal-600 bg-teal-900/20 p-5">
                            <h4 className="text-lg font-bold text-teal-300 mb-3">2-3 Trees vs Binary Search Trees</h4>
                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-800">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-white font-semibold">Aspect</th>
                                            <th className="px-4 py-3 text-left text-gray-300">2-3 Tree</th>
                                            <th className="px-4 py-3 text-left text-gray-300">Binary Search Tree</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-800/50">
                                        <tr className="border-t border-gray-700">
                                            <td className="px-4 py-3 text-teal-400 font-medium">Balance Guarantee</td>
                                            <td className="px-4 py-3 text-gray-300">Always perfectly balanced</td>
                                            <td className="px-4 py-3 text-gray-300">Can become unbalanced (worst: linear)</td>
                                        </tr>
                                        <tr className="border-t border-gray-700">
                                            <td className="px-4 py-3 text-blue-400 font-medium">Height</td>
                                            <td className="px-4 py-3 text-gray-300">O(log n) guaranteed</td>
                                            <td className="px-4 py-3 text-gray-300">O(n) worst case, O(log n) average</td>
                                        </tr>
                                        <tr className="border-t border-gray-700">
                                            <td className="px-4 py-3 text-green-400 font-medium">Search Time</td>
                                            <td className="px-4 py-3 text-gray-300">O(log n) worst case</td>
                                            <td className="px-4 py-3 text-gray-300">O(n) worst case, O(log n) average</td>
                                        </tr>
                                        <tr className="border-t border-gray-700">
                                            <td className="px-4 py-3 text-purple-400 font-medium">Insertion Complexity</td>
                                            <td className="px-4 py-3 text-gray-300">O(log n) with splitting logic</td>
                                            <td className="px-4 py-3 text-gray-300">O(n) worst case, O(log n) average</td>
                                        </tr>
                                        <tr className="border-t border-gray-700">
                                            <td className="px-4 py-3 text-orange-400 font-medium">Implementation</td>
                                            <td className="px-4 py-3 text-gray-300">More complex (node splitting)</td>
                                            <td className="px-4 py-3 text-gray-300">Simpler implementation</td>
                                        </tr>
                                        <tr className="border-t border-gray-700">
                                            <td className="px-4 py-3 text-yellow-400 font-medium">Memory Usage</td>
                                            <td className="px-4 py-3 text-gray-300">Higher per node (multiple keys)</td>
                                            <td className="px-4 py-3 text-gray-300">Lower per node (single key)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-3 p-3 bg-gray-800/50 rounded text-sm text-gray-300">
                                <strong className="text-teal-400">Key Insight:</strong> 2-3 Trees guarantee consistent performance at the cost of 
                                more complex implementation, making them ideal for applications requiring predictable response times.
                            </div>
                        </div>

                        <div className="rounded-lg border border-indigo-600 bg-indigo-900/20 p-5">
                            <h4 className="text-lg font-bold text-indigo-300 mb-3">From 2-3 Trees to B Trees</h4>
                            <p className="text-gray-300 mb-3">
                                2-3 Trees demonstrate the core concepts that scale to general B Trees used in database systems:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2 text-sm text-gray-300">
                                    <div><strong className="text-indigo-200">Scaling Principles:</strong></div>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li>Multiple keys per node reduces tree height</li>
                                        <li>Balanced structure guarantees performance</li>
                                        <li>Node splitting maintains balance automatically</li>
                                        <li>Bottom-up insertion preserves ordering</li>
                                    </ul>
                                </div>
                                <div className="space-y-2 text-sm text-gray-300">
                                    <div><strong className="text-indigo-200">Database Applications:</strong></div>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li>B Trees use orders 100-1000 for disk efficiency</li>
                                        <li>Each node matches disk block size</li>
                                        <li>Reduces disk I/O operations significantly</li>
                                        <li>Foundation for database index structures</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        B Tree Algorithms
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Searching in B Trees</h4>
                            <CodeBox examples={bTreeSearchExample} title="B Tree Search Algorithm" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Process:</strong> (1) Binary search within each node, (2) Follow appropriate branch if not found, 
                                    (3) Repeat until key found or leaf reached. Time complexity: O(log m) per node × O(log_m n) nodes = O(log n).
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Insertion in B Trees</h4>
                            <CodeBox examples={bTreeInsertExample} title="B Tree Insertion Algorithm" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Process:</strong> (1) Find correct leaf position, (2) Insert if space available, 
                                    (3) If node full, split into two nodes and promote middle key to parent. 
                                    Splitting may propagate up the tree, potentially creating a new root.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-red-600 bg-red-900/20 p-5">
                            <h4 className="text-lg font-bold text-red-300 mb-3">Deletion in B Trees</h4>
                            <CodeBox examples={bTreeDeleteExample} title="B Tree Deletion Algorithm" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Complex Cases:</strong> (1) Key in leaf: simple removal, (2) Key in internal node: replace with predecessor/successor, 
                                    (3) Underflow: borrow from sibling or merge nodes. May require tree height reduction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        B Tree Capacity Analysis
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Tree Type</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Order</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Keys per Node</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Height for 1M Keys</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Max Disk Accesses</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Binary Search Tree</td>
                                    <td className="px-4 py-3 text-gray-300">2</td>
                                    <td className="px-4 py-3 text-gray-300">1</td>
                                    <td className="px-4 py-3 text-gray-300">20 (balanced)</td>
                                    <td className="px-4 py-3 text-gray-300">20</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">B Tree (Order 10)</td>
                                    <td className="px-4 py-3 text-gray-300">10</td>
                                    <td className="px-4 py-3 text-gray-300">1-9</td>
                                    <td className="px-4 py-3 text-gray-300">7</td>
                                    <td className="px-4 py-3 text-gray-300">7</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">B Tree (Order 100)</td>
                                    <td className="px-4 py-3 text-gray-300">100</td>
                                    <td className="px-4 py-3 text-gray-300">1-99</td>
                                    <td className="px-4 py-3 text-gray-300">4</td>
                                    <td className="px-4 py-3 text-gray-300">4</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">B Tree (Order 1000)</td>
                                    <td className="px-4 py-3 text-gray-300">1000</td>
                                    <td className="px-4 py-3 text-gray-300">1-999</td>
                                    <td className="px-4 py-3 text-gray-300">3</td>
                                    <td className="px-4 py-3 text-gray-300">3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                        <p className="text-sm text-gray-300">
                            <strong className="text-orange-400">Observation:</strong> Higher order B Trees dramatically reduce tree height and disk accesses. 
                            A B Tree of order 1000 needs only 3 disk accesses to search among 1 million keys!
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        B* Trees and Variants
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-600 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">B* Tree Improvements</h4>
                            <p className="text-gray-300 mb-3">
                                B* Trees improve upon B Trees by requiring nodes to be <strong>at least 2/3 full</strong> (instead of 1/2 full):
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-300">
                                <li><strong>Higher Fill Factor:</strong> Better space utilization, fewer nodes needed.</li>
                                <li><strong>Delayed Splitting:</strong> When a node overflows, keys are redistributed with siblings first.</li>
                                <li><strong>Three-Way Splits:</strong> When splitting is required, one node splits into three.</li>
                                <li><strong>Fewer Disk Accesses:</strong> Higher fill factor means shorter trees.</li>
                            </ul>
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Example:</strong> When inserting into a full node, B* Trees first check if a sibling has space 
                                    and redistribute keys before splitting.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-600 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">B** Trees and B^n Trees</h4>
                            <div className="space-y-3 text-gray-300">
                                <div><strong>B** Tree:</strong> Requires nodes to be at least 3/4 (75%) full.</div>
                                <div><strong>B^n Tree:</strong> General form where nodes must be (n+1)/(n+2) full.</div>
                                <div><strong>Configurable Fill Factor:</strong> Database systems often let users choose fill factor between 50% and 100%.</div>
                                <div><strong>Trade-offs:</strong> Higher fill factors reduce space but may increase insertion complexity.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        B+ Tree Architecture
                    </h3>

                    <p className="text-gray-300 mb-4">
                        B+ Trees address a critical limitation of B Trees: <strong>sequential access efficiency</strong>. 
                        While B Trees excel at random access, sequential operations (like printing all keys in order) are inefficient.
                    </p>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">B+ Tree Characteristics</h4>
                            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-300">
                                <li><strong>Data Only in Leaves:</strong> All actual data records stored only in leaf nodes.</li>
                                <li><strong>Internal Nodes as Index:</strong> Non-leaf nodes contain only keys for navigation.</li>
                                <li><strong>Linked Leaves:</strong> Leaf nodes connected in a linked list for sequential access.</li>
                                <li><strong>Key Duplication:</strong> Keys may appear in both internal nodes and leaves.</li>
                                <li><strong>ISAM + B Tree:</strong> Combines indexed and sequential access methods.</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">B+ Tree Advantages</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Fast Sequential Access:</strong> Traverse linked leaf nodes for range queries</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Consistent Search Time:</strong> All data at same level (leaves only)</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Better for Range Queries:</strong> Find start point, then traverse sequentially</span>
                                    </li>
                                </ul>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Database Friendly:</strong> Separate index from data file</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Simpler Deletion:</strong> Data only in leaves</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Higher Fanout:</strong> Internal nodes can store more keys</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        B+ Tree Algorithms
                    </h3>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">B+ Tree Insertion</h4>
                            <CodeBox examples={bPlusTreeInsertExample} title="B+ Tree Insertion Algorithm" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Key Difference:</strong> When splitting leaf nodes, the first key of the new leaf is 
                                    <em>copied</em> (not moved) to the parent. This maintains the index while keeping data in leaves.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-bold text-orange-300 mb-3">B+ Tree Deletion Process</h4>
                            <div className="space-y-3 text-gray-300">
                                <div><strong>Simple Case:</strong> Delete from leaf with sufficient keys - just remove and reorder.</div>
                                <div><strong>Index Keys:</strong> Keys in internal nodes can remain even after deletion from leaves.</div>
                                <div><strong>Underflow:</strong> Redistribute keys between siblings or merge leaf nodes.</div>
                                <div><strong>Propagation:</strong> Merging may cause underflow in internal nodes requiring further merging.</div>
                            </div>
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Advantage:</strong> Since data is only in leaves, deletion is simpler than B Trees. 
                                    Internal nodes serve purely as navigation aids.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        B Tree vs B+ Tree Comparison
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Aspect</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold">B Tree</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold">B+ Tree</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Data Storage</td>
                                    <td className="px-4 py-3 text-gray-300">Internal and leaf nodes</td>
                                    <td className="px-4 py-3 text-gray-300">Leaf nodes only</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Key Duplication</td>
                                    <td className="px-4 py-3 text-gray-300">No duplicate keys</td>
                                    <td className="px-4 py-3 text-gray-300">Keys duplicated in internal nodes</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Sequential Access</td>
                                    <td className="px-4 py-3 text-gray-300">Requires full tree traversal</td>
                                    <td className="px-4 py-3 text-gray-300">Linked leaf nodes enable fast scanning</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Search Consistency</td>
                                    <td className="px-4 py-3 text-gray-300">Variable (may find in internal node)</td>
                                    <td className="px-4 py-3 text-gray-300">Consistent (always search to leaf)</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Deletion Complexity</td>
                                    <td className="px-4 py-3 text-gray-300">Complex (data in internal nodes)</td>
                                    <td className="px-4 py-3 text-gray-300">Simpler (data only in leaves)</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Range Queries</td>
                                    <td className="px-4 py-3 text-gray-300">Inefficient inorder traversal</td>
                                    <td className="px-4 py-3 text-gray-300">Efficient sequential leaf traversal</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Database Use</td>
                                    <td className="px-4 py-3 text-gray-300">Less common</td>
                                    <td className="px-4 py-3 text-gray-300">Standard for database indexes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Real-World Database Applications
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Database Index Systems</h4>
                            <p className="text-gray-300 mb-3">
                                B+ Trees are the <strong>standard indexing method</strong> in relational database management systems:
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300 space-y-2">
                                <div><strong>MySQL InnoDB:</strong> Uses B+ Trees for primary and secondary indexes.</div>
                                <div><strong>PostgreSQL:</strong> B+ Tree indexes for most data types.</div>
                                <div><strong>Oracle Database:</strong> B+ Tree indexes are the default.</div>
                                <div><strong>SQL Server:</strong> Clustered and non-clustered indexes use B+ Trees.</div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">File System Applications</h4>
                            <p className="text-gray-300 mb-3">
                                Modern file systems use B+ Tree variants for directory structures and metadata:
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300 space-y-2">
                                <div><strong>NTFS (Windows):</strong> B+ Trees for file allocation tables.</div>
                                <div><strong>HFS+ (macOS):</strong> B+ Trees for catalog files and extent overflow files.</div>
                                <div><strong>XFS (Linux):</strong> B+ Trees for directory organization.</div>
                                <div><strong>ZFS:</strong> Modified B+ Trees for block allocation.</div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-600 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-bold text-purple-300 mb-3">Capacity Example: B+ Tree Order 200</h4>
                            <div className="space-y-3 text-gray-300">
                                <div><strong>2-Level Tree:</strong> Can store ~9,900 records (100 leaves × 99 keys each).</div>
                                <div><strong>3-Level Tree:</strong> Can store ~1 million keys.</div>
                                <div><strong>4-Level Tree:</strong> Can store ~100 million keys.</div>
                                <div><strong>Real Impact:</strong> Massive datasets searchable with only 2-4 disk accesses.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-linear-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">Key Takeaways</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">External Storage Optimization</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Disk Access Minimization:</strong> B Trees reduce disk accesses by storing multiple keys per node.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Balanced Structure:</strong> All leaf nodes at same level ensures consistent performance.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>High Fanout:</strong> More children per node means shorter trees and fewer disk accesses.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Order Matters:</strong> Higher order B Trees dramatically reduce tree height.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Algorithm Complexity</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Search Time:</strong> O(log_m n) where m is order and n is number of keys.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Insertion Strategy:</strong> Insert at leaf level, split and promote when full.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Deletion Complexity:</strong> May require borrowing, merging, and tree height reduction.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Rebalancing:</strong> Operations may propagate from leaves to root.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">B+ Tree Advantages</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Sequential Access:</strong> Linked leaf nodes enable efficient range queries and scans.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Index Separation:</strong> Internal nodes serve as pure index, data only in leaves.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Database Standard:</strong> Preferred for database indexing due to sequential access efficiency.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Consistent Search:</strong> All searches go to leaf level for predictable performance.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-3">Practical Applications</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Database Indexes:</strong> Primary indexing method in MySQL, PostgreSQL, Oracle, SQL Server.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>File Systems:</strong> Directory structures and metadata organization in NTFS, HFS+, XFS.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Large-Scale Storage:</strong> Any system requiring efficient access to massive datasets.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>ISAM Implementation:</strong> Combines indexed and sequential access methods.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Design Considerations</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Order Selection:</strong> Balance between node size, disk page size, and fanout.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Fill Factor:</strong> B* Trees and variants optimize space utilization.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Access Patterns:</strong> Choose B+ Trees for frequent range queries and sequential access.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Memory vs Disk:</strong> Binary trees for RAM, B Trees for external storage.</span>
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

export default BBPlusTree;