import { useEffect } from 'react';

interface CalBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function CalBookingModal({ isOpen, onClose }: CalBookingModalProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.Cal) {
        window.Cal('init', { origin: 'https://app.cal.com' });
      }
    };

    return () => {
      const existingScript = document.querySelector('script[src*="cal.com/embed"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen && window.Cal) {
      window.Cal('modal', {
        calLink: 'anabless-dela-cruz-knutxw/consultation',
        config: {
          layout: 'month_view'
        }
      });
      onClose();
    }
  }, [isOpen, onClose]);

  return null;
}
