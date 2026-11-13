const { readFileSync } = require('node:fs')

/** Reads KEY=value lines from .env next to package.json. Values already in the environment win. */
function loadEnv(file = '.env') {
  let text = ''
  try {
    text = readFileSync(file, 'utf8')
  } catch {
    return
  }
  for (const line of text.split(/\r?\n/)) {
    const match = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/.exec(line)
    if (match && process.env[match[1]] === undefined) process.env[match[1]] = match[2]
  }
}

module.exports = { loadEnv }
