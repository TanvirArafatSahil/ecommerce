import {ShoppingCart} from "lucide-react";


function ProductCard({product}){


return (

<div className="product-card">

<img 
src={product.image}
alt={product.name}
/>


<h3>
{product.name}
</h3>


<p>
৳ {product.price}
</p>


<button>

<ShoppingCart size={18}/>

Add To Cart

</button>


</div>

)

}


export default ProductCard;