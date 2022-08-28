import React, {useState} from "react";

function App() {
  const questions = [
    {
        question:"What is the name of the fictional town in Stranger Things?",
        options:[
          {answer:"Gawkins", isCorrect:false},
          {answer:"Hawkins", isCorrect:true},
          {answer:"Lawkins", isCorrect:false},
          {answer:"Dawkins", isCorrect:false}
        ],
    },
    {
      question:"Who cracks the russian code coming from Dustin's radio?",
      options:[
        {answer:"Steve", isCorrect:false},
        {answer:"Nancy", isCorrect:false},
        {answer:"Hopper", isCorrect:false},
        {answer:"Robin", isCorrect:true}
      ],
    },
 
    {
      question:"What is the name of Luca's sister ?",
      options:[
        {answer:"Erica", isCorrect:true},
        {answer:"Rose", isCorrect:false},
        {answer:"Adela", isCorrect:false},
        {answer:"Mel", isCorrect:false}
      ],
    },

    {
      question:"The parallel dimension inhabited by the demogorgan is reffered to as?",
      options:[
        {answer:"The Down Under", isCorrect:false},
        {answer:"The Upside World", isCorrect:false},
        {answer:"The Upside Down", isCorrect:true},
        {answer:"The Down World", isCorrect:false}
      ],
    },

    {
      question:"Which character is played by Millie Bobby Brown in Stranger Things?",
      options:[
        {answer:"Max", isCorrect:false},
        {answer:"Nancy", isCorrect:false},
        {answer:"Erica", isCorrect:false},
        {answer:"Eleven", isCorrect:true}
      ],
    },
 ];

 const [currentQue, setCurrentQue] = useState(0);
	const [displayScore, setDisplayScore] = useState(false);
	const [score, setScore] = useState(0);
  const [previousScore, setPreviousScore] = useState(0);

	const handleAnswerClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
	
		if (currentQue < questions.length-1) {
			setCurrentQue(currentQue+1);
		} else {
			setDisplayScore(true);
		}
	};
  function handleRetryClick(){
    setCurrentQue(0);
    setDisplayScore(false);
    setScore(0);
    setPreviousScore(score);
  }

 return (
  <div className='app'>
    {displayScore ? (
      <div className='score-section'>
        You scored {score} out of {questions.length}
        <div>Your Previous score:{previousScore}</div>
        <div><button onClick={handleRetryClick}>Retry</button></div>
      </div>
    ) : (
      <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQue + 1}</span>/{questions.length}
          </div>
          <div className='question-text'>{questions[currentQue].question}</div>
        </div>
        <div className='answer-section'>
          {questions[currentQue].options.map((option) => (
            <button onClick={() => handleAnswerClick(option.isCorrect)}>{option.answer}</button>
          ))}
        </div>
      </>
    )}
  </div>
);

}

export default App;