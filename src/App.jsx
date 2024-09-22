
import gsap from 'gsap'
import './App.css'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


function App() {
  gsap.registerPlugin(ScrollTrigger) 

  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from("nav h1",{
      opacity: 0,
      duration: 1
    })
    tl.from("nav p",{
      opacity: 0,
      y: -10,
      stagger: 0.2
    })
    tl.to("nav button",{
      scale: 1.1,
      duration: 0.3
    })
    tl.to("nav button",{
      scale: 1,
      duration: 0.3
    })
    tl.from(".hero",{
      opacity: 0,
      duration: 1
    }, "-=1")  
    tl.from(".hero img",{
      opacity: 0,
      duration: 0.3
    }, "-=1")
    tl.from(".main-image",{
      opacity: 0,
      duration: 1
    }, "-=1")  
    tl.from(".main-image img",{
      opacity: 0,
      duration: 0.3
    }, "-=1")


    gsap.to(".card",{
      transform: "translateX(-200%) translateY(-2.5rem)",

      scrollTrigger: {
        trigger: ".properties",
        scroller: "body",
        pin: true,
        start: "top 0%",
        end: "bottom 50%",
        scrub: 2
      }
    })

    gsap.to("#heading",{
      transform: "translateX(-70%)",

      scrollTrigger: {
        trigger: ".properties",
        scroller: "body",
        start: "top 0%",
        end: "bottom 50%",
        scrub: 2
      }
    })


    gsap.from(".types-card",{
      opacity: 0,
      scale: 0.9,
      scrollTrigger: {
        trigger: ".types",
        scroller: "body",
        start: "top 20%",
        end: "top 100%",
        scrub: 2,
      }
    })
  })


  const cards = [
    {
      name: "Skyline Tower",
      description: "A luxurious residential building offering breathtaking views and world-class amenities.",
      address: "123 Skyline Road, Downtown, Cityville",
      price: "2 Cr onwards",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Greenwood Residency",
      description: "A peaceful and green residential complex located in the heart of the city, ideal for families.",
      address: "456 Forest Avenue, Greenfield, Cityville",
      price: "2.5 Cr onwards",
      image: "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Ocean Heights",
      description: "A modern beachfront property with spacious apartments and premium facilities for comfort.",
      address: "789 Seaside Blvd, Coastal Area, Cityville",
      price: "3 Cr onwards",
      image: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww"
    },
    {
      name: "Urban Oasis",
      description: "A stylish urban retreat with state-of-the-art infrastructure and a serene atmosphere complementing the great view.",
      address: "101 City Center Plaza, Uptown, Cityville",
      price: "1.8 Cr onwards",
      image: "https://images.unsplash.com/photo-1527772482340-7895c3f2b3f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "The Horizon Complex",
      description: "A premium residential and commercial building offering a perfect blend of comfort and business.",
      address: "202 Business Park, Skyline District, Cityville",
      price: "3.5 Cr onwards",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww"
    }
  ];




  return (
   <>

   
   <div className='w-full sticky top-0 h-screen'>
    
    <nav className='flex justify-between items-center py-8 px-12 z-0'>
      <h1 className='text-5xl text-teal-500'>
        Real<span className='text-teal-200/70'>E</span>
      </h1>
      <div className='hidden lg:flex gap-12'>
        <p>About</p>
        <p>How It Works</p>
        <p>Apartments</p>
        <p>Contact Us</p>
      </div>
      <div>
        <button className='text-white w-44 bg-teal-400 py-3 rounded-lg'>Download App</button>
      </div>
    </nav>

    <div className='hero'>
    <div className='absolute -z-1 w-full h-full bg-[radial-gradient(rgba(82,62,40,0.50)_0%,rgba(255,255,255,0.00)70%)] translate-y-32'></div>
      <div className='text-7xl uppercase px-12 pt-4 pb-4 font-light'>
      <h1>Let's find <br />
       the perfect <br />
      home</h1>
      </div>
      <div className='px-12 text-black/50'>
        <p>Discover how seamless collabration with <br /> our expert realtors makes finding your <br /> dream home a reality</p>
      </div>
    </div>

    <div className='main-image'>
    <div className='absolute lg:-top-36 top-96 scale-75'>
      <img src="House.png"  />
    </div>

    <div className='h-10 w-fit'>
      <img className='rounded-r-3xl h-40 object-none translate-y-28 border-4 border-l-0' src="apartment.jpeg"/>
    </div>

    <div>
      <img src="phone.png" className='absolute right-12 -translate-y-20'/>
    </div>

    </div>

   </div>




   <div className='properties w-full h-screen relative z-99 bg-white'>
    <div className=' whitespace-nowrap overflow-hidden relative h-full p-20'>

      <p className='relative top-[50%] text-4xl text-teal-500' id='heading'>Recommended<span className='text-teal-200'>Projects</span>
      </p>


    {cards.map(card =>{

      return (
      <div className='translate-x-[140%] -translate-y-10 card inline-block mx-10 w-80 h-full bg-transparent shadow-lg relative rounded-3xl rounded-tl-[0px] '>
      <div className='bg-white  h-24 w-24 rounded-[50%]  absolute z-99 -translate-x-10 -translate-y-10'>
      </div>
      <div className='bg-transparent h-5 w-5 absolute left-14 rounded-tl-2xl shadow-circle '>
        </div>
        <div className='bg-transparent h-5 w-5 absolute top-14 rounded-tl-2xl shadow-circle '>
        </div>


      <img className='object-cover h-[40%] w-full rounded-tr-3xl ' src={card.image} />


      <div className='p-4 relative h-[60%] w-full '>
      <p className='text-2xl pb-4 font-normal text-black'>{card.name}</p>
      <p className='text-sm text-black/45 pb-4 text-wrap'>{card.description}</p>
      <p className='pb-1'>Location</p>
      <p className='line-clamp-4 text-sm text-black/45 text-wrap '>{card.address}
      </p>
      <p className='absolute bottom-5 pl-2 text-xl font-normal'>{card.price}</p>
      </div>


    </div>)
    })}



    

    </div>

   </div>


<div className='w-full h-full z-99 relative bg-white '>
  <div className='p-5 flex justify-center items-center flex-wrap gap-48 types'>
    <div className='flex flex-col gap-10'>
    <div className='h-96 types-card w-72 bg-[#FEF5E4] rounded-xl overflow-hidden relative'>
      <p className='p-10 pb-3 text-3xl font-bold text-[#ad8c4e]'>Residential <br /> Apartments</p>
      <p className='px-10 text-black/50'>3200+ Properties</p>
    <img className='object-cover absolute bottom-0' src="Property1.webp" alt="" />
    </div>
    <div className='h-96 types-card w-72 bg-[#bae7ff] rounded-xl overflow-hidden relative'>
    <p className='p-10 pb-3 text-3xl font-bold text-[#81bcdc]'> 1 RK/ Studio <br /> Apartments</p>
    <p className='px-10 text-black/50'>3200+ Properties</p>
    <img className='object-cover absolute bottom-0' src="Property2.webp" alt="" />
    </div> 
    </div>
    <div className='flex flex-col gap-10'>
    <div className='h-96 types-card w-72 bg-[#D7F2E3] rounded-xl overflow-hidden relative'>
    <p className='p-10 pb-3 text-3xl font-bold text-[#82b89a]'>Independent <br /> House/Villa</p>
    <p className='px-10 text-black/50'>100+ Properties</p>
    <img className='object-cover absolute bottom-0' src="Property3.webp" alt="" />
    </div> 
    <div className='h-96 types-card w-72 bg-[#FEF5E4] rounded-xl overflow-hidden relative'>
    <p className='p-10 pb-3 text-3xl font-bold text-[#ae9972]'>1 RK/ Studio <br /> Apartments</p>
    <p className='px-10 text-black/50'>3200+ Properties</p>
    <img className='object-cover absolute bottom-0 w-72' src="Property4.webp" alt="" />
    </div>
    </div>
  </div>



</div>
   

<footer className='bg-gray-900 text-white py-12 relative z-99'>
  <div className='container mx-auto px-12'>
    <div className='flex flex-wrap justify-between'>
      
      {/* About Us Section */}
      <div className='w-full lg:w-1/4 mb-6 lg:mb-0'>
        <h2 className='text-lg font-semibold mb-4'>About Us</h2>
        <p className='text-sm text-gray-400'>We are a leading real estate platform dedicated to helping you find the perfect home. Our expert team provides top-notch service to guide you through every step of the process.</p>
      </div>

      {/* Contact Us Section */}
      <div className='w-full lg:w-1/4 mb-6 lg:mb-0'>
        <h2 className='text-lg font-semibold mb-4'>Contact Us</h2>
        <ul className='text-sm text-gray-400'>
          <li className='mb-2'><i className='fas fa-phone mr-2'></i> +123 456 7890</li>
          <li className='mb-2'><i className='fas fa-envelope mr-2'></i> support@realestate.com</li>
          <li><i className='fas fa-map-marker-alt mr-2'></i> 123 Real Estate Street, Cityville</li>
        </ul>
      </div>

      {/* Useful Links Section */}
      <div className='w-full lg:w-1/4 mb-6 lg:mb-0'>
        <h2 className='text-lg font-semibold mb-4'>Useful Links</h2>
        <ul className='text-sm text-gray-400'>
          <li className='mb-2'><a href='#' className='hover:text-teal-500'>About Us</a></li>
          <li className='mb-2'><a href='#' className='hover:text-teal-500'>How It Works</a></li>
          <li className='mb-2'><a href='#' className='hover:text-teal-500'>Apartments</a></li>
          <li className='mb-2'><a href='#' className='hover:text-teal-500'>Blog</a></li>
          <li><a href='#' className='hover:text-teal-500'>Contact Us</a></li>
        </ul>
      </div>

      {/* Follow Us Section */}
      <div className='w-full lg:w-1/4'>
        <h2 className='text-lg font-semibold mb-4'>Follow Us</h2>
        <div className='flex space-x-4'>
          <a href='#' className='text-gray-400 hover:text-white'><i className='fab fa-facebook fa-lg'></i></a>
          <a href='#' className='text-gray-400 hover:text-white'><i className='fab fa-twitter fa-lg'></i></a>
          <a href='#' className='text-gray-400 hover:text-white'><i className='fab fa-instagram fa-lg'></i></a>
          <a href='#' className='text-gray-400 hover:text-white'><i className='fab fa-linkedin fa-lg'></i></a>
        </div>
      </div>
    </div>

    <div className='mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500'>
      © 2024 RealEstate. All rights reserved.
    </div>
  </div>
</footer>

    


   </>
  )
}

export default App
