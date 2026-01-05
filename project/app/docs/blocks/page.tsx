"use client";

import FloatingLines from "@/components/ui/FloatingLines";

export default function BlocksPage() {
    return (
        <div className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black/5">
            <div className="absolute inset-0 w-full h-full">
                <FloatingLines
                    enabledWaves={['top', 'middle', 'bottom']}
                    lineCount={[10, 15, 20]}
                    lineDistance={[8, 6, 4]}
                    bendRadius={5.0}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                />
            </div>

            <div className="relative z-10 text-center p-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 drop-shadow-lg mb-6">
                    Templates{" "}
                    <br className="hidden sm:block" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                        Coming Soon
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto font-medium">
                    We are crafting a collection of beautiful, production-ready templates.
                </p>
            </div>
        </div>
    );
}
