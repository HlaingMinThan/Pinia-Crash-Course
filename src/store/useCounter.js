import { defineStore } from 'pinia'

export const useCounter = defineStore('Counter', {
    //data method
    state() {
        return {
            count : 100
        }
    },
    //computed property
    getters : {
        doubleCount(){
            return this.count * 2;
        }
    }
})