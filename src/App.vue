<template>
  <h1>Counter - {{count}}</h1>
  <h1>{{myName}}</h1>
</template>

<script>
import {mapState} from 'pinia';
import {useCounter} from './store/useCounter';

export default {
  computed:{
    myName() {
      return "Hlaing min than";
    },
    ...mapState(useCounter,['count'])
  }
}
</script>