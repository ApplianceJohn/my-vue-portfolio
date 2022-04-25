<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import "bootstrap/js/dist/collapse";

import Navbar from "./components/Navbar.vue";
import Button from "./components/Button.vue";
import Social from "./components/Social.vue";

const socials = ref([
	{
		icon: "linkedin",
		url: "https://www.linkedin.com/in/benjamin-diamond-315122ba/",
	},
	{
		icon: "github",
		url: "https://github.com/ApplianceJohn",
	},
	{
		icon: "codepen",
		url: "https://codepen.io/rinsethewax",
	},
]);
</script>

<template>
	<header class="bg-light">
		<div class="container">
			<Navbar
				><RouterLink to="/" class="nav-link">Home</RouterLink>
				<RouterLink to="/about" class="nav-link">About</RouterLink>
				<RouterLink to="/portfolio" class="nav-link"
					>Portfolio</RouterLink
				>
				<Button title="Contact Me" url="/contact" />
				<Social
					v-for="link in socials"
					:icon="link.icon"
					:url="link.url"
				/>
			</Navbar>
		</div>
	</header>
	<main>
		<div class="container">
			<RouterView />
		</div>
	</main>
</template>

<style lang="sass">
@import "./assets/styles/global.scss"
</style>
