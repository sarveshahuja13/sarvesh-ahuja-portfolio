# Sarvesh Ahuja - AI & Data Engineer Portfolio

This is the source code for the personal portfolio website of Sarvesh Ahuja, an AI & Data Engineer. The website is designed to showcase his skills, experience, and projects in a clean, modern, and interactive format.

The site is built with a modern web stack and features an AI-powered chatbot to assist visitors and recruiters by answering their questions in real-time.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **AI Chatbot**: [Groq](https://groq.com/) and the [Vercel AI SDK](https://sdk.vercel.ai/)
- **Deployment**: Built for modern Jamstack hosting platforms like Vercel or Netlify.

## Getting Started

To run this project locally, you'll need Node.js and npm installed.

### 1. Install Dependencies

Clone the repository and install the necessary packages:

```bash
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
