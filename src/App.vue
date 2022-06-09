<script setup>
import NavBar from "./components/NavBar.vue";
import FooterSection from "./components/FooterSection.vue";
import ItemWrapper from "./components/ItemWrapper.vue";
</script>

<template>
	<header>
		<ItemWrapper class="bg-highlight-light">
			<NavBar />
		</ItemWrapper>
	</header>
	<main>
		<RouterView />
	</main>
	<footer>
		<ItemWrapper class="bg-base-dark">
			<FooterSection />
		</ItemWrapper>
	</footer>
</template>
