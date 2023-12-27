import { Link } from "react-router-dom";

const FishCard = ({ fish, handleUpdate }) => {
  return (
    <>
      <div className="w-[151px] h-[159px] bg-white rounded-xl shadow-md sm:w-[384px] sm:h-[426px]">
        <img
          src={fish.imgUrl}
          className="h-[75px] mx-auto w-full sm:h-[229px] object-contain rounded-xl"
        />
        <div className="flex justify-between px-[14px] mb-[5px] mt-1 sm:mt-2 sm:px-[38px] sm:mb-[20px]">
          <div className="text-[7px] font-medium sm:text-[16px]">
            Total Stok
          </div>
          <div className="text-[7px] font-medium sm:text-[16px]">
            {fish.jumlah}
          </div>
        </div>
        <hr />
        <div className="flex justify-between px-[14px] my-[5px] sm:mt-[14px] sm:px-[38px]">
          <div className="text-[7px] font-medium sm:text-[16px]">Nama Ikan</div>
          <div className="text-[7px] font-medium sm:text-[16px]">
            {fish.nama}
          </div>
        </div>
        <div className="flex justify-between px-[14px] sm:mt-[10px] sm:px-[38px]">
          <div className="text-[7px] font-medium sm:text-[16px]">
            Harga Ikan
          </div>
          <div className="text-[7px] font-medium sm:text-[16px]">
            Rp. {fish.harga}
          </div>
        </div>
        <div className="flex justify-center items-center sm:mt-1 mt-2">
          <button
            className="w-[123px] bg-[#0F8FED] text-[6px] h-[13px] text-white rounded-[8px] sm:w-[307px] sm:h-[37px] sm:text-[15px] sm:mt-2"
            onClick={() => {
              handleUpdate(fish.id);
            }}
          >
            Kelola
          </button>
        </div>
      </div>
    </>
  );
};

export default FishCard;
