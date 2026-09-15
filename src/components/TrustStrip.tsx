import { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';
import { TRUST_CREDENTIALS } from '../data/products';

function CountUpNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 700; // fast ~700ms count-up
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // linear or slight ease out
      const current = Math.min(Math.round(target * progress), target);
      setCount(current);

      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section id="why-andal" ref={ref} className="bg-[#191C20] text-white border-y border-[#32363E] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-[11px] font-mono text-[#8B939F] uppercase tracking-widest mb-4">
          MANUFACTURING CREDENTIALS · PEELAMEDU, COIMBATORE
        </div>

        {/* Horizontal Strip of Factual Credentials */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#2C3038]">
          {TRUST_CREDENTIALS.map((cred, idx) => (
            <div key={cred.label} className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6' : ''}`}>
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight flex items-baseline gap-0.5">
                <CountUpNumber target={cred.value} suffix={cred.suffix} inView={inView} />
              </div>
              <div className="text-sm font-semibold text-[#E2E5EA] uppercase tracking-wide mt-1">
                {cred.label}
              </div>
              <div className="text-xs text-[#8E95A2] mt-1 leading-snug">
                {cred.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
