<template>
  <div>
    <el-input v-model="throttleCurrValue" placeholder="Typed value" style="width: 280" />
    <p style="marginTop: 16">throttleValue: {{ throttleValue }}</p>
  </div>
</template>

<script lang="ts">

import { ref } from 'vue';
import { useThrottle } from 'dz-hooks';


export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  setup() {
    const throttleCurrValue = ref(1);
    const throttleValue = useThrottle(throttleCurrValue, 500);

    return {
      throttleCurrValue,
      throttleValue,
    }
  }
}
</script>