"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { InstallCodeBlock } from "@/app/docs/_components/install-code-block";
import { mindmapInstallCommand as installCommand } from "@/lib/llm-prompts";

export function Hero() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight animate-fade-up">
          Beautiful mind maps, effortlessly
        </h1>
        <p className="text-foreground/80 text-lg max-w-xl mx-auto animate-fade-up delay-100">
          Beautiful mind map components based on <span className="font-semibold text-foreground">Mind Elixir</span>. One command to install, zero config to start.
        </p>
      </div>

      <div className="flex justify-center animate-fade-up delay-200 w-full px-4">
        <div className="max-w-3xl w-full">
          <InstallCodeBlock command={installCommand} />
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 animate-fade-up delay-300">
        <Button asChild>
          <Link href="/docs">
            Get Started <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/docs/usage">Explore Examples</Link>
        </Button>
      </div>
    </div>
  );
}
