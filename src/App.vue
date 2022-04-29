<script setup>
import { RouterView } from "vue-router";
import "bootstrap/js/dist/collapse";

import Navbar from "./components/Navbar.vue";
</script>

<template>
	<header class="bg-white">
		<div class="container-md">
			<Navbar />
		</div>
	</header>
	<main class="container-md mt-3">
		<RouterView />
	</main>
</template>

<style lang="scss">
@import "/public/styles/global.scss";
</style>
