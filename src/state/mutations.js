export const NEXT = (state) => {

	setInterval(() => {
		state.date = new Date().toLocaleString()
	},1000)
}

export const PRE = (state) => {
	state.date--;
}