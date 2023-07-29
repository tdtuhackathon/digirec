import ButtonConfirm from "./ButtonConfirm";
import LogoContainer from "../Navbar/LogoContainer";
import CloseButton from "../Confirm/CloseButton";
import InfoProduct from "./InfoProduct";
import InfoBill from "./InfoBill";

function preventDefault(e) {
  e.stopPropagation();
}
function closeModal() {
  document.querySelector(".containerConfirm").classList.add("hidden");
}

export default function Confirm() {
  return (
    <div
      className="containerConfirm z-10000 bg-black/50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="layoutConfirm h-[500px] w-[700px] bg-white border-[5px] border-black/30 rounded-[25px] px-[50px] py-[30px] flex flex-col justify-center items-center relative"
        onClick={preventDefault}
      >
        <CloseButton closeModal={closeModal} />
        <div className="wrapLogo h-[70px] w-[180px]">
          <LogoContainer />
        </div>
        <InfoProduct />
        <InfoBill />
        <ButtonConfirm />
      </div>
    </div>
  );
}
