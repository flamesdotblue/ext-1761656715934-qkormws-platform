import { useState } from 'react';
import Hero from './components/Hero';
import ModelSelector from './components/ModelSelector';
import ChatPanel from './components/ChatPanel';
import FeatureGrid from './components/FeatureGrid';

export default function App() {
  const [selectedModels, setSelectedModels] = useState([
    'Claude 3.5 Sonnet',
    'GPT-4o',
  ]);
  const [temperature, setTemperature] = useState(0.3);
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', text: 'Hi! I’m your blue, smooth personal coder. Pick your favorite models and tell me what to build.' },
  ]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    const nextId = messages.length ? messages[messages.length - 1].id + 1 : 1;
    const newMessages = [
      ...messages,
      { id: nextId, role: 'user', text },
    ];

    // Simulate an assistant response locally for demo purposes
    const reply = {
      id: nextId + 1,
      role: 'assistant',
      text: `Thinking with ${selectedModels.join(', ')} at creativity ${temperature}.\n\nDraft plan:\n1) Understand requirements\n2) Outline components\n3) Generate code snippets\n4) Iterate and refine`,
    };

    setMessages([...newMessages, reply]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1025] via-[#0b1230] to-[#0c1438] text-white">
      <Hero />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <FeatureGrid />
        <ModelSelector
          selectedModels={selectedModels}
          onChange={setSelectedModels}
          temperature={temperature}
          onTemperatureChange={setTemperature}
        />
        <ChatPanel
          messages={messages}
          onSend={handleSend}
          selectedModels={selectedModels}
        />
      </main>
      <footer className="mt-16 py-10 text-center text-sm text-blue-200/70">
        Built for Android-friendly experiences with a blue, smooth vibe.
      </footer>
    </div>
  );
}
