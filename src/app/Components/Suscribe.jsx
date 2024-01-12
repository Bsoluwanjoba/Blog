import React from 'react'

export default function () {
  return (
    // <div style={{backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.750), rgba(0, 0, 0, 0.750)), url(/images/istockphoto-483120255-612x612.jpg)`}} className='h-[70vh] bg-cover mb-[-80px]'>
    //     <section className=' h-[350px] p-[15px] items-center ml-[300px]'>
    //         <div className='ml-[30px] mt-[50px] bg-[red] bg-opacity-70 w-[45%] p-[25px] h-[350px]'>
    //         <h2 className='text-[22px] font-semibold text-white tracking-wider'>Stay Updated!</h2>
    //      <p className='w-[90%] text-white text-[15px] mt-[10px]'>Don't miss any of our new recipes and tips anymore. Subscribe to our newsletter!</p>
    //     <form>
    //  <div className='mt-[15px]'>
    //  <input type="text" name="name" id="name" placeholder='Enter Your Name'  className='w-[80%] p-[10px] rounded'/>
    //  </div>
    //    <div className='mt-[25px]'>
    //    <input type="text" name="email" id="email" placeholder='Enter your Email address' className='w-[80%] p-[10px] rounded'/>
    //    </div>
    //    <button type="submit"  className='mt-[35px] bg-white p-1 text-[red] h-[35px] rounded font-semibold'>Suscribe Now</button>
    //  </form>
    //         </div>
    //     </section>
    // </div>
    <div className='h-[70vh] bg-cover mb-[-80px] bg-gradient-to-b from-black via-transparent to-transparent' style={{backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.750), rgba(0, 0, 0, 0.750)), url(/images/istockphoto-483120255-612x612.jpg)`}}>
    <section className='container mx-auto h-[350px] p-[15px] flex items-center md:ml-[300px]'>
      <div className='ml-[30px] mt-[110px] bg-[red] bg-opacity-70 w-full md:w-[38%] p-[25px] h-[350px]'>
        <h2 className='text-[18px] md:text-2xl font-semibold text-white tracking-wider'>Stay Updated!</h2>
        <p className='w-full md:w-[90%] text-white text-[15px] md:text-[18px] mt-[10px]'>Don't miss any of our new recipes and tips anymore. Subscribe to our newsletter!</p>
        <form className='mt-[20px]'>
          <div className='mt-[15px]'>
            <input type="text" name="name" id="name" placeholder='Enter Your Name' className='w-full md:w-[80%] p-[10px] rounded'/>
          </div>
          <div className='mt-[25px]'>
            <input type="text" name="email" id="email" placeholder='Enter your Email address' className='w-full md:w-[80%] p-[10px] rounded'/>
          </div>
          <button type="submit" className='mt-[35px] bg-white p-1 text-[red] h-[35px] rounded font-semibold'>Subscribe Now</button>
        </form>
      </div>
    </section>
  </div>
  )
}
