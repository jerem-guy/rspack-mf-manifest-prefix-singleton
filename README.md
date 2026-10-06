# rspack-mf-manifest-prefix-singleton

Minimal reproduction: `mf-manifest.json` reports `singleton: true` for subpaths matched by a shared prefix key (`'ds/'`) configured with `singleton: false`. An exact key (`lib`) with the same config is reported correctly.

```sh
npm install
npm run build
npm run check   # prints mf-manifest.json `shared`
```

Expected: `ds/Button` and `ds/Table` have `singleton: false`. Actual: `true`.

`packages/ds` is a local package with subpath-only exports (`./Button`, `./Table`).

`dist/` is committed on purpose so the emitted manifest can be inspected without building (as recommended by [rspack-repro](https://github.com/web-infra-dev/rspack-repro)).
