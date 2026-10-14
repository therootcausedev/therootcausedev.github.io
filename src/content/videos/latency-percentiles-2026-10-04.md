---
title: "Why p99 Latency Matters More Than Your Average"
videoId: "vc031ajq9Xo"
publishedAt: 2026-10-13
officialLinks: []
---

Your dashboard shows average latency sitting at a steady, reassuring number. Support tickets are piling up anyway, with people saying the app hangs. Here's the gap nobody explains.

- **Average** latency adds up every response time and divides by the count. One request that took 10 seconds gets buried under nine thousand that took 50 milliseconds.
- **Percentiles** work differently: sort every request from fastest to slowest, then ask what value sits at a given position in that line.
- **p50** is the median: half of requests finished faster than this number, half finished slower. It's the typical experience, not the extreme one.
- **p90** means 90% of requests completed at or under that time, and the slowest 10% is where real pain starts to show up.
- **p99** is the slowest 1 in 100 requests. At low traffic that's nothing, but at a million requests a day, p99 is 10,000 people hitting your worst-case path.
- That tail usually isn't random. It's garbage collection pauses, a cold cache, a database lock, or a retry storm, and averages smooth all of it away.

This is why engineering teams write service level objectives like "p99 under 300 milliseconds," not "average under 100 milliseconds." Tools like Prometheus and Datadog build histograms specifically so you can read these percentiles instead of a single misleading mean.

Average hides the pain. Percentiles show you who's hurting.
