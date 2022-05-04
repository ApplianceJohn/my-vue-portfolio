<script setup>
import "bootstrap/js/dist/collapse";

import Navbar from "./components/Navbar.vue";
import Wrapper from "./components/Wrapper.vue";

import Home from "./modules/Home.vue";
import About from "./modules/About.vue";
import Portfolio from "./modules/Portfolio.vue";
import ContactMe from "./modules/ContactMe.vue";
import Footer from "./modules/Footer.vue";
</script>

<template>
	<header>
		<Navbar />
		<Wrapper>
			<Home />
		</Wrapper>
	</header>
	<main>
		<Wrapper class="bg-dark">
			<About />
			<Portfolio />
		</Wrapper>
		<Wrapper>
			<ContactMe />
		</Wrapper>
	</main>
	<footer>
		<Wrapper class="bg-dark">
			<Footer />
		</Wrapper>
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
	background-size: 150%;
}
</style>
