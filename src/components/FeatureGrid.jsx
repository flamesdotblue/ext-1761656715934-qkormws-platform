import { Shield, Star, Cpu } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: <Star className="h-5 w-5 text-yellow-300" />,
      title: 'Top Models, One Place',
      desc: 'Pick from popular and most-discussed models in a unified interface.',
    },
    {
      icon: <Cpu className="h-5 w-5 text-blue-300" />,
      title: 'Coder-first UX',
      desc: 'Blue, smooth, minimal UI tuned for Android-friendly workflows.',
    },
    {
      icon: <Shield className="h-5 w-5 text-green-300" />,
      title: 'Local-first',
      desc: 'No server required for this demo; connect APIs when you are ready.',
    },
  ];

  return (
    <section className="-mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <div
          key={f.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur"
        >
          <div className="mb-3">{f.icon}</div>
          <div className="text-base font-semibold">{f.title}</div>
          <p className="mt-1 text-sm text-blue-100/80">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
