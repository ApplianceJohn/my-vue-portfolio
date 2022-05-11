<script setup>
import Wrapper from "@/components/Wrapper.vue";
import Marquee from "@/components/Marquee.vue";

const marquee = {
	title: "My work, from the web and <span class='gradient-fill'>beyond.</span>",
	subtitle: "Graphic, programmatic, funkadelic.",
	bgImage: "/images/wireframe-dsktp.png",
};
</script>

<template>
	<Wrapper>
		<Marquee v-bind="marquee" />
	</Wrapper>
</template>
