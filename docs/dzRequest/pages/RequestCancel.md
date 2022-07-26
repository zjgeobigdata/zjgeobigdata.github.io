## 取消请求
需要在NetWork中开启节流后,先点击request按钮，再点击cancel按钮，在请求列表中查看效果

<RequestCancel />

```vue
<template>
  <div class="container">
    <p>取消请求示例</p>
    <p>{{ loading ? "requesting..." : "wait for request" }}</p>
    <el-button :loading="loading" type="primary" @click="requestSuccess">request</el-button>
    <el-button type="primary" @click="cancel">cancel</el-button>
  </div>
</template>

<script lang="ts">
import request from "./service";
import { ElLoading, ElMessage } from "element-plus";
import { defineComponent, ref } from "vue";
import { useRequest } from "dz-hooks";
export default defineComponent({
  name: "hello-world",
  setup() {
    const loading = ref(false)
    const requestSuccess = async () => {
      loading.value = true
      await request.get("https://dzfront.usemock.com/user/list",null,{loading:false});
      loading.value = false
    };
    const cancel = async () => {
      await request.cancelAllRequest()
      loading.value = false
      ElMessage.error('已取消请求');
    }
    return {
      loading,
      requestSuccess,
      cancel
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
```