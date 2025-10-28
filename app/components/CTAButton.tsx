'use client';
import Link from 'next/link';

type CTAButtonProps = {
  label: string;
  href: string;
  target?: '_blank' | '_self';
};

export default function CTAButton({ label, href, target = '_self' }: CTAButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className="bg-black text-white px-14 py-2 font-bold text-2xl font-aeonik hover:opacity-80 transition"
    >
      {label}
    </Link>
  );
}
