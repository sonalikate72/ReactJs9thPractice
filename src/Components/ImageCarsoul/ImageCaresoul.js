import React, { useState } from 'react'

const ImageCaresoul = () => {
    const images= [
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6efff5ca78a15dc3.jpg?q=20",
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/45491294b0d546c4.jpg?q=20",
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/3c0e1e3aca8b3c9d.jpg?q=20",
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4373e1bc9ffd7daa.jpeg?q=20",
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5bd9c5c309353306.jpeg?q=20"
    ]

    const [currentImage,setCurrentImage] = useState(0)

    const onPrev = () =>{
        const nextIndex = currentImage - 1
        setCurrentImage(nextIndex == -1 ? 3:nextIndex)
    }
    const onNext = () =>{
        const nextIndex = currentImage + 1
        setCurrentImage(nextIndex == 4 ? 0:nextIndex)
    }

  return (
    <div>
      {/* {images.map((imgurl)=>{
            return <img src={imgurl} style={{width:"100px"}}></img>
      })
    } */}
    <button onClick={onPrev}>Prev</button>
    <div class="contain-carousel">
    <img src={images[currentImage]} style={{width:"100px; position: fixed;"}}></img>
    </div>
    <button onClick={onNext}>Next</button>
    </div>



  )
}

export default ImageCaresoul