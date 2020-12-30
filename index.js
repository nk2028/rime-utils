const fs = require('fs');

function readRimeDict(filePath) {
  const lines = fs.readFileSync(filePath, { encoding: 'utf8' }).split('\n');
  const m = new Map();
  let headerSkipped = false;
  for (const line of lines) {
    if (!headerSkipped) {
      if (line === '...') {
        headerSkipped = true;
      }
    } else if (line.length > 0 && !line.startsWith('#')) { // skip empty and commented lines
      const parts = line.split('\t');
      if (parts.length >= 2) { // skip lines without pronunciation
        const [k, v] = parts;
        const vs = m.get(k);
        if (vs == null) m.set(k, [v]); // if not seen, create a new list
        else vs.push(v); // if seen, append to the old list
      }
    }
  }
  return m;
}

module.exports = {
  readRimeDict,
};
