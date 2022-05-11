<script setup>
import Wrapper from "@/components/Wrapper.vue";

import Header from "./Header.vue";
import About from "./About.vue";
import Projects from "./Projects.vue";
import ContactMe from "./ContactMe.vue";
</script>

<template>
	<Wrapper class="desktop-bg">
		<Header id="home" />
	</Wrapper>
	<Wrapper class="bg-dark">
		<About id="about" />
		<Projects id="projects" />
	</Wrapper>
	<Wrapper>
		<ContactMe id="contact" />
	</Wrapper>
</template>

<style lang="scss">
#home {
	position: relative;
	z-index: 1;
	min-height: calc(100vh - 120px);
}

.desktop-bg {
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
