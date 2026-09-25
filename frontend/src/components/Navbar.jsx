function Navbar(){

const menuItems = [
"Offer Zone",
"Honey",
"Oil & Ghee",
"Dates",
"Spices",
"Nuts & Seeds",
"Beverage",
"Rice",
"Flours & Lentils",
"Certified",
"Pickle",
"Tabaya"
];


return (

<nav className="navbar">

{
menuItems.map((item,index)=>(

<div 
className="nav-item"
key={index}
>

{item}

</div>

))
}

</nav>

)

}


export default Navbar;