console.log(Vue);

const createApp = Vue.createApp
const num = 11

const param = {
    data: function () {
		return {
			// qui ci saranno tutte le nostre variabili
			num: 0,
			message: 'Ciao sono VUE e sono fighissimo!',
			className: 'bgOrange',
			inputValue: '..."Magico"...',
			numeri: [0, 5, 6, 9, 8, 4, 5, 8],
            imgPath:'/Users/giuseppealati/Dev/vue-hello/img/vue.jpeg',
		}
	},
    methods: {
		getRandomInt(min, max) {
			console.log('numero random', min, max)
			return num
		},
	},
}
 
const app = createApp(param)
console.log(app)

app.mount('#app')   