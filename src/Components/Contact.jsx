import React,{ useRef , useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";

import emailjs from '@emailjs/browser';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
  const [hoverli, sethoveredli] = useState(0)
  const info =[{
    logo:<MdOutlineMail/>,
    name:"Email",
    Adr:"pranav.negi04@gmail.com"
  },
  {
    logo:<FaPhoneAlt/>,
    name:"Phone",
    Adr:"91+ 9871082792"
  },
  {
    logo:<FaLocationDot/>,
    name:"Address",
    Adr:"Delhi"
  }]  
  const logo = [{logo:<FaInstagram/>,name:"Instagram",link:"https://www.instagram.com/pranav_negi08?utm_source=qr&igsh=MWJ5eHVwM3RnZGRkYw=="},
    {logo:<FaXTwitter/>,name:"Twitter",link:" https://x.com/pranav_negi04?t=E1eacUca0H7l9OET04NJog&s=08"},
    {logo:<CiLinkedin/>,name:"Linkedin",link:"https://www.linkedin.com/in/pranav-negi-8aab06329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
    {logo:<LuGithub/>,name:"Github",link:"https://github.com/Pranav-Negi"}]

    const Handlehover=(index) =>{
      sethoveredli(index)
    }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ynxmzg4', 'template_3t8v5ji', form.current, {
        publicKey: 'yIXiVoWJmIFc1Wmx7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      form.current.reset();
      alert("info send")
  };
  return (
      <>

      <div className=' flex fixed w-[100vw] h-[6rem] justify-center m-4'>
          <h1 className='self-center text-8xl relative' style={{'color':'rgb(16 25 47)'}}>CONTACT</h1>
        <p className='flex flex-col absolute text-4xl text-yellow-500 border-b p-2 after:border-b-2   after:border-yellow-600 after:w-36 after:ml-5 '>CONTACT</p>     
      </div>

    <div  className='flex mt-[8rem] w-[11vw] ml-[27vw] '>   
      <div className=' flex flex-col'>
        <h1 className='text-4xl ml-7'>Just say hello</h1>
        <form ref={form} onSubmit={sendEmail} className='m-3'>
          <div className='m-3 flex flex-col gap-4 p-2 bg-inherit'>

          <input 
          type="text" 
          name="user_name" 
          placeholder='name'
          className='bg-[#101624] border-[#101624] rounded-md p-2 w-[20rem]'/>
          <input type="email" 

          name="user_email" 
          placeholder='email' 
          className='bg-[#101624] border-[#101624] rounded-md p-2 w-[20rem]'/>

          <input 
          type="text" 
          name="user_email" 
          placeholder='subject' 
          className='bg-[#101624] border-[#101624]  rounded-md p-2 w-[20rem]'/>

          <textarea 
          name="message" 
          placeholder='message' 
          className='bg-[#101624] border-[#101624] rounded-md p-2 w-[20rem]'/>
          </div>

          <input 
          type="submit" 
          value="Send message" 
          className='mt-4 ml-3 self-start p-3 text-black bg-yellow-500 rounded-3xl text-[1rem] hover:shadow-sm hover:shadow-yellow-400 hover:translate-y-[-0.5rem] hover:ease-in duration-300'/>
        </form>
        </div> 

        <div className='w-[20rem] mr-64'>
          <div>
            <h1 className='text-4xl'>Contact info</h1>
            <p className='text-[20px] mt-2'>You can also contact me through my socials</p>
          </div>
          <div>
            <ul className='flex flex-col gap-5 mt-5 '>
                {info.map((values,index)=>(
                    <li key={index} 
                    className='flex  gap-5 items-center hover:border-yellow-500'>
                      <aside className='text-2xl border-2 rounded-full p-3 '>{values.logo}</aside>
                      <span className='p-2'><h1 className='text-[20px] '>{values.name}</h1>
                      <p className='text-[#A9ADB8] cursor-pointer'>{values.Adr}</p></span>
                      </li>
                ))}
              </ul>
          </div>

        <div className='pt-6 rounded-l-full '>
          <ul className='flex gap-3 mr-10 ' >
          {logo.map((value,index)=>(
            <a key={index} href={`${value.link}`} target="_blank" rel="noopener noreferrer">
              <li key={index}
            className={`flex text-2xl border border-white rounded-full gap-1 p-4 items-center 
            hover:transition-all ease-in-out duration-700
            ${hoverli === index ? 'w-auto' : 'w-15'} 
            `}
            onMouseEnter={()=>{Handlehover(index)}}>{value.logo}
                  <p className='text-xl'>{hoverli === index ? value.name :null}</p>
            </li></a>
          ))}
           </ul>
          </div>  
        </div>
    </div>
      </>
    
  );
};
  

export default Contact