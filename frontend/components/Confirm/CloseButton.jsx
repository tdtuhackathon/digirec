import CloseConfirm from "../../assets/images/CloseConfirm.svg";

export default function CloseButton() {
  return (
    <img
      className="h-[32px] w-[32px] absolute top-[10px] right-[12px] opacity-30 hover:opacity-80 
        transition duration-200 ease-in-out"
      src={CloseConfirm}
      alt=""
      onClick={() => {document.querySelector(".containerConfirm").classList.add("hidden")}}
    />
  );
}