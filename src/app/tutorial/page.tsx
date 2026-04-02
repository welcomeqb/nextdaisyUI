export default function Tutorial() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Python Hello World Tutorial</h1>
      
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Step 1: Install Python</h2>
            <p className="text-base">
              First, download and install Python from the official website: 
              <a href="https://www.python.org" target="_blank" className="link link-primary"> python.org</a>
            </p>
            <div className="alert alert-info mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Make sure to check "Add Python to PATH" during installation!</span>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Step 2: Create a Python File</h2>
            <p className="text-base">
              Create a new file called <code className="bg-base-200 px-2 py-1 rounded">hello.py</code> and add the following code:
            </p>
            <div className="mockup-code mt-4">
              <pre className="px-4"><code><span className="text-info">print</span>(<span className="text-success">"Hello, World!"</span>)</code></pre>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Step 3: Run the Program</h2>
            <p className="text-base mb-4">Open your terminal/command prompt and navigate to the folder where you saved the file. Then run:</p>
            <div className="mockup-code">
              <pre className="px-4"><code>python hello.py</code></pre>
            </div>
            <div className="alert alert-success mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Expected output: Hello, World!</span>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Alternative: Using IDLE</h2>
            <p className="text-base">
              Python comes with IDLE (Integrated Development and Learning Environment). Open IDLE and simply type:
            </p>
            <div className="mockup-code mt-4">
              <pre className="px-4"><code><span className="text-info">print</span>(<span className="text-success">"Hello, World!"</span>)</code></pre>
            </div>
            <p className="text-base mt-4">Press Enter and see the output instantly!</p>
          </div>
        </div>
      </div>
    </div>
  );
}