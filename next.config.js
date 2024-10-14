const nextConfig = {
  output  : 'export',
  trailingSlash  : true,
  images  : { unoptimized  : true },
  assetPrefix  : process.env.GITHUB_PAGES ? '/next-app-router-test'   : '',
}

module.exports = nextConfig