<script setup>
import "bootstrap/js/dist/collapse";

import Navbar from "./components/Navbar.vue";
import Home from "./modules/Home.vue";
import About from "./modules/About.vue";
import Portfolio from "./modules/Portfolio.vue";
import ContactMe from "./modules/ContactMe.vue";
</script>

<template>
	<header class="bg-white">
		<Navbar />
	</header>
	<main class="mt-3">
		<div class="container">
			<Home />
			<About />
			<Portfolio />
			<ContactMe />
		</div>
	</main>
	<footer></footer>
</template>

<style lang="scss">
@import "/public/styles/global.scss";
</style>
