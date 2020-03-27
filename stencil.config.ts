import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'st1112',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  srcDir: 'src',
  testing: {
    moduleFileExtensions: [
      'ts',
      'tsx',
      'json',
      'js',
      'jsx'
    ],
    moduleNameMapper: {
      '^@myUtils$': 'src/utils'
    },
    testRegex: '^(?!.*test\/.*)(?!(.*\\.(util|extraneous|testReport|base)\\.e2e\\.ts$)).*\\.(spec|e2e)\\.(ts?|tsx?)$',
  }
};
