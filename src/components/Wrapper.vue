<script setup>
defineProps(["name"]);
</script>

<template>
	<div :id="name" class="wrapper row align-items-center mb-5 mx-auto">
		<slot></slot>
	</div>
</template>

<style lang="scss">
.wrapper {
	max-width: 1140px;
}
</style>
