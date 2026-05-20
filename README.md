# 木又软件开发有限公司官网

基于 Next.js 14 App Router、TypeScript、Tailwind CSS、Framer Motion 和 Lucide React 构建的企业宣传官网。

## 本地启动

```bash
npm install
npm run dev
```

默认访问地址：

```text
http://localhost:3000
```

## 构建检查

```bash
npm run build
```

## 页面

- `/` 首页
- `/services` 服务详情
- `/cases` 案例展示
- `/about` 关于我们
- `/contact` 联系我们

## 部署

项目可直接部署到 Vercel。生产构建命令为 `npm run build`，输出由 Next.js 托管。

### Vercel 免费自动部署

1. 将本项目推送到 GitHub 仓库。
2. 打开 Vercel，选择 `Add New Project`。
3. 导入该 GitHub 仓库，Framework Preset 选择 `Next.js`。
4. 保持默认构建配置，或使用本项目的 `vercel.json`：
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Development Command: `npm run dev`
5. 点击 Deploy。之后每次推送到 GitHub 主分支，Vercel 会自动重新部署。
