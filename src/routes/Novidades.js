import './Novidades.css'
import spider from './Assets/sp2.png'
import tekken from './Assets/tekken.jpg'
import bd3 from './Assets/bd3.jpg'
import alan from './Assets/Alan2.jpg'
import yakuza from './Assets/yakuza.jpg'
import { useState,useEffect } from 'react'



const Novidades = () => {
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
    <div>
      <div className='titulo1'>
          
        <h1>Novidades</h1>
      
      </div>
      <div className={tamanho === 1 ?'quadros2':'quadros'}>
        <h1 style={{paddingTop: 20}}>SPIDER-MAN 2</h1>
        <img className='imagens'src={spider} alt='Spider-man 2'></img>
        <h2>R$270,00</h2>
        <input className='botao' type='submit' name='acao' value='Comprar'/>
    

      </div>
      <div className={tamanho === 1 ?'quadros2':'quadros'}>
        <h1 style={{paddingTop: 30}}>BALDUR'S GATE 3</h1>
        <img className='imagens'src={bd3} alt='Baldur`s Gate 3'></img>
        <h2>R$270,00</h2>
        <input className='botao' type='submit' name='acao' value='Comprar'/>
    

      </div>
      <div className={tamanho === 1 ?'quadros2':'quadros'}>
        <h1>TEKKEN 8</h1>
        <img className='imagens'src={tekken} alt='Tekken 8'></img>
        <h2>R$270,00</h2>
        <input className='botao' type='submit' name='acao' value='Comprar'/>
    

      </div>
      <div className={tamanho === 1 ?'quadros2':'quadros'}>
        <h1>ALAN WAKE 2</h1>
        <img className='imagens'src={alan} alt='Alan Wake 2'></img>
        <h2>R$270,00</h2>
        <input className='botao' type='submit' name='acao' value='Comprar'/>
    

      </div>
      <div className={tamanho === 1 ?'quadros2':'quadros'}>
        <h1>LIKE A DRAGON GAIDEN</h1>
        <img className='imagens'src={yakuza} alt='Yakuza'></img>
        <h2>R$270,00</h2>
        <input className='botao' type='submit' name='acao' value='Comprar'/>
    

      </div>
    </div>
  )
}

export default Novidades