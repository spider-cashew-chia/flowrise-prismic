import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Bounded from '@/components/Bounded';

export default async function Footer() {
  const client = createClient();

  const settings = await client.getSingle('settings');
  return (
    <Bounded
      as='footer'
      className='py-4 md:py-6 lg:py-8'
    >
      <div className='flex flex-col justify-between gap-4 sm:flex-row'>
        <Link href='/'>
          <Logo />
        </Link>
        <p>
          &copy; {new Date().getFullYear()} {settings.data.site_title}
        </p>

        <ul className='flex'>
          {settings.data.navigation.map(({ link, label }) => (
            <li key={label}>
              <PrismicNextLink
                field={link}
                className='p-3'
              >
                {label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  );
}
