<script setup>
import NavBar from "./components/NavBar.vue";
import FooterSection from "./components/FooterSection.vue";
import ItemWrapper from "./components/ItemWrapper.vue";
import HeroSection from "./components/HeroSection.vue";

import AboutMe from "./AboutMe.vue";
import ProjectList from "./ProjectList.vue";
import ContactMe from "./ContactMe.vue";

const marquee = {
	title: "Designer. Developer.<br /><span class='gradient-fill'>Etcetera.</span>",
	subtitle:
		"If you need it, I've probably done it;<br />and if I haven't, I'd love to learn.",
	bgImage: "/images/wireframe-dsktp.png",
};
</script>

<template>
	<header>
		<ItemWrapper class="bg-highlight-light">
			<NavBar />
		</ItemWrapper>
	</header>
	<main>
		<ItemWrapper>
			<HeroSection v-bind="marquee" />
		</ItemWrapper>
		<ItemWrapper class="bg-base-dark">
			<AboutMe id="about" />
			<ProjectList id="projects" />
		</ItemWrapper>
		<ItemWrapper>
			<ContactMe id="contact" />
		</ItemWrapper>
	</main>
	<footer>
		<ItemWrapper class="bg-base-dark">
			<FooterSection />
		</ItemWrapper>
	</footer>
</template>
