import { defineStore } from "pinia";

export const useDetailStore = defineStore('useDetailStore',{
    state:()=>{
        return {
            currentProduct:null,
        }
    },
    actions:{
        getCurrentProduct(){
            return this.currentProduct;
        },
        setCurrentProduct(item){
            Object.assign(this.currentProduct,item)
        }
    },
    persist:{
        key:'userDetailStore',
        storage:window.sessionStorage,
        path:['currentProduct']
    }
})