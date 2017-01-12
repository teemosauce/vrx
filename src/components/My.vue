<template>
	<div>
		<p>{{name}}</p>
		<el-button>默认按钮</el-button>
	</div>

</template>

<script>

export default {
	name: 'my',
	data(){
		return {
			name: '我的信息'
		}
	}
}
	
</script>

<style scoped>
	div{
		background: #13A8F2;
	}
</style>