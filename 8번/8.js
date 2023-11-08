// 스크롤을 위에서 100px 이상 내렸을 때 버튼이 나타나게 합니다.
// 스크롤이 100px 이하로 다시 올라가면 버튼이 사라집니다.

const upButton = document.querySelector(".up-button");

window.addEventListener("scroll", () => {
  console.log({ scrollY });

  if (scrollY > 100) {
    upButton.classList.add("show");
  } else {
    upButton.classList.remove("show");
  }
});
