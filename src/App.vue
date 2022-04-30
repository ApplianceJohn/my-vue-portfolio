<script setup>
import { RouterView } from "vue-router";
import "bootstrap/js/dist/collapse";

import Navbar from "@/components/Navbar.vue";
</script>

<template>
	<header class="bg-white">
		<div class="container">
			<Navbar />
		</div>
	</header>
	<main class="mt-3">
		<div class="container">
			<RouterView />
		</div>
	</main>
</template>

<style lang="scss">
@import "/public/styles/global.scss";
</style>
