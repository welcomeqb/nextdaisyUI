export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About This Project</h1>
      
      <div className="card bg-base-100 shadow-xl max-w-3xl mx-auto">
        <div className="card-body">
          <h2 className="card-title text-2xl">What is this site?</h2>
          <p className="text-base">
            This is a demonstration site built with Next.js (latest version) and DaisyUI. 
            It showcases how to create a modern, responsive website using these powerful tools.
          </p>
        </div>
      </div>

      <div className="mt-8 max-w-3xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Technologies Used</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Next.js 15+ (App Router)</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>DaisyUI</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-3xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>5 pages: Home, About, Python Tutorial, Theme Style, Components</li>
              <li>Responsive design with mobile-friendly navigation</li>
              <li>DaisyUI components showcase</li>
              <li>Clean, rounded UI design qb 666</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href="/about/team" className="btn btn-primary">View Our Team</a>
        <div className="mt-8">
          <div className="badge badge-lg badge-primary mx-1">Next.js</div>
          <div className="badge badge-lg badge-secondary mx-1">TypeScript</div>
          <div className="badge badge-lg badge-accent mx-1">DaisyUI</div>
          <div className="badge badge-lg badge-info mx-1">Tailwind</div>
        </div>
      </div>
    </div>
  );
}