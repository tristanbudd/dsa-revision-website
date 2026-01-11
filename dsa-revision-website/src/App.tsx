import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTopic, setActiveTopic] = useState("Data Structure Classification");
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isDesktop = window.innerWidth >= 768;
            setShowContent(isDesktop || !sidebarOpen);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [sidebarOpen]);

    const handleTopicChange = (topic: string) => {
        setActiveTopic(topic);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.innerWidth < 768) {
            setSidebarOpen(false);
        }
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10">
            <Sidebar
                isOpen={sidebarOpen}
                setIsOpen={setSidebarOpen}
                activeTopic={activeTopic}
                setActiveTopic={handleTopicChange}
            />
            <MainContent 
                sidebarOpen={sidebarOpen} 
                activeTopic={activeTopic} 
                showContent={showContent} 
                setActiveTopic={handleTopicChange}
            />
        </div>
    );
}

export default App;
