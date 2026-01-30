import url from "url";

export function extractYouTubeIds(urlInput) {
  try {
    let urlString = urlInput.trim();
    if (!urlString.startsWith("http")) {
      urlString = "https://" + urlString;
    }

    const parsed = new url.URL(urlString);
    const playlistId = parsed.searchParams.get("list");
    const videoId = parsed.searchParams.get("v") || (parsed.pathname.startsWith('/embed/') ? parsed.pathname.split('/')[2] : (parsed.pathname === '/watch' ? null : parsed.pathname.slice(1)));

    // Simple check for short links (youtu.be/ID)
    if (parsed.hostname === 'youtu.be') {
      return { playlistId: null, videoId: parsed.pathname.slice(1) };
    }

    return { playlistId, videoId };
  } catch (error) {
    console.error("Error parsing URL:", error);
    return { playlistId: null, videoId: null };
  }
}
