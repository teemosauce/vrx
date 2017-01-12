<template>
	<div>
		 <p @click="$store.commit('NEXT')">{{$store.state.date}}</p>
	</div>
</template>

<script>
	export default {
		name: 'message',
		methods: {
			next(){
				this.$store.commit('NEXT')
			}
		}
	}
</script>

<style scoped>
	
</style>