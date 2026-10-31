# Netflix Clone – Personal Project

## 1. Project Overview

This project is a personal Netflix-inspired web application developed to practice and improve frontend development skills using modern web technologies.

The application aims to reproduce the core user interface and movie-browsing experience of Netflix, including movie banners, categorized movie sections, navigation, and responsive layouts.

Movie information and images are retrieved from **The Movie Database (TMDB) API**.

## 2. Technologies Used

- **React.js** – Building reusable UI components.
- **Vite** – Frontend development server and build tool.
- **JavaScript (ES6+)** – Application logic and functionality.
- **CSS3** – Styling and responsive design.
- **Axios** – Making HTTP requests to the TMDB API.
- **React Router DOM** – Client-side navigation.
- **TMDB API** – Retrieving movie information and images.
- **Swiper** – Creating movie carousels and sliders.
- **Lucide React / React Icons** – Icons and interface elements.

## 3. Project Objectives

- Practice building a real-world React application.
- Understand component-based architecture.
- Implement API integration using Axios.
- Practice state management and data rendering.
- Build reusable movie cards and carousel components.
- Implement responsive layouts.
- Improve project organization and Git/GitHub workflow.

## 4. Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Visual Studio Code
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/abdisawaritu/netflix-clone.git
```

Navigate into the project directory:

```bash
cd netflix-clone
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root and configure your TMDB API key:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Start the development server:

```bash
npm run dev
```

## 5. Project Structure

```text
netflix-clone-personal/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── Data/
│   ├── Utility/
│   ├── App.jsx
│   └── index.css
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

*Note: The folder structure may evolve as development progresses.*

## 6. Development Status

This project is under active development. Features will be implemented incrementally as the application evolves.

## 7. Author


## 8. Acknowledgment

Movie data and images are provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).

This project is intended for educational and learning purposes.