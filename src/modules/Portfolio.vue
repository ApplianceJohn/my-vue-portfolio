<script setup>
import PortfolioCard from "@/components/PortfolioCard.vue";
</script>

<template>
	<div class="col">
		<h2>A <span class="gradient-fill">selection</span> of my work.</h2>
	</div>
	<div class="col">
		<div class="row">
			<PortfolioCard title="Edison Fairs" />
			<PortfolioCard title="DMI Home Builders" />
			<PortfolioCard title="Perfectly Polished" />
		</div>
	</div>
</template>
