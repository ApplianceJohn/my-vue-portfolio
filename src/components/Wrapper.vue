<script setup>
defineProps(["name"]);
</script>

<template>
	<div :id="name" class="row mb-3">
		<slot></slot>
	</div>
</template>
