import React,{useState} from 'react';
//import './App.css';
import { GlobalStyle, Wrapper } from './App.styles';
import QuestionCards from './Components/QuestionCards';
import {QuestionsState,Difficulty, fetchQuizQuestions} from './Components/API';
import Head from "next/head";
import { useFlip, FlipProvider,easeInOutQuint } from "react-easy-flip";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;
function App() {

  const [loading, setLoading] = useState(false);
  const [questions,setQuestions] = useState<QuestionsState[]>([]);
  const [number,setNumber] = useState(0);
  const [useAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [game0ver, setGameOver] = useState(true);

  //console.log(fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY))
  console.log(questions);
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!game0ver) {
      const answer = e.currentTarget.value;
      // check answer gainst the correct ans
      const correct = questions[number].correct_answer === answer;
      // add score if answer is correct
      if (correct) setScore(prev => prev + 1);
      //save answer in the array for user ans
      const answeObject = {
        question : questions[number].question,
        answer,
        correct,
        correctAnswer : questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev,answeObject]);
    }
  }

    const nextQuestion = () => {
      //ove on to the next question if not last
      const nextQuestion = number + 1;

      if(nextQuestion === TOTAL_QUESTIONS){
        setGameOver(true);
      }
      else{
        setNumber(nextQuestion);
      }
    }
    const todoItemsId = "flip-todo-items";

  useFlip(todoItemsId, {
    duration: 80,
    easing: easeInOutQuint,
  });
  return (
    <><FlipProvider>
      <GlobalStyle />
      <Wrapper>
        <h1 className="header">REACT QUIZ</h1>
        {game0ver || useAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia} >
            <span className="visible">Start</span>
            <span className="invisible">Ready?!</span>
          </button>
        ) : null}
      
        {!game0ver ? <p className="score">Score: {score}</p> : null}
        {loading && <p className="loading">Loading Questions....</p>}
        {!loading && !game0ver && (
            <QuestionCards
            data-flip-root-id={todoItemsId}
            questionNo={number + 1}
            answer={questions[number].answers}
            callback={checkAnswer}
            question={questions[number].question}
            totalQuestions={TOTAL_QUESTIONS}
            userAnswer={useAnswers ? useAnswers[number]: undefined}
          />
        )}
        
        {!game0ver && !loading && useAnswers.length === number + 1 && number!== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            <span className="visible">Next Question</span>
            <span className="invisible">Let's Gooo!!</span>
          </button>
        ) : null}
    </Wrapper>
    </FlipProvider>
    </>
  );
}

export default App;
