<script setup>
import "bootstrap/js/dist/collapse";

import { RouterLink } from "vue-router";

import Social from "./Social.vue";

const socials = [
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
];
</script>

<template>
	<nav
		ref="navbar"
		class="navbar navbar-expand-lg navbar-light bg-transparent"
	>
		<div class="container">
			<RouterLink to="/" class="navbar-brand">
				<img
					id="logo"
					class="d-lg-none"
					src="/images/Diamond-Icon.png"
					alt="Ben Diamond icon"
				/>
				<img
					id="logo"
					class="d-none d-lg-inline-block img-fluid"
					src="/images/Diamond-Logo.png"
					alt="Ben Diamond logo"
				/>
			</RouterLink>
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
				<ul class="navbar-nav mx-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<RouterLink to="/" class="nav-link">Home</RouterLink>
					</li>
					<li class="nav-item">
						<a href="#about" class="nav-link">About</a>
					</li>
					<li class="nav-item">
						<RouterLink to="/portfolio" class="nav-link"
							>Portfolio</RouterLink
						>
					</li>
					<li class="nav-item">
						<a href="#contact" class="nav-link">Contact Me</a>
					</li>
				</ul>
				<div>
					<Social
						v-for="link in socials"
						:key="link.url"
						:icon="link.icon"
						:color="link.color"
						:url="link.url"
					/>
				</div>
			</div>
		</div>
	</nav>
</template>

<style>
#logo {
	width: 100%;
	height: 60px;
}
</style>
