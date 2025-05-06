<template>
  <div class="container">
    <h1>Nuxt Deployment Solution</h1>
    <p>This application is configured to deploy correctly to Netlify by:</p>
    <ul>
      <li>Using <code>@rollup/wasm-node</code> as a WebAssembly alternative</li>
      <li>Setting a <code>rollup</code> override in package.json</li>
      <li>Adding a custom <code>netlify-build</code> script</li>
      <li>Configuring the Nitro preset for Netlify</li>
    </ul>
    <p class="success">This approach avoids native binding issues with oxc-parser!</p>
  </div>
</template>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  color: #00DC82;
}

ul {
  line-height: 1.6;
}

code {
  background-color: #f0f0f0;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: monospace;
}

.success {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #E4F9EF;
  border-left: 4px solid #00DC82;
  border-radius: 4px;
}
</style> 