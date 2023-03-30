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
      <main>
        {/* Introduce */}
        <div className="bg-green-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          자기소개
        </div>

        <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-8 py-8">
          {/* margin padding */}
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>

          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>

          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>

          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>

          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>

          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
        </ul>
        <div className="bg-gray-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          내 연락처
        </div>
      </main>
      <footer className="max-w-screen-xl mx-auto flex justify-end py-1 md:p2-2 text-main">
        designed by ~~
      </footer>
    </div>
  );
}

export default App;
