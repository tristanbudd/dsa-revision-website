function DataStructureClassification() {
    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        Data Structure Classification
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">3% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    Data structures can be classified into four main categories based on the relationships between their elements: 
                    <strong> Linear</strong> (one predecessor, one successor), 
                    <strong> Hierarchical</strong> (one predecessor, many successors), 
                    <strong> Graph</strong> (many predecessors, many successors), and 
                    <strong> Set</strong> (no relationships). 
                    This page covers these classifications, fundamental concepts, algorithm approaches, and Abstract Data Types (ADTs) to help understand how to choose and apply the right data structure for any problem.
                </p>

                <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Three Core Principles
                    </h3>
                    
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg border border-cyan-700 bg-cyan-900/20 p-5">
                            <h4 className="text-xl font-bold text-cyan-300 mb-3">Efficiency</h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                <strong>Consumption of Time & Space.</strong> Always evaluate the time and space consumption of your program before coding.
                            </p>
                        </div>

                        <div className="rounded-lg border border-orange-700 bg-orange-900/20 p-5">
                            <h4 className="text-xl font-bold text-orange-400 mb-3">Trade-off</h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                No data structure is perfect for all programs. Some are better suited to specific applications, though they come with trade-offs in time, space, and complexity.
                            </p>
                        </div>

                        <div className="rounded-lg border border-green-700 bg-green-900/20 p-5">
                            <h4 className="text-xl font-bold text-green-300 mb-3">Tools</h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Most data structures and algorithms are pre-built, ready-to-use solutions. Avoid reinventing the wheel when these tools are available.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Fundamental Concepts
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">What is a Data Structure?</h4>
                            <p className="text-gray-300 mb-3">
                                A <strong>Data Structure</strong> consists of:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-300">
                                <li><strong>Collection of elements</strong> - each of which is either a data type or another data structure.</li>
                                <li><strong>Set of associations or relationships</strong> - the structure involving the collection of elements.</li>
                            </ul>
                            <p className="mt-3 text-gray-300">
                                The study of Data Structures is about <em>how data is stored in memory to ensure efficient processing</em>.
                            </p>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">What is an Algorithm?</h4>
                            <p className="text-gray-300">
                                An <strong>Algorithm</strong> is a step-by-step procedure for performing some task in a finite amount of time. 
                                Algorithms and data structures go hand in hand - most algorithms involve methods of organizing data, 
                                and the choice of data structure significantly affects algorithm efficiency.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Four Types of Data Structures
                    </h3>

                    <div className="space-y-8">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-6">
                            <h4 className="text-2xl font-bold text-blue-400 mb-4">1. Linear Structure</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                In a linear data structure, elements are arranged in a <strong>sequential manner</strong> where each element 
                                is connected to its previous and next element. Each node has exactly <strong>one predecessor</strong> (except the first) 
                                and <strong>one successor</strong> (except the last).
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-blue-300 mb-2">Visual Representation:</h5>
                                <div className="flex items-center justify-center p-4 bg-gray-800/50 rounded overflow-x-auto">
                                    <div className="flex flex-col md:flex-row items-center gap-2">
                                        <div className="w-16 h-12 border-2 border-blue-400 rounded flex items-center justify-center text-blue-300 font-mono flex-shrink-0">A</div>
                                        <span className="text-blue-400 text-2xl md:rotate-0 rotate-90">→</span>
                                        <div className="w-16 h-12 border-2 border-blue-400 rounded flex items-center justify-center text-blue-300 font-mono flex-shrink-0">B</div>
                                        <span className="text-blue-400 text-2xl md:rotate-0 rotate-90">→</span>
                                        <div className="w-16 h-12 border-2 border-blue-400 rounded flex items-center justify-center text-blue-300 font-mono flex-shrink-0">C</div>
                                        <span className="text-blue-400 text-2xl md:rotate-0 rotate-90">→</span>
                                        <div className="w-16 h-12 border-2 border-blue-400 rounded flex items-center justify-center text-blue-300 font-mono flex-shrink-0">D</div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 mt-2 text-center">Each element points to the next element in sequence.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-semibold text-blue-300 mb-2">Characteristics:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Sequential access to elements.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Single level structure.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Elements have defined order.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Traversal is straightforward.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-semibold text-blue-300 mb-2">Common Examples:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Array:</strong> Fixed-size, contiguous memory.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Stack:</strong> LIFO (Last In, First Out).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Queue:</strong> FIFO (First In, First Out).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Linked List:</strong> Dynamic size, pointer-based.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-6">
                            <h4 className="text-2xl font-bold text-green-400 mb-4">2. Hierarchical Structure</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Hierarchical structures organize data in a <strong>tree-like</strong> format with a <strong>parent-child relationship</strong>. 
                                Each node has <strong>one predecessor</strong> (parent) except the root, and can have <strong>multiple successors</strong> (children). 
                                This creates levels of data organization from general to specific.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-green-300 mb-2">Visual Representation:</h5>
                                <div className="p-4 bg-gray-800/50 rounded overflow-x-auto">
                                    <div className="flex flex-col items-center gap-3 min-w-62.5 mx-auto w-fit">
                                        <div className="w-16 h-10 md:h-12 border-2 border-green-400 rounded flex items-center justify-center text-green-300 font-mono text-sm md:text-base shrink-0">50</div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-green-400 text-xl md:text-2xl">↙</span>
                                            <span className="text-green-400 text-xl md:text-2xl mx-3 md:mx-6">↓</span>
                                            <span className="text-green-400 text-xl md:text-2xl">↘</span>
                                        </div>
                                        <div className="flex items-center gap-4 md:gap-8">
                                            <div className="w-12 h-8 md:w-14 md:h-10 border-2 border-green-400 rounded flex items-center justify-center text-green-300 font-mono text-xs md:text-sm shrink-0">30</div>
                                            <div className="w-12 h-8 md:w-14 md:h-10 border-2 border-green-400 rounded flex items-center justify-center text-green-300 font-mono text-xs md:text-sm shrink-0">70</div>
                                            <div className="w-12 h-8 md:w-14 md:h-10 border-2 border-green-400 rounded flex items-center justify-center text-green-300 font-mono text-xs md:text-sm shrink-0">80</div>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <div className="flex flex-col items-center">
                                                <div className="flex gap-1">
                                                    <span className="text-green-400 text-sm md:text-base">↙</span>
                                                    <span className="text-green-400 text-sm md:text-base mx-2">↘</span>
                                                </div>
                                                <div className="flex gap-3 md:gap-4 mt-2">
                                                    <div className="w-10 h-7 md:w-12 md:h-8 border-2 border-green-400 rounded flex items-center justify-center text-green-300 font-mono text-xs shrink-0">20</div>
                                                    <div className="w-10 h-7 md:w-12 md:h-8 border-2 border-green-400 rounded flex items-center justify-center text-green-300 font-mono text-xs shrink-0">40</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 mt-2 text-center">Tree structure with parent-child relationships.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-semibold text-green-300 mb-2">Characteristics:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Organized in levels/hierarchy.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Each child has only one parent.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Root node has no parent.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Leaf nodes have no children.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-semibold text-green-300 mb-2">Common Examples:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Binary Tree:</strong> Max 2 children per node.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>AVL Tree:</strong> Self-balancing BST.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>B/B+ Tree:</strong> Multi-way search trees.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Heap:</strong> Complete binary tree for priority.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-2xl font-bold text-purple-400 mb-4">3. Network or Graph Structure</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Graph structures represent <strong>complex relationships</strong> where connections between elements can be arbitrary. 
                                Each node (vertex) can have <strong>many predecessors</strong> and <strong>many successors</strong>, creating a 
                                flexible network of relationships. Connections (edges) can be directed or undirected, weighted or unweighted.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-purple-300 mb-2">Visual Representation:</h5>
                                <div className="p-4 bg-gray-800/50 rounded overflow-x-auto">
                                    <div className="relative w-full max-w-md h-40 md:h-48 min-w-70 mx-auto">
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 border-2 border-purple-400 rounded-full flex items-center justify-center text-purple-300 font-mono text-sm md:text-base bg-gray-800">A</div>
                                        <div className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border-2 border-purple-400 rounded-full flex items-center justify-center text-purple-300 font-mono text-sm md:text-base bg-gray-800">B</div>
                                        <div className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border-2 border-purple-400 rounded-full flex items-center justify-center text-purple-300 font-mono text-sm md:text-base bg-gray-800">C</div>
                                        <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 border-2 border-purple-400 rounded-full flex items-center justify-center text-purple-300 font-mono text-sm md:text-base bg-gray-800">D</div>
                                        <div className="absolute bottom-0 right-1/3 transform translate-x-1/2 w-10 h-10 md:w-12 md:h-12 border-2 border-purple-400 rounded-full flex items-center justify-center text-purple-300 font-mono text-sm md:text-base bg-gray-800">E</div>

                                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                            <line x1="50%" y1="12" x2="20" y2="50%" stroke="#a78bfa" strokeWidth="2"/>
                                            <line x1="50%" y1="12" x2="calc(100% - 20px)" y2="50%" stroke="#a78bfa" strokeWidth="2"/>
                                            <line x1="20" y1="50%" x2="33%" y2="calc(100% - 12px)" stroke="#a78bfa" strokeWidth="2"/>
                                            <line x1="calc(100% - 20px)" y1="50%" x2="67%" y2="calc(100% - 12px)" stroke="#a78bfa" strokeWidth="2"/>
                                            <line x1="33%" y1="calc(100% - 12px)" x2="67%" y2="calc(100% - 12px)" stroke="#a78bfa" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 mt-2 text-center">Multiple connections between nodes forming a network.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-semibold text-purple-300 mb-2">Characteristics:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Non-linear, complex relationships.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Can contain cycles.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Edges can be directed/undirected.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>May have weighted connections.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-semibold text-purple-300 mb-2">Common Examples:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Social Networks:</strong> Friend connections.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Road Maps:</strong> Cities and routes.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Computer Networks:</strong> Device connections.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Dependency Graphs:</strong> Task relationships.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-6">
                            <h4 className="text-2xl font-bold text-orange-400 mb-4">4. Set Structure</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                A set is an <strong>unordered collection</strong> of <strong>unique elements</strong> with <strong>no defined relationships</strong>
                                &nbsp;between items. Elements have <strong>no predecessors or successors</strong> - they simply exist as members of the collection. 
                                The primary concern is membership testing and mathematical set operations.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-orange-300 mb-2">Visual Representation:</h5>
                                <div className="p-4 bg-gray-800/50 rounded overflow-x-auto">
                                    <div className="border-4 border-orange-400 rounded-full w-56 h-40 md:w-64 md:h-48 flex items-center justify-center flex-shrink-0 mx-auto">
                                        <div className="flex flex-wrap gap-2 md:gap-3 justify-center p-4">
                                            <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-orange-400 rounded-full flex items-center justify-center text-orange-300 font-mono text-sm md:text-base bg-gray-800 flex-shrink-0">7</div>
                                            <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-orange-400 rounded-full flex items-center justify-center text-orange-300 font-mono text-sm md:text-base bg-gray-800 flex-shrink-0">3</div>
                                            <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-orange-400 rounded-full flex items-center justify-center text-orange-300 font-mono text-sm md:text-base bg-gray-800 flex-shrink-0">9</div>
                                            <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-orange-400 rounded-full flex items-center justify-center text-orange-300 font-mono text-sm md:text-base bg-gray-800 flex-shrink-0">1</div>
                                            <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-orange-400 rounded-full flex items-center justify-center text-orange-300 font-mono text-sm md:text-base bg-gray-800 flex-shrink-0">5</div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 mt-2 text-center">Unordered collection with no relationships between elements.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-semibold text-orange-300 mb-2">Characteristics:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>No defined order.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Only unique elements (no duplicates).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>No predecessor/successor concept.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Fast membership testing.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-semibold text-orange-300 mb-2">Common Operations:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Union:</strong> Combine two sets.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Intersection:</strong> Common elements.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Difference:</strong> Elements in A but not B.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><strong>Membership:</strong> Check if element exists.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-blue-900/20 border border-blue-700 rounded-lg p-5">
                        <h4 className="text-lg font-semibold text-blue-300 mb-3">Choosing the Right Data Structure</h4>
                        <p className="text-gray-300 mb-3">The process involves:</p>
                        <ol className="list-decimal list-inside space-y-2 ml-2 text-gray-300">
                            <li><strong>Analysing the problem</strong> - What are you trying to solve?.</li>
                            <li><strong>Determining basic operations needed</strong> - Insert, delete, search, traverse?.</li>
                            <li><strong>Selecting the appropriate data structure</strong> - Match operations to structure strengths.</li>
                        </ol>
                        <p className="mt-3 text-gray-300">
                            Choosing the <span className="text-green-400 font-semibold">right</span> data structure makes operations simple and efficient. 
                            Choosing the <span className="text-red-400 font-semibold">wrong</span> data structure makes operations cumbersome and inefficient.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Classification of Algorithms
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold border-b border-gray-700">Algorithm Type</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold border-b border-gray-700">Description</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold border-b border-gray-700">Examples</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-semibold align-top">Brute Force</td>
                                    <td className="px-4 py-3 text-gray-300 text-sm align-top">
                                        Considers all possibilities and selects the best solution. Simple but infeasible as possibilities grow exponentially.
                                    </td>
                                    <td className="px-4 py-3 text-gray-400 text-sm align-top">Chess game analysis, Exhaustive search.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-3 text-green-400 font-semibold align-top">Divide and Conquer</td>
                                    <td className="px-4 py-3 text-gray-300 text-sm align-top">
                                        Recursively breaks problem into sub-problems until simple enough to solve directly, then combines solutions.
                                    </td>
                                    <td className="px-4 py-3 text-gray-400 text-sm align-top">Merge Sort, Quicksort, Binary Search.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-3 text-purple-400 font-semibold align-top">Backtracking</td>
                                    <td className="px-4 py-3 text-gray-300 text-sm align-top">
                                        Constructs partial solutions and backtracks when inconsistencies occur. Useful when many initial solutions exist but few survive tests.
                                    </td>
                                    <td className="px-4 py-3 text-gray-400 text-sm align-top">Maze routing, Eight Queens, Knight's Tour.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-orange-400 font-semibold align-top">Greedy</td>
                                    <td className="px-4 py-3 text-gray-300 text-sm align-top">
                                        Makes locally optimal decisions at each stage without reconsidering. Hopes local optimum leads to global optimum.
                                    </td>
                                    <td className="px-4 py-3 text-gray-400 text-sm align-top">Dijkstra's, Huffman Coding, MST algorithms.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Abstract Data Type (ADT)
                    </h3>

                    <p className="text-gray-300 mb-4">
                        An <strong>Abstract Data Type (ADT)</strong> is a collection of data and associated subprograms/methods 
                        stored as a single module. An ADT enables you to interact with a data structure without knowing 
                        how it's implemented.
                    </p>

                    <div className="bg-purple-900/20 border border-purple-700 rounded-lg p-5 mb-6">
                        <h4 className="text-lg font-semibold text-purple-300 mb-3">Key Principles</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Data cannot be accessed directly.</li>
                            <li>Data can only be accessed indirectly via associated methods.</li>
                            <li>An ADT describes <strong>WHAT</strong> information is stored without details about <strong>HOW</strong>.</li>
                        </ul>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold border-b border-gray-700">Abstract Data Type</th>
                                    <th className="px-4 py-3 text-left text-white font-semibold border-b border-gray-700">Data Structure</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-3 text-gray-300 text-sm">A high-level description - the logical picture.</td>
                                    <td className="px-4 py-3 text-gray-300 text-sm">A concrete description - collection of data type elements.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-3 text-gray-300 text-sm">Concerned with <strong>what</strong> it can do.</td>
                                    <td className="px-4 py-3 text-gray-300 text-sm">Concerned with <strong>how</strong> a task is done.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-300 text-sm">Implementation <strong>independent</strong>.</td>
                                    <td className="px-4 py-3 text-gray-300 text-sm">Implementation <strong>dependent</strong>.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 bg-gray-800/50 border border-gray-700 rounded-lg p-5">
                        <h4 className="text-lg font-semibold text-white mb-3">Example: The Car Analogy</h4>
                        <p className="text-gray-300 mb-2">
                            Think of a car as an ADT with operations: <code className="bg-gray-700 px-2 py-1 rounded">steer</code>, 
                            <code className="bg-gray-700 px-2 py-1 rounded mx-1">accelerate</code>, and 
                            <code className="bg-gray-700 px-2 py-1 rounded">brake</code>.
                        </p>
                        <p className="text-gray-300">
                            Most drivers can operate any car since the ADT presents a uniform method of operation. Two cars may implement 
                            these operations differently (front-wheel vs. rear-wheel drive), but the driver doesn't need to know the details.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Common ADT Applications
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Stack ADT</h4>
                            <p className="text-gray-300 mb-3">
                                A <strong>Last-In First-Out (LIFO)</strong> structure where only the most recently inserted object can be removed.
                            </p>
                            <div className="mb-3">
                                <p className="font-bold text-gray-400 mb-2">Operations:</p>
                                <ul className="text-sm text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><code className="bg-gray-700 px-1 rounded">push()</code> - Add element to top.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><code className="bg-gray-700 px-1 rounded">pop()</code> - Remove element from top.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><code className="bg-gray-700 px-1 rounded">peek()</code> - View top element.</span>
                                        </li>
                                </ul>
                            </div>
                            <div className="bg-gray-900/50 rounded p-2 text-xs text-gray-400">
                                Examples: Undo functionality, bracket matching, recursion.
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
                            <h4 className="text-xl font-bold text-green-400 mb-3">Queue ADT</h4>
                            <p className="text-gray-300 mb-3">
                                A <strong>First-In First-Out (FIFO)</strong> structure where the longest-stored object is removed next.
                            </p>
                            <div className="mb-3">
                                <p className="font-bold text-gray-400 mb-2">Operations:</p>
                                <ul className="text-sm text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><code className="bg-gray-700 px-1 rounded">enqueue()</code> - Add element to rear.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><code className="bg-gray-700 px-1 rounded">dequeue()</code> - Remove element from front.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span><code className="bg-gray-700 px-1 rounded">peek()</code> - View front element.</span>
                                        </li>
                                </ul>
                            </div>
                            <div className="bg-gray-900/50 rounded p-2 text-xs text-gray-400">
                                Examples: Task scheduling, print queue, BFS algorithm.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-linear-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">Key Takeaways</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">Core Understanding</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Data Structures = Memory Organization:</strong> They define how data is stored in memory to enable efficient processing and retrieval.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Algorithms = Step-by-Step Procedures:</strong> The choice of data structure directly impacts algorithm efficiency and complexity.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>ADT vs Implementation:</strong> Abstract Data Types describe WHAT operations are available, while data structures describe HOW they're implemented.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Classification Mastery</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-gray-800/50 rounded p-4">
                                        <p className="font-semibold text-green-400 mb-2">Linear (1→1):</p>
                                        <p className="text-sm text-gray-300">Each element has one predecessor and one successor. Sequential access. Best for ordered data processing.</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-4">
                                        <p className="font-semibold text-green-400 mb-2">Hierarchical (1→Many):</p>
                                        <p className="text-sm text-gray-300">Each element has one parent but multiple children. Ideal for representing hierarchies and relationships.</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-4">
                                        <p className="font-semibold text-purple-400 mb-2">Graph (Many→Many):</p>
                                        <p className="text-sm text-gray-300">Complex relationships with multiple connections. Essential for networks, dependencies, and pathfinding.</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-4">
                                        <p className="font-semibold text-orange-400 mb-2">Set (No relationships):</p>
                                        <p className="text-sm text-gray-300">Unordered unique elements. Focus on membership testing and mathematical set operations.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Always Remember the Three Principles</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">1.</span>
                                        <span><strong className="text-cyan-400">Efficiency:</strong> Analyze time and space complexity before implementation. Consider Big O notation for worst-case scenarios.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">2.</span>
                                        <span><strong className="text-orange-400">Trade-offs:</strong> No data structure is perfect. Fast insertion might mean slow search. Optimize for your specific use case.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">3.</span>
                                        <span><strong className="text-green-400">Tools:</strong> Use built-in implementations when available. Don't reinvent the wheel unless you have a specific reason.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">Data Structure Selection Strategy</h4>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                                        <li><strong>Analyze the problem:</strong> What type of data am I storing? What patterns exist?</li>
                                        <li><strong>Identify operations:</strong> Will I insert, delete, search, or traverse more frequently?</li>
                                        <li><strong>Consider constraints:</strong> Memory limitations? Time requirements? Concurrent access?</li>
                                        <li><strong>Choose structure:</strong> Match your needs to structure strengths. Linear for sequences, trees for hierarchies, graphs for networks.</li>
                                        <li><strong>Evaluate trade-offs:</strong> Is O(1) insertion worth O(n) search time for your use case?</li>
                                    </ol>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-yellow-300 mb-3">Algorithm Approaches Quick Reference</h4>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className="flex flex-col bg-gray-800/50 rounded p-3">
                                        <span className="text-cyan-400 font-bold">Brute Force:</span>
                                        <span className="text-sm text-gray-300">Try everything, simple but slow. Use when problem space is small.</span>
                                    </div>
                                    <div className="flex flex-col bg-gray-800/50 rounded p-3">
                                        <span className="text-green-400 font-bold">Divide & Conquer:</span>
                                        <span className="text-sm text-gray-300">Break down, solve, combine. Reduces complexity logarithmically.</span>
                                    </div>
                                    <div className="flex flex-col bg-gray-800/50 rounded p-3">
                                        <span className="text-purple-400 font-bold">Backtracking:</span>
                                        <span className="text-sm text-gray-300">Try solutions, backtrack on failure. Good for constraint problems.</span>
                                    </div>
                                    <div className="flex flex-col bg-gray-800/50 rounded p-3">
                                        <span className="text-orange-400 font-bold">Greedy:</span>
                                        <span className="text-sm text-gray-300">Make local optimal choices. Fast but doesn't guarantee global optimum.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DataStructureClassification;