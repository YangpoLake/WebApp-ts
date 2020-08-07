import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout/index.vue'

const routes: Array<any> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/model-map',
    component: () => import('@/views/modelMap/index.vue'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    hidden: true
  },

  {
    path: '/',
    redirect: '/model-map'
  },

  {
    path: '/dashboard',
    component: Layout,
    meta: { title: 'menu.dashboard', icon: 'iconfont icon-chart' },
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/dashboard/index.vue'),
      meta: { title: 'menu.home' }
    },{
      path: 'model-map',
      name: 'ModelMap',
      redirect: '/model-map',
      meta: { title: 'menu.model_map' }
    }]
  },
  {
    path: '/project',
    component: Layout,
    redirect: '/project/brands',
    name: 'Project',
    meta: { title: 'menu.project', icon: 'iconfont icon-abacus' },
    children: [
      {
        path: 'brands',
        name: 'Brands',
        component: () => import('@/views/project/brands.vue'),
        meta: { title: 'menu.brands' },
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('@/views/project/product.vue'),
        meta: { title: 'menu.product' },
      },
      {
        path: 'pleasureBoats',
        name: 'PleasureBoats',
        component: () => import('@/views/project/pleasureBoats.vue'),
        meta: { title: 'menu.pleasureBoats' },
      },
      {
        path: 'smallTrains',
        name: 'SmallTrains',
        component: () => import('@/views/project/smallTrains.vue'),
        meta: { title: 'menu.smallTrains' },
      },
      {
        path: 'tourCars',
        name: 'TourCars',
        component: () => import('@/views/project/tourCars.vue'),
        meta: { title: 'menu.tourCars' },
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/project/order.vue'),
        meta: { title: 'menu.order' },
      }
    ]
  },
  {
    path: '/device',
    component: Layout,
    redirect: '/device/fogriseDevices',
    name: 'Device',
    meta: { title: 'menu.device', icon: 'iconfont icon-weighing-scale2' },
    children: [
      {
        path: 'fogrise-devices',
        name: 'FogriseDevices',
        component: () => import('@/views/device/fogriseDevices.vue'),
        meta: { title: 'menu.fogriseDevices' },
      },
      {
        path: 'light-devices',
        name: 'LightDevices',
        component: () => import('@/views/device/lightDevices.vue'),
        meta: { title: 'menu.lightDevices' },
      },
      {
        path: 'wifi-devices',
        name: 'WifiDevices',
        component: () => import('@/views/device/wifiDevices.vue'),
        meta: { title: 'menu.wifiDevices' },
      },
      {
        path: 'devices-docs',
        name: 'DevicesDocs',
        component: () => import('@/views/device/devicesDocs.vue'),
        meta: { title: 'menu.devicesDocs' },
      },
      {
        path: 'devices-models',
        name: 'DevicesModels',
        component: () => import('@/views/device/devicesModels.vue'),
        meta: { title: 'menu.devicesModels' },
      }
    ]
  },
  {
    path: '/tourist',
    component: Layout,
    redirect: '/tourist/customer',
    name: 'Tourist',
    meta: { title: 'menu.touristManage', icon: 'iconfont icon-people' },
    children: [
      {
        path: 'customer',
        name: 'Customer',
        component: () => import('@/views/tourist/customer.vue'),
        meta: { title: 'menu.tourist' },
      },
      {
        path: 'activity',
        name: 'Activity',
        component: () => import('@/views/tourist/activity.vue'),
        meta: { title: 'menu.activity' },
      },
      {
        path: 'strategy',
        name: 'Strategy',
        component: () => import('@/views/tourist/strategy.vue'),
        meta: { title: 'menu.strategy' },
      },
      {
        path: 'feedback',
        name: 'Feedback',
        component: () => import('@/views/tourist/feedback.vue'),
        meta: { title: 'menu.feedback' },
      },
      {
        path: 'banner',
        name: 'Banner',
        component: () => import('@/views/tourist/banner.vue'),
        meta: { title: 'menu.banner' },
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/user',
    name: 'User',
    meta: { title: 'menu.userManage', icon: 'iconfont icon-people' },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/user/user.vue'),
        meta: { title: 'menu.user' },
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/user/role.vue'),
        meta: { title: 'menu.role' },
      },
      {
        path: 'permission',
        name: 'Permission',
        component: () => import('@/views/user/permission.vue'),
        meta: { title: 'menu.permission' },
      }
    ]
  },

  
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = (): any => new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const router = createRouter();

export function resetRouter() {
  (router as any).matcher = createRouter().matcher // reset router
}

export default router
