import { useState, useEffect } from 'react'
import './App.css'
import Cards from './Cards.jsx'

const cardDetails = [
  {"img":"././albert_profile.jpg" , "cardId":1,"matched":false},
  { "img":"././alberta_profile.jpg" , "cardId":2,"matched":false},
  {"img":"././swamp.jpg" , "cardId":3,"matched":false},
  {"img":"././gators-logo.jpg" , "cardId":4,"matched":false},
  {"img":"././century-tower-profile.jpg" , "cardId":5,"matched":false},
  {"img":"././marston-frenchfries.jpg" , "cardId":6,"matched":false},
  {"img":"././albert_profile.jpg" , "cardId":7,"matched":false},
  { "img":"././alberta_profile.jpg" , "cardId":8,"matched":false},
  {"img":"././swamp.jpg" , "cardId":9,"matched":false},
  {"img":"././gators-logo.jpg" , "cardId":10,"matched":false},
  {"img":"././century-tower-profile.jpg" , "cardId":11,"matched":false},
  {"img":"././marston-frenchfries.jpg" , "cardId":12,"matched":false},
]
function App() {
  
  const [count, setCount] = useState(0)
  const[card,setCard]=useState([])
  const [firstChoice,setFirstChoice]=useState(null)
  const [secondChoice,setSecondChoice]=useState(null)
  const [score,setScore]=useState(0)
  function handleChange(){
    const cardsArray=[...cardDetails].sort(()=>Math.random()-0.5)
    setCard(cardsArray)
    setFirstChoice(null)
    setSecondChoice(null)
    setScore(0)
  }
  function handleChoice(card){
    if(firstChoice){
       if(card!=firstChoice){
        setSecondChoice(card)
       }
    }
    else{
      setFirstChoice(card)
    }
    // firstChoice?setSecondChoice(card):setFirstChoice(card)
    // console.log(firstChoice,secondChoice)
  }

  useEffect(()=>{
    if(firstChoice && secondChoice){
      if (firstChoice.img===secondChoice.img){
        setCard(cards =>{
          return cards.map(card =>{
            if(firstChoice.img===card.img){
              return {...card,matched:true}
            }
            else{
              return card
            }
          })
        })
      }
      else{
        
      }

      setTimeout(() => {
        setFirstChoice(null)
        setSecondChoice(null)
        setScore(prevScore=>prevScore+1)
      }, 1000)
      
    }
  },
    [firstChoice,secondChoice])
 
    // console.log(score)
  return (
    <div>
           <div className='button-and-score'>
          <button onClick={handleChange}>New Game</button>
          <div className='score'><h3>Flips: {score}</h3></div>
          </div>
          <div className='card-container'>
            { 
              card.map(card=>(
                <Cards  key={Math.random()}
                 card={card}
                 handleChoice={handleChoice}
                 flip={firstChoice===card||secondChoice===card||card.matched===true}/>
              ))
             }
          </div>
      </div>
  )
}

export default App
