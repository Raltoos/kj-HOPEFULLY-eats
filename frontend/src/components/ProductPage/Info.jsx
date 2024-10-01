/* eslint-disable react/prop-types */
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

import AddOnCard from "./AddOnCard";
import loremPicsum from "lorem-picsum";

const Info = ({ counter, setCounter }) => {
  return (
    <div className="w-full h-[600px] bg-white rounded-t-[60px] animate-fade-up">
      <div className="flex justify-between">
        <div className="p-4 m-5 bg-[#472C9D] text-white rounded-[30px] flex gap-2 justify-center items-center">
          <div className="text-xl">⭐</div>
          <div className="text-2xl">4.8</div>
        </div>
        <div className="m-5 text-2xl p-4 text-[#C9AA05] font-bold">Rs. 20</div>
      </div>

      <div className="mt-3 w-full flex justify-between">
        <span className="text-3xl ml-5">Vada Pav</span>
        <div className="mr-5 flex justify-center items-center gap-5">
          <RemoveCircleOutlineOutlinedIcon
            sx={{ color: "#472C9D", fontSize: 27 }}
            onClick={() =>
              setCounter((prev) => {
                if (prev > 0) return prev - 1;
                else return 0;
              })
            }
          />
          <span className="text-2xl">{counter}</span>
          <ControlPointOutlinedIcon
            sx={{ color: "#472C9D", fontSize: 27 }}
            onClick={() => setCounter((prev) => prev + 1)}
          />
        </div>
      </div>

      <div className="m-5 text-lg text-[#595959]">
        <span>Your desi tasty vada pav</span>
      </div>

      <div className="m-5 flex flex-col">
        <h3 className="text-lg">Add Ons</h3>
        <div className="flex justify-between mt-5">
          <AddOnCard src={loremPicsum({ width: 60 })}></AddOnCard>
          <AddOnCard src={loremPicsum({ width: 60 })}></AddOnCard>
          <AddOnCard src={loremPicsum({ width: 60 })}></AddOnCard>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button className="px-10 py-3 my-5 text-2xl bg-[#472C9D] text-white rounded-3xl">Add to Cart</button>
      </div>
    </div>
  );
};

export default Info;
