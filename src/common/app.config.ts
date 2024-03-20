/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'S-Core Chatbot',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'S-Core Chatbot',
  },
  Meta: {
    Description: '데이터와 모델을 정밀하게 제어하여 AI의 잠재력을 최대한 활용하 세요.',
    SiteName: 'S-Core Chatbot',
    ThemeColor: '#32383E',
    TwitterSite: '@enricoros',
  },
  URIs: {
    Home: 'https://s-core.co.kr/',
  },
} as const;