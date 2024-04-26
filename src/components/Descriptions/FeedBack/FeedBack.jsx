// //......................ПРАЦЮЮЧИЙ ВАРІАНТ1
// // export const FeedBack = ({ valueBad, valueNeutral, valueGood }) => {
// //   return (
// //     <>
// //       <ul>
// //         <li>Good:{valueGood}</li>
// //         <li>Neutral:{valueNeutral}</li>
// //         <li>Bad:{valueBad}</li>
// //         <li>Total:{valueGood + valueNeutral + valueBad}</li>
// //         <li>Positive:{}</li>
// //       </ul>
// //     </>
// //   );
// // };

export const FeedBack = ({ valueBad, valueNeutral, valueGood, valueTotal }) => {
  return (
    <>
      <ul>
        <li>Good:{valueGood}</li>
        <li>Neutral:{valueNeutral}</li>
        <li>Bad:{valueBad}</li>
        <li>Total:{valueTotal}</li>
        <li>Positive:{Math.round((valueGood / valueTotal) * 100)}</li>
      </ul>
    </>
  );
};
