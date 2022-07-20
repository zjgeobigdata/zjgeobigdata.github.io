# useBoolean

优雅的管理 boolean 值的 Hook。

## 基础用法

<UseBoolean />

```vue
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
```

## Api

**Params**

| 参数           | 说明           | 类型      | 默认值   |
| ------------ | ------------ | ------- | ----- |
| defaultValue | 可选项，传入默认的状态值 | boolean | false |

**Result**

| 参数      | 说明   | 类型      | 默认值 |
| ------- | ---- | ------- | --- |
| state   | 状态值  | Boolean | -   |
| actions | 操作集合 | Actions | -   |

**Actions**

| 参数       | 说明                        | 类型                        | 默认值 |
| -------- | ------------------------- | ------------------------- | --- |
| toggle   | 触发状态更改的函数 | () => void | -   |
| setTrue  | 设置状态值为 true               | () => void                | -   |
| setFalse | 设置状态值为 false              | () => void                | -   |