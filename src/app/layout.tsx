import type { Metadata } from 'next'
import { Marck_Script } from 'next/font/google'
import './globals.css'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import HeaderMain from '../components/header/header'

const main_font = Marck_Script({
    weight: ['400'],
    subsets: ['latin', 'cyrillic'],
    preload: true,
    variable: '--var-main-font',
})

export const metadata: Metadata = {
    title: 'LKP new',
    description: 'LKP with next.js',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className={main_font.variable} lang="ru">
            <body>
                <HeaderMain />
                <main>
                    <AntdRegistry>{children}</AntdRegistry>
                </main>
            </body>
        </html>
    )
}
