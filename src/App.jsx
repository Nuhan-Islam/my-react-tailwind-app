import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Introduction from './pages/Introduction';
import Quickstart from './pages/Quickstart';
import SDKs from './pages/SDKs';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8 max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/quickstart" element={<Quickstart />} />
            <Route path="/sdks" element={<SDKs />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;