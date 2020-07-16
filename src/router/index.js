import Vue from 'vue';
import VueRouter from 'vue-router';
import goods from '../components/Goods';
import ratings from '../components/Ratings';
import seller from '../components/Seller';

Vue.use(VueRouter);

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/goods',
    },
    {
      path: '/goods',
      component: goods,
    },
    {
      path: '/ratings',
      component: ratings,
    },
    {
      path: '/seller',
      component: seller,
    },
  ],
});
