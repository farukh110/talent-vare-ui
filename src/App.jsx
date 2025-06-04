import '@/App.scss';                  // Global styles
import Navbar from '@/components/global/Navbar'; // Navbar component
import Home from '@/pages/home';      // Home page component

function App() {
  return (
    <>
      <Navbar />   {/* Top navigation */}
      <Home />     {/* Main content */}
    </>
  )
}

export default App;
