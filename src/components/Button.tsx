import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next';
import React from 'react';
import clsx from 'clsx';

export default function Button({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        'block px-12 py-3 mb-8 text-base font-bold tracking-wider text-white transition-colors duration-200 rounded-full w-fit bg-cyan-700 hover:bg-cyan-800 font-display',
        className
      )}
      {...restProps}
    />
  );
}
