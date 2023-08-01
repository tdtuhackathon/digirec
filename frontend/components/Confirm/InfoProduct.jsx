export default function InfoProduct({ text, img }) {
  console.log(text);
  return (
    <div className="topConfirm h-[32%] w-full flex  ">
        <img
          src={img}
          alt=""
          className="h-full w-[24%] object-cover rounded-[20px] bg-black"
        />
      <div className="desConfirm w-[76%] flex items-center justify-center text-[20px] px-[12px] ">
        {text}
      </div>
    </div>
  );
}
