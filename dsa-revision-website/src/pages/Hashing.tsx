import CodeBox from '../components/CodeBox';

function Hashing() {
    const truncationExample = [
        {
            language: 'python',
            code: `# Truncation Hash Function
def truncation_hash(key, table_size):
    # Example: Use first, second, and fifth digits from right
    # For 8-digit integer 62538194 -> use digits 4, 9, 3
    key_str = str(key)
    
    # Extract specific digit positions (from right)
    if len(key_str) >= 5:
        digit1 = int(key_str[-1])  # First digit from right
        digit2 = int(key_str[-2])  # Second digit from right  
        digit5 = int(key_str[-5])  # Fifth digit from right
        
        # Combine digits to form hash value
        hash_value = digit1 * 100 + digit2 * 10 + digit5
        return hash_value % table_size
    
    return key % table_size

# Example: 62538194 -> 493 % table_size
print(truncation_hash(62538194, 1000))  # Output: 493`,
        },
    ];

    const foldingExample = [
        {
            language: 'python',
            code: `# Folding Hash Function
def folding_hash(key, table_size):
    # Partition key into groups and combine by addition
    key_str = str(key)
    
    # Group digits into parts (e.g., groups of 3, 3, 2)
    groups = []
    while len(key_str) > 0:
        if len(key_str) >= 3:
            groups.append(int(key_str[:3]))
            key_str = key_str[3:]
        else:
            groups.append(int(key_str))
            break
    
    # Sum all groups
    hash_value = sum(groups)
    return hash_value % table_size

# Example: 62538194 -> 625 + 381 + 94 = 1100
# Then 1100 % 1000 = 100
print(folding_hash(62538194, 1000))  # Output: 100`,
        },
    ];

    const moduloExample = [
        {
            language: 'python',
            code: `# Modulo Arithmetic Hash Function
def modulo_hash(key, table_size):
    # Simple modulo operation
    return key % table_size

# For best distribution, table_size should be prime
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

# Example usage
keys = [139, 250, 999, 512, 127]
table_size = 11  # Prime number for better distribution

print("Key -> Hash Value")
for key in keys:
    hash_val = modulo_hash(key, table_size)
    print(f"{key} -> {hash_val}")`,
        },
    ];

    const chainingExample = [
        {
            language: 'python',
            code: `# Hash Table with Chaining Implementation
class HashNode:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

class HashTableChaining:
    def __init__(self, table_size):
        self.table_size = table_size
        self.table = [None] * table_size
    
    def hash_function(self, key):
        return key % self.table_size
    
    def insert(self, key, value):
        index = self.hash_function(key)
        new_node = HashNode(key, value)
        
        if self.table[index] is None:
            self.table[index] = new_node
        else:
            # Insert at beginning of chain
            new_node.next = self.table[index]
            self.table[index] = new_node
    
    def search(self, key):
        index = self.hash_function(key)
        current = self.table[index]
        
        while current:
            if current.key == key:
                return current.value
            current = current.next
        
        return None  # Key not found`,
        },
    ];

    const linearProbingExample = [
        {
            language: 'python',
            code: `# Hash Table with Linear Probing Implementation
class HashTableLinearProbing:
    def __init__(self, table_size):
        self.table_size = table_size
        self.keys = [None] * table_size
        self.values = [None] * table_size
        self.deleted = [False] * table_size
    
    def hash_function(self, key):
        return key % self.table_size
    
    def insert(self, key, value):
        index = self.hash_function(key)
        
        # Linear probing: increment by 1 until empty slot found
        while (self.keys[index] is not None and 
               not self.deleted[index] and 
               self.keys[index] != key):
            index = (index + 1) % self.table_size
        
        self.keys[index] = key
        self.values[index] = value
        self.deleted[index] = False
    
    def search(self, key):
        index = self.hash_function(key)
        
        # Linear probing search
        while self.keys[index] is not None:
            if (not self.deleted[index] and 
                self.keys[index] == key):
                return self.values[index]
            index = (index + 1) % self.table_size
        
        return None  # Key not found`,
        },
    ];

    const quadraticProbingExample = [
        {
            language: 'python',
            code: `# Hash Table with Quadratic Probing Implementation
class HashTableQuadraticProbing:
    def __init__(self, table_size):
        self.table_size = table_size
        self.keys = [None] * table_size
        self.values = [None] * table_size
    
    def hash_function(self, key):
        return key % table_size
    
    def insert(self, key, value):
        index = self.hash_function(key)
        i = 0
        
        # Quadratic probing: increment by i^2
        while self.keys[index] is not None and self.keys[index] != key:
            i += 1
            index = (self.hash_function(key) + i * i) % self.table_size
        
        self.keys[index] = key
        self.values[index] = value
    
    def search(self, key):
        index = self.hash_function(key)
        i = 0
        
        # Quadratic probing search
        while self.keys[index] is not None:
            if self.keys[index] == key:
                return self.values[index]
            i += 1
            index = (self.hash_function(key) + i * i) % self.table_size
        
        return None  # Key not found`,
        },
    ];

    const doubleHashingExample = [
        {
            language: 'python',
            code: `# Hash Table with Double Hashing Implementation
class HashTableDoubleHashing:
    def __init__(self, table_size):
        self.table_size = table_size
        self.keys = [None] * table_size
        self.values = [None] * table_size
    
    def hash1(self, key):
        return key % self.table_size
    
    def hash2(self, key):
        # Second hash function: prime number different from table size
        prime = 7  # Choose prime < table_size
        return prime - (key % prime)
    
    def insert(self, key, value):
        index = self.hash1(key)
        step_size = self.hash2(key)
        
        # Double hashing: increment by hash2(key)
        while self.keys[index] is not None and self.keys[index] != key:
            index = (index + step_size) % self.table_size
        
        self.keys[index] = key
        self.values[index] = value
    
    def search(self, key):
        index = self.hash1(key)
        step_size = self.hash2(key)
        
        # Double hashing search
        while self.keys[index] is not None:
            if self.keys[index] == key:
                return self.values[index]
            index = (index + step_size) % self.table_size
        
        return None  # Key not found`,
        },
    ];

    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        Hashing
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">8% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    <strong>Hashing</strong> is a powerful technique that provides <strong>constant-time O(1) average performance</strong> for search, 
                    insertion, and deletion operations. Unlike binary search trees that require O(log n) comparisons, hash tables use
                    &nbsp;<strong>hash functions</strong> to directly map keys to array indices, enabling near-instantaneous data access. 
                    However, <strong>collisions</strong> occur when different keys hash to the same index, requiring sophisticated
                    &nbsp;<strong>collision resolution strategies</strong>. This page covers hash function design, collision handling techniques, 
                    performance analysis, and practical applications of hash tables in computer science.
                </p>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        The Hash Table Advantage
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">From O(log n) to O(1): The Performance Leap</h4>
                            <p className="text-gray-300 mb-3">
                                <strong>Question:</strong> Can we improve searching efficiency from O(log₂n) to O(1)?
                            </p>
                            <p className="text-gray-300 mb-3">
                                <strong>Answer:</strong> Hash tables leverage the <strong>constant-time array access</strong> property. 
                                If we can map keys directly to array indices, we achieve O(1) performance.
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-300">
                                <li><strong>Array Access:</strong> X[2] retrieves the 3rd element in constant time.</li>
                                <li><strong>Challenge:</strong> How do we map arbitrary keys to valid array indices?.</li>
                                <li><strong>Solution:</strong> Hash functions provide this key-to-index mapping.</li>
                                <li><strong>Trade-off:</strong> Collision handling complexity for average O(1) performance.</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Hash Function Requirements</h4>
                            <div className="space-y-3 text-gray-300">
                                <div><strong>Deterministic:</strong> Same input key must always produce the same hash value.</div>
                                <div><strong>Efficient:</strong> Hash computation should be faster than multiple comparisons.</div>
                                <div><strong>Uniform Distribution:</strong> Keys should be distributed evenly across all table indices.</div>
                                <div><strong>Fixed Output Size:</strong> Hash values must fit within the table size range.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Hash Function Techniques
                    </h3>

                    <p className="text-gray-300 mb-6">
                        Hash functions transform keys into table indices. The choice of hash function significantly impacts performance through collision frequency and distribution quality.
                    </p>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Truncation Method</h4>
                            <CodeBox examples={truncationExample} title="Truncation Hash Function" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Process:</strong> Ignore parts of the key, use remaining digits as index. 
                                    Fast computation but often poor distribution. Example: 62538194 → 493.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Folding Method</h4>
                            <CodeBox examples={foldingExample} title="Folding Hash Function" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Process:</strong> Partition key into groups, combine by addition or multiplication. 
                                    Better distribution than truncation. Example: 62538194 → 625+381+94 = 1100 → 100.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-5">
                            <h4 className="text-lg font-bold text-cyan-300 mb-3">Modulo Arithmetic (Most Common)</h4>
                            <CodeBox examples={moduloExample} title="Modulo Hash Function" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Process:</strong> hash(key) = key % table_size. Best distribution when table_size is prime. 
                                    Simple, efficient, and widely used in practice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Hash Function Comparison
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Method</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Computation Speed</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Distribution Quality</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Best Use Case</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Example</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-blue-400 font-medium">Truncation</td>
                                    <td className="px-4 py-3 text-gray-300">Fastest</td>
                                    <td className="px-4 py-3 text-gray-300">Poor</td>
                                    <td className="px-4 py-3 text-gray-300">Simple applications</td>
                                    <td className="px-4 py-3 text-gray-300">62538194 → 493</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-green-400 font-medium">Folding</td>
                                    <td className="px-4 py-3 text-gray-300">Moderate</td>
                                    <td className="px-4 py-3 text-gray-300">Good</td>
                                    <td className="px-4 py-3 text-gray-300">Large key spaces</td>
                                    <td className="px-4 py-3 text-gray-300">625+381+94 = 1100</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Modulo</td>
                                    <td className="px-4 py-3 text-gray-300">Fast</td>
                                    <td className="px-4 py-3 text-gray-300">Excellent (with prime)</td>
                                    <td className="px-4 py-3 text-gray-300">General purpose</td>
                                    <td className="px-4 py-3 text-gray-300">139 % 11 = 7</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                        <p className="text-sm text-gray-300">
                            <strong className="text-orange-400">Best Practice:</strong> Use modulo arithmetic with prime table sizes for optimal distribution. 
                            Prime numbers minimize patterns in hash values, reducing collision clustering.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Collision Resolution Strategies
                    </h3>

                    <p className="text-gray-300 mb-4">
                        Collisions occur when different keys hash to the same index. Since perfect hash functions are rare, we need strategies to handle collisions while maintaining good performance.
                    </p>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-bold text-purple-300 mb-3">Chaining (Separate Chaining)</h4>
                            <CodeBox examples={chainingExample} title="Hash Table with Chaining" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Strategy:</strong> Each table slot maintains a linked list of all keys that hash to that index. 
                                    Search requires traversing the appropriate chain.
                                </p>
                            </div>
                            <div className="mt-4 space-y-3 text-gray-300">
                                <div><strong>Advantages:</strong> Simple implementation, handles any load factor, no clustering.</div>
                                <div><strong>Disadvantages:</strong> Extra memory for pointers, poor cache performance.</div>
                                <div><strong>Performance:</strong> O(1 + α) where α = n/m (load factor).</div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Linear Probing (Open Addressing)</h4>
                            <CodeBox examples={linearProbingExample} title="Linear Probing Implementation" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Strategy:</strong> When collision occurs, linearly search for the next empty slot: 
                                    (hash(key) + i) % table_size.
                                </p>
                            </div>
                            <div className="mt-4 space-y-3 text-gray-300">
                                <div><strong>Advantages:</strong> No extra memory, good cache performance, simple implementation.</div>
                                <div><strong>Disadvantages:</strong> Primary clustering, performance degrades with high load factor.</div>
                                <div><strong>Performance:</strong> O(1) average, O(n) worst case with clustering.</div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Quadratic Probing</h4>
                            <CodeBox examples={quadraticProbingExample} title="Quadratic Probing Implementation" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Strategy:</strong> Use quadratic increments to reduce primary clustering: 
                                    (hash(key) + i²) % table_size.
                                </p>
                            </div>
                            <div className="mt-4 space-y-3 text-gray-300">
                                <div><strong>Advantages:</strong> Reduces primary clustering, better distribution than linear probing.</div>
                                <div><strong>Disadvantages:</strong> Secondary clustering, may not probe all slots.</div>
                                <div><strong>Performance:</strong> Better than linear probing, requires careful table size selection.</div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-bold text-orange-300 mb-3">Double Hashing</h4>
                            <CodeBox examples={doubleHashingExample} title="Double Hashing Implementation" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Strategy:</strong> Use second hash function for step size: 
                                    (hash₁(key) + i × hash₂(key)) % table_size.
                                </p>
                            </div>
                            <div className="mt-4 space-y-3 text-gray-300">
                                <div><strong>Advantages:</strong> Eliminates both primary and secondary clustering.</div>
                                <div><strong>Disadvantages:</strong> More complex, requires careful selection of second hash function.</div>
                                <div><strong>Performance:</strong> Best open addressing method, near-optimal distribution.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Collision Resolution Comparison
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Method</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Type</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Clustering</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Memory Usage</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Cache Performance</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Load Factor Limit</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-purple-400 font-medium">Chaining</td>
                                    <td className="px-4 py-3 text-gray-300">Separate</td>
                                    <td className="px-4 py-3 text-gray-300">None</td>
                                    <td className="px-4 py-3 text-gray-300">High (pointers)</td>
                                    <td className="px-4 py-3 text-gray-300">Poor</td>
                                    <td className="px-4 py-3 text-gray-300">No limit</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-blue-400 font-medium">Linear Probing</td>
                                    <td className="px-4 py-3 text-gray-300">Open Addressing</td>
                                    <td className="px-4 py-3 text-gray-300">Primary</td>
                                    <td className="px-4 py-3 text-gray-300">Low</td>
                                    <td className="px-4 py-3 text-gray-300">Excellent</td>
                                    <td className="px-4 py-3 text-gray-300">&lt; 0.7</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-green-400 font-medium">Quadratic Probing</td>
                                    <td className="px-4 py-3 text-gray-300">Open Addressing</td>
                                    <td className="px-4 py-3 text-gray-300">Secondary</td>
                                    <td className="px-4 py-3 text-gray-300">Low</td>
                                    <td className="px-4 py-3 text-gray-300">Good</td>
                                    <td className="px-4 py-3 text-gray-300">&lt; 0.5</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-orange-400 font-medium">Double Hashing</td>
                                    <td className="px-4 py-3 text-gray-300">Open Addressing</td>
                                    <td className="px-4 py-3 text-gray-300">None</td>
                                    <td className="px-4 py-3 text-gray-300">Low</td>
                                    <td className="px-4 py-3 text-gray-300">Good</td>
                                    <td className="px-4 py-3 text-gray-300">&lt; 0.7</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Performance Analysis and Load Factor
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-5">
                            <h4 className="text-lg font-bold text-cyan-300 mb-3">Load Factor Impact</h4>
                            <p className="text-gray-300 mb-3">
                                <strong>Load Factor (α) = n/m</strong> where n = number of elements, m = table size
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Low Load (α &lt; 0.5):</strong> Fast operations, more memory waste.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Medium Load (0.5 ≤ α ≤ 0.7):</strong> Good balance of speed and space.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>High Load (α &gt; 0.8):</strong> More collisions, degraded performance.</span>
                                    </li>
                                </ul>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Chaining:</strong> Can exceed α = 1, performance degrades linearly.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Open Addressing:</strong> Must keep α &lt; 1, resize when threshold reached.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Optimal Range:</strong> α = 0.75 for most applications.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-lg border border-yellow-600 bg-yellow-900/20 p-5">
                            <h4 className="text-lg font-bold text-yellow-300 mb-3">Best and Worst Case Scenarios</h4>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <strong className="text-green-400">Best Case (No Collisions):</strong>
                                    <ul className="mt-2 space-y-1 ml-4">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>All operations: O(1).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Perfect hash function distributes keys uniformly.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Each key maps to unique table index.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <strong className="text-red-400">Worst Case (All Collisions):</strong>
                                    <ul className="mt-2 space-y-1 ml-4">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>All keys hash to same index.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Chaining: O(n) - linear search in one chain.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Open Addressing: O(n) - probe entire table.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <strong className="text-blue-400">Average Case (Good Hash Function):</strong>
                                    <ul className="mt-2 space-y-1 ml-4">
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Search/Insert/Delete: O(1 + α).</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Performance depends on load factor.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                            <span>Proper table sizing maintains good performance.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Hash Tables vs Other Data Structures
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Data Structure</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Average Search</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Worst Search</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Insertion</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Deletion</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Ordering</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Hash Table</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)</td>
                                    <td className="px-4 py-3 text-gray-300">No</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-green-400 font-medium">Binary Search Tree</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n)</td>
                                    <td className="px-4 py-3 text-gray-300">Yes</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-blue-400 font-medium">Sorted Array</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(log n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">Yes</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-purple-400 font-medium">Linked List</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)*</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">No</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                        <p className="text-sm text-gray-300">
                            <strong className="text-blue-400">Key Advantage:</strong> Hash tables provide the only data structure with O(1) average-case 
                            performance for all basic operations, making them ideal for applications requiring fast lookups.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Real-World Applications
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Database Indexing</h4>
                            <p className="text-gray-300 mb-3">
                                Hash indexes provide <strong>constant-time lookups</strong> for exact-match queries in database systems. 
                                Particularly effective for primary key lookups and equality joins.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Examples:</strong> MySQL MEMORY engine, PostgreSQL hash indexes, distributed database sharding.
                            </div>
                        </div>

                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Programming Language Implementations</h4>
                            <p className="text-gray-300 mb-3">
                                Most modern programming languages use hash tables for symbol tables, object attribute storage, 
                                and built-in dictionary/map data structures.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Examples:</strong> Python dictionaries, Java HashMap, JavaScript objects, C++ unordered_map.
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-bold text-purple-300 mb-3">Caching Systems</h4>
                            <p className="text-gray-300 mb-3">
                                Hash tables enable <strong>fast cache lookups</strong> in web applications, databases, and operating systems. 
                                The O(1) access time is crucial for cache effectiveness.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Examples:</strong> Redis key-value store, CPU caches, web browser caches, CDN systems.
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-bold text-orange-300 mb-3">Network and Security Applications</h4>
                            <p className="text-gray-300 mb-3">
                                Hash tables support routing tables, password storage (with cryptographic hashing), 
                                and duplicate detection in network protocols.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Examples:</strong> Router forwarding tables, blockchain address verification, network intrusion detection.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-linear-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">Key Takeaways</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">Hash Function Design</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Modulo Arithmetic:</strong> Most reliable method, use prime table sizes for best distribution.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Uniform Distribution:</strong> Good hash functions spread keys evenly across all table slots.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Deterministic:</strong> Same input must always produce the same hash value.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Efficiency:</strong> Hash computation should be faster than alternative search methods.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Collision Resolution Trade-offs</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Chaining:</strong> Simplest implementation, handles high load factors, poor cache performance.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Linear Probing:</strong> Best cache performance, clustering problems, requires low load factor.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Double Hashing:</strong> Best open addressing method, eliminates clustering, more complex.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Method Selection:</strong> Choose based on load factor, memory constraints, and cache requirements.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">Performance Optimization</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Load Factor Management:</strong> Keep α ≤ 0.75 for optimal performance in most applications.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Dynamic Resizing:</strong> Resize table when load factor threshold exceeded.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Average Case:</strong> O(1) for all operations with good hash function and proper sizing.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Worst Case:</strong> O(n) when all keys collide, mitigated by good hash function design.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-3">When to Use Hash Tables</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Fast Lookups:</strong> When O(1) search time is critical and ordering is not required.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Unique Keys:</strong> Ideal for sets, dictionaries, and associative arrays.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Caching:</strong> Excellent for caches where fast access to recently stored data is essential.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Avoid When:</strong> Range queries, ordered traversal, or worst-case guarantees are required.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Implementation Considerations</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Table Size:</strong> Choose prime numbers to minimize collision patterns and improve distribution.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Hash Function Quality:</strong> Test hash functions with real data to ensure uniform distribution.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Memory vs Speed:</strong> Chaining uses more memory but handles high loads better.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Deletion Handling:</strong> Use tombstones for open addressing to maintain probe sequences.</span>
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

export default Hashing;