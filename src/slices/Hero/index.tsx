import { Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import Bounded from '@/components/Bounded';
import Button from '@/components/Button';
import Heading from '@/components/Heading';

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as='h1'
      size='xl'
      className='mb-4 md:mb-8 '
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className='max-w-md mb-4 text-2xl leading-10 font-body text-slate-600 md:mb-8'>
      {children}
    </p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
      {slice.variation === 'default' && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className='grid grid-cols-1 text-center place-items-center'>
            <PrismicRichText
              field={slice.primary.header}
              components={components}
            />

            <PrismicRichText
              field={slice.primary.body}
              components={components}
            />

            <Button
              field={slice.primary.button_link}
              className='md:mb-10'
            >
              {slice.primary.button_text}
            </Button>

            <PrismicNextImage
              field={slice.primary.image}
              className='w-full max-w-4xl drop-shadow-xl'
            />
          </div>
        </Bounded>
      )}

      {slice.variation === 'horizontal' && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className='grid grid-rows-[1fr,auto,auto] gap-8 h-fit'>
              <PrismicRichText
                field={slice.primary.header}
                components={components}
              />

              <PrismicRichText
                field={slice.primary.body}
                components={components}
              />

              <Button
                field={slice.primary.button_link}
                className='md:mb-10'
              >
                {slice.primary.button_text}
              </Button>
            </div>
            <PrismicNextImage
              field={slice.primary.image}
              className='w-full max-w-4xl drop-shadow-xl'
            />
          </div>
        </Bounded>
      )}
    </>
  );
};

export default Hero;
