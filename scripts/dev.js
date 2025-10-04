#!/usr/bin/env node
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { buildSite } = require('./build');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

function serveFile(filePath, res) {
  const stream = fs.createReadStream(filePath);
  stream.on('error', (error) => {
    if (error.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('یافت نشد');
      return;
    }
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('خطای غیرمنتظره');
  });
  stream.pipe(res);
}

function startDevServer(port = 3000) {
  buildSite();

  const server = http.createServer((req, res) => {
    const url = req.url || '/';
    const cleanPath = url.split('?')[0];
    const requested = cleanPath === '/' ? '/index.html' : cleanPath;
    const filePath = path.join(distDir, requested);

    const ext = path.extname(filePath);
    const type = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.json': 'application/json; charset=utf-8',
    }[ext] || 'text/plain; charset=utf-8';

    res.setHeader('Content-Type', type);
    serveFile(filePath, res);
  });

  server.listen(port, () => {
    console.log(`NeoMaskan dev server listening on http://localhost:${port}`);
    console.log('Press Ctrl+C to stop.');
  });
}

if (require.main === module) {
  const portArg = process.argv.find((arg) => arg.startsWith('--port='));
  const port = portArg ? Number(portArg.split('=')[1]) : 3000;
  startDevServer(port);
}

module.exports = { startDevServer };
