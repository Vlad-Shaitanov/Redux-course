import './styles.css';

//Первоначальное состояние счетчика на странице
let state = 0;

const counter = document.querySelector("#counter");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const asyncBtn = document.querySelector("#async");
const themeBtn = document.querySelector("#theme");


const render = () => {
	counter.textContent = state;
};

addBtn.addEventListener("click", () => {
	state++;
	render();
});

subBtn.addEventListener("click", () => {
	state--;
	render();
});

asyncBtn.addEventListener("click", () => {
	const timeout = setTimeout(() => {
		state++;
		render();
	}, 2000);
});

themeBtn.addEventListener("click", () => {
	document.body.classList.toggle("dark");
});

render();