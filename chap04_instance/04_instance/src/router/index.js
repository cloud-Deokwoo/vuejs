import { createRouter, createWebHistory } from 'vue-router';
import Methods from '../components/MyMethods.vue';
import El from '../components/MyEl.vue';
import Template from '../components/MyTemplate.vue';
import Components from '../components/MyComponents.vue';
import Props from '../components/MyProps.vue';
import Computed from '../components/MyComputed.vue';
import Watch from '../components/MyWatch.vue';
import Directive from '../components/MyDirective.vue';
import Mixin from '../components/MyMixins.vue';
import Inject from '../components/MyInject.vue';
import Emits from '../components/MyEmits.vue';
import SharedData from '../components/SharedData.vue';
import Mounted from '../components/MyMounted.vue';
import Setup from '../components/MySetup.vue';
import Provide from '../components/MyProvide.vue';
import WatchEffect from '../components/WatchEffect.vue';
import OptionAPI from '../components/OptionAPI.vue';
import CompositionAPI from '../components/CompositionAPI.vue';

const routes = [
  { path: '/methods', component: Methods },
  { path: '/el', component: El },
  { path: '/template', component: Template },
  { path: '/components', component: Components },
  { path: '/props', component: Props },
  { path: '/computed', component: Computed },
  { path: '/watch', component: Watch },
  { path: '/directive', component: Directive },
  { path: '/mixin', component: Mixin },
  { path: '/inject', component: Inject },
  { path: '/emits', component: Emits },
  { path: '/shared-data', component: SharedData }, // <- 잘못된 부분 수정
  { path: '/mounted', component: Mounted },
  { path: '/setup', component: Setup },
  { path: '/provide', component: Provide },
  { path: '/watch-effect', component: WatchEffect },
  { path: '/option-api', component: OptionAPI },
  { path: '/composition-api', component: CompositionAPI },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
