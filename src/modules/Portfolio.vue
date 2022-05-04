<script setup>
import PortfolioCard from "@/components/PortfolioCard.vue";
</script>

<template>
	<div class="row py-4 gy-2">
		<div class="col-md-4">
			<h2 class="text-light">
				A <span class="gradient-fill">selection</span> of my work.
			</h2>
		</div>
		<div class="col-md-8">
			<div class="row row-cols-1 row-cols-lg-2 gy-3">
				<PortfolioCard title="Edison Fairs" />
				<PortfolioCard title="DMI Home Builders" />
				<PortfolioCard title="Perfectly Polished" />
			</div>
		</div>
	</div>
</template>
