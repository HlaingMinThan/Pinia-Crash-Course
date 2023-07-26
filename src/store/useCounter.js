import { defineStore } from 'pinia'

export const useCounter = defineStore('Counter', {

    //data method
    state() {
        return {
            count : 0
        }
    }
})