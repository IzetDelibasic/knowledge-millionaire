import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Who is the author of the book 'To Kill a Mockingbird'? ",
      answers: [
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "Harper Lee",
          correct: true,
        },
        {
          text: " William Shakespeare",
          correct: false,
        },
        {
          text: "J.K. Rowling",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which planet is closest to the Sun? ",
      answers: [
        {
          text: "Venus",
          correct: true,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the capital city of France? ",
      answers: [
        {
          text: "London",
          correct: false,
        },
        {
          text: "Rome",
          correct: false,
        },
        {
          text: "Madrid",
          correct: false,
        },
        {
          text: "Paris",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which river flows through Egypt? ",
      answers: [
        {
          text: "Nile",
          correct: true,
        },
        {
          text: "Amazon",
          correct: false,
        },
        {
          text: "Mississippi",
          correct: false,
        },
        {
          text: "Volga",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of these gases is the most abundant in Earth's atmosphere? ",
      answers: [
        {
          text: "Oxygen",
          correct: false,
        },
        {
          text: "Hydrogen",
          correct: false,
        },
        {
          text: "Helium",
          correct: false,
        },
        {
          text: "Nitrogen",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Who wrote the play 'Romeo and Juliet'? ",
      answers: [
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "William Shakespeare",
          correct: true,
        },
        {
          text: "Jane Austen",
          correct: false,
        },
        {
          text: "Mark Twain",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which of these is the smallest ocean in the world? ",
      answers: [
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Arctic Ocean",
          correct: true,
        },
        {
          text: "Pacific Ocean",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who has won the most Grand Slam tennis tournaments in men's singles? ",
      answers: [
        {
          text: "Rafael Nadal",
          correct: false,
        },
        {
          text: "Novak Djokovic",
          correct: true,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Pete Sampras",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which country is hosting the 2022 FIFA World Cup? ",
      answers: [
        {
          text: "Brazil",
          correct: false,
        },
        {
          text: "France",
          correct: false,
        },
        {
          text: "Qatar",
          correct: true,
        },
        {
          text: "Germany",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which planet is known as the 'Morning Star' and the 'Evening Star'? ",
      answers: [
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
        {
          text: "Venus",
          correct: true,
        },
        {
          text: "Mercury",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who wrote the novel '1984'? ",
      answers: [
        {
          text: "George Orwell",
          correct: true,
        },
        {
          text: "Aldous Huxley",
          correct: false,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: false,
        },
        {
          text: "Ernest Hemingway",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which country is the largest by land area? ",
      answers: [
        {
          text: "Russia",
          correct: true,
        },
        {
          text: "China",
          correct: false,
        },
        {
          text: "United States",
          correct: false,
        },
        {
          text: "Canada",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which river flows through Rome? ",
      answers: [
        {
          text: "Nile",
          correct: false,
        },
        {
          text: "Tisza",
          correct: false,
        },
        {
          text: "Thames",
          correct: false,
        },
        {
          text: "Tiber",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Who is the author of the book 'The Great Gatsby'? ",
      answers: [
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "William Faulkner",
          correct: false,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: true,
        },
        {
          text: "Ernest Hemingway",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who was the first person to set foot on the Moon? ",
      answers: [
        {
          text: "Yuri Gagarin",
          correct: false,
        },
        {
          text: "John Glenn",
          correct: false,
        },
        {
          text: "Neil Armstrong",
          correct: true,
        },
        {
          text: "Buzz Aldrin",
          correct: false,
        },
      ],
    },

  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;