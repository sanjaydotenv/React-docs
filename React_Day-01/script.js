let RealDomH1 = document.createElement("h1");
console.log(RealDomH1);

let VirtualDom = React.createElement("h1", { dets: "I am Main" }, [
  React.createElement("i", {}, "Hy i am Italic"),
  React.createElement("h6", {}, "Hy i am H6"),
]);

let body = document.querySelector(".root");
ReactDOM.createRoot(body).render(VirtualDom);

console.log(VirtualDom);

import { num, Square } from "./main.js";

console.log(num);

let Result = Square(5);

console.log(Result);
