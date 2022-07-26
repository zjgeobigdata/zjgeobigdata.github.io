<template>
  <div class="container">
    <p>useRequest示例</p>
    <p>{{ data ? data : "wait for request" }}</p>
    <el-button :loading="loading" type="primary" @click="run">requestSuccess</el-button>
  </div>
</template>

<script lang="ts">
import request from "./service";
import { defineComponent, ref } from "vue";
import { useRequest } from "dz-hooks";
export default defineComponent({
  name: "hello-world",
  setup() {
    const requestSuccess = () => {
      return request.get("https://dzfront.usemock.com/user/list");
    };
    const { data, run, loading } = useRequest(requestSuccess, {
      manual: true,
    });
    return {
      requestSuccess,
      data,
      loading,
      run,
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