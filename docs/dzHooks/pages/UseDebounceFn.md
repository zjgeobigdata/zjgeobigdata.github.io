# useDebounceFn

用来处理防抖函数的 Hook。

## 基础用法

<UseDebounceFn />

```vue
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
```

## Api

| 参数   | 说明         | 类型         | 默认值  |
| ---- | ---------- | ---------- | ---- |
| fn   | 需要防抖执行的函数  | () => void | -    |
| wait | 超时时间，单位为毫秒 | number     | 1000 |