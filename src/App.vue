<template>
  <h1>Count - {{count}}</h1>
  <h1>Double Count - {{doubleCount}} </h1>
  <button @click="increase">increase</button>
</template>

<script>
import {mapActions, mapState} from 'pinia';
import {useCounter} from './store/useCounter';

export default {
  computed:{
    myName() {
      return "Hlaing min than";
    },
    ...mapState(useCounter,['count','doubleCount'])
  },
  methods : {
    ...mapActions(useCounter,['increase']),
  }
}
</script>