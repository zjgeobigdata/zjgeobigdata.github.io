# 环状图

环状图

## 基础用法

<RingChart />

```vue
<template>
    <dz-ring-chart 
      class="container" 
      :config="{
        radius: ['35%', '50%'],
        data:[
          { value: 50, name: '建筑用石料' },
          { value: 40, name: '其它非金属矿产' },
          { value: 25, name: '金属矿产' },
          { value: 40, name: '能源矿产' },
          { value: 25, name: '水气矿产' },
        ],
        showLegend:true,
        legendConfig: {
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
      }"
    />
</template>

<style scoped>
.container {
  width: 300px;
  height: 300px;
}
</style>
```