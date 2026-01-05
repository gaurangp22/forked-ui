"use client";

// import EventToast from "@/components/event-toast";
import { ComponentShowcaseCard } from "@/components/landing/component-showcase-card";
import { InteractivePreview } from "@/components/landing/interactive-preview";
import { BuildInterfacesCard } from "@/components/landing/interfaceCards";
import FloatingLines from "@/components/ui/FloatingLines";
import LiquidEther from "@/components/ui/LiquidEther";
import { BrowseBlocksButton } from "@/components/ui/browse-blocks";
import { BrowseComponentsButton } from "@/components/ui/browse-button";
import { motion } from "motion/react";
import { Sparkles, Zap, Code2, Layers } from "lucide-react";

export default function Home() {
    return (
        <main className="bg-white dark:bg-black/5 overflow-x-hidden">
            <div className="relative w-full min-h-screen flex items-center justify-center">
                <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
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
                
                {/* Hero Content Overlay */}
                <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100 drop-shadow-lg">
                                Build beautiful{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                                    interfaces
                                </span>
                                <br />
                                with{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400">
                                    Forked UI
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-white dark:text-zinc-100 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_20px_rgba(0,0,0,0.5)]">
                                A curated collection of{" "}
                                <span className="font-bold text-white dark:text-white">100+ premium UI components</span>{" "}
                                crafted with{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-300 dark:to-purple-300 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                    Tailwind CSS
                                </span>{" "}
                                and{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-300 dark:to-pink-300 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                    shadcn/ui
                                </span>
                                {" "}for modern React and Next.js applications.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                        >
                            <BrowseComponentsButton />
                            <BrowseBlocksButton />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-white dark:text-zinc-200 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_20px_rgba(0,0,0,0.5)]"
                        >
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-blue-500" />
                                <span>Copy & Paste</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Code2 className="w-4 h-4 text-purple-500" />
                                <span>Fully Customizable</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Layers className="w-4 h-4 text-pink-500" />
                                <span>100+ Components</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-blue-500" />
                                <span>Tailwind CSS 4.0</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Features Section with LiquidEther Background */}
            <section className="relative w-full min-h-[600px] flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
                <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0 }}>
                    <LiquidEther
                        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                        mouseForce={20}
                        cursorSize={100}
                        isViscous={false}
                        viscous={30}
                        iterationsViscous={32}
                        iterationsPoisson={32}
                        resolution={0.5}
                        isBounce={false}
                        autoDemo={true}
                        autoSpeed={0.5}
                        autoIntensity={2.2}
                        takeoverDuration={0.25}
                        autoResumeDelay={3000}
                        autoRampDuration={0.6}
                    />
                </div>
                <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
                            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">Forked UI</span>?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="p-6 rounded-2xl backdrop-blur-sm bg-white/10 dark:bg-zinc-900/10 border border-white/20"
                            >
                                <Zap className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
                                <p className="text-zinc-200">Copy and paste components in seconds. No complex setup required.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="p-6 rounded-2xl backdrop-blur-sm bg-white/10 dark:bg-zinc-900/10 border border-white/20"
                            >
                                <Code2 className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Fully Customizable</h3>
                                <p className="text-zinc-200">Every component is built with Tailwind CSS. Modify colors, spacing, and more with ease.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="p-6 rounded-2xl backdrop-blur-sm bg-white/10 dark:bg-zinc-900/10 border border-white/20"
                            >
                                <Layers className="w-10 h-10 text-pink-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">100+ Components</h3>
                                <p className="text-zinc-200">A growing collection of beautiful, production-ready UI components.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
