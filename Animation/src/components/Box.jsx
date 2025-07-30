import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function pad(n, width) {
  return String(n).padStart(width, "0");
}

const Box = ({ path, size}) => {
  const TOTAL_FRAMES = size;
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const imagePath = `/${path}/Images_${pad(currentFrame, 4)}.jpg`;
    if (imgRef.current) {
      imgRef.current.src = imagePath;
    }
  }, [currentFrame, path]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to({}, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${TOTAL_FRAMES * 4}px`,
          scrub: 1,
          onUpdate: (self) => {
            const frame = Math.min(TOTAL_FRAMES, Math.floor(self.progress * TOTAL_FRAMES));
            setCurrentFrame(frame);
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [TOTAL_FRAMES]);

  return (
    <>
      <div ref={containerRef} style={{ height: `${TOTAL_FRAMES * 4}px` }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            backgroundColor: "#000",
          }}
        >
          <img
            ref={imgRef}
            src={`/${path}/Images_${pad(currentFrame, 4)}.jpg`}
            alt="scroll animation"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

      </div>
    </>
  );
};

export default Box;
