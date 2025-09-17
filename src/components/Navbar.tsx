'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import mayoraLogo from '@/assets/images/mayora-logo.png';
/**
 * Desktop navbar matching the provided design.
 * - Left: brand logo (use text lockup for now)
 * - Center: nav links with active state color
 * - Services has a chevron indicator (no dropdown behavior yet)
 * - Right: prominent rounded "Contact Us" button with arrow icon
 */
export default function Navbar() {
  const pathname = usePathname();

  const links: { href: string; label: string; hasChevron?: boolean }[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services', hasChevron: true },
    { href: '/features', label: 'Features' },
    { href: '/blog', label: 'Blog' },
    { href: '/career', label: 'Career' },
  ];

  return (
    <header className='w-full relative z-50'>
      <div className='mx-auto max-w-[1200px] px-4 md:px-6'>
        <div className='flex h-20 items-center justify-between'>
          {/* Brand */}
          <Link href='/' className='flex items-center gap-2'>
            {/* Replace with actual brand image if available */}
            <Image
              src={mayoraLogo}
              alt='Mayora Infotech logo'
              priority
              width={160}
              height={40}
              className='h-9 w-auto'
            />
          </Link>

          {/* Right: Nav + CTA grouped to sit closer together */}
          <div className='flex items-center gap-8'>
            <nav className='hidden md:flex items-center gap-8 relative'>
              {links.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);
                // Special rendering for Services to show dropdown panel
                if (link.hasChevron) {
                  return (
                    <div key={link.href} className='relative group before:content-["" ] before:absolute before:left-0 before:right-0 before:top-full before:h-4 before:block'>
                      <Link
                        href={link.href}
                        className={`${
                          isActive ? 'text-[#3B82F6]' : 'text-black'
                        } text-base font-medium hover:text-[#3B82F6] transition-colors flex items-center gap-2`}
                      >
                        {link.label}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          className='h-4 w-4 text-[#3B82F6] transition-transform duration-300 group-hover:rotate-180'
                        >
                          <path d='M6 9l6 6 6-6' />
                        </svg>
                      </Link>

                      {/* Hover Panel */}
                      <div className='pointer-events-none invisible opacity-0 translate-y-2 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 hover:pointer-events-auto hover:visible hover:opacity-100 hover:translate-y-0 absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[920px] rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 z-50'>
                        <div className='grid grid-cols-12 gap-6'>
                          <div className='col-span-8'>
                            <div className='text-xs font-semibold text-neutral-500 mb-4'>SOLUTIONS</div>
                            <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
                              {['Platform Migration','Growth Services','OnePress','Staff Augmentation','SnapWP – Headless','Artificial Intelligence','Managed Services','Quality Engineering','Discovery & Consultation'].map((item) => (
                                <div key={item} className='group flex items-center gap-3'>
                                  <span className='relative overflow-hidden flex h-6 w-6 items-center justify-center rounded-md border border-rose-200 text-rose-500 transition-colors duration-300 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6] before:content-["""] before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 group-hover:before:scale-x-100'>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='relative z-10 h-3.5 w-3.5'><path d='M12 3l2.12 4.29L19 8l-3.5 3.41L16.24 17 12 14.9 7.76 17l.74-5.59L5 8l4.88-.71L12 3z'/></svg>
                                  </span>
                                  <span className='text-sm text-neutral-700'>{item}</span>
                                </div>
                              ))}
                            </div>
                            <Link href='/services' className='mt-5 inline-flex items-center gap-2 text-[#E34234] text-xs font-semibold'>
                              VIEW ALL SOLUTIONS
                              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='h-3.5 w-3.5'><path d='M7 17L17 7'/><path d='M8 7h9v9'/></svg>
                            </Link>
                          </div>
                          <div className='col-span-4'>
                            <div className='text-xs font-semibold text-neutral-500 mb-4'>INDUSTRIES</div>
                            <div className='space-y-4'>
                              {['Digital Publication/Media','Automotive','Conglomerates'].map((item) => (
                                <div key={item} className='group flex items-center gap-3'>
                                  <span className='relative overflow-hidden flex h-6 w-6 items-center justify-center rounded-md border border-rose-200 text-rose-500 transition-colors duration-300 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6] before:content-["""] before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 group-hover:before:scale-x-100'>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='relative z-10 h-3.5 w-3.5'><path d='M12 3l2.12 4.29L19 8l-3.5 3.41L16.24 17 12 14.9 7.76 17l.74-5.59L5 8l4.88-.71L12 3z'/></svg>
                                  </span>
                                  <span className='text-sm text-neutral-700'>{item}</span>
                                </div>
                              ))}
                            </div>
                            <Link href='/industries' className='mt-5 inline-flex items-center gap-2 text-[#E34234] text-xs font-semibold'>
                              VIEW ALL INDUSTRIES
                              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='h-3.5 w-3.5'><path d='M7 17L17 7'/><path d='M8 7h9v9'/></svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${
                      isActive ? 'text-[#3B82F6]' : 'text-black'
                    } text-base font-medium hover:text-[#3B82F6] transition-colors flex items-center gap-2`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <Link
              href='/contact'
              className= "group relative inline-flex items-center gap-3 rounded-full bg-[#3B82F6] px-6 py-3 text-white text-base font-semibold shadow-sm overflow-hidden active:opacity-90 before:content-[''] before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 group-hover:before:scale-x-100 border border-transparent hover:border-[#3B82F6] hover:border-solid"
            >
              <span className='relative z-10 transition-colors duration-300 group-hover:text-[#3B82F6]'>
                Contact Us
              </span>
              <span className='relative z-10 flex h-7 w-7 items-center justify-center rounded-full border transition-colors duration-300 border-white/80 group-hover:border-[#3B82F6] text-white group-hover:text-[#3B82F6]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  className='h-4 w-4'
                >
                  <path d='M7 17L17 7' />
                  <path d='M8 7h9v9' />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* Subtle background pattern edge (optional) */}
      <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-black/5' />
    </header>
  );
}
