"use client";

import Link from "next/link";
import { Github, Heart } from "lucide-react";
import { motion } from "motion/react";

const footerLinks = {
    product: [
        { name: "Components", href: "/docs/components" },
        { name: "Blocks", href: "/docs/blocks" },
        { name: "Pricing", href: "/pricing" },
    ],
    resources: [
        { name: "Documentation", href: "/docs" },
        { name: "Getting Started", href: "/docs" },
        { name: "GitHub", href: "https://github.com/gaurangp22/forked-ui" },
    ],
    legal: [
        { name: "MIT License", href: "https://github.com/gaurangp22/forked-ui/blob/main/LICENSE" },
    ],
};

export function Footer() {
    return (
        <footer className="relative border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="inline-block">
                            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                                Forked UI
                            </h3>
                        </Link>
                        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 max-w-xs">
                            A curated collection of 100+ premium UI components for modern React and Next.js applications.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <motion.a
                                href="https://github.com/gaurangp22/forked-ui"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                            Product
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        target={link.href.startsWith("http") ? "_blank" : undefined}
                                        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            © {new Date().getFullYear()} Forked UI. All rights reserved.
                        </p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
