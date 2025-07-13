# Sarvesh Ahuja - AI & Data Engineer Portfolio

This is the source code for the personal portfolio website of Sarvesh Ahuja, an AI & Data Engineer. The website is designed to showcase his skills, experience, and projects in a clean, modern, and interactive format.

The site is built with a modern web stack and features an AI-powered chatbot to assist visitors and recruiters by answering their questions in real-time.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **AI Chatbot**: [Groq](https://groq.com/) and the [Vercel AI SDK](https://sdk.vercel.ai/)
- **Deployment**: Vercel, Netlify, or other modern Jamstack hosting platforms.

## Getting Started

To run this project locally, you'll need Node.js and npm installed.

### 1. Clone the Repository and Install Dependencies

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

### 2. Set Up Environment Variables

The chatbot functionality requires an API key from Groq. Create a `.env.local` file in the root of the project and add your key:

```
GROQ_API_KEY=your_api_key_here
```

### 3. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

The application will be available at [http://localhost:9002](http://localhost:9002).

## Deployment to Netlify

This project can be easily deployed with [Netlify](https://www.netlify.com/) for continuous integration and deployment.

### 1. Connect Your Git Repository

- Sign up for a Netlify account and click "Add new site" -> "Import an existing project".
- Connect to your Git provider (GitHub, GitLab, etc.) and select the repository for this portfolio.

### 2. Configure Build Settings

Netlify will automatically detect that this is a Next.js project and configure the build settings correctly. The default settings should work without changes:
- **Build command**: `next build`
- **Publish directory**: `.next`

### 3. Add Environment Variables

To make the AI chatbot work on the live site, you must add your Groq API key to Netlify's environment variables.

- In your site's dashboard on Netlify, go to **Site settings > Build & deploy > Environment**.
- Click "Edit variables" and add a new variable:
  - **Key**: `GROQ_API_KEY`
  - **Value**: `your_actual_groq_api_key_here`

This keeps your API key secure and separate from your source code.

### 4. Deploy

Click "Deploy site". Netlify will build your project and deploy it. Any future pushes to your main branch will automatically trigger a new deployment.
