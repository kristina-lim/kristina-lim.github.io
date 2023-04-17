import React from 'react'
import { TestimonialData } from '../TestimonialData/TestimonialData';
import './testimonials.css';


export default function Testimonials () {
  return (
    <section className="testimonial container section">
      <h2 className="section_title">Testimonials</h2>
      <span className="section_subtitle">Recommendations from Instructors and Peers</span>
      <div className="testimonial_container">
        {TestimonialData.map(({id, image, title, description}) => {
          return (
            <div className="testimonial_card" key={id}>
              <img 
                src={image} 
                alt=""
                className="testimonial_img"
              />
              <h3 className="testimonial_name">{title}</h3>
              <p className="testimonial_description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}