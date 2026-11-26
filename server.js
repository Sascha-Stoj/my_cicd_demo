const http = require('http');
const os = require('os');

const app = http.createServer((req, res) => {
  const response = {
    message: 'Hello from CI/CD! 🚀',
    version: process.env.VERSION || 'v1.0.0',
    hostname: os.hostname(),
    timestamp: new Date().toISOString()
  };
  
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(response, null, 2));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});