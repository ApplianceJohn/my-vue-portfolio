<script setup>
defineProps(["name"]);
</script>

<template>
	<div :id="name" class="wrapper row align-items-center">
		<slot></slot>
	</div>
</template>

<style lang="scss"></style>
