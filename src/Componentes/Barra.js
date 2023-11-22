import { Link,NavLink } from "react-router-dom"
import "./Barra.css";
import { FaHouse } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import {useState,useEffect} from 'react'
import { FiPhone } from "react-icons/fi";


const Barra = () => {
    const [tamanho,setTamanho] = useState(2)
    useEffect(() => {
  
      function Redimen(){
        if(window.innerWidth < 720){
          setTamanho(1);
        }else{
          setTamanho(2);
        }
      }
      Redimen();
  
      window.addEventListener("resize",Redimen)
  
      return() =>{
        window.removeEventListener("resize", Redimen)
  
      }
    })

  return (
    <div className="nave">
        <nav className="nav">
            <ul className={tamanho === 1? "na2":"na"}>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? "ativo" : "normal")}><FaHouse/></NavLink>
                </li>
                <li>
                    <NavLink to="/Novidades" className={({isActive}) => (isActive ? "ativo" : "normal")}><FaRegStar/></NavLink>
                </li>
                <li>
                    <NavLink to="/Contato" className={({isActive}) => (isActive ? "ativo" : "normal")}><FiPhone /></NavLink>
                </li>
            </ul>           
        </nav>
    </div>
  )
}

export default Barra