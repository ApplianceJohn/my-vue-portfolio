<script setup>
defineProps(["content", "url"]);
</script>

<template>
	<a :href="url" class="btn btn-outline-primary">{{ content }}</a>
</template>
