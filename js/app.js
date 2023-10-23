console.log(Vue);

const createApp = Vue.createApp
const num = 11

const param = {
    data: function () {
		return {
			// qui ci saranno tutte le nostre variabili
			num: 0,
			message: 'Ciao sono VUE e sono fighissimo!',
			className: 'bg-orange text-yellow',
			inputValue: 'un framework "Magico"',
			numeri: [0, 5, 6, 9, 8, 4, 5, 8],
		}
	},
}

const app = createApp(param)
console.log(app)

app.mount('#app')   