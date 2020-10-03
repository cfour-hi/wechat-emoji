# @zpiagu/wechat-emoji

> 微信 emoji 表情插件，包含表情面板、文字转表情功能。

## 项目说明

### 用户故事

背景：我司自有一套类 [云雀客服](https://www.yunque360.com/) 的微信公众号管理系统，与公众号粉丝进行聊天互动。

1. 我是一名微信公众号客服，我希望可以给粉丝发送带表情的消息，而不是干巴巴的文字，这样能够让粉丝觉得更亲切、更有温度。
2. 我是一名微信公众号客服，粉丝发送过来的消息，表情无法正常显示。我希望能够显示出表情，这样能够让我更容易理解用户的语气。

<!-- 例： -->

### 需求分析

微信内的表情大多是微信团队自己设计的，非标准 [Unicode emoji](https://unicode.org/emoji/charts/full-emoji-list.html)。  
在网络传输中，微信非标准 Unicode emoji 使用别名代替，比如 “[微笑]” 或 “/::)”，目前已知是这两种格式的别名。标准 Unicode emoji 因为本身就是 Unicode 字符，所以可以直接在网页中显示。

### 需求确认

1. 表情面板
2. 表情别名解析、转换

<!-- | 表情 | 别名   |
| ---- | ------ |
| 😄   | \ue415 |
| 😷   | \ue40c |
| 😂   | \ue412 |
| 😝   | \ue409 |
| 😳   | \ue40d |
| 😱   | \ue107 |
| 😔   | \ue403 |
| 😒   | \ue40e |
| 👻   | \ue11b |
| 🙏   | \ue41d |
| 💪   | \ue14c |
| 🎉   | \ue312 |
| 🎁   | \ue112 | -->

<!-- ![微信 emoji 表情集合](./wechat-emoji-panel.png) -->

## 使用说明

### 安装依赖

```bash
yarn add @zpiagu/wechat-emoji
```

### 示例

[Demo](./demo)

## API 说明

### WechatEmojiPanel

> 微信 emoji 表情面板类

将生成的表情面板 Element 插入指定的 el 容器元素。

| 属性     | 类型     | 描述                                             |
| -------- | -------- | ------------------------------------------------ |
| el       | Element  | 表情面板容器元素                                 |
| onSelect | Function | 点击选中表情的回调函数，参数：点击选中的表情别名 |

### convertAlt2Emoji

> 将表情别名转换为 img element

传入表情别名，返回 img element

### convertText2Emoji

> 将文本中的表情别名转换为 img element

传入一段文本，返回一段带 img element 的文本。
