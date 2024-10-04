import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'ru-RU',
    title: "Кванториум Волжский Политех",
    description: "Ресурсы по занятиям",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Основы верстки сайтов', link: '/html'},
            {text: 'Разработка игр', link: '/gamedev'}
        ],
    },
    markdown: {
        lineNumbers: true,
    }
})