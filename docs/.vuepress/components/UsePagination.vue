<template>
  <el-table v-loading="pageDatas.loading" :data="pageDatas.data" style="width: 100%">
    <el-table-column prop="name" label="日期" width="180" />
    <el-table-column prop="date" label="姓名" width="180" />
    <el-table-column prop="Address" label="地址" />
  </el-table>
  <el-pagination class="pagination" small background @size-change="onSizeChange" @current-change="onCurrentChange"
    layout="total, sizes, prev, pager, next, jumper" :current-page="pageNum" :page-size="pageSize" :total="total" />
</template>

<script lang="ts" setup>
import { usePagination } from 'dz-hooks'
import request from './service'
const listPaging = (data) => {
  return request.get("https://dzfront.usemock.com/user/list",data,{loading:false})
};
const {
  pageNum,
  pageSize,
  total,
  onCurrentChange,
  onSizeChange,
  fetchData,
  pageDatas,
} = usePagination({ pageNum: 1, pageSize: 10, requestList: listPaging, listKey: 'records', pageSizeKey: 'size', totalKey: 'totalElements' })
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
</style>