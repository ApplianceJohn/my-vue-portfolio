<script setup>
defineProps(["content", "url"]);
</script>

<template>
	<a :href="url" class="btn btn-outline-dark">{{ content }}</a>
</template>
