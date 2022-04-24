<script setup>
import { RouterLink, RouterView } from "vue-router";
import "bootstrap/js/dist/collapse";
</script>

<template>
	<header class="container">
		<nav class="navbar navbar-expand-lg">
			<a href="/" class="navbar-brand">
				<img
					id="logo"
					src="@/assets/images/Diamond_Type_Icon.svg"
					alt="Ben Diamond"
				/>
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#header-nav"
				aria-controls="headerNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				Menu
			</button>
			<div class="collapse navbar-collapse" id="header-nav">
				<div class="navbar-nav">
					<RouterLink to="/" class="nav-link">Home</RouterLink>
					<RouterLink to="/about" class="nav-link">About</RouterLink>
					<RouterLink to="/portfolio" class="nav-link"
						>Portfolio</RouterLink
					>
				</div>
			</div>
		</nav>
	</header>
	<main class="container">
		<RouterView />
	</main>
</template>

<style lang="sass">
@import "./assets/styles/global.scss"
</style>
