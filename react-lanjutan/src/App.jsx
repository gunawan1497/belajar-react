import { useId } from "react";

// function Input(props) {
//   const { id } = props;
//   const inputId = id || 'input';
function Input(props) {
  const { id = 'input', label } = props;
  const inputId = useId();
  return (
    <>
      <label htmlFor="">
        <span>{label}</span>
        {/* <input type="text" id={inputId} /> */}
        <input type="text" id={`${inputId}-${id}`} />
      </label>
      <p aria-details={`${inputId}-${id}`}>Name should contain at least first name and last name</p>
    </>
  )
}

function App() {
 const inputId = useId();
  return (
    <>
      <Input type="text" id={inputId} />
      {/* <h1>Hello World</h1> */}
      <Input id="firstname"/>
      <Input id="firstname"/>
      <Input />
      <Input />
      <Input />
    </>
  )
}

export default App
