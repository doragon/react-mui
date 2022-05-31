import { FC, useEffect, useState } from 'react';

const Clock: FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timerID: number = window.setInterval(
      () => setDate(() => new Date()),
      1000
    );
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h1>Hello, World</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default Clock;
