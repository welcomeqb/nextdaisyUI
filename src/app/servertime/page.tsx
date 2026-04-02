import { headers } from "next/headers";
import { platform } from "os";

export const dynamic = "force-dynamic";

type NodeServerInfo = {
  time: string;
  timezone: string;
  offset: number;
  nodeVersion: string;
  platform: string;
  arch: string;
  pid: number;
  uptime: number;
  memory: {
    rss: string;
    heapTotal: string;
    heapUsed: string;
    external: string;
  };
  cpu: {
    user: string;
    system: string;
  };
  type: "node";
};

type CloudflareServerInfo = {
  time: string;
  timezone: string;
  offset: number;
  runtime: string;
  deployment: string;
  location: string;
  requestMethod: string;
  type: "cloudflare";
};

function detectRuntime(): "cloudflare" | "node" {
  const g = globalThis as Record<string, unknown>;
  if (g.EdgeRuntime !== undefined || g.cf !== undefined) {
    return "cloudflare";
  }
  if (process.env.VERCEL) {
    return "node";
  }
  return "node";
}

function getNodeServerInfo(): NodeServerInfo {
  const mem = process.memoryUsage();
  const cpu = process.cpuUsage();
  const os = platform();

  return {
    time: new Date().toISOString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    offset: -new Date().getTimezoneOffset(),
    nodeVersion: process.version,
    platform: os,
    arch: process.arch,
    pid: process.pid,
    uptime: process.uptime(),
    memory: {
      rss: `${(mem.rss / 1024 / 1024).toFixed(2)} MB`,
      heapTotal: `${(mem.heapTotal / 1024 / 1024).toFixed(2)} MB`,
      heapUsed: `${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB`,
      external: `${(mem.external / 1024 / 1024).toFixed(2)} MB`,
    },
    cpu: {
      user: `${(cpu.user / 1000000).toFixed(2)}s`,
      system: `${(cpu.system / 1000000).toFixed(2)}s`,
    },
    type: "node",
  };
}

function getCloudflareServerInfo(): CloudflareServerInfo {
  const g = globalThis as Record<string, unknown>;
  const cf = g.cf as Record<string, unknown> | undefined;
  const req = g.request as Record<string, unknown> | undefined;
  const runtime = typeof g.EdgeRuntime === "string" ? g.EdgeRuntime : "workers";

  return {
    time: new Date().toISOString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    offset: -new Date().getTimezoneOffset(),
    runtime,
    deployment: "Cloudflare Workers",
    location: cf?.colo as string || "unknown",
    requestMethod: req?.method as string || "unknown",
    type: "cloudflare",
  };
}

export default async function ServerTime() {
  const headersList = await headers();
  const runtime = detectRuntime();
  
  const serverInfo = runtime === "cloudflare" 
    ? getCloudflareServerInfo() 
    : getNodeServerInfo();

  const isCloudflare = serverInfo.type === "cloudflare";

  const requestHeaders: Record<string, string> = {};
  headersList.forEach((value: string, key: string) => {
    requestHeaders[key] = value;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Server Information</h1>
      <div className="text-center mb-8">
        <span className={`badge badge-lg ${isCloudflare ? "badge-warning" : "badge-info"}`}>
          {isCloudflare ? "Cloudflare Workers (Edge)" : "Node.js (Vercel)"}
        </span>
      </div>

      {isCloudflare ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl">Time</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Current Time:</span>
                  <span>{serverInfo.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Timezone:</span>
                  <span>{serverInfo.timezone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">UTC Offset:</span>
                  <span>{serverInfo.offset} minutes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl">Edge Runtime</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Runtime:</span>
                  <span>{serverInfo.runtime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Deployment:</span>
                  <span>{serverInfo.deployment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>{serverInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl">Request</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Method:</span>
                  <span>{serverInfo.requestMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Note:</span>
                  <span>Limited server info on Edge</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl">Environment</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Platform:</span>
                  <span>Edge (Cloudflare)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Server Access:</span>
                  <span>Limited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl">Time</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Current Time:</span>
                  <span>{serverInfo.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Timezone:</span>
                  <span>{serverInfo.timezone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">UTC Offset:</span>
                  <span>{serverInfo.offset} minutes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl">System</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Node.js:</span>
                  <span>{serverInfo.nodeVersion}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Platform:</span>
                  <span>{serverInfo.platform}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Architecture:</span>
                  <span>{serverInfo.arch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">PID:</span>
                  <span>{serverInfo.pid}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Uptime:</span>
                  <span>{serverInfo.uptime.toFixed(2)}s</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl">Memory Usage</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">RSS:</span>
                  <span>{serverInfo.memory.rss}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Heap Total:</span>
                  <span>{serverInfo.memory.heapTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Heap Used:</span>
                  <span>{serverInfo.memory.heapUsed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">External:</span>
                  <span>{serverInfo.memory.external}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl">CPU</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">User CPU:</span>
                  <span>{serverInfo.cpu.user}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">System CPU:</span>
                  <span>{serverInfo.cpu.system}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl">Request Headers</h2>
            <div className="overflow-x-auto">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>Header</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(requestHeaders).map(([key, value]) => (
                    <tr key={key}>
                      <td className="font-medium">{key}</td>
                      <td className="truncate max-w-xs">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}