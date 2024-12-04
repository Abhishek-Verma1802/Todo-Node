module.exports = {
  content: [
    "./views/**/*.ejs",  // Ensure views folder is being watched for Tailwind classes
    "./public/**/*.html", // If you have any HTML files in public
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
