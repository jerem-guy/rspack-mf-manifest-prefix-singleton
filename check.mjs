import { readFileSync } from 'node:fs'

const manifest = JSON.parse(readFileSync('dist/mf-manifest.json', 'utf-8'))
console.table(manifest.shared.map(({ name, singleton, requiredVersion }) => ({ name, singleton, requiredVersion })))
