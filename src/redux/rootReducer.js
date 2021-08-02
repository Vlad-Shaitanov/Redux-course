import { combineReducers } from "redux";//Для совмещения всех редюсеров в один главный
import { INCREMENT, DECREMENT, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS } from "./types";

const counterReducer = (state = 0, action) => {
	//Принимает состояние и некий action

	/* НУЖНО ОПРЕДЕЛИТЬ КАКОЙ ПРИШЕЛ ACTION*/

	/*Reducer пробегается по кейсам и, если нашел совпадение по типу
	изменяет состояние*/

	switch (action.type) {
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
		default:
			return state;//По умолчанию reducer возвращает нам состояние
	}

};

//Дефолтное состояние для редюсера темы
const initailThemeState = {
	value: "light",
	disabled: false,
};

const themeReducer = (state = initailThemeState, action) => {

	switch (action.type) {
		case CHANGE_THEME:
			//Разворачиваем состояние и меняем свойство
			return {
				...state,
				value: action.payload,
			};

		case ENABLE_BUTTONS:
			return {
				...state,
				disabled: false
			};

		case DISABLE_BUTTONS:
			return {
				...state,
				disabled: true
			};

		default:
			return state;
	}
};

//Комбинируем все имеющиеся редюсеры в один для импорта
export const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
});