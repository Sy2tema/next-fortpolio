/** @type {import('next').NextConfig} */
// 완전히 바깥에서 데이터를 가져오려면 config에서 도메인 정보를 가져와야 함
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
    ],
  }
}

module.exports = nextConfig
