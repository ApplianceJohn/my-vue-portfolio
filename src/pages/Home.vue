<script setup>
import Wrapper from "@/components/Wrapper.vue";

import Header from "./Home/Header.vue";
import About from "./Home/About.vue";
import Projects from "./Home/Projects.vue";
import ContactMe from "./Home/ContactMe.vue";
</script>

<template>
	<Wrapper id="desktop-bg">
		<Header />
	</Wrapper>
	<Wrapper class="bg-dark">
		<About />
		<Projects />
	</Wrapper>
	<Wrapper>
		<ContactMe />
	</Wrapper>
</template>

<style lang="scss">
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
</style>
