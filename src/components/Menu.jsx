import { Button, Dropdown, DropdownItem } from "flowbite-react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 mt-12 md:ml-24 md:mr-24">
        <button
          onClick={() => navigate("/home")}
          className="flex gap-4 text-black font-semibold p-3 rounded-2xl bg-white focus:bg-blue-600 focus:text-white "
        >
          <img
            src="/src/assets/ikan-badut.svg"
            alt=""
            className="w-8 self-center"
          />
          <p className="self-center">Ikan di Aquarium</p>
        </button>
        <button
          onClick={() => navigate("/ikan-terjual")}
          className="flex gap-4 text-black font-semibold px-8 py-2 rounded-2xl bg-white focus:bg-blue-600 focus:text-white"
        >
          <img
            src="/src/assets/dollar.svg"
            alt=""
            className="w-8 self-center"
          />
          <p className="self-center">Ikan Terjual</p>
        </button>
        <button className="flex gap-4 text-black font-semibold px-8 py-2 rounded-2xl bg-white focus:bg-blue-600 focus:text-white">
          <img
            src="/src/assets/growth.svg"
            alt=""
            className="w-8 self-center"
          />
          <p className="self-center">Analisis Penjualan</p>
        </button>
      </div> */}
      <div className="w-full flex flex-col items-center gap-[15px] my-[15px] sm:gap-[25px] sm:my-[25px]">
        <div className="w-full sm:hidden">
          <h1 className="text-[20px] font-medium ms-[25px]">Menu</h1>
        </div>
        <div className="flex flex-row gap-[7px] w-full justify-center sm:justify-between">
          <button className="w-[99px] h-[30px] bg-[#0D81D5] text-white text-[9px] font-medium rounded-[30px] flex items-center shadow-md sm:w-[385px] sm:h-[75px] sm:text-[24px] sm:flex sm:items-center">
            <img
              src="/src/assets/ikan-badut.svg"
              className="w-[18px] ms-2 bg-cover sm:w-[47px] sm:ms-12 sm:me-3"
            />
            <div className="mt-1 ms-2">
              <div className="relative sm:static">
                Ikan di <span className="hidden sm:inline-block">Aquarium</span>
              </div>
              <div className="relative -top-1 sm:hidden">Aquarium</div>
            </div>
          </button>
          <button className="w-[72px] h-[30px] bg-[#0D81D5] text-white text-[9px] font-medium rounded-[30px] flex items-center shadow-md sm:w-[385px] sm:h-[75px] sm:text-[24px]">
            <img
              src="/src/assets/plus.svg"
              className="w-[11px] ms-2 bg-cover me-1 sm:w-[24px] sm:ms-14 sm:me-7"
            />
            <span>
              Tambah <span className="hidden sm:inline-block">Data Ikan</span>
            </span>
          </button>
          <div className="flex items-center relative">
            <input
              type="text"
              className="w-[118px] h-[28px] rounded-[30px] border-[#0D81D5] sm:w-[327px] sm:h-[75px] text-[10px] sm:text-[24px]"
            />
            <button className="absolute right-0 bg-[#0D81D5] h-[28px] rounded-[30px] w-8 text-white sm:h-[75px] sm:w-20">
              <IoSearchOutline className="ms-2 sm:text-4xl sm:ms-6"></IoSearchOutline>
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full justify-start sm:justify-between ps-[25px] sm:ps-0">
          <div className="shadow-md rounded-[30px] hidden sm:inline-block">
            <Dropdown
              label="Filtering By"
              dismissOnClick={false}
              style={{
                borderRadius: "30px",
                backgroundColor: "white",
                color: "black",
                width: "200px",
                height: "75px",
              }}
            >
              <DropdownItem as={Link} to="/ikan-terjual">
                {" "}
                A - Z
              </DropdownItem>
              <DropdownItem>Z - A</DropdownItem>
              <DropdownItem>Stok Tertinggi</DropdownItem>
              <DropdownItem>Stok Terendah</DropdownItem>
              <DropdownItem>Harga Tertinggi</DropdownItem>
              <DropdownItem>Harga Terendah</DropdownItem>
            </Dropdown>
          </div>
          <div className="sm:hidden">
            <Dropdown
              label="Filter"
              dismissOnClick={false}
              style={{
                borderRadius: "30px",
                backgroundColor: "white",
                color: "black",
                width: "88px",
                height: "28px",
              }}
            >
              <DropdownItem as={Link} to="" className="text-[9px] p-1 px-2">
                A - Z
              </DropdownItem>
              <DropdownItem className="text-[9px] p-1 px-2 ">
                Z - A
              </DropdownItem>
              <DropdownItem className="text-[9px] p-1 px-2">
                Stok Tertinggi
              </DropdownItem>
              <DropdownItem className="text-[9px] p-1 px-2">
                Stok Terendah
              </DropdownItem>
              <DropdownItem className="text-[9px] p-1 px-2">
                Harga Tertinggi
              </DropdownItem>
              <DropdownItem className="text-[9px] p-1 px-2">
                Harga Terendah
              </DropdownItem>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
