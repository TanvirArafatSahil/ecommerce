// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import FloatingCart from "../components/FloatingCart";
// import CategorySection from "../components/CategorySection";


// function Home(){

//   return (

//     <div className="home-page">


//       {/* Top Header */}

//       <Header />


//       {/* Dark Category Navigation */}

//       <Navbar />


//       {/* Banner Section */}

//       <Hero />

//       <CategorySection />


//       {/* Floating Cart */}

//       <FloatingCart />



//       {/* Category Section (Next Step) */}

//       <section className="category-section">


//         <h2>
//           Shop By Category
//         </h2>


//         <div className="category-container">


//           <div className="category-card">
//             Honey
//           </div>


//           <div className="category-card">
//             Oil & Ghee
//           </div>


//           <div className="category-card">
//             Dates
//           </div>


//           <div className="category-card">
//             Spices
//           </div>


//           <div className="category-card">
//             Nuts & Seeds
//           </div>


//           <div className="category-card">
//             Rice
//           </div>


//         </div>


//       </section>



//       {/* Products Section */}

//       <section className="products-section">


//         <h2>
//           Featured Products
//         </h2>


//         <div className="products-placeholder">

//           Products Coming Soon

//         </div>


//       </section>



//     </div>

//   )

// }


// export default Home;

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FloatingCart from "../components/FloatingCart";
import CategorySection from "../components/CategorySection";
import BestSellingProducts from "../components/BestSellingProducts";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";


function Home(){

  return (

    <div className="home-page">


      {/* Top Header */}

      <Header />


      {/* Dark Category Navigation */}

      <Navbar />


      {/* Banner Section */}

      <Hero />

      <CategorySection />


      {/* Floating Cart */}

      <FloatingCart />



      {/* Category Section (Next Step) */}

      {/* <section className="category-section">


        <h2>
          Shop By Category
        </h2>


        <div className="category-container">


          <div className="category-card">
            Honey
          </div>


          <div className="category-card">
            Oil & Ghee
          </div>


          <div className="category-card">
            Dates
          </div>


          <div className="category-card">
            Spices
          </div>


          <div className="category-card">
            Nuts & Seeds
          </div>


          <div className="category-card">
            Rice
          </div>


        </div>


      </section> */}



      {/* Best Selling Products */}

      <BestSellingProducts />


      {/* Customer Testimonials */}

      <Testimonials />


      {/* Footer */}

      <Footer />



    </div>

  )

}


export default Home;