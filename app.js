// 간단한 콘솔 출력
console.log("Hello from app.js");

// DOM에 간단히 찍기 (index.html에 script로 연결됨)
document.addEventListener("DOMContentLoaded", () => {
  const p = document.createElement("p");
  p.textContent = "JS가 정상적으로 로드되었습니다.";
  document.body.appendChild(p);
});
