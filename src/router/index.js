import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../components/common/Home.vue'
import WechatUserManagement from '../components/page/WeChatUserManagement.vue'
import ImageUpload from '../components/page/ImageUpload.vue'
import SettingArticle from '../components/page/SettingArticle.vue'
import Login from '../components/page/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/admin',
      name:'Admin',
      component:Login
    },
    {
      path:'/admin-home',
      name:'Admin-home',
      component:Home,
      redirect: '/wechat-management',
      children:[
        {
          path:'/wechat-management',
          component: WechatUserManagement,
          meta:{title:'WeChat 管理頁面'}
        },
        {
          path:'/image-upload',
          component:ImageUpload,
          mate:{title:'QRcode 上傳'}
        },
        {
          path:'/setting-article',
          component:SettingArticle,
          mate:{title:'修改文章'}
        }
      ]
    },
 
  ]
})
