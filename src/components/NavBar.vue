<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import SocialLinks from "./SocialLinks.vue";
</script>

<template>
	<nav class="flex justify-between items-center px-5">
		<a href="#top" class="">
			<img
				class="lg:hidden"
				src="@/assets/images/Diamond-Icon.png"
				alt="Ben Diamond icon"
			/>
			<img
				class="hidden lg:inline"
				src="@/assets/images/Diamond-Logo.png"
				alt="Ben Diamond logo"
			/>
		</a>
		<div class="hidden lg:flex flex-grow justify-between items-center ml-8">
			<ul class="flex flex-initial space-x-4">
				<li>
					<a href="#top" class="hover:text-accent-dark">Home</a>
				</li>
				<li>
					<a href="#about" class="hover:text-accent-dark">About</a>
				</li>
				<li>
					<a href="#projects" class="hover:text-accent-dark"
						>Projects</a
					>
				</li>
				<li>
					<a href="#contact" class="hover:text-accent-dark"
						>Contact Me</a
					>
				</li>
			</ul>
			<SocialLinks />
		</div>
		<div class="lg:hidden">
			<Menu v-slot="{ open }">
				<div class="flex flex-col justify-center items-end">
					<MenuButton
						><div
							:class="
								'w-12 p-2 border-2 rounded ' +
								(open
									? 'border-accent-dark'
									: 'border-base-light')
							"
						>
							<div :class="open ? 'hidden' : ''">
								<MenuIcon class="text-base-dark" />
							</div>
							<div :class="open ? '' : 'hidden'">
								<XIcon class="text-accent-dark" />
							</div></div
					></MenuButton>
					<transition
						enter-active-class="transition duration-100 ease-out"
						enter-from-class="transform scale-95 opacity-0"
						enter-to-class="transform scale-100 opacity-100"
						leave-active-class="transition duration-75 ease-out"
						leave-from-class="transform scale-100 opacity-100"
						leave-to-class="transform scale-95 opacity-0"
					>
						<MenuItems
							class="absolute top-20 flex flex-col w-40 p-5 border-2 border-accent-dark bg-highlight-light rounded"
						>
							<MenuItem>
								<a href="#top" class="mb-5">Home</a>
							</MenuItem>
							<MenuItem>
								<a href="#about" class="mb-5">About</a>
							</MenuItem>
							<MenuItem>
								<a href="#portfolio" class="mb-5">Portfolio</a>
							</MenuItem>
							<MenuItem>
								<a href="#contact" class="mb-5">Contact Me</a>
							</MenuItem>
							<SocialLinks />
						</MenuItems>
					</transition>
				</div>
			</Menu>
		</div>
	</nav>
</template>
