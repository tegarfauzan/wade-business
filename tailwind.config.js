/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                "space-grotesk": ["Space Grotesk", "sans-serif"],
            },
            boxShadow: {
                "layered-orange": `
          0 43.31px 17.68px 0 rgba(251, 177, 136, 0.01),
          0 24.75px 15.03px 0 rgba(251, 177, 136, 0.05),
          0 10.61px 10.61px 0 rgba(251, 177, 136, 0.09),
          0 2.65px 6.19px 0 rgba(251, 177, 136, 0.1)
        `,
            },
        },
    },
    plugins: [],
};
