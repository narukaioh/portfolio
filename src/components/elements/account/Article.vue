<template lang="pug">
div.inner
	top
	h1 Cadastrar artigo
	p {{message}}
	p: input(type="text" placeholder="Titulo" v-model="article.title")
	p: input(type="text" placeholder="Subtitulo" v-model="article.subtitle")
	p
		input(type="checkbox" v-model="article.featured" id="featured")
		label(for="featured") Destaque
	p
		select(v-model="article.category",)
			option Selecione uma categoria
			option(v-for="category in categories" v-bind:value="category.slug") {{ category.name }}
	p: editor(v-model="article.body")

	button(v-on:click="addArticle(article)") Enviar
</template>

<script>

import Header from '../common/Header.vue'
import { addArticle } from '../../../services/articles'
import { listCategories } from '../../../services/categories'
import { VueEditor } from 'vue2-quill-editor'

export default {
	data () {
		return {
			article: {
				title: '',
				featured: false,
				body: '',
				categories: {
					slug: '',
				},
				category: '',
				subtitle: '',
			},
			categories: [],
			message: ''
		}
	},
	mounted () {
		this.getCategories()
	},
	methods: {
		getCategories () {
			listCategories().then(res => {
				this.categories = res.categories} )
		},
		addArticle (article) {
			addArticle(article).then(res => {
				this.message = res.message
			})
		}
	},
	components: {
		'top': Header,
		'editor': VueEditor
	}
}
</script>
