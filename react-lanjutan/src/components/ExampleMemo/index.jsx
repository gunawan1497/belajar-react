import { memo, useState } from "react";

// const TodoList = (props) => {
//   const { todos } = props;
//   // console.log(todos);  
//   console.log('call todolist');  
//   return (
//     <>
//       <h2>My Todos</h2>
//       {todos.map((todo, index) => {
//         return <p key={`${todo}-${index}`}>{todo}</p>
//       })}
//     </>
//   );
// };

const TodoList = memo((props) => {
  // const { todos, count } = props;
  const { todos } = props;
  // console.log(todos);  
  console.log('call todolist');  
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={`${todo}-${index}`}>{todo}</p>
      })}
      {/* <p>Count: {count}</p> */}
    </>
  );
},
// () => true,
// () => false,
);

// TodoList.displayName = 'TodoList';

// const Counter = (props) => {
//   const { count } = props;
//   console.log('call counter');  
//   return <p>Count: {count}</p>;
// };
const Counter = memo ((props) => {
  const { count } = props;
  console.log('call counter');  
  return <p>Count: {count}</p>;
});

// Counter.displayName = 'Counter';

function ExampleMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['Dev', 'Build']);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <>
      {/* <TodoList todos={todos} count={count}/> */}
      <TodoList todos={todos}/>
      <button onClick={() => addTodo('Playing Football')}>Add Todo</button>
      {/* <p>Count: {count}</p> */}
      <Counter count={count}/>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default ExampleMemo;
