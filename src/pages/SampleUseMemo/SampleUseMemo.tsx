import React, { useMemo, useState } from 'react';

const highCostProcessing = (inputValue: number) => {
  let caliculateValue = Number(inputValue);
  for (let i = 0; i < 1000; i += 1) {
    caliculateValue += 1;
  }
  // console.log('Finished');
  return caliculateValue;
};

const SampleUseMemo: React.FC = () => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  // Usage
  const memorizedValue = useMemo(() => highCostProcessing(value), [value]);

  return (
    <>
      <div>{memorizedValue}</div>
      <input
        type="text"
        onChange={(e) => {
          const v = e.target.value;
          if (v === null) return;
          setValue(Number(v));
        }}
      />
      <button type="button" onClick={() => setCount(count + 1)}>
        更新する
      </button>
    </>
  );
};

export default SampleUseMemo;
