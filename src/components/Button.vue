<script setup>
defineProps(["title", "url"]);
</script>

<template>
	<a :href="url" class="btn btn-outline-dark">{{ title }}</a>
</template>
