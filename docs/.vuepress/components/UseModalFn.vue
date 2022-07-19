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