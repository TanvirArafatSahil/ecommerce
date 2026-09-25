import {
  MapPin,
  User,
  Heart,
  ShoppingCart,
  Menu,
  Search
} from "lucide-react";


function Header(){

return (

<header className="header">


{/* Logo */}

<div className="logo">

<img 
src="/logo.png"
alt="Ecommerce"
/>

</div>



{/* Search */}

<div className="search-box">

<input 
placeholder="Search in..."
/>

<Search size={28}/>

</div>



{/* Actions */}

<div className="header-actions">


<div className="header-item">

<MapPin size={32}/>

<span>
Track Order
</span>

</div>



<div className="header-item">

<User size={32}/>

<span>
Sign In
</span>

</div>



<div className="header-item">

<Heart size={32}/>

<span>
Wishlist
</span>

</div>



<div className="header-item cart">

<ShoppingCart size={32}/>

<span>
Cart
</span>

<div className="cart-count">
0
</div>

</div>



<div className="header-item">

<Menu size={32}/>

<span>
More
</span>

</div>


</div>


</header>

)

}


export default Header;