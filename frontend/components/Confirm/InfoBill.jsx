export default function InfoBill({ timeRent, aDayRentFee, serviceFee, total }) {
  return (
    <div
      className="bottomConfirm w-full h-[40%] text-black font-[700] text-[20px] pb-[20px]
          flex justify-center
      "
    >
      <div
        className="leftInfol w-[60%] 
          flex flex-col items-center justify-center
          "
      >
        <div className="">Time :</div>
        <div className="">A day rent fee :</div>
        <div className="w-full text-center border-b-[2px] pb-[4px] border-b-[#C9CACB]">
          Service fee (5%) :
        </div>
        <div className="pt-[4px]">Total :</div>
      </div>
      <div
        className="rightInfo w-[40%]
              flex flex-col items-center justify-center border-l-[2px] border-l-[#C9CACB]
          "
      >
        <div className="">{timeRent} Day</div>
        <div className="">${aDayRentFee}</div>
        <div className="w-full text-center border-b-[2px] pb-[4px] border-b-[#C9CACB]">
          ${serviceFee}
        </div>
        <div className="pt-[4px]">
          ${total}
        </div>
      </div>
    </div>
  );
}
