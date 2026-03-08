import React, { useState, useEffect } from 'react';

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())} ET`;
  };

  const formatDate = (date: Date) => {
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${date.getFullYear()}`;
  };

  return (
    <div className="font-mono text-[9px] tracking-[0.15em] text-white/50 uppercase flex items-center gap-3">
      <span>{formatTime(time)}</span>
      <span className="text-[8px]">•</span>
      <span>{formatDate(time)}</span>
    </div>
  );
}
