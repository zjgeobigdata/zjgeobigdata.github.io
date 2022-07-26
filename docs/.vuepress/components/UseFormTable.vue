<template>
  <el-form :inline="true" ref="ruleFormRef" :model="formInline" class="demo-form-inline">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="formInline.name" />
    </el-form-item>
    <el-form-item label="地址" prop="address">
      <el-input v-model="formInline.address" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="fetchData">查询</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
  <el-table v-loading="pageDatas.loading" :data="pageDatas.data" style="width: 100%">
    <el-table-column prop="name" label="日期" width="180" />
    <el-table-column prop="date" label="姓名" width="180" />
    <el-table-column prop="Address" label="地址" />
  </el-table>
  <el-pagination class="pagination" small background :current-page="pageNum" @size-change="onSizeChange"
    @current-change="onCurrentChange" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
    :total="total" />
</template>

<script lang="ts" setup>
import { useFormTable } from 'dz-hooks'
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import request from './service'

const listPaging = (data) => {
  return request.get("https://dzfront.usemock.com/user/list",data,{loading:false})
};

const formInline = reactive({
  name: '',
  address: '',
})
const ruleFormRef = ref<FormInstance>()
const {
  pageNum,
  pageSize,
  total,
  reset,
  onCurrentChange,
  onSizeChange,
  fetchData,
  totalRequestParam,
  pageDatas,
} = useFormTable({ pageNum: 1, pageSize: 10, formRef: ruleFormRef, defaultParams:formInline, requestList: listPaging, listKey: 'records', pageSizeKey: 'size', totalKey: 'totalElements' })
</script>

<style>
.el-table__footer-wrapper,
.el-table__header-wrapper {
  height: 50px;
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px
}

.demo-form-inline {
  margin-top: 10px
}
</style>