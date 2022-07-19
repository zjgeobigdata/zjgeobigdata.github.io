<template>
  <div>
    <p style="marginTop: 16"> Clicked count: {{ throttleFnValue }} </p>
    <el-button type="primary" @click="run">
      useThrottleFn测试
    </el-button>
  </div>
</template>

<script lang="ts">

import { ref } from 'vue';
import { useThrottleFn } from 'dz-hooks';


export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  setup() {
    const throttleFnValue = ref(1);
    const { run } = useThrottleFn(() => {
      throttleFnValue.value++
    }, 500)
    return {
      throttleFnValue,
      run,
    }
  }
}
</script>