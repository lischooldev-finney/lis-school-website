declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_ID = "AW-18109961905";

function safeGtag(...args: any[]) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

export function sendConversion() {
  safeGtag("event", "conversion", {
    send_to: "AW-18109961905/_qPKCJC636McELGtwLtD",
  });
}

export default safeGtag;
