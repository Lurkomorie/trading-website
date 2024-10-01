"use client";

import { Instagram, MessageCircle, Send } from "lucide-react";

const socialLinks = [
  {
    name: "Telegram",
    icon: Send,
    href: "https://t.me/+6S5ZO6Iz2StiNDIy",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/magic__exchange/",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/37360481845",
  },
];

export function SocialIcons() {
  const handleClick = (href: string) => {
    window.open(href, "_blank");
  };
  return (
    <div className="inline-flex bg-background rounded-full p-1">
      {socialLinks.map((link) => (
        <button
          key={link.name}
          className="p-2.5 rounded-full hover:bg-gray-100 transition-colors text-primary"
          aria-label={link.name}
          onClick={() => handleClick(link.href)}
        >
          <link.icon className="h-6 w-6" />
        </button>
      ))}
    </div>
  );
}
