const https = require('https');

https.get('https://docs.google.com/forms/d/e/1FAIpQLSce9nCqDG8L0HJEnSrA1TwtO_q2mpqP7wkrUR7YKOwZCSWcPA/viewform', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/var FB_PUBLIC_LOAD_DATA_ = (\[.*?\]);\s*<\/script>/);
    if (match) {
      const parsed = JSON.parse(match[1]);
      const items = parsed[1][1];
      const result = items.map(x => {
        if (!x[4]) return null;
        return { title: x[1], id: x[4][0][0] };
      }).filter(Boolean);
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.log('not found');
    }
  });
}).on('error', err => console.log('Error: ' + err.message));
