# useThrottle

用来处理节流值的 Hook。

## 基础用法

<useThrottle />

```vue
<template>
    <div>
        <input
            v-model="throttleCurrValue"
            placeholder="Typed value"
            style="width: 280"
        />
        <p style="marginTop: 16">throttleValue: {{throttleValue}}</p>
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
    const throttleValue = useThrottle(throttleCurrValue,500);

    return {
        throttleCurrValue,
        throttleValue,
    }
  }
}
</script>
```

## Api

| 参数   | 说明         | 类型         | 默认值  |
| ---- | ---------- | ---------- | ---- |
| value   | 需要节流的值  | any | -    |
| wait | 超时时间，单位为毫秒 | number     | 1000 |