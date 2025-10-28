import { useMemo } from 'react';
import { Settings, Star } from 'lucide-react';

const ALL_MODELS = [
  { provider: 'OpenAI', name: 'GPT-4o', tags: ['popular'] },
  { provider: 'OpenAI', name: 'o4-mini', tags: ['fast'] },
  { provider: 'Anthropic', name: 'Claude 3.5 Sonnet', tags: ['most discussed'] },
  { provider: 'Meta', name: 'Llama 3.1 405B', tags: ['open'] },
  { provider: 'Google', name: 'Gemini 1.5 Pro', tags: ['enterprise'] },
  { provider: 'Mistral', name: 'Mistral Large', tags: ['concise'] },
];

export default function ModelSelector({ selectedModels, onChange, temperature, onTemperatureChange }) {
  const groups = useMemo(() => {
    const map = {};
    for (const m of ALL_MODELS) {
      if (!map[m.provider]) map[m.provider] = [];
      map[m.provider].push(m);
    }
    return map;
  }, []);

  const toggle = (name) => {
    if (selectedModels.includes(name)) {
      onChange(selectedModels.filter((m) => m !== name));
    } else {
      onChange([...selectedModels, name]);
    }
  };

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-blue-300" />
          <h2 className="text-lg font-semibold">Model Brain Stack</h2>
        </div>
        <div className="text-xs text-blue-200/80">Choose multiple models</div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(groups).map(([provider, models]) => (
          <div key={provider} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 text-sm font-semibold text-blue-100">{provider}</div>
            <div className="space-y-2">
              {models.map((m) => {
                const active = selectedModels.includes(m.name);
                return (
                  <button
                    key={m.name}
                    onClick={() => toggle(m.name)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                      active ? 'bg-blue-500/20 border border-blue-400/40' : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{m.name}</span>
                      {m.tags.includes('popular') && <Star className="h-4 w-4 text-yellow-300" />}
                    </div>
                    <div className="mt-1 text-xs text-blue-200/70">{m.tags.join(' • ')}</div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <label htmlFor="temperature" className="mb-2 block text-sm font-medium text-blue-100">
          Creativity (Temperature): {temperature.toFixed(2)}
        </label>
        <input
          id="temperature"
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={temperature}
          onChange={(e) => onTemperatureChange(parseFloat(e.target.value))}
          className="w-full accent-blue-500"
        />
      </div>
    </section>
  );
}
