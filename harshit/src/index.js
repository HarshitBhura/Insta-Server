import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function hello()
{
  return (
    <div>
      <h1>Hello Guys</h1>
      <p>this is a react class</p>
      <button className="btn">Apple</button>
      <button className="btn">Banana</button>
      <button className="btn">Mango</button>
    </div>
  )
}
hello();

//jsx
function Hello()  // it is component not afunction
{
  return <h1>Hello</h1>
}

ReactDOM.render(<Hello></Hello>,document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
