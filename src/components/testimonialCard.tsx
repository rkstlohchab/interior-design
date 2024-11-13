// TestimonialCard.js
import React from 'react';

const TestimonialCard = ({ testimonial }:any) => {
  return (
    <div className="bg-white flex flex-col items-center justify-between p-8 rounded-lg shadow-md h-[300px] w-[220px] mb-14">
      <p className="text-justify max-lg:text-sm flex flex-wrap w-2/3">{testimonial.text}</p>
      <div className="flex mt-4">
        <span className="text-sm font-normal italic text-neutral-600">
          <h1 className="text-2xl font-bold">{testimonial.user}</h1>
          {testimonial.company}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;