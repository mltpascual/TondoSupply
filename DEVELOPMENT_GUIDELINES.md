# Development Guidelines — Tondo Supply

This document synthesizes best practices from 8 specialized development skills into a single reference for all developers and AI agents working on this project. It covers UI/UX, code quality, security, and testing.

---

## 1. UI/UX and Frontend

### 1.1 Design Philosophy

Tondo Supply follows an **Industrial Brutalism** aesthetic fused with Manila street culture. Every design decision must reinforce this identity.

| Principle | Implementation |
|-----------|---------------|
| **Intentional Aesthetic** | Industrial brutalism — raw concrete textures, diagonal red slashes, bold typography |
| **Typography** | Display: "Bebas Neue" (condensed, all-caps). Body: "Space Grotesk" (geometric, modern) |
| **Color System** | Dominant: Deep charcoal (#1A1A1A). Accent: Tondo Red (#C41E1E). Neutral: Concrete (#D4D0C8), Off-white (#F5F2ED) |
| **Layout** | Asymmetric, full-bleed sections. Diagonal crops. Staggered masonry grids. Avoid centered, symmetrical layouts |
| **Motion** | Purposeful and sparse. Sharp snap-in animations on scroll. No decorative micro-motion spam |

### 1.2 Accessibility (Critical Priority)

All UI must meet these minimum standards:

- **Color contrast**: Minimum 4.5:1 ratio for normal text, 3:1 for large text.
- **Focus states**: Visible focus rings on all interactive elements.
- **Alt text**: Descriptive alt text for all meaningful images.
- **ARIA labels**: `aria-label` for icon-only buttons.
- **Keyboard navigation**: Tab order must match visual order.
- **Touch targets**: Minimum 44x44px for all interactive elements.
- **Reduced motion**: Respect `prefers-reduced-motion` media query.

### 1.3 Responsive Design

- Design mobile-first with breakpoints at 375px, 768px, 1024px, and 1440px.
- No horizontal scroll on any viewport.
- Minimum 16px body text on mobile.
- Use `width=device-width, initial-scale=1` viewport meta.

### 1.4 Component Standards

- Prefer shadcn/ui components for interactions; import from `@/components/ui/*`.
- Compose Tailwind utilities with component variants.
- Use CSS variables for all design tokens (defined in `index.css`).
- Use SVG icons (Lucide React), never emojis as UI icons.
- All clickable elements must have `cursor-pointer`.
- Hover states must provide clear visual feedback with 150–300ms transitions.

### 1.5 Performance

- Use WebP images with `srcset` and lazy loading.
- Use `transform` and `opacity` for animations (GPU-accelerated).
- Reserve space for async content to prevent layout shifts.
- Skeleton screens or spinners for loading states.

### 1.6 Web Interface Guidelines

Follow the Vercel Web Interface Guidelines for all UI code:

- Semantic HTML structure.
- Proper ARIA roles and attributes.
- Keyboard-accessible interactions.
- Focus management for modals and overlays.
- Virtualize long lists for performance.

---

## 2. Code Quality and Best Practices

### 2.1 Clean Code Principles

Based on Robert C. Martin's "Clean Code":

| Principle | Rule |
|-----------|------|
| **Naming** | Use intention-revealing, pronounceable, searchable names. Class names are nouns; method names are verbs |
| **Functions** | Small (under 20 lines). Do one thing. 0–2 arguments preferred. No side effects |
| **Comments** | Don't comment bad code — rewrite it. Good comments: legal, informative, clarification, TODOs |
| **Formatting** | Newspaper metaphor — high-level at top, details at bottom. Variables declared near usage |
| **Error Handling** | Use exceptions, not return codes. Write try-catch-finally first. Never return or pass null |

### 2.2 Code Review Standards

Every pull request must be reviewed for:

1. **Security vulnerabilities** (highest priority)
2. **Bugs and logic errors**
3. **Performance implications**
4. **Code quality and maintainability**
5. **Test coverage**

Skip stylistic/formatting issues — use automated linting instead.

### 2.3 React Best Practices

- Functional components with hooks.
- Never call `setState` or navigation in render phase — wrap in `useEffect`.
- Stabilize references with `useState` or `useMemo` to prevent infinite loops.
- Match `ThemeProvider` `defaultTheme` with CSS variables in `index.css`.
- Always pair `bg-{semantic}` with `text-{semantic}-foreground`.

### 2.4 TypeScript Standards

- Strict mode enabled.
- No `any` types without justification.
- Use interfaces for object shapes, types for unions/intersections.
- Export types alongside their implementations.

---

## 3. Security

### 3.1 Frontend Security

Since this is a static frontend project, security focuses on:

- **XSS Prevention**: All user-generated content must be sanitized. React's JSX escaping handles most cases, but avoid `dangerouslySetInnerHTML`.
- **External Links**: All external links must use `rel="noopener noreferrer"` with `target="_blank"`.
- **Content Security**: No inline scripts. Use nonce-based CSP when possible.
- **Dependency Security**: Regular `npm audit` checks. Keep dependencies updated.

### 3.2 API Security (If Backend Added)

If the project is upgraded to full-stack:

- **Authentication**: JWT with short expiration (1 hour). Refresh tokens stored in database.
- **Input Validation**: Use Zod schemas for all request validation.
- **Rate Limiting**: Implement per-user/IP rate limiting on all endpoints.
- **HTTPS Only**: Enforce TLS for all communications.
- **Error Handling**: Never expose stack traces or internal details in error responses.
- **CORS**: Restrict origins to known domains only.

### 3.3 Security Checklist

For every code change, verify:

- [ ] No injection vulnerabilities (SQL, command, template, header)
- [ ] All outputs properly escaped (XSS prevention)
- [ ] Authentication checks on all protected operations
- [ ] Access control verified (not just auth)
- [ ] No secrets in code, logs, or error messages
- [ ] Dependencies scanned for known vulnerabilities

---

## 4. Testing

### 4.1 E2E Testing Strategy

Use Playwright for end-to-end testing of critical user journeys:

| Journey | Priority | What to Test |
|---------|----------|-------------|
| Landing page load | High | Hero renders, images load, navigation works |
| Navigation | High | All nav links scroll to correct sections |
| External links | Medium | Shop Now, social media links open correctly |
| Mobile responsiveness | High | All sections render correctly on mobile |
| Accessibility | High | Keyboard navigation, screen reader compatibility |

### 4.2 Testing Best Practices

- **Stable selectors**: Use `data-testid` attributes, not CSS classes.
- **Test isolation**: Each test should be independent and idempotent.
- **Retries**: Configure 2 retries for flaky tests in CI.
- **Artifacts**: Capture screenshots and traces on failure.
- **Parallelization**: Run tests in parallel across browsers.

### 4.3 Test Data Strategy

- Use dedicated test fixtures for consistent data.
- Never test against production data.
- Clean up test artifacts after each run.

---

## 5. Project Structure

```
client/
  public/         ← Static assets (content-hashed filenames)
  src/
    pages/        ← Page-level components (Home.tsx)
    components/   ← Reusable UI components and sections
    contexts/     ← React contexts (ThemeContext)
    hooks/        ← Custom React hooks
    lib/          ← Utility helpers
    App.tsx       ← Routes and top-level layout
    main.tsx      ← React entry point
    index.css     ← Global styles and design tokens
server/           ← Placeholder for future backend
shared/           ← Shared constants
```

---

## 6. Git Workflow

- **Branch naming**: `feature/`, `fix/`, `chore/` prefixes.
- **Commit messages**: Conventional Commits format (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`).
- **Pull requests**: Must include description, screenshots (for UI changes), and pass all checks.
- **No force pushes** to main branch.

---

*This document should be read by any developer or AI agent before contributing to the Tondo Supply project.*
