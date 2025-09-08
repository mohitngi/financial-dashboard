const { networkInterfaces } = require('os');

function getLocalIpAddress() {
  const nets = networkInterfaces();
  const results = {};

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (net.family === 'IPv4' && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }

  // Return the first non-internal IPv4 address
  for (const name of Object.keys(results)) {
    if (results[name][0]) {
      return results[name][0];
    }
  }
  
  return 'localhost';
}

console.log(getLocalIpAddress());
