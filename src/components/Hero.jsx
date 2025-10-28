import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative grid place-items-center" style={{ height: '60vh' }}>
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.25),rgba(59,130,246,0.1)_40%,transparent_70%)]" />
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-blue-300" />
            <span className="text-xs font-semibold tracking-wide text-blue-100">Personal Coder • Multi‑Model</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200">
            Your Blue & Smooth AI Coder
          </h1>
          <p className="mt-4 max-w-2xl text-blue-100/80">
            Build, refactor, and explain code with the most trusted AI models. Clean design, Android-friendly, and completely free to use locally.
          </p>
        </div>
      </div>
    </section>
  );
}
