<template>
  <div>
    <p style="marginTop: 16"> Clicked count: {{ debounceFnValue }} </p>
    <el-button type="primary" @click="debounceFnRun">
      useDebounceFn测试
    </el-button>
  </div>
</template>

<script lang="ts">

import { ref } from 'vue';
import { useDebounceFn } from 'dz-hooks';


export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  setup() {
    const debounceFnValue = ref<number>(1);
    const { run: debounceFnRun } = useDebounceFn(() => {
      debounceFnValue.value++
    }, 500)

    return {
      debounceFnValue,
      debounceFnRun,
    }
  }
}
</script>