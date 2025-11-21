# CLAUDE.md - Restaurant Page Project Guide

## Project Overview

**Project Name:** Restaurant Page
**Type:** Single-page application (SPA)
**Primary Technology:** Vanilla JavaScript with Webpack bundling
**Purpose:** A dynamic restaurant website with tab-based navigation where all content is rendered via JavaScript DOM manipulation

This is a restaurant website for "Sonia's" - a fictional fusion Italian-Indian eatery. The entire UI is generated dynamically using JavaScript, demonstrating DOM manipulation and modular JavaScript patterns.

## Directory Structure

```
Restaurant-Page/
├── dist/                    # Build output directory (Webpack-generated)
│   ├── index.html          # Entry HTML file (minimal, loads main.js)
│   ├── main.js             # Bundled JavaScript output
│   └── [assets]            # Bundled images and fonts with hashed filenames
├── src/                    # Source code directory
│   ├── images/             # Image assets
│   │   ├── bg.jpg          # Background image / Pizza image
│   │   ├── godfather.jpg   # Menu item image
│   │   ├── golgappe.jpg    # Menu item image
│   │   ├── kebab_rolls.jpg # Menu item image
│   │   ├── menuBG.jpg      # Menu background
│   │   ├── omelette.jpg    # Menu item image
│   │   ├── paneer_pakoda.jpg # Menu item image
│   │   └── paneer_paratha.jpg # Menu item image
│   ├── styles/             # CSS modules
│   │   ├── styleInitial.css   # Base layout and header styles
│   │   ├── styleHome.css      # Home page specific styles
│   │   ├── styleMenu.css      # Menu page specific styles
│   │   └── styleContact.css   # Contact page specific styles
│   ├── index.js            # Application entry point
│   ├── initialPageLoad.js  # Foundation/layout setup
│   ├── home.js             # Home tab content module
│   ├── menu.js             # Menu tab content module
│   ├── contact.js          # Contact tab content module
│   └── SchoolCursive.ttf   # Custom font file
├── package.json            # NPM dependencies and scripts
├── webpack.config.js       # Webpack build configuration
└── .gitignore             # Git ignore rules (node_modules)
```

## Architecture and Design Patterns

### Module Pattern
- Each page/section is encapsulated in its own ES6 module
- Modules export single default functions that handle rendering
- Clean separation of concerns with dedicated files for each tab

### DOM Manipulation Strategy
- All content is generated programmatically using `document.createElement()`
- No static HTML content in the body (except the `#content` div)
- Tab switching is handled by clearing and re-rendering `#main-content`

### Component Structure
```
Page Load Flow:
1. index.js (entry) → imports all modules and styles
2. initialPageLoad() → creates base structure (header, tabs, main-content)
3. homePageLoad() → renders initial tab content
4. Event listeners → handle tab switching
```

## Key Components

### 1. Entry Point (`src/index.js`)
- **Purpose:** Application initialization and orchestration
- **Function:** `pageCompiler()`
  - Calls `initialFoundationPage()` to set up base structure
  - Loads home page by default
  - Attaches event listeners to tab buttons
- **Line 28:** Application starts here with `pageCompiler()` invocation

### 2. Foundation/Layout (`src/initialPageLoad.js`)
- **Export:** `loadFoundationPage()`
- **Creates:**
  - `<header>` with restaurant title "Sonia's"
  - Tab container with three tabs: HOME, MENU, CONTACT ME
  - `#main-content` div for dynamic content
- **Helper:** `tabComponents(id, name)` - Creates individual tab elements

### 3. Home Tab (`src/home.js`)
- **Export:** `homePageLoad()`
- **Content:** "About us" section with:
  - Heading
  - Paragraph describing the restaurant's history and concept
- **Pattern:** Clears `#main-content`, then appends new elements

### 4. Menu Tab (`src/menu.js`)
- **Export:** `menuPageLoad()`
- **Content:** Menu grid with 7 items
- **Helper:** `createItems(name, img, price)` - Generates menu item cards
- **Menu Items:**
  - Pizza (Rs 500)
  - Golgappa (Rs 30)
  - Kebab Roll (Rs 60)
  - Omelette (Rs 30)
  - Paneer Pakoda (Rs 20)
  - Paneer Paratha (Rs 30)
  - The Godfather (Rs 129)
- **Images:** Imported at top of file using Webpack's asset handling

### 5. Contact Tab (`src/contact.js`)
- **Export:** `contactPageLoad()`
- **Content:** Contact information including:
  - Address: 4 Private Drive, Little Whinging, Surrey, England
  - Phone numbers
  - Email: soniaeatery@brand.org
  - Social media links (Instagram, Twitter, Facebook)
- **Note:** Uses `innerHTML` for formatting (includes `<br>` tags and `<a>` links)

## Development Workflow

### Available NPM Scripts

```bash
# Build the project (production)
npm run build

# Watch mode (auto-rebuild on file changes)
npm run watch

# Test (not configured - exits with error)
npm run test
```

### Build Process (Webpack)

**Entry Point:** `src/index.js`
**Output:** `dist/main.js`
**Dev Tool:** Inline source maps enabled (`devtool: 'inline-source-map'`)

**Loaders Configured:**
1. **CSS Loader** (`/\.css$/i`)
   - Processes: `style-loader` → `css-loader`
   - CSS is injected into JavaScript bundle

2. **Image Loader** (`/\.(png|svg|jpg|jpeg|gif)$/i`)
   - Type: `asset/resource`
   - Images get hashed filenames in dist/

3. **Font Loader** (`/\.(woff|woff2|eot|ttf|otf)$/i`)
   - Type: `asset/resource`
   - Fonts get hashed filenames in dist/

### Development Steps

1. **Make changes** in `src/` directory
2. **Run build:** `npm run build` or `npm run watch`
3. **Open:** `dist/index.html` in browser
4. **Test:** Click through tabs to verify functionality

## Coding Conventions

### JavaScript Style

1. **Function Declarations:** Arrow functions for page loaders
   ```javascript
   const homePageLoad = () => { /* ... */ };
   ```

2. **Element Creation Pattern:**
   ```javascript
   const element = document.createElement('div');
   element.id = "my-id";
   element.textContent = "Content";
   parent.appendChild(element);
   ```

3. **Naming Conventions:**
   - Snake_case for multi-word variables: `main_content`, `about_us_heading`
   - Kebab-case for IDs: `about-us`, `main-content`, `menu-container`
   - camelCase for functions: `pageCompiler`, `homePageLoad`, `createItems`

4. **Module Exports:** Default exports only
   ```javascript
   export default functionName;
   ```

5. **Imports:**
   - JavaScript modules imported first
   - CSS imports follow JS imports
   - Images imported in the module where they're used

### CSS Style

1. **Font Declaration:** Custom font loaded via `@font-face` in `styleInitial.css`
   ```css
   @font-face {
       font-family: 'myFont';
       src: url(../SchoolCursive.ttf);
   }
   ```

2. **Layout Approach:**
   - Flexbox for tab navigation
   - Full viewport background image
   - Semi-transparent black header (opacity: 0.7)

3. **Selector Strategy:**
   - ID selectors for unique elements
   - Class selectors for repeated components (`.menu-item`)
   - Direct child selectors for header structure

## File Organization Principles

### When to Create New Files

1. **New Tab/Page:** Create new module in `src/` (e.g., `reservations.js`)
2. **New Styles:** Create corresponding CSS in `src/styles/` (e.g., `styleReservations.css`)
3. **Helper Functions:** If reusable, consider dedicated utility module

### When to Modify Existing Files

1. **Tab Content Updates:** Modify the respective tab module (`home.js`, `menu.js`, `contact.js`)
2. **Header/Layout Changes:** Modify `initialPageLoad.js`
3. **Adding Images:** Place in `src/images/`, import in relevant module
4. **Global Styles:** Modify `styleInitial.css`
5. **Tab-specific Styles:** Modify the corresponding style file

## Common Development Tasks

### Adding a New Menu Item

**File:** `src/menu.js` (lines 31-37)

1. Add image import at top of file
2. Call `createItems()` in `menuPageLoad()` function
3. Add corresponding styles in `styleMenu.css` if needed

```javascript
import new_item_pic from './images/new_item.jpg';
// ... in menuPageLoad():
createItems("New Item", new_item_pic, "Rs 100");
```

### Adding a New Tab

1. **Create module:** `src/newtab.js`
   ```javascript
   const newTabPageLoad = () => {
       const main_content = document.getElementById('main-content');
       main_content.textContent = "";
       // Add content...
   };
   export default newTabPageLoad;
   ```

2. **Import in index.js:**
   ```javascript
   import newTabPageLoad from './newtab.js';
   import './styles/styleNewTab.css';
   ```

3. **Add tab button in initialPageLoad.js:**
   ```javascript
   tab_container.append(/* ... */, tabComponents("newtab-tab", "NEW TAB"));
   ```

4. **Add event listener in index.js:**
   ```javascript
   const newtab = document.getElementById('newtab-tab');
   newtab.addEventListener('click', newTabPageLoad);
   ```

### Updating Restaurant Information

- **Name:** `src/initialPageLoad.js` line 21
- **About Text:** `src/home.js` line 18
- **Contact Info:** `src/contact.js` line 18

### Styling Updates

- **Header/Navigation:** `src/styles/styleInitial.css`
- **Background:** `src/styles/styleInitial.css` line 11
- **Home Page:** `src/styles/styleHome.css`
- **Menu Grid:** `src/styles/styleMenu.css`
- **Contact Page:** `src/styles/styleContact.css`

## Build Artifacts

### Dist Directory
- **Generated by:** Webpack (do not edit manually)
- **Committed:** Yes (files present in git)
- **index.html:** Minimal HTML shell with `#content` div and `main.js` script
- **main.js:** Complete bundled application (all JS, CSS inlined)
- **Asset files:** Hashed filenames for images and fonts (cache busting)

### Running the Application
Simply open `dist/index.html` in a browser. No server required for basic functionality (all assets are bundled and relative).

## Important Notes for AI Assistants

### Code Modification Guidelines

1. **Tab Content Updates:**
   - Always clear `main_content` with `.textContent = ""` before rendering
   - Use `document.createElement()` for all elements (maintains pattern)
   - Follow snake_case for JavaScript variables, kebab-case for HTML IDs

2. **Adding Features:**
   - Prefer modular approach (new file per major feature)
   - Import styles in `index.js` to ensure they're bundled
   - Use relative paths for imports (`./filename.js`)

3. **Image Handling:**
   - Images must be imported at module top: `import pic from './images/file.jpg'`
   - Use imported variable as src: `element.src = pic`
   - Webpack handles path resolution and bundling

4. **Testing Changes:**
   - Always run `npm run build` after code changes
   - Test all three tabs to ensure no breaking changes
   - Check browser console for errors (several console.log statements present)

5. **Style Modifications:**
   - CSS is modular - identify correct style file before editing
   - Custom font 'myFont' is available globally (styleInitial.css)
   - Background image is set on body element

### Common Pitfalls to Avoid

1. **Don't** use `innerHTML` for complex structures (except where already used, like contact.js)
2. **Don't** forget to import CSS files in index.js
3. **Don't** reference images directly by path - always import them
4. **Don't** modify dist/ directly - changes will be overwritten by build
5. **Don't** forget to rebuild after changes (`npm run build`)

### State Management
- **None implemented** - Each tab renders from scratch on click
- Tab state is ephemeral (no persistence between switches)
- Consider adding state management if implementing forms or user input

### Browser Compatibility
- Uses modern ES6 features (arrow functions, const/let, imports)
- Requires bundling with Webpack (no native ES6 module support)
- Should work in all modern browsers after bundling

### Performance Considerations
- All images are bundled (may increase initial load time)
- CSS is inlined in JS bundle (blocks rendering until JS loads)
- No lazy loading implemented
- Consider code splitting for larger applications

## Git Workflow

### Current Branch
Development on: `claude/claude-md-mi8icpajcyi3rnzp-01CFzE1TjCj9RzNhnYpXomco`

### Ignored Files
- `node_modules/` (per .gitignore)

### Committing Changes
1. Make changes in `src/` directory
2. Run `npm run build` to update dist/
3. Commit both src/ and dist/ changes together
4. Use descriptive commit messages

### Recent Commit History
- a6e6195: Add files via upload
- 254d1e5: Add files via upload
- bfdf5f6: Add files via upload
- 89ec8dd: Update .gitignore
- 9eb4498: Initial commit

## Dependencies

### DevDependencies (package.json)
- **webpack** (^5.82.1): Module bundler
- **webpack-cli** (^5.1.1): Webpack command-line interface
- **css-loader** (^6.7.3): Processes CSS imports
- **style-loader** (^3.3.2): Injects CSS into DOM

### Runtime Dependencies
None - Pure vanilla JavaScript application

## Future Enhancement Suggestions

1. **Functionality:**
   - Add form validation for contact/reservations
   - Implement active tab highlighting
   - Add smooth transitions between tabs
   - Create menu filtering/sorting

2. **Structure:**
   - Extract tab switching logic to separate controller
   - Create shared utilities module for common DOM operations
   - Implement proper state management

3. **Build:**
   - Add separate dev/prod webpack configs
   - Configure live reload dev server
   - Implement CSS extraction (separate from JS bundle)
   - Add minification/optimization for production

4. **Testing:**
   - Set up Jest for unit tests
   - Add ESLint for code quality
   - Implement Prettier for code formatting

---

**Last Updated:** 2025-11-21
**For Questions:** Refer to README.md or examine the source code in src/
