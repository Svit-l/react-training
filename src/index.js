import ReactDOM from "react-dom";

const elem1 = <span>Hellow</span>;
const elem2 = <span>world!</span>;
const jsxElem = (
  <>
    {elem1}, {elem2}
  </>
);

console.log(jsxElem);

ReactDOM.render(jsxElem, document.querySelector("#root"));
//
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
