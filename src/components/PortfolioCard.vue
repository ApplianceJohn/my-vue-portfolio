<script setup>
import Button from "./Button.vue";
defineProps({
	title: {
		type: String,
		default() {
			return "Project Title";
		},
	},
	desc: {
		type: String,
		default() {
			return "A brief project description.";
		},
	},
	url: {
		type: String,
		default() {
			return "#";
		},
	},
	width: {
		type: Number,
		default() {
			return 6;
		},
	},
});
</script>

<template>
	<div class="col">
		<div class="card">
			<img
				src="https://via.placeholder.com/450x279.png?text=Portfolio+preview+image"
				class="card-img-top"
			/>
			<div class="card-body">
				<h3 class="card-title h4">{{ title }}</h3>
				<p class="card-text">
					{{ desc }}
				</p>
				<Button content="Read more" :url="url" />
			</div>
		</div>
	</div>
</template>
