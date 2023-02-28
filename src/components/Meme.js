import React from 'react';
import ReactDOM from 'react-dom';
import memesData from '../memesData';

export default function Meme() {
    // render meme image
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

   // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1bij.jpg")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
                    ...prevMeme,
                    randomImage: url
            }))
    }
    

    return (
      <main>
        <div className='form'>
            <input 
                className='form-input' 
                type="text" 
                placeholder='Top text' 
            />
            <input 
                className='form-input' 
                type="text" 
                placeholder='Bottom text' 
            />
            <button className='form-button' onClick={getMemeImage}>Get New Meme 🖼️</button>
        </div>
        <img src={meme.randomImage} className="meme--image" />
      </main>
    );
  }