"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps {
    className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-zinc-200/80 dark:bg-zinc-800/80",
                className
            )}
        />
    );
}

export function ComponentSkeleton() {
    return (
        <div className="w-full space-y-6 p-6">
            {/* Title skeleton */}
            <div className="space-y-3">
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </div>

            {/* Preview skeleton */}
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                    <Skeleton className="h-6 w-32" />
                </div>
                <div className="p-8 flex items-center justify-center min-h-[300px]">
                    <Skeleton className="h-48 w-full max-w-md rounded-lg" />
                </div>
            </div>

            {/* Code block skeleton */}
            <div className="space-y-3">
                <Skeleton className="h-6 w-24" />
                <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </div>
            </div>
        </div>
    );
}

export function CardSkeleton() {
    return (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
            <Skeleton className="h-12 w-12 rounded-lg" />
            <div className="space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
            </div>
        </div>
    );
}

export function ListSkeleton({ count = 5 }: { count?: number }) {
    return (
        <div className="space-y-3">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-1/3" />
                        <Skeleton className="h-3 w-2/3" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skeleton;
