<script setup>
import { computed } from "vue";
defineProps(["icon", "url"]);
</script>

<template>
	<a :href="url" target="_blank" rel="noopener" :id="site" class="social-link"
		><FontAwesomeIcon :icon="['fab', icon]"></FontAwesomeIcon
	></a>
</template>

<style>
.social-link svg {
	margin-left: 12px;
	width: 24px;
	height: 24px;
}
</style>
