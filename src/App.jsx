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

import "./App.css";
import { useState } from "react";
import { Descriptions } from "./components/Descriptions/Descriptions/Descriptions";
import { Options } from "./components/Descriptions/Options/Options";
import { FeedBack } from "./components/Descriptions/FeedBack/FeedBack";
import { Notification } from "./components/Notification/Notification";

export function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    console.log(feedbackType);
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const feedbackReset = () => {
    setClicks({
      ...clicks,
      good: (clicks.good = 0),
      neutral: (clicks.neutral = 0),
      bad: (clicks.bad = 0),
    });
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  console.log(clicks);
  return (
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
