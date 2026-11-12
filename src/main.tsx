import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AnnotatedPage from './skins/annotated/AnnotatedPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnnotatedPage />
  </StrictMode>,
)
