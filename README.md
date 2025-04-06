# 短歌投稿サイトUtakata MCPサーバー

📝 このリポジトリは、Rails製の短歌投稿サイト「[Utakata](https://utakatanka.jp)」と、Claude DesktopなどのMCP対応クライアントを連携させるための **MCPサーバーの実装** です。

MCP（Model Context Protocol）を使うことで、LLM（大規模言語モデル）に対して、ユーザーの投稿データを安全かつ柔軟に提供できるようになります。

## Getting started

### Installation

```
npm install
```

### MCPサーバーの起動

```
node build/index.js
```

または

```
npm run start
```

### MCP Inspectorでの動作確認

```
npx @modelcontextprotocol/inspector npm run start
```

## tool: fetch-user-tanka

指定されたユーザーIDの短歌の一覧を取得して、以下の形式で返します。

```md
# ユーザーID: 5 の短歌一覧（最新順）

- 片耳にマスクをかけて池の面をながれる風に呼応している（投稿日時: 2021-05-15T17:39:00.000+09:00、いいね数: 32）
- 人びとの残りをもとめ散る花の上を歩いてゆく鳩の群れ（投稿日時: 2021-03-29T13:45:16.888+09:00、いいね数: 17）
```
