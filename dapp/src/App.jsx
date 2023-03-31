import { useState } from 'react';
// use 들어가면 훅스? 라고 부르는데 파악하지않아도된다..

const App = () => {
  const [count, setCount] = useState(0);
  // count , setCount , useState 의 역할을 알면된다. gpt한테 물어보고 복습해야할듯

  const onClickAdd = () => {
    setCount(count + 1);
  };

  const onClickSub = () => {
    if (count <= 0) {
      alert('count의 값이 0보다 작을 수 없습니다.');
      return;
    }

    setCount(count - 1);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div>{count}</div>
      <button
        className="bg-green-300 w-12 h-12 rounded-full"
        onClick={onClickAdd}
      >
        +
      </button>

      <button
        className="bg-red-300 w-12 h-12 rounded-full"
        onClick={onClickSub}
      >
        -
      </button>
    </div>
  );
};

export default App;
