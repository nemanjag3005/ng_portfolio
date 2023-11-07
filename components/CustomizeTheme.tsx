"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { colorMap } from "../misc/colorMap";

const CustomizeTheme = () => {
  const {
    themeKey,
    customThemeChanges,
    setCustomThemeChanges,
    setThemeKey,
    darkMode,
    setDarkMode,
  } = useTheme();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);

  function getColorNameForVariant(variantCssVar) {
    const colorHex = customThemeChanges[variantCssVar];
    return colorMap[colorHex]?.name || "Not Set";
  }

  function handleColorChange(event) {
    const colorHex = event.currentTarget.getAttribute("title");
    setSelectedColor(colorHex);
    if (themeKey !== "custom") return;
    // Determine the CSS variable name based on the selected variant
    const selectedColorVariants = colorMap[colorHex];
    if (!selectedColorVariants) return; // exit if the color is not found
    let cssVarNames;
    switch (selectedVariant) {
      case 0:
        cssVarNames = ["--primary", "--light", "--dark"];
        break;
      case 1:
        cssVarNames = ["--secondary", "--secondary-light", "--secondary-dark"];
        break;
      case 2:
        cssVarNames = [
          "--color-accent-1",
          "--color-accent-1-light",
          "--color-accent-1-dark",
        ];
        break;
      case 3:
        cssVarNames = [
          "--color-accent-2",
          "--color-accent-2-light",
          "--color-accent-2-dark",
        ];
        break;
      case 4:
        cssVarNames = [
          "--color-accent-3",
          "--color-accent-3-light",
          "--color-accent-3-dark",
        ];
        break;
      case 5:
        cssVarNames = [
          "--color-accent-4",
          "--color-accent-4-light",
          "--color-accent-4-dark",
        ];
        break;
      default:
        console.error("Unknown variant selected");
        return;
    }
    const newThemeChanges = {
      ...customThemeChanges,
      [cssVarNames[0]]: selectedColorVariants.primary,
      [cssVarNames[1]]: selectedColorVariants.light,
      [cssVarNames[2]]: selectedColorVariants.dark,
    };
    setCustomThemeChanges(newThemeChanges);
  }

  if (themeKey == "custom")
    return (
      <div className=" transition-colors duration-200">
        <div className="mx-4 ">
          <div className="max-w-6xl mx-auto py-6 md:py-12 w-full space-y-4">
            <div className="flex items-center space-x-1">
              <p className="text-2xl font-bold mr-2">Custom Theme Maker</p>
              <div className="px-2 rounded-full flex items-center text-center text-white space-x-1 bg-primary ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>

                <p>Experimental</p>
              </div>
            </div>
            <p>
              Here you can make your own custom theme for the site by following
              the steps. This feature is in beta and may not work perfectly.
            </p>
            <h3>1. Light mode or Dark Mode?</h3>
            <div className="grid lg:grid-cols-4 gap-4">
              <div className="space-y-6 lg:col-span-3">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => setDarkMode(!darkMode)}
                    checked={darkMode}
                    className="sr-only peer"
                  />
                  <div className="w-20 h-11 bg-primary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-10 after:w-10 after:transition-all  peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                </label>
                <h3>2. Select a color you would like to change</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  <div className="space-y-2">
                    <p className="uppercase text-xs">primary</p>
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => setSelectedVariant(0)}
                        className="h-24 w-full uppercase rounded text-white focus:outline-none focus:ring-4 bg-primary"
                      >
                        <p className="text-white opacity-75 text-sm">
                          {getColorNameForVariant("--primary")}
                        </p>
                      </button>
                    </div>
                    {selectedVariant == 0 && (
                      <div
                        className="h-2 rounded pointer-events-none bg-primary"
                        // style="opacity: 1; transform: none;"
                      />
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="uppercase text-xs">secondary</p>
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => setSelectedVariant(1)}
                        className="h-24 w-full uppercase rounded text-white focus:outline-none focus:ring-4 bg-secondary"
                      >
                        <p className="text-white opacity-75 text-sm">
                          {getColorNameForVariant("--secondary")}
                        </p>
                      </button>
                    </div>
                    {selectedVariant == 1 && (
                      <div
                        className="h-2 rounded pointer-events-none bg-secondary"
                        // style="opacity: 0; transform: translateY(-50px) translateZ(0px);"
                      />
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="uppercase text-xs">accent 1</p>
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => setSelectedVariant(2)}
                        className="h-24 w-full uppercase rounded text-white focus:outline-none focus:ring-4 bg-colorAccent1"
                      >
                        <p className="text-white opacity-75 text-sm">
                          {getColorNameForVariant("--color-accent-1")}
                        </p>
                      </button>
                    </div>
                    {selectedVariant == 2 && (
                      <div
                        className="h-2 rounded pointer-events-none bg-colorAccent1"
                        // style="opacity: 0; transform: translateY(-50px) translateZ(0px);"
                      />
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="uppercase text-xs">accent 2</p>
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => setSelectedVariant(3)}
                        className="h-24 w-full uppercase rounded text-white focus:outline-none focus:ring-4 bg-colorAccent2"
                      >
                        <p className="text-white opacity-75 text-sm">
                          {getColorNameForVariant("--color-accent-2")}
                        </p>
                      </button>
                    </div>
                    {selectedVariant == 3 && (
                      <div
                        className="h-2 rounded pointer-events-none bg-colorAccent2"
                        // style="opacity: 0; transform: translateY(-50px) translateZ(0px);"
                      />
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="uppercase text-xs">accent 3</p>
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => setSelectedVariant(4)}
                        className="h-24 w-full uppercase rounded text-white focus:outline-none focus:ring-4 bg-colorAccent3"
                      >
                        <p className="text-white opacity-75 text-sm">
                          {getColorNameForVariant("--color-accent-3")}
                        </p>
                      </button>
                    </div>
                    {selectedVariant == 4 && (
                      <div
                        className="h-2 rounded pointer-events-none bg-colorAccent3"
                        // style="opacity: 0; transform: translateY(-50px) translateZ(0px);"
                      />
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="uppercase text-xs">accent 4</p>
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => setSelectedVariant(5)}
                        className="h-24 w-full uppercase rounded text-white focus:outline-none focus:ring-4 bg-colorAccent4"
                      >
                        <p className="text-white opacity-75 text-sm">
                          {getColorNameForVariant("--color-accent-4")}
                        </p>
                      </button>
                    </div>
                    {selectedVariant == 5 && (
                      <div
                        className="h-2 rounded pointer-events-none bg-colorAccent3"
                        // style="opacity: 0; transform: translateY(-50px) translateZ(0px);"
                      />
                    )}
                  </div>
                </div>
                <h3>3. Replace it with one of these:</h3>
                <div className="w-full flex flex-wrap">
                  <button onClick={handleColorChange} title="#64748b">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#64748b] cursor-pointer rounded-full ${
                        selectedColor === "#64748b"
                          ? "shadow-lg shadow-[#64748b]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#6b7280">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#6b7280] cursor-pointer rounded-full ${
                        selectedColor === "#6b7280"
                          ? "shadow-lg shadow-[#6b7280]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#475569">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#475569] cursor-pointer rounded-full ${
                        selectedColor === "#475569"
                          ? "shadow-lg shadow-[#475569]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#6b7280">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#6b7280] cursor-pointer rounded-full ${
                        selectedColor === "#6b7280"
                          ? "shadow-lg shadow-[#6b7280]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#4b5563">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#4b5563] cursor-pointer rounded-full ${
                        selectedColor === "#4b5563"
                          ? "shadow-lg shadow-[#4b5563]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#71717a">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#71717a] cursor-pointer rounded-full ${
                        selectedColor === "#71717a"
                          ? "shadow-lg shadow-[#71717a]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#52525b">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#52525b] cursor-pointer rounded-full ${
                        selectedColor === "#52525b"
                          ? "shadow-lg shadow-[#52525b]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#737373">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#737373] cursor-pointer rounded-full ${
                        selectedColor === "#737373"
                          ? "shadow-lg shadow-[#737373]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#525252">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#525252] cursor-pointer rounded-full ${
                        selectedColor === "#525252"
                          ? "shadow-lg shadow-[#525252]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#78716c">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#78716c] cursor-pointer rounded-full ${
                        selectedColor === "#78716c"
                          ? "shadow-lg shadow-[#78716c]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#57534e">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#57534e] cursor-pointer rounded-full ${
                        selectedColor === "#57534e"
                          ? "shadow-lg shadow-[#57534e]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#ef4444">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#ef4444] cursor-pointer rounded-full ${
                        selectedColor === "#ef4444"
                          ? "shadow-lg shadow-[#ef4444]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#dc2626">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#dc2626] cursor-pointer rounded-full ${
                        selectedColor === "#dc2626"
                          ? "shadow-lg shadow-[#dc2626]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#f97316">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#f97316] cursor-pointer rounded-full ${
                        selectedColor === "#f97316"
                          ? "shadow-lg shadow-[#f97316]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#ea580c">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#ea580c] cursor-pointer rounded-full ${
                        selectedColor === "#ea580c"
                          ? "shadow-lg shadow-[#ea580c]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#f59e0b">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#f59e0b] cursor-pointer rounded-full ${
                        selectedColor === "#f59e0b"
                          ? "shadow-lg shadow-[#f59e0b]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#d97706">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#d97706] cursor-pointer rounded-full ${
                        selectedColor === "#d97706"
                          ? "shadow-lg shadow-[#d97706]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#eab308">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#eab308] cursor-pointer rounded-full ${
                        selectedColor === "#eab308"
                          ? "shadow-lg shadow-[#eab308]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#ca8a04">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#ca8a04] cursor-pointer rounded-full ${
                        selectedColor === "#ca8a04"
                          ? "shadow-lg shadow-[#ca8a04]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#84cc16">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#84cc16] cursor-pointer rounded-full ${
                        selectedColor === "#84cc16"
                          ? "shadow-lg shadow-[#84cc16]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#65a30d">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#65a30d] cursor-pointer rounded-full ${
                        selectedColor === "#65a30d"
                          ? "shadow-lg shadow-[#65a30d]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#22c55e">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#22c55e] cursor-pointer rounded-full ${
                        selectedColor === "#22c55e"
                          ? "shadow-lg shadow-[#22c55e]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#16a34a">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#16a34a] cursor-pointer rounded-full ${
                        selectedColor === "#16a34a"
                          ? "shadow-lg shadow-[#16a34a]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#10b981">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#10b981] cursor-pointer rounded-full ${
                        selectedColor === "#10b981"
                          ? "shadow-lg shadow-[#10b981]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#059669">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#059669] cursor-pointer rounded-full ${
                        selectedColor === "#059669"
                          ? "shadow-lg shadow-[#059669]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#14b8a6">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#14b8a6] cursor-pointer rounded-full ${
                        selectedColor === "#14b8a6"
                          ? "shadow-lg shadow-[#14b8a6]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#0d9488">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#0d9488] cursor-pointer rounded-full ${
                        selectedColor === "#0d9488"
                          ? "shadow-lg shadow-[#0d9488]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#06b6d4">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#06b6d4] cursor-pointer rounded-full ${
                        selectedColor === "#06b6d4"
                          ? "shadow-lg shadow-[#06b6d4]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#0891b2">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#0891b2] cursor-pointer rounded-full ${
                        selectedColor === "#0891b2"
                          ? "shadow-lg shadow-[#0891b2]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#0ea5e9">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#0ea5e9] cursor-pointer rounded-full ${
                        selectedColor === "#0ea5e9"
                          ? "shadow-lg shadow-[#0ea5e9]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#0284c7">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#0284c7] cursor-pointer rounded-full ${
                        selectedColor === "#0284c7"
                          ? "shadow-lg shadow-[#0284c7]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#3b82f6">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#3b82f6] cursor-pointer rounded-full ${
                        selectedColor === "#3b82f6"
                          ? "shadow-lg shadow-[#3b82f6]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#2563eb">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#2563eb] cursor-pointer rounded-full ${
                        selectedColor === "#2563eb"
                          ? "shadow-lg shadow-[#2563eb]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#6366f1">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#6366f1] cursor-pointer rounded-full ${
                        selectedColor === "#6366f1"
                          ? "shadow-lg shadow-[#6366f1]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#4f46e5">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#4f46e5] cursor-pointer rounded-full ${
                        selectedColor === "#4f46e5"
                          ? "shadow-lg shadow-[#4f46e5]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#8b5cf6">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#8b5cf6] cursor-pointer rounded-full ${
                        selectedColor === "#8b5cf6"
                          ? "shadow-lg shadow-[#8b5cf6]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#7c3aed">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#7c3aed] cursor-pointer rounded-full ${
                        selectedColor === "#7c3aed"
                          ? "shadow-lg shadow-[#7c3aed]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#a855f7">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#a855f7] cursor-pointer rounded-full ${
                        selectedColor === "#a855f7"
                          ? "shadow-lg shadow-[#a855f7]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#9333ea">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#9333ea] cursor-pointer rounded-full ${
                        selectedColor === "#9333ea"
                          ? "shadow-lg shadow-[#9333ea]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#d946ef">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#d946ef] cursor-pointer rounded-full ${
                        selectedColor === "#d946ef"
                          ? "shadow-lg shadow-[#d946ef]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#c026d3">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#c026d3] cursor-pointer rounded-full ${
                        selectedColor === "#c026d3"
                          ? "shadow-lg shadow-[#c026d3]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#ec4899">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#ec4899] cursor-pointer rounded-full ${
                        selectedColor === "#ec4899"
                          ? "shadow-lg shadow-[#ec4899]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#db2777">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#db2777] cursor-pointer rounded-full ${
                        selectedColor === "#db2777"
                          ? "shadow-lg shadow-[#db2777]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#f43f5e">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#f43f5e] cursor-pointer rounded-full ${
                        selectedColor === "#f43f5e"
                          ? "shadow-lg shadow-[#f43f5e]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#e11d48">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#e11d48] cursor-pointer rounded-full ${
                        selectedColor === "#e11d48"
                          ? "shadow-lg shadow-[#e11d48]"
                          : ""
                      }`}
                    />
                  </button>
                  <button onClick={handleColorChange} title="#267e9b">
                    <div
                      className={`w-7 h-7 mr-4 mb-4 ease-in-out transition duration-300 hover:scale-125 bg-[#267e9b] cursor-pointer rounded-full ${
                        selectedColor === "#267e9b"
                          ? "shadow-md shadow-[#267e9b]"
                          : ""
                      }`}
                    />
                  </button>
                </div>
                <h3>
                  4. Review the preview on the right. Happy? Navigate around the
                  site with your new theme. I'll remember it for your future
                  visits.
                </h3>
              </div>
              <div>
                <div className="py-1 px-2 w-full bg-dark rounded-t">
                  <div className="flex space-x-1">
                    <div className="bg-red-400 h-3 w-3 rounded-full"></div>
                    <div className="bg-yellow-400 h-3 w-3 rounded-full"></div>
                    <div className="bg-green-400 h-3 w-3 rounded-full"></div>
                  </div>
                </div>
                <div className="border-primary border-b-4 border-l-4 border-r-4 rounded-b h-full">
                  <div className="p-2 space-y-3 ">
                    <div className="flex w-full items-center justify-between border-b pb-2 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                        ></path>
                      </svg>
                      <div className="flex h-4 items-center justify-end space-x-2">
                        <div className="h-2 w-6 rounded-full bg-textPrimary opacity-50"></div>
                        <div className="h-2 w-6 rounded-full bg-textPrimary opacity-50"></div>
                        <div className="h-2 w-6 rounded-full bg-textPrimary opacity-50"></div>
                      </div>
                    </div>
                    <p className="font-bold text-lg">Site Preview</p>
                    <div className="flex space-x-1">
                      <button
                        disabled
                        className="rounded bg-primary hover:bg-primary-light p-1"
                      >
                        Primary
                      </button>
                      <button
                        disabled
                        className="rounded bg-secondary hover:bg-secondary-light p-1"
                      >
                        Secondary
                      </button>
                    </div>
                    <p className="text-sm">
                      A link will look like{" "}
                      <span className="inline-link text-primary cursor-pointer hover:underline">
                        this!
                      </span>
                    </p>
                  </div>
                  <div className="px-2 pb-3 grid grid-cols-2 gap-1">
                    <div className="h-16 rounded bg-colorAccent1Light">
                      <div className="text-xs text-white m-1 px-1 bg-colorAccent1 rounded inline-block uppercase">
                        Tag
                      </div>
                    </div>
                    <div className="h-16 rounded bg-colorAccent2Light">
                      <div className="text-xs text-white m-1 px-1 bg-colorAccent2 rounded inline-block uppercase">
                        Tag
                      </div>
                    </div>
                    <div className="h-16 rounded bg-colorAccent3Light">
                      <div className="text-xs text-white m-1 px-1 bg-colorAccent3 rounded inline-block uppercase">
                        Tag
                      </div>
                    </div>
                    <div className="h-16 rounded bg-colorAccent4Light">
                      <div className="text-xs text-white m-1 px-1 bg-colorAccent4 rounded inline-block uppercase">
                        Tag
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className=" transition-colors duration-200">
        <div className="mx-4 ">
          <div className="max-w-6xl mx-auto py-6 md:py-12 w-full flex flex-col items-center justify-center space-y-4">
            <h1>This page requires you to turn on the custom theme.</h1>
            <button
              onClick={() => setThemeKey("custom")}
              className="rounded-sm px-4 py-2 bg-primary text-white"
            >
              Turn on custom theme
            </button>
          </div>
        </div>
      </div>
    );
};

export default CustomizeTheme;
