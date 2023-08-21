import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";

const EventCard = () => {
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2 mb-12`}>
      <div className="w-full lg:w-[50%} m-auto">
        <img
          src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
          alt="photo"
        />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro Max 8/256gb</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus
          quibusdam, dolorum esse suscipit ipsum molestiae quis earum. Nisi
          fugiat accusamus veniam omnis mollitia quam veritatis fuga asperiores
          minus officiis?
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500px] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h5>
          </div>
          <span className="pr-3 font[400] text=[17px] text-[#44a55e]">
            120 sold{" "}
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
