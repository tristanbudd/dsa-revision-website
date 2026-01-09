function Heap() {
    return (
        <>
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-3xl font-semibold text-white">
                        Heap
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-semibold w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">9% of Exam</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    (Heap description)
                </p>
            </section>
        </>
    );
}

export default Heap;