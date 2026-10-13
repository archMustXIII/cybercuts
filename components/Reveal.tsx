"use client"
import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // Если браузер не поддерживает IntersectionObserver,
    // показываем контент без анимации.
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    let observer: IntersectionObserver | undefined;

    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer?.disconnect();
          }
        },
        {
          threshold: 0,
          rootMargin: "0px 0px 100px 0px",
        }
      );

      observer.observe(element);
    } catch {
      // При ошибке наблюдения не скрываем содержимое.
      setVisible(true);
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {children}
    </div>
  );
}