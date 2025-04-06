# 短歌投稿サイトUtakata MCPサーバー

短歌投稿サイトUtakataの情報を連携するMCPサーバーです。

## References

- [短歌投稿サイトUtakata](https://utakatanka.jp/)
- [短歌投稿サイトUtakataのGitHubリポジトリ](https://github.com/fuyu77/utakata)

## Contact

短歌投稿サイトUtakataのMCPサーバーの活用について、何かアイディアがある方は[連絡先](https://utakatanka.jp/about#contacts)までご連絡ください。

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

[MCP Inspector](https://github.com/modelcontextprotocol/inspector)を利用して動作確認できます。

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
