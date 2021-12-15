module.exports = {
    apps : [{
      name: "servimate-customer",
      script: "./index.js",
      instances: "MAX",
      autorestart :true,
      exec_mode: "cluster",
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }