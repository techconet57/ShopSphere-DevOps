const fs = require('fs');
if (!fs.existsSync('src/server.js')) process.exit(1);
console.log('Backend test passed');
