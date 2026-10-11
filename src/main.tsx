import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/source-serif-4';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/400-italic.css';
import '@fontsource/ibm-plex-sans/600.css';
import './styles/tokens.css';
import './styles/global.css';
import './styles/print.css';
import { App } from './app/App';
import { prefersReducedMotion } from './lib/motion';

// Entrance animations only run when the visitor hasn't asked for reduced motion.
if (!prefersReducedMotion()) {
  document.documentElement.classList.add('js-motion');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
