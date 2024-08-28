import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import InlineStyle from '../components/InlineStyle.vue';
import ClassStyle from '../components/ClassStyle.vue';
import ObjectStyle from '../components/ObjectStyle.vue';
import ArrayStyle from '../components/ArrayStyle.vue';
import ClassWithCondition from '../components/ClassWithCondition.vue';
import ClassWithForm from '../components/ClassWithForm.vue';
import BootstrapExample from '../components/BootstrapExample.vue';
import TailwindExample from '../components/TailwindExample.vue';
import BulmaExample from '../components/BulmaExample.vue';
import FoundationExample from '../components/FoundationExample.vue';
import PureExample from '../components/PureExample.vue';
import MaterializeExample from '../components/MaterializeExample.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/inline-style', name: 'InlineStyle', component: InlineStyle },
  { path: '/class-style', name: 'ClassStyle', component: ClassStyle },
  { path: '/object-style', name: 'ObjectStyle', component: ObjectStyle },
  { path: '/array-style', name: 'ArrayStyle', component: ArrayStyle },
  { path: '/class-condition', name: 'ClassWithCondition', component: ClassWithCondition },
  { path: '/class-form', name: 'ClassWithForm', component: ClassWithForm },
  { path: '/bootstrap', name: 'BootstrapExample', component: BootstrapExample },
  { path: '/tailwind', name: 'TailwindExample', component: TailwindExample },
  { path: '/bulma', name: 'BulmaExample', component: BulmaExample },
  { path: '/foundation', name: 'FoundationExample', component: FoundationExample },
  { path: '/pure', name: 'PureExample', component: PureExample },
  { path: '/materialize', name: 'MaterializeExample', component: MaterializeExample }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;