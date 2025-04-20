module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    extend: {
        keyframes: {
            'bounce-in': {
                '0%': { transform: 'scale(0.8)', opacity: '0' },
                '100%': { transform: 'scale(1)', opacity: '1' },
            },
        },
        animation: {
            'bounce-in': 'bounce-in 0.3s ease-out forwards',
        },
    }

}

