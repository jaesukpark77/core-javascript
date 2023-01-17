import { getNode } from "../dom/getNode.js";

const first = getNode('.first');

console.log(first);

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    first.style.transform = 'rotate(360deg)';
    delay(()=>{
      first.style.top = '0px';
    })
  })
})
