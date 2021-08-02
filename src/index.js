import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from "./redux/rootReducer.js";
import { increment, decrement, asyncIncrement, changeTheme } from './redux/actions.js';
import thunk from 'redux-thunk';//Для создания асинхронных экшенов
import logger from 'redux-logger'; //Логгирование для редакса
import './styles.css';

const counter = document.querySelector("#counter");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const asyncBtn = document.querySelector("#async");
const themeBtn = document.querySelector("#theme");

//Состояние
const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, logger),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

addBtn.addEventListener("click", () => {
	store.dispatch(increment());
});

subBtn.addEventListener("click", () => {
	store.dispatch(decrement());
});

asyncBtn.addEventListener("click", () => {
	store.dispatch(asyncIncrement());
});

themeBtn.addEventListener("click", () => {
	const newTheme = document.body.classList.contains("light") ? "dark" : "light";
	store.dispatch(changeTheme(newTheme));
});

//Подписываемся на отслеживание изменений в состоянии
store.subscribe(() => {
	const state = store.getState();

	counter.textContent = state.counter;
	document.body.className = state.theme.value;

	//Переключение доступности кнопок
	[addBtn, subBtn, asyncBtn, themeBtn].forEach(btn => {
		btn.disabled = state.theme.disabled;
	});
});

/*Т.к. у нас такого типа в Reducer, то будет возвращено дефолтное состояние
(так мы реализовали первоничальную инициализацию)*/
store.dispatch({ type: "INIT_APPLICATION" });

