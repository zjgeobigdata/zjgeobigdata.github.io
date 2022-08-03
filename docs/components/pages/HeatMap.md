# 热力图

热力图

## 基础用法

<HeatMap />

```vue
 <template>
  <dz-heat-map 
    class="container" 
    :x-axis-data="xAxisData" :y-axis-data="yAxisData"
    :data="chartData" 
    :config="{
      label: {
        show: true,
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      tooltipConfig: {
        position: 'top'
      },
      gridConfig: {
        top: '10%', left: '20%', bottom: '32%'
      },
      xAxisConfig: {
        type: 'category',
        splitArea: {
          show: true,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff',
          },
        },
      },
      yAxisConfig: {
        type: 'category',
        splitArea: {
          show: true,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff',
          },
        },
      },
      visualMapConfig: {
        min: 0,
        max: 100,
        calculable: true,
        orient: 'horizontal',
        left: '36%',
        bottom: '5%',
        inRange: {
          color: ['#002A57', '#1D88FF'],
        },
        textStyle: {
          color: '#fff'
        }
      }
    }" />
</template>

<script lang="ts" setup>
  const chartData = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 2, 0],
    [1, 0, 0],
    [1, 1, 0],
    [1, 2, 0],
  ].map(function (item) {
    return [item[1], item[0], item[2]];
  });
  const xAxisData = ['自然修复类', '工程治理类', '再设矿权类']
  const yAxisData = ['非十四五', '十四五']
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 600px;
  height: 600px;
  margin-top: 10px;
  background-color: rgba(0, 79, 135, 0.9);
}
</style>

```