// 브라우저를 새로고침 시
// 0부터 시작해 10까지 숫자가 1초에 1씩 증가하도록 만들어보세요.
// 10부터는 더 이상 숫자가 커지면 안됩니다.
// (clearInterval 도 꼭 사용해보세요)

const timer = document.querySelector(".timer");

let count = Number(timer.textContent);

const intervalid = setInterval(() => {
  console.log("실행중이니..?");
  if (count >= 0 && count < 10) {
    count = count + 1;
    timer.innerHTML = count;
  } else {
    clearInterval(intervalid);
  }
}, 1000);
