import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Animation = () => {
  const CanvasRef = useRef();
  const [index, setIndex] = useState({ value: 0 });

  const details = useRef({
    start: 0,
    end: 900,
    images: [],
    initialized: false,
  });

  function pad(pad, size) {
    return size.toString().padStart(4, "0");
  }

  function pushPath() {
    if (!details.current.initialized) {
      for (let i = details.current.start; i < details.current.end; i++) {
        details.current.images.push(`/images2/Images_${pad(4, i)}.jpg`);
      }
      details.current.initialized = true;
    }
  }

  useEffect(() => {
    const canvas = CanvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    pushPath();

    const image = new Image();

    image.src = details.current.images[index.value];
    
    image.onload = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const aspectRatio = image.height / image.width;
  const targetWidth = canvas.width;
  const targetHeight = canvas.width * aspectRatio;

  ctx.drawImage(image, 0, 0, targetWidth, targetHeight);
};



  const resize = window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
  })

  window.removeEventListener('resize',resize);

  }, [index]);

  useGSAP(() => {
    const obj = { value: 0 };
    gsap.to(obj, {
      value: details.current.end-1,
      duration: 3,
      ease: "linear",

      scrollTrigger: {
        trigger: CanvasRef.current,
        start: "top top",
        end: `${details.current.end-1}0 top`,
        scrub: true,
        pin: true,
      },
      onUpdate: () => {
        setIndex({ value: Math.round(obj.value) });
      },
    });
  }, []);


  return (
    <>
      <canvas ref={CanvasRef}  className="canvas"></canvas>
    </>
  );
};

export default Animation;
