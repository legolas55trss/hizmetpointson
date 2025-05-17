const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('✅ Sunucu çalışıyor!\n');
});

// Tüm IP'lerden gelen bağlantıları dinlemesi için '0.0.0.0' kullanılmalı
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Sunucu http://51.21.196.118:${PORT} adresinde çalışıyor`);
});
