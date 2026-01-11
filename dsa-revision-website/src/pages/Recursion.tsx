import CodeBox from '../components/CodeBox';

function Recursion() {
    const fibonacciRecursiveExample = [
        {
            language: 'python',
            code: `def fibo(N):
    if N == 1 or N == 2:
        return 1  # Stopping case: Fibo(1) and Fibo(2) are both 1
    else:
        return fibo(N - 1) + fibo(N - 2)
        # Recursive steps: sum of the two preceding numbers

# Example usage
print(fibo(6))  # Output: 8`,
        },
    ];

    const fibonacciIterativeExample = [
        {
            language: 'python',
            code: `def fibo(N):
    previous = 1  # Set the previous Fibonacci number
    current = 1   # Set the current Fibonacci number
    
    if N == 1 or N == 2:
        return 1  # Stopping case: Fibo(1) and Fibo(2) are both 1
    else:
        # Loop from 3 to N to calculate Fibonacci numbers iteratively
        for i in range(3, N + 1):
            temp = current  # Temporarily store the current value
            current = current + previous  # Update current
            previous = temp  # Move current value to previous
        return current  # Return the Fibonacci number for N

# Example usage
print(fibo(6))  # Output: 8`,
        },
    ];

    const factorialExample = [
        {
            language: 'python',
            code: `def factorial(n):
    if n == 0:
        return 1  # Stopping case: factorial of 0 is 1
    else:
        return n * factorial(n - 1)
        # Recursive steps: n * factorial of (n-1)

# Example usage
print(factorial(5))  # Output: 120`,
        },
    ];

    const gcdExample = [
        {
            language: 'python',
            code: `def gcd(n, m):
    if n == m:
        return n  # Stopping case: numbers are equal
    elif n < m:
        return gcd(m - n, n)  # Recursive step
    else:
        return gcd(n - m, m)  # Recursive step

# Example usage
print(gcd(27, 18))  # Output: 9
print(gcd(28, 19))  # Output: 1`,
        },
    ];

    const mergeSortExample = [
        {
            language: 'python',
            code: `def merge_sort(arr, start, end):
    if start >= end:
        return  # Stopping case: single element or empty
    
    mid = (end - start) // 2 + start
    merge_sort(arr, start, mid)  # Sort left half
    merge_sort(arr, mid + 1, end)  # Sort right half
    merge(arr, start, mid, end)  # Merge sorted halves

def merge(arr, start, mid, end):
    temp = []
    p1, p2 = start, mid + 1
    
    # Compare and merge
    while p1 <= mid and p2 <= end:
        if arr[p1] < arr[p2]:
            temp.append(arr[p1])
            p1 += 1
        else:
            temp.append(arr[p2])
            p2 += 1
    
    # Copy remaining elements
    while p1 <= mid:
        temp.append(arr[p1])
        p1 += 1
    while p2 <= end:
        temp.append(arr[p2])
        p2 += 1
    
    # Update original array
    for i in range(len(temp)):
        arr[start + i] = temp[i]`,
        },
    ];

    const quickSortExample = [
        {
            language: 'python',
            code: `def quick_sort(arr, start, end):
    if start < end:
        # After partition, pivot is in correct position
        pivot = partition(arr, start, end)
        quick_sort(arr, start, pivot - 1)  # Sort left
        quick_sort(arr, pivot + 1, end)    # Sort right

def partition(arr, start, end):
    pivot = arr[end]  # Choose last element as pivot
    i = start
    
    for j in range(start, end):
        if arr[j] < pivot:
            # Swap smaller element with larger
            arr[j], arr[i] = arr[i], arr[j]
            i += 1
    
    # Place pivot in correct position
    arr[end], arr[i] = arr[i], arr[end]
    return i`,
        },
    ];

    const palindromeExample = [
        {
            language: 'python',
            code: `def palindrome(s):
    if len(s) == 0 or len(s) == 1:
        return True  # Stopping case: empty or single char
    elif s[0] != s[len(s) - 1]:
        return False  # First and last don't match
    else:
        # Check substring excluding first and last
        return palindrome(s[1 : len(s) - 1])

# Example usage
print(palindrome("hannah"))   # Output: True
print(palindrome("12321"))    # Output: True
print(palindrome("abcdba"))   # Output: False`,
        },
    ];

    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        Recursion & Backtracking
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">10% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    <strong>Recursion</strong> is a programming technique where a function calls itself to solve a problem by breaking it down into smaller, 
                    similar subproblems. It provides an elegant alternative to iterative loops for problems that have a <strong>natural recursive structure</strong>. 
                    Recursive solutions require a <strong>stopping case</strong> (base case) and <strong>recursive steps</strong> that move toward the base case. 
                    While powerful, recursion must be used carefully as it can be inefficient for certain problems. This page covers fundamental recursive 
                    algorithms, backtracking techniques, sorting algorithms, and best practices for when to use recursion.
                </p>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        What is Recursion?
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-blue-700 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-semibold text-blue-300 mb-3">Core Concept</h4>
                            <p className="text-gray-300 mb-3">
                                Recursion occurs when a function <strong>calls itself</strong> to solve a smaller version of the same problem. 
                                Each recursive call works on a progressively smaller input until reaching a <strong>base case</strong> that can be 
                                solved directly without further recursion.
                            </p>
                            <div className="bg-gray-800/50 rounded p-4 space-y-2">
                                <div className="text-gray-300">
                                    <span className="text-blue-400 font-semibold">Stopping Case (Base Case):</span> The condition where the solution 
                                    is immediately known, terminating further recursive calls.
                                </div>
                                <div className="text-gray-300">
                                    <span className="text-blue-400 font-semibold">Recursive Steps:</span> Well-defined rules that reduce the problem 
                                    size and eventually lead to the stopping case.
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">How Recursion Works</h4>
                            <p className="text-gray-300 mb-3">
                                Behind the scenes, recursion uses a <strong>call stack</strong> to manage function calls:
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-purple-400 mt-0.5 font-bold">1.</span>
                                    <span>Each recursive call is pushed onto the stack with its own parameters and local variables</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-400 mt-0.5 font-bold">2.</span>
                                    <span>When the base case is reached, the stack begins to unwind</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-400 mt-0.5 font-bold">3.</span>
                                    <span>Each function returns its result to the previous caller</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-400 mt-0.5 font-bold">4.</span>
                                    <span>The final result propagates back up through all recursive calls</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-lg border border-orange-700 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-semibold text-orange-300 mb-3">When to Use Recursion</h4>
                            <p className="text-gray-300 mb-3">
                                Recursion is appropriate when <strong>all</strong> of the following conditions are met:
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">✓</span>
                                    <span>The problem is naturally suited to recursion (tree structures, divide-and-conquer)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">✓</span>
                                    <span>The recursive solution is shorter and more understandable than iterative</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">✓</span>
                                    <span>It runs within acceptable time and space limits</span>
                                </li>
                            </ul>
                            <div className="mt-3 p-3 bg-red-900/30 rounded border border-red-700">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-orange-400">Warning:</strong> Avoid recursion for problems with excessive redundant calculations 
                                    (like naive Fibonacci) or when tail-end recursion can be easily converted to iteration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Classic Example: Factorial
                    </h3>

                    <p className="text-gray-300 mb-4">
                        The factorial of n (written n!) is the product of all positive integers from 1 to n. For example: 5! = 5 × 4 × 3 × 2 × 1 = 120
                    </p>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-5">
                            <h4 className="text-lg font-bold text-cyan-300 mb-3">Recursive Definition</h4>
                            <div className="bg-gray-800/50 rounded p-4 mb-3">
                                <p className="text-gray-300 mb-2">factorial(n) = </p>
                                <ul className="text-gray-300 space-y-1 ml-6">
                                    <li>• 1 if n = 0 <span className="text-cyan-400">(stopping case)</span></li>
                                    <li>• n × factorial(n-1) if n ≥ 1 <span className="text-cyan-400">(recursive steps)</span></li>
                                </ul>
                            </div>
                            <CodeBox examples={factorialExample} title="Recursive Implementation" />
                        </div>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-5">
                        <h4 className="text-lg font-semibold text-blue-300 mb-3">Analysis</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex gap-2">
                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                <span><strong>Time Complexity:</strong> O(N) - makes N recursive calls</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                <span><strong>Space Complexity:</strong> O(N) - call stack depth of N</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                <span><strong>Note:</strong> An iterative solution would use O(1) space, making it more efficient for this problem</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Fibonacci Numbers: The Cost of Recursion
                    </h3>

                    <p className="text-gray-300 mb-6">
                        The Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21, ...) demonstrates both the elegance and danger of recursion. 
                        Each number is the sum of the previous two: F(N) = F(N-1) + F(N-2).
                    </p>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-red-600 bg-red-900/20 p-5">
                            <h4 className="text-lg font-bold text-red-300 mb-3">Recursive Approach (Inefficient)</h4>
                            <CodeBox examples={fibonacciRecursiveExample} title="Naive Recursive Implementation" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-red-400">Problem:</strong> To calculate fibo(30), this requires <strong>832,039 additions</strong>! 
                                    The 6th Fibonacci number alone recalculates fibo(4) twice and fibo(3) three times.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Iterative Approach (Efficient)</h4>
                            <CodeBox examples={fibonacciIterativeExample} title="Optimized Iterative Implementation" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-green-400">Solution:</strong> To calculate fibo(30), this requires only <strong>28 additions</strong>! 
                                    No redundant calculations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-900/20 border border-orange-700 rounded-lg p-5">
                        <h4 className="text-lg font-semibold text-orange-300 mb-3">Key Lesson</h4>
                        <p className="text-gray-300">
                            The recursive Fibonacci demonstrates that <strong>elegant code isn't always efficient code</strong>. 
                            Always consider the hidden cost of recursion - redundant calculations and stack overhead can make 
                            recursive solutions impractical even when they're conceptually clearer.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Essential Recursive Algorithms
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-6">
                            <h4 className="text-xl font-bold text-cyan-400 mb-4">Greatest Common Divisor (GCD)</h4>
                            <p className="text-gray-300 mb-4">
                                The GCD of two integers is the largest number that divides both. If they're equal, the GCD is that number. 
                                Otherwise, GCD(n, m) = GCD(min(n, m), |n - m|).
                            </p>
                            <CodeBox examples={gcdExample} title="Recursive GCD Algorithm" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-cyan-400">Complexity:</strong> Time O(log(min(n, m))), Space O(log(min(n, m))) for call stack
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-xl font-bold text-purple-400 mb-4">Palindrome Checker</h4>
                            <p className="text-gray-300 mb-4">
                                A palindrome reads the same forwards and backwards (e.g., "hannah", "12321"). 
                                Recursively check if the first and last characters match, then check the substring between them.
                            </p>
                            <CodeBox examples={palindromeExample} title="Recursive Palindrome Check" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-purple-400">Complexity:</strong> Time O(N), Space O(N) for call stack where N is string length
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Recursive Sorting Algorithms
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-6">
                            <h4 className="text-xl font-bold text-blue-400 mb-4">Merge Sort (Divide and Conquer)</h4>
                            <p className="text-gray-300 mb-4">
                                Merge Sort recursively divides the array into halves until each part has at most one element, 
                                then merges the sorted halves back together.
                            </p>
                            <CodeBox examples={mergeSortExample} title="Merge Sort Implementation" />
                            <div className="mt-3 space-y-2">
                                <div className="p-3 bg-gray-800/50 rounded">
                                    <p className="text-sm text-gray-300">
                                        <strong className="text-blue-400">Complexity:</strong> Time O(N log N), Space O(N) for temporary arrays
                                    </p>
                                </div>
                                <div className="p-3 bg-green-900/30 rounded border border-green-700">
                                    <p className="text-sm text-gray-300">
                                        <strong className="text-green-400">Advantages:</strong> Stable sort, guaranteed O(N log N) performance, 
                                        good for linked lists
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-yellow-600 bg-yellow-900/20 p-6">
                            <h4 className="text-xl font-bold text-yellow-400 mb-4">Quick Sort (Pivot Partitioning)</h4>
                            <p className="text-gray-300 mb-4">
                                Quick Sort selects a pivot element and partitions the array into two groups: elements smaller than the pivot 
                                and elements larger. It then recursively sorts both groups.
                            </p>
                            <CodeBox examples={quickSortExample} title="Quick Sort Implementation" />
                            <div className="mt-3 space-y-2">
                                <div className="p-3 bg-gray-800/50 rounded">
                                    <p className="text-sm text-gray-300">
                                        <strong className="text-yellow-400">Complexity:</strong> Time O(N log N) average, O(N²) worst case, 
                                        Space O(log N) for call stack
                                    </p>
                                </div>
                                <div className="p-3 bg-orange-900/30 rounded border border-orange-700">
                                    <p className="text-sm text-gray-300">
                                        <strong className="text-orange-400">Note:</strong> In-place sorting (no extra arrays), fast average case, 
                                        but worst case occurs with already sorted data (poor pivot choice)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Tail-End Recursion
                    </h3>

                    <div className="rounded-lg border border-green-700 bg-green-900/20 p-6">
                        <h4 className="text-lg font-semibold text-green-300 mb-3">What is Tail-End Recursion?</h4>
                        <p className="text-gray-300 mb-4">
                            Tail-end recursion occurs when the recursive call is the <strong>very last operation</strong> in the function, 
                            with no further computation after the recursive call returns.
                        </p>
                        
                        <div className="bg-gray-800/50 rounded p-4 mb-4">
                            <p className="text-sm text-gray-300 mb-2"><strong className="text-green-400">Characteristics:</strong></p>
                            <ul className="text-sm text-gray-300 space-y-1">
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">•</span>
                                    <span>One recursive call in the function</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">•</span>
                                    <span>Recursive call is the last statement executed</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">•</span>
                                    <span>No operations performed on the return value</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-400 mt-0.5 font-bold">•</span>
                                    <span>Can always be converted to an iterative solution</span>
                                </li>
                            </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-red-900/30 rounded p-4 border border-red-700">
                                <p className="font-bold text-orange-400 mb-2">Not Tail-End Recursion:</p>
                                <p className="text-xs text-gray-300 font-mono">
                                    return n + sum(n-1)
                                </p>
                                <p className="text-xs text-gray-300 mt-2">
                                    After the recursive call returns, addition must be performed
                                </p>
                            </div>
                            <div className="bg-green-900/30 rounded p-4 border border-green-700">
                                <p className="font-bold text-green-400 mb-2">Tail-End Recursion:</p>
                                <p className="text-xs text-gray-300 font-mono">
                                    return factorial(n-1)
                                </p>
                                <p className="text-xs text-gray-300 mt-2">
                                    Recursive call is the last thing the function does
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-linear-to-r from-purple-900/20 to-blue-900/20 border border-purple-700 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Real-World Applications
                        </h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Tree and Graph Traversal</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>File System Navigation:</strong> Recursively traverse directories and subdirectories</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>DOM Tree Manipulation:</strong> Process HTML elements and their children</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Binary Search Trees:</strong> In-order, pre-order, post-order traversals</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">Divide and Conquer Algorithms</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Merge Sort & Quick Sort:</strong> Efficient O(N log N) sorting algorithms</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Binary Search:</strong> O(log N) search in sorted arrays</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Matrix Multiplication:</strong> Strassen's algorithm for large matrices</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">Backtracking Problems</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Sudoku Solver:</strong> Try numbers, backtrack if invalid, explore all possibilities</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>N-Queens Problem:</strong> Place queens on chessboard without conflicts</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Maze Solving:</strong> Explore paths, backtrack on dead ends</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Mathematical Computations</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>GCD Calculation:</strong> Euclidean algorithm for greatest common divisor</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Power Calculation:</strong> Fast exponentiation using divide-and-conquer</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Combinatorics:</strong> Generate permutations, combinations, subsets</span>
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
                                        <span><strong>Recursion = Self-Reference:</strong> A function calling itself with smaller inputs until reaching a base case.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Two Essential Components:</strong> Base case (stopping condition) and recursive steps (moving toward base case).</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Call Stack Management:</strong> Each recursive call adds a frame to the stack, which unwinds when base case is reached.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-3">When to Use Recursion</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-gray-800/50 rounded p-4">
                                        <h5 className="font-bold text-green-400 mb-2">Good Candidates:</h5>
                                        <ul className="text-sm text-gray-300 space-y-1">
                                            <li>• Tree/graph traversal</li>
                                            <li>• Divide-and-conquer algorithms</li>
                                            <li>• Backtracking problems</li>
                                            <li>• Problems with recursive structure</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-4">
                                        <h5 className="font-bold text-red-400 mb-2">Poor Candidates:</h5>
                                        <ul className="text-sm text-gray-300 space-y-1">
                                            <li>• Simple loops (use iteration)</li>
                                            <li>• Fibonacci without memoization</li>
                                            <li>• Tail-end recursion (convert to loop)</li>
                                            <li>• Stack overflow risk</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">Cost Considerations</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Redundant Calculations:</strong> Naive Fibonacci recalculates same values exponentially many times.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Stack Overhead:</strong> Each call uses memory for parameters, local variables, and return address.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-300 mt-0.5 font-bold">•</span>
                                        <span><strong>Optimization Techniques:</strong> Use memoization (caching), dynamic programming, or convert to iteration.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Sorting Algorithm Comparison</h4>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                                        <div>
                                            <p className="font-bold text-cyan-400 mb-1">Merge Sort:</p>
                                            <ul className="space-y-0.5 text-sm">
                                                <li>• Always O(N log N)</li>
                                                <li>• Stable sort</li>
                                                <li>• Requires O(N) extra space</li>
                                                <li>• Good for linked lists</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold text-cyan-400 mb-1">Quick Sort:</p>
                                            <ul className="space-y-0.5 text-sm">
                                                <li>• O(N log N) average</li>
                                                <li>• O(N²) worst case</li>
                                                <li>• In-place sorting</li>
                                                <li>• Fast in practice</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Best Practices</h4>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className="bg-gray-800/50 rounded p-3">
                                        <p className="font-bold text-green-400 mb-1">Always Ensure:</p>
                                        <ul className="text-sm text-gray-300 space-y-0.5">
                                            <li>• Base case is clearly defined</li>
                                            <li>• Recursive steps move toward base</li>
                                            <li>• No infinite recursion possible</li>
                                            <li>• Stack depth is manageable</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-3">
                                        <p className="font-bold text-yellow-400 mb-1">Performance Tips:</p>
                                        <ul className="text-sm text-gray-300 space-y-0.5">
                                            <li>• Profile before optimizing</li>
                                            <li>• Consider memoization</li>
                                            <li>• Convert tail recursion to loops</li>
                                            <li>• Watch for redundant work</li>
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

export default Recursion;