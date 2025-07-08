import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Theme >
    <App />
  </Theme>
)
