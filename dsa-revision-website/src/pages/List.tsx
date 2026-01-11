import CodeBox from '../components/CodeBox';

function List() {
    const nodeClassExample = [
        {
            language: 'python',
            code: `class Node:
    def __init__(self, data):
        self.data = data        # The value stored in the node
        self.link = None        # A reference to the next node (initially None)

# Creating and using nodes
head = None                     # Initially, the head node is set to None
head = Node(10)                 # Creating a new node with data 10 and assigning it to head`,
        },
    ];

    const sllCreationExample = [
        {
            language: 'python',
            code: `# Algorithm to Create a Singly Linked List
head = None                     # Initially, the linked list is empty

while more_items_to_add:
    # Get data item (this could be input from the user or data from a list)
    data_item = get_data_item() # Replace with actual data fetching logic
    
    # Create a new node pointed to by p
    p = Node(data_item)         # Create a new node and insert data_item
    
    # Attach the new node to the front of the linked list
    p.link = head               # Point p's link to the current head
    
    # Set head to p, making the new node the new head
    head = p`,
        },
    ];

    const sllTraversalExample = [
        {
            language: 'python',
            code: `# Forward traversal of a Singly Linked List
p = head                        # Start at the head of the list
while p is not None:            # Loop until the end of the list (where p becomes None)
    # Process the current node's data
    process(p.data)             # Replace this with actual processing logic
    
    # Advance to the next node
    p = p.link                  # Move to the next node in the list

# Backward traversal using recursion
def walk_backwards(node):
    if node is not None:        # Base case: check if we are at the end of the list
        walk_backwards(node.link) # Recursively call for the next node
        process(node.data)      # Process the current node's data after returning from recursion`,
        },
    ];

    const sllInsertionExample = [
        {
            language: 'python',
            code: `# Insertion of a new node Q after node P in a SLL
# Order of statements is critical!
q.link = p.link                 # First: Set new node's link to P's next node
p.link = q                      # Second: Update P's link to point to new node

# Insertion at the start of a SLL
q.link = head                   # Point new node to current head
head = q                        # Update head to point to new node`,
        },
    ];

    const sllDeletionExample = [
        {
            language: 'python',
            code: `# Algorithm to delete a node from a SLL
def delete_node(head, target):
    # Locate the item to be deleted
    next_node = head
    last = None             # This keeps track of the previous node
    
    while next_node is not None and next_node.data != target:
        last = next_node
        next_node = next_node.link
    
    # Case 1: The item is not found in the SLL
    if next_node is None:
        deleted = False
    
    # Case 2: The item to be deleted is in the first node of the SLL
    elif next_node == head:
        head = next_node.link   # Move the head to the next node
        deleted = True
    
    # Cases 3 and 4: The item to be deleted is within or at the end of the SLL
    else:
        last.link = next_node.link  # Bypass the node to delete it
        deleted = True
    
    return head, deleted`,
        },
    ];

    const skipListSearchExample = [
        {
            language: 'python',
            code: `# SkipList Search Algorithm
def search_skiplist(head, item, highest_level):
    # Set X to the head of the skip list
    X = head
    
    # Locate the required item by traversing from the highest level
    for I in range(highest_level, -1, -1):  # From highest_level down to 0
        # Traverse at the current level while the next node exists and its value is less than the item
        while X.forward[I] is not None and X.forward[I].value < item:
            X = X.forward[I]        # Move to the next node at the current level
    
    # Move to the actual node at the base level (level 0)
    X = X.forward[0]
    
    # Check if the located node contains the desired item
    if X is not None and X.value == item:
        located = True              # The item is found
    else:
        located = False             # The item is not found
    
    return located`,
        },
    ];

    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        Linear Data Structures - Linked Lists
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">7% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    Linked Lists are dynamic linear data structures that overcome many limitations of arrays. Unlike arrays, 
                    <strong> linked lists</strong> store data in nodes that contain both data and references to the next node, allowing for 
                    <strong> efficient insertion and deletion</strong> operations. This page covers the fundamental types of linked lists including 
                    <strong> Singly Linked Lists</strong>, <strong> Doubly Linked Lists</strong>, <strong> Circular variants</strong>, and the 
                    probabilistic <strong> SkipList</strong> data structure. You'll learn about node management, traversal algorithms, and 
                    practical applications in implementing stacks, queues, and advanced data structures.
                </p>

                <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Fundamental Concepts
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">What is a Linked List?</h4>
                            <p className="text-gray-300 mb-3">
                                A <strong>Linked List</strong> is a collection of objects called <strong>nodes</strong>. Each node consists of:
                            </p>
                            <ul className="space-y-2 ml-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-purple-300 mt-0.5 font-bold">•</span>
                                    <span><strong>Data:</strong> The information to be stored (can be any data type).</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-300 mt-0.5 font-bold">•</span>
                                    <span><strong>Link/Reference:</strong> A pointer to the next node in the sequence.</span>
                                </li>
                            </ul>
                            <p className="mt-3 text-gray-300">
                                The <strong>head</strong> variable contains a reference to the first node, and the last node's link is set to null/None to indicate the end of the list.
                            </p>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Arrays vs Linked Lists</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-red-300 mb-2">Arrays:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-red-300 mt-0.5 font-bold">•</span>
                                            <span>Fixed size, implicit structure.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-red-300 mt-0.5 font-bold">•</span>
                                            <span>Index-based element access.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-red-300 mt-0.5 font-bold">•</span>
                                            <span>O(n) insertion/deletion in sorted arrays.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-green-300 mb-2">Linked Lists:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-green-300 mt-0.5 font-bold">•</span>
                                            <span>Dynamic size, explicit structure.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-300 mt-0.5 font-bold">•</span>
                                            <span>Reference-based element linking.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-300 mt-0.5 font-bold">•</span>
                                            <span>O(1) insertion/deletion when position known.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Types of Linked Lists
                    </h3>

                    <div className="space-y-8">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-6">
                            <h4 className="text-2xl font-bold text-blue-400 mb-4">1. Singly Linked List (SLL)</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                A <strong>Singly Linked List</strong> is the simplest form where each node contains data and a single reference 
                                to the next node. The list can only be traversed in <strong>one direction</strong> (forward), from head to tail.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-blue-300 mb-4 text-center">Singly Linked List Structure</h5>

                                <div className="hidden lg:flex justify-center items-center space-x-2 mb-4 overflow-x-auto">
                                    <div className="bg-blue-600 text-white px-3 py-2 rounded font-bold text-sm">head</div>
                                    <div className="w-4 h-0.5 bg-blue-400 relative">
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-2 border-l-blue-400 border-t-1 border-b-1 border-t-transparent border-b-transparent"></div>
                                    </div>

                                    <div className="border-2 border-blue-400 rounded flex flex-col text-center">
                                        <div className="bg-blue-500 text-white px-3 py-2 font-bold">45</div>
                                        <div className="bg-blue-600 text-white px-2 py-1 text-xs">next</div>
                                    </div>

                                    <div className="w-6 h-0.5 bg-blue-400 relative">
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-2 border-l-blue-400 border-t-1 border-b-1 border-t-transparent border-b-transparent"></div>
                                    </div>

                                    <div className="border-2 border-blue-400 rounded flex flex-col text-center">
                                        <div className="bg-blue-500 text-white px-3 py-2 font-bold">92</div>
                                        <div className="bg-blue-600 text-white px-2 py-1 text-xs">next</div>
                                    </div>

                                    <div className="w-6 h-0.5 bg-blue-400 relative">
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-2 border-l-blue-400 border-t-1 border-b-1 border-t-transparent border-b-transparent"></div>
                                    </div>

                                    <div className="border-2 border-blue-400 rounded flex flex-col text-center">
                                        <div className="bg-blue-500 text-white px-3 py-2 font-bold">73</div>
                                        <div className="bg-blue-600 text-white px-2 py-1 text-xs">next</div>
                                    </div>

                                    <div className="w-4 h-0.5 bg-red-400 relative">
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-2 border-l-red-400 border-t border-b border-t-transparent border-b-transparent"></div>
                                    </div>

                                    <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">NULL</div>
                                </div>

                                <div className="flex lg:hidden flex-col items-center space-y-3">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-blue-600 text-white px-3 py-2 rounded font-bold text-sm">head</div>
                                        <div className="w-0.5 h-4 bg-blue-400 relative">
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-2 border-t-blue-400 border-l-1 border-r-1 border-l-transparent border-r-transparent"></div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="border-2 border-blue-400 rounded text-center">
                                            <div className="bg-blue-500 text-white px-4 py-2 font-bold">45</div>
                                            <div className="bg-blue-600 text-white px-3 py-1 text-xs">next</div>
                                        </div>
                                        <div className="w-0.5 h-4 bg-blue-400 relative mt-2">
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-2 border-t-blue-400 border-l-1 border-r-1 border-l-transparent border-r-transparent"></div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="border-2 border-blue-400 rounded text-center">
                                            <div className="bg-blue-500 text-white px-4 py-2 font-bold">92</div>
                                            <div className="bg-blue-600 text-white px-3 py-1 text-xs">next</div>
                                        </div>
                                        <div className="w-0.5 h-4 bg-blue-400 relative mt-2">
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-2 border-t-blue-400 border-l-1 border-r-1 border-l-transparent border-r-transparent"></div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="border-2 border-blue-400 rounded text-center">
                                            <div className="bg-blue-500 text-white px-4 py-2 font-bold">73</div>
                                            <div className="bg-blue-600 text-white px-3 py-1 text-xs">next</div>
                                        </div>
                                        <div className="w-0.5 h-4 bg-red-400 relative mt-2">
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-2 border-t-red-400 border-l-1 border-r-1 border-l-transparent border-r-transparent"></div>
                                        </div>
                                    </div>

                                    <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">NULL</div>
                                </div>
                                
                                <p className="text-xs text-gray-400 text-center mt-4">
                                    Each node contains data and a pointer to the next node.
                                </p>
                            </div>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-blue-300 mb-2">Node Structure and Basic Operations:</h5>
                                <CodeBox examples={nodeClassExample} title="Node Class Definition" />
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h5 className="text-lg font-semibold text-blue-300 mb-2">Creation Algorithm</h5>
                                    <CodeBox examples={sllCreationExample} title="Building a Singly Linked List" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-gray-800/50 rounded p-4">
                                        <h5 className="font-bold text-blue-300 mb-2">Time Complexities:</h5>
                                        <ul className="space-y-1 text-sm text-gray-300">
                                            <li className="flex gap-2">
                                                <span className="text-blue-300 mt-0.5 font-bold">•</span>
                                                <span>Search: O(n)</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-300 mt-0.5 font-bold">•</span>
                                                <span>Insertion (at head): O(1)</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-300 mt-0.5 font-bold">•</span>
                                                <span>Deletion (known position): O(1)</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-300 mt-0.5 font-bold">•</span>
                                                <span>Insertion/Deletion (unknown): O(n)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-4">
                                        <h5 className="font-bold text-blue-300 mb-2">Key Characteristics:</h5>
                                        <ul className="space-y-1 text-sm text-gray-300">
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>Unidirectional traversal</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>Less memory than doubly linked</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>Cannot traverse backwards</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>Ideal for stacks and simple lists</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h5 className="text-lg font-semibold text-blue-300 mb-2">Traversal Algorithms</h5>
                                    <CodeBox examples={sllTraversalExample} title="Forward and Backward Traversal" />
                                </div>

                                <div>
                                    <h5 className="text-lg font-semibold text-blue-300 mb-2">Insertion and Deletion</h5>
                                    <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
                                        <div className="w-full overflow-hidden">
                                            <CodeBox examples={sllInsertionExample} title="Node Insertion Operations" />
                                        </div>
                                        <div className="w-full overflow-hidden">
                                            <CodeBox examples={sllDeletionExample} title="Node Deletion Algorithm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-6">
                            <h4 className="text-2xl font-bold text-green-400 mb-4">2. Doubly Linked List (DLL)</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                A <strong>Doubly Linked List</strong> extends the singly linked list by adding a <strong>backward reference</strong> 
                                to each node. This allows <strong>bidirectional traversal</strong> but requires more memory and complex insertion/deletion operations.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-green-300 mb-4 text-center">Doubly Linked List Structure</h5>

                                <div className="hidden lg:flex justify-center items-center space-x-2 mb-4 overflow-x-auto">
                                    <div className="bg-green-600 text-white px-3 py-2 rounded font-bold text-sm">head</div>
                                    <div className="w-4 h-1 bg-green-400 relative">
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-3 border-l-green-400 border-t-1.5 border-b-1.5 border-t-transparent border-b-transparent"></div>
                                    </div>

                                    <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">NULL</div>
                                    
                                    <div className="flex flex-col items-center space-y-0.5">
                                        <div className="w-6 h-0.5 bg-green-400 relative">
                                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-2 border-l-green-400 border-t-1 border-b-1 border-t-transparent border-b-transparent"></div>
                                        </div>
                                        <div className="w-6 h-0.5 bg-green-400 relative">
                                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-r-2 border-r-green-400 border-t-1 border-b-1 border-t-transparent border-b-transparent"></div>
                                        </div>
                                    </div>

                                    <div className="border-2 border-green-400 rounded flex flex-col text-center">
                                        <div className="bg-green-600 text-white px-2 py-1 text-xs">prev</div>
                                        <div className="bg-green-500 text-white px-3 py-2 font-bold">A</div>
                                        <div className="bg-green-600 text-white px-2 py-1 text-xs">next</div>
                                    </div>

                                    <div className="flex flex-col items-center space-y-0.5">
                                        <div className="w-6 h-0.5 bg-green-400 relative">
                                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-2 border-l-green-400 border-t-1 border-b-1 border-t-transparent border-b-transparent"></div>
                                        </div>
                                        <div className="w-6 h-0.5 bg-green-400 relative">
                                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-r-2 border-r-green-400 border-t-1 border-b-1 border-t-transparent border-b-transparent"></div>
                                        </div>
                                    </div>

                                    <div className="border-2 border-green-400 rounded flex flex-col text-center">
                                        <div className="bg-green-600 text-white px-2 py-1 text-xs">prev</div>
                                        <div className="bg-green-500 text-white px-3 py-2 font-bold">D</div>
                                        <div className="bg-green-600 text-white px-2 py-1 text-xs">next</div>
                                    </div>

                                    <div className="flex flex-col items-center space-y-0.5">
                                        <div className="w-6 h-0.5 bg-green-400 relative">
                                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-2 border-l-green-400 border-t-1 border-b-1 border-t-transparent border-b-transparent"></div>
                                        </div>
                                        <div className="w-6 h-0.5 bg-green-400 relative">
                                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-r-2 border-r-green-400 border-t-1 border-b-1 border-t-transparent border-b-transparent"></div>
                                        </div>
                                    </div>

                                    <div className="border-2 border-green-400 rounded flex flex-col text-center">
                                        <div className="bg-green-600 text-white px-2 py-1 text-xs">prev</div>
                                        <div className="bg-green-500 text-white px-3 py-2 font-bold">H</div>
                                        <div className="bg-green-600 text-white px-2 py-1 text-xs">next</div>
                                    </div>
                                    
                                    <div className="w-4 h-1 bg-red-400 relative">
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-3 border-l-red-400 border-t-1.5 border-b-1.5 border-t-transparent border-b-transparent"></div>
                                    </div>

                                    <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">NULL</div>
                                </div>

                                <div className="flex lg:hidden flex-col items-center space-y-3">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-green-600 text-white px-3 py-2 rounded font-bold text-sm">head</div>
                                        <div className="w-1 h-4 bg-green-400 relative">
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-3 border-t-green-400 border-l-1.5 border-r-1.5 border-l-transparent border-r-transparent"></div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold mb-2">NULL</div>
                                        <div className="border-2 border-green-400 rounded text-center">
                                            <div className="bg-green-600 text-white px-3 py-1 text-xs">prev</div>
                                            <div className="bg-green-500 text-white px-4 py-2 font-bold">A</div>
                                            <div className="bg-green-600 text-white px-3 py-1 text-xs">next</div>
                                        </div>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <div className="w-1 h-4 bg-green-400 relative">
                                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-3 border-t-green-400 border-l-1.5 border-r-1.5 border-l-transparent border-r-transparent"></div>
                                            </div>
                                            <div className="text-xs text-green-400">↕</div>
                                            <div className="w-1 h-4 bg-green-400 relative">
                                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-b-3 border-b-green-400 border-l-1.5 border-r-1.5 border-l-transparent border-r-transparent"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="border-2 border-green-400 rounded text-center">
                                            <div className="bg-green-600 text-white px-3 py-1 text-xs">prev</div>
                                            <div className="bg-green-500 text-white px-4 py-2 font-bold">D</div>
                                            <div className="bg-green-600 text-white px-3 py-1 text-xs">next</div>
                                        </div>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <div className="w-1 h-4 bg-green-400 relative">
                                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-3 border-t-green-400 border-l-1.5 border-r-1.5 border-l-transparent border-r-transparent"></div>
                                            </div>
                                            <div className="text-xs text-green-400">↕</div>
                                            <div className="w-1 h-4 bg-green-400 relative">
                                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-b-3 border-b-green-400 border-l-1.5 border-r-1.5 border-l-transparent border-r-transparent"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="border-2 border-green-400 rounded text-center">
                                            <div className="bg-green-600 text-white px-3 py-1 text-xs">prev</div>
                                            <div className="bg-green-500 text-white px-4 py-2 font-bold">H</div>
                                            <div className="bg-green-600 text-white px-3 py-1 text-xs">next</div>
                                        </div>
                                        <div className="w-1 h-4 bg-red-400 relative mt-2">
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-3 border-t-red-400 border-l-1.5 border-r-1.5 border-l-transparent border-r-transparent"></div>
                                        </div>
                                        <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold mt-2">NULL</div>
                                    </div>
                                </div>
                                
                                <p className="text-xs text-gray-400 text-center mt-4">
                                    Each node has both prev and next pointers for bidirectional traversal.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-green-300 mb-2">Advantages:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-green-300 mt-0.5 font-bold">•</span>
                                            <span>Bidirectional traversal</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-300 mt-0.5 font-bold">•</span>
                                            <span>Easier deletion (no need to track previous)</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-300 mt-0.5 font-bold">•</span>
                                            <span>Better for complex operations</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-300 mt-0.5 font-bold">•</span>
                                            <span>Efficient reverse traversal</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-orange-300 mb-2">Disadvantages:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-orange-300 mt-0.5 font-bold">•</span>
                                            <span>More memory per node</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-300 mt-0.5 font-bold">•</span>
                                            <span>Complex insertion/deletion logic</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-300 mt-0.5 font-bold">•</span>
                                            <span>More pointers to maintain</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-300 mt-0.5 font-bold">•</span>
                                            <span>Slower insertion/deletion</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-600 bg-purple-900/20 p-6">
                            <h4 className="text-2xl font-bold text-purple-400 mb-4">3. Circular Linked Lists</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                <strong>Circular Linked Lists</strong> connect the last node back to the first node, creating a <strong>circular structure</strong>. 
                                This can be applied to both singly and doubly linked lists, eliminating the concept of "head" and "tail".
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-purple-300 mb-2">Circular Singly Linked List:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>Last node points to first node.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>No null references in the list.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>Infinite traversal possible.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>Good for round-robin scheduling.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-purple-300 mb-2">Circular Doubly Linked List:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>First and last nodes are connected.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>Bidirectional circular traversal.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>Dummy nodes eliminate edge cases.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                            <span>Complex but powerful structure.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-4 bg-purple-900/30 border border-purple-600 rounded p-3">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-purple-300">Note:</strong> Circular lists require careful loop termination conditions 
                                    to avoid infinite loops during traversal operations.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-yellow-600 bg-yellow-900/20 p-6">
                            <h4 className="text-2xl font-bold text-yellow-400 mb-4">4. SkipList Data Structure</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                A <strong>SkipList</strong> is a probabilistic data structure that extends an ordered singly linked list with 
                                <strong> additional forward links</strong> added randomly. This allows search operations to "skip" parts of the list, 
                                achieving <strong>O(log n) average performance</strong> for search, insertion, and deletion.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-yellow-300 mb-2">Core Concept:</h5>
                                <div className="space-y-2">
                                    <p className="text-sm text-gray-300">
                                        • <strong>Level 0:</strong> Base linked list containing all elements in sorted order.
                                    </p>
                                    <p className="text-sm text-gray-300">
                                        • <strong>Level 1:</strong> Express links to every 2nd node (approximately).
                                    </p>
                                    <p className="text-sm text-gray-300">
                                        • <strong>Level 2:</strong> Express links to every 4th node (approximately).
                                    </p>
                                    <p className="text-sm text-gray-300">
                                        • <strong>Higher Levels:</strong> Exponentially fewer nodes with longer jumps.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h5 className="text-lg font-semibold text-yellow-300 mb-2">Search Algorithm</h5>
                                <CodeBox examples={skipListSearchExample} title="SkipList Search Implementation" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-yellow-300 mb-2">Performance:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span>Average case: O(log n).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-400 mt-0.5 font-bold">•</span>
                                            <span>Worst case: O(n).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span>Space complexity: O(n).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Probabilistic guarantees.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-yellow-300 mb-2">Applications:</h5>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-400 mt-0.5 font-bold">•</span>
                                            <span>Database indexing.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-400 mt-0.5 font-bold">•</span>
                                            <span>Distributed systems.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-400 mt-0.5 font-bold">•</span>
                                            <span>Alternative to balanced trees.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-400 mt-0.5 font-bold">•</span>
                                            <span>Concurrent data structures.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-4 bg-yellow-900/30 border border-yellow-600 rounded p-3">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-yellow-300">Performance:</strong> SkipLists provide a good 
                                    compromise between implementation simplicity and performance without maintaining perfect balance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Applications of Linked Lists
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Stack Implementation</h4>
                            <p className="text-gray-300 mb-3">
                                Using a SLL for stack implementation requires only the <strong>top</strong> reference. 
                                Push and Pop operations are both O(1).
                            </p>
                            <div className="mb-3">
                                <p className="text-sm text-gray-300 font-mono bg-gray-900/50 rounded p-2">
                                    Push: new_node.link = top; top = new_node<br/>
                                    Pop: top = top.link
                                </p>
                            </div>
                            <div className="bg-gray-900/50 rounded p-2 text-xs text-gray-400">
                                Advantages: Dynamic size, O(1) operations, no memory waste.
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
                            <h4 className="text-xl font-bold text-green-400 mb-3">Queue Implementation</h4>
                            <p className="text-gray-300 mb-3">
                                Queue implementation requires both <strong>head</strong> and <strong>tail</strong> references 
                                for efficient O(1) enqueue and dequeue operations.
                            </p>
                            <div className="mb-3">
                                <p className="text-sm text-gray-300 font-mono bg-gray-900/50 rounded p-2">
                                    Enqueue: tail.link = new_node; tail = new_node<br/>
                                    Dequeue: head = head.link
                                </p>
                            </div>
                            <div className="bg-gray-900/50 rounded p-2 text-xs text-gray-400">
                                Best representation: head for dequeue, tail for enqueue operations.
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-blue-900/20 border border-blue-700 rounded-lg p-5">
                        <h4 className="text-lg font-semibold text-blue-300 mb-3">Additional Applications</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Undo Operations:</strong> Maintain operation history.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Music Playlists:</strong> Dynamic song management.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Browser History:</strong> Forward and backward navigation.</span>
                                </li>
                            </ul>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Image Viewer:</strong> Previous/next image navigation.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Process Scheduling:</strong> Round-robin with circular lists.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Hash Tables:</strong> Collision resolution with chaining.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">Key Takeaways</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">Linked List Fundamentals</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Dynamic Structure:</strong> Linked lists grow and shrink during runtime, overcoming array size limitations.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Node-Based:</strong> Each node contains data and reference(s) to other nodes, creating flexible connections.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Memory Efficiency:</strong> No memory waste from pre-allocated unused space.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Reference Management:</strong> Careful pointer manipulation is crucial for maintaining list integrity.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Performance Characteristics</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Insertion (known position):</strong> O(1) - excellent.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Deletion (known position):</strong> O(1) - excellent.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Search:</strong> O(n) - linear scan required.</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Random Access:</strong> O(n) - no index-based access.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Memory Usage:</strong> Only allocated nodes consume memory.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Cache Performance:</strong> Poor due to non-contiguous memory.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">Type Selection Guidelines</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Singly Linked List:</strong> Use when memory is limited and unidirectional traversal suffices.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Doubly Linked List:</strong> Choose when bidirectional traversal or complex operations are needed.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Circular Lists:</strong> Ideal for round-robin scheduling and cyclic data processing.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>SkipList:</strong> Consider for search-intensive applications needing balanced tree alternatives.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-3">Implementation Best Practices</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Dummy Nodes:</strong> Simplify edge case handling in complex list operations.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Link Order:</strong> Always update links in correct sequence to avoid losing references.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Memory Management:</strong> Properly deallocate nodes to prevent memory leaks.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Loop Termination:</strong> Use proper conditions in circular lists to avoid infinite loops.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Remember</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                                        <span>Linked lists excel at insertion/deletion but are slower for searching and random access.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                                        <span>Choose the appropriate list type based on traversal needs and memory constraints.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                                        <span>SkipLists provide probabilistic O(log n) performance without complex balancing.</span>
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

export default List;