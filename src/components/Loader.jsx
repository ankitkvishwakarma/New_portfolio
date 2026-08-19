import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  
  const loadingTexts = [
    "INITIALIZING SYSTEM...",
    "LOADING ASSETS...",
    "ESTABLISHING CONNECTION...",
    "BUILDING INTERFACE...",
    "SYSTEM READY"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 250);

    const textTimer = setInterval(() => {
      setTextIndex(prev => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#030712] flex flex-col items-center justify-center overflow-hidden font-mono">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02MCAwaC0xdjYwaDFWMHptLTYwIDYwaDYwdi0xaC02MHYxem0wLTEwaDYwdi0xaC02MHYxem0wLTEwaDYwdi0xaC02MHYxem0wLTEwaDYwdi0xaC02MHYxem0wLTEwaDYwdi0xaC02MHYxem0wLTEwaDYwdi0xaC02MHYxeiIgZmlsbD0iIzE0YzhlYiIgZmlsbC1vcGFjaXR5PSIwLjA1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+')] opacity-20"></div>
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[150px]" />

      <div className="relative w-full max-w-md px-8 z-10">
        
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-8 opacity-70">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-baseline gap-2">
             <h1 className="text-5xl font-bold text-white tracking-tighter">Ankit<span className="text-cyan-400">.dev</span></h1>
             <motion.div 
               animate={{ opacity: [1, 0, 1] }}
               transition={{ repeat: Infinity, duration: 1 }}
               className="w-4 h-8 bg-cyan-400"
             />
          </div>
        </motion.div>

        {/* Progress Info */}
        <div className="flex justify-between items-end mb-3 font-medium">
          <motion.div 
            key={textIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-cyan-400 text-sm tracking-widest"
          >
            {loadingTexts[textIndex]}
          </motion.div>
          <div className="text-white text-xl">
            {progress > 100 ? 100 : progress}%
          </div>
        </div>

        {/* Loading Bar */}
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        
        {/* Decorative Data Lines */}
        <div className="mt-8 space-y-2 opacity-30 text-xs text-cyan-200 h-24 overflow-hidden">
          <p>{`> LOAD MODULE [CORE_SYSTEM] ... OK`}</p>
          <p>{`> SYNC_STATE (x: ${Math.random().toFixed(2)}, y: ${Math.random().toFixed(2)}) ... OK`}</p>
          {progress > 40 && <p>{`> FETCHING STYLESHEETS ... OK`}</p>}
          {progress > 70 && <p>{`> MOUNTING COMPONENTS ... OK`}</p>}
          {progress > 90 && <p>{`> INITIATING ANIMATIONS ... OK`}</p>}
        </div>

      </div>
    </div>
  );
}