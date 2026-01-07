import DataStructureClassification from "./pages/DataStructureClassification";
import StackQueue from "./pages/StackQueue";
import BigO from "./pages/BigO";
import SearchSort from "./pages/SearchSort";
import Recursion from "./pages/Recursion";
import List from "./pages/List";
import BinaryTree from "./pages/BinaryTree";
import AVLTree from "./pages/AVLTree";
import SplayTree from "./pages/SplayTree";
import BBPlusTree from "./pages/BBPlusTree";
import Hashing from "./pages/Hashing";
import Heap from "./pages/Heap";
import HuffmanCoding from "./pages/HuffmanCoding";
import Graph from "./pages/Graph";

interface MainContentProps {
    sidebarOpen: boolean;
    activeTopic: string;
}

function MainContent({ sidebarOpen, activeTopic }: MainContentProps) {
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
            <div className="w-full max-w-4xl space-y-8">
                <header className="border-b border-gray-800 pb-6">
                    <h1 className="text-4xl font-bold text-white">
                        Data Structures & Algorithms
                    </h1>
                    <p className="mt-2 text-lg text-gray-400">
                        Complete revision guide for DSA exam
                    </p>
                </header>

                {renderPage()}

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
        </div>
    );
}

export default MainContent;
