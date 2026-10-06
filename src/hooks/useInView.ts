import { useEffect, useRef, useState } from 'react';

/** Marca o elemento como visível uma única vez, quando entra na viewport. */
export function useInView<T extends Element>(options: IntersectionObserverInit = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12, ...options },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
