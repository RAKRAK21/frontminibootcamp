import React from 'react';

function Feedback() {
    return (
        <div className="w-full h-auto pt-20 pb-[120px] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-[60px] w-full">
                <div className="flex flex-col justify-start items-center gap-2">
                    <div className="text-stone-700 text-[40px] font-bold leading-[50px]" style={{ fontFamily: 'Pretendard' }}>
                        함께 개발한 동료들의 평가
                    </div>
                </div>
                <div className="w-full max-w-[1120px] flex justify-center overflow-x-auto gap-10">
                    <div className="min-w-[300px] w-[460px] h-[264px] px-[39px] bg-neutral-50 rounded-[10px] shadow flex flex-col justify-center items-center gap-5">
                        <div className="text-stone-700 text-xl font-normal leading-[30px]" style={{ fontFamily: 'Work Sans' }}>
                            "최형락은 함께 일하기 좋은 동료였습니다. 항상 문제 해결에 적극적이고, 다른 팀원들의 문제에도 발벗고 도움을 주었습니다. 형락이와 함께하는 프로젝트 성과가 좋았습니다.
                        </div>
                        <div className="w-full text-center text-stone-700 text-xl font-bold leading-[25px]" style={{ fontFamily: 'Work Sans' }}>
                            고라니 프로젝트 팀원, 지수
                        </div>
                    </div>
                    <div className="min-w-[300px] w-[460px] h-[264px] px-[39px] bg-neutral-50 rounded-[10px] shadow flex flex-col justify-center items-center gap-5">
                        <div className="text-stone-700 text-xl font-normal leading-[30px]" style={{ fontFamily: 'Work Sans' }}>
                            "최형락은 개발 역량 뿐 아니라 함께 일하기 너무 좋은 동료였습니다. 항상 문제 해결에 적극적이고, 다른 팀원들의 문제에도 발벗고 도움을 주었습니다. 형락과 함께하는 프로젝트는 항상 성과가 좋았습니다.
                        </div>
                        <div className="w-full text-center text-stone-700 text-xl font-bold leading-[25px]" style={{ fontFamily: 'Work Sans' }}>
                            고라니 프로젝트 팀원, 정호
                        </div>
                    </div>
                    {/* 여기에 추가적인 피드백 항목을 추가할 수 있습니다 */}
                </div>
            </div>
        </div>
    );
}

export default Feedback;
