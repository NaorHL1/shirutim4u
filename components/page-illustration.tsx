import Image from "next/image";

import Stripes from "@/public/images/stripes.svg";

export default function PageIllustration() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Stripes illustration */}
      <div className=" flex justify-center">
        <Image
          className="max-w-none"
          src={Stripes}
          width={768}
          alt=""
          priority
        />
      </div>
      {/* Lightweight radial-gradient ambient glows (replaces GPU-heavy blur-[160px] that crashes iOS Safari) */}
      <div
        className="hidden md:block absolute -top-32 left-1/2 ml-[420px] -translate-x-1/2 h-[420px] w-[420px] rounded-full opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0) 70%)",
        }}
      />
      <div
        className="hidden md:block absolute left-1/2 top-[380px] ml-[280px] -translate-x-1/2 h-[420px] w-[420px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.35) 0%, rgba(17,24,39,0) 70%)",
        }}
      />
    </div>
  );
}

