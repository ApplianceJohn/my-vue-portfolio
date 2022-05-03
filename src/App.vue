<script setup>
import "bootstrap/js/dist/collapse";

import Navbar from "./components/Navbar.vue";
import Wrapper from "./components/Wrapper.vue";

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
		<div class="container-fluid px-0">
			<Wrapper name="home"><Home /></Wrapper>
			<div class="bg-dark py-3">
				<Wrapper name="about"><About /></Wrapper>
				<Wrapper name="portfolio"><Portfolio /></Wrapper>
				<Wrapper name="contact"><ContactMe /></Wrapper>
			</div>
		</div>
	</main>
	<footer class="bg-dark">
		<div class="container">
			<div class="row py-3">
				<div class="col">
					<p class="text-light text-center mb-0">
						&copy;2022 Ben Diamond
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss">
@import "/public/styles/global.scss";
</style>
