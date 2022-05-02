<script setup>
import { ref } from "vue";
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
		<div class="container">
			<a href="#home" class="navbar-brand">
				<img
					id="logo"
					src="/icons/favicon.svg"
					alt="Ben Diamond logo"
				/>
			</a>
			<button
				class="navbar-toggler ms-3"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#header-nav"
				aria-controls="headerNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<FontAwesomeIcon :icon="['fal', 'bars']"></FontAwesomeIcon>
			</button>
			<div class="collapse navbar-collapse" id="header-nav">
				<ul class="navbar-nav mx-auto">
					<li class="nav-item">
						<a href="#home" class="nav-link">Home</a>
					</li>
					<li class="nav-item">
						<a href="#about" class="nav-link">About</a>
					</li>
					<li class="nav-item">
						<a href="#portfolio" class="nav-link">Portfolio</a>
					</li>
					<li class="nav-item">
						<a href="#contact" class="nav-link">Contact Me</a>
					</li>
				</ul>
				<div class="mt-2">
					<Social
						v-for="link in socials"
						:icon="link.icon"
						:color="link.color"
						:url="link.url"
					/>
				</div>
			</div>
		</div>
	</nav>
</template>
