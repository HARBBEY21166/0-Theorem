
# 🚀 Zero Theorem - Next.js Portfolio & Agency Template

![Zero Theorem](https://i.pinimg.com/1200x/78/a6/97/78a6977314662fe64f69898c4055c722.jpg)

Welcome to **Zero Theorem!** This is a beautifully designed, production-ready starter template for modern digital agencies, studios, and freelancers. It's built with the best of the modern web: **Next.js, TypeScript, Tailwind CSS, and ShadCN UI**, and brought to life with silky-smooth animations powered by **GSAP** and immersive 3D visuals from **Spline**.

We've poured our passion for clean code and elegant design into this project, and we're thrilled to share it with the community. Our goal is to give you a massive head-start in building a stunning, high-performance website.

---

## ✨ Core Features

-   **Stunning Animations**: Fluid, professional animations using GSAP and Framer Motion that engage and delight users.
-   **3D Hero Section**: An interactive hero section powered by Spline for a truly memorable first impression.
-   **Fully Responsive**: Meticulously crafted to look and work beautifully on all devices, from mobile phones to 4K displays.
-   **Component-Based Architecture**: Built with reusable and customizable React components.
-   **Dynamic Content**: Easily update services, portfolio items, testimonials, and blog posts.
-   **Dark & Light Mode**: A sleek, modern dark mode is the default, with support for light mode via `next-themes`.
-   **Optimized for Performance**: Built with Next.js App Router, Server Components, and image optimization for blazing-fast load times.
-   **SEO-Ready**: Best practices for SEO are baked in to help you get discovered.

---

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
-   **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
-   **3D Graphics**: [Spline](https://spline.design/)
-   **Form Handling**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
-   **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

Getting this project up and running on your local machine is a breeze.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/HARBBEY21166/0-theorem.git
cd 0-theorem
```

### 2. Install Dependencies

We use `npm` to manage our packages. Run the following command to install all the necessary dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

The contact form uses Web3Forms. To get it working, you'll need to provide your own access key.

Create a new file named `.env.local` in the root of your project and add your key:

```env
# Get your free access key from https://web3forms.com/
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=YOUR_ACCESS_KEY_HERE
```

*Note: I've updated the contact form to use this environment variable for you.*

### 4. Run the Development Server

You're all set! Start the development server with:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the result. You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

---

## 📂 Project Structure

The project follows a standard Next.js App Router structure, designed for clarity and scalability.

```
/
├── public/         # Static assets (images, fonts, favicons)
├── src/
│   ├── app/        # All pages and routes
│   ├── components/ # Reusable React components (UI, layout, sections)
│   ├── lib/        # Helper functions and utilities (cn, placeholder-images)
│   └── hooks/      # Custom React hooks
├── tailwind.config.ts # Tailwind CSS configuration
└── next.config.ts     # Next.js configuration
```

---

## 🤝 Contributing

We built Zero Theorem to be a community-driven project, and we welcome contributions of all kinds! Whether you're fixing a bug, improving a feature, or suggesting a new idea, your help is greatly appreciated.

-   **Found a Bug?** [Open an issue](https://github.com/HARBBEY21166/0-theorem/issues) and let us know.
-   **Have an Idea?** We'd love to hear it! Start a discussion.
-   **Want to Contribute Code?** Fork the repository and submit a pull request.


## 🎯 What's Next?

- Customize the content in the component files to make it your own
- Replace the Spline scene with your own 3D design
- Update the color scheme in `tailwind.config.ts`
- Deploy to Vercel with one click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 💫 From Our Studio to Yours

We can't wait to see what incredible experiences you'll build with Zero Theorem. Tag us on Twitter or show us your creations—we'd love to feature them!

---

*Built with ❤️ by Abiodun (Abbey) Aina*
