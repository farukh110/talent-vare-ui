import '@/App.scss';                  // Global styles
import Navbar from '@/components/global/Navbar'; // Navbar component
import Home from '@/pages/Home';

function App() {
  return (
    <>
      <Navbar />   {/* Top navigation */}
      <Home />     {/* Main content */}
    </>
  )
}

export default App;
