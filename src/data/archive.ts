export interface ArchiveItem {
  name: string;
  blurb: string;
  stack: string[];
}

export interface ArchiveCategory {
  category: string;
  items: ArchiveItem[];
}

export const archive: ArchiveCategory[] = [
  {
    category: 'Full-stack apps',
    items: [
      { name: 'flowboard', blurb: 'Real-time collaborative Kanban board with live drag & drop sync', stack: ['React', 'Socket.IO', 'SQLite'] },
      { name: 'sniply', blurb: 'URL shortener with click analytics dashboard', stack: ['React', 'Chart.js', 'Express'] },
      { name: 'splitpay', blurb: 'Group expense splitter with min-cash-flow debt simplification', stack: ['React', 'JWT', 'SQLite'] },
      { name: 'pollhub', blurb: 'Live-updating polling app', stack: ['React', 'Socket.IO', 'Chart.js'] },
      { name: 'markdown-notes', blurb: 'Notes app with FTS5 full-text search and markdown preview', stack: ['React', 'Express'] },
      { name: 'habit-tracker', blurb: 'Habit streaks engine with heatmap calendar', stack: ['React', 'Express', 'JWT'] },
      { name: 'bookmarkly', blurb: 'Bookmark manager with link checker and Netscape import/export', stack: ['React', 'Express'] },
      { name: 'recipe-box', blurb: 'Recipe manager with pantry-match scoring', stack: ['React', 'Express'] },
      { name: 'pastebin', blurb: 'Paste service with expiry, burn-after-read, password locks', stack: ['React', 'Express'] },
      { name: 'feedr', blurb: 'RSS/Atom aggregator with hand-written feed parser', stack: ['React', 'Express'] },
      { name: 'chatarena', blurb: 'Real-time chat rooms with presence and flood control', stack: ['React', 'Socket.IO'] },
      { name: 'flagship', blurb: 'Feature-flag service with targeting rules and deterministic rollouts', stack: ['React', 'Express'] },
      { name: 'pomoflow', blurb: 'Pomodoro timer with stats heatmap', stack: ['React', 'localStorage'] },
      { name: 'colorkit', blurb: 'Palette generator + WCAG contrast toolkit', stack: ['React', 'TypeScript'] },
    ],
  },
  {
    category: 'APIs & services',
    items: [
      { name: 'blog-api', blurb: 'Blogging engine with roles, drafts, slugs', stack: ['Express', 'JWT'] },
      { name: 'auth-service', blurb: 'Auth microservice with refresh-token rotation and reuse detection', stack: ['Express', 'JWT'] },
      { name: 'currency-api', blurb: 'Exchange-rate API with cross-rate pivoting and TTL cache', stack: ['Express', 'SQLite'] },
      { name: 'inventory-api', blurb: 'Warehouse service on an append-only movements ledger', stack: ['Express'] },
      { name: 'file-vault-api', blurb: 'Streaming file storage with content-addressed dedup', stack: ['Express', 'streams'] },
      { name: 'jsonapi-forge', blurb: 'Instant REST API from a JSON schema', stack: ['Express'] },
      { name: 'uptime-monitor', blurb: 'Uptime monitor with incident log and status badges', stack: ['Express', 'fetch'] },
      { name: 'jobq', blurb: 'Durable job queue with leases, retries, backoff, DLQ', stack: ['Express', 'SQLite'] },
    ],
  },
  {
    category: 'Libraries',
    items: [
      { name: 'csvforge', blurb: 'RFC 4180 CSV toolkit with streaming parser', stack: ['Node'] },
      { name: 'cronlingo', blurb: 'Cron parser with human descriptions and next-run math', stack: ['Node'] },
      { name: 'ratelimit-kit', blurb: 'Four rate-limit algorithms + middleware', stack: ['Node'] },
      { name: 'cachekit', blurb: 'LRU+TTL cache with memoize dedup', stack: ['Node'] },
      { name: 'validify', blurb: 'Chainable schema validation library', stack: ['Node'] },
      { name: 'jsondiff', blurb: 'Structural JSON diff with LCS move detection', stack: ['Python'] },
      { name: 'netmask', blurb: 'IPv4/IPv6 subnet calculator', stack: ['Python'] },
      { name: 'marksmith', blurb: 'Seeded Markov chain text generator', stack: ['Python'] },
      { name: 'hexy', blurb: 'Hex dump viewer with reverse parser', stack: ['Python'] },
    ],
  },
  {
    category: 'CLI & automation',
    items: [
      { name: 'md2html', blurb: 'Hand-written Markdown→HTML converter with sanitizer', stack: ['Node'] },
      { name: 'todo-cli', blurb: 'Terminal task manager', stack: ['Node'] },
      { name: 'backup-rotator', blurb: 'Backup tool with tar writer + GFS retention', stack: ['Node'] },
      { name: 'envvault', blurb: 'Encrypted .env secrets manager, AES-256-GCM', stack: ['Node'] },
      { name: 'log-sentinel', blurb: 'Log watcher with webhook alerting', stack: ['Node'] },
      { name: 'gitstats', blurb: 'Git repository analytics CLI', stack: ['Node'] },
      { name: 'reqspy', blurb: 'HTTP request inspector for webhook debugging', stack: ['Node'] },
    ],
  },
  {
    category: 'Algorithms & visualizers',
    items: [
      { name: 'sortscope', blurb: 'Sorting algorithm visualizer + benchmark lab', stack: ['vanilla JS'] },
      { name: 'shortpath', blurb: 'Pathfinding playground: BFS/Dijkstra/A*', stack: ['vanilla JS'] },
    ],
  },
];

export const archiveCount = archive.reduce((n, c) => n + c.items.length, 0);
