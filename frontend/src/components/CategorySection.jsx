import { ChevronLeft, ChevronRight } from "lucide-react";


const categories = [

{
name:"Organic",
image:"/categories/organic.png"
},

{
name:"Honey",
image:"/categories/honey.png"
},

{
name:"Dates",
image:"/categories/dates.png"
},

{
name:"Spices",
image:"/categories/spices.png"
},

{
name:"Nuts & Seeds",
image:"/categories/nuts.png"
},

{
name:"Beverage",
image:"/categories/beverage.png"
},

{
name:"Rice",
image:"/categories/rice.png"
},

{
name:"Flours & Lentils",
image:"/categories/flour.png"
}

];


function CategorySection(){


return(

<section className="featured-category">


<h2>
Featured Categories
</h2>



<div className="category-slider">


<button className="category-arrow left">

<ChevronLeft/>

</button>



<div className="category-list">


{
categories.map((category,index)=>(

<div 
className="category-item"
key={index}
>


<div className="category-image">


<img
src={category.image}
alt={category.name}
/>


</div>



<p>
{category.name}
</p>


</div>

))
}


</div>



<button className="category-arrow right">

<ChevronRight/>

</button>



</div>


</section>


)

}


export default CategorySection;