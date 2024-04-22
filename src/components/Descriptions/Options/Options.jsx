//......................ПРАЦЮЮЧИЙ ВАРІАНТ1
// export const Options = ({
//   onTrackGood,
//   onTrackNeutral,
//   onTrackBad,
//   onTrackReset,
// }) => {
//   return (
//     <>
//       <button type="button" onClick={onTrackGood}>
//         Good
//       </button>
//       <button type="button" onClick={onTrackNeutral}>
//         Neutral
//       </button>
//       <button type="button" onClick={onTrackBad}>
//         Bad
//       </button>
//       <button type="button" onClick={onTrackReset}>
//         Reset
//       </button>
//     </>
//   );
// };

export const Options = ({
  onClickGood,
  onClickNeutral,
  onClickBed,
  onClickReset,
  valueTotal,
}) => {
  return (
    <>
      <button type="button" onClick={onClickGood}>
        Good
      </button>
      <button type="button" onClick={onClickNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onClickBed}>
        Bad
      </button>
      {valueTotal >= 1 && (
        <button type="button" onClick={onClickReset}>
          Reset
        </button>
      )}
    </>
  );
};
