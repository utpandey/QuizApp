import React from 'react';
import Head from "next/head";
import {AnswerObject} from '../App';
//import './QuestionCards.css'
import { useFlip, FlipProvider } from 'react-easy-flip';
import { easeInOutQuint } from 'react-easy-flip';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';




type Props = {
    question: string;
    answer: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNo: number;
    totalQuestions: number;
}

const QuestionCards: React.FC<Props>  = ({question,
        answer,callback,totalQuestions,
        questionNo,userAnswer}) => 
        (
            
        
        <Wrapper >
        <p className="number">Question: {questionNo} / {totalQuestions}</p>
        <p className="question" dangerouslySetInnerHTML={{ __html: question}}/>
        <div className="answer">
            {answer.map(
                answer => (
                    <ButtonWrapper 
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}>
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span className="" dangerouslySetInnerHTML={{__html: answer}}></span>
                        </button>
                    </ButtonWrapper>
                )
            )}
        </div>
    </Wrapper>
   
)

export default QuestionCards;
