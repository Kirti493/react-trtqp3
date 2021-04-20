import React, { useState, useEffect } from "react";
import "./style.css";
import FlashcardList from "./FlashcardList";
import axios from "axios";

export default function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10');
      .then(res => {
        res.data.results.map((questionItem, index) => {
          
          return {
            id: `${index}-${Date.now()}`,
            questions: questionItem.question,
            answer: questionItem.correct_answer,
            options: 
          }
        })
      })
  }, []);

  return <FlashcardList flashcards={flashcards} />;
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2+2?",
    answer: "4",
    options: ["2", "3", "4", "5"]
  },
  {
    id: 2,
    question: "Question 2?",
    answer: "Answer",
    options: ["Answer", "Answer 1", "Answer 2", "Answer 3"]
  }
];
