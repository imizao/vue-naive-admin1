<p align="center">
  <a href="https://github.com/zclzone/vue-naive-admin">
    <img alt="Vue Naive Admin Logo" width="200" src="https://assets.qszone.com/images/logo_qs.svg">
  </a>
</p>
<p align="center">
  <a href="https://github.com/zclzone/vue-naive-admin/actions"><img allt="checks" src="https://badgen.net/github/checks/zclzone/vue-naive-admin"/></a>
  <a href="https://github.com/zclzone/vue-naive-admin"><img allt="stars" src="https://badgen.net/github/stars/zclzone/vue-naive-admin"/></a>
  <a href="https://github.com/zclzone/vue-naive-admin"><img allt="forks" src="https://badgen.net/github/forks/zclzone/vue-naive-admin"/></a>
  <a href="./LICENSE"><img allt="MIT License" src="https://badgen.net/github/license/zclzone/vue-naive-admin"/></a>
</p>


### 简介

[Vue Naive Admin](https://github.com/zclzone/vue-naive-admin) 是一个 **完全开源免费且允许商用** 的后台管理模板，基于 `Vue3、Vite2、Pinia、Unocss 和 Naive UI` 等前端最新技术栈。相较于其他比较流行的后台管理模板，此项目更加简洁、轻量，风格清新，学习成本非常低，非常适合中小型项目或者个人项目。

### 功能

- 🍒 集成 [Naive UI](https://www.naiveui.com)，尤大推荐的 UI 组件库
- 🍑 集成登陆、注销及权限验证
- 🍐 集成多环境配置，dev、测试、生产和github pages环境
- 🍎 集成 `eslint + prettier`，代码约束和格式化统一
- 🍌 集成 `husky + commitlint`，代码提交规范化
- 🍉 集成 `Mock` 接口服务，dev 环境和发布环境都支持，可动态配置是否启用 mock 服务，不启用时不会加载 mock 包，减少打包体积
- 🍍 集成 `pinia`，vuex 的替代方案，轻量、简单、易用
- 📦 集成 `unplugin` 插件，自动导入，解放双手，开发效率直接起飞
- 🤹 集成 `iconify` 图标，支持自定义 svg 图标, 优雅使用icon
- 🍇 集成 `unocss`，antfu 开源的原子 css 解决方案，非常轻量
- 🍏 二次封装 Axios，支持多 axios 实例
- 🍋 二次封装 localStorage 和 sessionStorage，支持设置过期时间

### 预览

[https://template.qszone.com](https://template.qszone.com)

[https://zclzone.github.io/vue-naive-admin](https://zclzone.github.io/vue-naive-admin)

### 文档

[Vue Naive Admin Docs](https://zclzone.github.io/vue-naive-admin-docs)

[羽雀文档：Vue Naive Admin](https://www.yuque.com/qszone/vue-naive-admin)

### 快速开始

```shell
# 推荐配置git autocrlf 为 false（本项目规范使用lf换行符，此配置是为防止git自动将源文件转换为crlf）
# 不清楚为什么要这样做的请参考这篇文章：https://www.freesion.com/article/4532642129
git config --global core.autocrlf false

# 克隆项目
git clone https://github.com/zclzone/vue-naive-admin.git

# 进入项目目录
cd vue-naive-admin

# 安装依赖(建议使用pnpm: https://pnpm.io/zh/installation)
npm i -g pnpm # 装了可忽略
pnpm i # 或者 npm i

# 启动
pnpm dev
```

### 构建发布

```shell
# 构建测试环境
pnpm build:test

# 构建github pages环境
pnpm build:github

# 构建生产环境
pnpm build
```

### 其他指令

```shell
# eslint代码格式检查
pnpm lint

# 代码检查并修复
pnpm lint:fix

# 预览发布包效果（需先执行构建指令）
pnpm preview

# 提交代码（husky+commitlint）
pnpm cz
```

### 规范

#### git commit 规范

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
- `mod` 不确定分类的修改
- `release` 发布

### 入群交流

<p>
  <img src="https://assets.qszone.com/image/入群.png" />
</p>


