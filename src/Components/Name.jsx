import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";

const Name = () => {
  const [hoverli, sethoveredli] = useState(0)
  const logo = [{logo:<FaInstagram/>,name:"Instagram",link:"https://www.instagram.com/pranav_negi08?utm_source=qr&igsh=MWJ5eHVwM3RnZGRkYw=="},
    {logo:<FaXTwitter/>,name:"Twitter",link:" https://x.com/pranav_negi04?t=E1eacUca0H7l9OET04NJog&s=08"},
    {logo:<CiLinkedin/>,name:"Linkedin",link:"https://www.linkedin.com/in/pranav-negi-8aab06329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
    {logo:<LuGithub/>,name:"Github",link:"https://github.com/Pranav-Negi"}]

  const Handlehover=(index) =>{
    sethoveredli(index)
  }
  return (
    <>
    <div className='flex flex-col items-start ml-48 mt-8  w-[80vw] '>
        <h3 className='text-yellow-600 text-3xl ml-6 mt-8 font-medium'>Hello,I'm</h3>
        <h1 className='text-white text-9xl ml-6 font-bold'>Pranav Negi</h1>
        <h2 className='text-gray-600 text-4xl ml-6 m-6 font-medium'> Visual Designer</h2>
        <Link to="/Contact"><button className='text-black text-[1.5rem] ml-6 mt-9  bg-yellow-400 p-3 rounded-full w-52 font-medium hover:shadow-sm hover:shadow-yellow-400 hover:translate-y-[-0.5rem] hover:ease-in duration-300'>Hire me</button></Link>
      <div className='self-end translate-y-4 pt-4 rounded-l-full'>
        <ul className='flex gap-3 mr-10' >
          {logo.map((value,index)=>(
            <a key={index} href={`${value.link}`} target="_blank" rel="noopener noreferrer">
              <li key={index}
            className={`flex text-2xl border border-white rounded-full gap-1 p-4 items-center 
            hover:transition-all ease-in-out duration-700
            ${hoverli === index ? 'w-auto' : ''} 
            `}
            onMouseEnter={()=>{Handlehover(index)}}>{value.logo}
                  <p className='text-xl'>{hoverli === index ? value.name :null}</p>
            </li></a>
          ))}
        </ul>
      </div>  
    </div>
    </>
    
  )
}

export default Name