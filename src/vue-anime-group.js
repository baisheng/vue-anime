import animeMixin from './anime-mixin'

export default {
	name: 'vue-anime-group',
	mixins: [animeMixin],

	data () {
		return {
			animes: []
		}
	},
	render (h) {
		const slots = this.$slots.default
		let children = slots
		return h(this.tag, this.$attrs, children);
	},

	mounted() {
		this.initAnime()
	},

	methods: {

		getTargets () {
			const targets = []
			for (let anime of this.animes) {
				targets.push(anime.$el)
			}
			return targets
		},

		addAnime(anime) {
			this.animes.push(anime)
		}
	}
}