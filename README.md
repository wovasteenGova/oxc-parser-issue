# Nuxt Deployment Solution

This repository demonstrates the solution to oxc-parser native binding issues when deploying Nuxt applications to Netlify.

## The Issue

When deploying Nuxt applications to Netlify, you might encounter an error:

```
[error] Failed to load native binding
Error: Cannot find module './parser.linux-x64-gnu.node'
...
Error: Cannot find module '@oxc-parser/binding-linux-x64-gnu'
```

This happens because oxc-parser relies on native bindings that might not be compatible with Netlify's build environment.

## The Solution

This project implements a working solution with these key components:

1. **WebAssembly Alternative**:
   - Added `@rollup/wasm-node` as a dependency
   - Set `rollup` override in package.json

2. **Build Script**:
   - Created a custom `netlify-build` script with `ROLLUP_SKIP_NODEJS=true`

3. **Netlify Configuration**:
   - Set Nitro preset to `netlify` in nuxt.config.ts

## How to Use

1. Clone this repository
2. Install dependencies: `npm install`
3. Run locally: `npm run dev`
4. Deploy to Netlify using the custom build command

## Configuration Details

### package.json

```json
{
  "scripts": {
    "netlify-build": "ROLLUP_SKIP_NODEJS=true nuxt build"
  },
  "devDependencies": {
    "@rollup/wasm-node": "^4.40.1"
  },
  "overrides": {
    "rollup": "npm:@rollup/wasm-node"
  }
}
```

### nuxt.config.ts

```ts
export default defineNuxtConfig({
  nitro: {
    preset: 'netlify'
  }
})
```

### Netlify configuration

Set the build command to `npm run netlify-build` in your Netlify dashboard.

## Why It Works

This solution works by replacing native dependencies with WebAssembly alternatives that run in any environment without needing platform-specific binaries. 