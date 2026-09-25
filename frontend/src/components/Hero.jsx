import { ChevronLeft, ChevronRight } from "lucide-react";


function Hero(){

return(

<section className="hero-wrapper">


{/* Main Slider */}

<div className="main-banner">


<img
src="/banner-main.jpg"
alt="Main Offer"
/>


<button className="banner-left">

<ChevronLeft/>

</button>


<button className="banner-right">

<ChevronRight/>

</button>


<div className="slider-dots">

<span className="active"></span>
<span></span>
<span></span>

</div>


</div>




{/* Right Banner */}

<div className="side-banner">


<img
src="/banner-side.jpg"
alt="Honey Offer"
/>


</div>


</section>

)

}


export default Hero;