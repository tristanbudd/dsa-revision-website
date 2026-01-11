import CodeBox from '../components/CodeBox';

function AVLTree() {
    const rightRotationExample = [
        {
            language: 'python',
            code: `# Right Rotation (LL Rotation) around root node
def right_rotation(root):
    temp = root.left              # Store the left child
    root.left = root.left.right   # Move the right subtree of left child
    temp.right = root             # Make root the right child of temp
    root = temp                   # Update root to temp
    
    # Update balance factors after rotation
    update_balance_factor(root.right)  # Update the old root
    update_balance_factor(root)        # Update the new root
    
    return root                   # Return the new root`,
        },
    ];

    const leftRotationExample = [
        {
            language: 'python',
            code: `# Left Rotation (RR Rotation) around root node
def left_rotation(root):
    temp = root.right             # Store the right child
    root.right = root.right.left  # Move the left subtree of right child
    temp.left = root              # Make root the left child of temp
    root = temp                   # Update root to temp
    
    # Update balance factors after rotation
    update_balance_factor(root.left)   # Update the old root
    update_balance_factor(root)        # Update the new root
    
    return root                   # Return the new root`,
        },
    ];

    const avlInsertionExample = [
        {
            language: 'python',
            code: `# AVL Tree Insertion with automatic balancing
def avl_insert(root, key):
    # Step 1: Perform normal BST insertion
    if root is None:
        return AVLNode(key)
    
    if key < root.data:
        root.left = avl_insert(root.left, key)
    elif key > root.data:
        root.right = avl_insert(root.right, key)
    else:
        return root  # Duplicate keys not allowed
    
    # Step 2: Update balance factor of current node
    update_balance_factor(root)
    
    # Step 3: Check if node is unbalanced and perform rotations
    balance = get_balance_factor(root)
    
    # Left-Left Case (LL Rotation)
    if balance > 1 and key < root.left.data:
        return right_rotation(root)
    
    # Right-Right Case (RR Rotation)
    if balance < -1 and key > root.right.data:
        return left_rotation(root)
    
    # Left-Right Case (LR Rotation)
    if balance > 1 and key > root.left.data:
        root.left = left_rotation(root.left)
        return right_rotation(root)
    
    # Right-Left Case (RL Rotation)
    if balance < -1 and key < root.right.data:
        root.right = right_rotation(root.right)
        return left_rotation(root)
    
    return root  # Return unchanged root`,
        },
    ];

    const balanceFactorExample = [
        {
            language: 'python',
            code: `# AVL Node with balance factor
class AVLNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        self.balance_factor = 0    # Balance factor: height(left) - height(right)

# Calculate balance factor
def get_balance_factor(node):
    if node is None:
        return 0
    return height(node.left) - height(node.right)

# Update balance factor
def update_balance_factor(node):
    if node is not None:
        node.balance_factor = height(node.left) - height(node.right)
        
# Calculate height of subtree
def height(node):
    if node is None:
        return 0
    return 1 + max(height(node.left), height(node.right))`,
        },
    ];

    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        Self-Balancing Trees - AVL Trees
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">6% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    <strong>AVL Trees</strong> are self-balancing binary search trees that maintain <strong>optimal height</strong> through automatic rotations. 
                    Named after inventors <strong>Adelson-Velsky and Landis</strong>, AVL trees ensure that the heights of left and right subtrees differ by 
                    <strong> at most one</strong> for every node. This balance constraint guarantees <strong>O(log n) performance</strong> for all operations, 
                    eliminating the worst-case O(n) degradation of unbalanced BSTs. This page covers balance factors, rotation algorithms, 
                    insertion and deletion procedures, and practical applications of self-balancing tree structures.
                </p>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Binary Search Tree Limitations
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">The Balancing Problem</h4>
                            <p className="text-gray-300 mb-3">
                                Using normal BST insertion algorithms, trees can rapidly become <strong>unbalanced</strong>, especially when data is inserted 
                                in sorted order. An unbalanced BST degrades to a <strong>linked list structure</strong>, making all operations expensive O(n).
                            </p>
                            <div className="bg-gray-800/50 rounded p-4">
                                <h5 className="font-bold text-purple-300 mb-2">BST Operation Complexities:</h5>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div className="text-gray-300">
                                        <strong>Operation</strong>
                                        <div>Search</div>
                                        <div>Insertion</div>
                                        <div>Deletion</div>
                                    </div>
                                    <div className="text-green-400">
                                        <strong>Expected Case</strong>
                                        <div>O(log₂ n)</div>
                                        <div>O(log₂ n)</div>
                                        <div>O(log₂ n)</div>
                                    </div>
                                    <div className="text-red-400">
                                        <strong>Worst Case</strong>
                                        <div>O(n)</div>
                                        <div>O(n)</div>
                                        <div>O(n)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Balanced vs Unbalanced BSTs</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-green-300 mb-2">Balanced BST:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span>All paths from root to leaves have similar lengths.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span>Maintains O(log₂ n) search efficiency.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span>Optimal performance for all operations.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-red-300 mb-2">Unbalanced BST:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-red-400 mt-0.5 font-bold">•</span>
                                            <span>Skewed structure resembles a linked list.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-red-400 mt-0.5 font-bold">•</span>
                                            <span>Degrades to O(n) search efficiency.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-red-400 mt-0.5 font-bold">•</span>
                                            <span>Poor performance, especially for sorted input.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        What is an AVL Tree?
                    </h3>

                    <p className="text-gray-300 mb-6">
                        An <strong>AVL Tree</strong> is a self-balancing binary search tree with a specific balance constraint that ensures optimal performance.
                    </p>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-semibold text-green-300 mb-3">AVL Tree Definition</h4>
                            <p className="text-gray-300 mb-3">
                                An AVL tree is a binary search tree where:
                            </p>
                            <ul className="space-y-2 ml-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Heights</strong> of left and right subtrees of any node differ by at most one.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Both subtrees</strong> are also AVL trees (recursive property).</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Automatic rebalancing</strong> maintains this property through rotations.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-semibold text-blue-300 mb-3">Balance Factors</h4>
                            <p className="text-gray-300 mb-3">
                                Each AVL node contains a <strong>balance factor</strong> indicating the height difference between its subtrees:
                            </p>
                            
                            <CodeBox examples={balanceFactorExample} title="AVL Node Structure and Balance Factor Calculation" />

                            <div className="mt-4 bg-blue-900/30 border border-blue-600 rounded p-3">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-blue-300">Balance Factor Formula:</strong> BF(node) = height(left_subtree) - height(right_subtree)
                                    <br/>
                                    <strong className="text-green-400">Balanced:</strong> BF ∈ {'{-1, 0, +1}'} | 
                                    <strong className="text-red-400"> Unbalanced:</strong> BF ∈ {'{-2, +2}'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Tree Rotations
                    </h3>

                    <p className="text-gray-300 mb-6">
                        <strong>Tree rotations</strong> are operations that change the structure of a tree without altering the BST property. 
                        They reduce tree height by moving smaller subtrees down and larger subtrees up.
                    </p>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-5">
                            <h4 className="text-lg font-semibold text-cyan-300 mb-3">Basic Rotation Operations</h4>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-md font-semibold text-cyan-300 mb-2">Right Rotation (LL Case):</h5>
                                    <CodeBox examples={rightRotationExample} title="Right Rotation Implementation" />
                                </div>
                                <div>
                                    <h5 className="text-md font-semibold text-cyan-300 mb-2">Left Rotation (RR Case):</h5>
                                    <CodeBox examples={leftRotationExample} title="Left Rotation Implementation" />
                                </div>
                            </div>
                            <div className="mt-4 bg-cyan-900/30 border border-cyan-600 rounded p-3">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-cyan-300">Key Principle:</strong> Rotations preserve the BST ordering property while 
                                    reducing tree height. Each rotation takes O(1) time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Four Types of AVL Rotations
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-yellow-600 bg-yellow-900/20 p-5">
                            <h4 className="text-xl font-bold text-yellow-300 mb-3">Single Rotations</h4>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-yellow-300 mb-2">Left-Left (LL) Rotation:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Trigger:</strong> Unbalanced node BF = +2, left child BF = +1.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Solution:</strong> Single right rotation around unbalanced node.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Result:</strong> Left-heavy subtree becomes balanced.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-yellow-300 mb-2">Right-Right (RR) Rotation:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Trigger:</strong> Unbalanced node BF = -2, right child BF = -1.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Solution:</strong> Single left rotation around unbalanced node.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Result:</strong> Right-heavy subtree becomes balanced.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-xl font-bold text-purple-300 mb-3">Double Rotations</h4>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-purple-300 mb-2">Left-Right (LR) Rotation:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Trigger:</strong> Unbalanced node BF = +2, left child BF = -1.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Solution:</strong> Left rotation on left child, then right rotation on root.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Complex Case:</strong> Left-heavy root with right-heavy left subtree.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-purple-300 mb-2">Right-Left (RL) Rotation:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Trigger:</strong> Unbalanced node BF = -2, right child BF = +1.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Solution:</strong> Right rotation on right child, then left rotation on root.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Complex Case:</strong> Right-heavy root with left-heavy right subtree.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-4 bg-purple-900/30 border border-purple-700 rounded p-3">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-purple-300">Important:</strong> Double rotations are required when single rotations 
                                    cannot restore balance due to conflicting subtree orientations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        AVL Tree Operations
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-6">
                            <h4 className="text-xl font-bold text-green-300 mb-4">Insertion Algorithm</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                AVL insertion follows BST rules but includes <strong>automatic rebalancing</strong>. After each insertion, 
                                balance factors are updated and rotations are applied if needed.
                            </p>

                            <CodeBox examples={avlInsertionExample} title="Complete AVL Insertion with Balancing" />

                            <div className="bg-gray-800/50 rounded p-4 mt-4">
                                <h5 className="font-bold text-green-300 mb-2">Insertion Steps:</h5>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300">
                                    <li><strong>Insert using BST rules</strong> - Find correct position and create new node.</li>
                                    <li><strong>Update balance factors</strong> - Recalculate for all nodes from insertion point to root.</li>
                                    <li><strong>Check for imbalance</strong> - Identify nodes with BF = ±2.</li>
                                    <li><strong>Apply appropriate rotation</strong> - Choose from LL, RR, LR, or RL based on the pattern.</li>
                                    <li><strong>Update balance factors post-rotation</strong> - Ensure all factors are correct.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-6">
                            <h4 className="text-xl font-bold text-blue-300 mb-4">Search Algorithm</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Searching in an AVL tree is <strong>identical to BST search</strong> since the ordering property is preserved. 
                                However, AVL trees guarantee <strong>O(log n) performance</strong> due to balanced height.
                            </p>

                            <div className="bg-gray-800/50 rounded p-4">
                                <h5 className="font-bold text-blue-300 mb-2">Search Characteristics:</h5>
                                <ul className="space-y-1 text-sm text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Time Complexity:</strong> O(log₂ n) - guaranteed due to balance.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>No Rotations:</strong> Search operations don't modify tree structure.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Path Length:</strong> Maximum path length is ⌊1.44 × log₂ n⌋.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-6">
                            <h4 className="text-xl font-bold text-orange-300 mb-4">Deletion Algorithm</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                AVL deletion uses <strong>standard BST deletion</strong> followed by rebalancing. Unlike insertion, 
                                multiple rotations may be needed as imbalance can propagate up the tree.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-orange-300 mb-2">Deletion Process:</h5>
                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300">
                                        <li>Locate and delete node using BST rules.</li>
                                        <li>Update balance factors from deletion point to root.</li>
                                        <li>Apply rotations for each unbalanced node.</li>
                                        <li>Continue checking up to root (unlike insertion).</li>
                                    </ol>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-orange-300 mb-2">Deletion Complexity:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Time:</strong> O(log n)</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Rotations:</strong> At most O(log n)</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Path Length:</strong> From deleted node to root</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Performance Analysis
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-r border-gray-700">Operation</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-r border-gray-700">AVL Tree</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-r border-gray-700">BST (Average)</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">BST (Worst)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 border-r border-gray-700">Search</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 border-r border-gray-700">O(log n)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400 border-r border-gray-700">O(log n)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">O(n)</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 border-r border-gray-700">Insertion</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 border-r border-gray-700">O(log n)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400 border-r border-gray-700">O(log n)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">O(n)</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 border-r border-gray-700">Deletion</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 border-r border-gray-700">O(log n)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400 border-r border-gray-700">O(log n)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">O(n)</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 border-r border-gray-700">Height</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 border-r border-gray-700">≤ 1.44 log₂ n</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400 border-r border-gray-700">~log₂ n</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">n</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 p-5 bg-linear-to-r from-green-900/20 to-blue-900/20 border border-green-700 rounded-lg">
                        <h4 className="text-lg font-semibold text-green-300 mb-3">AVL Tree Advantages</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">✓</span>
                                    <span><strong>Guaranteed Performance:</strong> O(log n) for all operations.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">✓</span>
                                    <span><strong>Automatic Balancing:</strong> Self-maintaining through rotations.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">✓</span>
                                    <span><strong>Predictable Height:</strong> Maximum height bound is known.</span>
                                </li>
                            </ul>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-yellow-400 mt-0.5 font-bold">⚠</span>
                                    <span><strong>Overhead Cost:</strong> Extra storage for balance factors.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-yellow-400 mt-0.5 font-bold">⚠</span>
                                    <span><strong>Complex Operations:</strong> Rotation logic increases complexity.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-yellow-400 mt-0.5 font-bold">⚠</span>
                                    <span><strong>Frequent Rebalancing:</strong> More rotations than other balanced trees.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Real-World Applications
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
                            <h4 className="text-xl font-bold text-green-400 mb-3">Memory Management</h4>
                            <p className="text-gray-300 mb-3">
                                Operating systems use AVL trees for <strong>memory allocation</strong> and
                                <strong> virtual memory management</strong>, requiring predictable allocation times.
                            </p>
                            <div className="bg-gray-900/50 rounded p-2 text-xs text-gray-400">
                                Applications: Kernel memory allocators, garbage collection, page replacement.
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-blue-900/20 border border-blue-700 rounded-lg p-5">
                        <h4 className="text-lg font-semibold text-blue-300 mb-3">Additional Applications</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Language Processors:</strong> Symbol tables in compilers and interpreters.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Network Algorithms:</strong> Routing tables and network topology management.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Geographic Systems:</strong> Spatial indexing for GIS applications.</span>
                                </li>
                            </ul>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Game Development:</strong> Scene graphs and collision detection systems.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Financial Systems:</strong> Order books and high-frequency trading platforms.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Caching Systems:</strong> LRU caches with guaranteed eviction times.</span>
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
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">AVL Tree Fundamentals</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Self-Balancing Property:</strong> AVL trees automatically maintain balance through rotations, ensuring optimal height.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Balance Constraint:</strong> Height difference between subtrees is at most 1 for every node in the tree.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Performance Guarantee:</strong> All operations have guaranteed O(log n) time complexity, eliminating worst-case scenarios.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Historical Significance:</strong> First self-balancing BST, paving the way for other balanced tree structures.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Rotation Mechanisms</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Single Rotations:</strong> LL and RR cases handle simple imbalances with one rotation operation.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Double Rotations:</strong> LR and RL cases require two rotations to resolve complex imbalance patterns.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Rotation Efficiency:</strong> Each rotation takes O(1) time, making rebalancing very efficient.</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Pattern Recognition:</strong> Balance factors determine which rotation type to apply automatically.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Structure Preservation:</strong> Rotations maintain BST property while improving tree balance.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Height Reduction:</strong> Rotations effectively reduce tree height, improving overall performance.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">Implementation Considerations</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Balance Factor Storage:</strong> Each node requires additional memory to store balance factor information.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Insertion Complexity:</strong> More complex than BST insertion due to balance checking and rotation logic.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Deletion Propagation:</strong> Unlike insertion, deletion may require multiple rotations up the tree path.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Height Calculation:</strong> Efficient height calculation is crucial for balance factor updates.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-3">When to Choose AVL Trees</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Search-Heavy Applications:</strong> Ideal when search operations significantly outnumber modifications.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Predictable Performance:</strong> Choose when worst-case performance guarantees are essential for system reliability.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Memory Considerations:</strong> Suitable when extra memory for balance factors is acceptable trade-off.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Alternative Considerations:</strong> Red-Black trees may be better for frequent insertions/deletions.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Remember</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                                        <span>AVL trees provide guaranteed O(log n) performance for all operations through automatic balancing.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                                        <span>Four rotation types (LL, RR, LR, RL) handle all possible imbalance scenarios systematically.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                                        <span>Choose AVL trees when predictable performance is more important than implementation simplicity.</span>
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

export default AVLTree;