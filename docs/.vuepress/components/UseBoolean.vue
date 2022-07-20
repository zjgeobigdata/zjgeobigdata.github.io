<template>
  <div>
    <p>{{ useBooleanState }}</p>
    <el-button @click="useBooleanToggle">toggle</el-button>
    <el-button @click="setTrue">setTrue</el-button>
    <el-button @click="setFalse">setFalse</el-button>
  </div>
</template>

<script lang="ts">

import { ref } from 'vue';
import { useBoolean } from 'dz-hooks';


export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  setup() {
    //useToggle 测试
    const [useBooleanState, { toggle: useBooleanToggle, setTrue, setFalse }] = useBoolean();


    return {
      useBooleanState,
      useBooleanToggle,
      setTrue,
      setFalse
    }
  }
}
</script>