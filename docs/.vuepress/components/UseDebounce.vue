<template>
  <div>
    <el-input v-model="debounceCurrValue" placeholder="Typed value" style="width: 280" />
    <p style="marginTop: 16">DebouncedValue: {{ debounceValue }}</p>
  </div>
</template>

<script lang="ts">

import { ref } from 'vue';
import { useDebounce } from 'dz-hooks';


export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  setup() {
    const debounceCurrValue = ref(1);
    const debounceValue = useDebounce(debounceCurrValue, 500);

    return {
      debounceCurrValue,
      debounceValue,
    }
  }
}
</script>