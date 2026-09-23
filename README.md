<div align="center">

# dsh-input-list

**让常用提示词，一键回到 dsh 输入框。**

保存、编辑、删除和复用你的常用内容，点击后追加到当前草稿，不自动发送。

它也可以理解为 dsh 的**提示词收藏夹、Prompt 模板库和可复用文本管理器**，适合保存经常重复使用的工作流指令、角色设定和项目约束。

<p>
  <a href="https://github.com/konglong87/dsh-input-list/releases"><img src="https://img.shields.io/github/v/release/konglong87/dsh-input-list?display_name=tag&sort=semver" alt="Latest Release"></a>
  <a href="https://github.com/konglong87/dsh-input-list/blob/main/LICENSE"><img src="https://img.shields.io/github/license/konglong87/dsh-input-list" alt="License"></a>
  <a href="https://github.com/konglong87/dsh-input-list/stargazers"><img src="https://img.shields.io/github/stars/konglong87/dsh-input-list?style=flat" alt="GitHub Stars"></a>
  <a href="https://github.com/konglong87/dsh-input-list/issues"><img src="https://img.shields.io/github/issues/konglong87/dsh-input-list" alt="GitHub Issues"></a>
</p>

<p>
  <a href="#安装">立即安装</a>
  ·
  <a href="#功能">查看功能</a>
  ·
  <a href="#效果">查看效果</a>
  ·
  <a href="https://github.com/konglong87/dsh-input-list/releases">下载 Release</a>
</p>

</div>

## 一键安装

在已经安装 dsh 的环境中执行：

```bash
dsh plugin --profile web add github:konglong87/dsh-input-list
```

安装完成后重启 dsh：

```bash
dsh --profile web
```

需要指定端口时：

```bash
dsh --profile web --port 3080 --no-open
```

> 当前推荐从 GitHub 或 [Release](https://github.com/konglong87/dsh-input-list/releases) 安装。
> npm 发布是独立渠道，不能把 GitHub 安装命令和 npm 发布混为一谈。

## 项目简介

`dsh-input-list` 是一个面向 dsh 的常用内容插件，适合保存：

- 代码审查要求
- 写作和翻译模板
- 项目背景与约束
- 常用工作流指令
- 反复使用的角色设定

内容保存在 dsh 宿主设置中，跨页面刷新保留。点击列表条目只会把正文追加到当前输入框，原有草稿会被保留，也不会自动发送。

## 功能

| 能力 | 说明 |
| --- | --- |
| `☆` 快捷入口 | 在 dsh 输入框旁打开常用内容列表 |
| 新增内容 | 自定义名称和正文 |
| 编辑内容 | 修改已有名称或正文 |
| 删除内容 | 二次确认后删除，避免误操作 |
| 持久化保存 | 使用 dsh 设置服务保存，刷新后仍可读取 |
| 一键回填 | 点击条目追加到当前草稿，不覆盖、不自动发送 |
| 外观适配 | 支持浅色和深色外观 |
| 弹层定位 | 根据窗口边界自动调整位置 |

容量限制：

| 项目 | 限制 |
| --- | ---: |
| 条目数量 | 100 条 |
| 名称长度 | 80 个字符 |
| 正文长度 | 12,000 个字符 |

> 请不要在共享 dsh 宿主中保存密码、API Key 或其他敏感信息。

## 效果

以下截图来自真实 dsh 页面，使用隔离测试环境和演示内容。

<div align="center">
  <img src="docs/images/snippet-list.png" alt="常用内容列表" width="720">
  <br>
  <sub>打开常用内容列表，查看、编辑或删除条目</sub>
</div>

<br>

<div align="center">
  <img src="docs/images/snippet-editor.png" alt="编辑常用内容" width="720">
  <br>
  <sub>编辑名称和正文后保存</sub>
</div>

<br>

<div align="center">
  <img src="docs/images/snippet-insert.png" alt="回填到输入框" width="720">
  <br>
  <sub>点击条目后追加到草稿，不自动发送</sub>
</div>

## 使用

1. 打开 dsh 对话页面，找到输入框旁的 `☆`。
2. 点击 `+`，填写内容名称和正文，然后保存。
3. 点击列表中的条目，将正文追加到当前草稿。
4. 点击铅笔图标编辑，点击垃圾桶图标并确认后删除。

插件默认附带三条演示内容，可以直接编辑或删除。已有输入与新内容之间会自动补换行。

## 常见问题

### 这是提示词管理器吗？

是。它可以保存、编辑、删除和复用常用提示词、Prompt 模板、工作流指令和其他可复用文本。

### 点击条目会自动发送吗？

不会。点击条目只会把内容追加到当前草稿，发送前仍由用户确认。

### 它和 Skill 有什么区别？

常用内容是用户自己保存的文本；Skill 是由 dsh 宿主加载的结构化工作方式。需要选择 Skill 时，请使用
[`dsh-skills-input`](https://github.com/konglong87/dsh-skills-input)。

### 内容保存在哪里？

内容保存在 dsh 宿主设置中，不建立独立数据库；刷新页面后仍然保留。

## 更新与卸载

更新 GitHub 安装：

```bash
dsh plugin --profile web add github:konglong87/dsh-input-list
```

查看已安装插件：

```bash
dsh plugin --profile web list
```

卸载插件：

```bash
dsh plugin --profile web remove dsh-input-list
```

更新或卸载后请重启对应的 dsh profile。

## 兼容性

核心功能依赖以下 dsh 能力：

- `conversation.input.right` 输入框插槽
- `settingsScope` 设置服务

历史用户消息下方的快捷收藏属于可选增强能力。只有宿主提供
`conversation.chat.user-actions` 插槽时才显示；缺少该插槽时，输入框常用内容功能仍可正常使用。

本插件不会修改用户的 dsh 安装，也不会自动注入宿主补丁。更多验证信息见
[验证记录](docs/VERIFICATION.md)。

## 开发

```bash
git clone https://github.com/konglong87/dsh-input-list.git
cd dsh-input-list
npm ci
npm run build
npm test
npm pack --dry-run
```

仓库包含构建产物，便于直接从 GitHub 安装。修改源码后请重新执行 `npm run build`。

| 路径 | 职责 |
| --- | --- |
| `cordis.patch.yml` | 声明 dsh 插件加载方式 |
| `src/host.js` | 注册设置结构与服务端校验 |
| `src/client.jsx` | 注册客户端入口和服务依赖 |
| `src/panel.jsx` | 列表、编辑器、删除确认和回填交互 |
| `src/model.js` | 常量、校验、条目操作和草稿拼接 |
| `src/styles.css` | 插件样式 |
| `index.js` / `client.js` | dsh 服务端与浏览器构建产物 |
| `tests/` | 加载、兼容性和数据操作测试 |

## 版本与文档

- [版本记录](CHANGELOG.md)
- [验证记录](docs/VERIFICATION.md)
- [发布指南](PUBLISH.md)
- [宿主集成说明](HOST-INTEGRATION.md)
- [问题反馈](https://github.com/konglong87/dsh-input-list/issues)

## 开源协议

本项目基于 [MIT License](LICENSE) 开源。

反馈问题时请附 dsh 版本、插件版本、安装方式、复现步骤和脱敏截图。
请不要上传登录 token、API Key 或个人会话内容。
