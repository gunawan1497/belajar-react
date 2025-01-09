import React from 'react';
import Button from './components/Elements/Button';

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
    <>
      <div className="flex justify-center min-h-screen items-center">
          <div className="w-full max-w-xs">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
            <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details</p>
            <form action="">
              <div className="mb-6">
                <label htmlFor="email" className="block text-slate-700 text-sm font-bold mb-2">Email</label>
                <input type="text" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" placeholder="example@mail.com" />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-slate-700 text-sm font-bold mb-2">Password</label>
                <input type="password" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" placeholder="*******" />
              </div>
              <Button classname="bg-blue-600 w-full">Login</Button>
            </form>
          </div>
      </div>
    </>
  );
}

export default App
