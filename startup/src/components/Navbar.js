import React,{useRef} from 'react'
import style from "../styles/Home.module.css"
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsivenav"
		);
 
  } ;
  
  return (
    <>

<header className={style.head}>
			<h3>LOGO</h3>
			<nav ref={navRef}  className={style.nav}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
				
         className={`${style.navbtn} ${style.navclosebtn}`}
        
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className={style.navbtn}
				onClick={showNavbar}> 
				<FaBars />
			</button>
		</header>
    </>
  )
}

export default Navbar
  