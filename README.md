# UG Portfolio

A modern portfolio website built with React, Vite, and Tailwind CSS for Uddheshya Group.

## 🚀 Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.18
- **Routing**: React Router DOM 7.9.6
- **Form Handling**: React Hook Form 7.66.1 with Zod validation
- **Animations**: Motion (Framer Motion) 12.23.24
- **Email Service**: EmailJS
- **Icons**: React Icons & Lucide React

## 📁 Project Structure

``` Project Structure
  UGportfolio/
  ├── public/                          # Static assets
  │   ├── images/                      # Image assets
  │   │   └── team/                    # Team member photos
  │   ├── bluefeather.png
  │   ├── Fabicon.png
  │   ├── feather.png
  │   ├── gypsy.png
  │   ├── gypsylogo.png
  │   ├── hcop.png
  │   ├── Looniva.png
  │   ├── NAAV.png
  │   ├── svi.png
  │   ├── UddLogo.png
  │   └── White.png
  │
  ├── src/                             # Source files
  │   ├── assets/                      # React assets
  │   │   └── react.svg
  │   │
  │   ├── components/                  # React components
  │   │   ├── common/                  # Reusable components
  │   │   │
  │   │   ├── layout/                  # Layout components
  │   │   │   ├── Footer.jsx
  │   │   │   └── Navbar.jsx
  │   │   │
  │   │   └── pages/                   # Page components
  │   │       ├── About/
  │   │       │   └── About.jsx
  │   │       ├── Career/
  │   │       │   └── Career.jsx
  │   │       ├── Contact/
  │   │       │   └── Contact.jsx
  │   │       ├── Home/
  │   │       │   └── Home.jsx
  │   │       ├── Portfolio/
  │   │       │   └── Portfolio.jsx
  │   │       └── Services/
  │   │           └── Services.jsx
  │   │
  │   ├── utils/                       # Utility functions
  │   │   └── ScrollToTop.jsx
  │   │
  │   ├── App.css                      # App-level styles
  │   ├── App.jsx                      # Main App component
  │   ├── index.css                    # Global styles
  │   └── main.jsx                     # Application entry point
  │
  ├── olccareerandcontact/             # Legacy/additional modules
  │   ├── ApplyModal.jsx
  │   └── ContactUS.jsx
  │
  ├── .gitignore                       # Git ignore rules
  ├── eslint.config.js                 # ESLint configuration
  ├── index.html                       # HTML entry point
  ├── jsconfig.json                    # JavaScript configuration
  ├── package.json                     # Project dependencies
  ├── postcss.config.js                # PostCSS configuration
  ├── README.md                        # Project documentation
  ├── tailwind.config.js               # Tailwind CSS configuration
  └── vite.config.js                   # Vite configuration
```

## 🛠️ Installation

1.Clone the repository:

```bash
git clone <repository-url>
cd UGportfolio
```

2.Install dependencies:

```bash
npm install
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚦 Getting Started

1.Start the development server:

```bash
npm run dev
```

2.Open your browser and navigate to `http://localhost:5173`

## 📦 Key Dependencies

### Production

- `react` & `react-dom` - UI library
- `react-router-dom` - Client-side routing
- `react-hook-form` - Form state management
- `zod` - Schema validation
- `@emailjs/browser` - Email service integration
- `motion` - Animation library
- `lucide-react` & `react-icons` - Icon libraries
- `react-intersection-observer` - Viewport detection

### Development

- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` - PostCSS plugin
- `eslint` - Code linting

## 📄 License

Private project for Uddheshya Group

## 👥 Team

Team member photos are stored in `public/images/team/`

---

Built with ❤️ by Uddheshya Group
