'use client';

import { CookieIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Props = {
  demo?: boolean;
  onAcceptCallback?: () => void;
  onDeclineCallback?: () => void;
  cookieName?: string; // allows reuse if needed
  cookieMaxAgeDays?: number; // configurable
};

function setCookie(name: string, value: string, days: number) {
  const maxAge = days * 24 * 60 * 60;
  // Ensure path + samesite for consistent behavior
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/; SameSite=Lax`;
}

function getCookie(name: string) {
  return document.cookie.split('; ').find((row) => row.startsWith(`${name}=`));
}

export default function CookieConsent({
  demo = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
  cookieName = 'cookieConsent',
  cookieMaxAgeDays = 3650, // ~10 years
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const mounted = useRef(false);

  const closeWithFade = () => {
    setIsOpen(false);
    // keep the .duration-700 in sync with this timeout
    setTimeout(() => setHide(true), 700);
  };

  const accept = () => {
    setCookie(cookieName, 'true', cookieMaxAgeDays);
    closeWithFade();
    onAcceptCallback();
  };

  const decline = () => {
    // Optionally set a "seen" cookie so it doesn’t reappear; or leave unset to ask again.
    // If you want to avoid showing again for decliners, uncomment the next line:
    // setCookie(cookieName, 'declined', 365);
    closeWithFade();
    onDeclineCallback();
  };

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    try {
      // Defer opening to next tick to avoid hydration flicker
      const hasConsent = !!getCookie(cookieName);
      if (!hasConsent || demo) {
        // show if no cookie or demo mode
        setIsOpen(true);
      } else {
        // already consented (or seen), don’t render
        setHide(true);
      }
    } catch {
      // In case of any error reading cookie, show banner (fails open)
      setIsOpen(true);
    }
  }, [cookieName, demo]);

  if (hide) return null;

  return (
    <div
      aria-live="polite"
      aria-label="Cookie consent"
      className={`fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700 ${
        !isOpen
          ? 'transition-[opacity,transform] translate-y-8 opacity-0'
          : 'transition-[opacity,transform] translate-y-0 opacity-100'
      }`}
    >
      <div className="dark:bg-secondary bg-background rounded-lg m-3 border border-border shadow-lg dark:shadow-none">
        <div className="grid gap-2">
          <div className="border-b border-border dark:border-background/20 h-14 flex items-center justify-between px-4">
            <h2 className="text-lg font-medium">We use cookies</h2>
            <CookieIcon className="h-[1.2rem] w-[1.2rem]" aria-hidden />
          </div>

          <div className="px-4 py-2">
            <p className="text-sm text-start">
              We use cookies to ensure the best experience on our website. For details, see our
              cookie policy.
              <br />
              <br />
              <span className="text-xs">
                By clicking <span className="font-medium opacity-80">Accept</span>, consent is
                granted for cookies.
              </span>
              <br />
              <a href="/cookies-policy" className="text-xs underline">
                Learn more.
              </a>
            </p>
          </div>

          <div className="flex gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
            <button
              onClick={accept}
              className="block w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium text-center"
            >
              Accept
            </button>
            <button
              onClick={decline}
              className="block w-full cursor-pointer border border-border text-border px-6 py-3 rounded-lg transition-colors font-medium text-center"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
