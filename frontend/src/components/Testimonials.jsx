import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import testimonials from "../data/testimonials";


const VISIBLE = 3;


function Testimonials(){

  const [startIndex, setStartIndex] = useState(0);
  const total = testimonials.length;

  useEffect(() => {

    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(timer);

  }, [total]);


  const visibleTestimonials = Array.from({ length: VISIBLE }, (_, i) =>
    testimonials[(startIndex + i) % total]
  );


  return (

    <section className="testimonials">

      <div className="testimonials-grid">

        {
          visibleTestimonials.map((item) => (

            <div className="testimonial-card" key={item.id}>

              <p className="testimonial-text">
                {item.text}
              </p>

              <div className="testimonial-stars">
                {
                  Array.from({ length: item.rating }, (_, i) => (
                    <Star key={i} size={14} fill="#ff8500" color="#ff8500" />
                  ))
                }
              </div>

              <div className="testimonial-footer">

                <div className="testimonial-avatar">
                  {item.name.charAt(0)}
                </div>

                <div className="testimonial-info">

                  <h4>
                    {item.name}
                  </h4>

                  <span>
                    {item.role}
                  </span>

                </div>

              </div>

            </div>

          ))
        }

      </div>

      <div className="testimonials-dots">

        {
          testimonials.map((item, index) => (

            <span
              key={item.id}
              className={
                index === startIndex
                  ? "testimonial-dot active"
                  : "testimonial-dot"
              }
              onClick={() => setStartIndex(index)}
            />

          ))
        }

      </div>

    </section>

  );

}


export default Testimonials;
