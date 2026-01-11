import DataStructureClassification from "../pages/DataStructureClassification";
import StackQueue from "../pages/StackQueue";
import BigO from "../pages/BigO";
import SearchSort from "../pages/SearchSort";
import Recursion from "../pages/Recursion";
import List from "../pages/List";
import BinaryTree from "../pages/BinaryTree";
import AVLTree from "../pages/AVLTree";
import SplayTree from "../pages/SplayTree";
import BBPlusTree from "../pages/BBPlusTree";
import Hashing from "../pages/Hashing";
import Heap from "../pages/Heap";
import HuffmanCoding from "../pages/HuffmanCoding";
import Graph from "../pages/Graph";

interface MainContentProps {
    sidebarOpen: boolean;
    activeTopic: string;
    showContent: boolean;
    setActiveTopic: (topic: string) => void;
}

function MainContent({ sidebarOpen, activeTopic, showContent, setActiveTopic }: MainContentProps) {
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

    const currentIndex = topics.findIndex(t => t.name === activeTopic);
    const previousTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
    const nextTopic = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

    const renderPage = () => {
        switch (activeTopic) {
            case "Data Structure Classification":
                return <DataStructureClassification />;
            case "Stack/Queue":
                return <StackQueue />;
            case "BigO":
                return <BigO />;
            case "Search/Sort":
                return <SearchSort />;
            case "Recursion":
                return <Recursion />;
            case "List":
                return <List />;
            case "Binary (Search) Tree":
                return <BinaryTree />;
            case "AVL Tree":
                return <AVLTree />;
            case "Splay Tree":
                return <SplayTree />;
            case "B/B+ Tree":
                return <BBPlusTree />;
            case "Hashing":
                return <Hashing />;
            case "Heap":
                return <Heap />;
            case "Huffman Coding":
                return <HuffmanCoding />;
            case "Graph":
                return <Graph />;
            default:
                return <DataStructureClassification />;
        }
    };

    return (
        <div
            className="flex min-h-screen items-start justify-center bg-gray-950 p-8 text-gray-300 transition-all duration-300"
            style={{
                marginLeft: sidebarOpen ? "320px" : "56px",
            }}
        >
            {!showContent ? (
                <div className="flex min-h-screen items-center justify-center">
                    <div className="text-center space-y-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 mx-auto text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <p className="text-xl text-gray-400">Content minimized</p>
                        <p className="text-sm text-gray-500">
                            Select a topic from the sidebar or collapse it to view content
                        </p>
                    </div>
                </div>
            ) : (
            <div className="w-full max-w-4xl space-y-8">
                <header className="border-b border-gray-800 pb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Data Structures & Algorithms
                    </h1>
                    <p className="mt-3 text-base md:text-lg text-gray-400">
                        The complete revision guide for the DSA exam.
                    </p>
                </header>

                {renderPage()}

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-6 mb-6 border-t border-gray-800">
                    {previousTopic ? (
                        <button
                            onClick={() => setActiveTopic(previousTopic.name)}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-gray-600 text-gray-300 hover:text-white transition-all group flex-1 sm:flex-initial sm:max-w-[45%]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 transition-transform group-hover:-translate-x-0.5 shrink-0 text-gray-500 group-hover:text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <div className="text-left min-w-0">
                                <p className="text-xs text-gray-500 font-medium mb-0.5">Previous</p>
                                <p className="font-semibold text-sm truncate">{previousTopic.name}</p>
                                <p className="text-xs text-cyan-400 mt-0.5">{previousTopic.percentage}% of Exam</p>
                            </div>
                        </button>
                    ) : (
                        <div className="hidden sm:block"></div>
                    )}

                    {nextTopic ? (
                        <button
                            onClick={() => setActiveTopic(nextTopic.name)}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-gray-600 text-gray-300 hover:text-white transition-all group flex-1 sm:flex-initial sm:max-w-[45%]"
                        >
                            <div className="text-left min-w-0 flex-1">
                                <p className="text-xs text-gray-500 font-medium mb-0.5">Next</p>
                                <p className="font-semibold text-sm truncate">{nextTopic.name}</p>
                                <p className="text-xs text-cyan-400 mt-0.5">{nextTopic.percentage}% of Exam</p>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 transition-transform group-hover:translate-x-0.5 shrink-0 text-gray-500 group-hover:text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    ) : (
                        <div className="hidden sm:block"></div>
                    )}
                </div>

                <footer className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    <p>
                        DSA Revision Guide | Exam Date: Monday, 19th January 2026
                    </p>
                    <p>
                        Created by Tristan Budd |{" "}
                        <a
                            href="https://github.com/tristanbudd/dsa-revision-website"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 hover:underline"
                        >
                            View project on GitHub
                        </a>
                    </p>
                </footer>
            </div>
            )}
        </div>
    );
}

export default MainContent;
