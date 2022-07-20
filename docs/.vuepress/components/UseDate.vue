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