import { createApp } from "vue";
import router from "./router";

import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/pro-light-svg-icons";
import {
	faGithub,
	faLinkedin,
	faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([faBars, faCodepen, faGithub, faLinkedin]);

createApp(App)
	.use(router)
	.component("FontAwesomeIcon", FontAwesomeIcon)
	.mount("#app");
