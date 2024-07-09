import React from 'react';
import Profileimg from '../img/profile.jpeg';

function Header() {
  return (
    <div className="flex flex-col justify-center items-center w-[1366px] h-[662px] px-[120px] py-[100px] gap-2.5">
      <div className="relative w-[1120px] h-[464px]">
      <img
          className="absolute rounded-full border-8 border-sky-200 w-[356px] h-[350px] left-[764px] top-[82px]"
          src={Profileimg}
          alt="Profile"
        />
        <div className="absolute flex flex-col justify-start items-start gap-10 w-[556px] h-full">
          <div className="px-6 py-3 bg-sky-100 rounded-xl flex justify-center items-center">
            <span className="text-black text-2xl font-semibold leading-9" style={{ fontFamily: 'Pretendard' }}>
              👋 안녕하세요!
            </span>
          </div>
          <div className="w-[550px]">
            <span className="text-zinc-800 text-[55px] font-semibold leading-[80px]" style={{ fontFamily: 'Pretendard' }}>
              신입 프론트엔드 개발자.<br />
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-[64px] font-semibold leading-[80px]" style={{ fontFamily: 'Pretendard' }}>
              Problem Solver.<br />
            </span>
            <span className="text-zinc-800 text-[64px] font-semibold leading-[80px]" style={{ fontFamily: 'Pretendard' }}>
              최형락 입니다.
            </span>
          </div>
          <div className="flex gap-4">
            <button className="flex justify-center items-center w-[270px] px-10 py-6 bg-black rounded-2xl">
              <span className="text-sky-100 text-2xl font-semibold leading-9" style={{ fontFamily: 'Pretendard' }}>
                Github Link
              </span>
            </button>
            <button className="flex justify-center items-center w-[269px] px-10 py-6 rounded-2xl border-4 border-stone-700">
              <span className="text-stone-700 text-2xl font-semibold leading-9" style={{ fontFamily: 'Pretendard' }}>
                Resume Link
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
