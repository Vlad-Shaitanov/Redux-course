import {
	INCREMENT, DECREMENT, CHANGE_THEME, DISABLE_BUTTONS,
	ENABLE_BUTTONS
} from "./types.js";

export const increment = () => {
	return {
		type: INCREMENT
	};
};

export const decrement = () => {
	return {
		type: DECREMENT
	};
};

export const changeTheme = (newTheme) => {
	return {
		type: CHANGE_THEME,
		payload: newTheme, //Полезная нагрузка, которую передадим в редюсер вместе с типом
	};
};

export const enableButtons = () => {
	return {
		type: ENABLE_BUTTONS
	};
};

export const disableButtons = () => {
	return {
		type: DISABLE_BUTTONS
	};
};

export const asyncIncrement = () => {
	return function (dispatch) {
		dispatch(disableButtons());//Отключаем кнопки
		setTimeout(() => {
			dispatch(increment());
			dispatch(enableButtons());//Включаем кнопки
		}, 1500);
	};
};