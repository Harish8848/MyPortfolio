export default function Head() {
    return (
      <>
        <title>Harish Bhatt | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Harish Bhatt, a frontend developer specializing in React, Next.js, and UI/UX design. Explore my projects, skills, and contact details."
        />
        <meta
          name="keywords"
          content="Harish Bhatt, Frontend Developer, Next.js, React, Portfolio, Web Developer Nepal, UI Designer"
        />
        <meta name="author" content="Harish Bhatt" />
        <meta name="robots" content="index, follow" />
  
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harish-bhatt.com.np/" />
        <meta property="og:title" content="Harish Bhatt | Frontend Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore Harish Bhatt’s portfolio showcasing web projects built with Next.js and React."
        />
        <meta property="og:image" content="https://your-portfolio-url.com/og-image.png" />
  
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harish Bhatt | Frontend Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Explore Harish Bhatt’s portfolio showcasing projects built with React and Next.js."
        />
        <meta name="twitter:image" content="https://your-portfolio-url.com/og-image.png" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://harish-bhatt.com.np/" />
  
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
      </>
    );
  }