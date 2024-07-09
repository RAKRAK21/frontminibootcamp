import React from 'react';
import FigmaIcon from '../img/figma.png';
import ReactIcon from '../img/react.png';
import HtmlCssIcon from '../img/htmlcss.png';
import JsIcon from '../img/jsicon.png';

function Stack() {
    return (
        <div className="w-[1366px] h-[666px] px-[120px] py-[100px] flex flex-col justify-center items-center gap-2.5">
            <div className="self-stretch flex flex-col justify-start items-center gap-20">
                <div className="flex flex-col justify-start items-center gap-6">
                    <div className="text-center text-black text-[40px] font-bold leading-relaxed" style={{ fontFamily: 'Pretendard' }}>기술 스택</div>
                    <div className="text-center text-zinc-800 text-xl font-normal leading-relaxed" style={{ fontFamily: 'Pretendard' }}>
                        지금까지 활용해 본 기술들입니다. <br />
                        넓고 깊은 기술 스택을 얻기 위해 노력하고 있습니다.
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-10">
                    <div className="justify-center items-center gap-20 inline-flex">
                        <img src={FigmaIcon} alt="figma" className="w-[140px] h-[120px] relative" />
                        <img src={ReactIcon} alt="react" className="w-[140px] h-[119px] relative" />
                        <img src={HtmlCssIcon} alt="htmlcss" className="w-[350px] h-[120px] relative" />
                        <img src={JsIcon} alt="js" className="w-[100px] h-[100px] relative" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stack;
