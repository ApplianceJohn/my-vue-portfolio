<script setup>
import "bootstrap/js/dist/collapse";

import Navbar from "./components/Navbar.vue";
import Wrapper from "./components/Wrapper.vue";
</script>

<template>
	<header>
		<Wrapper>
			<Navbar />
		</Wrapper>
	</header>
	<main>
		<!--Router content goes here-->
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
