<script setup>
import PortfolioCard from "@/components/PortfolioCard.vue";
</script>

<template>
	<div class="row gx-3 gy-4">
		<div class="col-md-6">
			<h2>A <span class="gradient-fill">selection</span> of my work.</h2>
		</div>
		<div class="col-md-6">
			<div class="row row-cols-1 gx-3 gy-4">
				<PortfolioCard title="Edison Fairs" />
				<PortfolioCard title="DMI Home Builders" />
				<PortfolioCard title="Perfectly Polished" />
				<PortfolioCard title="Hamilton Engineering" />
				<PortfolioCard title="HOTWAXXX" />
				<PortfolioCard />
			</div>
		</div>
	</div>
</template>

<style lang="scss"></style>
