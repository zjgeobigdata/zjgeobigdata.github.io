# 环状图

环状图

## 基础用法

<RingChart />

```vue
<template>
    <dz-ring-chart 
      class="container"
      :data="[
        { value: 50, name: '建筑用石料' },
        { value: 40, name: '其它非金属矿产' },
        { value: 25, name: '金属矿产' },
        { value: 40, name: '能源矿产' },
        { value: 25, name: '水气矿产' },
      ]"
      :config="{
        radius: ['35%', '50%'],
        center: ['35%', '50%'],
        legendConfig: {
          show: true,
          icon: 'circle',
          orient: 'vertical',
          left: '65%',
          top: '20%',
          align: 'left',
          itemGap: 5,
          itemWidth: 6, // 设置宽度
          itemHeight: 6, // 设置高度
          textStyle: {
            color: '#95BEF1',
            fontWeight: 400,
            fontSize: 12,
          },
          height: 250,
        },
        title: [{
          text: '50',
          left: 75,
          top: 115,
          textStyle: {
            color: '#fff',
            fontSize: 25,
            fontWeight: 'normal',
          },
        },
        {
          text: '资源种类',
          left: 80,
          top: 165,
          textStyle: {
            color: '#D1F9FE',
            fontSize: 10,
            fontWeight: 500,
          },
        },
        {
          text: '种',
          left: 120,
          top: 125,
          textStyle: {
            color: '#95BEF1',
            fontSize: 10,
            fontWeight: 500,
          },
        }],
      }"
    />
</template>

<style scoped>
.container {
  width: 300px;
  height: 300px;
  margin-top: 10px;
  background-color: rgba(0,79,135,0.9);
}
</style>
```