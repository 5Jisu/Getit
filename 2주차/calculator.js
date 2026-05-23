// 입력값 가져오기 함수
function getNumbers() {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    return [a, b];
} 

/* ===== 기본 사칙연산 (강의 중 함께 구현) ===== */
const add = () => {
    const [a, b] = getNumbers();
    alert(`결과: ${a + b}`);
};
const subtract = () => {
    const [a, b] = getNumbers();
    alert(`결과: ${a - b}`);
};
/* ===== 과제: 곱하기, 나누기 연산 기능 구현 ===== */
const multiply = () => {
    const [a, b] = getNumbers();
    alert(`결과: ${a * b}`);
};
const divide = () => {
    const [a, b] = getNumbers();
    if (b === 0) {
        alert("오류: 0으로 나눌 수 없습니다.");
    } else {
        alert(`결과: ${a / b}`);
    }
}

/* ===== 이벤트 연결 ===== */
document.getElementById("addBtn").onclick = add;
document.getElementById("subtractBtn").onclick = subtract;
document.getElementById("multiplyBtn").onclick = multiply;
document.getElementById("divideBtn").onclick = divide;
