import Sidebar from "./Sidebar";

function App() {
    return (
        <div className="min-h-screen min-w-screen bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10">
            <Sidebar />
        </div>
    );
}

export default App;
