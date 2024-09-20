import React from 'react'

export const About = () => {
    const information =[{Desig:'Birthday', info:'May 07,1990'},
        {Desig:'Phone',info:9871082792},
        {Desig:'Email', info:'Pranav.negi04@gmail.com'},
        {Desig:'from',info:'Delhi'},
        {Desig:'Language',info:'English, Hindi'},
    ]
  return (
    <>

    <div className=' flex fixed w-[100vw] h-[6rem] justify-center m-4'>
        <h1 className='self-center text-8xl relative' style={{'color':'rgb(16 25 47)'}}>ABOUT ME</h1>
        <p className='flex flex-col absolute text-4xl text-yellow-500 border-b p-2 after:border-b-2 after:border-yellow-600 after:w-36 after:ml-5 '>ABOUT ME</p>     
    </div>
    <div  className='flex mt-[8rem]  ml-[30vw] gap-6 '>   
         <div className=' w-[20rem]'><img src="./images/me_1.png" alt="img soon" className=' brightness-50 ' /></div>
            <div className='h-auto w-[30rem] flex flex-col gap-3'>
                <h4 className='text-3xl '>Hi There! i'm Pranav Negi</h4>
                <h4 className='text-2xl text-yellow-600'>VIsual designer</h4>
                <p className='text-[#666b6f]'>I am a Visual Designer with a strong focus on digital branding. Visual design seeks to attract, inspire, create desires and motivate people to respond to messages, with a view to making a favorable impact.</p>
                <ul className='flex flex-col w-96 justify-between gap-3'>
                        {information.map((value,index)=>(
                            <li key={index} className='text-[#666b6f] '>{value.Desig} : {value.info}</li>
                        ))}
                </ul>
                <a href="Resume.pdf" download="my_cv.pdf"><button className='mt-4 self-start p-3 text-black bg-yellow-500 rounded-3xl text-[1rem] hover:shadow-sm hover:shadow-yellow-400 hover:translate-y-[-0.5rem] hover:ease-in duration-300'>Download CV</button></a>
            </div>
            
    </div>
    </>
  )
}
