import { useCallback, useEffect, useRef } from 'react';

type IntersectHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver,
) => void;

const useIntersect = (
  onIntersect: IntersectHandler,
  options?: IntersectionObserverInit,
) => {
  const ref = useRef(null);
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          console.log(observer);
          onIntersect(entry, observer);
        }
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    if (ref.current) {
      console.log('ref 가 존재한다!')
      const observer = new IntersectionObserver(callback, options);
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [ref, options, callback]);

  return ref;
};

export default useIntersect;
