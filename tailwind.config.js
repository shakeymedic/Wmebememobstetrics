/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./Index.html"],
  theme: { extend: {
      colors: {
        primary: '#2563eb',
        danger: '#dc2626',
        success: '#16a34a',
        warning: '#f59e0b',
      },
    } },
  plugins: [],
}
