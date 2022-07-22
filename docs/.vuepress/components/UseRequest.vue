<template>
  <div class="container">
    <p>{{ data ? data.data : 'wait for request' }}</p>
    <el-button :loading="loading" type="primary" @click="run">request</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { mainStore } from "@/store";
import { useRequest } from "dz-hooks"
import axios from "axios"
export default defineComponent({
  name: "helloWorld",
  setup() {
    const mockRequest = () => {
      return axios.get('https://dzfront.usemock.com/user/list');
    };
    const { data, run, loading } = useRequest(mockRequest, {
      manual: true,
    });
    return {
      data,
      run,
      loading
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 10px;
}
</style>
