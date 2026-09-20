window.__ModuleLoader__.load({id:"dsh-input-list",factory:(require)=>{var module={exports:{}};var exports=module.exports;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.jsx
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var import_react4 = __toESM(require("react"), 1);

// src/panel.jsx
var import_react3 = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react2 = require("react");

// node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// node_modules/lucide-react/dist/esm/Icon.js
var import_react = require("react");

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/Icon.js
var Icon = (0, import_react.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return (0, import_react.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react2.forwardRef)(
    ({ className, ...props }, ref) => (0, import_react2.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/pencil.js
var Pencil = createLucideIcon("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);

// node_modules/lucide-react/dist/esm/icons/plus.js
var Plus = createLucideIcon("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);

// node_modules/lucide-react/dist/esm/icons/star.js
var Star = createLucideIcon("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/trash-2.js
var Trash2 = createLucideIcon("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);

// node_modules/lucide-react/dist/esm/icons/x.js
var X = createLucideIcon("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);

// src/model.js
var PLUGIN_ID = "dsh-input-list";
var NAMESPACE = "dsh-input-list-demo";
var SLOT = "conversation.input.right";
var USER_ACTION_SLOT = "conversation.chat.user-actions";
var LIMITS = Object.freeze({ items: 100, title: 80, content: 12e3, id: 100 });
function draftFromMessage(text) {
  return {
    title: (text.split(/\r?\n/).find((line) => line.trim()) || "").trim().slice(0, LIMITS.title),
    content: text
  };
}
function validateItems(items) {
  if (!Array.isArray(items) || items.length > LIMITS.items) throw new Error(`\u6700\u591A\u4FDD\u5B58 ${LIMITS.items} \u6761\u5185\u5BB9`);
  const ids = /* @__PURE__ */ new Set();
  for (const item of items) {
    for (const field of ["id", "title", "content"]) {
      if (typeof item?.[field] !== "string" || !item[field].trim()) throw new Error("\u540D\u79F0\u548C\u6B63\u6587\u4E0D\u80FD\u4E3A\u7A7A");
      if (item[field].length > LIMITS[field]) throw new Error(`${field} \u8D85\u51FA\u957F\u5EA6\u9650\u5236`);
    }
    if (ids.has(item.id)) throw new Error("\u6761\u76EE ID \u4E0D\u80FD\u91CD\u590D");
    ids.add(item.id);
  }
  return items;
}
function saveItem(items, item, editingId) {
  if (editingId && !items.some((row) => row.id === editingId)) throw new Error("\u6761\u76EE\u5DF2\u88AB\u5220\u9664\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u5217\u8868");
  const normalized = { id: editingId || item.id, title: item.title.trim(), content: item.content };
  const next = editingId ? items.map((row) => row.id === editingId ? normalized : row) : [...items, normalized];
  return validateItems(next);
}
function deleteItem(items, id) {
  if (!items.some((row) => row.id === id)) throw new Error("\u6761\u76EE\u5DF2\u88AB\u5220\u9664\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u5217\u8868");
  return items.filter((row) => row.id !== id);
}
function appendDraft(draft, content) {
  return draft + (draft && !draft.endsWith("\n") ? "\n" : "") + content;
}
function persistItems(scope, snapshot, items) {
  if (snapshot.status !== "ready" || !snapshot.writable || snapshot.mode !== "host" || !Number.isInteger(snapshot.revision)) throw new Error("\u8BBE\u7F6E\u5C1A\u672A\u5C31\u7EEA\u6216\u5F53\u524D\u8FDE\u63A5\u4E0D\u652F\u6301\u4FDD\u5B58");
  validateItems(items);
  return scope.mutate([{ op: "set", path: ["items"], value: items }], snapshot.revision);
}

// src/panel.jsx
var PANEL_WIDTH = 360;
var EDGE = 12;
var GAP = 8;
var EMPTY = [];
function IconButton({ label, icon: Icon2, ...props }) {
  return /* @__PURE__ */ import_react3.default.createElement("button", { type: "button", className: "dsh-snippets-icon", "aria-label": label, title: label, ...props }, /* @__PURE__ */ import_react3.default.createElement(Icon2, { size: 16 }));
}
function Editor({ item, pending, onSave, onCancel }) {
  const [title, setTitle] = (0, import_react3.useState)(item?.title || "");
  const [content, setContent] = (0, import_react3.useState)(item?.content || "");
  return /* @__PURE__ */ import_react3.default.createElement("form", { className: "dsh-snippets-editor", onSubmit: (e) => {
    e.preventDefault();
    onSave({ title, content });
  } }, /* @__PURE__ */ import_react3.default.createElement("label", null, "\u540D\u79F0", /* @__PURE__ */ import_react3.default.createElement("input", { "aria-label": "\u540D\u79F0", autoFocus: true, value: title, maxLength: LIMITS.title, disabled: pending, onChange: (e) => setTitle(e.target.value) })), /* @__PURE__ */ import_react3.default.createElement("label", null, "\u6B63\u6587", /* @__PURE__ */ import_react3.default.createElement("textarea", { "aria-label": "\u6B63\u6587", value: content, maxLength: LIMITS.content, rows: 6, disabled: pending, onChange: (e) => setContent(e.target.value) })), content.length > LIMITS.content && /* @__PURE__ */ import_react3.default.createElement("p", { role: "alert" }, "\u6B63\u6587\u8D85\u8FC7 ", LIMITS.content, " \u5B57\uFF0C\u8BF7\u7F29\u77ED\u540E\u4FDD\u5B58\u3002"), /* @__PURE__ */ import_react3.default.createElement("footer", null, /* @__PURE__ */ import_react3.default.createElement("button", { type: "button", disabled: pending, onClick: onCancel }, "\u53D6\u6D88"), /* @__PURE__ */ import_react3.default.createElement("button", { className: "dsh-snippets-primary", type: "submit", disabled: pending || !title.trim() || !content.trim() || content.length > LIMITS.content }, pending ? "\u4FDD\u5B58\u4E2D\u2026" : "\u4FDD\u5B58")));
}
function SnippetPanel({ scope, inputActions, useInput, anchor, onClose, initialText }) {
  const snapshot = (0, import_react3.useSyncExternalStore)((fn) => scope.subscribe(fn), () => scope.getSnapshot());
  const input = useInput((value) => value);
  const items = snapshot.value?.items || EMPTY;
  const [editor, setEditor] = (0, import_react3.useState)(() => initialText === void 0 ? null : {
    item: null,
    fields: draftFromMessage(initialText),
    base: snapshot
  });
  const [removal, setRemoval] = (0, import_react3.useState)(null);
  const [error, setError] = (0, import_react3.useState)("");
  const [pending, setPending] = (0, import_react3.useState)(false);
  const busy = (0, import_react3.useRef)(false);
  const panel = (0, import_react3.useRef)(null);
  const [position, setPosition] = (0, import_react3.useState)(null);
  const writable = snapshot.status === "ready" && snapshot.writable && snapshot.mode === "host";
  const inputLocked = !inputActions || !input || input.phase === "adjudicating" || input.phase === "submitting";
  const full = items.length >= LIMITS.items && !editor?.item;
  (0, import_react3.useEffect)(() => {
    if (snapshot.status === "ready") setEditor((current) => current && current.base.status !== "ready" ? { ...current, base: snapshot } : current);
  }, [snapshot]);
  (0, import_react3.useLayoutEffect)(() => {
    const place = () => {
      const rect = anchor.current.getBoundingClientRect();
      const width = Math.min(PANEL_WIDTH, window.innerWidth - EDGE * 2);
      const above = rect.top - EDGE - GAP;
      const below = window.innerHeight - rect.bottom - EDGE - GAP;
      const up = above >= below;
      setPosition({
        width,
        left: Math.max(EDGE, Math.min(rect.right - width, window.innerWidth - width - EDGE)),
        maxHeight: Math.max(80, up ? above : below),
        ...up ? { bottom: window.innerHeight - rect.top + GAP } : { top: rect.bottom + GAP }
      });
    };
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [anchor]);
  (0, import_react3.useEffect)(() => {
    const outside = (e) => {
      if (!busy.current && !editor && !removal && !panel.current?.contains(e.target) && !anchor.current?.contains(e.target)) onClose();
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [anchor, editor, removal, onClose]);
  async function commit(base, next) {
    if (busy.current) return;
    busy.current = true;
    setPending(true);
    setError("");
    try {
      await persistItems(scope, base, next());
      if (initialText !== void 0) {
        onClose();
        return;
      }
      setEditor(null);
      setRemoval(null);
    } catch (e) {
      setError(`\u4FDD\u5B58\u5931\u8D25\uFF1A${e.message}\u3002\u5185\u5BB9\u5DF2\u4FDD\u7559\uFF1B\u82E5\u5176\u4ED6\u9875\u9762\u5DF2\u4FEE\u6539\uFF0C\u8BF7\u53D6\u6D88\u540E\u91CD\u65B0\u7F16\u8F91\u3002`);
    } finally {
      busy.current = false;
      setPending(false);
    }
  }
  function choose(item) {
    if (inputLocked) return;
    inputActions.setDraft(appendDraft(input.draft, item.content));
    onClose();
  }
  const cancel = () => {
    if (initialText !== void 0) {
      onClose();
      return;
    }
    setEditor(null);
    setRemoval(null);
    setError("");
  };
  return (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react3.default.createElement(
    "section",
    {
      ref: panel,
      className: "dsh-snippets-panel",
      role: "dialog",
      "aria-label": "\u5E38\u7528\u5185\u5BB9",
      style: { ...position, visibility: position ? "visible" : "hidden" },
      onKeyDown: (e) => {
        if (e.key === "Escape" && !pending) {
          e.stopPropagation();
          editor || removal ? cancel() : onClose();
        }
      }
    },
    /* @__PURE__ */ import_react3.default.createElement("header", null, /* @__PURE__ */ import_react3.default.createElement("strong", null, editor ? editor.item ? "\u7F16\u8F91\u5185\u5BB9" : "\u65B0\u589E\u5185\u5BB9" : "\u5E38\u7528\u5185\u5BB9"), /* @__PURE__ */ import_react3.default.createElement("div", null, !editor && !removal && /* @__PURE__ */ import_react3.default.createElement(IconButton, { icon: Plus, label: "\u65B0\u589E\u5185\u5BB9", disabled: !writable || pending || items.length >= LIMITS.items, onClick: () => {
      setError("");
      setEditor({ item: null, base: snapshot });
    } }), /* @__PURE__ */ import_react3.default.createElement(IconButton, { icon: X, label: editor || removal ? "\u53D6\u6D88\u7F16\u8F91" : "\u5173\u95ED\u5217\u8868", disabled: pending, onClick: editor || removal ? cancel : onClose }))),
    snapshot.status === "loading" && /* @__PURE__ */ import_react3.default.createElement("p", { role: "status" }, "\u52A0\u8F7D\u4E2D\u2026"),
    snapshot.status !== "loading" && !writable && /* @__PURE__ */ import_react3.default.createElement("p", { role: "status" }, "\u5F53\u524D\u8FDE\u63A5\u65E0\u6CD5\u4FDD\u5B58\u8BBE\u7F6E"),
    editor && full && /* @__PURE__ */ import_react3.default.createElement("p", { role: "alert" }, "\u6700\u591A\u4FDD\u5B58 ", LIMITS.items, " \u6761\u5185\u5BB9\uFF0C\u8BF7\u5148\u5220\u9664\u4E0D\u9700\u8981\u7684\u6761\u76EE\u3002"),
    error && /* @__PURE__ */ import_react3.default.createElement("p", { className: "dsh-snippets-error", role: "alert" }, error),
    editor ? /* @__PURE__ */ import_react3.default.createElement(
      Editor,
      {
        key: editor.item?.id || "new",
        item: editor.item || editor.fields,
        pending: pending || !writable || full,
        onCancel: cancel,
        onSave: (fields) => commit(editor.base, () => saveItem(editor.base.value.items, {
          ...fields,
          id: editor.item?.id || crypto.randomUUID()
        }, editor.item?.id))
      }
    ) : removal ? /* @__PURE__ */ import_react3.default.createElement("div", { className: "dsh-snippets-confirm" }, /* @__PURE__ */ import_react3.default.createElement("p", null, "\u5220\u9664\u201C", removal.item.title, "\u201D\uFF1F"), /* @__PURE__ */ import_react3.default.createElement("footer", null, /* @__PURE__ */ import_react3.default.createElement("button", { disabled: pending, onClick: cancel }, "\u53D6\u6D88"), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: "dsh-snippets-danger",
        disabled: pending,
        onClick: () => commit(removal.base, () => deleteItem(removal.base.value.items, removal.item.id))
      },
      pending ? "\u5220\u9664\u4E2D\u2026" : "\u786E\u8BA4\u5220\u9664"
    ))) : /* @__PURE__ */ import_react3.default.createElement("ul", { className: "dsh-snippets-list" }, items.map((item) => /* @__PURE__ */ import_react3.default.createElement("li", { key: item.id }, /* @__PURE__ */ import_react3.default.createElement("button", { className: "dsh-snippets-pick", type: "button", disabled: inputLocked, title: item.content, onClick: () => choose(item) }, /* @__PURE__ */ import_react3.default.createElement("strong", null, item.title), /* @__PURE__ */ import_react3.default.createElement("span", null, item.content)), /* @__PURE__ */ import_react3.default.createElement(IconButton, { icon: Pencil, label: `\u7F16\u8F91 ${item.title}`, disabled: !writable || pending, onClick: () => {
      setError("");
      setEditor({ item, base: snapshot });
    } }), /* @__PURE__ */ import_react3.default.createElement(IconButton, { icon: Trash2, label: `\u5220\u9664 ${item.title}`, disabled: !writable || pending, onClick: () => {
      setError("");
      setRemoval({ item, base: snapshot });
    } })))),
    snapshot.status === "ready" && !items.length && !editor && /* @__PURE__ */ import_react3.default.createElement("p", null, "\u6682\u65E0\u5E38\u7528\u5185\u5BB9")
  ), document.body);
}
function MessageSnippetButton({ text, ...props }) {
  const [open, setOpen] = (0, import_react3.useState)(false);
  const anchor = (0, import_react3.useRef)(null);
  if (!text?.trim()) return null;
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      ref: anchor,
      type: "button",
      className: "dsh-snippets-message-star",
      "aria-label": "\u6DFB\u52A0\u5230\u5E38\u7528\u5185\u5BB9",
      title: "\u6DFB\u52A0\u5230\u5E38\u7528\u5185\u5BB9",
      "aria-expanded": open,
      "aria-haspopup": "dialog",
      onClick: () => setOpen(true)
    },
    /* @__PURE__ */ import_react3.default.createElement(Star, { size: 16, "aria-hidden": "true" })
  ), open && /* @__PURE__ */ import_react3.default.createElement(
    SnippetPanel,
    {
      ...props,
      initialText: text,
      anchor,
      onClose: () => {
        setOpen(false);
        anchor.current?.focus();
      }
    }
  ));
}
function SnippetButton(props) {
  const [open, setOpen] = (0, import_react3.useState)(false);
  const anchor = (0, import_react3.useRef)(null);
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      ref: anchor,
      type: "button",
      className: `dsh-snippets-star${open ? " is-open" : ""}`,
      title: "\u5E38\u7528\u5185\u5BB9",
      "aria-label": "\u5E38\u7528\u5185\u5BB9",
      "aria-expanded": open,
      "aria-haspopup": "dialog",
      onClick: () => setOpen((value) => !value)
    },
    "\u2606"
  ), open && /* @__PURE__ */ import_react3.default.createElement(SnippetPanel, { ...props, anchor, onClose: () => {
    setOpen(false);
    anchor.current?.focus();
  } }));
}

// src/styles.css
var styles_default = '.dsh-snippets-star { width:32px; height:32px; flex:none; padding:0; border:0; border-radius:8px; background:transparent; color:inherit; font:24px/1 sans-serif; cursor:pointer; }\n.dsh-snippets-star.is-open { background:#526fc2; color:#fff; }\n.dsh-snippets-message-star { display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; flex:none; padding:0; border:0; border-radius:4px; background:transparent; color:inherit; cursor:pointer; }\n.dsh-snippets-message-star:hover,.dsh-snippets-message-star[aria-expanded="true"] { background:var(--dsw-fill-tertiary, #8882); }\n.dsh-snippets-message-star:focus-visible { outline:2px solid #526fc2; outline-offset:1px; }\n.dsh-snippets-panel { position:fixed; z-index:10000; box-sizing:border-box; overflow:auto; border:1px solid #d8dce6; border-radius:8px; background:#fff; color:#202531; box-shadow:0 8px 24px #0002; font:14px/1.5 system-ui,sans-serif; letter-spacing:0; }\n.dsh-snippets-panel * { box-sizing:border-box; letter-spacing:0; }\n.dsh-snippets-panel header { display:flex; justify-content:space-between; align-items:center; padding:10px 12px; border-bottom:1px solid #e7e9ed; }\n.dsh-snippets-panel header > div { display:flex; gap:4px; }\n.dsh-snippets-panel button { font:inherit; cursor:pointer; }\n.dsh-snippets-panel button:disabled { opacity:.45; cursor:not-allowed; }\n.dsh-snippets-panel button:focus-visible,.dsh-snippets-star:focus-visible { outline:2px solid #526fc2; outline-offset:-2px; }\n.dsh-snippets-icon { display:inline-flex; justify-content:center; align-items:center; width:30px; height:30px; flex:none; padding:0; border:0; border-radius:4px; background:transparent; color:#586174; }\n.dsh-snippets-icon:hover { background:#eceef3; color:#202531; }\n.dsh-snippets-list { list-style:none; margin:0; padding:4px; }\n.dsh-snippets-list li { display:flex; align-items:center; gap:2px; }\n.dsh-snippets-pick { flex:1; min-width:0; border:0; background:transparent; color:inherit; text-align:left; padding:10px 8px; border-radius:4px; }\n.dsh-snippets-pick:hover { background:#f0f3fa; }\n.dsh-snippets-pick strong { display:block; overflow-wrap:anywhere; }\n.dsh-snippets-pick span { display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; overflow-wrap:anywhere; white-space:pre-wrap; color:#687182; font-size:12px; margin-top:3px; }\n.dsh-snippets-panel p { margin:12px; overflow-wrap:anywhere; }\n.dsh-snippets-editor { padding:12px; }\n.dsh-snippets-editor label { display:block; margin-bottom:12px; }\n.dsh-snippets-editor input,.dsh-snippets-editor textarea { display:block; width:100%; margin-top:5px; padding:8px; font:inherit; color:inherit; background:#fff; border:1px solid #bdc4d1; border-radius:4px; }\n.dsh-snippets-editor textarea { resize:vertical; min-height:96px; }\n.dsh-snippets-panel footer { display:flex; justify-content:flex-end; gap:8px; }\n.dsh-snippets-panel footer button { padding:6px 14px; border:1px solid #bdc4d1; border-radius:4px; background:#fff; color:inherit; }\n.dsh-snippets-panel footer .dsh-snippets-primary { background:#526fc2; color:white; border-color:#526fc2; }\n.dsh-snippets-panel footer .dsh-snippets-danger { background:#b42332; color:white; border-color:#b42332; }\n.dsh-snippets-confirm { padding:12px; }\n.dsh-snippets-error { color:#a61e2b; background:#fff0f0; padding:8px; border-radius:4px; }\n@media (prefers-color-scheme:dark) {\n  .dsh-snippets-panel { background:#23252a; color:#eee; border-color:#535761; }\n  .dsh-snippets-panel header { border-color:#535761; }\n  .dsh-snippets-icon { color:#c3c7cf; }\n  .dsh-snippets-icon:hover,.dsh-snippets-pick:hover { background:#343740; color:#fff; }\n  .dsh-snippets-pick span { color:#b5bac5; }\n  .dsh-snippets-editor input,.dsh-snippets-editor textarea,.dsh-snippets-panel footer button { background:#2c2f36; border-color:#69707e; }\n}\n';

// src/client.jsx
var inject = ["slots", "settingsScope"];
function apply(ctx) {
  const scope = ctx.settingsScope.bind({ namespace: NAMESPACE });
  ctx.effect(() => {
    if (typeof document === "undefined") return;
    const style = document.createElement("style");
    style.dataset.plugin = NAMESPACE;
    style.textContent = styles_default;
    document.head.appendChild(style);
    return () => style.remove();
  });
  ctx.slots.inject(SLOT, () => ctx.slots.register({
    name: SLOT,
    id: PLUGIN_ID,
    order: 100
  }, (props) => /* @__PURE__ */ import_react4.default.createElement(SnippetButton, { ...props, scope })));
  ctx.slots.inject(USER_ACTION_SLOT, () => ctx.slots.register({
    name: USER_ACTION_SLOT,
    id: PLUGIN_ID,
    order: 100
  }, (props) => /* @__PURE__ */ import_react4.default.createElement(MessageSnippetButton, { ...props, scope })));
}
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/pencil.js:
lucide-react/dist/esm/icons/plus.js:
lucide-react/dist/esm/icons/star.js:
lucide-react/dist/esm/icons/trash-2.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
return module.exports;}});
