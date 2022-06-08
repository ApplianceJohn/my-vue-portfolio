<script setup>
import Wrapper from "@/components/Wrapper.vue";
import Marquee from "@/components/Marquee.vue";

import About from "./About.vue";
import Projects from "./Projects.vue";
import ContactMe from "./ContactMe.vue";

const marquee = {
	title: "Designer. Developer.<br /><span class='gradient-fill'>Etcetera.</span>",
	subtitle:
		"If you need it, I've probably done it;<br />and if I haven't, I'd love to learn.",
	bgImage: "/images/wireframe-dsktp.png",
};
</script>

<template>
	<Wrapper>
		<Marquee v-bind="marquee" />
	</Wrapper>
	<Wrapper class="bg-dark">
		<About id="about" />
		<Projects id="projects" />
	</Wrapper>
	<Wrapper>
		<ContactMe id="contact" />
	</Wrapper>
</template>
