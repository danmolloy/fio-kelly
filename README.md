# Personal Website
## Overview
This is a personal website for a classical musician, targeting concert promoters and audience members. It showcases a biography, photo gallery, links to various audio recordings and a contact form.
Technically, the project has a focus on UI/UX design, performance and accessibility.

## Features
### User Experience
- **Contact Form** rigourously tested to provide a seamless experience, complete with validation, error messages and feedback.
- **Responsive Design** built with a mobile-first philosophy. The website has a number if features unique to mobile view, such as a fly out menu and relocated photos from text sections to the photo gallery.
- **Disappearing Header** built on scroll event listeners, disappearing from view after a short scroll. It reappears almost immediately on upscroll and is in the initial page render.
- **Interactive Experience** gently scroll with React Scroll on menu link click, ensuring a smooth user experience. Additionally, the mobile screen menu 'burger' icon transforms into an 'X' icon, giving the website visual interactivity.

### Technical Excellence
#### Performance Optimization
Although essentially a static website, measures have been taken to improve performance. This includes:
- All images use NextJS Image Component, optimizing performance by lazy loading.
- `next/font` is utilised for all fonts, removing external network requests.
- Google Lighthouse and Vercel speed insights are regularly monitored to ensure a fast user experience.

#### SEO
- Utilised `next/meta` for improved SEO and web shareability.
- Google Lighthouse monitored for quality (score of 100)

## Technologies Used
- NextJS 14
- TypeScript
- Tailwind CSS
- Formik, Yup and Nodemailer
- Jest & React Testing Library
- React Spring & React Scroll

## Testing
Unit tests with Jest and React Testing Library achieve a high code coverage threshold (86.31%), focusing on maintaining a consistent UI and critical logic. An array of Jest matchers (e.g., .toBe, .toEqual, .toBeInTheDocument) are leveraged for effective assertions. Predictable UI output is maintained with snapshot tests for all components. Test suites are regularly reviewed to ensure failures are swiftly captured, and the site continues to be manually tested across a variety of screen sizes.

## Accessibility
The site has been created with the aim of an inclusive experience for all users. It is continually tested and improved to adhere to Web Content Accessibility Guidelines (WCAG) 2.0 conformance standards, levering tools such as Google Lighthouse (scoring 100/100), ESLint (including `eslint-plugin-jsx-a11y` extension) and Chrome DevTools.

Implemented Features:
- **Semantic HTML** to improve navigation for screen readers and assistive technologies.
- **Keyboard Navigation** makes the entire site accessible for users who rely on a keyboard only.
- **Alternative Text** for all non-text content (i.e. images), ensuring a meaningful and improved access to this content.
- **Colour Contrast** is maintained between text and background colours according to WCAG guidelines, improving readability for users with visually impairments.
- **Focus Management** Clear and visible focus indicators, aiding navigation.
- **Form Accessibility** Concise labels for each input section, in addition to clear error messages upon incorrect data submission.

## Credits
The entire project has been designed and built by Daniel Molloy.