import { useEffect, useRef, useCallback } from 'react';

interface AnimationOptions {
  duration?: number;
  delay?: number;
  easing?: string;
  threshold?: number;
  once?: boolean;
}

// Easing functions similar to GSAP
const easings = {
  power2Out: 'cubic-bezier(0.22, 1, 0.36, 1)',
  power3Out: 'cubic-bezier(0.16, 1, 0.3, 1)',
  power4Out: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

// Animate element with GSAP-like API
export const animate = (
  element: HTMLElement,
  properties: Record<string, string | number>,
  options: AnimationOptions = {}
) => {
  const { duration = 800, delay = 0, easing = easings.power3Out } = options;

  setTimeout(() => {
    element.style.transition = `all ${duration}ms ${easing}`;
    Object.entries(properties).forEach(([key, value]) => {
      (element.style as any)[key] = typeof value === 'number' ? `${value}px` : value;
    });
  }, delay);
};

// Stagger animation for multiple elements
export const stagger = (
  elements: HTMLElement[],
  properties: Record<string, string | number>,
  options: AnimationOptions & { staggerDelay?: number } = {}
) => {
  const { staggerDelay = 100, ...animOptions } = options;

  elements.forEach((el, index) => {
    animate(el, properties, {
      ...animOptions,
      delay: (animOptions.delay || 0) + index * staggerDelay,
    });
  });
};

// Split text into characters for animation
export const splitText = (element: HTMLElement): HTMLSpanElement[] => {
  const text = element.textContent || '';
  element.innerHTML = '';

  return text.split('').map((char, index) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    span.style.transform = 'translateY(50px)';
    span.dataset.index = String(index);
    element.appendChild(span);
    return span;
  });
};

// Main hook for scroll-triggered animations
export const useAdvancedAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animatedElements = useRef<Set<Element>>(new Set());

  const animateElement = useCallback((entry: IntersectionObserverEntry) => {
    const el = entry.target as HTMLElement;
    const animationType = el.dataset.animate;
    const delay = parseInt(el.dataset.delay || '0');
    const duration = parseInt(el.dataset.duration || '800');
    const staggerVal = parseInt(el.dataset.stagger || '0');

    // Mark as animated
    animatedElements.current.add(el);

    switch (animationType) {
      case 'fade-up':
        animate(el, { opacity: '1', transform: 'translateY(0)' }, { delay, duration });
        break;

      case 'fade-down':
        animate(el, { opacity: '1', transform: 'translateY(0)' }, { delay, duration });
        break;

      case 'fade-left':
        animate(el, { opacity: '1', transform: 'translateX(0)' }, { delay, duration });
        break;

      case 'fade-right':
        animate(el, { opacity: '1', transform: 'translateX(0)' }, { delay, duration });
        break;

      case 'scale':
        animate(el, { opacity: '1', transform: 'scale(1)' }, { delay, duration });
        break;

      case 'blur':
        animate(el, { opacity: '1', filter: 'blur(0)' }, { delay, duration });
        break;

      case 'clip-up':
        animate(el, { clipPath: 'inset(0 0 0 0)' }, { delay, duration });
        break;

      case 'text-reveal':
        const chars = el.querySelectorAll('.char');
        chars.forEach((char, index) => {
          setTimeout(() => {
            (char as HTMLElement).style.transition = `all 500ms ${easings.power3Out}`;
            (char as HTMLElement).style.opacity = '1';
            (char as HTMLElement).style.transform = 'translateY(0)';
          }, delay + index * (staggerVal || 40));
        });
        break;

      case 'counter':
        const target = parseInt(el.dataset.target || '0');
        const counterDuration = duration;
        const startTime = performance.now();

        const updateCounter = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / counterDuration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3); // power3Out
          const currentValue = Math.floor(easeProgress * target);
          el.textContent = currentValue.toString();

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = target.toString();
          }
        };

        setTimeout(() => requestAnimationFrame(updateCounter), delay);
        break;

      case 'line':
        animate(el, { transform: 'scaleX(1)' }, { delay, duration });
        break;

      case 'stagger-children':
        const children = el.children;
        Array.from(children).forEach((child, index) => {
          const childEl = child as HTMLElement;
          setTimeout(() => {
            childEl.style.transition = `all ${duration}ms ${easings.power3Out}`;
            childEl.style.opacity = '1';
            childEl.style.transform = 'translateY(0)';
          }, delay + index * (staggerVal || 100));
        });
        break;

      default:
        animate(el, { opacity: '1', transform: 'translateY(0)' }, { delay, duration });
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedElements.current.has(entry.target)) {
            animateElement(entry);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = containerRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [animateElement]);

  return containerRef;
};

// Parallax effect hook
export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const scrollY = window.scrollY;
      const rect = elementRef.current.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const relativeScroll = scrollY - elementTop + window.innerHeight;

      if (relativeScroll > 0 && scrollY < elementTop + rect.height) {
        elementRef.current.style.transform = `translateY(${relativeScroll * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};

// Magnetic button effect
export const useMagnetic = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = (e.clientX - centerX) * 0.2;
      const distY = (e.clientY - centerY) * 0.2;

      el.style.transform = `translate(${distX}px, ${distY}px)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'translate(0, 0)';
      el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    const handleMouseEnter = () => {
      el.style.transition = 'transform 0.1s ease-out';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return elementRef;
};

// Smooth scroll to element
export const smoothScrollTo = (target: string | HTMLElement, offset: number = 0) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start: number | null = null;

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3); // power3Out

    window.scrollTo(0, startPosition + distance * easeProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

export default useAdvancedAnimations;
