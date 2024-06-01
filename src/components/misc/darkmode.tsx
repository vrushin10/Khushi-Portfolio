import { useEffect, useState } from 'react';

function useDarkMode() {
   const [isDarkMode, setIsDarkMode] = useState(() => {
      const savedTheme = localStorage.getItem('dark-mode');
      return savedTheme ? JSON.parse(savedTheme) : false;
   });

   useEffect(() => {
      if (isDarkMode) {
         document.body.classList.add('dark');
      } else {
         document.body.classList.remove('dark');
      }
      localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
   }, [isDarkMode]);

   const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
   };

   return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
