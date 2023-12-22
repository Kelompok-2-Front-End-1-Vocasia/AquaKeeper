import privateRoute from "../hoc/privateRoute";
import Navbar from "../components/navbar";
import Header from "../components/Header";
import Menu from "../components/menu";
import { Dropdown, DropdownItem } from "flowbite-react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const StokIkan = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />

        <Menu />

        <div className=" flex justify-between mt-12 ml-24 mr-24">
          <button className="flex gap-4 text-black font-semibold px-8 py-4 rounded-2xl bg-white text-left focus:bg-blue-600 focus:text-white">
            <img
              src="/src/assets/plus.svg"
              alt=""
              className="w-6 self-center"
            />
            <p className="self-center">Tambah Data Ikan</p>
          </button>

          <div className="flex gap-6">
          <div className="flex ">
            <input 
            type="search" 
            placeholder="Search"
            className="rounded-l-xl self-center py-3 border-0 "
            />
            <button className="bg-blue-500 text-white self-center p-1 rounded-r-xl">
            <IoSearchOutline style={{ fontSize: '2.5rem' }} />
            </button>
          </div>

          <Dropdown label="Filtering By" dismissOnClick={false} style={ {borderRadius:'12px', backgroundColor:'white', color:'black'} }>
            <DropdownItem as={Link} to="/ikan-terjual"> A - Z</DropdownItem>
            <DropdownItem>Z - A</DropdownItem>
            <DropdownItem>Stok Tertinggi</DropdownItem>
            <DropdownItem>Stok Terendah</DropdownItem>
            <DropdownItem>Harga Tertinggi</DropdownItem>
            <DropdownItem>Harga Terendah</DropdownItem>
          </Dropdown>

          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-3 ml-24 mr-24 mt-12 gap-10 ">
          <div className="bg-white rounded-3xl max-w-sm ">
            <div className="flex justify-center items-center">
              <img src="/src/assets/ikan.svg" alt="" className="self-center " />
            </div>
            <div className="flex justify-between px-8">
              <p>Total Stok</p>
              <p>600 / 1000</p>
            </div>

            {/* <div className="h-1 w-full bg-green-500 dark:bg-green-500 px-4">
            <div className="h-1 bg-primary" style={{ width: "45%" }}></div>
          </div> */}

            <div className="flex justify-between px-8 mt-7">
              <p>Nama Ikan</p>
              <p>Ikan Badut</p>
            </div>

            <div className="flex justify-between px-8 mt-1">
              <p>Harga Ikan</p>
              <p>40rb</p>
            </div>

            <div className="py-6 px-8">
              <button className=" mt-2 text-center text-white bg-[#0F8FED]  p-2 w-full rounded-lg">
                Tambah Stok
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl max-w-sm ">
            <div className="flex justify-center items-center">
              <img src="/src/assets/ikan.svg" alt="" className="self-center " />
            </div>
            <div className="flex justify-between px-8">
              <p>Total Stok</p>
              <p>600 / 1000</p>
            </div>

            {/* <div className="h-1 w-full bg-green-500 dark:bg-green-500 px-4">
            <div className="h-1 bg-primary" style={{ width: "45%" }}></div>
          </div> */}

            <div className="flex justify-between px-8 mt-7">
              <p>Nama Ikan</p>
              <p>Ikan Badut</p>
            </div>

            <div className="flex justify-between px-8 mt-1">
              <p>Harga Ikan</p>
              <p>40rb</p>
            </div>

            <div className="py-6 px-8">
              <button className=" mt-2 text-center text-white bg-[#0F8FED]  p-2 w-full rounded-lg">
                Tambah Stok
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl max-w-sm ">
            <div className="flex justify-center items-center">
              <img src="/src/assets/ikan.svg" alt="" className="self-center " />
            </div>
            <div className="flex justify-between px-8">
              <p>Total Stok</p>
              <p>600 / 1000</p>
            </div>

            {/* <div className="h-1 w-full bg-green-500 dark:bg-green-500 px-4">
            <div className="h-1 bg-primary" style={{ width: "45%" }}></div>
          </div> */}

            <div className="flex justify-between px-8 mt-7">
              <p>Nama Ikan</p>
              <p>Ikan Badut</p>
            </div>

            <div className="flex justify-between px-8 mt-1">
              <p>Harga Ikan</p>
              <p>40rb</p>
            </div>

            <div className="py-6 px-8">
              <button className=" mt-2 text-center text-white bg-[#0F8FED]  p-2 w-full rounded-lg">
                Tambah Stok
              </button>
            </div>
          </div>

          

         
        </div>
      </div>
    </>
  );
};

export default privateRoute(StokIkan);
