// import React, { useState, useEffect} from 'react'

// export default function useDarkMode() {
//     const [theme, setTheme] = useState(typeof window !== "undefined" ? localStorage.theme : "light");
//     const colorTheme = theme == 'dark' ? 'light' : 'dark';
//     useEffect(() => {
//         const root = window.document.documentElement;

//         root.classList.remove(colorTheme);
//         root.classList.add(theme);
//         localStorage.setItem('theme', theme);

//     }, [theme,colorTheme]);

//     return [colorTheme, setTheme];
// }
