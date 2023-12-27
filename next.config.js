/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],        //허용 확장자
    reactStrictMode: true,                                          //우리가 만드는 application 내에서 문제가 일어날 수 있는 부분에 대한 경고를 알려주는 기능
}

module.exports = nextConfig
