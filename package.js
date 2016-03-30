Package.describe({
  name: 'simple:dev-error-overlay',
  version: '1.5.1',
  summary: 'Alerts you when you have a build error.',
  git: 'https://github.com/stubailo/meteor-dev-error-overlay',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  api.use([
    'ecmascript',
    'http',
    'tracker',
    'less',
    'meteor'
  ]);

  api.addFiles([
    'dev-error-overlay.js',
    'dev-error-overlay.less'
  ], 'client');

  api.addAssets([
    'assets/negative_beeps.mp3'
  ], 'client');
});
