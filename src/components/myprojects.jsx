import React from 'react';

function MyProjects() {
    return (
        <div className="w-full h-[600px] px-[120px] pt-20 pb-[120px] bg-zinc-100/50 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-start items-start gap-8">
                <div className="p-2">
                    <h2 className="text-stone-700 text-[40px] font-semibold leading-[50px]" style={{ fontFamily: 'Pretendard' }}>내 프로젝트</h2>
                </div>
                <div className="w-[1366.px] h-[367.96px] bg-sky-100 rounded-3xl flex flex-col justify-center pr-10 items-center gap-2.5">
                    <div className="self-stretch pl-10 py-5 flex items-center gap-10">
                        <div className="w-[437px] flex flex-col justify-start items-start gap-6">
                            <div className="flex flex-col justify-start items-start gap-1">
                                <h3 className="text-stone-700 text-4xl font-bold leading-9" style={{ fontFamily: 'Pretendard' }}>Go-or-Ani</h3>
                                <p className="text-stone-700 text-xl font-medium leading-normal" style={{ fontFamily: 'Pretendard' }}>
                                    React, Figma, tailwindcss<br/><br/>
                                    간단한 베팅을 통해 즐길 수 있는<br/>귀여운 웹 페이지를 만들었습니다.<br/>
                                </p>
                            </div>
                            {/* <div className="flex justify-start items-start gap-6">
                                <a href="#" className="text-indigo-800 text-xl font-semibold underline leading-[30px]" style={{ fontFamily: 'Pretendard' }}>노션링크</a>
                                <a href="#" className="text-sky-900 text-xl font-semibold underline leading-[30px]" style={{ fontFamily: 'Pretendard' }}>깃허브링크</a>
                            </div> */}
                        </div>
                        <div className="relative w-[507.10px] h-[327.96px] flex justify-between">
                            <img className="w-[155.10px] h-[327.96px] rounded-2xl shadow" src="https://via.placeholder.com/155x328" alt="project screenshot" />
                            <img className="w-[155.10px] h-[327.96px] rounded-2xl shadow" src="https://via.placeholder.com/155x328" alt="project screenshot" />
                            <img className="w-[155.10px] h-[327.96px] rounded-2xl shadow" src="https://via.placeholder.com/155x328" alt="project screenshot" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MyProjects;