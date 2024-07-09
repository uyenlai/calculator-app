const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const display = $("#display");
const numbers = $$(".num");
const operators = $$(".operator");
const clear = $(".clear");
const result = $(".result");

const showEquations = (e) => {
  display.value += e.target.innerText;
};

const showResult = () => {
  display.value = eval(display.value);
};

const clearDisplay = () => {
  display.value = "";
};

[...numbers].map((btn) => btn.addEventListener("click", showEquations));
[...operators].map((operator) =>
  operator.addEventListener("click", showEquations)
);
clear.addEventListener("click", clearDisplay);
result.addEventListener("click", showResult);
