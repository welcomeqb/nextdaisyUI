"use client";

import { useState } from "react";

export default function ThemeStyle() {
  const themes = [
    "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", 
    "synthwave", "retro", "cyberpunk", "valentine", "halloween", 
    "garden", "forest", "aquamarine", "night", "coffee", "fall", "abyss"
  ];

  const [selectedTheme, setSelectedTheme] = useState("light");

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Theme Style Showcase</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl">Button Styles</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-ghost">Ghost</button>
              <button className="btn btn-link">Link</button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="btn btn-info">Info</button>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-warning">Warning</button>
              <button className="btn btn-error">Error</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl">Calendar</h2>
            <div className="mt-4">
              <div className="calendar border-2 rounded-box p-4 inline-block">
                <div className="text-center mb-2 font-bold">April 2026</div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  <div className="text-base-content/50">Su</div>
                  <div className="text-base-content/50">Mo</div>
                  <div className="text-base-content/50">Tu</div>
                  <div className="text-base-content/50">We</div>
                  <div className="text-base-content/50">Th</div>
                  <div className="text-base-content/50">Fr</div>
                  <div className="text-base-content/50">Sa</div>
                  <div className=""> </div>
                  <div className=""> </div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">1</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">2</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">3</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">4</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">5</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">6</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">7</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">8</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">9</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">10</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">11</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">12</div>
                  <div className="bg-primary text-primary-content rounded cursor-pointer">13</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">14</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">15</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">16</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">17</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">18</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">19</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">20</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">21</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">22</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">23</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">24</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">25</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">26</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">27</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">28</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">29</div>
                  <div className="hover:bg-base-200 rounded cursor-pointer">30</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl">Radio Buttons - Select a Theme</h2>
            <p className="text-base mb-4">Select a theme to see how it looks:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {themes.map((theme) => (
                <label key={theme} className="cursor-pointer flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="theme" 
                    className="radio radio-primary"
                    checked={selectedTheme === theme}
                    onChange={() => setSelectedTheme(theme)}
                  />
                  <span className="label-text capitalize">{theme}</span>
                </label>
              ))}
            </div>
            <div className="mt-6 p-4 bg-base-200 rounded-box">
              <p className="text-base">Currently selected: <strong className="capitalize">{selectedTheme}</strong></p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Toggle / Checkbox</h2>
            <div className="flex flex-wrap gap-6 mt-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span>Primary</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-secondary" />
                <span>Secondary</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-accent" />
                <span>Accent</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-info" />
                <span>Info</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-success" />
                <span>Success</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-warning" />
                <span>Warning</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-error" />
                <span>Error</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}