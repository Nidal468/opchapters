module.exports = {
  apps: [
    {
      name: 'opscans-git',
      script: 'npm',
      args: 'start',
      env_local: {
        APP_ENV: 'local'
      },
      env_development: {
        APP_ENV: 'development'
      },
      env_production: {
        APP_ENV: 'production'
      }
    }
  ]
}
