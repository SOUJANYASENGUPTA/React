import React from 'react';
//import Title from './Components/Title';
//import Quiz from './Components/Quiz';
//import Change from './Components/setstate';
//import Book from './Components/book';
import Watch from './Components/Watch';
const questions=[
  {
    qu:"Where was Vincent Van Gogh born?",
    an:"Netherlands ✔",
  },
  {
    qu:"What is his most notable work?",
    an:"The Starry Night(1889) ✔",
  },
  {
    qu:"What was the name of his brother?",
    an:"Theo Gogh ✔"
  },
  {
    qu:"Which movement was Vincent Van Gogh Associated with?",
    an:"Post-Impressionism ✔"
  },
  {
    qu:"Where is his famous museum located",
    an:"Amsterdam ✔"
  },
  {
    qu:"When did Van Gogh move to paris?",
    an:"1893 ✔"
  }
  
]

const bookList = [
  {
      title: "Atomic Habits",
      author: "James Clear",
      img: "https://5.imimg.com/data5/ANDROID/Default/2022/2/JV/MI/FG/147982731/product-jpeg-500x500.jpg"
  },
  {
      title: "The Road to React",
      author: "Robin Wieruch",
      img: "https://m.media-amazon.com/images/I/51EaMBdNuAL.jpg"
  },
  {
      title: "Introduction to Flight",
      author: "John D. Anderson",
      img: "https://m.media-amazon.com/images/I/81WA4bOQFbL.jpg"
  },
  {
      title: "Flight Dynamics Principles",
      author: "Michael V. Cook",
      img: "https://media.karousell.com/media/photos/products/2022/10/16/flight_dynamics_principles_isb_1665884647_7fd155f9_progressive"
  },
  {
      title: "Flexbox in CSS",
      author: "Estelle Weyl",
      img: "https://m.media-amazon.com/images/I/51kEaOLPoPL._SL500_.jpg"
  },
  {
      title: "JavaScript the Good Parts",
      author: "Douglas Crockford",
      img: "https://m.media-amazon.com/images/I/71ip1mxZ8cL.jpg"
  }
]

function App() {
  return (
    <>
      {/* <Title
        title='Vincent Van Gogh Quiz'
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br> */}
        
        {/* <ol>
            {
              questions.map((element,index) => {
                return <li key={index}><Quiz q ={element.qu} a={element.an} /> </li>
              })
              
            }
        </ol> */}
        
       {/*  <ul>
            {
              bookList.map((element,index) => {
                return <li key={index}><Book title={element.title} author={element.author} img={element.img} /> </li>
              })
              
            }
        </ul> */}
        
        <Watch/>
        
    </>
  );
}

export default App;
