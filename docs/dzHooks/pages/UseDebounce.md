# useDebounce

用来处理防抖值的 Hook。

## 基础用法

<UseDebounce />

```vue
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
```

## Api

| 参数    | 说明         | 类型     | 默认值  |
| ----- | ---------- | ------ | ---- |
| value | 需要防抖的值     | any    | -    |
| wait  | 超时时间，单位为毫秒 | number | 1000 |