import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AboutSection from './components/AboutSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import EducationSection from './components/EducationSection.vue';
import CertificationsSection from './components/CertificationsSection.vue';

const routes = [
  { path: '/', component: AboutSection },
  { path: '/experience', component: ExperienceSection },
  { path: '/education', component: EducationSection },
  { path: '/certifications', component: CertificationsSection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
