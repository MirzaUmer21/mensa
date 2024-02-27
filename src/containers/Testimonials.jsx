import React from 'react';
import { Container } from '../common/container/Container';
import { motion } from 'framer-motion';
import { rightToLeftAnimations } from '../helpers/transitions';
import useScrollVisibility from '../helpers/UseScrollVisibility';
import Slider from 'react-slick';
import { SingleTestimonial } from '../components/testimonials/SingleTestimonial';
import './testimonials.scss';
import { testimonials } from '../constants/TestimonialsData';
export const Testimonials = () => {
  const isVisible = useScrollVisibility('.testimonialsWrapper');

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='testimonialsWrapper'>
      <Container>
        <motion.h1
          variants={rightToLeftAnimations}
          initial='hidden'
          animate={isVisible ? 'show' : 'hidden'}
        >
          TESTIMONIALS{' '}
        </motion.h1>
        <Slider {...settings}>
          {testimonials?.map((testimonial, ind) => {
            return (
              <div key={ind}>
                <SingleTestimonial data={testimonial} index={ind} />
              </div>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};
