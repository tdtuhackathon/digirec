import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//import thư viện
import StarRatings from "react-star-ratings";
import IconVector from "../../assets/images/IconVector.svg";

import IconSuccess from "../../assets/images/IconSuccess.svg";
import ButtonConfirm from "../Confirm/ButtonConfirm";
import LogoContainer from "../Navbar/LogoContainer";
import InfoProduct from "../Confirm/InfoProduct";
import InfoBill from "../Confirm/InfoBill";
import CloseConfirm from "../../assets/images/CloseConfirm.svg";

function InfoProductDetail() {
  // Xử lý sự kiện khi người dùng chọn đánh giá
  const handleRatingChange = (newRating) => {
    // Gửi newRating lên máy chủ (nếu cần)
    // Cập nhật điểm đánh giá ở đây (nếu cần)
  };

  // handle việc bật thông báo khi nhấn button Rent
  const [showRentNotification, setShowRentNotification] = useState(false);
  const [showRentSuccess, setShowRentSuccess] = useState(false);

  const handleRentNowClick = () => {
    setShowRentNotification(!showRentNotification);
    // document.querySelector(".containerConfirm").classList.remove("hidden");
  };

  // xử lý sự kiện chọn ngày
  const today = new Date(); //lấy ngày hiện tại để xử lý sự kiện ngăn chọn ngày trong quá khứ

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  // hàm tính toán số ngày thuê
  const calculateDaysDifference = (startDate, endDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // Số mili giây trong một ngày do startDate - endDate trả về mili giây
    return Math.round(Math.abs((startDate - endDate) / oneDay) + 1);
  };

  // xử lý sự kiện chọn số lượng
  const [quantity, setQuantity] = useState(1);

  const handleNumberButtonClick = (value) => {
    setQuantity(value);
  };

  const numberMapping = {
    One: 1,
    Two: 2,
    Three: 3,
    Four: 4,
  };

  const menuContents = [
    {
      id: 1,
      text: "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!",
      img: "",
      viewer: "13",
      author: "Hoang Long",
      star: 4.5,
      amout: "4",
      descript:
        "Designed with precision engineering and cutting-edge technology, our high-performance headphones deliver an unparalleled listening experience, whether you're on the go or relaxing at home. Indulge in comfort with their ergonomic design and premium materials that ensure a perfect fit for extended wear. ",
      price: "15.30",
    },
  ];

  const TotalPrice = (price, startDate, endDate, quantity) => {
    return price * calculateDaysDifference(startDate, endDate) * quantity;
  };
  return (
    <div className="h-full flex-1 pl-[120px]">
      <div>
        {menuContents.map(
          ({ id, text, img, viewer, amout, author, descript, price, star }) => (
            <div key={id}>
              <div>
                {/* Title */}
                <div className="text-[1.8rem] font-bold text-[#343D47]">
                  {text}
                </div>

                {/* Rating */}
                <div className="flex items-center mt-2.5">
                  <div className="mb-[6px]">
                    <StarRatings
                      rating={star}
                      starRatedColor="#343D47" // Màu của ngôi sao đã chọn
                      changeRating={handleRatingChange}
                      numberOfStars={5} // Số ngôi sao
                      starDimension="20px" // Kích thước của ngôi sao
                      starSpacing="2px" // Khoảng cách giữa các ngôi sao
                    />
                  </div>
                  <span className="ml-5 text-[#343D47] font-bold">{star}</span>
                  <span className="border border-solid border-[#C9CACB] rounded-full w-1.5 h-1.5 bg-[#C9CACB] ml-2.5 mt-1"></span>
                  <div className="ml-2.5 text-[#343D47] font-bold">
                    Read {viewer} viewer
                  </div>
                </div>

                {/* Author */}
                <div className="mt-2.5">
                  <span>By </span>
                  <span className="text-[#343D47] font-bold italic">
                    {author}
                  </span>
                  <span className="text-[#343D47] font-bold italic">
                    {" "}
                    ({amout} products)
                  </span>
                </div>
              </div>
              <div className="mt-5">
                {/* Description */}
                <div className="w-[90%] text-[#343D47] text-[1rem]">
                  {descript}
                </div>
                <div className="relative mt-2.5 font-bold text-[#343D47] text-[2rem]">
                  <span className="text-[#C9CACB] font-normal">$</span>
                  <span>{price}</span>
                  <span className="absolute bottom-2 text-[0.8rem] text-black ml-1.5">
                    (1 day rent fee)
                  </span>
                </div>
              </div>

              {/* Date */}
              <div className="mt-3.5 mr-[110px]">
                <span className="text-[#343D47] font-semibold text-[1.2rem]">
                  Duration
                </span>
                <div className=" flex  items-center mt-2.5">
                  <div className=" flex border border-solid border-[#343D47] p-1.5 rounded-full">
                    <DatePicker
                      selected={startDate}
                      onChange={handleStartDateChange}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      placeholderText="Start Date"
                      dateFormat="dd/MM/yyyy"
                      minDate={today}
                      customInput={
                        <input className="w-[110px] h-[30px] p-2 text-center text-[0.8rem] border-white" />
                      }
                    />
                    <img src={IconVector} alt="#" />
                    <DatePicker
                      selected={endDate}
                      onChange={handleEndDateChange}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      placeholderText="End Date"
                      dateFormat="dd/MM/yyyy"
                      minDate={startDate}
                      customInput={
                        <input className=" w-[110px] h-[30px] p-2 text-center text-[0.8rem]" />
                      }
                    />
                  </div>

                  <div className="border border-solid border-[#343D47] w-[152px] h-0 mx-5"></div>

                  {/* Hiển thị số ngày đã chọn */}
                  {
                    <div className="text-[#343D47] font-semibold text-[1rem]">
                      {calculateDaysDifference(startDate, endDate)} days
                    </div>
                  }
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <span className="text-[#343D47] font-semibold text-[1.2rem]">
                  Quantity
                </span>

                {/* Thêm màu khi hover - active */}
                <div className="mt-2.5">
                  {Object.entries(numberMapping).map(([text, value]) => (
                    <button
                      className="border border-solid border-[#343D47] rounded-xl p-1.5 w-[100px] mr-2.5 hover:bg-[#343D47] hover:text-white focus:bg-[#343D47] focus:text-white"
                      key={text}
                      onClick={() => handleNumberButtonClick(value)}
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service fee */}
              <div>
                <div className="flex mt-5">
                  <span className="text-[#343D47] font-semibold text-[1rem]">
                    Service fee (5%):
                    <span className="ml-3.5">
                      {(
                        TotalPrice(price, startDate, endDate, quantity) * 0.05
                      ).toFixed(3)}
                      $
                    </span>
                  </span>
                  <span className="text-[#343D47] font-semibold text-[1rem] ml-[120px] mr-10">
                    Deposit (3 days):
                    <span className="ml-3.5">65.00$</span>
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex mr-10 mt-[30px]">
                <div className="w-[200px] mr-10">
                  <button
                    onClick={handleRentNowClick}
                    className="hover:opacity-80 relative w-[200px] bg-[#343D47] text-white p-3.5 rounded-t-md rounded-none"
                  >
                    RENT NOW
                    <div className="absolute bottom-0 left-[0.4rem] border border-solid border-white h-0 w-[184px]"></div>
                  </button>
                  <button className="hover:opacity-80 w-[200px] bg-[#343D47] text-white p-3.5 rounded-b-md rounded-none">
                    SCHEDULE RENT
                  </button>
                </div>
                {/* RentConfirm*/}
                {showRentNotification && (
                  <div
                    className="containerConfirm z-10000 bg-black/50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
                    onClick={handleRentNowClick}
                  >
                    <div
                      className="layoutConfirm h-[500px] w-[700px] bg-white border-[5px] border-black/30 rounded-[25px] px-[50px] py-[30px] flex flex-col justify-center items-center relative"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <img
                        className="h-[32px] w-[32px] absolute top-[10px] right-[12px] opacity-30 hover:opacity-80 
                        transition duration-200 ease-in-out"
                        src={CloseConfirm}
                        alt=""
                        onClick={handleRentNowClick}
                      />
                      <div className="wrapLogo h-[70px] w-[180px]">
                        <LogoContainer />
                      </div>
                      <InfoProduct text={text} img={img} />
                      <InfoBill
                        timeRent={calculateDaysDifference(startDate, endDate)}
                        aDayRentFee={price}
                        serviceFee={0.765}
                        total={(
                          TotalPrice(price, startDate, endDate, quantity) +
                          TotalPrice(price, startDate, endDate, quantity) * 0.05
                        ).toFixed(3)}
                      />
                      <span
                        onClick={() => {
                          setShowRentSuccess(!showRentSuccess);
                          handleRentNowClick()
                        }}
                      >
                        <ButtonConfirm />
                      </span>
                    </div>
                  </div>
                )}

                {showRentSuccess && (
                  <div
                    className="containerConfirm z-10000 bg-black/50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
                    onClick={() => {
                      setShowRentSuccess(!showRentSuccess);
                    }}
                  >
                    <div
                      className="layoutConfirm h-[500px] w-[700px] bg-white border-[5px] border-black/30 rounded-[25px] px-[50px] py-[30px] flex flex-col items-center relative"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <img
                        className="h-[32px] w-[32px] absolute top-[10px] right-[12px] opacity-30 hover:opacity-80 
                        transition duration-200 ease-in-out"
                        src={CloseConfirm}
                        alt=""
                        onClick={() => {setShowRentSuccess(!showRentSuccess);}}
                      />
                      <div className="wrapLogo h-[70px] w-[180px]">
                        <LogoContainer />
                      </div>
                      <div className="flex flex-col justify-center items-center h-[70%] w-[50%]">
                        <img
                          className="w-[50%] h-[50%]"
                          src={IconSuccess}
                          alt=""
                        />
                        <span className="text-[44px] fontPrimary">
                          Rent Success
                        </span>
                      </div>
                      <a
                        href="/"
                        className="
                        bg-[#c5afe5] h-[20%] w-[40%] rounded-[32px] fontSideBar font-[700]
                        flex justify-center items-center 
                        text-[28px]
                        "
                      >
                        Back to Home
                      </a>
                    </div>
                  </div>
                )}

                <div className="mt-2.5">
                  <div className="text-[#343D47] text-[1.4rem] ml-2.5">
                    <span className="font-bold">
                      {(
                        TotalPrice(price, startDate, endDate, quantity) +
                        TotalPrice(price, startDate, endDate, quantity) * 0.05
                      ).toFixed(3)}
                      ${" "}
                    </span>
                    in total
                  </div>
                  <div className="flex items-center text-#343D47 text-[0.8rem] mt-4">
                    <div className="border border-solid border-[#343D47] w-1 h-1 rounded-full bg-[#343D47] mr-2.5"></div>
                    <span>
                      <span className="text-black font-bold">100% access </span>
                      to supscription’s privilege
                    </span>
                  </div>
                  <div className="flex items-center text-[#343D47] text-[0.8rem]">
                    <div className="border border-solid border-[#343D47] w-1 h-1 rounded-full bg-[#343D47] mr-2.5"></div>
                    <span>
                      <span className="text-black font-bold">
                        24-hours a day{" "}
                      </span>
                      support services
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default InfoProductDetail;
