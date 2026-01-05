"use client";

import FloatingLines from "@/components/ui/FloatingLines";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function OpenInV0Page() {
    return (
        <main className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-black/5 overflow-hidden">
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

            <div className="relative z-10 text-center px-4 sm:px-6 py-20 max-w-4xl mx-auto">
                <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black dark:bg-white/10 backdrop-blur-md shadow-xl border border-white/20">
                    <svg
                        viewBox="0 0 40 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-16 text-white dark:text-white"
                    >
                        <path
                            d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 drop-shadow-lg mb-6 leading-tight">
                    Open in v0.dev <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-800 to-zinc-500 dark:from-zinc-400 dark:via-zinc-100 dark:to-zinc-400">
                        Feature Coming Soon
                    </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
                    We're working on a seamless integration with v0.dev to help you generate and iterate on components instantly using AI.
                </p>

                <div className="flex items-center justify-center gap-4">
                    <Button asChild variant="outline" className="h-12 px-6 rounded-full text-base backdrop-blur-sm bg-white/50 border-zinc-200 dark:bg-black/50 dark:border-zinc-800 hover:bg-white/80 dark:hover:bg-black/80 transition-all">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
