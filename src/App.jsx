import { useEffect, useState } from 'react'
import './App.css'
import { FaCaretSquareLeft } from "react-icons/fa";
import { FaCaretSquareRight } from "react-icons/fa";
import bleach from './assets/bleach.jpg'
import gojo from './assets/gojo.jpg'
import kaneki from './assets/kaneki.jpg'
import luffy from './assets/luffy.jpg'
import sukuna from './assets/sukuna.jpg';

function App() {
  const [images,setImages] = useState([]);
  const [indexDisplayed,setIndexDisplayed] = useState(0);
  const [isHover,setIsHover] = useState(false);

  useEffect(()=>{
    setImages([bleach,gojo,kaneki,luffy,sukuna]);
  },[])

  const handleLeftClick=()=>{
    if(indexDisplayed == 0){
      return ;
    }
    setIndexDisplayed(indexDisplayed-1)
  }
  const handleRightClick=()=>{
    if(indexDisplayed == images.length - 1){
      return ;
    }
    setIndexDisplayed(indexDisplayed+1);
  }
  useEffect(()=>{
    if(!isHover){
      if(indexDisplayed == images.length - 1){
        setTimeout(()=>{
          setIndexDisplayed(0)
        },500)
      }else{
        setTimeout(()=>{
          setIndexDisplayed(indexDisplayed+1)
        },500)
      }
    }
  },[isHover,indexDisplayed])

  

  return (
    <>
      <div className='container' onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
        <div className='image'>
          <img src={images[indexDisplayed]} alt="" />
        </div>
          <div className='left' onClick={handleLeftClick}>
            <FaCaretSquareLeft/>
          </div>
          <div className='right' onClick={handleRightClick}>
            <FaCaretSquareRight/>
          </div>

      </div>
    </>
  )
}

export default App
