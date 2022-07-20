# useDate

一个用来操作时间的 Hook。

## 基础用法

<UseDate />

```vue
<template>
  <div class="hello">
    <div> value:{{ data }}</div>
    <el-button @click="handleUpdateTime">无参数刷新</el-button>
    <el-button @click="handleUpdateTimeParam">有参数刷新</el-button>
  </div>
</template>

<script lang="ts">
import { useDate } from "dz-hooks";

export default {
  props: {
    msg: String,
  },
  setup() {
    const { data, refresh } = useDate(+new Date(), {
      format: 'YYYY-MM-DD HH:mm:ss',
      method: 'hour',
      methodParam: 3
    });

    const handleUpdateTime = () => {
      refresh();
    }

    const handleUpdateTimeParam = () => {
      refresh('2021-7-16 12:17:00');
    }

    return {
      data,
      refresh,
      handleUpdateTime,
      handleUpdateTimeParam
    };
  },
};
</script>
```

## Api

```ts
interface Options{
    format?: string
    method?: 'format' | 'millisecond' | 'second' | 'minute' | 'hour' | 'date' |'day'  | 'month' | 'year',
    methodParam?: number 
}

function useDate(
    value?: Value | undefined, 
    options?: Options
): {
    readonly data: any,
    refresh: () => void;
}
```



**Params**

| 参数           | 说明                    | 类型                     | 默认值  |
| ------------ | --------------------- | ---------------------- | ---- |
| initialValue | 初始化的时间值               | string - number - Date | Date |
| options      | 可选项，配置时间属性，详见 Options | Options                | -    |

**Options**

| 参数          | 说明              | 类型                  | 默认值                 |
| ----------- | --------------- | ------------------- | ------------------- |
| format      | 针对日期格式化         | string              | YYYY-MM-DD HH:mm:ss |
| method      | 获取时间的操作方法       | 见Api Options.method | format              |
| methodParam | 针对日期格式化的操作方法的参数 | number              | -                   |

**Result**

| 参数      | 说明       | 类型                    | 默认值 |
| ------- | -------- | --------------------- | --- |
| data    | 格式化后的时间值 | Ref                   | -   |
| refresh | 格式化后的时间值 | (refreshValue)=> void | -   |