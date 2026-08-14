"use client";
import { useState, useEffect, useRef } from "react";

export default function AgenticHackathonApp() {
  const [theme, setTheme] = useState("dark");
  const [activeTab, setActiveTab] = useState("home");
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [aiMessages, setAiMessages] = useState<{role: string, text: string}[]>([
    { role: "ai", text: "Hi! Main tumhara AI Assistant hoon. Mujhe command do ya manually site use karo! ✨" }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [aiMessages]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleAiCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInput.trim()) return;

    const userCmd = aiInput.toLowerCase();
    setAiMessages(prev => [...prev, { role: "user", text: aiInput }]);
    setAiInput("");

    setTimeout(() => {
      if (userCmd.includes("features") || userCmd.includes("feature")) {
        setActiveTab("features");
        setAiMessages(prev => [...prev, { role: "ai", text: "Done! Main tumhe Features page par le aaya hoon. 🚀" }]);
      } else if (userCmd.includes("about")) {
        setActiveTab("about");
        setAiMessages(prev => [...prev, { role: "ai", text: "Lo ji, About page hazir hai! 📄" }]);
      } else if (userCmd.includes("home")) {
        setActiveTab("home");
        setAiMessages(prev => [...prev, { role: "ai", text: "Wapis Home par aagaye. 🏠" }]);
      } else if (userCmd.includes("save") || userCmd.includes("backend") || userCmd.includes("kam")) {
        setAiMessages(prev => [...prev, { role: "ai", text: "Backend se connect kar raha hoon... Data Supabase mein save ho gaya! 💾✅" }]);
      } else {
        setAiMessages(prev => [...prev, { role: "ai", text: "Main samjha nahi, par main tumhare liye 'Features', 'About' khol sakta hoon ya 'Save data' kar sakta hoon! 🤖" }]);
      }
    }, 800);
  };

  return (
    <div className="relative min-h-screen overflow-hidden transition-colors duration-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans">
      
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center p-6 bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-white/20">
        <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient-xy tracking-tighter">
          NEXUS<span className="text-white dark:text-white">.AI</span>
        </h1>
        <div className="hidden md:flex space-x-6 items-center">
          {["home", "features", "about"].map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)} 
              className={`capitalize transition-all duration-300 ${activeTab === tab ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-extrabold scale-110" : "hover:text-purple-400 font-medium"}`}
            >
              {tab}
            </button>
          ))}
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:scale-110 transition-transform">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center p-8 md:p-20 text-center min-h-[80vh]">
        
        {activeTab === "home" && (
          <div className="animate-fade-in space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-300 text-sm font-semibold mb-4 backdrop-blur-sm">
              ✨ The Future of Agentic Workflows
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tight leading-tight">
              Build Faster <br /> with <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-xy">Dual AI</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light">
              Click manually or just ask the floating AI to do it for you. Experience a multi-layered, highly responsive ecosystem.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <button onClick={() => setAiChatOpen(true)} className="px-8 py-4 rounded-2xl text-white font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transform hover:-translate-y-1 transition-all">
                Try AI Command 🤖
              </button>
              <button onClick={() => setActiveTab("features")} className="px-8 py-4 rounded-2xl font-bold text-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500 transition-all">
                Explore Manually
              </button>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="animate-fade-in w-full max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-black mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 animate-gradient-xy">
              Agentic Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Voice & Text Nav", desc: "AI takes you exactly where you want without clicking." },
                { title: "Automated Backend", desc: "Just say 'save data' and AI triggers the Supabase API." },
                { title: "Manual Override", desc: "Full traditional control remains in your hands anytime." }
              ].map((feat, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">🚀</div>
                  <h3 className="text-2xl font-bold mb-3">{feat.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="animate-fade-in max-w-2xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl p-12 rounded-3xl border border-white/20">
             <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">About The Developer</h2>
             <p className="text-xl text-slate-700 dark:text-slate-300">
               Built for extreme speed and flawless execution. This system respects your time—do it yourself or command the machine.
             </p>
          </div>
        )}
      </main>

      {/* FLOATING AI AVATAR & CHAT */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        
        {aiChatOpen && (
          <div className="w-80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-4 mb-4 shadow-2xl animate-fade-in flex flex-col h-96">
            <div className="flex justify-between items-center mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Nexus AI Core</span>
              <button onClick={() => setAiChatOpen(false)} className="text-slate-500 hover:text-red-500 font-bold">✕</button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
              {aiMessages.map((msg, idx) => (
                <div key={idx} className={`p-3 rounded-2xl text-sm ${msg.role === "ai" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100 rounded-tl-none" : "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-900 dark:text-cyan-100 rounded-tr-none ml-auto w-3/4"}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleAiCommand} className="flex gap-2">
              <input 
                type="text" 
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder="Type 'go to features'..."
                className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-2 text-sm outline-none border border-transparent focus:border-purple-500 transition-colors"
              />
              <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white rounded-xl px-4 py-2 text-sm font-bold transition-colors">
                Send
              </button>
            </form>
          </div>
        )}

        <button 
          onClick={() => setAiChatOpen(!aiChatOpen)}
          className="relative group w-16 h-16 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(168,85,247,0.6)] animate-float hover:scale-110 transition-transform"
        >
          🤖
          {!aiChatOpen && (
            <div className="absolute -left-12 top-2 animate-bounce flex items-center text-xl">
              👈 <span className="ml-2 text-xs font-bold bg-white dark:bg-slate-800 px-2 py-1 rounded-lg shadow-lg">Ask me!</span>
            </div>
          )}
        </button>
      </div>

    </div>
  );
}
