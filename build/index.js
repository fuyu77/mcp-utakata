import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "Utakata Tanka Reader",
  version: "1.0.0"
});

server.tool(
  "fetch-user-tanka",
  { userId: z.string() },
  async ({ userId }) => {
    const response = await fetch(`https://utakatanka.jp/api/users/${userId}/posts`);
    if (!response.ok) {
      return {
        content: [{
          type: "text",
          text: `ユーザーID: ${userId} の投稿が見つかりませんでした。`
        }],
        isError: true
      };
    }

    const posts = await response.json();

    const formatted = posts
      .map(post => `- ${post.tanka}（投稿日時: ${post.published_at}、いいね数: ${post.likes_count}）`)
      .join("\n");

    return {
      content: [{
        type: "text",
        text: `ユーザーID: ${userId} の短歌一覧（最新順）:\n\n${formatted}`
      }]
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
