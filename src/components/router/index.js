import { createRouter, createWebHistory } from "vue-router";


import HomeNote from "../HomeNote.vue";
import newNotes from "../newNotes.vue";

const routes=[
    { path:'/' ,
      component: HomeNote
    },
    {
      
      path:'/newNotes',
      component: newNotes
    },

  ]


  const router=createRouter({
    history: createWebHistory(),
    routes 
  })
  export default router