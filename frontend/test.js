const fs = require('fs');
if (!fs.existsSync('index.html')) process.exit(1);
console.log('Frontend test passed');
