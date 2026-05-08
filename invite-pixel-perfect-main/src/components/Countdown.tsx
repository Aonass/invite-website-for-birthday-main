import { useEffect, useState } from "react";

const TARGET = new Date("2026-07-05T17:00:00").getTime();

function getDiff() {
  const d = TARGET - Date.now();
  if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

const Countdown = () => {
  const [t, setT] = useState(getDiff());
  useEffect(() => {
    const i = setInterval(() => setT(getDiff()), 1000);
    return () => clearInterval(i);
  }, []);

  const items = [
    { v: t.days, l: "дней" },
    { v: t.hours, l: "часов" },
    { v: t.minutes, l: "минут" },
    { v: t.seconds, l: "секунд" },
  ];

  return (
    <div className="text-center text-ink">
      <p className="font-serif-display text-xl md:text-2xl tracking-wider-2 mb-6">
        ДЕНЬ РОЖДЕНИЯ ЧЕРЕЗ:
      </p>
      <div className="flex justify-center items-start gap-2 md:gap-4">
        {items.map((it, i) => (
          <div key={it.l} className="flex items-start">
            <div className="flex flex-col items-center min-w-[58px] md:min-w-[80px]">
              <span
                key={it.v}
                className="font-serif-display text-5xl md:text-7xl font-light leading-none animate-tick tabular-nums"
              >
                {pad(it.v)}
              </span>
              <span className="mt-3 text-[10px] md:text-xs tracking-wider-2 uppercase text-ink/70">
                {it.l}
              </span>
            </div>
            {i < items.length - 1 && (
              <span className="font-serif-display text-5xl md:text-7xl font-light leading-none mx-1 md:mx-2 text-ink/60">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
