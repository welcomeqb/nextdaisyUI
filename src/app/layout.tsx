import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DaisyUI Demo Site",
  description: "A Next.js site with DaisyUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <div className="fixed top-0 left-0 right-0 z-50 navbar bg-base-100 shadow-md px-4 min-h-0 h-16">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">
              DaisyUI Demo
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 hidden md:flex">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/tutorial">Python Tutorial</Link></li>
              <li><Link href="/themestyle">Theme Style</Link></li>
              <li><Link href="/components">Components</Link></li>
            </ul>
            <div className="dropdown dropdown-end md:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu menu-sm bg-base-100 rounded-box mt-2 w-52 p-2 shadow">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/tutorial">Python Tutorial</Link></li>
                <li><Link href="/themestyle">Theme Style</Link></li>
                <li><Link href="/components">Components</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <main className="pt-16 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}