import "regenerator-runtime/runtime";


import ARROW from "../../assets/images/Arrow.svg";

export default function ImgProductDetail({images}) {


  let currentIndex = 0;
  function handleImg(e) {
    let imgProduct = document.querySelector(".imgProduct");
    let target = e.target;
    imgProduct.src = target.src;
    currentIndex = parseInt(target.getAttribute("index"));
  }
  function leftArrow() {
    if (currentIndex === 0) {
      currentIndex = images.length - 1;
    } else {
      currentIndex -= 1;
    }
    document.querySelector(".imgProduct").src = images[currentIndex];
  }
  function rightArrow() {
    if (currentIndex === images.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    document.querySelector(".imgProduct").src = images[currentIndex];
  }

  return (
    <div className="wrapIng inline-block h-[100%] w-[100%] top-[50%]">
      <div className="wrapImg_top relative">
        <img
          src={images[currentIndex]}
          alt=""
          className="imgProduct h-[500px] w-full object-cover border-[2px] rounded-[20px]"
        />
        <div className="wrapArrow w-full absolute top-[50%] left-0 px-[10px] flex justify-between ">
          <div
            onClick={leftArrow}
            className="leftArrow h-[43px] w-[43px] border-[1px] rounded-[50%] bg-[#CFD3DA] opacity-[0.5] hover:opacity-[1]"
          >
            <img className="opacity-[0.8]" src={ARROW} alt="" />
          </div>
          <div
            onClick={rightArrow}
            className="rightArrow h-[43px] w-[43px] border-[1px] rounded-[50%] bg-[#CFD3DA] rotate-180 opacity-[0.5] hover:opacity-[1]"
          >
            <img className="opacity-[0.8]" src={ARROW} alt="" />
          </div>
        </div>
      </div>
      
      <div className="wrapImg_bottom h-[134px]  flex mt-[25px] overflow-x-scroll">
        {images.map((image, i) => (
          <img
            src={image}
            alt=""
            className="h-[134px] min-w-[150px] mx-[4px] object-cover border-[2px] rounded-[20px]"
            onClick={handleImg}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
