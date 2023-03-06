import React from "react";
import { useSpring, animated } from "react-spring";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";
const Content = () => {
  const customer = useSpring({
    customers: 10245,
    from: { customers: 0 },
  });
  const card = useSpring({ cards: 12045, from: { cards: 0 } });
  return (
    <section className="">
      <div className="ml-[70px] mr-[54px] text-bold  flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px]">
        <div className="mt-16 gap-8 flex items-start ">
          <FaUser size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="font-semibold mb-[36px] text-13">Customers</p>
          </div>
        </div>
        <div className="flex items-start mb-16 gap-8 ">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <p className="text-26">
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold">Cards Issue</p>
          </p>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold">
        <div className="check-content">
          <img src={checkIconMobile} />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} />
          <p>No exteral fees</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} />
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
