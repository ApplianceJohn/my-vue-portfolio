<template>
	<div class="row py-4 gy-2">
		<h2 class="col-lg-4">
			Let's get in touch and <span class="gradient-fill">create</span>.
		</h2>
		<form id="contact-form" class="col-lg-8">
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
					/>
				</div>
				<div class="col">
					<label for="message" class="form-label">Message</label>
					<textarea
						id="message"
						class="form-control"
						name="message"
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
