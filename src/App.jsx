//......................ПРАЦЮЮЧИЙ ВАРІАНТ1
// import "./App.css";
// import { useState } from "react";
// import { Descriptions } from "./components/Descriptions/Descriptions/Descriptions";
// import { Options } from "./components/Descriptions/Options/Options";
// import { FeedBack } from "./components/Descriptions/FeedBack/FeedBack";

// export function App() {
//   const [clicks, setClicks] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });
//   const handClickGood = () => {
//     setClicks({
//       ...clicks,
//       good: clicks.good + 1,
//     });
//   };

//   const handClickNeutral = () => {
//     setClicks({
//       ...clicks,
//       neutral: clicks.neutral + 1,
//     });
//   };
//   const handClickBad = () => {
//     setClicks({
//       ...clicks,
//       bad: clicks.bad + 1,
//     });
//   };
//   const handClickReset = () => {
//     setClicks({
//       ...clicks,
//       good: (clicks.good = 0),
//       neutral: (clicks.neutral = 0),
//       bad: (clicks.bad = 0),
//     });
//   };

//   console.log(clicks);
//   return (
//     <>
//       <Descriptions />
//       <Options
//         onTrackGood={handClickGood}
//         onTrackNeutral={handClickNeutral}
//         onTrackBad={handClickBad}
//         onTrackReset={handClickReset}
//       />
//       <FeedBack
//         valueGood={clicks.good}
//         valueNeutral={clicks.neutral}
//         valueBad={clicks.bad}
//       />
//     </>
//   );
// }

// export default App;

// import clsx from "clsx";

// ................................. ПРАЦЮЮЧИЙ ВАРІАНТ БЕЗ ЗБЕРЕЖЕННЯ ДАННИХ МІЖ СТОРІНКАМИ

// import "./App.css";
// import { useState } from "react";
// import { useEffect } from "react";
// import { Descriptions } from "./components/Descriptions/Descriptions/Descriptions";
// import { Options } from "./components/Descriptions/Options/Options";
// import { FeedBack } from "./components/Descriptions/FeedBack/FeedBack";
// import { Notification } from "./components/Notification/Notification";

// export function App() {
//   const [clicks, setClicks] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   useEffect(() => {
//     window.localStorage.setItem("feedback", JSON.stringify(clicks));
//   }, [clicks]);

//   const updateFeedback = (feedbackType) => {
//     console.log(feedbackType);
//     setClicks({
//       ...clicks,
//       [feedbackType]: clicks[feedbackType] + 1,
//     });
//   };

//   const feedbackReset = () => {
//     setClicks({
//       ...clicks,
//       good: (clicks.good = 0),
//       neutral: (clicks.neutral = 0),
//       bad: (clicks.bad = 0),
//     });
//   };

//   const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
//   console.log(clicks);
//   return (
//     <>
//       <Descriptions />
//       <Options
//         onClickGood={() => updateFeedback("good")}
//         onClickNeutral={() => updateFeedback("neutral")}
//         onClickBed={() => updateFeedback("bad")}
//         onClickReset={feedbackReset}
//         valueTotal={totalFeedback}
//       />
//       {totalFeedback >= 1 ? (
//         <FeedBack
//           valueTotal={totalFeedback}
//           valueGood={clicks.good}
//           valueNeutral={clicks.neutral}
//           valueBad={clicks.bad}
//         />
//       ) : (
//         <Notification />
//       )}
//     </>
//   );
// }

// export default App;

import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { Descriptions } from "./components/Descriptions/Descriptions/Descriptions";
import { Options } from "./components/Descriptions/Options/Options";
import { FeedBack } from "./components/Descriptions/FeedBack/FeedBack";
import { Notification } from "./components/Notification/Notification";

export function App() {
  // State Initialization with Local Storage:
  // Стан useState.
  // Початковий стан встановлюється на значення, отримане з локального сховища за ключем "feedback".
  // Якщо в локальному сховищі не знайдено жодних даних, початковий стан встановлюється на об’єкт із властивостями good, neutral і bad, усі ініціалізуються на 0.
  // Це гарантує збереження даних зворотного зв’язку між перезавантаженнями сторінки.
  const [clicks, setClicks] = useState(() => {
    const storedClicks = JSON.parse(window.localStorage.getItem("feedback"));
    return storedClicks || { good: 0, neutral: 0, bad: 0 };
  });

  // Ефект для оновлення локального сховища:
  //Хук useEffect використовується для оновлення локального сховища кожного разу, коли змінюється стан кліків.
  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(clicks));
  }, [clicks]);
  // Функції для оновлення відгуків
  // Функція updateFeedback визначена для обробки оновлення кількості відгуків на основі типу наданого відгуку. Він приймає параметр feedbackType і збільшує відповідну властивість в об’єкті стану кліків на 1.
  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };
  // Функція feedbackReset скидає всі підрахунки відгуків до 0
  const feedbackReset = () => {
    setClicks({
      ...clicks,
      good: (clicks.good = 0),
      neutral: (clicks.neutral = 0),
      bad: (clicks.bad = 0),
    });
  };
  // Змінна totalFeedback обчислює загальну кількість записів відгуків шляхом підсумовування значень
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  console.log(clicks);
  return (
    // Rendering Components
    <>
      <Descriptions />
      <Options
        onClickGood={() => updateFeedback("good")}
        onClickNeutral={() => updateFeedback("neutral")}
        onClickBed={() => updateFeedback("bad")}
        onClickReset={feedbackReset}
        valueTotal={totalFeedback}
      />
      {totalFeedback >= 1 ? (
        <FeedBack
          valueTotal={totalFeedback}
          valueGood={clicks.good}
          valueNeutral={clicks.neutral}
          valueBad={clicks.bad}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
