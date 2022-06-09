import {useState} from 'react'
import './Box.css'

const Box = ({ image, setProgress, id }) => {
  const [isHovering, setHovering] = useState(false);

  const handleMouseOver = () => {
    setHovering(true);
    setProgress(id);
  }

  const handleMouseOut = () => {
    setHovering(false);
    setProgress("0");
  }

  return (
    <div 
    className={isHovering ? 'boxHover' : 'box'}
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}>
      <img className="languageAnimation" src={image} alt="#"/>
    </div>
  )
}

export default Box