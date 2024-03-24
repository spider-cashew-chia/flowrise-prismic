import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';
import { PrismicNextLink } from '@prismicio/next';
import Button from '@/components/Button';

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as='h2'
      size='sm'
      className='mb-4 md:mb-8 '
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className='mb-4 text-2xl leading-10 font-body text-slate-600 md:mb-8'>
      {children}
    </p>
  ),
};

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='grid max-w-4xl py-12 m-auto rounded-lg shadow-xl md:px-12 place-items-center bg-gradient-to-tr from-cyan-50 via-white to-emerald-200'>
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
        <PrismicRichText
          field={slice.primary.body}
          components={components}
        />
        <Button field={slice.primary.button_link}>
          {slice.primary.button_text}
        </Button>
      </div>
    </Bounded>
  );
};

export default CallToAction;
