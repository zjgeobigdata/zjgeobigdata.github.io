# usePagination

一个控制Element Plus的表格分页的Hook。

## 基础用法

<UsePagination />

```vue
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
import axios from 'axios'
const listPaging = (params) => {
  return axios.request({
    url: "https://dzfront.usemock.com/user/list",
    method: "get",
    params,
  });
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
```

## Api

| 参数              | 说明           | 类型                         | 默认值 |
| --------------- | ------------ | -------------------------- | --- |
| pageNum         | 当前表格页码数      | number                     | -   |
| pageSize        | 当前表格每页总量     | number                     | -   |
| total           | 当前表格数据总量     | number                     | -   |
| onCurrentChange | 当前表格页码变化回调   | (page:number)=>void        | -   |
| onSizeChange    | 当前表格每页总量变化回调 | (pageSize:number)=>void    | -   |
| fetchData       | 请求函数         | ()=>void                   | -   |
| pageDatas       | 请求结果         | {loading:boolean,data:any} | -   |

## Params

| 参数           | 说明               | 类型       | 默认值 |
| ------------ | ---------------- | -------- | --- |
| pageNum      | 默认请求表格页码数        | number   | -   |
| pageSize     | 默认请求表格每页总量       | number   | -   |
| requestList  | 请求接口             | ()=>void | -   |
| listKey      | 接口返回列表的key       | string   | -   |
| pageSizeKey  | 接口返回pageSize的key | string   | -   |
| totalKey     | 接口返回全部数据量的key    | string   | -   |
| defaultParams | 默认接口请求参数         | object   | -   |