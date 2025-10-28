import { useRef, useState, useEffect } from 'react';
import { Cpu, MessageSquare } from 'lucide-react';

export default function ChatPanel({ messages, onSend, selectedModels }) {
  const [input, setInput] = useState('Write a simple Android Kotlin function to format dates.');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(input);
    setInput('');
  };

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-blue-300" />
          <h2 className="text-lg font-semibold">Chat</h2>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-blue-200/70">Active models:</span>
          {selectedModels.length === 0 ? (
            <span className="rounded bg-white/10 px-2 py-1">None</span>
          ) : (
            selectedModels.map((m) => (
              <span key={m} className="rounded bg-blue-500/20 px-2 py-1 text-blue-100 border border-blue-400/30">
                {m}
              </span>
            ))
          )}
        </div>
      </div>

      <div className="mb-4 h-72 overflow-y-auto rounded-xl border border-white/10 bg-black/20 p-4">
        {messages.map((m) => (
          <div key={m.id} className={`mb-3 flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow ${
                m.role === 'user'
                  ? 'bg-gradient-to-br from-blue-500/30 to-blue-400/20 border border-blue-300/30'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              <div className="mb-1 flex items-center gap-2 text-xs opacity-80">
                {m.role === 'user' ? (
                  <span>You</span>
                ) : (
                  <span className="inline-flex items-center gap-1"><Cpu className="h-3 w-3" /> Coder</span>
                )}
              </div>
              <pre className="whitespace-pre-wrap font-sans">{m.text}</pre>
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-end gap-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe what you want to build..."
          className="min-h-[56px] flex-1 resize-y rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-blue-200/60 focus:border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        />
        <button
          type="submit"
          className="h-[56px] shrink-0 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-5 font-semibold text-white shadow-lg shadow-blue-500/20 transition active:scale-[0.99]"
        >
          Send
        </button>
      </form>

      <div className="mt-3 text-xs text-blue-200/70">
        Tip: Ask for code, refactors, or step-by-step plans. Works fully offline here; hook in real APIs later.
      </div>
    </section>
  );
}
