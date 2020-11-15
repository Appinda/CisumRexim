module.exports = {
  poweredByHeader: false,
  generateEtags: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  
    config.target = 'electron-renderer';
    // config.node = false;
    
    // Important: return the modified config
    return config
  },
}