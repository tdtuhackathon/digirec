/* eslint-disable jsx-a11y/alt-text */
import "regenerator-runtime/runtime";

export default function ImgContainer({ images }) {
  return (
    <>
      <div className="productCard_img h-[137px] w-[248px] rounded-[24px] bg-black">
        <img
          className="img_link h-[137px] w-[248px] rounded-[24px] object-cover"
          src={images}
        ></img>
      </div>
    </>
  );
}
