import CodeBox from '../components/CodeBox';

function BigO() {
    const algorithm1Example = [
        {
            language: 'python',
            code: `# Algorithm A: Linear Time - O(N)
sum = 0
for i in range(1, N+1):
    sum = sum + i

# Total Operations: 2N + 1
# - Assignment: N + 1
# - Additions: N`,
        },
    ];

    const algorithm2Example = [
        {
            language: 'python',
            code: `# Algorithm B: Quadratic Time - O(N²)
sum = 0
for i in range(1, N+1):
    for j in range(1, i+1):
        sum = sum + 1

# Total Operations: N² + N + 1
# - Assignment: 1 + N*(N + 1)/2
# - Additions: N*(N + 1)/2`,
        },
    ];

    const algorithm3Example = [
        {
            language: 'python',
            code: `# Algorithm C: Constant Time - O(1)
sum = N * (N + 1) / 2

# Total Operations: 4
# - Assignment: 1
# - Multiplication: 1
# - Addition: 1
# - Division: 1`,
        },
    ];

    const linearLoopExample = [
        {
            language: 'python',
            code: `# Example 1: Full iterations
i = 1
while i <= n:
    # some code
    i = i + 1
# Efficiency: O(n)

# Example 2: Half iterations
i = 1
while i <= n:
    # some code
    i = i + 2
# Efficiency: O(n) - constant factor ignored`,
        },
    ];

    const logarithmicLoopExample = [
        {
            language: 'python',
            code: `# Logarithmic Loop - multiplier is 2
i = 1
while i < n:
    # some code
    i = i * 2

# If n = 1000, loop executes ~10 times
# Efficiency: O(log₂n)`,
        },
    ];

    const nestedLoopsExample = [
        {
            language: 'python',
            code: `# Nested Loop Type 1: Both loops execute n times
i = 1
while i <= n:
    j = 1
    while j <= n:
        # some code
        j = j + 1
    i = i + 1
# Efficiency: n * n = O(n²)

# Nested Loop Type 2: Inner loop depends on outer
i = 1
while i <= n:
    j = 1
    while j <= i:
        # some code
        j = j + 1
    i = i + 1
# Total iterations: n + (n-1) + ... + 1 = n(n+1)/2
# Efficiency: O(n²)

# Nested Loop Type 3: One linear, one logarithmic
i = 1
while i <= n:
    j = 1
    while j <= n:
        # some code
        j = j * 2
    i = i + 1
# Efficiency: n * log₂n = O(n log n)`,
        },
    ];

    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        Big O Notation
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">7% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    <strong>Big O Notation</strong> is a mathematical notation used to describe the <strong>efficiency and complexity</strong> of algorithms. 
                    It represents the <strong>worst-case scenario</strong> for how an algorithm's runtime or space requirements grow as the input size increases. 
                    Understanding Big O helps you choose the most efficient algorithm for a problem, optimize code performance, and predict scalability. 
                    This page covers fundamental concepts, common complexities, algorithm analysis techniques, and practical examples to master algorithm efficiency.
                </p>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Understanding Algorithm Efficiency
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Why Efficiency Matters</h4>
                            <p className="text-gray-300 mb-3">
                                For any given problem, there are often <strong>multiple algorithms</strong> that solve it. However, one algorithm may be 
                                <strong> significantly more efficient</strong> than another. The study of efficiency helps us:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-300">
                                <li><strong>Compare algorithms</strong> - Determine which is faster or uses less memory.</li>
                                <li><strong>Predict performance</strong> - Estimate how long an algorithm will take for large inputs.</li>
                                <li><strong>Identify bottlenecks</strong> - Find parts of code that need optimization.</li>
                                <li><strong>Make informed decisions</strong> - Choose the right algorithm for specific constraints.</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Factors Affecting Algorithm Efficiency</h4>
                            <div className="space-y-3 text-gray-300">
                                <div>
                                    <span className="text-purple-400 font-semibold">Loop Structure:</span> Algorithms without loops have constant efficiency. 
                                    Algorithms with loops vary in efficiency based on how loops handle data.
                                </div>
                                <div>
                                    <span className="text-purple-400 font-semibold">Data Size:</span> The amount of data being processed (N) directly affects runtime. 
                                    Larger datasets amplify efficiency differences between algorithms.
                                </div>
                                <div>
                                    <span className="text-purple-400 font-semibold">Data Order:</span> Some algorithms perform differently based on whether data is sorted, 
                                    random, or reverse-ordered.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Example: Three Algorithms to Sum 1 + 2 + ... + N
                    </h3>

                    <p className="text-gray-300 mb-6">
                        Let's compare three different algorithms that compute the sum 1 + 2 + 3 + ... + N to understand how efficiency varies:
                    </p>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Algorithm A</h4>
                            <CodeBox examples={algorithm1Example} title="Linear Approach" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-blue-400">Time:</strong> Proportional to 2N + 1<br/>
                                    <strong className="text-blue-400">Efficiency:</strong> O(N) - Linear
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-red-600 bg-red-900/20 p-5">
                            <h4 className="text-lg font-bold text-red-300 mb-3">Algorithm B</h4>
                            <CodeBox examples={algorithm2Example} title="Nested Loop Approach" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-red-400">Time:</strong> Proportional to N² + N + 1<br/>
                                    <strong className="text-red-400">Efficiency:</strong> O(N²) - Quadratic
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Algorithm C</h4>
                            <CodeBox examples={algorithm3Example} title="Mathematical Formula" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-green-400">Time:</strong> Constant (4 operations)<br/>
                                    <strong className="text-green-400">Efficiency:</strong> O(1) - Constant
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-5">
                        <h4 className="text-lg font-semibold text-blue-300 mb-3">Conclusion</h4>
                        <ul className="text-gray-300 space-y-2">
                            <li className="flex gap-2">
                                <span className="mt-0.5 font-bold">•</span>
                                <span><strong className="">Algorithm B</strong> is the LEAST efficient (slowest).</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-0.5 font-bold">•</span>
                                <span><strong>Algorithm A</strong> is moderately efficient.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-0.5 font-bold">•</span>
                                <span><strong>Algorithm C</strong> is the MOST efficient (fastest).</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Growth Rate of Functions
                    </h3>

                    <p className="text-gray-300 mb-4">
                        Understanding how different functions grow helps visualize why certain algorithms scale better than others:
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="border border-gray-700 px-4 py-2 text-left text-white">N</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left text-cyan-400">log₂N</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left text-green-400">N</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left text-blue-400">N log₂N</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left text-yellow-400">N²</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left text-red-400">2^N</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr>
                                    <td className="border border-gray-700 px-4 py-2 text-white font-semibold">1</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">0</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">1</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">0</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">1</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">2</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-700 px-4 py-2 text-white font-semibold">2</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">1</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">2</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">2</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">4</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">4</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-700 px-4 py-2 text-white font-semibold">4</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">2</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">4</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">8</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">16</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">16</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-700 px-4 py-2 text-white font-semibold">8</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">3</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">8</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">24</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">64</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">256</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-700 px-4 py-2 text-white font-semibold">16</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">4</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">16</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">64</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">256</td>
                                    <td className="border border-gray-700 px-4 py-2 text-gray-300">65,536</td>
                                </tr>
                                <tr className="bg-blue-900/20">
                                    <td className="border border-gray-700 px-4 py-2 text-white font-semibold">32</td>
                                    <td className="border border-gray-700 px-4 py-2 text-cyan-400 font-bold">5</td>
                                    <td className="border border-gray-700 px-4 py-2 text-green-400 font-bold">32</td>
                                    <td className="border border-gray-700 px-4 py-2 text-blue-400 font-bold">160</td>
                                    <td className="border border-gray-700 px-4 py-2 text-yellow-400 font-bold">1,024</td>
                                    <td className="border border-gray-700 px-4 py-2 text-red-400 font-bold">4.29 billion</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                        <p className="text-sm text-gray-300">
                            <strong className="text-orange-400">Notice:</strong> As N grows, exponential functions (2^N) explode dramatically, 
                            while logarithmic functions (log₂N) grow very slowly. This is why we avoid exponential algorithms and prefer logarithmic ones.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Common Big O Complexities
                    </h3>

                    <div className="space-y-4">
                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <h4 className="text-xl font-bold text-green-300">O(1) - Constant Time</h4>
                                <span className="px-2 py-1 bg-green-900/50 border border-green-700 rounded text-xs text-green-400 font-semibold">BEST</span>
                            </div>
                            <p className="text-gray-300 mb-3">
                                The algorithm takes the <strong>same amount of time</strong> regardless of input size. 
                                Instructions execute a fixed number of times.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3">
                                <p className="text-sm text-gray-300 mb-2"><strong className="text-green-400">Example:</strong></p>
                                <ul className="text-sm text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Accessing an array element by index: <code className="bg-gray-700 px-2 py-0.5 rounded">arr[5]</code>.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Simple arithmetic: <code className="bg-gray-700 px-2 py-0.5 rounded">sum = N * (N + 1) / 2</code>.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>If N=1, takes 1 second → If N=100, also takes 1 second.</span>
                                        </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <h4 className="text-xl font-bold text-cyan-300">O(log N) - Logarithmic Time</h4>
                                <span className="px-2 py-1 bg-cyan-900/50 border border-cyan-700 rounded text-xs text-cyan-400 font-semibold">EXCELLENT</span>
                            </div>
                            <p className="text-gray-300 mb-3">
                                The algorithm gets <strong>slightly slower</strong> as N increases. Problems are reduced by a constant fraction at each step 
                                (e.g., halving the search space).
                            </p>
                            <div className="bg-gray-800/50 rounded p-3">
                                <p className="text-sm text-gray-300 mb-2"><strong className="text-cyan-400">Example:</strong></p>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Binary search on a sorted array.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Finding an element in a balanced binary search tree.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>When N=1000, log₂N ≈ 10 → When N=1,000,000, log₂N ≈ 20.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Doubling N only adds a constant to log N.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <h4 className="text-xl font-bold text-blue-300">O(N) - Linear Time</h4>
                                <span className="px-2 py-1 bg-blue-900/50 border border-blue-700 rounded text-xs text-blue-400 font-semibold">GOOD</span>
                            </div>
                            <p className="text-gray-300 mb-3">
                                The algorithm's runtime grows <strong>linearly</strong> with input size. Processing time is directly proportional to N.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3">
                                <p className="text-sm text-gray-300 mb-2"><strong className="text-blue-400">Example:</strong></p>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Traversing an array or list once.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Linear search through unsorted data.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Simple for-loop iterating N times.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>If N=10 takes 10 seconds → If N=100 takes 100 seconds.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <h4 className="text-xl font-bold text-purple-300">O(N log N) - Linearithmic Time</h4>
                                <span className="px-2 py-1 bg-purple-900/50 border border-purple-700 rounded text-xs text-purple-400 font-semibold">FAIR</span>
                            </div>
                            <p className="text-gray-300 mb-3">
                                Occurs with algorithms that have <strong>nested operations</strong> where one is linear and the other is logarithmic.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3">
                                <p className="text-sm text-gray-300 mb-2"><strong className="text-purple-400">Example:</strong></p>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Efficient sorting algorithms (Merge Sort, Quick Sort, Heap Sort).</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>When N=1,000,000, N log₂N ≈ 20,000,000.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>When N doubles, runtime more than doubles (but not by much).</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-lg border border-yellow-600 bg-yellow-900/20 p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <h4 className="text-xl font-bold text-yellow-300">O(N²) - Quadratic Time</h4>
                                <span className="px-2 py-1 bg-yellow-900/50 border border-yellow-700 rounded text-xs text-yellow-400 font-semibold">POOR</span>
                            </div>
                            <p className="text-gray-300 mb-3">
                                The algorithm's runtime is proportional to the <strong>square of input size</strong>. Usually involves nested loops processing each element against every other element.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3">
                                <p className="text-sm text-gray-300 mb-2"><strong className="text-yellow-400">Example:</strong></p>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Nested loops iterating N times each.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Simple sorting algorithms (Bubble Sort, Selection Sort, Insertion Sort).</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>If N=10 takes 100 seconds → If N=100 takes 10,000 seconds.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>When N doubles, runtime increases four-fold.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <h4 className="text-xl font-bold text-orange-300">O(N³) - Cubic Time</h4>
                                <span className="px-2 py-1 bg-orange-900/50 border border-orange-700 rounded text-xs text-orange-400 font-semibold">BAD</span>
                            </div>
                            <p className="text-gray-300 mb-3">
                                The algorithm's runtime is proportional to the <strong>cube of input size</strong>. Usually involves three nested loops.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3">
                                <p className="text-sm text-gray-300 mb-2"><strong className="text-orange-400">Example:</strong></p>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Three nested loops each iterating N times.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>When N=100, runtime is 1,000,000 units.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>When N doubles, runtime increases eight-fold.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-lg border border-red-600 bg-red-900/20 p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <h4 className="text-xl font-bold text-red-300">O(2^N) - Exponential Time</h4>
                                <span className="px-2 py-1 bg-red-900/50 border border-red-700 rounded text-xs text-red-400 font-semibold">TERRIBLE</span>
                            </div>
                            <p className="text-gray-300 mb-3">
                                The algorithm's runtime <strong>doubles</strong> with each additional element. Very few practical algorithms have exponential complexity.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3">
                                <p className="text-sm text-gray-300 mb-2"><strong className="text-red-400">Example:</strong></p>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Brute-force solutions to combinatorial problems</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Recursive Fibonacci without memoization</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>If N=10 takes 1,024 seconds → If N=20 takes 1,048,576 seconds</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Impractical for even moderate input sizes</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-5 bg-linear-to-r from-green-900/20 to-red-900/20 border border-gray-700 rounded-lg">
                        <h4 className="text-lg font-semibold text-white mb-3">Efficiency Ranking (Best to Worst)</h4>
                        <div className="flex flex-wrap gap-2 items-center">
                            <span className="px-3 py-1 bg-green-900/50 border border-green-700 rounded text-green-400 font-semibold">O(1)</span>
                            <span className="text-gray-500">→</span>
                            <span className="px-3 py-1 bg-cyan-900/50 border border-cyan-700 rounded text-cyan-400 font-semibold">O(log N)</span>
                            <span className="text-gray-500">→</span>
                            <span className="px-3 py-1 bg-blue-900/50 border border-blue-700 rounded text-blue-400 font-semibold">O(N)</span>
                            <span className="text-gray-500">→</span>
                            <span className="px-3 py-1 bg-purple-900/50 border border-purple-700 rounded text-purple-400 font-semibold">O(N log N)</span>
                            <span className="text-gray-500">→</span>
                            <span className="px-3 py-1 bg-yellow-900/50 border border-yellow-700 rounded text-yellow-400 font-semibold">O(N²)</span>
                            <span className="text-gray-500">→</span>
                            <span className="px-3 py-1 bg-orange-900/50 border border-orange-700 rounded text-orange-400 font-semibold">O(N³)</span>
                            <span className="text-gray-500">→</span>
                            <span className="px-3 py-1 bg-red-900/50 border border-red-700 rounded text-red-400 font-semibold">O(2^N)</span>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Analyzing Loop Structures
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-6">
                            <h4 className="text-xl font-bold text-blue-400 mb-4">Linear Loops</h4>
                            <p className="text-gray-300 mb-4">
                                Loops where the iteration variable increases by a constant factor are linear, regardless of the increment size.
                            </p>
                            <CodeBox examples={linearLoopExample} title="Linear Loop Examples" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-blue-400">Key Point:</strong> Whether incrementing by 1 or 2, the efficiency is still O(n). 
                                    Big O ignores constant factors.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-6">
                            <h4 className="text-xl font-bold text-cyan-400 mb-4">Logarithmic Loops</h4>
                            <p className="text-gray-300 mb-4">
                                Loops where the iteration variable is multiplied (or divided) by a constant are logarithmic.
                            </p>
                            <CodeBox examples={logarithmicLoopExample} title="Logarithmic Loop Example" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-cyan-400">Key Point:</strong> Multiplying by 2 each iteration means the loop executes log₂n times. 
                                    This grows very slowly as n increases.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-xl font-bold text-purple-400 mb-4">Nested Loops</h4>
                            <p className="text-gray-300 mb-4">
                                The complexity of nested loops is determined by multiplying the complexities of each loop.
                            </p>
                            <CodeBox examples={nestedLoopsExample} title="Nested Loop Patterns" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300 mb-2">
                                    <strong className="text-purple-400">Key Points:</strong>
                                </p>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Independent nested loops: Multiply their complexities (O(n) × O(n) = O(n²))</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Dependent inner loop: Average iterations matter (still typically O(n²))</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span>Mixed loop types: O(n) × O(log n) = O(n log n)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Big O Rules and Guidelines
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-5">
                            <h4 className="text-lg font-bold text-cyan-400 mb-3">Rule 1: Drop Constants</h4>
                            <p className="text-gray-300 mb-3">
                                Big O focuses on growth rate, not precise operations. Constants don't affect how the algorithm scales.
                            </p>
                            <div className="bg-gray-900/50 rounded p-3 text-sm text-gray-300 space-y-1">
                                <div>• <code className="text-red-400">O(2N)</code> becomes <code className="text-green-400">O(N)</code></div>
                                <div>• <code className="text-red-400">O(N/2)</code> becomes <code className="text-green-400">O(N)</code></div>
                                <div>• <code className="text-red-400">O(5)</code> becomes <code className="text-green-400">O(1)</code></div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-5">
                            <h4 className="text-lg font-bold text-cyan-400 mb-3">Rule 2: Drop Non-Dominant Terms</h4>
                            <p className="text-gray-300 mb-3">
                                Keep only the term that grows the fastest as N increases.
                            </p>
                            <div className="bg-gray-900/50 rounded p-3 text-sm text-gray-300 space-y-1">
                                <div>• <code className="text-red-400">O(N² + N)</code> becomes <code className="text-green-400">O(N²)</code></div>
                                <div>• <code className="text-red-400">O(N + log N)</code> becomes <code className="text-green-400">O(N)</code></div>
                                <div>• <code className="text-red-400">O(N³ + N² + N)</code> becomes <code className="text-green-400">O(N³)</code></div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-5">
                            <h4 className="text-lg font-bold text-cyan-400 mb-3">Rule 3: Consider Worst Case</h4>
                            <p className="text-gray-300 mb-3">
                                Big O represents the worst-case scenario unless explicitly stated otherwise.
                            </p>
                            <div className="bg-gray-900/50 rounded p-3 text-sm text-gray-300">
                                For linear search: Even if the target is the first element (best case), Big O is still O(N) because 
                                in the worst case, you must check all N elements.
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-5">
                            <h4 className="text-lg font-bold text-cyan-400 mb-3">Rule 4: Sequential Operations Add</h4>
                            <p className="text-gray-300 mb-3">
                                Operations performed one after another have complexities that add together.
                            </p>
                            <div className="bg-gray-900/50 rounded p-3 text-sm text-gray-300 space-y-1">
                                <div>• Loop 1: O(N) + Loop 2: O(M) = O(N + M)</div>
                                <div>• If both are O(N): O(N) + O(N) = O(2N) = O(N)</div>
                                <div>• Take the dominant: O(N²) + O(N) = O(N²)</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-linear-to-r from-purple-900/20 to-blue-900/20 border border-purple-700 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Real-World Application Examples
                        </h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Stack Operations (Array-Based)</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Push:</strong> O(1) - Add element to top in constant time</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Pop:</strong> O(1) - Remove element from top in constant time</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Peek:</strong> O(1) - Access top element without removal</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-3">Queue Operations (Array-Based)</h4>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-gray-300 mb-2"><strong>Method 1: Fixed Head</strong></p>
                                        <ul className="space-y-1 ml-4">
                                            <li className="flex gap-2">
                                                <span className="text-orange-300 mt-0.5 font-bold">•</span>
                                                <span className="text-gray-300"><strong>Enqueue:</strong> O(1) - Add to tail efficiently</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-orange-300 mt-0.5 font-bold">•</span>
                                                <span className="text-gray-300"><strong>Dequeue:</strong> O(N) - Must shift all elements when removing from head</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 mb-2"><strong>Method 2: Moving Pointers (Circular Queue)</strong></p>
                                        <ul className="space-y-1 ml-4">
                                            <li className="flex gap-2">
                                                <span className="text-orange-300 mt-0.5 font-bold">•</span>
                                                <span className="text-gray-300"><strong>Enqueue:</strong> O(1) - Increment tail pointer</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-orange-300 mt-0.5 font-bold">•</span>
                                                <span className="text-gray-300"><strong>Dequeue:</strong> O(1) - Increment head pointer (no shifting!)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Search Algorithms</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Linear Search:</strong> O(N) - Check each element sequentially</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Binary Search (sorted array):</strong> O(log N) - Halve search space each step</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Hash Table Lookup:</strong> O(1) average case - Direct access</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">Sorting Algorithms</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Bubble/Selection/Insertion Sort:</strong> O(N²) - Simple but slow</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Merge/Quick/Heap Sort:</strong> O(N log N) - Efficient for large datasets</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Counting Sort (specific cases):</strong> O(N + K) - Linear when K is small</span>
                                    </li>
                                </ul>
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
                                        <span><strong>Big O measures growth rate:</strong> How runtime/space scales as input size N increases, not exact operations.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Worst-case by default:</strong> Represents maximum resources needed unless specified otherwise.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Compare algorithms objectively:</strong> Enables informed decisions about which approach scales better.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Complexity Ranking Mastery</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-gray-800/50 rounded p-4">
                                        <h5 className="font-bold text-green-400 mb-2">Efficient Complexities:</h5>
                                        <ul className="text-sm text-gray-300 space-y-1">
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span><strong>O(1)</strong> - Constant, best possible</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span><strong>O(log N)</strong> - Logarithmic, excellent</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span><strong>O(N)</strong> - Linear, good for most cases</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span><strong>O(N log N)</strong> - Linearithmic, efficient sorting</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-4">
                                        <h5 className="font-bold text-red-400 mb-2">Inefficient Complexities:</h5>
                                        <ul className="text-sm text-gray-300 space-y-1">
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span><strong>O(N²)</strong> - Quadratic, avoid when possible</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span><strong>O(N³)</strong> - Cubic, only for small N</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span><strong>O(2^N)</strong> - Exponential, impractical</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Always Remember the Core Principles</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">1.</span>
                                        <span><strong className="text-cyan-400">Efficiency:</strong> Evaluate time & space before coding (see Data Structure Classification).</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">2.</span>
                                        <span><strong className="text-orange-400">Trade-off:</strong> Faster algorithms may use more memory; choose based on constraints.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">3.</span>
                                        <span><strong className="text-green-400">Scalability:</strong> O(N²) works for 10 items but fails for 10,000.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">Analysis Strategy</h4>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <ol className="list-decimal list-inside space-y-2 text-gray-300">
                                        <li><strong>Identify loop structure</strong> - single, nested, sequential, or recursive</li>
                                        <li><strong>Determine increment pattern</strong> - additive (linear) or multiplicative (logarithmic)</li>
                                        <li><strong>Multiply nested complexities</strong> - outer × inner (e.g., O(N) × O(N) = O(N²))</li>
                                        <li><strong>Simplify expression</strong> - drop constants, keep only dominant term</li>
                                    </ol>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-yellow-300 mb-3">Common Patterns Quick Reference</h4>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className="bg-gray-800/50 rounded p-3">
                                        <p className="font-bold text-yellow-400 mb-1">Loop Patterns:</p>
                                        <ul className="text-sm text-gray-300 space-y-0.5">
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>i += k → O(N)</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>i *= k → O(log N)</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>nested independent → O(N²)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-3">
                                        <p className="font-bold text-yellow-400 mb-1">Data Structures:</p>
                                        <ul className="text-sm text-gray-300 space-y-0.5">
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>Array access → O(1)</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>Binary search → O(log N)</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>Hash table → O(1) avg</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-3">
                                        <p className="font-bold text-yellow-400 mb-1">Simplification:</p>
                                        <ul className="text-sm text-gray-300 space-y-0.5">
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>O(5N) → O(N)</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>O(N² + N) → O(N²)</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>O(1000) → O(1)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-3">
                                        <p className="font-bold text-yellow-400 mb-1">Algorithms:</p>
                                        <ul className="text-sm text-gray-300 space-y-0.5">
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>Linear search → O(N)</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>Merge/Quick sort → O(N log N)</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                                <span>Bubble sort → O(N²)</span>
                                            </li>
                                        </ul>
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

export default BigO;