import CodeBox from '../components/CodeBox';

function StackQueue() {
    const stackImplementation = [
        {
            language: 'python',
            code: `class Stack:
    def __init__(self):
        self.max_stack_size = 5
        self.stack = [None] * self.max_stack_size
        self.top = -1
        self.count = 0

    def push(self, number):
        if self.count == self.max_stack_size:
            raise OverflowError("The stack is currently full.")
        else:
            self.top += 1
            self.stack[self.top] = number
            self.count += 1
            print(f"Debug | Pushed {number} onto the stack.")
            print(f"Current Stack: {self.stack}")

    def pop(self):
        if self.count == 0:
            raise ValueError("Nothing in the stack to pop.")
        else:
            value_to_remove = self.stack[self.top]
            self.stack[self.top] = None
            self.top -= 1
            self.count -= 1
            print(f"Debug | Popped {value_to_remove} from the stack.")
            print(f"Current Stack: {self.stack}")
            return value_to_remove

    def peek(self):
        if self.count == 0:
            raise ValueError("Stack is empty.")
        else:
            peek_value = self.stack[self.top]
            print(f"Debug | Top value of the stack is: {peek_value}")
            return peek_value

    def length(self):
        print(f"Debug | There are {self.count} numbers in the stack.")
        return self.count`,
        },
    ];

    const queueImplementation = [
        {
            language: 'python',
            code: `class Queue:
    def __init__(self):
        self.max_queue_size = 5
        self.queue = [None] * self.max_queue_size
        self.front = 0
        self.back = -1
        self.count = 0

    def enqueue(self, number):
        if self.count == self.max_queue_size:
            raise OverflowError("The queue is currently full.")
        else:
            self.back = (self.back + 1) % self.max_queue_size
            self.queue[self.back] = number
            self.count += 1
            print(f"Debug | Added {number} to the queue.")
            print(f"Current Queue: {self.queue}")

    def dequeue(self):
        if self.count < 1:
            raise ValueError("Nothing in the queue to remove.")
        else:
            value_to_remove = self.queue[self.front]
            self.queue[self.front] = None
            self.front = (self.front + 1) % self.max_queue_size
            self.count -= 1
            print(f"Debug | Removed {value_to_remove} from the queue.")
            print(f"Current Queue: {self.queue}")
            return value_to_remove

    def peek(self):
        if self.count < 1:
            raise ValueError("There is nothing currently in queue.")
        else:
            peek_value = self.queue[self.front]
            print(f"Debug | Peak value at the front of the queue is: {peek_value}")
            return peek_value

    def length(self):
        print(f"Debug | There are {self.count} numbers in queue.")
        return self.count`,
        },
    ];

    const reverseQueueExample = [
        {
            language: 'python',
            code: `def reverse_queue(queue):
    return queue[::-1]

# Example: Convert Queue "12345" into Queue "54321"
original_queue = [1, 2, 3, 4, 5]
reversed_queue = reverse_queue(original_queue)
print(reversed_queue)  # [5, 4, 3, 2, 1]`,
        },
    ];

    const removeAdjacentExample = [
        {
            language: 'python',
            code: `def remove_adjacent_characters(data):
    stack = []
    
    for char in data:
        if stack and stack[-1] == char:
            stack.pop()
        else:
            stack.append(char)
    
    return ''.join(stack)

# Examples:
print(remove_adjacent_characters("abbccd"))    # "ad"
print(remove_adjacent_characters("dsallasg"))  # "dg"
print(remove_adjacent_characters("abccbadd"))  # ""`,
        },
    ];

    const bracketValidationExample = [
        {
            language: 'python',
            code: `def brackets_validation(data):
    stack = []
    bracket_pairs = {')': '(', ']': '[', '}': '{'}
    
    for char in data:
        if char in "([{":
            stack.append(char)
        elif char in ")]}":
            if not stack or stack[-1] != bracket_pairs[char]:
                return False
            stack.pop()
    
    return True

# Examples:
print(brackets_validation("(abc)"))    # True
print(brackets_validation("ds"))       # True
print(brackets_validation("[a{b]c}"))  # False`,
        },
    ];

    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        Stack & Queue
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">6% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    Stacks and Queues are fundamental <strong>Abstract Data Types (ADTs)</strong> that organize data with specific access patterns. 
                    A <strong>Stack</strong> follows Last-In First-Out (LIFO) principle, like a stack of plates where you add and remove from the top. 
                    A <strong>Queue</strong> follows First-In First-Out (FIFO) principle, like a queue at a supermarket where the first person in line is served first. 
                    This page covers their implementations, operations, real-world applications, and common algorithmic problems to master these essential data structures.
                </p>

                <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        Core Principles
                    </h3>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border border-blue-700 bg-blue-900/20 p-5">
                            <h4 className="text-xl font-bold text-blue-300 mb-3">Stack: Last-In First-Out (LIFO)</h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                The most recently added element is the first to be removed. Think of a stack of plates: you add plates to the top and take plates from the top.
                            </p>
                        </div>

                        <div className="rounded-lg border border-green-700 bg-green-900/20 p-5">
                            <h4 className="text-xl font-bold text-green-300 mb-3">Queue: First-In First-Out (FIFO)</h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                The first element added is the first to be removed. Think of a queue at a checkout: the first person in line is served first.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Stack Data Structure
                    </h3>

                    <div className="rounded-lg border border-blue-600 bg-blue-900/20 p-6">
                        <div className="mb-6">
                            <h4 className="text-2xl font-bold text-blue-400 mb-4">What is a Stack?</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                A <strong>Stack</strong> is a linear data structure that follows the <strong>Last-In First-Out (LIFO)</strong> principle. 
                                Elements can only be added or removed from one end, called the <strong>top</strong> of the stack. 
                                All operations occur at the top, making it a restricted access structure.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-blue-300 mb-2">Visual Representation:</h5>
                                <div className="p-4 bg-gray-800/50 rounded">
                                    <div className="flex md:hidden flex-col items-center gap-4 mx-auto w-fit">
                                        <div className="text-center">
                                            <div className="text-yellow-400 font-semibold text-sm mb-1">PUSH / POP</div>
                                            <div className="text-yellow-400 text-xs">(Add / Remove)</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                        </svg>
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-32 h-14 bg-red-500/30 border-2 border-red-500 rounded flex items-center justify-center text-white font-bold text-sm">
                                                7
                                            </div>
                                            <div className="w-32 h-14 bg-blue-500/30 border-2 border-blue-500 rounded flex items-center justify-center text-white font-bold">
                                                5
                                            </div>
                                            <div className="w-32 h-14 bg-blue-500/30 border-2 border-blue-500 rounded flex items-center justify-center text-white font-bold">
                                                2
                                            </div>
                                            <div className="w-32 h-14 bg-blue-500/30 border-2 border-blue-500 rounded flex items-center justify-center text-white font-bold">
                                                4
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8 text-xs text-gray-400">
                                            <div className="text-center">
                                                <div className="text-red-400 font-semibold">TOP</div>
                                                <div>Last element (7)</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-blue-400 font-semibold">BOTTOM</div>
                                                <div>First element (4)</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden md:flex flex-col items-center gap-4 mx-auto w-fit">
                                        <div className="flex items-center gap-2">
                                            <div className="flex flex-row items-center gap-1">
                                                <div className="w-16 h-16 bg-blue-500/30 border-2 border-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">
                                                    4
                                                </div>
                                                <div className="w-16 h-16 bg-blue-500/30 border-2 border-blue-500 rounded flex items-center justify-center text-white font-bold">
                                                    2
                                                </div>
                                                <div className="w-16 h-16 bg-blue-500/30 border-2 border-blue-500 rounded flex items-center justify-center text-white font-bold">
                                                    5
                                                </div>
                                                <div className="w-16 h-16 bg-red-500/30 border-2 border-red-500 rounded flex items-center justify-center text-white font-bold text-sm">
                                                    7
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                            <div className="text-center">
                                                <div className="text-yellow-400 font-semibold text-sm mb-1">PUSH / POP</div>
                                                <div className="text-yellow-400 text-xs">(Add / Remove)</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8 text-xs text-gray-400">
                                            <div className="text-center">
                                                <div className="text-blue-400 font-semibold">BOTTOM</div>
                                                <div>First element (4)</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-red-400 font-semibold">TOP</div>
                                                <div>Last element (7)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 mt-2 text-center">Last-In First-Out (LIFO): The last element added (7) will be the first to be removed.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-800/50 rounded p-4">
                                <h5 className="font-semibold text-blue-300 mb-2">Stack Operations:</h5>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li><strong>Push:</strong> Add an element to the top of the stack.</li>
                                    <li><strong>Pop:</strong> Remove and return the element from the top.</li>
                                    <li><strong>Peek:</strong> View the top element without removing it.</li>
                                    <li><strong>Length:</strong> Return the number of elements in the stack.</li>
                                </ul>
                            </div>
                            <div className="bg-gray-800/50 rounded p-4">
                                <h5 className="font-semibold text-blue-300 mb-2">Common Applications:</h5>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>Function call management (recursion).</li>
                                    <li>Undo/Redo functionality in applications.</li>
                                    <li>Expression evaluation and syntax parsing.</li>
                                    <li>Backtracking algorithms (maze solving).</li>
                                </ul>
                            </div>
                        </div>

                        <CodeBox 
                            examples={stackImplementation}
                            title="Stack Implementation"
                        />
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Queue Data Structure
                    </h3>

                    <div className="rounded-lg border border-green-600 bg-green-900/20 p-6">
                        <div className="mb-6">
                            <h4 className="text-2xl font-bold text-green-400 mb-4">What is a Queue?</h4>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                A <strong>Queue</strong> is a linear data structure that follows the <strong>First-In First-Out (FIFO)</strong> principle. 
                                Elements are added at the <strong>back (rear/tail)</strong> and removed from the <strong>front (head)</strong>. 
                                This mimics real-world queues where the first person in line is served first.
                            </p>

                            <div className="bg-gray-900/60 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-green-300 mb-2">Visual Representation:</h5>
                                <div className="p-4 bg-gray-800/50 rounded">
                                    <div className="flex md:hidden flex-col items-center gap-4 mx-auto w-fit">
                                        <div className="text-center">
                                            <div className="text-red-400 font-semibold text-sm mb-1">DEQUEUE</div>
                                            <div className="text-red-400 text-xs">(Remove)</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-32 h-14 bg-red-500/30 border-2 border-red-500 rounded flex items-center justify-center text-white font-bold text-sm">
                                                4
                                            </div>
                                            <div className="w-32 h-14 bg-blue-500/30 border-2 border-blue-500 rounded flex items-center justify-center text-white font-bold">
                                                2
                                            </div>
                                            <div className="w-32 h-14 bg-blue-500/30 border-2 border-blue-500 rounded flex items-center justify-center text-white font-bold">
                                                5
                                            </div>
                                            <div className="w-32 h-14 bg-green-500/30 border-2 border-green-500 rounded flex items-center justify-center text-white font-bold text-sm">
                                                7
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                        <div className="text-center">
                                            <div className="text-yellow-400 font-semibold text-sm mb-1">ENQUEUE</div>
                                            <div className="text-yellow-400 text-xs">(Add)</div>
                                        </div>
                                        <div className="flex items-center gap-8 text-xs text-gray-400 mt-2">
                                            <div className="text-center">
                                                <div className="text-red-400 font-semibold">FRONT</div>
                                                <div>First element (4)</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-green-400 font-semibold">BACK</div>
                                                <div>Last element (7)</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden md:flex flex-col items-center gap-4 mx-auto w-fit">
                                        <div className="flex items-center gap-2">
                                            <div className="text-center">
                                                <div className="text-red-400 font-semibold text-sm mb-1">DEQUEUE</div>
                                                <div className="text-red-400 text-xs">(Remove)</div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                            <div className="flex items-center gap-1">
                                                <div className="w-16 h-16 bg-red-500/30 border-2 border-red-500 rounded flex items-center justify-center text-white font-bold text-sm">
                                                    4
                                                </div>
                                                <div className="w-16 h-16 bg-blue-500/30 border-2 border-blue-500 rounded flex items-center justify-center text-white font-bold">
                                                    2
                                                </div>
                                                <div className="w-16 h-16 bg-blue-500/30 border-2 border-blue-500 rounded flex items-center justify-center text-white font-bold">
                                                    5
                                                </div>
                                                <div className="w-16 h-16 bg-green-500/30 border-2 border-green-500 rounded flex items-center justify-center text-white font-bold text-sm">
                                                    7
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                            <div className="text-center">
                                                <div className="text-yellow-400 font-semibold text-sm mb-1">ENQUEUE</div>
                                                <div className="text-yellow-400 text-xs">(Add)</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8 text-xs text-gray-400">
                                            <div className="text-center">
                                                <div className="text-red-400 font-semibold">FRONT</div>
                                                <div>First element (4)</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-green-400 font-semibold">BACK</div>
                                                <div>Last element (7)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 mt-2 text-center">First-In First-Out (FIFO): The first element added (4) will be the first to be removed.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-800/50 rounded p-4">
                                <h5 className="font-semibold text-green-300 mb-2">Queue Operations:</h5>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li><strong>Enqueue:</strong> Add an element to the back of the queue.</li>
                                    <li><strong>Dequeue:</strong> Remove and return the element from the front.</li>
                                    <li><strong>Peek:</strong> View the front element without removing it.</li>
                                    <li><strong>Length:</strong> Return the number of elements in the queue.</li>
                                </ul>
                            </div>
                            <div className="bg-gray-800/50 rounded p-4">
                                <h5 className="font-semibold text-green-300 mb-2">Common Applications:</h5>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>Task scheduling in operating systems.</li>
                                    <li>Print queue management.</li>
                                    <li>Breadth-First Search (BFS) in graphs.</li>
                                    <li>Customer service systems (first-come, first-served).</li>
                                </ul>
                            </div>
                        </div>

                        <CodeBox 
                            examples={queueImplementation}
                            title="Queue Implementation (Circular Queue)"
                        />
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Stack vs Queue Comparison
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="text-left p-3 text-gray-300 font-semibold">Aspect</th>
                                    <th className="text-left p-3 text-blue-300 font-semibold">Stack (LIFO)</th>
                                    <th className="text-left p-3 text-green-300 font-semibold">Queue (FIFO)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50">
                                <tr className="border-b border-gray-700">
                                    <td className="p-3 text-gray-300 font-semibold">Principle</td>
                                    <td className="p-3 text-gray-300">Last-In First-Out</td>
                                    <td className="p-3 text-gray-300">First-In First-Out</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="p-3 text-gray-300 font-semibold">Insertion</td>
                                    <td className="p-3 text-gray-300">Push (at top)</td>
                                    <td className="p-3 text-gray-300">Enqueue (at back)</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="p-3 text-gray-300 font-semibold">Deletion</td>
                                    <td className="p-3 text-gray-300">Pop (from top)</td>
                                    <td className="p-3 text-gray-300">Dequeue (from front)</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="p-3 text-gray-300 font-semibold">Access Points</td>
                                    <td className="p-3 text-gray-300">One end (top)</td>
                                    <td className="p-3 text-gray-300">Two ends (front & back)</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-gray-300 font-semibold">Real-World Example</td>
                                    <td className="p-3 text-gray-300">Stack of plates, browser history</td>
                                    <td className="p-3 text-gray-300">Checkout line, print queue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Real-World Applications
                    </h3>

                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">Stack Applications (LIFO)</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>An ailing company evaluating employee records to lay off workers based on service time - the most recently hired employee being laid off first.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>A program to receive data that must be saved and processed in reverse order.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>A maze-solving program that backtracks to an earlier position (the last place where a choice was made) when reaching a dead-end.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>A data structure to keep track of return addresses for nested functions while a program is running.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Queue Applications (FIFO)</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>A hospital clinic tracking patients as they check in, assigning each to a doctor on a first-come, first-served basis.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>Customers taking numbers at a bakery and being served in order when their numbers come up.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>An operating system processing requests for computer resources by allocating them in the order they are requested.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>A grocery chain simulation to analyze how average customer wait time would be affected by changing the number of checkouts.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-3">When Neither is Appropriate</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-400 mt-1">•</span>
                                        <span>An inventory of parts to be processed by part number requires direct access by key, not sequential access.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-400 mt-1">•</span>
                                        <span>Lottery gamblers taking numbers and winning if their numbers are picked requires random access, not sequential processing.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Common Algorithmic Problems
                    </h3>

                    <div className="space-y-8">
                        <div className="rounded-lg border border-purple-600 bg-purple-900/20 p-6">
                            <h4 className="text-xl font-bold text-purple-400 mb-4">Problem 1: Reversing a Queue</h4>
                            <p className="text-gray-300 mb-4">
                                Design an algorithm to reverse a Queue using Stacks and Queues. 
                                For example, convert Queue [1, 2, 3, 4, 5] into [5, 4, 3, 2, 1].
                            </p>
                            <CodeBox 
                                examples={reverseQueueExample}
                                title="Queue Reversal Solution"
                            />
                        </div>

                        <div className="rounded-lg border border-orange-600 bg-orange-900/20 p-6">
                            <h4 className="text-xl font-bold text-orange-400 mb-4">Problem 2: Remove Adjacent Duplicates</h4>
                            <p className="text-gray-300 mb-4">
                                Continuously remove adjacent duplicate letters from a string until no adjacent duplicates remain, using a Stack. 
                                Examples: "abbccd" → "ad", "dsallasg" → "dg", "abccbadd" → "".
                            </p>
                            <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-orange-300 mb-2">Algorithm Explanation:</h5>
                                <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
                                    <li>Iterate through each character in the string.</li>
                                    <li>If the stack is not empty and the top element equals the current character, pop the stack (remove duplicate).</li>
                                    <li>Otherwise, push the current character onto the stack.</li>
                                    <li>Join the remaining characters in the stack to form the result.</li>
                                </ol>
                            </div>
                            <CodeBox 
                                examples={removeAdjacentExample}
                                title="Adjacent Duplicates Removal"
                            />
                        </div>

                        <div className="rounded-lg border border-cyan-600 bg-cyan-900/20 p-6">
                            <h4 className="text-xl font-bold text-cyan-400 mb-4">Problem 3: Valid Bracket Matching</h4>
                            <p className="text-gray-300 mb-4">
                                Determine if brackets in a string are valid using a Stack. 
                                Open brackets must be closed by the same type in correct order. 
                                Examples: "(abc)" → True, "ds" → True, "[a&#123;b]c&#125;" → False.
                            </p>
                            <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                                <h5 className="font-bold text-cyan-300 mb-2">Algorithm Explanation:</h5>
                                <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
                                    <li>Create a mapping of closing brackets to their opening counterparts.</li>
                                    <li>Iterate through each character in the string.</li>
                                    <li>If it's an opening bracket, push it onto the stack.</li>
                                    <li>If it's a closing bracket, check if the stack is empty or if the top doesn't match - return False.</li>
                                    <li>Pop the matching opening bracket from the stack.</li>
                                    <li>After processing all characters, return True if the stack is empty, False otherwise.</li>
                                </ol>
                            </div>
                            <CodeBox 
                                examples={bracketValidationExample}
                                title="Bracket Validation Solution"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-linear-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">Key Takeaways</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-3">Core Concepts</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Stack (LIFO):</strong> Last-In First-Out access pattern. The most recently added element is removed first. All operations (push, pop, peek) occur at the top.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Queue (FIFO):</strong> First-In First-Out access pattern. The first element added is removed first. Elements are added at the back and removed from the front.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Abstract Data Types (ADTs):</strong> Both Stack and Queue are ADTs with defined operations, hiding implementation details from the user.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-3">Essential Operations</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-gray-800/50 rounded p-4">
                                        <h5 className="font-semibold text-blue-300 mb-2">Stack Operations:</h5>
                                        <ul className="text-sm text-gray-300 space-y-1">
                                            <li><strong>Push:</strong> O(1) - Add element to top.</li>
                                            <li><strong>Pop:</strong> O(1) - Remove and return top element.</li>
                                            <li><strong>Peek:</strong> O(1) - View top without removing.</li>
                                            <li><strong>Length:</strong> O(1) - Get stack size.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-4">
                                        <h5 className="font-semibold text-green-300 mb-2">Queue Operations:</h5>
                                        <ul className="text-sm text-gray-300 space-y-1">
                                            <li><strong>Enqueue:</strong> O(1) - Add element to back.</li>
                                            <li><strong>Dequeue:</strong> O(1) - Remove and return front element.</li>
                                            <li><strong>Peek:</strong> O(1) - View front without removing.</li>
                                            <li><strong>Length:</strong> O(1) - Get queue size.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-3">When to Use Each Structure</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-400 mt-1">•</span>
                                        <span><strong>Use Stack when:</strong> You need to reverse order, implement undo functionality, track function calls (recursion), parse expressions, or backtrack through decisions.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-400 mt-1">•</span>
                                        <span><strong>Use Queue when:</strong> You need to maintain order, schedule tasks, implement breadth-first search, manage resources fairly, or process requests in arrival order.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-400 mt-1">•</span>
                                        <span><strong>Use Neither when:</strong> You need random access by key (use hash table), direct positional access (use array), or complex relationships (use graph or tree).</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Implementation Considerations</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400 mt-1">•</span>
                                        <span><strong>Array-based:</strong> Fixed size, O(1) operations, efficient memory access, requires size management (check for overflow).</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400 mt-1">•</span>
                                        <span><strong>Linked-list based:</strong> Dynamic size, O(1) operations, more memory overhead, no overflow concerns but requires pointer management.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400 mt-1">•</span>
                                        <span><strong>Circular Queue:</strong> Reuses array space efficiently by wrapping indices using modulus operation, preventing wasted space.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-yellow-300 mb-3">Common Exam Problems</h4>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className="bg-gray-800/50 rounded p-3">
                                        <strong className="font-bold text-yellow-300">Operation Tracing:</strong>
                                        <p className="text-sm text-gray-300 mt-1">Follow sequences of push/pop/enqueue/dequeue operations to determine final state.</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-3">
                                        <strong className="font-bold text-yellow-300">Bracket Matching:</strong>
                                        <p className="text-sm text-gray-300 mt-1">Use stack to validate parentheses, brackets, and braces are properly paired and nested.</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-3">
                                        <strong className="font-bold text-yellow-300">Queue Reversal:</strong>
                                        <p className="text-sm text-gray-300 mt-1">Use stack as auxiliary structure to reverse queue order (FIFO becomes LIFO then FIFO again).</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded p-3">
                                        <strong className="font-bold text-yellow-300">Adjacent Duplicates:</strong>
                                        <p className="text-sm text-gray-300 mt-1">Stack-based algorithm to remove consecutive matching characters until none remain.</p>
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

export default StackQueue;