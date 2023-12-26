import privateRoute from "../hoc/privateRoute";
import Navbar from "../components/navbar";
import Header from "../components/Header";
import Menu from "../components/menu";
import { Dropdown, DropdownItem } from "flowbite-react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const StokIkan = () => {
  // const [openModal, setOpenModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <Navbar />
        <Header />

        <Menu />

        <div className=" flex justify-between mt-12 ml-24 mr-24">
          <div className="">
            {/* Tombol untuk membuka modal */}
            <button
              onClick={openModal}
              className="flex bg-blue-600 text-white font-semibold rounded-lg px-4 py-3 hover:bg-blue-700"
            >
              <img
                src="/src/assets/plus.svg"
                alt=""
                className="w-5 self-center mr-2"
              />
              Tambah Data Ikan
            </button>

            {/* Modal */}
            {isOpen && (
              <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex justify-center items-center">
                <div className="relative bg-white w-1013 h-592 rounded-xl">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 "
                  >
                    <IoMdClose
                      style={{ fontSize: "2.5rem", paddingRight: "12px" }}
                    />
                  </button>

                  {/* Isi Modal */}
                  <div className="">
                    <h1 className="font-medium text-[27px] pt-8 pl-16 pb-5">
                      Tambah Data Ikan
                    </h1>
                    <hr className="w-full mt-2 mb-2" />
                    <div className="flex justify-between items-center w-[1013px] h-[400px]">
                      <div className="flex gap-8 pl-16 pt-5">
                        <div className="bg-[#E7F5FE] w-[432px] h-[368px] rounded-xl ">
                          <img
                            src="/src/assets/cloud-computing.svg"
                            alt=""
                            className="pt-6 pl-24"
                          />
                          <div className="pt-2 pl-32">
                            <button className="bg-[#0F8FED] px-3 py-2 rounded-xl text-white">
                              Unggah Gambar
                            </button>
                          </div>
                        </div>
                        <div>
                          <form action="" className="max-w-sm mx-auto">
                            <div className="w-full mt-2">
                              <div className="mb-5">
                                <label
                                  htmlFor="nama ikan"
                                  className="block mb-2 text-sm font-medium text-black"
                                >
                                  Nama Ikan
                                </label>
                                <input
                                  type="text"
                                  id="namaIkan"
                                  className="w-[420px] bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                                  placeholder=" "
                                  required
                                />
                              </div>
                              <div className="flex gap-6">
                                <div className="mb-5">
                                  <label
                                    htmlFor="harga ikan"
                                    className="block mb-2 text-sm font-medium text-black"
                                  >
                                    Harga Ikan
                                  </label>
                                  <input
                                    type="text"
                                    id="hargaIkan"
                                    className="w-200px] bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                                    placeholder=" "
                                    required
                                  />
                                </div>

                                <div className="mb-5">
                                  <label
                                    htmlFor="stok ikan"
                                    className="block mb-2 text-sm font-medium text-black"
                                  >
                                    Stok Ikan
                                  </label>
                                  <input
                                    type="text"
                                    id="stokIkan"
                                    className="w-200px] bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                                    placeholder=" "
                                    required
                                  />
                                </div>
                              </div>

                              <div className="mb-5">
                                <label
                                  htmlFor="deskripsi"
                                  className="block mb-2 text-sm font-medium text-black"
                                >
                                  Deskripsi
                                </label>
                                <textarea 
                                name="" 
                                id="" 
                                cols="30" 
                                rows="10" 
                                className="w-[420px] h-[92px]  bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                style={{
                                  resize: 'none', 
                                  lineHeight: '1.5', 
                                }}
                                >

                                </textarea>
                                
                              </div>



                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* <button
            className="flex text-white font-semibold rounded-2xl bg-blue-600 text-left hover:bg-blue-700 hover:text-white"
            onClick={openModal}
          >
            <img
              src="/src/assets/plus.svg"
              alt=""
              className="w-5 self-center mr-4"
            />
            <p className="self-center">Tambah Data Ikan</p>
          </button> */}
          {/* <Modal show={openModal} onClose={() => setOpenModal(false)}  >
            <Modal.Header >Tambah Data Ikan</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <div className="flex gap-8">
                  <div className="bg-[#E7F5FE] w-[432px] h-[368px]">
                    <img
                      src="/src/assets/cloud-computing.svg"
                      alt=""
                      className="pt-6 pl-24"
                    />
                    <div className="pt-2 pl-36">
                      <button className="bg-[#0F8FED] px-3 py-2 rounded-xl text-white">
                        Unggah Gambar
                      </button>
                    </div>
                  </div>
                  <div>
                    <form action="" className="max-w-sm mx-auto">
                      <div className="w-full mt-16">
                        <div className="mb-5">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@flowbite.com"
                            required
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setOpenModal(false)}>I accept</Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Decline
              </Button>
            </Modal.Footer>
          </Modal> */}

          <div className="flex gap-6">
            <div className="flex ">
              <input
                type="search"
                placeholder="Search"
                className="rounded-l-xl self-center py-3 border-0 "
              />
              <button className="bg-blue-500 text-white self-center p-1 rounded-r-xl">
                <IoSearchOutline style={{ fontSize: "2.5rem" }} />
              </button>
            </div>

            <Dropdown
              label="Filtering By"
              dismissOnClick={false}
              style={{
                borderRadius: "12px",
                backgroundColor: "white",
                color: "black",
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
