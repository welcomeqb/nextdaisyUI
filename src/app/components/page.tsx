"use client";

import { useState } from "react";

export default function Components() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">DaisyUI Components</h1>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="card bg-base-200">
                <figure className="px-4 pt-4">
                  <div className="w-full h-32 bg-primary rounded-box flex items-center justify-center text-primary-content font-bold">
                    Image Placeholder
                  </div>
                </figure>
                <div className="card-body">
                  <h3 className="card-title">Basic Card</h3>
                  <p>This is a simple card component with an image placeholder.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Button</button>
                  </div>
                </div>
              </div>

              <div className="card bg-primary text-primary-content">
                <div className="card-body">
                  <h3 className="card-title">Featured Card</h3>
                  <p>This card uses primary color scheme as background.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Button</button>
                  </div>
                </div>
              </div>

              <div className="card bg-base-200">
                <div className="card-body">
                  <h3 className="card-title">Center Card</h3>
                  <p className="text-center">This card has centered text content.</p>
                  <div className="justify-center card-actions">
                    <button className="btn btn-accent">Action</button>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 bordered border-primary">
                <div className="card-body">
                  <h3 className="card-title">Bordered Card</h3>
                  <p>This card has a visible border.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-ghost">Ghost</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Badges</h2>
            <div className="mt-4 space-y-4">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="badge">Default</span>
                <span className="badge badge-primary">Primary</span>
                <span className="badge badge-secondary">Secondary</span>
                <span className="badge badge-accent">Accent</span>
                <span className="badge badge-info">Info</span>
                <span className="badge badge-success">Success</span>
                <span className="badge badge-warning">Warning</span>
                <span className="badge badge-error">Error</span>
              </div>
              
              <div className="flex flex-wrap gap-2 items-center">
                <span className="badge badge-lg badge-primary">Large</span>
                <span className="badge badge-md badge-secondary">Medium</span>
                <span className="badge badge-sm badge-accent">Small</span>
                <span className="badge badge-xs badge-info">Extra Small</span>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <div className="badge badge-outline badge-primary">Outline</div>
                <div className="badge badge-outline badge-secondary">Outline</div>
                <div className="badge badge-outline badge-accent">Outline</div>
              </div>

              <div className="flex flex-wrap gap-2 items-center">
                <span className="badge badge-neutral">Neutral</span>
                <span className="badge badge-ghost">Ghost</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Accordions</h2>
            <div className="mt-4 join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border border-base-200">
                <input 
                  type="radio" 
                  name="accordion" 
                  checked={openAccordion === 1}
                  onChange={() => toggleAccordion(1)}
                />
                <div className="collapse-title text-xl font-medium">
                  What is DaisyUI?
                </div>
                <div className="collapse-content">
                  <p>DaisyUI is a Tailwind CSS component library that provides beautiful, customizable components with a clean and modern design.</p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-200">
                <input 
                  type="radio" 
                  name="accordion" 
                  checked={openAccordion === 2}
                  onChange={() => toggleAccordion(2)}
                />
                <div className="collapse-title text-xl font-medium">
                  How do I install DaisyUI?
                </div>
                <div className="collapse-content">
                  <p>You can install DaisyUI via npm: <code className="bg-base-200 px-2 py-1 rounded">npm install daisyui</code> and add it to your Tailwind config plugins.</p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-200">
                <input 
                  type="radio" 
                  name="accordion" 
                  checked={openAccordion === 3}
                  onChange={() => toggleAccordion(3)}
                />
                <div className="collapse-title text-xl font-medium">
                  Is DaisyUI free to use?
                </div>
                <div className="collapse-content">
                  <p>Yes, DaisyUI is completely free and open source under the MIT license. You can use it in personal and commercial projects.</p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-200">
                <input 
                  type="radio" 
                  name="accordion" 
                  checked={openAccordion === 4}
                  onChange={() => toggleAccordion(4)}
                />
                <div className="collapse-title text-xl font-medium">
                  Can I customize the themes?
                </div>
                <div className="collapse-content">
                  <p>Yes! DaisyUI comes with built-in themes and you can create custom themes or override existing ones in your Tailwind configuration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Other Components</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Progress Bar</h3>
                <div className="flex flex-wrap gap-4">
                  <progress className="progress progress-primary w-56" value="30" max="100"></progress>
                  <progress className="progress progress-secondary w-56" value="50" max="100"></progress>
                  <progress className="progress progress-accent w-56" value="70" max="100"></progress>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Loading Spinner</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <span className="loading loading-spinner text-primary"></span>
                  <span className="loading loading-spinner text-secondary"></span>
                  <span className="loading loading-spinner text-accent"></span>
                  <span className="loading loading-spinner text-info"></span>
                  <span className="loading loading-spinner text-success"></span>
                  <span className="loading loading-spinner text-warning"></span>
                  <span className="loading loading-spinner text-error"></span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Toast / Alert</h3>
                <div className="flex flex-col gap-2 max-w-md">
                  <div className="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Informational alert</span>
                  </div>
                  <div className="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Success alert</span>
                  </div>
                  <div className="alert alert-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>Warning alert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}