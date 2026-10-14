---
title: "Why HTTP 304 Not Modified Saves Bandwidth"
videoId: "ZvjDMQjkNhw"
publishedAt: 2026-10-14
officialLinks: []
---

You reload a page you visited an hour ago, and it loads instantly. Open the network tab and half the requests show tiny sizes instead of the full file weight. It's like calling ahead to ask if anything changed since your last visit, instead of getting handed the whole folder again.

- The first time a browser fetches a file, the server sends back an **ETag** (a fingerprint like `a1b2c3`) or a **Last-Modified** timestamp, along with the actual content.
- The browser stores the file and its fingerprint. Next time it needs the same file, it sends that fingerprint back in a header called `If-None-Match`.
- The server compares the fingerprint against the current version of the file instead of just resending it, because checking is cheap and resending is not.
- If the fingerprint matches, the server replies with status `304 Not Modified` and no body at all - often under 200 bytes, just a status line and headers.
- The browser then reuses the copy it already has sitting in its own cache. A `200 OK` always carries the full file; a `304` skips re-sending images, stylesheets, and scripts that haven't changed since last time.

This is why a news site loading the same logo and CSS on every page doesn't re-download them each visit. CDNs and static asset servers rely on 304 constantly, cutting both bandwidth and server load for files that rarely change.

304 means your copy's still good, so nothing new gets sent.
