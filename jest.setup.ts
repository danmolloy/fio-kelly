// Mock framer-motion to avoid animation side-effects in tests
jest.mock("framer-motion", () => {
  const React = require("react");

  const motionPropKeys = new Set([
    "initial",
    "animate",
    "exit",
    "whileInView",
    "whileHover",
    "whileTap",
    "variants",
    "transition",
    "viewport",
    "drag",
    "dragConstraints",
    "dragElastic",
    "dragMomentum",
    "layout",
    "layoutId",
    "onAnimationStart",
    "onAnimationComplete",
  ]);

  const filterMotionProps = (props: any) => {
    if (!props) return props;
    const result: any = {};
    for (const key of Object.keys(props)) {
      if (!motionPropKeys.has(key)) {
        result[key] = props[key];
      }
    }
    return result;
  };

  const passthrough = (Tag: any) =>
    React.forwardRef(function Passthrough(props: any, ref: any) {
      const { children } = props || {};
      const domProps = filterMotionProps(props);
      return React.createElement(Tag, { ref, ...domProps }, children);
    });

  const motionProxy = new Proxy(
    {},
    {
      get: (_target, prop: string) => passthrough(prop),
    },
  );

  return {
    __esModule: true,
    motion: motionProxy,
    AnimatePresence: ({ children }: any) => children,
    useInView: () => [null, true],
    useReducedMotion: () => false,
  };
});

// Extend jest-dom
import "@testing-library/jest-dom";

// Polyfill IntersectionObserver for jsdom
class MockIntersectionObserver {
  callback: IntersectionObserverCallback;
  options?: IntersectionObserverInit;
  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit,
  ) {
    this.callback = callback;
    this.options = options;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

// @ts-ignore
global.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;
