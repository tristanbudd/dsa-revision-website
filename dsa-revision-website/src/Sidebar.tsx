interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    activeTopic: string;
    setActiveTopic: (topic: string) => void;
}

function Sidebar({ isOpen, setIsOpen, activeTopic, setActiveTopic }: SidebarProps) {

    const topics = [
        { name: "Data Structure Classification", percentage: 3 },
        { name: "Stack/Queue", percentage: 6 },
        { name: "BigO", percentage: 7 },
        { name: "Search/Sort", percentage: 8 },
        { name: "Recursion", percentage: 10 },
        { name: "List", percentage: 7 },
        { name: "Binary (Search) Tree", percentage: 8 },
        { name: "AVL Tree", percentage: 6 },
        { name: "Splay Tree", percentage: 6 },
        { name: "B/B+ Tree", percentage: 8 },
        { name: "Hashing", percentage: 8 },
        { name: "Heap", percentage: 9 },
        { name: "Huffman Coding", percentage: 6 },
        { name: "Graph", percentage: 8 },
    ];

    return (
        <>
            <div
                className={`fixed left-0 top-0 flex min-h-screen flex-col gap-4 border-r border-gray-800 bg-black p-4 transition-all duration-300 ease-in-out ${
                    isOpen ? "w-80" : "w-14"
                }`}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`rounded bg-gray-900 p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white ${
                        isOpen ? "self-end" : "self-center"
                    }`}
                    aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 5l7 7-7 7M5 5l7 7-7 7"
                            />
                        )}
                    </svg>
                </button>

                {!isOpen && (
                    <div className="flex flex-1 items-center justify-center">
                        <p
                            className="whitespace-nowrap text-md font-medium text-gray-500"
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                            Data Structures & Algorithms Revision
                        </p>
                    </div>
                )}

                {isOpen && (
                    <div className="flex flex-col gap-6">
                        <div className="border-b border-gray-800 pb-4">
                            <h2 className="text-xl font-semibold text-white">
                                DSA Revision
                            </h2>
                            <p className="mt-1 text-sm text-gray-500">
                                Exam Topics
                            </p>
                        </div>

                        <nav className="flex flex-col gap-1">
                            {topics.map((topic, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTopic(topic.name)}
                                    className={`flex w-full items-center justify-between rounded px-3 py-2 text-left text-sm transition-colors hover:bg-gray-900 hover:text-white ${
                                        activeTopic === topic.name
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-400"
                                    }`}
                                >
                                    <span>{topic.name}</span>
                                    <span className="text-xs text-gray-600">
                                        {topic.percentage}%
                                    </span>
                                </button>
                            ))}
                        </nav>

                        <div className="mt-auto border-t border-gray-800 pt-4">
                            <p className="text-xs text-gray-600">
                                Total: 100% | 25 items
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Sidebar;