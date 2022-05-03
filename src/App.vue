<script setup>
import { ref, onMounted } from "vue";

import "bootstrap/js/dist/collapse";

import Navbar from "./components/Navbar.vue";

import Home from "./modules/Home.vue";
import About from "./modules/About.vue";
import Portfolio from "./modules/Portfolio.vue";
import ContactMe from "./modules/ContactMe.vue";

const navbar = ref(null);

onMounted(() => {
	console.log(navbar.value);
});
</script>

<template>
	<header class="bg-light">
		<Navbar ref="navbar" />
	</header>
	<main>
		<div class="container-fluid py-3">
			<Home :navbar="navbar" />
		</div>
		<div class="container-fluid py-3 bg-dark">
			<About />
			<Portfolio />
		</div>
		<div class="container-fluid py-3">
			<ContactMe />
		</div>
	</main>
	<footer class="bg-dark">
		<div class="container">
			<div class="row">
				<div class="col">
					<p class="text-light text-center">&copy;2022 Ben Diamond</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss">
@import "/public/styles/global.scss";

.gradient-fill {
	color: transparent;
	-webkit-background-clip: text;
	background-clip: text;
	background-image: url("/images/etcetera-mask.png");
	background-position: center;
	background-size: cover;
}
</style>
