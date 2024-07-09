import React from "react";

function Footer() {
    return (
        <div className="w-full h-[182px] relative">
    <div className="w-full h-[182px] left-0 top-0 absolute bg-neutral-50" />
    <div className="left-[600px] top-[53px] absolute justify-center items-start gap-[35px] inline-flex">
        <div className="w-[30px] h-[30px] relative">
        </div>
    </div>
    <div className="w-[222.98px] left-[570.28px] top-[107px] absolute text-center text-slate-800 text-sm font-normal font-['Heebo']">Copyright ©2024 All rights reserved </div>
    <button className="w-[165px] h-[88px] left-[1141px] top-[34px] absolute">
        <div className="w-[165px] h-[88px] left-0 top-0 absolute bg-gradient-to-r from-blue-200 via-emerald-100 to-orange-100 rounded-[50px] border-8 border-blue-200" />
        <div className="left-[42px] top-[20px] absolute text-center text-stone-700/opacity-80 text-xl font-bold font-['Pretendard']">Contact <br/>Me</div>
    </button>
</div>
    );
}
export default Footer;