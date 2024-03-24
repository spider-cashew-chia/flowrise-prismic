import { Content, isFilled } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';
import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as='h2'
      size='md'
      className='mb-12 text-center md:text-left'
    >
      {children}
    </Heading>
  ),

  paragraph: ({ children }) => (
    <p className='text-base font-medium text-center font-body text-slate-600 md:text-left'>
      {children}
    </p>
  ),
};
/**
 * Props for `Testimonial`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonial" Slices.
 */
const Testimonials = async ({
  slice,
}: TestimonialsProps): Promise<JSX.Element> => {
  const client = createClient();

  const testimonials = await Promise.all(
    slice.items.map((item) => {
      if (
        isFilled.contentRelationship(item.testimonial) &&
        item.testimonial.uid
      ) {
        return client.getByUID('testimonials', item.testimonial.uid);
      }
    })
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        components={components}
        field={slice.primary.heading}
      />
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
        {testimonials.map(
          (item, index) =>
            item && (
              <div
                key={index}
                className='grid content-between px-8 py-10 bg-white border rounded-lg shadow-lg md:px-14 md:py-16'
              >
                <PrismicRichText
                  field={item.data.quote}
                  components={components}
                />
                <div className='flex items-center'>
                  <PrismicNextImage
                    width={56}
                    height={56}
                    field={item.data.avatar}
                    className='mr-4 rounded-full'
                    imgixParams={{ ar: '1:1', fit: 'crop' }}
                  />

                  <div>
                    <p>{item.data.name}</p>
                    <p>{item.data.job_title}</p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </Bounded>
  );
};

export default Testimonials;
