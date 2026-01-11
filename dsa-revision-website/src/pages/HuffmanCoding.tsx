import CodeBox from '../components/CodeBox';

function HuffmanCoding() {
    const fixedLengthExample = [
        {
            language: 'python',
            code: `# Fixed-Length Coding Example
# Characters: a, u, x, z (1000 characters total)
# Using 2 bits per character: 00=a, 01=x, 10=u, 11=z

def fixed_length_encode(text):
    # Mapping table
    char_to_code = {'a': '00', 'x': '01', 'u': '10', 'z': '11'}
    
    encoded = ""
    for char in text:
        encoded += char_to_code[char]
    
    return encoded

def fixed_length_decode(encoded_bits):
    # Reverse mapping
    code_to_char = {'00': 'a', '01': 'x', '10': 'u', '11': 'z'}
    
    decoded = ""
    for i in range(0, len(encoded_bits), 2):
        code = encoded_bits[i:i+2]
        decoded += code_to_char[code]
    
    return decoded

# Example: Encode "aaxuaxz"
text = "aaxuaxz"
encoded = fixed_length_encode(text)
print(f"Original: {text}")
print(f"Encoded: {encoded}")  # "00000110000111"
print(f"Decoded: {fixed_length_decode(encoded)}")

# Storage calculation:
# Without compression: 1000 characters × 8 bits = 8000 bits
# With compression: 1000 characters × 2 bits + 48 bits (table) = 2048 bits
# Compression ratio: 8000/2048 = 3.9:1`,
        },
    ];

    const variableLengthExample = [
        {
            language: 'python',
            code: `# Variable-Length Coding Example
# Characters with frequencies: a=3, x=2, u=1, z=1
# Codes: 0=a, 10=x, 110=u, 111=z

def variable_length_encode(text):
    # Frequency-based mapping (shorter codes for frequent chars)
    char_to_code = {'a': '0', 'x': '10', 'u': '110', 'z': '111'}
    
    encoded = ""
    for char in text:
        encoded += char_to_code[char]
    
    return encoded

def variable_length_decode(encoded_bits):
    # Prefix-free codes - no code is prefix of another
    code_to_char = {'0': 'a', '10': 'x', '110': 'u', '111': 'z'}
    
    decoded = ""
    i = 0
    
    while i < len(encoded_bits):
        # Try progressively longer prefixes
        for length in range(1, 4):  # Max code length is 3
            if i + length <= len(encoded_bits):
                prefix = encoded_bits[i:i+length]
                if prefix in code_to_char:
                    decoded += code_to_char[prefix]
                    i += length
                    break
    
    return decoded

# Example: Encode "aaxuaxz"
text = "aaxuaxz" 
encoded = variable_length_encode(text)
print(f"Original: {text}")
print(f"Encoded: {encoded}")  # "0010110010111" (13 bits vs 14 bits fixed)
print(f"Decoded: {variable_length_decode(encoded)}")

# Advantage: 13 bits vs 14 bits for fixed-length coding`,
        },
    ];

    const huffmanTreeExample = [
        {
            language: 'python',
            code: `# Huffman Tree Construction Algorithm
import heapq
from collections import Counter, namedtuple

class Node:
    def __init__(self, char=None, freq=0, left=None, right=None):
        self.char = char
        self.freq = freq
        self.left = left
        self.right = right
    
    def __lt__(self, other):
        return self.freq < other.freq

def build_huffman_tree(text):
    # Step 1: Count character frequencies
    freq_table = Counter(text)
    
    # Step 2: Create leaf nodes and add to min-heap
    heap = []
    for char, freq in freq_table.items():
        node = Node(char, freq)
        heapq.heappush(heap, node)
    
    # Step 3: Build tree bottom-up
    while len(heap) > 1:
        # Remove two nodes with lowest frequencies
        left = heapq.heappop(heap)
        right = heapq.heappop(heap)
        
        # Create new internal node
        merged = Node(None, left.freq + right.freq, left, right)
        heapq.heappush(heap, merged)
    
    return heap[0]  # Root node

def generate_codes(root):
    if not root:
        return {}
    
    codes = {}
    
    def traverse(node, code):
        if node.char is not None:  # Leaf node
            codes[node.char] = code if code else '0'  # Handle single character
        else:  # Internal node
            if node.left:
                traverse(node.left, code + '0')
            if node.right:
                traverse(node.right, code + '1')
    
    traverse(root, '')
    return codes

# Example usage
text = "ABRACADABRA"
root = build_huffman_tree(text)
codes = generate_codes(root)

print("Character frequencies:")
for char, freq in Counter(text).items():
    print(f"{char}: {freq}")

print("\\nHuffman codes:")
for char, code in sorted(codes.items()):
    print(f"{char}: {code}")`,
        },
    ];

    const huffmanEncodingExample = [
        {
            language: 'python',
            code: `# Huffman Encoding and Decoding Implementation
def huffman_encode(text, codes):
    encoded = ""
    for char in text:
        encoded += codes[char]
    return encoded

def huffman_decode(encoded_bits, root):
    decoded = ""
    current = root
    
    for bit in encoded_bits:
        if bit == '0':
            current = current.left
        else:
            current = current.right
        
        # If leaf node reached, add character and reset to root
        if current.char is not None:
            decoded += current.char
            current = root
    
    return decoded

# Complete example with frequency analysis
def huffman_compression_example():
    # Example: Characters A=29, B=64, C=32, D=12, E=9, F=66, G=23
    frequencies = {'A': 29, 'B': 64, 'C': 32, 'D': 12, 'E': 9, 'F': 66, 'G': 23}
    
    # Simulate building tree with given frequencies
    # Resulting codes (may vary based on implementation):
    codes = {
        'F': '00',    # Most frequent
        'B': '01', 
        'C': '100',
        'A': '101',
        'G': '110',
        'D': '1110',  # Least frequent
        'E': '1111'
    }
    
    # Test encoding/decoding
    test_text = "FACED"
    encoded = huffman_encode(test_text, codes)
    
    print(f"Original text: {test_text}")
    print(f"Encoded: {encoded}")
    print(f"Bits used: {len(encoded)}")
    print(f"Fixed-length would use: {len(test_text) * 8} bits")
    print(f"Compression ratio: {(len(test_text) * 8) / len(encoded):.2f}:1")

huffman_compression_example()`,
        },
    ];

    const compressionApplicationExample = [
        {
            language: 'python',
            code: `# Real-World Compression Application
import os
from collections import Counter

class HuffmanCompressor:
    def __init__(self):
        self.codes = {}
        self.tree = None
    
    def analyze_file(self, filename):
        with open(filename, 'r', encoding='utf-8') as file:
            content = file.read()
        
        freq_table = Counter(content)
        return content, freq_table
    
    def compress_file(self, input_file, output_file):
        # Read and analyze file
        content, freq_table = self.analyze_file(input_file)
        
        # Build Huffman tree and generate codes
        self.tree = self.build_tree(freq_table)
        self.codes = self.generate_codes(self.tree)
        
        # Encode content
        encoded = self.encode(content)
        
        # Calculate compression statistics
        original_bits = len(content) * 8
        compressed_bits = len(encoded)
        compression_ratio = original_bits / compressed_bits if compressed_bits > 0 else 0
        
        # Save compressed data (would include frequency table)
        compression_data = {
            'encoded_data': encoded,
            'frequency_table': dict(freq_table),
            'original_size': original_bits,
            'compressed_size': compressed_bits,
            'compression_ratio': compression_ratio
        }
        
        return compression_data
    
    def decompress_file(self, compressed_data, output_file):
        # Rebuild tree from frequency table
        freq_table = compressed_data['frequency_table']
        self.tree = self.build_tree(freq_table)
        
        # Decode data
        decoded = self.decode(compressed_data['encoded_data'])
        
        # Write to file
        with open(output_file, 'w', encoding='utf-8') as file:
            file.write(decoded)
        
        return decoded

# Usage example for text compression
def demonstrate_text_compression():
    text = """
    The quick brown fox jumps over the lazy dog.
    Pack my box with five dozen liquor jugs.
    How razorback-jumping frogs can level six piqued gymnasts!
    """
    
    compressor = HuffmanCompressor()
    
    # Analyze character frequencies
    freq_table = Counter(text)
    print("Top 10 most frequent characters:")
    for char, freq in freq_table.most_common(10):
        display_char = repr(char) if char in '\\n\\t ' else char
        print(f"{display_char}: {freq}")
    
    print(f"\\nOriginal size: {len(text)} characters ({len(text) * 8} bits)")
    
    # Note: This is a simplified example
    # Real implementation would handle binary file I/O`,
        },
    ];

    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        Huffman Coding
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">6% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    <strong>Huffman Coding</strong> is a <strong>lossless data compression algorithm</strong> that uses <strong>variable-length codes</strong> 
                    to represent characters based on their frequencies. Developed by David Huffman in 1952, this algorithm assigns shorter codes to 
                    more frequently occurring characters and longer codes to less frequent ones, achieving optimal compression for given symbol frequencies. 
                    Huffman coding uses a <strong>binary tree structure</strong> where leaf nodes represent characters and the path from root to leaf 
                    determines the character's binary code. This page covers data compression fundamentals, fixed vs variable-length coding, 
                    the Huffman algorithm, tree construction, and practical applications in file compression and communication systems.
                </p>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Data Compression Fundamentals
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">What is Data Compression?</h4>
                            <p className="text-gray-300 mb-3">
                                <strong>Data compression</strong> is the process of encoding information using fewer bits than a more obvious 
                                representation would use, through specific encoding schemes. The goal is to represent information 
                                (text, sound, image, or video) as accurately as possible using the fewest number of bits.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Benefits:</strong> Reduces storage space and cost, decreases data retrieval time, 
                                and minimizes transmission time for communication systems.
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Compression Components</h4>
                            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                                <div>
                                    <ul className="space-y-2">
                                        <li><strong>Encoder:</strong> Compresses the original data into a smaller representation.</li>
                                        <li><strong>Decoder:</strong> Decompresses the compressed data back to usable form.</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="space-y-2">
                                        <li><strong>Compression Ratio:</strong> Original size ÷ Compressed size</li>
                                        <li><strong>Example:</strong> 8000 bits → 2000 bits = 4:1 compression ratio</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Types of Data Compression
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Lossless Compression</h4>
                            <p className="text-gray-300 mb-3">
                                <strong>Lossless compression</strong> allows the original data to be perfectly reconstructed from the compressed data. 
                                Essential for text compression where every character must be preserved exactly.
                            </p>
                            <div className="space-y-3">
                                <div className="bg-gray-800/50 rounded p-3">
                                    <h5 className="font-bold text-blue-200 mb-1">Applications:</h5>
                                    <ul className="text-xs text-gray-300 space-y-1">
                                        <li>• Text files and documents</li>
                                        <li>• Source code and configuration files</li>
                                        <li>• Archive formats (ZIP, RAR)</li>
                                        <li>• PNG images for graphics</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded p-3">
                                    <p className="text-sm text-gray-300">
                                        <strong>Typical compression ratios:</strong> 2:1 to 8:1 for text data
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Lossy Compression</h4>
                            <p className="text-gray-300 mb-3">
                                <strong>Lossy compression</strong> achieves higher compression ratios by permanently removing some information. 
                                The decompressed data differs from the original but maintains acceptable quality for the intended use.
                            </p>
                            <div className="space-y-3">
                                <div className="bg-gray-800/50 rounded p-3">
                                    <h5 className="font-bold text-green-200 mb-1">Applications & Ratios:</h5>
                                    <ul className="text-xs text-gray-300 space-y-1">
                                        <li>• Audio: MP3, AAC (10:1 compression with minimal quality loss)</li>
                                        <li>• Images: JPEG (10:1 with noticeable quality loss on inspection)</li>
                                        <li>• Video: MPEG, H.264 (100:1 with little visible quality loss)</li>
                                        <li>• May improve quality by removing noise (dust on lens, background static)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Fixed-Length Coding
                    </h3>

                    <p className="text-gray-300 mb-6">
                        In <strong>fixed-length coding</strong>, every character uses the same number of bits regardless of frequency. 
                        While simple to implement, this approach doesn't optimize for character frequency patterns.
                    </p>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-5">
                            <h4 className="text-lg font-bold text-cyan-300 mb-3">Fixed-Length Implementation</h4>
                            <CodeBox examples={fixedLengthExample} title="Fixed-Length Coding Example" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Analysis:</strong> For 1000 characters using 4 symbols, fixed-length coding achieves 3.9:1 compression 
                                    by reducing from 8 bits (ASCII) to 2 bits per character, plus small overhead for the mapping table.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Variable-Length Coding
                    </h3>

                    <p className="text-gray-300 mb-6">
                        <strong>Variable-length coding</strong> assigns shorter codes to frequently occurring characters and longer codes to 
                        less frequent ones. This approach can achieve better compression ratios than fixed-length coding.
                    </p>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-purple-600 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-bold text-purple-300 mb-3">Variable-Length Implementation</h4>
                            <CodeBox examples={variableLengthExample} title="Variable-Length Coding Example" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Key Requirement:</strong> Codes must be <strong>prefix-free</strong> - no code can be the prefix of another. 
                                    This ensures unambiguous decoding without delimiters between codes.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-bold text-orange-300 mb-3">Decoding Challenge</h4>
                            <p className="text-gray-300 mb-3">
                                With variable-length codes, the decoder doesn't know where one code ends and the next begins. 
                                The prefix-free property solves this by ensuring that reading from left to right, 
                                only one valid interpretation exists.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm">
                                <p className="text-gray-300">
                                    <strong>Example:</strong> Decoding "0010110010111" with codes 0=a, 10=x, 110=u, 111=z results in "aaxuaxz" 
                                    because each prefix uniquely identifies a character.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Huffman Coding Algorithm
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">Historical Background</h4>
                            <p className="text-gray-300 mb-3">
                                In 1951, MIT student David Huffman was given a choice between a final exam or a term paper on finding the most efficient binary code. 
                                Initially struggling to prove optimality, Huffman discovered the idea of using a frequency-sorted binary tree built from 
                                <strong>bottom-up</strong> rather than top-down. This breakthrough outdid his professor's Shannon-Fano coding method.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Key Insight:</strong> Building the tree from leaves to root (bottom-up) ensures optimal code length, 
                                while top-down approaches can produce suboptimal results.
                            </div>
                        </div>

                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Huffman Tree Construction</h4>
                            <CodeBox examples={huffmanTreeExample} title="Huffman Tree Building Algorithm" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Process:</strong> (1) Count character frequencies, (2) Create leaf nodes in min-heap, 
                                    (3) Repeatedly merge two lowest-frequency nodes, (4) Continue until one root node remains.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Huffman Tree Construction Example
                    </h3>

                    <p className="text-gray-300 mb-4">
                        Let's trace through building a Huffman tree for characters with frequencies: A=29, B=64, C=32, D=12, E=9, F=66, G=23.
                    </p>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-purple-600 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-bold text-purple-300 mb-3">Step-by-Step Tree Construction</h4>
                            <div className="space-y-4">
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-purple-200 mb-2">Initial Frequencies (sorted by frequency):</h5>
                                    <div className="text-xs text-gray-300 font-mono">
                                        E(9) → D(12) → G(23) → A(29) → C(32) → B(64) → F(66)
                                    </div>
                                </div>
                                
                                <div className="bg-gray-800/50 rounded p-4">
                                    <h5 className="font-bold text-purple-200 mb-2">Merge Process:</h5>
                                    <div className="text-xs text-gray-300 space-y-1">
                                        <div>1. Combine E(9) + D(12) = ED(21)</div>
                                        <div>2. Combine ED(21) + G(23) = EDG(44)</div>
                                        <div>3. Combine A(29) + C(32) = AC(61)</div>
                                        <div>4. Combine EDG(44) + AC(61) = EDGAC(105)</div>
                                        <div>5. Combine B(64) + F(66) = BF(130)</div>
                                        <div>6. Combine EDGAC(105) + BF(130) = Root(235)</div>
                                    </div>
                                </div>

                                <div className="bg-gray-800/50 rounded p-4 overflow-x-auto">
                                    <h5 className="font-bold text-purple-200 mb-2">Final Tree Structure:</h5>
                                    <pre className="text-xs text-gray-300 font-mono min-w-max">
{`         Root(235)
        /           \\
    EDGAC(105)     BF(130)
    /        \\     /      \\
  EDG(44)   AC(61)  B(64)  F(66)
  /    \\   /    \\
ED(21) G(23) A(29) C(32)
/   \\
E(9) D(12)`}
                                    </pre>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-bold text-orange-300 mb-3">Generated Huffman Codes</h4>
                            <div className="bg-gray-800/50 rounded p-4">
                                <div className="text-sm text-gray-300">
                                    Assign 0 to left branches and 1 to right branches. Codes are paths from root to leaf:
                                </div>
                                <div className="mt-3 grid md:grid-cols-2 gap-4 text-sm">
                                    <div className="space-y-1 text-gray-300">
                                        <div>F: 11 (2 bits) - most frequent</div>
                                        <div>B: 10 (2 bits)</div>
                                        <div>A: 010 (3 bits)</div>
                                        <div>C: 011 (3 bits)</div>
                                    </div>
                                    <div className="space-y-1 text-gray-300">
                                        <div>G: 001 (3 bits)</div>
                                        <div>D: 0001 (4 bits)</div>
                                        <div>E: 0000 (4 bits) - least frequent</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Encoding and Decoding Implementation
                    </h3>

                    <div className="space-y-6 mb-6">
                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Complete Huffman System</h4>
                            <CodeBox examples={huffmanEncodingExample} title="Huffman Encoding and Decoding" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Encoding:</strong> Replace each character with its Huffman code. 
                                    <strong>Decoding:</strong> Traverse tree using bits as directions until reaching a leaf node (character).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Huffman Coding Properties
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Property</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Description</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Benefit</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-green-400 font-medium">Optimal Prefix-Free</td>
                                    <td className="px-4 py-3 text-gray-300">Produces minimum expected code length</td>
                                    <td className="px-4 py-3 text-gray-300">Maximum compression for given frequencies</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-blue-400 font-medium">Lossless</td>
                                    <td className="px-4 py-3 text-gray-300">Perfect reconstruction of original data</td>
                                    <td className="px-4 py-3 text-gray-300">No information loss during compression</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Frequency Adaptive</td>
                                    <td className="px-4 py-3 text-gray-300">Shorter codes for frequent characters</td>
                                    <td className="px-4 py-3 text-gray-300">Better compression on skewed data</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-purple-400 font-medium">Self-Delimiting</td>
                                    <td className="px-4 py-3 text-gray-300">No separators needed between codes</td>
                                    <td className="px-4 py-3 text-gray-300">Efficient encoding without overhead</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-orange-400 font-medium">Tree-Based</td>
                                    <td className="px-4 py-3 text-gray-300">Uses binary tree for code generation</td>
                                    <td className="px-4 py-3 text-gray-300">Fast encoding/decoding operations</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 p-4 bg-green-900/20 border border-green-700 rounded-lg">
                        <p className="text-sm text-gray-300">
                            <strong className="text-green-400">Optimality Guarantee:</strong> Huffman coding produces the minimum possible 
                            average code length for any given set of symbol frequencies, making it optimal among all prefix-free codes.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Algorithm Complexity Analysis
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Operation</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Time Complexity</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Space Complexity</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Description</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-blue-400 font-medium">Tree Construction</td>
                                    <td className="px-4 py-3 text-gray-300">O(n log n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">Build tree using min-heap operations</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-green-400 font-medium">Code Generation</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">O(n)</td>
                                    <td className="px-4 py-3 text-gray-300">Traverse tree to generate codes</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Encoding</td>
                                    <td className="px-4 py-3 text-gray-300">O(m)</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)</td>
                                    <td className="px-4 py-3 text-gray-300">m = input length, lookup codes</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-purple-400 font-medium">Decoding</td>
                                    <td className="px-4 py-3 text-gray-300">O(m)</td>
                                    <td className="px-4 py-3 text-gray-300">O(1)</td>
                                    <td className="px-4 py-3 text-gray-300">m = encoded length, tree traversal</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                        <p className="text-sm text-gray-300">
                            <strong className="text-blue-400">Note:</strong> n = number of unique characters in alphabet. 
            The dominant cost is tree construction; encoding/decoding are linear in input size.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Real-World Applications
                    </h3>

                    <div className="space-y-6">
                        <div className="rounded-lg border border-green-600 bg-green-900/20 p-5">
                            <h4 className="text-lg font-bold text-green-300 mb-3">File Compression Systems</h4>
                            <CodeBox examples={compressionApplicationExample} title="Practical File Compression Implementation" />
                            <div className="mt-3 p-3 bg-gray-800/50 rounded">
                                <p className="text-sm text-gray-300">
                                    <strong>Real Implementation:</strong> Modern file compressors combine Huffman coding with other techniques 
                                    like LZ77 (used in ZIP/GZIP) for even better compression ratios.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-5">
                            <h4 className="text-lg font-bold text-blue-300 mb-3">Communication Systems</h4>
                            <p className="text-gray-300 mb-3">
                                Huffman coding is widely used in communication protocols and digital transmission systems 
                                where bandwidth efficiency is critical.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Applications:</strong> JPEG image compression, MP3 audio compression (as part of larger algorithms), 
                                fax machines, satellite communication, and network protocol optimization.
                            </div>
                        </div>

                        <div className="rounded-lg border border-purple-600 bg-purple-900/20 p-5">
                            <h4 className="text-lg font-bold text-purple-300 mb-3">Database and Storage Systems</h4>
                            <p className="text-gray-300 mb-3">
                                Database systems use Huffman-based compression for reducing storage requirements and 
                                improving I/O performance for frequently accessed data.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Examples:</strong> Column-store databases compress each column separately using character frequencies 
                                specific to that column's data type and distribution.
                            </div>
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-5">
                            <h4 className="text-lg font-bold text-orange-300 mb-3">Adaptive Huffman Coding</h4>
                            <p className="text-gray-300 mb-3">
                                Dynamic variant that updates the Huffman tree as data is processed, useful when character 
                                frequencies are not known in advance or change over time.
                            </p>
                            <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-300">
                                <strong>Use Cases:</strong> Real-time data streams, interactive communication systems, 
                                and scenarios where multiple passes through data are not feasible.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Huffman Coding vs Other Compression Methods
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-white font-semibold">Method</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Type</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Compression Ratio</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Best Use Case</th>
                                    <th className="px-4 py-3 text-left text-gray-300">Limitations</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-green-400 font-medium">Huffman Coding</td>
                                    <td className="px-4 py-3 text-gray-300">Lossless</td>
                                    <td className="px-4 py-3 text-gray-300">2:1 to 8:1</td>
                                    <td className="px-4 py-3 text-gray-300">Text with skewed frequencies</td>
                                    <td className="px-4 py-3 text-gray-300">Requires frequency table</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-blue-400 font-medium">LZ77 (ZIP/GZIP)</td>
                                    <td className="px-4 py-3 text-gray-300">Lossless</td>
                                    <td className="px-4 py-3 text-gray-300">3:1 to 10:1</td>
                                    <td className="px-4 py-3 text-gray-300">Text with repeated patterns</td>
                                    <td className="px-4 py-3 text-gray-300">Complex dictionary management</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-cyan-400 font-medium">Run-Length Encoding</td>
                                    <td className="px-4 py-3 text-gray-300">Lossless</td>
                                    <td className="px-4 py-3 text-gray-300">1:1 to 50:1</td>
                                    <td className="px-4 py-3 text-gray-300">Images with large solid areas</td>
                                    <td className="px-4 py-3 text-gray-300">Poor on diverse data</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-purple-400 font-medium">JPEG</td>
                                    <td className="px-4 py-3 text-gray-300">Lossy</td>
                                    <td className="px-4 py-3 text-gray-300">10:1 to 100:1</td>
                                    <td className="px-4 py-3 text-gray-300">Photographic images</td>
                                    <td className="px-4 py-3 text-gray-300">Information loss</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-3 text-orange-400 font-medium">MP3</td>
                                    <td className="px-4 py-3 text-gray-300">Lossy</td>
                                    <td className="px-4 py-3 text-gray-300">10:1 to 15:1</td>
                                    <td className="px-4 py-3 text-gray-300">Audio compression</td>
                                    <td className="px-4 py-3 text-gray-300">Perceptual quality loss</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">Key Takeaways</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">Huffman Coding Fundamentals</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Optimal Lossless Compression:</strong> Produces minimum expected code length for given symbol frequencies.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Frequency-Based:</strong> Assigns shorter codes to frequent characters, longer codes to rare characters.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Prefix-Free Property:</strong> No code is prefix of another, enabling unambiguous decoding.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Binary Tree Structure:</strong> Uses tree paths to generate variable-length binary codes.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Algorithm Implementation</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Tree Construction:</strong> Build bottom-up using min-heap, merging lowest frequency nodes first.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Code Generation:</strong> Traverse tree from root to leaves, assigning 0 for left, 1 for right.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Encoding Process:</strong> Replace each character with its corresponding Huffman code.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Decoding Process:</strong> Follow tree paths using encoded bits until reaching leaf nodes.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">Complexity and Performance</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Construction Time:</strong> O(n log n) where n is number of unique characters.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Encoding/Decoding:</strong> O(m) where m is length of input/output data.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Space Complexity:</strong> O(n) for tree storage and code table.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Compression Ratio:</strong> Depends on frequency distribution; better with skewed frequencies.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-3">Practical Applications</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>File Compression:</strong> Foundation for ZIP, GZIP, and other archive formats when combined with LZ77.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Multimedia Formats:</strong> Component in JPEG image compression and MP3 audio encoding.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Communication Systems:</strong> Bandwidth optimization in satellite, fax, and network protocols.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Database Systems:</strong> Column compression in analytical databases and data warehouses.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Design Considerations</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Frequency Analysis Required:</strong> Need to know or estimate character frequencies beforehand.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Table Storage Overhead:</strong> Must store or transmit frequency table with compressed data.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Adaptive Variants:</strong> Dynamic Huffman coding handles unknown or changing frequencies.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                                        <span><strong>Combination with Other Methods:</strong> Often used with dictionary-based compression for better results.</span>
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

export default HuffmanCoding;