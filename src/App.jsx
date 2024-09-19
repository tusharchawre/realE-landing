
import gsap from 'gsap'
import './App.css'
import { useGSAP } from '@gsap/react'

function App() {

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
    tl.from("img",{
      opacity: 0,
      duration: 0.3
    }, "-=1")
  })



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

   <div className='w-full h-[100vh] relative z-99 bg-white'>
    

   </div>

   

   </>
  )
}

export default App
