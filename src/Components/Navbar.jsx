import React ,{ useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [active, setactive] = useState(null)
    const element = ['Home' , 'About',"Contact","|","pranav.negi04@gmail.com"]
    const handleclick =(index) =>{
        setactive(index)
        console.log(setactive)
    }
  return (
    <nav className="flex justify-around border border-[#282d38] backdrop-blur-SM ">
        <div>
            <img src="" alt="Image" />
        </div>
        <div className='cursor-pointer'>
            <ul className="flex gap-5 text-[20px] ">
            {element.map((item,index)=>(
                <Link key={index} to={`/${item}`}>
                <li onClick={handleclick}
                className={`p-2 ${active === index ? ' text-yellow-500':' hover:text-yellow-500 border-b-5 active:text-yellow-500 '}`}>{item}</li>
                </Link>
            ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar