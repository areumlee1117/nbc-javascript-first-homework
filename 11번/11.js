const today = new Date();
// const nowDay = today.toLocaleTimeString();
const nowDay = today.getHours();

function getDate() {
  if (nowDay < 10) {
    console.log("good morning");
  } else if (nowDay < 18) {
    console.log("good afternoon");
  } else {
    console.log("good evening");
  }
}

getDate();
