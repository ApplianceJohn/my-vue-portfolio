<template>
	<div id="home-inner">
		<div class="content">
			<h1>
				Designer. Developer.<br /><span class="gradient-fill"
					>Etcetera.</span
				>
			</h1>
			<p class="fs-5">
				If you need it, I've probably done it;<br />and if I haven't,
				I'd love to learn.
			</p>
		</div>
	</div>
</template>

<style lang="scss">
#home-inner {
	position: relative;
	min-height: 600px;
	height: 70vh;
	background-image: url("/images/wireframe-dsktp/wireframe-dsktp.png");
	background-size: cover;

	.content {
		position: relative;
		z-index: 1;
	}

	&::before {
		content: "";
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: white;
		opacity: 0.8;
	}
}
</style>
