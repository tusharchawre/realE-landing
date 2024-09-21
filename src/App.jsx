
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

   
   <div className='w-full hero sticky top-0 h-screen'>
    
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




   <div className='properties w-full h-[100vh] relative z-99 bg-white'>
    <div className=' whitespace-nowrap overflow-hidden h-full p-20'>

      <p className='relative top-[50%] text-4xl' id='heading'>Recommended Projects
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


<div className='w-full h-screen z-99 relative bg-white'>

</div>
   

   </>
  )
}

export default App
