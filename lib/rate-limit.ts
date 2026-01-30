const windowMs = 60 * 1000; // 1 minute
const maxRequests = 5;
const buckets = new Map<string, number[]>();

export function rateLimit(key: string): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;
  const queue = buckets.get(key) ?? [];
  const filtered = queue.filter((ts) => ts > windowStart);
  filtered.push(now);
  buckets.set(key, filtered);
  return filtered.length <= maxRequests;
}
