import Header from "@/components/Header";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/login");
  }
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <div className="flex flex-col bg-gray-100 flex-1">
        <div className="flex flex-1 justify-center w-full">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
