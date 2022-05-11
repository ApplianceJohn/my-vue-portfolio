<script setup>
import "bootstrap/js/dist/collapse";

import { RouterView } from "vue-router";

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Wrapper from "./components/Wrapper.vue";
</script>

<template>
	<header>
		<Wrapper>
			<Navbar />
		</Wrapper>
	</header>
	<main>
		<RouterView />
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
