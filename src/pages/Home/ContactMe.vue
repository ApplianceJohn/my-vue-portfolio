<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

import Alert from "@/components/Alert.vue";

let emailAuth = {
	serviceID: "contact_service",
	templateID: "contact_template",
};

const templateParams = ref({
	message_id: "",
	from_first: "",
	from_last: "",
	message: "",
	email: "",
});

const submissionStatus = ref({
	complete: false,
	success: false,
});

const alertMessages = {
	success: "Your message was successfully delivered!",
	failure:
		"There was a problem sending your message. Please check your information or refresh the page.",
};

function sendEmail() {
	emailjs.init("RqLSIfxQnvV3ZyKFS");
	templateParams.value.message_id = (Math.random() * 100000) | 0;
	emailjs
		.send(emailAuth.serviceID, emailAuth.templateID, templateParams.value)
		.then(
			(res) => {
				console.log("Submission success!", res.status, res.text);
			},
			(err) => {
				console.log("Submission failed...", err);
			}
		);
}
</script>

<template>
	<div class="row py-4 gy-2">
		<h2 class="col-lg-4">
			Let's get in touch and <span class="gradient-fill">create</span>.
		</h2>
		<form id="contact-form" class="col-lg-8" @submit.prevent="sendEmail">
			<div class="row flex-column gy-3">
				<div class="col">
					<div class="row row-cols-1 row-cols-sm-2 gy-3">
						<div class="col">
							<label for="fname" class="form-label"
								>First Name</label
							>
							<input
								id="fname"
								type="text"
								class="form-control"
								name="fname"
								v-model="templateParams.from_first"
							/>
						</div>
						<div class="col">
							<label for="lname" class="form-label"
								>Last Name</label
							>
							<input
								id="lname"
								type="text"
								class="form-control"
								name="lname"
								v-model="templateParams.from_last"
							/>
						</div>
					</div>
				</div>
				<div class="col">
					<label for="email" class="form-label">Email</label>
					<input
						id="email"
						type="email"
						class="form-control"
						name="fname"
						v-model="templateParams.email"
					/>
				</div>
				<div class="col">
					<label for="message" class="form-label">Message</label>
					<textarea
						id="message"
						class="form-control"
						name="message"
						v-model="templateParams.message"
					/>
				</div>
				<div class="col">
					<Alert
						:status="submissionStatus"
						:messages="alertMessages"
					/>
				</div>
				<div class="col">
					<input
						id="submit"
						class="btn btn-primary"
						type="submit"
						value="Send"
					/>
				</div>
			</div>
		</form>
	</div>
</template>
