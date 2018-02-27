import Vue from 'vue'
import Router from 'vue-router'
import position from "@/components/position"
import picture from "@/components/picture"
import photo from "@/components/photo"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/position",
      component: position,
      name: "position"
    },{
      path: "/picture",
      component: picture,
      name: "picture"
    },{
      path: "/photo",
      component: photo,
      name: "photo"
    }
    
  ]
})
