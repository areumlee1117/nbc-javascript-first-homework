const today = new Date();
// new는 연산자
// console.log(typeof today); - object
const nowTime = today.getHours();

function getDate() {
  const t = nowTime;
  if (t < 10) {
    return console.log("good morning");
  } else if (t < 18) {
    return console.log("good afternoon");
  } else {
    return console.log("good evening");
  }
}

getDate();
