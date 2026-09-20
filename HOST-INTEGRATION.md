# 历史消息入口的宿主集成

这份文档记录本机实验所需的 dsh 改动，不会自动修改安装版。
当前 Git 仓库只包含插件；本机 `deepseek-harness` 源码不在该仓库中。

## 插槽契约

名称：`conversation.chat.user-actions`

- `kind: 'list'`
- `scope: 'session'`
- owner 数据：`{ text: string }`，与复制操作使用相同的消息正文。
- 插件收到 session 作用域的输入框接口以及 owner 数据。
- 仅历史用户消息和已接纳的用户 steering 消息渲染；不为助手消息或临时回显渲染。
- 无插件注册时，原有复制按钮仍正常显示。

## 源码接入位置

路径均相对于 dsh 源码根目录：

1. `packages/client/ui-chat/src/client/contract/slots.ts`
   声明 `UserActionOwnerProps` 及上述 session list 插槽。
2. `packages/client/ui-chat/src/client/chat/MessageIconActions.tsx`
   增加可选的 `leadingActions?: ReactNode`，在内置复制按钮之前渲染。
3. `packages/client/ui-chat/src/client/chat/MessageItem.tsx`
   为 `UserMessageNodeView` 增加
   `PropsRenderSlots<'conversation.chat.user-actions'>`，
   使用 `renderSlot('conversation.chat.user-actions', { text })`
   作为 `MessageIconActions.leadingActions`。
4. `packages/client/ui-chat/src/client/chat/register-node-renderers.ts`
   在 `user`、`steering` renderer 的 `children` 中声明
   `{ 'conversation.chat.user-actions': { kind: 'list', scope: 'session' } }`。

不要把收藏数据存入宿主 renderer：宿主只暴露消息操作插槽，
编辑、校验、持久化和回填继续由插件负责。

## 发布前缺口

本机源码全量 client 构建曾因缺少 generated remote 类型入口失败；
真实页面验收使用的是本机安装版的受控 bundle 补丁。
因此，当前插件提交不能视为可在任意官方 dsh 安装上复现的完整交付。

正式分发前应在目标 dsh 版本中落实并构建该插槽，保存对应宿主补丁，
再在干净 profile 中验证：无插件、安装插件、卸载插件、历史消息新增、
修改保存、刷新读取、回填不发送、删除、旧宿主降级。
