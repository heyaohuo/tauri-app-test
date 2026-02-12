
const isProd = process.env.NODE_ENV === 'production';

const internalHost = process.env.TAURI_DEV_HOST || 'localhost';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 必须启用静态导出
  output: 'export',
  
  // 2. 禁用图片优化（因为没有 Next.js 服务器来处理图片）
  images: {
    unoptimized: true,
  },
  // 配置 assetPrefix，否则服务器无法正确解析您的资产。
assetPrefix: isProd ? undefined : `http://${internalHost}:3000`,
  
  // 3. 如果你使用了 App Router，确保没有使用不支持静态导出的 API
}

module.exports = nextConfig