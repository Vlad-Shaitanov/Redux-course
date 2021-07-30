export const rootReducer = (state, action) => {
	//Принимает состояние и некий action

	/* НУЖНО ОПРЕДЕЛИТЬ КАКОЙ ПРИШЕЛ ACTION*/

	/*Reducer пробегается по кейсам и, если нашел совпадение по типу
	изменяет состояние*/

	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		default:
			break;
	}

	//По умолчанию reducer возвращает нам состояние
	return state;

};