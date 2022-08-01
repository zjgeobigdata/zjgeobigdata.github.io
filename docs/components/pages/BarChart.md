# 柱状图

柱状图

## 基础用法

<BarChart />

```vue
<template>
  <dz-bar-chart 
    class="container"
    :data="[
      { 
        data: [120, 200, 150, 80, 70, 110, 130], 
        color: '#FFC95A' 
      }, 
      { data: [120, 200, 150, 80, 70, 110, 130], 
        color: '#1D88FF' 
      }
    ]"
    :config="{
      xAxisConfig: {
        type: 'category',
        data: ['越层', '超量', '粉尘', '噪声', '废水', '安全', '欠缴'],
      },
      legendConfig:{
        show: false
      },
      aAxisLabelConfig: {
        color: '#D1F9FE',
        textStyle: {
          fontSize: '10',
        },
        interval: 0,
      },
      yAxisConfig: {
        type: 'value',
      },
      gridConfig: {
        left: 50,
        right: 30,
        top: 50,
        bottom: 50,
      },
    }"
  />
</template>

<style scoped>
.container {
  width: 500px;
  height: 500px;
  background-color: rgba(0,79,135,0.9);
}
</style>
```