<script setup>
import { ref, computed } from "vue";

const props = defineProps(["messages", "status"]);

const statusOK = ref(true);
const showAlert = ref(false);

const alertProps = computed(() => {
	if (showAlert.value) {
		if (statusOK.value) {
			return {
				classes: "alert alert-success",
				message: props.messages.success,
			};
		}
		return {
			classes: "alert alert-danger",
			message: props.messages.failure,
		};
	}

	return {
		classes: "d-none",
		message: "",
	};
});
</script>

<template>
	<div :class="alertProps.classes">
		{{ alertProps.message }}
	</div>
</template>
