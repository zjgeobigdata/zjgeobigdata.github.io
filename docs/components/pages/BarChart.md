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
        axisLabel: {
          color: '#D1F9FE',
          textStyle: {
            fontSize: '10',
          },
          interval: 0,
        },
        splitLine: {
          lineStyle: {
            color: '#004F87',
          },
        },
      },
      yAxisConfig: [{
        type: 'value',
        axisLabel: {
          color: '#D1F9FE',
          textStyle: {
            fontSize: '10',
          },
          interval: 0,
        },
        splitLine: {
          lineStyle: {
            color: '#004F87',
          },
        },
      }, 
      {
        type: 'value',
        axisLabel: {
          color: '#D1F9FE',
          textStyle: {
            fontSize: '10',
          },
          interval: 0,
        },
        splitLine: {
          lineStyle: {
            color: '#004F87',
          },
        },
      }],
      gridConfig: {
        left: 30,
        right: 30,
        top: 30,
        bottom: 30,
      },
    }"
  />
</template>

<style>
.container {
  width: 500px;
  height: 500px;
  background-color: rgba(0,79,135,1);
}
</style>
```