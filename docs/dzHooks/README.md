<h1 align="center"><b>DZ-Hooks</b></h1>
<h4 align="center">Vue3 的实用Hooks集合</h4>

## 🏃文档
<h4 align="center">
  <a href="https://zjgeobigdata.github.io/dzHooks/">使用文档</a>
</h4>

<br>

## 安装
npm install dz-hooks

## ⚡使用

- **Async**
  - `useRequest` — 一个完整的管理异步数据请求的Hook
- **Side**
  - `useDebounce` — 用于处理防抖值的 Hook.
  - `useDebounceFn` — 用于处理防抖函数的 Hook.
  - `useThrottle` — 用于处理节流值的 Hook.
  - `useThrottleFn` — 用于处理节流函数的 Hook.
  - `useInterval` — 用于处理interval的 Hook.
  - `useTimeout` — 用于处理timeout的 Hook.
<!-- - **Browser** -->
- **State**
  - `useToggle` — 用于在两个状态值间切换的 Hook.
  - `useBoolean` — 优雅的管理 boolean 值的 Hook.
  - `useDate` — 用于处理时间格式化 Hook.
  - `useLocalStorage` — 简单高效管理localStorage的 Hook.
  - `useSessionStorage` — 简单高效管理SessionStorage的 Hook.
  - `useCookie` — 用于管理本地Cookie Hook.
  - `useNetwork` — 用于获取网络状态 Hook.
  - `useSet` — 用于管理Set的 Hook.
  - `useMap` — 用于管理Map的 Hook.
  - `useWebSocket` — 用于处理 WebSocket 的 Hook。
  <!-- - `useRouteQuery` — 用于获取url query值的 Hook. -->
- **UI**
  - `useVirtualList` — 用于长列表虚拟化列表的 Hook.
  - `useDynamicList` — 用于管理列表状态 Hook.
  - `useMediaQuery` — 用于监听 mediaQuery 状态的 Hook。
  - `useExternal` — 用于加载异步资源的 Hook.
  - `useFullscreen` — 一个用于处理 dom 全屏的 Hook.
  - `useDocumentVisibility` — 可以获取页面可见状态的 Hook.
  - `useTextSelection` — 实时获取用户当前选取的文本内容及位置Hook.
  - `useQRCode` — 用来生成二维码的Hook.
- **Advanced**
  - `useLockFn` — 用于增加异步函数增加竞态锁，防并发 Hook.