import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeExample {
    language: string;
    code: string;
}

interface CodeBoxProps {
    examples: CodeExample[];
    title?: string;
}

function CodeBox({ examples, title }: CodeBoxProps) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="my-6 rounded-lg border border-gray-700 bg-gray-900 overflow-hidden">
            {title && (
                <div className="px-4 py-2 bg-gray-800 border-b border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-300">{title}</h3>
                </div>
            )}
            <div className="flex border-b border-gray-700 bg-gray-800 overflow-x-auto">
                {examples.map((example, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                            activeTab === index
                                ? 'bg-gray-900 text-white border-b-2 border-blue-500'
                                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                        }`}
                    >
                        {example.language.charAt(0).toUpperCase() + example.language.slice(1)}
                    </button>
                ))}
            </div>
            <div className="overflow-x-auto">
                <SyntaxHighlighter
                    language={examples[activeTab].language}
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        padding: '1rem',
                        background: 'transparent',
                        fontSize: '0.875rem',
                    }}
                    showLineNumbers={true}
                >
                    {examples[activeTab].code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export default CodeBox;
