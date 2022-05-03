<template>
	<div class="row">
		<h2 class="col-4">
			Let's get in touch and <span class="gradient-fill">create</span>.
		</h2>
		<form id="contact-form" class="col-8">
			<div class="row">
				<div class="col">
					<label for="fname" class="form-label">First Name</label>
					<input
						id="fname"
						type="text"
						class="form-control"
						name="fname"
					/>
				</div>
				<div class="col">
					<label for="lname" class="form-label">Last Name</label>
					<input
						id="lname"
						type="text"
						class="form-control"
						name="lname"
					/>
				</div>
			</div>
			<label for="email" class="form-label">Email</label>
			<input id="email" type="email" class="form-control" name="fname" />
			<label for="message" class="form-label">Message</label>
			<textarea id="message" class="form-control" name="message" />
			<input id="submit" type="submit" value="Send" />
		</form>
	</div>
</template>
