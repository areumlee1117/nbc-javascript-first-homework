const number = document.querySelectorAll(".number");

for (let i = 0; i < number.length; i++) {
  // parseInt() 문자열에서 숫자를 추출하기 위한 함수
  // <-> toString() 무조건 문자열로 반환하는 함수
  let nowNumber = parseInt(number[i].innerHTML);
  let newNumber = nowNumber + 10;
  number[i].innerHTML = newNumber;
}
