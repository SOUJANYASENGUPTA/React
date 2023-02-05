import React from 'react';
import Title from './Components/Title';
import Quiz from './Components/Quiz';
const questions=[
  {
    qu:"Where was Vincent Van Gogh born?",
    an:"Netherlands"
  },
  {
    qu:"What is his most notable work?",
    an:"The Starry Night(1889)"
  },
  {
    qu:"What was the name of his brother?",
    an:"Theo Gogh"
  },
  {
    qu:"Which movement was Vincent Van Gogh Associated with?",
    an:"Post-Impressionism"
  },
  {
    qu:"Where is his famous museum located",
    an:"Amsterdam"
  },
  {
    qu:"When did Van Gogh move to paris?",
    an:"1893"
  }
  
]

function App() {
  return (
    <>
      <Title
        title='Vincent Van Gogh Quiz'
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <ol>
            {
              questions.map((element,index) => {
                return <li key={index}><Quiz q ={element.qu} a={element.an} /> </li>
              })
              
            }
        </ol>
        
    </>
  );
}

export default App;
