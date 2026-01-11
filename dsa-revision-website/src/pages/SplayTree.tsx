import CodeBox from '../components/CodeBox';

function SplayTree() {
    const searchExample = [
        {
            language: 'python',
            code: `# Searching in a Splay Tree
def search(root, key):
    # Step 1: Locate node (same as BST search)
    current = root
    path = []  # Track path for splaying
    
    while current and current.data != key:
        path.append(current)
        if key < current.data:
            current = current.left
        else:
            current = current.right
    
    # Step 2: Splay the accessed node to root
    if current:
        return splay(current, path)
    return None  # Key not found`,
        },
    ];

    const insertionExample = [
        {
            language: 'python',
            code: `# Insertion in a Splay Tree
def insert(root, key):
    # Step 1: Insert node (same as BST insertion)
    if not root:
        return Node(key)
    
    current = root
    path = []
    
    while True:
        path.append(current)
        if key < current.data:
            if not current.left:
                current.left = Node(key)
                new_node = current.left
                break
            current = current.left
        else:
            if not current.right:
                current.right = Node(key)
                new_node = current.right
                break
            current = current.right
    
    # Step 2: Splay inserted node to root
    return splay(new_node, path)`,
        },
    ];

    const deletionExample = [
        {
            language: 'python',
            code: `# Deletion in a Splay Tree
def delete(root, key):
    # Step 1: Locate the node to be deleted
    root = search(root, key)  # This splays target to root
    
    if not root or root.data != key:
        return root  # Key not found
    
    # Step 2: Remove root node
    if not root.left:
        return root.right
    elif not root.right:
        return root.left
    else:
        # Find inorder predecessor (rightmost in left subtree)
        left_subtree = root.left
        predecessor = left_subtree
        while predecessor.right:
            predecessor = predecessor.right
        
        # Splay predecessor to root of left subtree
        left_subtree = splay_to_root(left_subtree, predecessor.data)
        
        # Connect left and right subtrees
        left_subtree.right = root.right
        return left_subtree`,
        },
    ];

    const zigRotationExample = [
        {
            language: 'python',
            code: `# Zig Rotation (Single Rotation)
# Case (a): Left rotation - equivalent to LL rotation in AVL
def zig_left(parent):
    new_root = parent.left
    parent.left = new_root.right
    new_root.right = parent
    return new_root

# Case (b): Right rotation - equivalent to RR rotation in AVL  
def zig_right(parent):
    new_root = parent.right
    parent.right = new_root.left
    new_root.left = parent
    return new_root

# Used only when accessed node S is child of root P`,
        },
    ];

    const zigzagRotationExample = [
        {
            language: 'python',
            code: `# ZigZag Rotation (Double Rotation)
# Case (c): S is left child of P, P is right child of G (RL rotation)
def zigzag_left_right(grandparent):
    parent = grandparent.right
    new_root = parent.left
    
    parent.left = new_root.right
    grandparent.right = new_root.left
    new_root.left = grandparent
    new_root.right = parent
    
    return new_root

# Case (d): S is right child of P, P is left child of G (LR rotation)
def zigzag_right_left(grandparent):
    parent = grandparent.left
    new_root = parent.right
    
    parent.right = new_root.left
    grandparent.left = new_root.right
    new_root.left = parent
    new_root.right = grandparent
    
    return new_root`,
        },
    ];

    const zigzigRotationExample = [
        {
            language: 'python',
            code: `# ZigZig Rotation (No AVL equivalent)
# Case (e): S is left child of P, P is left child of G
def zigzig_left(grandparent):
    parent = grandparent.left
    new_root = parent.left
    
    grandparent.left = parent.right
    parent.right = grandparent
    parent.left = new_root.right
    new_root.right = parent
    
    return new_root

# Case (f): S is right child of P, P is right child of G
def zigzig_right(grandparent):
    parent = grandparent.right
    new_root = parent.right
    
    grandparent.right = parent.left
    parent.left = grandparent
    parent.right = new_root.left
    new_root.left = parent
    
    return new_root`,
        },
    ];

    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        Splay Tree
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">6% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    A <strong>Splay Tree</strong> is a <strong>self-organizing binary search tree</strong> with the additional and unusual property that 
                    recently accessed elements are always quick to access again. Unlike AVL trees that maintain strict balance, splay trees use a 
                    heuristic approach called <strong>splaying</strong> that moves frequently accessed nodes toward the root. This makes splay trees 
                    particularly efficient for <strong>non-uniform access patterns</strong> where some elements are accessed more frequently than others. 
                    Splay trees perform basic operations in O(log n) <strong>amortized time</strong>, invented by Daniel Sleator and Robert Tarjan.
                </p>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Understanding Splay Tree Operations
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">What Makes Splay Trees Special?</h4>
                            <p className="text-gray-300 mb-3">
                                Splay trees combine <strong>every basic operation</strong> with a special operation called <strong>splaying</strong>:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-300">
                                <li><strong>Self-Organizing:</strong> Frequently accessed nodes migrate toward the root automatically.</li>
                                <li><strong>Adaptive:</strong> Tree structure adapts to access patterns without manual rebalancing.</li>
                                <li><strong>Temporal Locality:</strong> Recently accessed elements remain quick to access again.</li>
                                <li><strong>Amortized Efficiency:</strong> Expensive operations are balanced by cheaper subsequent operations.</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Performance Characteristics</h4>
                            <div className="space-y-3 text-gray-300">
                                <div><strong>Individual Operations:</strong> No single operation is guaranteed to be efficient (worst case O(n)).</div>
                                <div><strong>Sequence of Operations:</strong> Average performance over many operations tends to be O(log n).</div>
                                <div><strong>Access Pattern Dependency:</strong> Performance improves significantly with non-uniform access patterns.</div>
                                <div><strong>Space Efficiency:</strong> No need to store balance factors or colors like AVL/Red-Black trees.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Basic Splay Tree Operations
                    </h3>

                    <p className="text-gray-300 mb-6">
                        All basic operations in a splay tree follow the same pattern: perform the standard BST operation, then splay the accessed node to the root.
                    </p>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Search Operation</h4>
                            <CodeBox examples={searchExample} title="Splay Tree Search" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Process:</strong> (1) Locate node using standard BST search, (2) Splay the found node to the root. 
                                    This ensures frequently searched items become easily accessible.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Insertion Operation</h4>
                            <CodeBox examples={insertionExample} title="Splay Tree Insertion" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Process:</strong> (1) Insert node using standard BST insertion, (2) Splay the inserted node to the root. 
                                    New nodes immediately become the most accessible.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-red-600 bg-red-900/20 p-5">
                            <h4 className="text-lg font-bold text-red-300 mb-3">Deletion Operation</h4>
                            <CodeBox examples={deletionExample} title="Splay Tree Deletion" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Alternative Method:</strong> (1) Locate and splay the node to delete to root, (2) Remove root and reconnect subtrees.
                                    The parent of the removed node can also be splayed to root.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Splaying Process and Rotations
                    </h3>

                    <p className="text-gray-300 mb-4">
                        Splaying moves a node to the root through a series of rotations. The process works <strong>bottom-up</strong> and uses three types of rotations:
                    </p>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-5">
                            <h4 className="text-lg font-semibold text-cyan-300 mb-3">Zig Rotation (Single Rotation)</h4>
                            <p className="text-gray-300 mb-3">
                                Used <strong>only</strong> when the accessed node S is a <strong>direct child</strong> of the root P. 
                                Equivalent to standard AVL rotations (LL/RR).
                            </p>

                            <CodeBox examples={zigRotationExample} title="Zig Rotation Implementation" />
                            
                            <div className="mt-4 bg-gray-900/60 rounded-lg p-4">
                                <h5 className="font-bold text-cyan-300 mb-2">Visual Example - Case (a): Left Zig</h5>
                                <div className="flex justify-start items-center p-4 bg-gray-800/50 rounded overflow-x-auto">
                                    <div className="flex items-center gap-8 min-w-max">
                                        <div className="text-center">
                                            <div className="text-xs text-gray-400 mb-2">Before</div>
                                            <svg width="120" height="100" viewBox="0 0 120 100">
                                                <line x1="60" y1="20" x2="30" y2="50" stroke="#60a5fa" strokeWidth="2" />
                                                <line x1="30" y1="50" x2="15" y2="80" stroke="#60a5fa" strokeWidth="2" />
                                                <line x1="30" y1="50" x2="45" y2="80" stroke="#60a5fa" strokeWidth="2" />
                                                <line x1="60" y1="20" x2="90" y2="50" stroke="#60a5fa" strokeWidth="2" />
                                                <circle cx="60" cy="20" r="10" fill="#1e40af" stroke="#60a5fa" strokeWidth="2" />
                                                <circle cx="30" cy="50" r="10" fill="#dc2626" stroke="#f87171" strokeWidth="2" />
                                                <circle cx="15" cy="80" r="8" fill="#374151" stroke="#6b7280" strokeWidth="1" />
                                                <circle cx="45" cy="80" r="8" fill="#374151" stroke="#6b7280" strokeWidth="1" />
                                                <circle cx="90" cy="50" r="8" fill="#374151" stroke="#6b7280" strokeWidth="1" />
                                                <text x="60" y="25" textAnchor="middle" fill="#ffffff" fontSize="10">P</text>
                                                <text x="30" y="55" textAnchor="middle" fill="#ffffff" fontSize="10">S</text>
                                                <text x="15" y="85" textAnchor="middle" fill="#ffffff" fontSize="8">A</text>
                                                <text x="45" y="85" textAnchor="middle" fill="#ffffff" fontSize="8">B</text>
                                                <text x="90" y="55" textAnchor="middle" fill="#ffffff" fontSize="8">C</text>
                                            </svg>
                                        </div>
                                        
                                        <div className="text-cyan-400 text-2xl">→</div>

                                        <div className="text-center">
                                            <div className="text-xs text-gray-400 mb-2">After</div>
                                            <svg width="120" height="100" viewBox="0 0 120 100">
                                                <line x1="30" y1="20" x2="15" y2="50" stroke="#60a5fa" strokeWidth="2" />
                                                <line x1="30" y1="20" x2="60" y2="50" stroke="#60a5fa" strokeWidth="2" />
                                                <line x1="60" y1="50" x2="45" y2="80" stroke="#60a5fa" strokeWidth="2" />
                                                <line x1="60" y1="50" x2="90" y2="80" stroke="#60a5fa" strokeWidth="2" />
                                                <circle cx="30" cy="20" r="10" fill="#dc2626" stroke="#f87171" strokeWidth="2" />
                                                <circle cx="15" cy="50" r="8" fill="#374151" stroke="#6b7280" strokeWidth="1" />
                                                <circle cx="60" cy="50" r="10" fill="#1e40af" stroke="#60a5fa" strokeWidth="2" />
                                                <circle cx="45" cy="80" r="8" fill="#374151" stroke="#6b7280" strokeWidth="1" />
                                                <circle cx="90" cy="80" r="8" fill="#374151" stroke="#6b7280" strokeWidth="1" />
                                                <text x="30" y="25" textAnchor="middle" fill="#ffffff" fontSize="10">S</text>
                                                <text x="15" y="55" textAnchor="middle" fill="#ffffff" fontSize="8">A</text>
                                                <text x="60" y="55" textAnchor="middle" fill="#ffffff" fontSize="10">P</text>
                                                <text x="45" y="85" textAnchor="middle" fill="#ffffff" fontSize="8">B</text>
                                                <text x="90" y="85" textAnchor="middle" fill="#ffffff" fontSize="8">C</text>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-600 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">ZigZag Rotation (Double Rotation)</h4>
                            <p className="text-gray-300 mb-3">
                                Occurs when S and P are on <strong>opposite sides</strong> of their parents. Equivalent to AVL LR/RL rotations. 
                                These rotations <strong>reduce tree height by 1</strong> and improve balance.
                            </p>
                            <CodeBox examples={zigzagRotationExample} title="ZigZag Rotation Implementation" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Cases:</strong> S is left child of P and P is right child of G, OR S is right child of P and P is left child of G.
                                    Results in a more balanced tree structure.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-semibold text-orange-300 mb-3">ZigZig Rotation (No AVL Equivalent)</h4>
                            <p className="text-gray-300 mb-3">
                                Occurs when S and P are on the <strong>same side</strong> of their parents. This rotation is <strong>unique to splay trees</strong> 
                                and does not reduce tree height, but maintains the self-organizing property.
                            </p>
                            <CodeBox examples={zigzigRotationExample} title="ZigZig Rotation Implementation" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Cases:</strong> S is left child of P and P is left child of G, OR S is right child of P and P is right child of G.
                                    Creates a different restructuring pattern than AVL trees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Rotation Summary and Comparison
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Rotation Type</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Condition</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold">AVL Equivalent</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Height Change</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Effect</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Zig</td>
                                    <td className="px-4 py-3 text-gray-300">S is child of root P</td>
                                    <td className="px-4 py-3 text-gray-300">LL or RR rotation</td>
                                    <td className="px-4 py-3 text-gray-300">Moves S up 1 level</td>
                                    <td className="px-4 py-3 text-gray-300">Final step to root.</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-purple-400 font-medium">ZigZag</td>
                                    <td className="px-4 py-3 text-gray-300">S and P on opposite sides.</td>
                                    <td className="px-4 py-3 text-gray-300">LR or RL rotation.</td>
                                    <td className="px-4 py-3 text-gray-300">Reduces height by 1.</td>
                                    <td className="px-4 py-3 text-gray-300">Improves balance.</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-orange-400 font-medium">ZigZig</td>
                                    <td className="px-4 py-3 text-gray-300">S and P on same side.</td>
                                    <td className="px-4 py-3 text-gray-300">No equivalent.</td>
                                    <td className="px-4 py-3 text-gray-300">No height reduction.</td>
                                    <td className="px-4 py-3 text-gray-300">Maintains self-organization.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                        <p className="text-sm text-gray-300">
                            <strong className="text-blue-400">Important:</strong> The splaying process continues until the accessed node reaches the root. 
                            ZigZag and ZigZig rotations move the node up 2 levels, while Zig moves it up 1 level.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Splay Tree vs AVL Tree Comparison
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Aspect</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Splay Tree</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold">AVL Tree</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Balance Strategy</td>
                                    <td className="px-4 py-3 text-gray-300">Self-organizing (adaptive).</td>
                                    <td className="px-4 py-3 text-gray-300">Height-balanced (strict).</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Worst Case</td>
                                    <td className="px-4 py-3 text-gray-300">O(n) per operation.</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n) guaranteed.</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Amortized Performance</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n) per operation.</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n) per operation.</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Access Pattern</td>
                                    <td className="px-4 py-3 text-gray-300">Excellent for non-uniform.</td>
                                    <td className="px-4 py-3 text-gray-300">Uniform performance.</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Space Overhead</td>
                                    <td className="px-4 py-3 text-gray-300">No extra storage needed.</td>
                                    <td className="px-4 py-3 text-gray-300">Balance factors required.</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Implementation</td>
                                    <td className="px-4 py-3 text-gray-300">More complex rotations.</td>
                                    <td className="px-4 py-3 text-gray-300">Standard rotations.</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Best Use Case</td>
                                    <td className="px-4 py-3 text-gray-300">Frequent access to same elements.</td>
                                    <td className="px-4 py-3 text-gray-300">Uniform access patterns.</td>
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
                            <h4 className="text-lg font-bold text-green-300 mb-3">Cache Systems</h4>
                            <p className="text-gray-300 mb-3">
                                Splay trees are excellent for implementing <strong>caching mechanisms</strong> where recently accessed data 
                                should be quickly accessible again. The self-organizing property naturally implements a form of LRU (Least Recently Used) caching.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Example:</strong> Web page caches, database buffer pools, memory management systems.
                            </div>
                        </div>

                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Compiler Symbol Tables</h4>
                            <p className="text-gray-300 mb-3">
                                In compiler design, certain variables and functions are accessed more frequently than others. 
                                Splay trees adapt to these <strong>non-uniform access patterns</strong> automatically.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Example:</strong> Loop variables, frequently called functions, commonly used identifiers.
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-600 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-bold text-purple-300 mb-3">Network Routing Tables</h4>
                            <p className="text-gray-300 mb-3">
                                Network routing decisions often follow patterns where certain destinations are accessed more frequently. 
                                Splay trees can optimize routing table lookups by moving popular routes closer to the root.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Example:</strong> Popular website destinations, local network routes, CDN endpoint selection.
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-bold text-orange-300 mb-3">Example: Searching Sequence Analysis</h4>
                            <p className="text-gray-300 mb-3">
                                Consider searching for keys in sequence: <code className="bg-gray-700 px-2 py-1 rounded">D, B, G, F, A, D, B, D</code>
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300 space-y-2">
                                <div><strong>Observation 1:</strong> After searching for D twice, D becomes easily accessible.</div>
                                <div><strong>Observation 2:</strong> Repeated access to B also brings B toward the root.</div>
                                <div><strong>Result:</strong> The tree structure adapts to the access pattern, making frequently accessed elements faster to find.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-linear-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">Key Takeaways</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">Self-Organization Advantage</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Adaptive Structure:</strong> Tree automatically reorganizes based on access patterns.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Temporal Locality:</strong> Recently accessed elements remain quickly accessible.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>No Manual Balancing:</strong> No need to maintain explicit balance information.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Pattern Recognition:</strong> Naturally optimizes for frequently accessed data.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">Rotation System Understanding</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Zig Rotation:</strong> Single rotation when node is child of root (AVL equivalent).</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>ZigZag Rotation:</strong> Double rotation for opposite-side configurations (improves balance).</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>ZigZig Rotation:</strong> Double rotation for same-side configurations (unique to splay trees).</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Bottom-Up Process:</strong> Splaying works from accessed node toward root.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Performance Characteristics</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Individual Operations:</strong> Can be expensive (O(n) worst case) but rare.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Amortized Analysis:</strong> Expensive operations are balanced by subsequent cheap ones.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Access Pattern Dependent:</strong> Excellent for non-uniform access, good for uniform.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>No Guarantees:</strong> Unlike AVL/Red-Black, no per-operation guarantees.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-3">When to Choose Splay Trees</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Non-Uniform Access:</strong> When some elements are accessed much more frequently.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Temporal Locality:</strong> When recently accessed items are likely to be accessed again.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Memory Constraints:</strong> When you cannot afford extra storage for balance factors.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Adaptive Requirements:</strong> When tree should automatically optimize for usage patterns.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Implementation Considerations</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Complexity:</strong> More complex rotation logic compared to standard BST.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Path Tracking:</strong> Need to maintain path from accessed node to root for splaying.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Recursive Implementation:</strong> Bottom-up splaying fits naturally with recursion.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Testing:</strong> Requires extensive testing with various access patterns.</span>
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

export default SplayTree;