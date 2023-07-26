import { defineStore } from 'pinia'

export const useCounter = defineStore('Counter', {
    //data method
    state() {
        return {
            count : 0
        }
    },
    //computed property
    getters : {
        doubleCount(){
            return this.count * 2;
        }
    },
    //methods
    actions : {
        increase(){
            this.count ++
        }
    }
})