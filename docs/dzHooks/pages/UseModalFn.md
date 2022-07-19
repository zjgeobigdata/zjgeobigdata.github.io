# useModalFn

一个控制Element Plus的Modal弹窗状态的 Hook

## 基础用法

<UseModalFn />

```vue
<template>
  <el-button @click="openModal" style="display:block;margin-top:10px;">click to open the Dialog</el-button>

  <el-dialog v-model="visible" title="Tips" width="30%" :before-close="closeModal">
    <span>This is a Modal</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">Cancel</el-button>
        <el-button type="primary" @click="handleOnOk">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useModalFn } from 'dz-hooks'
import { ElMessage } from 'element-plus'
const {
  visible,
  editId,
  openModal,
  closeModal,
  onCancel,
  onOk
} = useModalFn()
const handleCancel = () => {
  onCancel(() => { ElMessage('调用了取消的回调函数') })
}
const handleOnOk = () => {
  onOk(() => { ElMessage('调用了确认的回调函数') })
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
```

## Api

| 参数         | 说明                  | 类型                 | 默认值 |
| ---------- | ------------------- | ------------------ | --- |
| visible    | 弹窗是否可见              | boolean            | -   |
| editId     | 需要传入弹窗的id(通常用于编辑操作) | any                | -   |
| openModal  | 打开弹窗的函数             | (editId:any)=>void | -   |
| closeModal | 关闭弹窗的函数             | ()=>void           | -   |
| onCancel   | 弹窗取消操作的回调函数         | (()=>void)=>void   | -   |
| onOk       | 弹窗确认操作的回调函数         | (()=>void)=>void   | -   |