<script setup>
const props = defineProps(["title", "subtitle", "bgImage"]);
</script>

<template>
	<div class="content row align-content-start">
		<div class="inner-content">
			<h1 v-html="props.title"></h1>
			<p class="fs-5" v-html="props.subtitle"></p>
		</div>
		<img
			:src="props.bgImage"
			class="position-absolute bottom-0 end-0 col-md-9 col-xl-6 opacity-25"
		/>
	</div>
</template>

<style lang="scss">
.content {
	min-height: calc(100vh - 120px);
}

.inner-content {
	position: relative;
	z-index: 1;
}
</style>
