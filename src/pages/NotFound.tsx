
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, RefreshCw } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [text, setText] = useState("404");
  const [errorLines, setErrorLines] = useState<string[]>([]);
  
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    const errorMessages = [
      "$ cd " + location.pathname,
      "bash: cd: " + location.pathname + ": No such directory",
      "$ ls -la",
      "total 0",
      "drwxr-xr-x   3 root  wheel    96 Apr 10 15:32 .",
      "drwxr-xr-x  20 root  wheel   640 Apr 10 15:30 ..",
      "$ find / -name " + location.pathname.replace(/^\//, ''),
      "find: No results found",
      "$ sudo access " + location.pathname,
      "Error: Permission denied",
      "$ exit"
    ];
    
    let lineIndex = 0;
    const addLine = () => {
      if (lineIndex < errorMessages.length) {
        setErrorLines(prev => [...prev, errorMessages[lineIndex]]);
        lineIndex++;
        setTimeout(addLine, Math.random() * 200 + 100);
      }
    };
    
    setTimeout(addLine, 500);
    
    // Glitch effect for 404 text
    const glitchInterval = setInterval(() => {
      const characters = "!@#$%^&*()_+-=[]{}|;:,.<>?";
      const randomChar = () => characters.charAt(Math.floor(Math.random() * characters.length));
      
      if (Math.random() > 0.7) {
        setText(`4${randomChar()}4`);
        setTimeout(() => {
          setText("404");
        }, 100);
      }
    }, 2000);
    
    return () => clearInterval(glitchInterval);
  }, [location.pathname]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-tech-navy p-4">
      <div className="w-full max-w-2xl">
        <div className="terminal-header mb-1">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="ml-2 text-xs font-mono opacity-50">terminal — bash</span>
        </div>
        <div className="bg-tech-navy border border-tech-slate/30 p-6 rounded-b-lg font-mono">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-tech-teal glitch mb-4">
              {text}
            </h1>
            <p className="text-tech-light text-xl md:text-2xl">Page not found</p>
          </div>
          
          <div className="text-tech-light mb-8">
            <div className="h-64 overflow-auto">
              {errorLines.map((line, index) => (
                <div key={index} className={line.startsWith("Error") ? "text-red-400" : "text-tech-light"}>
                  {line}
                </div>
              ))}
              <div className="flex items-center mt-1">
                <span className="text-tech-teal mr-2">$</span>
                <span className="w-2 h-5 bg-tech-teal/70 animate-blink"></span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="/" className="btn btn-primary flex items-center">
              <Home size={18} className="mr-2" />
              Return Home
            </a>
            <button 
              onClick={() => window.location.reload()} 
              className="btn btn-primary flex items-center"
            >
              <RefreshCw size={18} className="mr-2" />
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
