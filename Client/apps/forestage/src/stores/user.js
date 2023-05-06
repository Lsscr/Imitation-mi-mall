import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const userStore = defineStore('user', {
  // other options...
  state:()=>{
    return{
      userInfo:{},
    }
  },
  actions:{
    getUserInfo(){
      return this.userInfo || null
    },
    setUserInfo(user){
      Object.assign(this.userInfo,user)
    },
    deleteUserInfo(){
      this.userInfo = null
    }
  },
  persist:{
    key:'userStore',
    storage:window.sessionStorage,
    path:['userInfo']
  }
})