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
	<header id="desktop-bg">
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

#desktop-bg {
	position: relative;
	background-image: url("/images/wireframe-dsktp.png");
	background-repeat: no-repeat;
	background-size: 66%;
	background-position: right 66%;

	&::before {
		content: "";
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: white;
		opacity: 0.75;
	}
}

.gradient-fill {
	color: transparent;
	-webkit-background-clip: text;
	background-clip: text;
	background-image: url("/images/etcetera-mask.png");
	background-position: center;
	background-size: 150%;
}
</style>
