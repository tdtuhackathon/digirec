const linkImg = ""

export default function InfoProduct() {
  return (
    <div className="topConfirm h-[32%] w-full flex  ">
        <img
          src={linkImg}
          alt=""
          className="h-full w-[24%] object-cover rounded-[20px] bg-black"
        />
      <div className="desConfirm w-[76%] flex items-center justify-center text-[20px] px-[12px] ">
        Sony Supreme Sound: Unparalleled Audio Experience with our
        High-Performance Headphones!
      </div>
    </div>
  );
}
