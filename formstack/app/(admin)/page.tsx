"use client";

import { Button } from "@/components/ui/button";
import Animation from "@/public/animate.json";
import Lottie from "lottie-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 bg-white m-8 rounded-md w-[70vw]">
      <h1 className="text-4xl font-light">
        Welcome to{" "}
        <span className="text-[#0090b0] font-semibold">FormStack</span>
      </h1>

      <h2 className="mt-3 mb-6">
        Your customisable Feedback Form Creator that helps you manage your
        customer feedbacks.
      </h2>

      <Link href="/create-form">
        <Button className="bg-[#00a6ca]">
          Let&apos;s get started by creating your first feedback form
        </Button>
      </Link>

      <Lottie animationData={Animation} className="h-80" />
    </main>
  );
}
