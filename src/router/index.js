import { createRouter, createWebHistory } from 'vue-router'
import ApiTest from '../views/ApiTest.vue'
import SalesList from '../views/SalesList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductList from '../views/ProductList.vue'



const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/test',
    name: 'Api',
    component: ApiTest
  },
  {
    path: '/sales',
    name: 'SalesList',
    component: SalesList
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
