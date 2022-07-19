# useThrottleFn

用来处理节流函数的 Hook。

## 基础用法

<useThrottleFn />

```vue
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
```

## Api

| 参数   | 说明         | 类型         | 默认值  |
| ---- | ---------- | ---------- | ---- |
| fn   | 需要节流的函数  | () => void | -    |
| wait | 超时时间，单位为毫秒 | number     | 1000 |