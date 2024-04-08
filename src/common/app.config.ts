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
    Description: '데이터와 모델을 정밀하게 제어하여 AI의 잠재력을 최대한 활용하세요.',
    SiteName: 'S-Core Chatbot',
    ThemeColor: '#32383E',
    TwitterSite: '@enricoros',
  },
  URIs: {
    Home: 'https://s-core.co.kr/',
    OpenProject: 'http://localhost',
    OpenRepo: 'http://localhost',
    PrivacyPolicy: 'https://s-core.co.kr/etc/privacy-polish/',
    CardImage: 'https://s-core.co.kr/wp-content/uploads/2018/06/s-core.png'
  },
} as const;