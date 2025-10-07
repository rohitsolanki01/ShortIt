<div align="center">
  <h1>⚡ ShortIt</h1>
  <p>Transform long URLs into short, shareable links instantly</p>
  
  ![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
</div>

---

## 📋 Overview

A modern, lightweight URL shortening application that converts lengthy URLs into concise, shareable links. Built with React and styled with Tailwind CSS, this tool provides a seamless user experience with instant URL transformation, copy-to-clipboard functionality, and automatic fallback support across multiple shortening services.

## ✨ Features

- **⚡ Instant Shortening** - Real-time URL conversion with sub-second response times
- **🔄 Dual API Support** - Automatic fallback between is.gd and TinyURL APIs for maximum reliability
- **📋 One-Click Copy** - Built-in clipboard functionality for effortless sharing
- **✅ Smart Validation** - URL format validation before processing
- **🎨 Modern UI** - Clean, gradient-based design with smooth animations
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **⚠️ Error Handling** - User-friendly error messages with retry capabilities
- **🔒 No Authentication** - Zero setup required, works immediately

## 🚀 Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **APIs:** is.gd API, TinyURL API
- **State Management:** React Hooks (useState)

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener

text

2. **Install dependencies**
npm install

text

3. **Configure Tailwind CSS**

Ensure `tailwind.config.js` is set up:
export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

text

4. **Start development server**
npm run dev

text

5. **Open in browser**
http://localhost:5173

text

## 💻 Usage

1. Enter a long URL (must start with `http://` or `https://`)
2. Click **"Shorten URL"** button
3. Copy the generated short URL
4. Share or use the shortened link anywhere

### Example

Input: https://www.example.com/very/long/url/path/with/parameters?id=12345
Output: https://is.gd/abc123

text

## 🏗️ Project Structure

url-shortener/
├── public/
├── src/
│ ├── App.jsx # Main application component
│ ├── App.css # Component styles
│ ├── index.css # Tailwind directives
│ └── main.jsx # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

text

## 🔧 Configuration

### API Integration

The application uses two free URL shortening APIs:

**Primary API: is.gd**
https://is.gd/create.php?format=json&url={encodedUrl}

text

**Fallback API: TinyURL**
https://tinyurl.com/api-create.php?url={encodedUrl}

text

No API keys or authentication required.

## 🎨 Customization

### Colors

Modify gradient colors in `App.jsx`:
className="bg-gradient-to-br from-blue-50 to-indigo-100"

text

### Button Styles

Update button colors:
className="bg-indigo-600 hover:bg-indigo-700"

text

## 📱 Screenshots

*Add screenshots of your application here*

## 🚀 Deployment

### Build for Production

npm run build

text

### Deploy to Vercel

npm install -g vercel
vercel

text

### Deploy to Netlify

npm install -g netlify-cli
netlify deploy --prod

text

## 🐛 Known Issues

- Some URLs with special characters may require encoding
- Rate limits apply based on API usage (is.gd: 1 request/second)

## 🛠️ Future Enhancements

- [ ] Custom short URL aliases
- [ ] QR code generation for shortened URLs
- [ ] Analytics dashboard with click tracking
- [ ] URL expiration settings
- [ ] Browser extension support
- [ ] Bulk URL shortening
- [ ] User authentication and history

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/rohitsolanki01)
- LinkedIn: [Your Name](https://www.linkedin.com/in/rohit-solanki-495860348/)
- Portfolio: [yourportfolio.com](https://portfoliyo-me-3439.vercel.app/)

## 🙏 Acknowledgments

- [is.gd](https://is.gd) - Primary URL shortening service
- [TinyURL](https://tinyurl.com) - Fallback URL shortening service
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Heroicons](https://heroicons.com) - Beautiful SVG icons

---

<div align="center">
  Made with ❤️ by Rohit Solanki 
  
  ⭐ Star this repo if you find it helpful!
</div>
