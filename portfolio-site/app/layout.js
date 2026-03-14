import '../styles/global.css';
import '../styles/mainpage.css';
import '../styles/project.css'

import localFont from 'next/font/local'

const font1 = localFont({
  src: '../public/fonts/Fixture Italic Light.otf',
  variable: '--font-fixture-Italic',
})
const font2 = localFont({
  src: '../public/fonts/Fixture Italic SemiBold.otf',
  variable: '--font-fixture-semibold-Italic',
})
const font3 = localFont({
  src: '../public/fonts/Fixture Ultra Italic Bold.otf',
  variable: '--font-fixture-bold',
})
const font4 = localFont({
  src: '../public/fonts/Fixture-Light.otf',
  variable: '--font-fixture-light'
})
const font5 = localFont({
  src: '../public/fonts/Fixture-SemiBold.otf',
  variable: '--font-fixture-semibold'
})


export default function RootLayout({ children }) {
    return (
        <html lang="en"
            className={`${font1.variable} ${font2.variable} ${font3.variable} ${font4.variable} ${font5.variable}`}>
            <body>{children}</body>
        </html>
    );
}