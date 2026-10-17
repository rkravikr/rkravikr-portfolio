# MASTER PROMPT — Build Ravi Kumar Verma's Personal Portfolio

You are an expert senior frontend engineer, creative developer, UI/UX designer, and digital art director. Your task is to design and build a complete, polished, production-ready personal portfolio website for **Ravi Kumar Verma**.

This is not a generic developer portfolio. It should feel like a carefully art-directed digital experience that tells a story about a real person, his journey, his work, and the things he wants to build.

You have access to supporting documents, reference images, personal photographs, and potentially other prompts in the project workspace. **Inspect and understand these resources before making implementation decisions.** They contain the source of truth for the portfolio's identity, content, visual direction, and assets.

Your responsibility is to turn those materials into an exceptional, fully functional website.

---

## 1. Start by Understanding the Existing Materials

Before writing code, inspect the project workspace and identify:

- The document containing Ravi's professional profile and personal information.
- The prompt containing the finalized portfolio theme, design direction, and visual references.
- Any additional reference images, screenshots, moodboards, photographs, videos, or other assets.
- Any existing application code, package configuration, reusable components, or design tokens.

Read the provided materials carefully.

### Rules for using the materials

1. Treat the professional profile document as the source of truth for all biographical information, skills, projects, achievements, and professional claims.
2. Treat the finalized theme prompt as the source of truth for the visual identity and creative direction.
3. Treat reference images as design inspiration. Reinterpret their visual language cohesively rather than blindly copying unrelated layouts.
4. Use Ravi's actual photographs from the provided assets. Do not substitute stock photographs or generate an artificial portrait of him.
5. Do not invent employment history, client testimonials, achievements, project metrics, credentials, social links, or personal experiences.
6. Do not create placeholder content when the real information is available in the supplied materials.
7. If a detail is missing, omit it or use a sensible, clearly editable placeholder only when necessary.
8. Do not ask me to repeat information already present in the workspace.

If multiple documents contain overlapping information, reconcile them carefully. Preserve factual accuracy and prioritize the finalized profile and design prompt.

Once you understand the materials, proceed with implementation. Do not stop after providing a plan or a design proposal.

---

## 2. Technology Stack

Use the following stack:

- **Framework:** Next.js with the App Router.
- **Language:** TypeScript.
- **Styling:** SCSS and SCSS Modules.
- **Markup:** Semantic React components.
- **Animation:** GSAP where complex, timeline-based animation is justified; use CSS animations and transitions for simpler interactions.
- **Icons:** Lucide React or another consistent icon library if needed.
- **3D/WebGL:** Use Three.js or React Three Fiber only if the finalized design genuinely benefits from it and the effect can run efficiently.
- **Typography:** Use the fonts specified in the finalized design prompt. If appropriate to the existing direction, use Space Grotesk, Inter, and JetBrains Mono.
- **Package manager:** Respect the existing project configuration. If the project is new, use npm unless the workspace indicates otherwise.

Do not use Tailwind CSS. All primary styling must be implemented using SCSS.

Use CSS custom properties for colors, typography scales, spacing, borders, radii, animation timing, and other global design tokens.

Keep the implementation modular, readable, maintainable, and easy to extend.

---

## 3. Creative Direction — Preserve the Finalized Theme

Follow the finalized theme prompt exactly. Do not replace it with a conventional template or an unrelated visual style.

The established creative direction is called **AFTER DARK**.

Its central narrative is:

**“From the void to the things I build.”**

The experience should combine:

- Cinematic darkness.
- Experimental digital art direction.
- Editorial typography and layouts.
- Product-focused software engineering.
- Subtle atmosphere, texture, light, and depth.
- Human personality alongside technical credibility.
- A narrative that unfolds as the visitor explores the website.

Use the finalized reference materials to determine the precise implementation.

The established palette includes:

- Background: `#08090B`
- Elevated surfaces: `#15161B`
- Primary text: `#F1F0EB`
- Accent violet: `#B5A6FF`
- Accent red: `#FF3B46`

Use these as the starting design tokens unless the finalized theme materials specify more precise values or additional colors.

The design should feel sophisticated, distinctive, confident, and intentional. Avoid turning every element into a neon-glowing object. Restraint is essential.

### Visual principles

- Strong contrast between large typography and quiet supporting details.
- Generous negative space where the composition benefits from it.
- Asymmetric editorial layouts where appropriate.
- Carefully controlled color accents.
- Subtle grain, atmospheric gradients, light leaks, or depth effects when supported by the references.
- Fine borders, separators, metadata, and technical labels.
- Smooth transitions between sections.
- A clear visual hierarchy on every screen.
- A consistent design language from the opening screen through the final contact section.

The website must look like a bespoke digital experience, not a premade template with a dark background.

---

## 4. Build the Portfolio as a Story

Structure the portfolio around the finalized narrative. Use the following sequence as the guiding framework, adapting it to the supplied prompt and references.

### Chapter 01 — The Signal

Create a memorable opening experience that immediately establishes Ravi's identity and the portfolio's atmosphere.

Include:

- A distinctive introduction using Ravi Kumar Verma's real name.
- The headline, positioning statement, and introductory copy from the supplied profile and finalized content.
- A visually striking composition that introduces the site's central theme.
- A clear path into the portfolio.
- A discreet indication that the visitor can scroll or explore.
- A carefully selected personal photograph if it strengthens the composition.

Make the first screen memorable within seconds. It should communicate personality and creative confidence without overwhelming the visitor.

Avoid generic hero copy such as "Welcome to my portfolio" or unsupported claims such as "the world's best developer."

### Chapter 02 — The Person Behind the Code

Introduce Ravi as an actual person, not merely a list of programming languages.

Use the supplied biography, aspirations, personal photographs, and relevant details to create a visually engaging introduction.

This section should feel editorial and human.

Integrate photographs naturally into the composition. Use appropriate cropping, image positioning, lighting treatments, masks, borders, or restrained motion to make the photographs feel intentionally art-directed.

The goal is to present Ravi as confident, approachable, thoughtful, and professional.

**Important:** Make the actual photographs look their best through layout, cropping, sizing, and CSS treatment. Do not alter his facial identity, fabricate physical features, or apply effects that make him look like an AI-generated person.

### Chapter 03 — Things I've Built

This is one of the most important sections of the website.

Present the real projects identified in the supplied profile, using the actual project descriptions and available evidence.

Projects to prioritize include:

- Campus Core
- Calcify
- Shree Bags
- Nisarga Grand
- Ajay Press

Use the profile document to identify the correct names, descriptions, roles, technology stacks, project status, and available links for each project.

Do not invent functionality or imply that unfinished work is complete.

Create visually compelling project presentations with:

- Project name and concise description.
- Project category or relevant metadata.
- Technologies actually used.
- A clear explanation of the problem addressed and the solution built, when the source materials support it.
- Real screenshots, application previews, or project images when available.
- Links to the actual live project or repository when provided.
- Thoughtful hover interactions and transitions.

Use a mixture of large featured case studies and smaller supporting projects if that fits the finalized design.

Do not force every project into an identical rectangular card. Use editorial layouts, overlapping compositions, asymmetric grids, or immersive case-study sections where appropriate.

If a real project screenshot is unavailable, create an attractive typographic or abstract project presentation instead of fabricating an application screenshot.

Keep all project links accurate. Never invent URLs.

### Chapter 04 — How I Think and Build

Show how Ravi approaches software development and product creation.

Use the supplied profile to communicate his real technical skills, preferred technologies, working approach, and product-oriented mindset.

Possible visual treatments include:

- An editorial skills index.
- A structured technology constellation.
- A restrained scrolling ticker.
- A visual breakdown of the development process.
- A timeline or connected sequence illustrating how an idea becomes a product.

Choose only the elements that strengthen the finalized concept.

Do not display every technology as a floating badge. Prioritize readability and demonstrate technical competence through the overall quality of the website itself.

### Chapter 05 — Beyond the Interface

If the supplied materials contain personal interests, motivations, or other authentic details that belong in the portfolio, use them to introduce a more human dimension.

This section should create a natural transition from professional work to personal identity.

Do not invent hobbies, life stories, personality traits, or anecdotes. If there is insufficient relevant information, keep this section brief or omit it.

### Chapter 06 — The Next Signal

Finish with a memorable contact section that brings the narrative full circle.

Include the real contact information and professional links supplied in the documents.

Possible elements:

- A strong closing statement.
- A concise invitation to connect.
- Email and social links.
- GitHub and LinkedIn links, if supplied.
- A resume link, if a real resume file or URL is available.
- A minimal footer with the appropriate copyright information.

The closing experience should feel deliberate and complete rather than like an ordinary footer appended at the end.

Do not fabricate contact details or claim that an action succeeded when it did not.

---

## 5. Use My Photographs Intelligently

My actual photographs are included in the provided project materials.

Find the available image files, inspect them, and choose the best images for the composition.

Use different photographs for different purposes when appropriate.

For example:

- A strong portrait for the introductory section.
- A more relaxed photograph for the personal introduction.
- Other relevant photographs in supporting editorial layouts.

These are examples, not mandatory placements. Make decisions based on the actual images available.

### Image-treatment requirements

- Preserve the original aspect ratios unless a deliberate crop improves the design.
- Use `object-fit` and `object-position` intelligently.
- Avoid stretching, distortion, or awkward face crops.
- Use image masks, monochrome treatments, grain overlays, gradients, or subtle color grading only where they complement the theme.
- Ensure the subject remains visible against the dark environment.
- Avoid placing text over a face or important visual detail.
- Use responsive image sizing and appropriate Next.js image optimization.
- Add meaningful alt text.
- Avoid excessive blur, glow, and filters that degrade image quality.

The intended result is a polished, confident presentation of the real person in the photographs.

Do not use a stock image simply because it is easier to implement.

If the available photographs have different orientations, design the layouts around their strengths rather than forcing every image into the same shape.

---

## 6. Motion and Interaction Design

Motion is an important part of this experience, but every animation must have a purpose.

Use a deliberate motion system that supports the story.

Consider:

- A cinematic introductory reveal.
- Staggered typography.
- Smooth section entrances.
- Subtle image reveals.
- Scroll-linked transitions where appropriate.
- Carefully designed project hover states.
- Navigation transitions.
- Subtle parallax for selected visual elements.
- Small interface responses that make the experience feel alive.

### Animation principles

1. Prefer transforms and opacity for performance-sensitive animations.
2. Avoid animating large numbers of DOM elements simultaneously.
3. Avoid scroll hijacking and unnecessarily complex scroll behavior.
4. Keep animations smooth on ordinary laptops and mobile devices.
5. Prevent content from remaining invisible if JavaScript or an animation library fails.
6. Respect `prefers-reduced-motion`.
7. Keep text readable and interactions predictable.
8. Avoid excessive cursor effects or animations that interfere with clicking, selecting text, or scrolling.
9. Use WebGL or 3D effects only when they add meaningful visual value.
10. Provide a graceful fallback if advanced effects cannot run.

Do not add animation just to demonstrate technical capability.

The visitor should feel immersed in the experience, not trapped inside an animated demo.

---

## 7. Responsive Design

Build the entire website for desktop, tablet, and mobile.

Desktop is an opportunity for rich editorial compositions, large typography, atmospheric effects, and immersive project presentations.

Mobile requires its own thoughtful layout decisions rather than a compressed desktop version.

Requirements:

- Responsive typography using `clamp()` where appropriate.
- Flexible grids and layouts.
- Images that retain suitable focal points.
- Navigation that works comfortably on touchscreens.
- Appropriate spacing and readable line lengths.
- Touch-friendly interactive elements.
- No horizontal overflow.
- No clipped text or inaccessible controls.
- Reduced visual complexity on low-powered devices.
- Smooth scrolling without interfering with browser navigation.

Test at multiple viewport widths, including approximately 375px, 768px, 1024px, and 1440px.

Make sure the site remains visually compelling at every size.

---

## 8. Accessibility and Performance

Build the site to professional standards.

### Accessibility

- Use semantic HTML elements.
- Maintain sufficient text contrast.
- Provide meaningful alt text.
- Make navigation keyboard-accessible.
- Provide visible focus states.
- Use descriptive link labels.
- Give interactive elements appropriate accessible names.
- Respect reduced-motion preferences.
- Do not rely exclusively on color to communicate meaning.

### Performance

- Use Next.js image optimization appropriately.
- Lazy-load images and heavy content when suitable.
- Avoid unnecessary client components.
- Use server components by default where practical.
- Load fonts efficiently.
- Keep animation libraries scoped to the components that need them.
- Avoid unnecessary dependencies.
- Prevent layout shifts.
- Avoid expensive continuous rendering when an effect is not visible.
- Use a static or CSS-based fallback for expensive visual effects.

The website should feel fast and responsive, not merely look impressive in a screenshot.

---

## 9. Next.js and SCSS Architecture

Use a clean, maintainable project structure. Adapt it to the existing workspace rather than replacing working code unnecessarily.

A suitable structure might look like:

- `app/`
  - `layout.tsx`
  - `page.tsx`
  - `globals.scss`
- `components/`
  - `navigation/`
  - `hero/`
  - `about/`
  - `projects/`
  - `process/`
  - `contact/`
  - `ui/`
- `data/`
  - Portfolio content and project data.
- `styles/`
  - Shared SCSS variables, mixins, and utilities.
- `public/`
  - Supplied photographs, project images, and other static assets.

Keep reusable content separate from presentation wherever practical.

Create reusable components for recurring elements, but do not over-engineer the application.

Use SCSS Modules for component-specific styling and a global SCSS file for reset rules, global typography, design tokens, and foundational styles.

Use meaningful class names and avoid giant monolithic components or stylesheets.

If the project already has an established structure, retain it when sensible.

---

## 10. SEO and Professional Polish

Configure the website as a real personal portfolio.

Include:

- Appropriate page title and description.
- Metadata using Ravi's real professional identity.
- Open Graph metadata.
- A sensible favicon if a suitable asset exists.
- A custom 404 page if appropriate.
- Correct external-link behavior.
- A functional email link.
- Valid internal navigation.
- Proper heading hierarchy.
- No broken assets or placeholder links.

Add structured metadata only where accurate and appropriate.

Do not include fake testimonials, invented statistics, misleading claims, or fabricated professional affiliations.

The quality of the implementation should reinforce the quality of the portfolio.

---

## 11. Implementation Workflow

Work autonomously through the following stages.

### Stage 1 — Inspect

Read the supplied documents, existing prompts, images, and project files.

Determine the actual content, the finalized visual system, the available assets, and the existing development environment.

### Stage 2 — Plan

Establish the page structure, component boundaries, typography, design tokens, image placements, and animation strategy.

Use the supplied references to make concrete design decisions.

Do not spend excessive time planning when the requirements are already clear.

### Stage 3 — Implement

Build the complete website.

Create all required components, styles, responsive layouts, navigation, animations, and content.

Use real information from the supplied materials.

### Stage 4 — Validate

Run the application using the appropriate development commands.

Check the terminal output and resolve compilation errors, missing dependencies, invalid imports, styling problems, and runtime issues.

If browser preview or browser interaction tools are available, use them to inspect the actual rendered website.

Check:

- Desktop and mobile layouts.
- All navigation links.
- All project links.
- Image loading and cropping.
- Animation behavior.
- Console errors.
- Responsive overflow.
- Accessibility basics.
- Reduced-motion behavior.
- Loading and fallback states.

Do not claim to have tested a browser, device, or behavior that you did not actually test.

### Stage 5 — Refine

After the first working implementation, review the result as both a creative director and a frontend engineer.

Ask yourself:

- Does the opening screen immediately establish a distinctive identity?
- Does the website tell a coherent story?
- Do the photographs feel intentionally integrated?
- Are the projects presented with enough visual weight?
- Is the typography excellent?
- Are the transitions polished but restrained?
- Does the mobile version feel designed rather than merely resized?
- Does any section look generic, unfinished, cluttered, or unnecessarily repetitive?

Fix the weaknesses you find.

Do not stop after producing a technically functional but visually ordinary website.

---

## 12. Quality Bar and Final Constraints

The finished website must satisfy all of the following:

- Use Next.js, TypeScript, and SCSS.
- Follow the supplied portfolio content and finalized theme.
- Tell a coherent visual story.
- Use Ravi's real photographs appropriately.
- Showcase real projects and professional information.
- Work on desktop and mobile.
- Include polished interactions and purposeful animation.
- Maintain accessibility and reasonable performance.
- Contain no invented personal information.
- Contain no broken links, missing assets, or unfinished placeholder sections when the necessary source material exists.
- Be structured so that future updates are straightforward.
- Run successfully in the existing development environment.

### What NOT to do

- Do not generate a generic portfolio template.
- Do not redesign the finalized theme into something unrelated.
- Do not use Tailwind CSS.
- Do not invent profile details, metrics, or achievements.
- Do not use AI-generated portraits or unrelated stock photos in place of my photographs.
- Do not add every trendy animation or 3D effect indiscriminately.
- Do not sacrifice readability for visual experimentation.
- Do not rewrite the entire project configuration without a good reason.
- Do not leave the website as a static mockup when working interactions are required.
- Do not stop at the planning stage.
- Do not merely explain how I could build the portfolio.

**Your task is to actually build, run, inspect, and refine the portfolio in the available workspace.**

Begin by inspecting the provided documents and assets. Then implement the complete portfolio using the finalized information and creative direction.

The final result should feel like an individual developer's distinctive digital world: cinematic, human, technically credible, beautifully composed, and memorable.
