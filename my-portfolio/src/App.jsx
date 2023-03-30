import './index.css';
import NikeLogo from './image/nike.png';

// 주석 처리
function App() {
  return (
    <div className="bg-red-100  min-h-screen">
      <header className="bg-blue-100 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
          <div>my Portfolio</div>
          {/* <div>          <img className="w-12" src={NikeLogo} alt="nike"></img>         </div> */}
          <ul className="flex gap-2 md:gap-8 text-xs md:text-base">
            {/* classname className 대소문자 체크*/}
            <li className="bg-indigo-300 btn-style">Introduce</li>
            <li className="bg-green-300 btn-style">Portfolio</li>
            <li className="bg-amber-600 btn-style">Contact Me</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
