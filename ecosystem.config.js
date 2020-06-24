module.exports = {
  apps: [
    {
      name: 'MCEG-API',
      script: 'server.js',
      env: {
        PORT: 80,
        ENV: 'prod',
      },
      instances: 4,
      exec_mode: 'cluster',
    },
  ],
};
