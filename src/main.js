import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faHouse,
  faBars,
  faUser,
  faTable,
  faGauge,
  faFire,
  faArrowRightFromBracket,
  faGear,
  faCode,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faSquareBehance,
  faFacebook,
  faDev,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faBars,
  faHouse,
  faUser,
  faTable,
  faGauge,
  faFire,
  faArrowRightFromBracket,
  faGear,
  faTwitter,
  faSquareBehance,
  faFacebook,
  faDev,
  faCode,
  faArrowRight
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

//  vue select

import vSelect from "vue-select";
Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";
