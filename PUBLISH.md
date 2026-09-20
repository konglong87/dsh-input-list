# 维护者发布指南

## 三种操作的区别

| 命令 | 作用 |
| --- | --- |
| `git push` | 上传源码与文档到 GitHub |
| `npm publish` | 发布可通过包名安装的 npm 包 |
| `dsh plugin --profile web add ...` | 安装到本机 profile，不是发布 |

GitHub 仓库：`konglong87/dsh-input-list`，npm 包名：`dsh-input-list`。
GitHub 公开不代表 npm 已发布；GitHub 私有也不影响已公开发布的 npm 包被下载。

## 发布前检查

在克隆后的 `dsh-input-list` 目录执行：

```bash
npm ci
npm run build
npm test
git diff --check
npm pack --dry-run
```

检查 `package.json`、`index.js`、`client.js`、`cordis.patch.yml` 与文档都在包内，
没有 `.runtime`、凭据、个人设置、测试日志或 `node_modules`。
在隔离的 dsh profile 中安装、验收新增、编辑、刷新保存、回填不发送和删除。
截图只能包含演示数据。

`web` 是内置 profile，首次运行 `dsh --profile web` 会准备它。
不要使用 `--profile web --from-default-profile web`，该命令不能创建同名内置 profile。
自定义 profile 应选择另外的名字，例如：

```bash
dsh --profile snippets-test --from-default-profile web
```

上述命令会启动测试实例；停止后再安装测试包。独立 profile 不保证设置与其他 profile 隔离，
测试真实持久化时应使用独立 `DSH_HOME`，且不要复制个人凭据。

## 发布 GitHub 版本

1. 更新版本记录和验证记录。
2. 将源码、构建产物和文档提交到主分支。
3. 给经过验证的提交打 tag。
4. 用 `npm pack` 生成安装包，附到对应 GitHub Release。

首次版本示例（后续发布请替换版本）：

```bash
git push origin main
git tag v0.1.0
git push origin v0.1.0
npm pack
gh release create v0.1.0 dsh-input-list-0.1.0.tgz \
  --title "v0.1.0" --notes-file CHANGELOG.md
```

不要覆盖已发布 tag。同一版本的构建包应与该 tag 的源码一致。
Release 创建完成后，核对公开下载与 README 安装命令。

用户安装主分支：

```bash
dsh plugin --profile web add github:konglong87/dsh-input-list
```

用户安装固定版本：

```bash
dsh plugin --profile web add 'github:konglong87/dsh-input-list#v0.1.0'
```

也可以下载 Release 的 `.tgz` 后用绝对路径安装。
GitHub 安装不要求 npm 发布，但可能仍需联网获取第三方依赖。

## 可选：发布到 npm

**这一步是独立的公开发布操作，不随 GitHub push 自动发生。**

先注册 npm 账号并完成发布所需认证。登录与确认身份：

```bash
npm login --registry=https://registry.npmjs.org/
npm whoami --registry=https://registry.npmjs.org/
npm view dsh-input-list version --registry=https://registry.npmjs.org/
```

`E404` 只能说明当前未查到可访问包，不能保证包名一定可注册。
确认包名属于自己或可注册，所有检查通过后才执行：

```bash
npm publish --registry=https://registry.npmjs.org/
npm view dsh-input-list version --registry=https://registry.npmjs.org/
```

按 npm 当时的提示完成认证；不要把 token 写入仓库或公开命令。
发布成功且核对所有者和版本后，用户才应通过裸包名安装：

```bash
dsh plugin --profile web add dsh-input-list
```

## 升级版本

不能重复发布同一 npm 包版本。显式关闭 npm 自动提交和打 tag，
方便先检查构建产物与版本记录，再统一提交：

```bash
npm version patch --no-git-tag-version
npm run build
npm test
npm pack --dry-run
```

`patch` 用于小修复，兼容的新功能可用 `minor`，不兼容变更用 `major`。
更新 `CHANGELOG.md` 后提交对应文件，推送并创建新的 tag/Release。
如果选择 npm 渠道，再单独执行 `npm publish`。

## 常见问题

- `ENEEDAUTH`：未登录或认证失效，重新登录并用 `npm whoami` 检查。
- `403`：核对包名所有权、认证要求、token 权限和 registry。
- 相同版本无法发布：升版本、重新构建和验证，不要反复发布旧版本。
- GitHub 安装失败：确认本机 Git 可用、能访问 GitHub，或改用 Release 安装包。
- 没有历史消息星标：正常降级；该可选功能不属于原版 dsh 的保证接口。

不发布本机的宿主 bundle 补丁，不把实验历史消息入口宣传成通用能力。
