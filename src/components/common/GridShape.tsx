import React from "react";

export default function GridShape() {
  return (
    <>
      <div className="pointer-events-none absolute right-0 top-0 -z-1 h-56 w-full max-w-[250px] rounded-full bg-gradient-to-br from-brand-500/20 via-brand-500/5 to-transparent blur-3xl xl:h-72 xl:max-w-[450px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-1 h-56 w-full max-w-[250px] rotate-180 rounded-full bg-gradient-to-br from-brand-500/20 via-brand-500/5 to-transparent blur-3xl xl:h-72 xl:max-w-[450px]" />
    </>
  );
}
