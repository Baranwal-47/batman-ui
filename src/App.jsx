
import './App.css'
import AmbientAudio from './components/AmbientAudio'
import ContentSections from './components/ContentSections'
import Hero from './components/Hero'

function App() {
  return (
    <div className="page">
      <AmbientAudio src="/audio/Batman.mp3" />
      <Hero />
      <ContentSections />
    </div>
  )
}

export default App