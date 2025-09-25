# Personal Website
## Overview
This is a personal website for a classical musician, designed to engage concert promoters and audience members. It features a biography, photo gallery, links to audio recordings, and a contact form.

The project emphasizes UI/UX design, performance, and accessibility, showcasing modern frontend development.

## Features
### User Experience
* **Contact Form**: Fully validated with clear error messages and user feedback for a seamless experience.
* **Responsive Design**: Built mobile-first, with unique mobile-specific features such as a fly-out menu and dynamic photo placement.
* **Disappearing Header**: Header hides on scroll and reappears on upward scroll, improving content focus while remaining accessible.
* **Interactive Experience**: 
  * Smooth scrolling with React Scroll on menu item select
  * Transforming mobile menu icon that enhances visual interactivity
  * Subtle parallax scrolling on images adds depth and engagement

### Technical Overview
#### Performance Optimization
Although essentially a static website, measures have been taken to improve performance. This includes:
* All images use the Next.js Image Component for lazy loading and optimized performance.
* `next/font` used for all typography to eliminate external font requests.
* Performance monitored via Google Lighthouse and Vercel Insights, ensuring consistently fast load times.

#### SEO
* Utilised `next/meta` for improved SEO and web shareability.
* Regularly verified via Google Lighthouse, consistently scoring 100.

## Technologies Used
* **Framework & Language**: Next.js 15, TypeScript
* **Styling**: Tailwind CSS
* **Forms & Email**: Formik, Yup, AWS SES
* **Testing & Monitoring**: Jest, React Testing Library, Sentry
* **Animations & Interactivity**: React Spring, React Scroll, Framer Motion
* **Code Quality**: ESLint, Prettier

## Testing
* Achieves 86.31% unit test coverage, ensuring UI consistency and reliability.
* Utilizes Jest matchers (.toBe, .toEqual, .toBeInTheDocument) and snapshot testing for predictable output.
* Sentry monitors runtime errors, helping maintain a stable production experience.
* Manual testing across multiple screen sizes complements automated testing.

## Accessibility
Designed to meet WCAG 2.0 standards for an inclusive experience:
* **Semantic HTML**: Improves navigation for screen readers.
* **Keyboard Navigation**: Entire site accessible without a mouse.
* **Alt Text**: All images have descriptive alternative text.
* **Color Contrast**: Meets WCAG guidelines for readability.
* **Focus Management**: Visible focus indicators for keyboard users.
* **Accessible Forms**: Clear labels and error messages for all inputs.
* Tested regularly with Google Lighthouse, ESLint jsx-a11y, and Chrome DevTools, scoring 100/100 in accessibility.

## Continuous Integration
The project includes automated testing and linting via GitHub Actions on pull requests to the main branch.
* **Lint & Formatting Checks**: Prettier and ESLint are run automatically.
* **Automated Testing**: Jest tests run in CI mode, ensuring reliability across environments.
* **Node.js Setup & Dependency Caching**: Uses Node 18 and caches dependencies for faster workflow runs.

## Credits
Designed and developed entirely by Daniel Molloy.