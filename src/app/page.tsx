import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="hero min-h-[70vh] bg-base-200 rounded-box">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to DaisyUI Demo</h1>
            <p className="py-6">
              This is a demo site showcasing Next.js with DaisyUI components.
              Explore the pages to see various features in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tutorial" className="btn btn-primary">Python Tutorial</Link>
              <Link href="/themestyle" className="btn btn-secondary">Theme Styles</Link>
              <Link href="/components" className="btn btn-accent">Components</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">About</h2>
            <p>Learn more about this project and its purpose.</p>
            <div className="card-actions justify-end">
              <Link href="/about" className="btn btn-primary btn-sm">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Python Tutorial</h2>
            <p>Step-by-step guide to create and run a Hello World Python program.</p>
            <div className="card-actions justify-end">
              <Link href="/tutorial" className="btn btn-secondary btn-sm">Start Tutorial</Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Components</h2>
            <p>Explore various DaisyUI components like cards, accordions, and badges.</p>
            <div className="card-actions justify-end">
              <Link href="/components" className="btn btn-accent btn-sm">View Components</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}