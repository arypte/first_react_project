import './index.css';
import Header from './components/Header';
import NikeLogo from './image/nike.png';
import Introduce from './components/introduce';
import PortFolio from './components/PortFolio';
import ConTact from './components/ConTact';
import Footer from './components/Footer';

// 주석 처리
function App() {
  return (
    <div className="bg-red-100  min-h-screen">
      <Header />
      <main>
        <Introduce />
        <PortFolio />
        <ConTact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
