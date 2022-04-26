<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import "bootstrap/js/dist/collapse";

import Button from "./Button.vue";
import Social from "./Social.vue";

const socials = ref([
	{
		icon: "linkedin",
		color: "#0072b1",
		url: "https://www.linkedin.com/in/benjamin-diamond-315122ba/",
	},
	{
		icon: "github",
		color: "#222",
		url: "https://github.com/ApplianceJohn",
	},
	{
		icon: "codepen",
		color: "#222",
		url: "https://codepen.io/rinsethewax",
	},
]);
</script>

<template>
	<nav class="navbar navbar-light navbar-expand-lg sticky-top">
		<a href="/" class="navbar-brand">
			<img id="logo" src="/images/logo.svg" alt="Ben Diamond" />
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#header-nav"
			aria-controls="headerNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		></button>
		<div class="collapse navbar-collapse" id="header-nav">
			<div class="navbar-nav">
				<RouterLink to="/" class="nav-link">Home</RouterLink>
				<RouterLink to="/about" class="nav-link">About</RouterLink>
				<RouterLink to="/portfolio" class="nav-link"
					>Portfolio</RouterLink
				>
				<Button title="Contact Me" url="/contact" />
				<Social
					v-for="link in socials"
					:icon="link.icon"
					:color="link.color"
					:url="link.url"
				/>
			</div>
		</div>
	</nav>
</template>
