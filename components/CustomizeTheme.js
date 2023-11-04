import React from "react";

const CustomizeTheme = () => {
  return (
    <div className=" transition-colors duration-200">
      <div className="mx-4 ">
        <div classNameName="max-w-6xl mx-auto py-6 md:py-12 w-full space-y-4">
          <div className="flex items-center space-x-1">
            <p className="text-2xl font-bold">Custom Theme Maker</p>
            <div className="px-2 rounded-full flex items-center text-center text-white space-x-1 ml-2 bg-primary ">
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
        </div>
      </div>
    </div>
  );
};

export default CustomizeTheme;
