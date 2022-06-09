<script setup>
const props = defineProps(["title", "subtitle", "bgImage"]);
</script>

<template>
	<div class="content row align-content-center">
		<div class="inner-content">
			<h1 v-html="props.title"></h1>
			<p class="fs-5" v-html="props.subtitle"></p>
		</div>
		<div
			class="position-absolute bottom-0 end-0 mh-100 col-md-9 col-xl-6 text-center opacity-25"
		>
			<img :src="props.bgImage" class="img-fluid" />
		</div>
	</div>
</template>
