# Find It - Lost & Found Platform

Find It is a modern web application that helps users report lost items, search for found items, and connect with others to recover lost belongings. Built with Next.js, React, and a rich UI, it prioritizes community, security, and ease of use.

## Features

- **Report Lost Items:** Easily submit details and images of lost items.
- **Search Found Items:** Browse and filter found items reported by others.
- **Interactive Map:** Visualize item locations using Google Maps.
- **File Uploads:** Attach images or documents to item reports.
- **User Authentication:** Secure login and signup flows.
- **Responsive UI:** Clean, mobile-friendly design with Ant Design and Tailwind CSS.
- **Community Driven:** Connect with finders and help others.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **UI Libraries:** [Ant Design](https://ant.design/), [Tailwind CSS](https://tailwindcss.com/)
- **Maps:** [@react-google-maps/api](https://github.com/JustFly1984/react-google-maps-api), [react-leaflet](https://react-leaflet.js.org/)
- **State Management:** React Hooks, Context
- **APIs:** Custom Next.js API routes
- **Other:** Axios, Lodash, ESLint

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd lost-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and add your Google Maps API key and other secrets.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `src/pages/` - Main pages (home, login, signup, API routes)
- `src/pages/components/` - UI components (FileUploader, LostRecordCard, MapComponent, etc.)
- `src/pages/data/` - Sample data (laptops, mobiles, locations)
- `src/pages/store/` - State management (auth store)
- `public/` - Static assets (images, icons)
- `styles/` - CSS files

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or your preferred platform. See [Next.js deployment docs](https://nextjs.org/docs/pages/building-your-application/deploying).

## License

MIT

---

*Built with ❤️ by the Find It team.*
