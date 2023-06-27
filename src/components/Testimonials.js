import Testimonial from "./Testimonial";
import TestimonialsStyles from "../styles/Testimonials.module.css";

export default function Testimonials() {
  return (
    <>
      <h2> Testimonials </h2>
      <p> Here what our users have to say about our incredible courses</p>
      <div className={TestimonialsStyles.container}>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </>
  )
}