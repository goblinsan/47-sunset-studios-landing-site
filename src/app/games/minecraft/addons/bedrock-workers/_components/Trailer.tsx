'use client';

import { useRef, useState } from 'react';
import { ART } from '../_content/shared';

/** The trailer, held on its title frame until someone asks to watch it. Captions are on by default. */
export function Trailer() {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function play() {
    setStarted(true);
    const v = video.current;
    if (!v) return;
    v.controls = true;
    void v.play();
  }

  return (
    <div
      id="trailer"
      className="border-border-subtle relative aspect-video w-full overflow-hidden rounded-2xl border bg-black shadow-2xl"
    >
      <video
        ref={video}
        className="h-full w-full"
        poster={`${ART}/trailer-poster.webp`}
        preload="none"
        playsInline
        aria-label="Bedrock Workers trailer"
      >
        <source src={`${ART}/trailer.mp4`} type="video/mp4" />
        <track kind="captions" src={`${ART}/trailer.en.vtt`} srcLang="en" label="English" default />
      </video>
      {!started && (
        <button
          type="button"
          onClick={play}
          className="group focus-visible:ring-accent absolute inset-0 flex cursor-pointer items-center justify-center bg-black/15 p-4 outline-none hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-inset sm:p-8"
        >
          <span className="bg-accent text-text-inverse group-hover:bg-accent-bright text-body sm:text-body-lg inline-flex items-center gap-3 rounded-full py-3 pr-6 pl-4 font-semibold shadow-[0_0_28px_0_rgba(249,115,22,0.45)] transition-colors">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
            </svg>
            Watch the 49-second trailer
          </span>
        </button>
      )}
    </div>
  );
}
