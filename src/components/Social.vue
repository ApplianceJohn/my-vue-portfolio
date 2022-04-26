<script setup>
defineProps(["icon", "color", "url"]);
</script>

<template>
	<a :href="url" target="_blank" rel="noopener" :id="site" class="social-link"
		><FontAwesomeIcon :icon="['fab', icon]"></FontAwesomeIcon
	></a>
</template>

<style scoped>
.social-link svg {
	margin-left: 12px;
	width: 24px;
	height: 24px;
	color: v-bind(color);
}

.social-link:hover svg {
	opacity: 0.8;
}
</style>
