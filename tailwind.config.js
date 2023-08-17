/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        'dark_blue': "#0D142C",
        'light-blue':"#1F3352",
        'deep-blue':"#00193F",
        'deep-red':"#C72D3C",
        'deep-grey':"#777777",
      },
      backgroundImage: {
        'banner-bg': "url('../images/hero-image1.jpg')",
        'mountain-bg': "url('../images/mountain-img.jpg')",
        'hero-img-funeral': "url('../images/hero-img-funeral.png')",
        'banner-bg-mobile': "url('../images/hero-image-mobile.jpg')",
        'quran-banner-bg': "url('../images/quran-banner-bg.png')",
        'hadith-banner-bg': "url('../images/hadith-image-banner.jpg')",
        'history-banner-bg': "url('../images/history-image-banner.jpg')",
        'blog-banner-bg': "url('../images/blog-image-banner.jpg')",
      },
      backgroundSize: {
        'size-100':"100%",
        'size-80': "80%",
        'size-70': "70%",
      },
      spacing: {
        '450': '450px',
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ]
}
