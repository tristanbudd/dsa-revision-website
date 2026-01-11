import CodeBox from '../components/CodeBox';

function SearchSort() {
    const arrayOperationsExample = [
        {
            language: 'python',
            code: `# Array Operations - Unsorted vs Sorted
class UnsortedArray:
    def __init__(self, capacity):
        self.data = [None] * capacity
        self.size = 0
        self.capacity = capacity
    
    def insert(self, item):
        """Insert at end - O(1)"""
        if self.size >= self.capacity:
            raise OverflowError("Array is full")
        self.data[self.size] = item
        self.size += 1
    
    def delete_by_index(self, index):
        """Delete by index - O(1) if index known"""
        if 0 <= index < self.size:
            deleted_item = self.data[index]
            # Move last element to deleted position
            self.data[index] = self.data[self.size - 1]
            self.size -= 1
            return deleted_item
        return None
    
    def delete_by_value(self, value):
        """Delete by value - O(n) search required"""
        for i in range(self.size):
            if self.data[i] == value:
                return self.delete_by_index(i)
        return None
    
    def search(self, value):
        """Linear search - O(n)"""
        for i in range(self.size):
            if self.data[i] == value:
                return i
        return -1

class SortedArray:
    def __init__(self, capacity):
        self.data = [None] * capacity
        self.size = 0
        self.capacity = capacity
    
    def insert(self, item):
        """Insert in sorted position - O(n)"""
        if self.size >= self.capacity:
            raise OverflowError("Array is full")
        
        # Find insertion position
        pos = 0
        while pos < self.size and self.data[pos] < item:
            pos += 1
        
        # Shift elements to make space
        for i in range(self.size, pos, -1):
            self.data[i] = self.data[i - 1]
        
        self.data[pos] = item
        self.size += 1
    
    def delete(self, value):
        """Delete by value - O(n) shift required"""
        index = self.binary_search(value)
        if index != -1:
            # Shift elements left
            for i in range(index, self.size - 1):
                self.data[i] = self.data[i + 1]
            self.size -= 1
            return True
        return False
    
    def binary_search(self, value):
        """Binary search - O(log n)"""
        left, right = 0, self.size - 1
        while left <= right:
            mid = (left + right) // 2
            if self.data[mid] == value:
                return mid
            elif self.data[mid] < value:
                left = mid + 1
            else:
                right = mid - 1
        return -1

# Example usage and comparison
unsorted = UnsortedArray(10)
sorted_arr = SortedArray(10)

# Insert elements
for item in [5, 2, 8, 1, 9]:
    unsorted.insert(item)  # O(1) each
    sorted_arr.insert(item)  # O(n) each

print(f"Unsorted: {unsorted.data[:unsorted.size]}")
print(f"Sorted: {sorted_arr.data[:sorted_arr.size]}")

# Search operations
print(f"Linear search 8 in unsorted: {unsorted.search(8)} - O(n)")
print(f"Binary search 8 in sorted: {sorted_arr.binary_search(8)} - O(log n)")`,
        },
    ];

    const selectionSortExample = [
        {
            language: 'python',
            code: `def selection_sort(List):
    n = len(List)  # Get the number of items in the list
    
    for i in range(n - 1):  # Loop from index 0 to n-2
        index_smallest = i  # Assume first unsorted element is smallest
        
        for j in range(i + 1, n):  # Find smallest in unsorted part
            if List[j] < List[index_smallest]:
                index_smallest = j
        
        # Swap if smallest element not already in position i
        if index_smallest != i:
            List[i], List[index_smallest] = List[index_smallest], List[i]

# Example usage
data = [18, 6, 9, 1, 4, 15, 12, 5]
selection_sort(data)
print(data)  # Output: [1, 4, 5, 6, 9, 12, 15, 18]`,
        },
    ];

    const bubbleSortExample = [
        {
            language: 'python',
            code: `def bubble_sort(List):
    n = len(List)  # Get the number of items in the list
    sorted = False  # Initially assume the list is not sorted
    
    while not sorted:
        sorted = True  # Assume sorted before traversing
        
        for j in range(n - 1):  # Traverse the list up to n-2
            if List[j] > List[j + 1]:  # Compare adjacent items
                # Swap elements if in wrong order
                List[j], List[j + 1] = List[j + 1], List[j]
                sorted = False  # A swap occurred, not sorted
        
        n -= 1  # Reduce range, largest element bubbled to top

# Example usage
data = [18, 6, 9, 1, 4, 15, 12, 5]
bubble_sort(data)
print(data)  # Output: [1, 4, 5, 6, 9, 12, 15, 18]`,
        },
    ];

    const insertionSortExample = [
        {
            language: 'python',
            code: `def insertion_sort(List):
    n = len(List)  # Get the number of items in the list
    
    for i in range(n):
        item_to_insert = List[i]  # Copy of next item to insert
        index_hole = i  # Index of hole where item was
        
        # Locate where to insert within sorted part
        while index_hole > 0 and List[index_hole - 1] > item_to_insert:
            List[index_hole] = List[index_hole - 1]  # Shift right
            index_hole -= 1  # Move hole left
        
        # Insert the item in its correct position
        List[index_hole] = item_to_insert

# Example usage
data = [18, 6, 9, 1, 4, 15, 12, 5]
insertion_sort(data)
print(data)  # Output: [1, 4, 5, 6, 9, 12, 15, 18]`,
        },
    ];

    const linearSearchExample = [
        {
            language: 'python',
            code: `def linear_search(List, value):
    # Iterate through each item in the list
    for index, item in enumerate(List):
        if item == value:  # If current item matches value
            return index  # Return the item's location
    
    return -1  # Return -1 if value not found

# Example usage
data = [18, 6, 9, 1, 4, 15, 12, 5]
result = linear_search(data, 15)
print(result)  # Output: 5 (index of 15)
result = linear_search(data, 99)
print(result)  # Output: -1 (not found)`,
        },
    ];

    const binarySearchExample = [
        {
            language: 'python',
            code: `def binary_search(List, value):
    lower = 0  # First index of section being searched
    upper = len(List) - 1  # Last index of section being searched
    
    while lower <= upper:
        midpoint = (lower + upper) // 2  # Integer division
        
        if List[midpoint] == value:  # Item found at midpoint
            return midpoint  # Return the index
        elif value < List[midpoint]:  # Item is before midpoint
            upper = midpoint - 1
        else:  # Item is after midpoint
            lower = midpoint + 1
    
    return -1  # Value not found

# Example usage (requires sorted list)
data = [1, 4, 5, 6, 9, 12, 15, 18]
result = binary_search(data, 15)
print(result)  # Output: 6 (index of 15)
result = binary_search(data, 99)
print(result)  # Output: -1 (not found)`,
        },
    ];

    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        Searching & Sorting Algorithms
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">8% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    <strong>Searching</strong> and <strong>Sorting</strong> are two of the most fundamental and frequently performed operations in computer science. 
                    Searching involves finding the location of a specified element in a collection, while sorting organizes elements into a particular order (ascending or descending). 
                    This page covers <strong>array fundamentals</strong>, essential iterative algorithms including <strong>Selection Sort</strong>, <strong>Bubble Sort</strong>, <strong>Insertion Sort</strong>, 
                    <strong>Linear Search</strong>, and <strong>Binary Search</strong>. Understanding their implementations, efficiency characteristics, 
                    and appropriate use cases is crucial for choosing the right algorithm for your problem.
                </p>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Array Fundamentals: Sorted vs Unsorted
                    </h3>

                    <p className="text-gray-300 mb-6">
                        Understanding the fundamental differences between <strong>sorted</strong> and <strong>unsorted arrays</strong> is crucial for algorithm selection. 
                        Each approach offers different trade-offs between insertion, deletion, and search operations that directly impact overall performance.
                    </p>

                    <div className="space-y-6 mb-8">
                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-bold text-purple-300 mb-3">Array Operations Implementation</h4>
                            <CodeBox examples={arrayOperationsExample} title="Unsorted vs Sorted Array Implementations" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Key Insight:</strong> Unsorted arrays favor insertions while sorted arrays optimize search operations. 
                                    Choose based on your application's most frequent operations.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-indigo-600 bg-indigo-900/20 p-5">
                            <h4 className="text-lg font-bold text-indigo-300 mb-3">Performance Comparison: Unsorted vs Sorted Arrays</h4>
                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-800">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-white font-semibold">Operation</th>
                                            <th className="px-4 py-3 text-left text-gray-300">Unsorted Array</th>
                                            <th className="px-4 py-3 text-left text-gray-300">Sorted Array</th>
                                            <th className="px-4 py-3 text-left text-gray-300">Best Choice</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-800/50">
                                        <tr className="border-t border-gray-700">
                                            <td className="px-4 py-3 text-green-400 font-medium">Insert Operation</td>
                                            <td className="px-4 py-3 text-gray-300">O(1) - Insert at end</td>
                                            <td className="px-4 py-3 text-gray-300">O(n) - Find position + shift</td>
                                            <td className="px-4 py-3 text-gray-300">Unsorted for frequent inserts</td>
                                        </tr>
                                        <tr className="border-t border-gray-700">
                                            <td className="px-4 py-3 text-blue-400 font-medium">Search Operation</td>
                                            <td className="px-4 py-3 text-gray-300">O(n) - Linear search only</td>
                                            <td className="px-4 py-3 text-gray-300">O(log n) - Binary search</td>
                                            <td className="px-4 py-3 text-gray-300">Sorted for frequent searches</td>
                                        </tr>
                                        <tr className="border-t border-gray-700">
                                            <td className="px-4 py-3 text-red-400 font-medium">Delete by Value</td>
                                            <td className="px-4 py-3 text-gray-300">O(n) - Search + O(1) delete</td>
                                            <td className="px-4 py-3 text-gray-300">O(log n) + O(n) - Search + shift</td>
                                            <td className="px-4 py-3 text-gray-300">Unsorted slightly better</td>
                                        </tr>
                                        <tr className="border-t border-gray-700">
                                            <td className="px-4 py-3 text-yellow-400 font-medium">Delete by Index</td>
                                            <td className="px-4 py-3 text-gray-300">O(1) - Swap with last</td>
                                            <td className="px-4 py-3 text-gray-300">O(n) - Must shift elements</td>
                                            <td className="px-4 py-3 text-gray-300">Unsorted for index deletions</td>
                                        </tr>
                                        <tr className="border-t border-gray-700">
                                            <td className="px-4 py-3 text-purple-400 font-medium">Memory Usage</td>
                                            <td className="px-4 py-3 text-gray-300">Standard array overhead</td>
                                            <td className="px-4 py-3 text-gray-300">Standard array overhead</td>
                                            <td className="px-4 py-3 text-gray-300">Equal - no difference</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-bold text-orange-300 mb-3">When to Use Each Approach</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <h5 className="font-bold text-orange-200 mb-2">Choose Unsorted Arrays When:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• <strong>Frequent insertions:</strong> Adding elements is primary operation.</li>
                                        <li>• <strong>Order doesn't matter:</strong> No requirement for sorted data.</li>
                                        <li>• <strong>Index-based access:</strong> Direct access by position is common.</li>
                                        <li>• <strong>Minimal searching:</strong> Few search operations needed.</li>
                                        <li>• <strong>Fast prototypes:</strong> Quick implementation for testing.</li>
                                    </ul>
                                    <div className="bg-gray-800/50 rounded p-2 text-xs text-gray-400">
                                        <strong>Examples:</strong> Log files, event streams, user activity tracking
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h5 className="font-bold text-orange-200 mb-2">Choose Sorted Arrays When:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• <strong>Frequent searches:</strong> Finding elements is primary operation.</li>
                                        <li>• <strong>Range queries:</strong> Need to find elements within a range.</li>
                                        <li>• <strong>Ordered output:</strong> Data must be presented in sorted order.</li>
                                        <li>• <strong>Binary operations:</strong> Take advantage of O(log n) algorithms.</li>
                                        <li>• <strong>Data analysis:</strong> Statistical operations on ordered data.</li>
                                    </ul>
                                    <div className="bg-gray-800/50 rounded p-2 text-xs text-gray-400">
                                        <strong>Examples:</strong> Phone books, dictionaries, leaderboards, catalogs
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-5">
                            <h4 className="text-lg font-bold text-cyan-300 mb-3">Array Selection Decision Matrix</h4>
                            <p className="text-gray-300 mb-3">
                                Use this guide to choose the optimal array structure based on your application's operation patterns:
                            </p>
                            <div className="bg-gray-800/50 rounded p-4 text-sm text-gray-300">
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div>
                                        <strong className="text-green-400">Primarily Insertions</strong>
                                        <br />→ Use Unsorted Array
                                        <br />→ O(1) insertion advantage
                                    </div>
                                    <div>
                                        <strong className="text-blue-400">Primarily Searches</strong>
                                        <br />→ Use Sorted Array
                                        <br />→ O(log n) search advantage
                                    </div>
                                    <div>
                                        <strong className="text-purple-400">Mixed Operations</strong>
                                        <br />→ Consider other structures
                                        <br />→ Hash tables, BSTs, etc.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Sorting Algorithms
                    </h3>

                    <p className="text-gray-300 mb-6">
                        Sorting is the process of organizing a collection of objects into some order. The following three algorithms are collectively 
                        known as <strong>exchange sorts</strong> - simple sorting methods that work well for small datasets but have poor efficiency 
                        for large collections.
                    </p>

                    <div className="space-y-8">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-6">
                            <h4 className="text-2xl font-bold text-blue-400 mb-4">1. Selection Sort</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Selection sort divides the list into two parts: a <strong>sorted part</strong> (left) and an <strong>unsorted part</strong> (right). 
                                Initially, the sorted part is empty. The algorithm repeatedly finds the <strong>smallest element</strong> from the unsorted part 
                                and swaps it with the leftmost unsorted element, growing the sorted portion one element at a time.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-blue-300 mb-2">How It Works:</h5>
                                <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
                                    <li>Find the smallest element in the unsorted part.</li>
                                    <li>Swap it with the first unsorted element.</li>
                                    <li>Move the boundary between sorted and unsorted parts one position right.</li>
                                    <li>Repeat until the entire list is sorted.</li>
                                </ol>
                            </div>

                            <CodeBox examples={selectionSortExample} title="Selection Sort Implementation" />

                            <div className="mt-4 grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-blue-300 mb-2">Complexity Analysis:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• <strong className="text-red-400">Best Case:</strong> O(N²).</li>
                                        <li>• <strong className="text-yellow-400">Average Case:</strong> O(N²).</li>
                                        <li>• <strong className="text-red-400">Worst Case:</strong> O(N²).</li>
                                        <li>• <strong className="text-green-400">Space:</strong> O(1) - in-place.</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-blue-300 mb-2">Characteristics:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• Not suitable for large datasets.</li>
                                        <li>• Simple to understand and implement.</li>
                                        <li>• Always makes the same number of comparisons.</li>
                                        <li>• Performs well with small lists</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-6">
                            <h4 className="text-2xl font-bold text-green-400 mb-4">2. Bubble Sort</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Bubble sort works by repeatedly passing through the list and <strong>swapping adjacent items</strong> if they're in the wrong order. 
                                The largest unsorted element "bubbles up" to its correct position at the end of the list with each pass. 
                                The algorithm can terminate early if no swaps occur during a pass, indicating the list is sorted.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-green-300 mb-2">How It Works:</h5>
                                <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
                                    <li>Compare each pair of adjacent elements</li>
                                    <li>Swap them if they're in the wrong order</li>
                                    <li>After each pass, the largest element is in its final position</li>
                                    <li>Reduce the range of elements to check and repeat</li>
                                    <li>Stop when no swaps occur (list is sorted)</li>
                                </ol>
                            </div>

                            <CodeBox examples={bubbleSortExample} title="Bubble Sort Implementation" />

                            <div className="mt-4 grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-green-300 mb-2">Complexity Analysis:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• <strong className="text-green-400">Best Case:</strong> O(N) - already sorted</li>
                                        <li>• <strong className="text-yellow-400">Average Case:</strong> O(N²)</li>
                                        <li>• <strong className="text-red-400">Worst Case:</strong> O(N²)</li>
                                        <li>• <strong className="text-green-400">Space:</strong> O(1) - in-place</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-green-300 mb-2">Characteristics:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• Simple and easy to code</li>
                                        <li>• Can detect already sorted lists</li>
                                        <li>• Very slow for large datasets</li>
                                        <li>• Stable sort (maintains relative order)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-2xl font-bold text-purple-400 mb-4">3. Insertion Sort</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Insertion sort builds the final sorted list one item at a time by <strong>inserting</strong> each element into its proper position 
                                within the already-sorted portion. It mimics how people naturally sort playing cards in their hands - taking each card and 
                                placing it in the correct position among the cards already held.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-purple-300 mb-2">How It Works:</h5>
                                <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
                                    <li>Start with the second element (first is already "sorted")</li>
                                    <li>Compare it with elements in the sorted portion</li>
                                    <li>Shift larger elements to the right to create space</li>
                                    <li>Insert the element in its correct position</li>
                                    <li>Repeat for all remaining elements</li>
                                </ol>
                            </div>

                            <CodeBox examples={insertionSortExample} title="Insertion Sort Implementation" />

                            <div className="mt-4 grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-purple-300 mb-2">Complexity Analysis:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• <strong className="text-green-400">Best Case:</strong> O(N) - already sorted</li>
                                        <li>• <strong className="text-yellow-400">Average Case:</strong> O(N²)</li>
                                        <li>• <strong className="text-red-400">Worst Case:</strong> O(N²)</li>
                                        <li>• <strong className="text-green-400">Space:</strong> O(1) - in-place</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-purple-300 mb-2">Characteristics:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• Efficient for nearly sorted data</li>
                                        <li>• Works well for small datasets</li>
                                        <li>• Ideal for adding items to sorted list</li>
                                        <li>• Stable sort (maintains relative order)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-orange-900/20 border border-orange-700 rounded-lg p-5">
                        <h4 className="text-lg font-semibold text-orange-300 mb-3">Sorting Efficiency Categories</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-800/50 rounded p-4">
                                <h5 className="font-bold text-red-400 mb-2">Sequential Sorts - O(N²):</h5>
                                <p className="text-sm text-gray-300 mb-2">
                                    Two nested loops requiring approximately N² comparisons. Examples: Bubble, Selection, Insertion sort.
                                </p>
                                <p className="text-xs text-gray-400">
                                    For 1,000,000 numbers: ~1,000,000,000,000 steps
                                </p>
                            </div>
                            <div className="bg-gray-800/50 rounded p-4">
                                <h5 className="font-bold text-green-400 mb-2">Logarithmic Sorts - O(N log N):</h5>
                                <p className="text-sm text-gray-300 mb-2">
                                    Require approximately N log₂N comparisons. Examples: Merge Sort, Quick Sort, Heap Sort.
                                </p>
                                <p className="text-xs text-gray-400">
                                    For 1,000,000 numbers: ~20,000,000 steps
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Searching Algorithms
                    </h3>

                    <p className="text-gray-300 mb-6">
                        Searching is one of the most common operations in computing. It involves finding the location of a specified element 
                        (the <strong>target</strong>) in a collection of objects. The efficiency of search algorithms varies dramatically based 
                        on whether the data is sorted.
                    </p>

                    <div className="space-y-8">
                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-6">
                            <h4 className="text-2xl font-bold text-cyan-400 mb-4">Linear Search (Sequential Search)</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Linear search is the simplest searching algorithm. It checks <strong>every element</strong> in sequence from the beginning 
                                until the target is found or the end of the list is reached. This method works on <strong>unsorted or sorted</strong> lists 
                                but is typically only used for small datasets.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-cyan-300 mb-2">How It Works:</h5>
                                <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
                                    <li>Start at the first element of the list</li>
                                    <li>Compare current element with the target value</li>
                                    <li>If match found, return the index</li>
                                    <li>If no match, move to the next element</li>
                                    <li>Repeat until target found or end of list reached</li>
                                </ol>
                            </div>

                            <CodeBox examples={linearSearchExample} title="Linear Search Implementation" />

                            <div className="mt-4 grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-cyan-300 mb-2">Complexity Analysis:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• <strong className="text-green-400">Best Case:</strong> O(1) - first element</li>
                                        <li>• <strong className="text-yellow-400">Average Case:</strong> O(N/2) ≈ O(N)</li>
                                        <li>• <strong className="text-red-400">Worst Case:</strong> O(N) - not in list</li>
                                        <li>• <strong className="text-green-400">Space:</strong> O(1)</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-cyan-300 mb-2">Characteristics:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• Works on unsorted data</li>
                                        <li>• Simple to implement</li>
                                        <li>• Inefficient for large datasets</li>
                                        <li>• No preprocessing required</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-yellow-600 bg-yellow-900/20 p-6">
                            <h4 className="text-2xl font-bold text-yellow-400 mb-4">Binary Search</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Binary search is a highly efficient algorithm that only works on <strong>sorted lists</strong>. It repeatedly divides 
                                the search interval in half by examining the <strong>middle element</strong>. Based on the comparison, it eliminates 
                                half of the remaining elements, dramatically reducing search time.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-yellow-300 mb-2">How It Works:</h5>
                                <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
                                    <li>Start with the entire sorted list</li>
                                    <li>Find the middle element</li>
                                    <li>If middle element equals target, return its index</li>
                                    <li>If target is less than middle, search the left half</li>
                                    <li>If target is greater than middle, search the right half</li>
                                    <li>Repeat until target found or search space exhausted</li>
                                </ol>
                            </div>

                            <CodeBox examples={binarySearchExample} title="Binary Search Implementation" />

                            <div className="mt-4 grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-yellow-300 mb-2">Complexity Analysis:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• <strong className="text-green-400">Best Case:</strong> O(1) - middle element</li>
                                        <li>• <strong className="text-green-400">Average Case:</strong> O(log N)</li>
                                        <li>• <strong className="text-green-400">Worst Case:</strong> O(log N)</li>
                                        <li>• <strong className="text-green-400">Space:</strong> O(1) - iterative</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-yellow-300 mb-2">Characteristics:</h5>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• Requires sorted data</li>
                                        <li>• Extremely efficient for large datasets</li>
                                        <li>• Eliminates half the data each iteration</li>
                                        <li>• Essential for time-critical applications</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-4 p-4 bg-green-900/30 rounded border border-green-700">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-green-400">Example:</strong> For a sorted list of 14 elements, binary search finds the target in 
                                    just 3 probes, while linear search would take 10 probes on average. For 1,000,000 elements, binary search makes at most 
                                    42 comparisons (log₂1,000,000 ≈ 20 iterations × 2 comparisons), while linear search averages 500,000 comparisons!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Efficiency Comparison
                    </h3>

                    <div className="space-y-6">
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                                <thead className="bg-gray-800">
                                    <tr>
                                        <th className="border border-gray-700 px-4 py-2 text-left text-white">Dataset Size</th>
                                        <th className="border border-gray-700 px-4 py-2 text-left text-cyan-400">Binary Search</th>
                                        <th className="border border-gray-700 px-4 py-2 text-left text-yellow-400">Linear Search (Avg)</th>
                                        <th className="border border-gray-700 px-4 py-2 text-left text-green-400">Improvement</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-800/50">
                                    <tr>
                                        <td className="border border-gray-700 px-4 py-2 text-white font-semibold">1,000</td>
                                        <td className="border border-gray-700 px-4 py-2 text-gray-300">22 comparisons</td>
                                        <td className="border border-gray-700 px-4 py-2 text-gray-300">500 comparisons</td>
                                        <td className="border border-gray-700 px-4 py-2 text-green-400 font-semibold">~23× faster</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-700 px-4 py-2 text-white font-semibold">1,000,000</td>
                                        <td className="border border-gray-700 px-4 py-2 text-gray-300">42 comparisons</td>
                                        <td className="border border-gray-700 px-4 py-2 text-gray-300">500,000 comparisons</td>
                                        <td className="border border-gray-700 px-4 py-2 text-green-400 font-semibold">~11,905× faster</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-5">
                            <h4 className="text-lg font-semibold text-blue-300 mb-3">Key Observations</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Binary search</strong> efficiency increases dramatically with larger datasets due to logarithmic growth.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span><strong>Linear search</strong> comparisons grow linearly with dataset size, becoming impractical for large data.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span>The <strong>cost of sorting</strong> must be considered - if you need to sort data just to search once, linear search might be faster overall.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                    <span>For <strong>frequent searches</strong> on the same dataset, the one-time sorting cost is worth the massive search efficiency gains.</span>
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
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">Sorting Algorithms Summary</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Selection Sort:</strong> Finds smallest element repeatedly. Always O(N²), simple but inefficient for large data.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Bubble Sort:</strong> Swaps adjacent elements. Best case O(N) when already sorted, worst O(N²). Can detect sorted lists early.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Insertion Sort:</strong> Inserts elements into sorted portion. Excellent for nearly sorted data and small lists. O(N) best case.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>All three</strong> are O(N²) average case - suitable only for small datasets or educational purposes.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Searching Algorithms Summary</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-gray-800/50 rounded p-4">
                                        <h5 className="font-bold text-cyan-400 mb-2">Linear Search:</h5>
                                        <ul className="text-sm text-gray-300 space-y-1">
                                            <li>• O(N) complexity</li>
                                            <li>• Works on unsorted data</li>
                                            <li>• Simple, no preprocessing</li>
                                            <li>• Use for small lists or one-time searches</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-4">
                                        <h5 className="font-bold text-yellow-400 mb-2">Binary Search:</h5>
                                        <ul className="text-sm text-gray-300 space-y-1">
                                            <li>• O(log N) complexity</li>
                                            <li>• Requires sorted data</li>
                                            <li>• Extremely efficient</li>
                                            <li>• Use for large datasets, repeated searches</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">Algorithm Selection Guidelines</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">1.</span>
                                        <span><strong>Small datasets (&lt;100 elements):</strong> Any simple sort works fine. Linear search is acceptable.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">2.</span>
                                        <span><strong>Nearly sorted data:</strong> Insertion sort is optimal (O(N) best case).</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">3.</span>
                                        <span><strong>Large datasets:</strong> Use O(N log N) sorts (Merge/Quick/Heap). Use binary search for lookups.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">4.</span>
                                        <span><strong>Frequent searches:</strong> Sort once, then use binary search repeatedly. The sorting cost is amortized.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">5.</span>
                                        <span><strong>Unsorted, one-time search:</strong> Linear search avoids sorting overhead.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-3">Performance Impact</h4>
                                <div className="bg-gray-800/50 rounded p-4">
                                    <p className="text-sm text-gray-300 mb-2">
                                        The difference between O(N²) and O(N log N) sorting becomes massive with scale:
                                    </p>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li className="flex gap-2">
                                            <span className="text-orange-400 font-bold">•</span>
                                            <span>1,000,000 elements: Bubble sort takes ~1 trillion operations, Quick sort takes ~20 million (50,000× faster!)</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-400 font-bold">•</span>
                                            <span>Binary search on 1 million elements: 42 comparisons vs 500,000 for linear (12,000× faster!)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Remember</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                                        <span><strong>Efficiency matters:</strong> Algorithm choice can mean the difference between instant results and waiting hours.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                                        <span><strong>Data characteristics:</strong> Consider whether data is sorted, nearly sorted, or random before choosing an algorithm.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">✓</span>
                                        <span><strong>Trade-offs exist:</strong> Sorting has an upfront cost, but enables much faster searches. Evaluate based on usage patterns.</span>
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

export default SearchSort;