import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero = () => {
  const slides = [
    {
      src: "https://as1.ftcdn.net/v2/jpg/11/07/77/82/1000_F_1107778286_CgqJCD7Pfwh7Icg3MvhLMtdxCbdM5Yei.jpg",
    
    },
     {
      src: "https://img.freepik.com/premium-photo/assorted-indian-non-vegetarian-food-recipe-served-group-includes-chicken-curry-mutton-masala-anda-egg-curry-butter-chicken-biryani-tandoori-murg-chicken-tikka-naa-roti-ramadan_466689-40931.jpg?w=2000",
  
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/032/952/574/non_2x/various-desserts-in-small-glasses-on-a-table-ai-generated-free-photo.jpg",
    
    },
    {
      src: "https://wallpapers.com/images/hd/famous-food-and-beverage-products-brand-logos-x19nkh80r7q2m0p0.jpg",
    
    }
  ];
  
   const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500
  };
  
  return (
    <div style={{ width: "80%" ,margin: "auto", padding: "20px 0" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height:"400px" ,marginTop: "10px",border:"none"  ,borderRadius: "25px" }}
            />
            
          </div>
        ))}
      </Slider>
      
    </div>
    
  )
}

export default Hero