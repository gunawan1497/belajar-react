import React from 'react';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

// class Button extends React.Component {
//   render() {
//     return (
//       <button className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white" type="submit">Buy now</button>
//     );
//   }
// }

// function ButtonBlock() {
//   return (
//     <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">Buy now</button>
//   );
// }

// const ButtonRed = () => {
//   return (
//     <button className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white" type="submit">Buy now</button>
//   );
// }

// pindah ke folder components/Button/index.jsx
// const Button = (props) => {
//   const { children, variant = "bg-black" } = props;
//   return (
//     <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">{children}</button>
//   );
// }

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
        {/* <LoginPage/> */}
        <RegisterPage/>
    </div>
  );
}

export default App
