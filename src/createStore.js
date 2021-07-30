export const createStore = (rootReducer, initialState) => {
	//Состояние (первоначальная инициализация)
	let state = rootReducer(initialState, { type: "__INIT__" });
	//Подписка для отслеживания состояния
	const subscribers = [];
	return {
		dispatch(action) {
			//Получаем состояние, прогоняем его через reducer
			state = rootReducer(state, action);
			//Теперь нужно сообщить всем подписчикам об изменении состояния
			subscribers.forEach(sub => sub());
		},
		subscribe(callback) {
			//Добавляем в список подписчиков
			subscribers.push(callback);
		},
		getState() {
			//Получаем текущее состояние приложения
			return state;
		},
	};
};