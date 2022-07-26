<template>
  <dv-active-ring-chart :config="conf" style="width:300px;height:300px" />
</template>

<script setup>
import { ref, reactive } from 'vue'
const cityName = ref('测试')
const cityValue = ref(58)

const conf = reactive({
  lineWidth: 24,
  digitalFlopStyle: {
    fill: 'pink',
  },
  data: [
    {
      name: '杭州',
      value: 98,
    },
    {
      name: '金华',
      value: 150,
    },
    {
      name: '宁波',
      value: 62,
    },
    {
      name: '太原',
      value: 54,
    },
  ],
})
const addData = () => {
  if (!cityName.value || !cityValue.value)
    return

  conf.data.push({
    name: cityName.value,
    value: parseInt(cityValue.value),
  })
}
</script>