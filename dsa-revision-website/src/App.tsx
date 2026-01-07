import { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTopic, setActiveTopic] = useState("Data Structure Classification");

    return (
        <div className="min-h-screen overflow-x-hidden bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10">
            <Sidebar
                isOpen={sidebarOpen}
                setIsOpen={setSidebarOpen}
                activeTopic={activeTopic}
                setActiveTopic={setActiveTopic}
            />
            <MainContent sidebarOpen={sidebarOpen} activeTopic={activeTopic} />
        </div>
    );
}

export default App;
