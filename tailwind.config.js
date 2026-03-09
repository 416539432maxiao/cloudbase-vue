/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/components/**/*.{js,vue,ts}",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./app/plugins/**/*.{js,ts}",
        "./app/app.vue",
        "./app/error.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6366f1',
                },
                action: {
                    DEFAULT: '#FF6B6B',
                },
                'backend-color': '#f8fafc',
                background: '#eef2ff',
                card: '#FFFFFF',
                positive: '#bbf7d0',
                negative: '#fc7474',
                text: {
                    main: '#2D3748',
                    muted: '#A0AEC0',
                }
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                'large': '24px',
            },
            boxShadow: {
                'card': '0 16px 28px #CBD5E1', // Simplified blur and color from design spec
            }
        },
    },
    plugins: [],
}
