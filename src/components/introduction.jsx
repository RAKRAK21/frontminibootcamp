import React from 'react';
import Introicon from '../img/logo512.png';

function Introduction() {
    return (
    <div className="w-full h-[497px] px-[120px] py-[100px] bg-gradient-to-r
 from-blue-200 to-teal-300 flex-col justify-center items-center gap-2.5 inline-flex">
    <img className="w-[119px] h-[119px]" src={Introicon} alt="introicon" />
    <div className="w-[1120px] h-[300px] flex-col justify-center items-start gap-5 flex">
        <div className="text-black text-[40px] font-bold font-['Pretendard'] leading-[50px]">끊임없이 배우고     집요하게 해결하는 프론트엔드 개발자 OOO입니다.</div>
        <div className="self-stretch h-[172px] text-zinc-800 text-xl font-medium font-['Pretendard'] leading-[30px]">
            항상 새로운 기술에 열려 있으며, 문제 해결에 대한 열정으로 프로젝트에 참여합니다. <br/>
        꾸준한 성장과 협업을 통해 새로운 아이디어를 탐험하고 효과적인 솔루션을 찾는 것을 즐깁니다. <br/>
        강력한 분석 및 문제 해결 능력으로 효율적이고 확장 가능한 코드를 작성하는 것에 자부심을 가지고 있습니다. <br/>
        팀과 함께 협력하며, 사용자 중심의 솔루션을 만들기 위해 노력하고 있습니다. <br/>
        끊임없는 도전을 통해 성장하는 개발자로서 기여하고 싶습니다.</div>
    </div>
</div>
    );
}
export default Introduction;