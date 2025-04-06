import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "Utakata Tanka Reader",
  version: "1.0.0"
});

server.resource(
  "user-tanka-list",
  new ResourceTemplate("tanka://user/{userId}", {}),
  async (uri, { userId }) => {
    const response = await fetch(`https://utakatanka.jp/api/users/${userId}/posts`);
    if (!response.ok) {
      return {
        contents: [{
          uri: uri.href,
          text: `ユーザーID: ${userId}の投稿が見つかりませんでした。`
        }]
      };
    }

    const posts = await response.json();

    const formatted = posts
      .map(post => `- ${post.tanka}（投稿日: ${post.published_at}）`)
      .join("\n");

    return {
      contents: [{
        uri: uri.href,
        text: `ユーザーID: ${userId}の短歌一覧（最新順）:\n\n${formatted}`
      }]
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
