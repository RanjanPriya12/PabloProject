8) JavaScript framework (react js)

i) What is react js?
---> React js is a javascript framework used to create user interface (UI). It fallows unidirectional flow and it supports
client side rendering. It is component based UI framework which is reusable piece of code. It has virtual DOM which  make it
easy to do DOM manipulation so fast. Perfomance is better than real DOM. It is declarative. It is designed by 'Facebook'.
It uses ES6 version of javascript JSX to make the UI components.

I have designed counter to show that it updates only those nodes on UI which has been change with help of VDOM and deffing 
algorithm.





9) Performance Optimization

--->Performance optimization in React.js involves various techniques to enhance the speed and efficiency of React applications. 

i) Virtual DOM and Reconciliation:
React uses a virtual DOM to efficiently update the actual DOM. One optimization technique is to minimize the number of updates through reconciliation. You can achieve this by using keys correctly and avoiding unnecessary re-rendering of components.

ii) Memoization and Caching:
Utilize memoization techniques like memoization libraries (e.g., memoize-one) or hooks like useMemo to cache expensive computations and prevent unnecessary recalculations.

iii) Lazy Loading and Code Splitting:
Lazy loading is a technique where you load components or modules only when they are needed. Use React.lazy and Suspense to lazily load components, reducing the initial bundle size and improving load times.

iv) Component Rendering:
Analyze your components and identify any unnecessary re-renders. Use shouldComponentUpdate (class components) or React.memo (functional components) to prevent re-rendering when props or state haven't changed.

v) Code Splitting:
Split your code into smaller chunks using dynamic imports or tools like Webpack's code splitting. This allows you to load only the required code when needed, reducing the initial load time and improving perceived performance.

vi) Bundle Size Optimization:
Minimize your bundle size by removing unnecessary dependencies, optimizing imports, and using tools like tree shaking, code minification, and compression techniques. This can significantly improve initial load times.

vii) Optimized Images:
Optimize image assets by compressing them without sacrificing visual quality. Consider using responsive images and lazy loading techniques to load images as needed.






10) Accessibility and Best SEO

---> Accessibility and SEO are important considerations when building React applications.


Accessibility:

i) Semantic HTML: Use semantic HTML elements (e.g., <nav>, <header>, <main>, etc.) to provide a clear structure and meaning to your content. This helps screen readers and assistive technologies understand your app better.

ii) ARIA Roles and Attributes: Utilize ARIA (Accessible Rich Internet Applications) roles and attributes to enhance the accessibility of interactive elements, custom components, and dynamic content.

iii) Keyboard Navigation: Ensure your app is fully navigable using the keyboard alone. Focus management, tab order, and keyboard event handling should be properly implemented for interactive elements.

iv) Text Alternatives for Images: Provide meaningful alternative text (alt attribute) for images, allowing screen readers to describe the image to visually impaired users.

v) Form Accessibility: Make sure form inputs have appropriate labels and associate them correctly with their respective form elements. Use ARIA roles and attributes like aria-label or aria-labelledby where necessary.

vi) Focus and Highlighting: Ensure that interactive elements receive focus states and are visually distinguishable when in focus. This helps users who rely on keyboard navigation or assistive technologies.

vii) Testing with Assistive Technologies: Regularly test your application using screen readers and other assistive technologies to identify and address accessibility issues. Tools like aXe, VoiceOver (for iOS/macOS), or NVDA (for Windows) can assist in accessibility testing.



SEO (Search Engine Optimization):

i) Server-side Rendering (SSR): Implement server-side rendering to provide search engines with fully rendered HTML content. This ensures that search engine crawlers can easily index your app's content.

ii) Meta Tags: Use appropriate meta tags, including <title>, <meta description>, and <meta keywords>, to provide concise and relevant information about your app's pages. Each page should have unique meta tags.

iii) URL Structure: Optimize your app's URL structure to include relevant keywords and descriptive slugs. Use React Router's BrowserRouter to implement clean URLs.

iv) Internal Linking: Implement internal linking within your app to facilitate navigation and improve the discoverability of your content. Use anchor tags (<a>) with relevant anchor text.

v) SEO-friendly Components: Ensure that key components of your app, such as headers, navigation menus, and content sections, are appropriately marked up using HTML elements and semantic tags.

vi) External Links: Include external links to reputable and relevant websites in your content. This can improve your site's credibility and search engine rankings.

vii) Performance Optimization: Follow performance optimization techniques mentioned earlier to improve your app's loading speed. Faster-loading websites tend to have better SEO rankings.
