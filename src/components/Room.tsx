"use client";

import { useState } from "react";
import Image from "next/image";

export default function Room() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-screen h-screen">

      {/* Background */}
      <Image
        src="/images/desktop.png"
        alt="My Room"
        fill
        className="object-cover"
        priority
      />

      {/* Computer hotspot */}
      <button
        onClick={() => setIsOpen(true)}
        className="
          absolute
          left-[46%]
          top-[53%]
          w-40
          h-25
          border-2
          bg-red-500/20
        "
      />
      {isOpen && (
        <div
          className="
            absolute
            top-10
            left-10
            w-96
            bg-white
            rounded-lg
            shadow-xl
            overflow-hidden
          "
        >
          {/* Header */}
          <div className="flex justify-between items-center bg-gray-200 px-4 py-2">
            <span className="font-semibold">
              Computer
            </span>

            <button
              onClick={() => setIsOpen(false)}
              className="text-red-500 font-bold"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className="text-xl font-bold">
              My Design & Coding Tools
            </h2>

            <p className="mt-2">
              This will eventually become my skills window.
            </p>
          </div>

        </div>
      )}
    </div>
  );
}