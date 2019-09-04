import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

const copiedFiles: any[] = [
  {
    src: '../node_modules/@stencil/core/dist/cli', // TOTALLY RANDOM SOURCE JUST TO SHOWCASE ANY COPY ACTIVITY INTO "assets"
    dest: 'assets'
  }
];

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
      copy: copiedFiles
    }
  ]
};
