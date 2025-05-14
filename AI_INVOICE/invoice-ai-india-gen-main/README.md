# AI Invoice Generator

A modern web application for generating and managing invoices with AI-powered features. Built with React, TypeScript, and a beautiful UI using shadcn-ui components.

## Features

- 📝 Create and manage invoices with a user-friendly interface
- 🤖 AI-powered invoice generation and suggestions
- 🎨 Modern and responsive design using shadcn-ui components
- 📱 Mobile-friendly layout
- 🔍 Advanced search and filtering capabilities
- 📊 Invoice analytics and reporting
- 🔐 Secure data handling

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **UI Components:** shadcn-ui
- **Styling:** Tailwind CSS
- **Form Handling:** React Hook Form with Zod validation
- **State Management:** React Query
- **Routing:** React Router DOM
- **Charts:** Recharts
- **Date Handling:** date-fns
- **Notifications:** Sonner

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```sh
git clone <repository-url>
cd invoice-ai-india-gen-main
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
invoice-ai-india-gen-main/
├── src/               # Source files
├── public/           # Static assets
├── components/       # React components
├── styles/          # Global styles
└── types/           # TypeScript type definitions
```

## Deployment

### Deploying to Netlify

1. Create a `netlify.toml` file in your project root with the following content:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

3. Go to [Netlify](https://www.netlify.com/) and sign up/login

4. Click "New site from Git"

5. Choose your Git provider and select your repository

6. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

7. Click "Deploy site"

Your site will be live in a few minutes with a Netlify subdomain. You can later configure a custom domain in the Netlify dashboard.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team.

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/71bb7c61-b1d9-4168-a1f6-f56d97f3f42a) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
