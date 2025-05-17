const http = require('http');

const PORT = 3000;
const HOST = '0.0.0.0';  // Tüm IP adreslerinden bağlantıyı kabul etmek için

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('✅ Sunucu çalışıyor!\n');
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 Sunucu http://${HOST}:${PORT} adresinde çalışıyor`);
});
