import { ShoppingCart, Flame } from "lucide-react";
import bestSellingProducts from "../data/bestSellingProducts";


function BestSellingProducts(){


return (

<section className="best-selling">


<h2>
Top Selling Products
</h2>


<div className="best-selling-grid">


{
bestSellingProducts.map((product)=>(

<div
className="best-selling-card"
key={product.id}
>

{
product.badge &&
<span className="best-selling-badge">
<Flame size={14}/>
Best Selling
</span>
}

<div className="best-selling-image">

<img
src={product.image}
alt={product.name}
/>

</div>


<div className="best-selling-info">

<h3>
{product.name}
</h3>

<p className="best-selling-price">
৳{product.price}
</p>

<div className="best-selling-buttons">

<button className="btn-outline">
<ShoppingCart size={16}/>
Add To Cart
</button>

<button className="btn-filled">
<ShoppingCart size={16}/>
Buy now
</button>

</div>

</div>

</div>

))
}


</div>


</section>

)

}


export default BestSellingProducts;
