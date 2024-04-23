import { defineConfig } from 'tsup'

export default defineConfig({
  name: '@magmaorg/nextra-theme-docs',
  entry: ['src/index.tsx'],
  format: 'esm',
  dts: true,
  external: ['@magmaorg/nextra'],
  outExtension: () => ({ js: '.js' })
})
