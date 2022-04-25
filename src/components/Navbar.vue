<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
	<nav class="navbar sticky-top navbar-light navbar-expand-lg">
		<a href="/" class="navbar-brand">
			<img
				id="logo"
				src="@/assets/images/logo/Diamond_Type_Icon.svg"
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
			<img src="./assets/icons/bars.svg" width="28" height="32" />
		</button>
		<div class="collapse navbar-collapse" id="header-nav">
			<div class="navbar-nav">
				<slot />
			</div>
		</div>
	</nav>
</template>
