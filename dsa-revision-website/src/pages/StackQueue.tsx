import CodeBox from '../components/CodeBox';

function StackQueue() {
        const arrayExamples = [
        {
            language: 'javascript',
            code: `// Array declaration and initialization
const numbers = [1, 2, 3, 4, 5];

// Accessing elements
console.log(numbers[0]); // 1

// Adding elements
numbers.push(6);

// Iterating through array
numbers.forEach(num => console.log(num));`,
        },
        {
            language: 'python',
            code: `# Array (list) declaration and initialization
numbers = [1, 2, 3, 4, 5]

# Accessing elements
print(numbers[0])  # 1

# Adding elements
numbers.append(6)

# Iterating through list
for num in numbers:
    print(num)`,
        },
    ];

    return (
        <>
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-white">
                    Stack & Queue
                </h2>
                <p className="leading-relaxed">
                    (Stack & queue description)
                </p>
                <CodeBox 
                    examples={arrayExamples}
                    title="Array Operations"
                />
            </section>
        </>
    );
}

export default StackQueue;