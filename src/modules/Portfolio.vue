<script setup>
import PortfolioCard from "@/components/PortfolioCard.vue";
</script>

<template>
	<div class="col-md-4">
		<h2>A <span class="gradient-fill">selection</span> of my work.</h2>
	</div>
	<div class="col-md-8">
		<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 gx-3 gy-4">
			<PortfolioCard title="Edison Fairs" />
			<PortfolioCard title="DMI Home Builders" />
			<PortfolioCard title="Perfectly Polished" />
		</div>
	</div>
</template>
