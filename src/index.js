import { createStore } from "./createStore.js";
import { rootReducer } from "./redux/rootReducer.js";
import './styles.css';

const counter = document.querySelector("#counter");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const asyncBtn = document.querySelector("#async");
const themeBtn = document.querySelector("#theme");

//Состояние
const store = createStore(rootReducer, 0);

addBtn.addEventListener("click", () => {
	store.dispatch({ type: "INCREMENT" });
});

subBtn.addEventListener("click", () => {
	store.dispatch({ type: "DECREMENT" });
});

asyncBtn.addEventListener("click", () => {

});

//Подписываемся на отслеживание изменений в состоянии
store.subscribe(() => {
	const state = store.getState();

	counter.textContent = state;
});

/*Т.к. у нас такого типа в Reducer, то будет возвращено дефолтное состояние
(так мы реализовали первоничальную инициализацию)*/
store.dispatch({ type: "INIT_APPLICATION" });

themeBtn.addEventListener("click", () => {
	// document.body.classList.toggle("dark");
});