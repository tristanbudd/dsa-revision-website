import CodeBox from '../components/CodeBox';

function BinaryTree() {
    const treeNodeExample = [
        {
            language: 'python',
            code: `class TreeNode:
    def __init__(self, data):
        self.data = data        # The value stored in the node
        self.left = None        # A reference to the left child (initially None)
        self.right = None       # A reference to the right child (initially None)

# Creating and using nodes
root = TreeNode(10)             # Create root node
# Adding left and right children
root.left = TreeNode(5)
root.right = TreeNode(15)
# Adding children to the left node
root.left.left = TreeNode(3)
root.left.right = TreeNode(7)
# Adding children to the right node
root.right.left = TreeNode(12)
root.right.right = TreeNode(18)`,
        },
    ];

    const searchBSTExample = [
        {
            language: 'python',
            code: `def search_bst(root, item):
    # Check if the tree (or subtree) exists
    if root is None:
        return False            # The tree is empty or the item is not found
    
    # Check if the current node contains the item
    if root.data == item:
        return True             # Item is located
    
    # If the item is less than the current node's data, search the left subtree
    elif item < root.data:
        return search_bst(root.left, item)      # Recursive call to the left subtree
    
    # If the item is greater than the current node's data, search the right subtree
    else:
        return search_bst(root.right, item)     # Recursive call to the right subtree`,
        },
    ];

    const insertBSTExample = [
        {
            language: 'python',
            code: `def insert_bst(root, item):
    # If the tree is empty, the new node becomes the root
    if root is None:
        return TreeNode(item)
    
    # If the item is less than the current node's data, insert into the left subtree
    if item < root.data:
        root.left = insert_bst(root.left, item)
    
    # If the item is greater than the current node's data, insert into the right subtree
    elif item > root.data:
        root.right = insert_bst(root.right, item)
    
    # If the item is already present, it's a duplicate (do nothing or handle as needed)
    else:
        print("Duplicate item. Insertion ignored.")
    
    return root                 # Return the unchanged root pointer`,
        },
    ];

    const traversalExamples = [
        {
            language: 'python',
            code: `# PreOrder Traversal (VLR: Visit, Left, Right)
def preorder_traversal(root):
    if root is not None:        # If the tree (or subtree) exists
        print(root.data)        # Visit the root node
        preorder_traversal(root.left)   # Traverse the left subtree
        preorder_traversal(root.right)  # Traverse the right subtree

# InOrder Traversal (LVR: Left, Visit, Right)
def inorder_traversal(root):
    if root is not None:        # If the tree (or subtree) exists
        inorder_traversal(root.left)    # Traverse the left subtree
        print(root.data)        # Visit the root node
        inorder_traversal(root.right)   # Traverse the right subtree

# PostOrder Traversal (LRV: Left, Right, Visit)
def postorder_traversal(root):
    if root is not None:        # If the tree (or subtree) exists
        postorder_traversal(root.left)  # Traverse the left subtree
        postorder_traversal(root.right) # Traverse the right subtree
        print(root.data)        # Visit the root node`,
        },
    ];

    const breadthFirstExample = [
        {
            language: 'python',
            code: `from collections import deque

def breadth_first_traversal(root):
    if root is None:
        return                  # Empty tree
    
    queue = deque([root])       # Initialize queue with root node
    
    while queue:                # While there are nodes to process
        current = queue.popleft()   # Get the front node from queue
        print(current.data)     # Visit the current node
        
        # Add children to queue (left first, then right)
        if current.left:
            queue.append(current.left)
        if current.right:
            queue.append(current.right)`,
        },
    ];

    const balancedBSTExample = [
        {
            language: 'python',
            code: `def build_balanced_bst(sorted_list):
    if not sorted_list:
        return None             # Empty list, return None
    
    mid = len(sorted_list) // 2 # Find the middle index
    
    # Create the root node with the middle element
    root = TreeNode(sorted_list[mid])
    
    # Recursively build left and right subtrees
    root.left = build_balanced_bst(sorted_list[:mid])       # Left half
    root.right = build_balanced_bst(sorted_list[mid+1:])    # Right half
    
    return root

# Example usage:
# sorted_data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# balanced_tree = build_balanced_bst(sorted_data)`,
        },
    ];

    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        Hierarchical Data Structures - Binary Trees
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">12% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    Hierarchical data structures organize data in a <strong>tree-like</strong> format where each node has a unique predecessor and multiple successors. 
                    <strong> Binary Trees</strong> are specialized tree structures where each node has at most two children, making them fundamental for efficient 
                    <strong> searching, insertion, and deletion</strong> operations. This page covers <strong>Binary Search Trees</strong>, tree terminology, 
                    traversal algorithms, balancing techniques, and practical applications including expression parsing, file systems, and database indexing.
                </p>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Tree Terminology
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Basic Tree Components</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="space-y-2 ml-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Node:</strong> A single element containing data and references to child nodes.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Root:</strong> The first node of the tree with no predecessor.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Leaf:</strong> Terminal nodes with no children (subtrees).</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Branch:</strong> A link connecting two nodes in the tree.</span>
                                    </li>
                                </ul>
                                <ul className="space-y-2 ml-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Subtree:</strong> A tree rooted at any internal node of the original tree.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Level:</strong> Number of branches from the root to a node.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Height:</strong> Number of nodes on the longest path from root to leaf.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Degree:</strong> Number of subtrees (children) of a node.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Node Structure</h4>
                            <CodeBox examples={treeNodeExample} title="TreeNode Class Implementation" />
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Types of Binary Trees
                    </h3>

                    <div className="space-y-8">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-6">
                            <h4 className="text-2xl font-bold text-blue-400 mb-4">1. Binary Tree</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                A <strong>Binary Tree</strong> is a hierarchical data structure where each node has <strong>at most two children</strong>, 
                                typically referred to as the <strong>left child</strong> and <strong>right child</strong>. This constraint creates a 
                                foundation for efficient tree algorithms and recursive processing.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4">
                                <h5 className="font-bold text-blue-300 mb-2">Visual Representation:</h5>
                                <div className="flex items-center justify-center py-2 px-6 bg-gray-800/50 rounded overflow-x-auto">
                                    <svg width="300" height="200" viewBox="0 0 300 150" className="text-blue-400">
                                        <circle cx="150" cy="40" r="20" fill="#3b82f6" stroke="#60a5fa" strokeWidth="2"/>
                                        <text x="150" y="47" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">A</text>

                                        <circle cx="100" cy="120" r="20" fill="#3b82f6" stroke="#60a5fa" strokeWidth="2"/>
                                        <text x="100" y="127" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">B</text>

                                        <circle cx="200" cy="120" r="20" fill="#3b82f6" stroke="#60a5fa" strokeWidth="2"/>
                                        <text x="200" y="127" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">C</text>

                                        <line x1="135" y1="55" x2="115" y2="105" stroke="#60a5fa" strokeWidth="2"/>
                                        <line x1="165" y1="55" x2="185" y2="105" stroke="#60a5fa" strokeWidth="2"/>

                                        <text x="75" y="95" fill="#60a5fa" fontSize="12">Left</text>
                                        <text x="210" y="95" fill="#60a5fa" fontSize="12">Right</text>
                                    </svg>
                                </div>
                                <p className="text-xs text-gray-400 text-center mb-4">Each node has at most two children: left and right.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-blue-300 mb-2">Characteristics:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Maximum two children per node.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Recursive structure enables elegant algorithms.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Supports efficient tree traversal methods.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-blue-300 mb-2">Applications:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Expression parsing and evaluation.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>File system hierarchies.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Decision trees and game trees.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-6">
                            <h4 className="text-2xl font-bold text-green-400 mb-4">2. Binary Search Tree (BST)</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                A <strong>Binary Search Tree</strong> is a specialized binary tree that maintains a <strong>specific ordering property</strong>: 
                                for each node, all values in the <strong>left subtree are smaller</strong> and all values in the 
                                <strong> right subtree are larger</strong>. This property enables efficient searching, insertion, and deletion operations.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4">
                                <h5 className="font-bold text-green-300 mb-2">Visual Representation:</h5>
                                <div className="flex items-center justify-center py-2 px-6 bg-gray-800/50 rounded overflow-x-auto">
                                    <svg width="400" height="280" viewBox="0 0 400 220" className="text-green-400">
                                        <circle cx="200" cy="40" r="22" fill="#10b981" stroke="#34d399" strokeWidth="2"/>
                                        <text x="200" y="47" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">50</text>

                                        <circle cx="120" cy="100" r="20" fill="#10b981" stroke="#34d399" strokeWidth="2"/>
                                        <text x="120" y="107" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">30</text>
                                        
                                        <circle cx="280" cy="100" r="20" fill="#10b981" stroke="#34d399" strokeWidth="2"/>
                                        <text x="280" y="107" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">70</text>

                                        <circle cx="80" cy="160" r="18" fill="#10b981" stroke="#34d399" strokeWidth="2"/>
                                        <text x="80" y="167" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">20</text>
                                        
                                        <circle cx="160" cy="160" r="18" fill="#10b981" stroke="#34d399" strokeWidth="2"/>
                                        <text x="160" y="167" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">40</text>
                                        
                                        <circle cx="240" cy="160" r="18" fill="#10b981" stroke="#34d399" strokeWidth="2"/>
                                        <text x="240" y="167" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">60</text>
                                        
                                        <circle cx="320" cy="160" r="18" fill="#10b981" stroke="#34d399" strokeWidth="2"/>
                                        <text x="320" y="167" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">80</text>

                                        <line x1="185" y1="55" x2="135" y2="85" stroke="#34d399" strokeWidth="2"/>
                                        <line x1="215" y1="55" x2="265" y2="85" stroke="#34d399" strokeWidth="2"/>
                                        
                                        <line x1="110" y1="115" x2="90" y2="145" stroke="#34d399" strokeWidth="2"/>
                                        <line x1="130" y1="115" x2="150" y2="145" stroke="#34d399" strokeWidth="2"/>
                                        
                                        <line x1="270" y1="115" x2="250" y2="145" stroke="#34d399" strokeWidth="2"/>
                                        <line x1="290" y1="115" x2="310" y2="145" stroke="#34d399" strokeWidth="2"/>

                                        <text x="60" y="200" fill="#34d399" fontSize="10" textAnchor="middle">&lt; 30</text>
                                        <text x="140" y="200" fill="#34d399" fontSize="10" textAnchor="middle">&gt; 30</text>
                                        <text x="220" y="200" fill="#34d399" fontSize="10" textAnchor="middle">&lt; 70</text>
                                        <text x="300" y="200" fill="#34d399" fontSize="10" textAnchor="middle">&gt; 70</text>

                                        <text x="100" y="25" fill="#34d399" fontSize="10" textAnchor="middle">&lt; 50</text>
                                        <text x="300" y="25" fill="#34d399" fontSize="10" textAnchor="middle">&gt; 50</text>
                                    </svg>
                                </div>
                                <p className="text-xs text-gray-400 text-center mb-4">Left children &lt; Parent &lt; Right children at every level.</p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h5 className="text-lg font-semibold text-green-300 mb-2">Search Operation</h5>
                                    <CodeBox examples={searchBSTExample} title="BST Search Algorithm" />
                                </div>

                                <div>
                                    <h5 className="text-lg font-semibold text-green-300 mb-2">Insertion Operation</h5>
                                    <CodeBox examples={insertBSTExample} title="BST Insertion Algorithm" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-green-300 mb-2">BST Properties:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span>Left subtree values &lt; root value.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span>Right subtree values &gt; root value.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span>Both subtrees are also BSTs.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span>InOrder traversal yields sorted sequence.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-green-300 mb-2">Performance:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span>Average case: O(log n) for all operations.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-300 mt-0.5 font-bold">•</span>
                                            <span>Worst case: O(n) for unbalanced trees.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-300 mt-0.5 font-bold">•</span>
                                            <span>Space complexity: O(n).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-300 mt-0.5 font-bold">•</span>
                                            <span>Dynamic size with efficient operations.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-600 bg-purple-900/20 p-6">
                            <h4 className="text-2xl font-bold text-purple-400 mb-4">3. Full and Complete Binary Trees</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Special classifications of binary trees based on their <strong>structural completeness</strong>. 
                                <strong> Full trees</strong> have all internal nodes with exactly two children, while <strong>complete trees</strong> 
                                are filled level by level from left to right, optimizing space utilization and enabling array-based implementations.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-purple-300 mb-2">Full Binary Tree:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>Every internal node has exactly two children.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>All leaf nodes are at the same level.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>Maximizes nodes at each level.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>Number of nodes = 2^h - 1.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-purple-300 mb-2">Complete Binary Tree:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>All levels filled except possibly the last.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>Last level filled from left to right.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>Efficient array-based representation.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>Used in heap data structures.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-4 bg-purple-900/30 border border-purple-600 rounded p-3">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-purple-300">Note:</strong> Complete binary trees enable array-based implementations where 
                                    for node at index i: left child is at 2i+1, right child is at 2i+2, and parent is at (i-1)/2.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-6">
                            <h4 className="text-2xl font-bold text-orange-400 mb-4">4. Balanced Binary Search Trees</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                A <strong>balanced BST</strong> maintains <strong>roughly equal heights</strong> of left and right subtrees for every node, 
                                ensuring <strong>O(log n) performance</strong> for all operations. Unbalanced trees can degrade to linear structures, 
                                requiring balancing algorithms or careful construction techniques.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-orange-300 mb-2">Building Balanced BST from Sorted Data:</h5>
                                <CodeBox examples={balancedBSTExample} title="Balanced BST Construction" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-orange-300 mb-2">Balance Benefits:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                            <span>Guaranteed O(log n) operations.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                            <span>Consistent performance across data sets.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                            <span>Optimal height: ⌊log₂ n⌋.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                            <span>Prevents tree degeneration.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-orange-300 mb-2">Balancing Techniques:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                            <span>AVL Trees (height-balanced).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                            <span>Red-Black Trees (color-balanced).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                            <span>Splay Trees (access-based balancing).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                            <span>Careful construction from sorted data.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-4 bg-orange-900/30 border border-orange-600 rounded p-3">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-orange-300">Important:</strong> Inserting sorted data into a BST using standard algorithms 
                                    creates an unbalanced linear structure with O(n) operations. Always use balancing techniques for sorted input.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Tree Traversal Algorithms
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-6">
                            <h4 className="text-xl font-bold text-blue-400 mb-4">Depth-First Traversal (DFT)</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Depth-first traversal explores as far as possible along each branch before backtracking. 
                                Three main variants exist based on when the node is processed: <strong>PreOrder (VLR)</strong>, 
                                <strong>InOrder (LVR)</strong>, and <strong>PostOrder (LRV)</strong>.
                            </p>

                            <CodeBox examples={traversalExamples} title="Depth-First Traversal Methods" />

                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-blue-300 mb-2">PreOrder (VLR):</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Visit root first.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Used for tree copying.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Expression prefix notation.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-blue-300 mb-2">InOrder (LVR):</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Visits nodes in sorted order.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Used for BST sorting.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Expression infix notation.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-blue-300 mb-2">PostOrder (LRV):</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Visit children before parent.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Used for tree deletion.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Expression postfix notation.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-6">
                            <h4 className="text-xl font-bold text-green-400 mb-4">Breadth-First Traversal (BFT)</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Breadth-first traversal processes all nodes at depth d before processing nodes at depth d+1. 
                                This level-by-level approach uses a <strong>queue</strong> data structure and is useful for finding 
                                the shortest path or minimum depth in unweighted trees.
                            </p>

                            <CodeBox examples={breadthFirstExample} title="Breadth-First Traversal Implementation" />

                            <div className="bg-gray-800/50 rounded p-4 mt-4">
                                <h5 className="font-bold text-green-300 mb-2">BFT Applications:</h5>
                                <ul className="space-y-1 text-sm text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span>Level-order tree printing and serialization.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span>Finding minimum depth or shortest path in trees.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span>Binary tree completeness verification.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span>Graph algorithms foundation (BFS).</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Binary Tree Operations
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-r border-gray-700">Operation</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-r border-gray-700">Best Case</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-r border-gray-700">Average Case</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Worst Case</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 border-r border-gray-700">Search</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 border-r border-gray-700">O(1)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400 border-r border-gray-700">O(log n)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">O(n)</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 border-r border-gray-700">Insertion</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 border-r border-gray-700">O(1)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400 border-r border-gray-700">O(log n)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">O(n)</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 border-r border-gray-700">Deletion</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 border-r border-gray-700">O(1)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400 border-r border-gray-700">O(log n)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">O(n)</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 border-r border-gray-700">Traversal</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400 border-r border-gray-700">O(n)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400 border-r border-gray-700">O(n)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400">O(n)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Applications of Binary Trees
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Expression Trees</h4>
                            <p className="text-gray-300 mb-3">
                                Binary trees naturally represent mathematical expressions where <strong>operators are internal nodes</strong> 
                                and <strong>operands are leaf nodes</strong>.
                            </p>
                            <div className="mb-3">
                                <p className="text-sm text-gray-300 font-mono bg-gray-900/50 rounded p-2">
                                    Expression: (a + b) * (c - d)<br/>
                                    PreOrder: * + a b - c d<br/>
                                    InOrder: a + b * c - d (with parentheses)<br/>
                                    PostOrder: a b + c d - *
                                </p>
                            </div>
                            <div className="bg-gray-900/50 rounded p-2 text-xs text-gray-400">
                                Used in compilers, calculators, and symbolic computation systems.
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-blue-900/20 border border-blue-700 rounded-lg p-5">
                        <h4 className="text-lg font-semibold text-blue-300 mb-3">Additional Applications</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Database Indexing:</strong> B-trees and B+ trees for efficient data retrieval.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Decision Trees:</strong> Machine learning classification and game AI.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Huffman Coding:</strong> Data compression using optimal binary trees.</span>
                                </li>
                            </ul>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Heap Implementation:</strong> Priority queues using complete binary trees.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Syntax Analysis:</strong> Parse trees in compiler design.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Tree Sorting:</strong> Build BST and perform InOrder traversal.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-linear-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">Key Takeaways</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">Binary Tree Fundamentals</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Hierarchical Structure:</strong> Binary trees organize data in parent-child relationships with at most two children per node.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Recursive Nature:</strong> Tree operations naturally use recursive algorithms, making implementation elegant and efficient.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Dynamic Structure:</strong> Trees can grow and shrink dynamically, adapting to changing data requirements.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Multiple Applications:</strong> From expression parsing to file systems, binary trees solve diverse computational problems.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Binary Search Tree Benefits</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Efficient Operations:</strong> O(log n) average case for search, insert, and delete operations.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Sorted Order:</strong> InOrder traversal produces elements in sorted sequence automatically.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Range Queries:</strong> Efficient range searching and bounded iteration capabilities.</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Dynamic Sizing:</strong> No need to pre-allocate space; grows as needed.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Memory Locality:</strong> Better cache performance than hash tables for range operations.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Predecessor/Successor:</strong> Easy to find next smaller/larger elements.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">Tree Balance Importance</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Performance Guarantee:</strong> Balanced trees ensure consistent O(log n) performance regardless of input order.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Avoid Degeneration:</strong> Unbalanced trees can become linear structures with O(n) worst-case performance.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Construction Strategy:</strong> Build balanced trees from sorted data using recursive middle-element selection.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Self-Balancing:</strong> Advanced trees like AVL and Red-Black maintain balance automatically during operations.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-3">Traversal Algorithm Selection</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>InOrder for BSTs:</strong> Use InOrder traversal to retrieve BST elements in sorted order for sorting applications.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>PreOrder for Copying:</strong> PreOrder traversal processes parent before children, ideal for tree serialization and copying.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>PostOrder for Cleanup:</strong> PostOrder processes children before parent, perfect for memory deallocation and deletion.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>BFS for Levels:</strong> Breadth-first traversal processes nodes level by level, useful for shortest path and level-order operations.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Remember</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                                        <span>Binary trees provide efficient hierarchical data organization with logarithmic performance when balanced.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                                        <span>Tree balance is crucial for maintaining performance; always consider balancing strategies for production systems.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                                        <span>Choose the right traversal method based on your application requirements and desired output order.</span>
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

export default BinaryTree;