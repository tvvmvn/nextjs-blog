This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Pre-rendering
Before we talk about data fetching, let’s talk about one of the most important concepts in Next.js: Pre-rendering.

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)

# Check That Pre-rendering Is Happening
If your app is a plain React.js app (without Next.js), there’s no pre-rendering, so you won’t be able to see the app if you disable JavaScript. 

# Two Forms of Pre-rendering
Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

- Static Generation 
is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.

- Server-side Rendering 
is the pre-rendering method that generates the HTML on each request.

# SWR
The team behind Next.js has created a React hook for data fetching called SWR. 
We highly recommend it if you’re fetching data on the client side. 
It handles caching, revalidation, focus tracking, refetching on interval, and more. 
We won’t cover the details here, but here’s an example usage: