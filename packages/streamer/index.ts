import { serve } from "bun";
import ytdl from "ytdl-core";

serve({
  fetch(req) {
    const url = new URL(req.url);
    const youtubeUrl = url.searchParams.get("url");

    if (!youtubeUrl) {
      return new Response("Missing url query parameter", { status: 400 });
    }

    const audioStream = ytdl(youtubeUrl, { filter: "audioonly" });

    return new Response(audioStream, {
      headers: {
        "Content-Type": "audio/mpeg",
      },
    });
  },
  port: 3001,
});
