import privateRoute from "../hoc/privateRoute";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Menu from "../components/menu";
import { Dropdown, DropdownItem } from "flowbite-react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

const StokIkan = () => {
  // const [openModal, setOpenModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedFish, setSelectedFish] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [fishes, setFishes] = useState([]);
  const [newFish, setNewFish] = useState({
    nama: "",
    harga: "",
    jumlah: 0,
    deskripsi: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3002/fishes");
  
      // Convert the 'jumlah' property to a number type for each fish
      const updatedFishes = response.data.map(fish => {
        return {
          ...fish,
          jumlah: typeof fish.jumlah === 'string' ? parseInt(fish.jumlah) : fish.jumlah
        };
      });
  
      setFishes(updatedFishes);
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
    }
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const newValue = name === 'jumlah' ? parseInt(value) : value;

    setNewFish({ ...newFish, [name]: newValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newFish.id) {
        await axios.put(`http://localhost:3002/fishes/${newFish.id}`, newFish);
      } else {
        await axios.post("http://localhost:3002/fishes", newFish);
      }
      setNewFish({ id: "", nama: "", harga: "", jumlah: "", deskripsi: "" });
      fetchData();
      closeModal();
    } catch (error) {
      console.error("There was a problem:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/fishes/${id}`);
      fetchData();
    } catch (error) {
      console.error("There was a problem deleting the fish:", error);
    }
  };


  const handleEdit = (fish) => {

    // console.log("Fish object:", fish);


    setSelectedFish(fish);
    // Ensure fish.jumlah is converted to a number before setting it
    const jumlah = typeof fish.jumlah === 'string' ? parseInt(fish.jumlah) : fish.jumlah;

    // console.log("Parsed Jumlah:", jumlah);

  
    setNewFish({
      // Set the values based on the selected fish object
      id: fish.id,
      nama: fish.nama,
      harga: fish.harga,
      jumlah, // Assign the parsed value to jumlah
      deskripsi: fish.deskripsi,
    });
    setIsOpen(true);
  };
  


  return (
    <>
      <div>
        <Navbar />
        <Header />

        <Menu />

        <div className="flex justify-between gap-8 ml-24 mr-24">
          <div className=" flex justify-between mt-12 ">
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
              {isOpen && selectedFish && (
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
                      <div className="flex justify-between items-center w-[1013px] h-[400px] pb-8">
                        <div className="flex gap-8 pl-16 pt-5 ">
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
                            <form
                              action=""
                              className="max-w-sm mx-auto"
                              onSubmit={handleSubmit}
                            >
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
                                    name="nama"
                                    value={newFish.nama}
                                    onChange={handleInputChange}
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
                                      type="number"
                                      name="harga"
                                      value={newFish.harga}
                                      onChange={handleInputChange}
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
                                      type="number"
                                      name="jumlah"
                                      value={newFish.jumlah}
                                      onChange={handleInputChange}
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
                                    name="deskripsi"
                                    value={newFish.deskripsi}
                                    onChange={handleInputChange}
                                    cols="30"
                                    rows="10"
                                    className="w-[420px] h-[92px]  bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                    style={{
                                      resize: "none",
                                      lineHeight: "1.5",
                                    }}
                                  ></textarea>
                                </div>
                              </div>

                              <button
                                type="submit"
                                className="bg-[#0FED4D] py-3 px-5 text-white font-bold text-base rounded-xl"
                              >
                                {newFish.id ? "Ubah" : "Tambah"} Ikan
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-6 mt-4 md:mt-0">
              <div className="flex flex-row md:flex-row">
                <input
                  type="search"
                  placeholder="Search"
                  className="rounded-l-xl self-center py-4 border-0"
                />
                <button className="bg-blue-500 text-white self-center p-2 rounded-r-xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-4 md:ml-24 mr-4 md:mr-24 mt-12"></div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-4 md:ml-24 mr-4 md:mr-24 mt-12">
            {fishes.map((fish) => (
              <div
                key={fish.id}
                className="bg-white rounded-3xl max-w-full md:max-w-sm p-4"
              >
                <div className="flex justify-center items-center">
                  {/* Ganti src dan alt sesuai dengan gambar ikan */}
                  <img
                    src="/src/assets/ikan.svg"
                    alt="Ikan"
                    className="self-center mx-auto"
                  />
                </div>
                <div className="flex justify-between px-4 md:px-8 mt-2">
                  <p>Total Stok</p>
                  <p>{fish.jumlah} / 1000</p>
                </div>
                <div className="flex justify-between px-4 md:px-8 mt-2">
                  <p>Nama Ikan</p>
                  <p>{fish.nama}</p>
                </div>
                <div className="flex justify-between px-4 md:px-8 mt-2">
                  <p>Harga Ikan</p>
                  <p>{fish.harga}</p>
                </div>
                <div className="py-2 md:py-4 px-4 md:px-8">
                  <button
                    onClick={() => handleEdit(fish)}
                    className="mt-2 text-center text-white bg-[#0F8FED] p-2 w-full rounded-lg"
                  >
                    Edit Stok
                  </button>
                  <button
                    onClick={() => handleDelete(fish.id)}
                    className="mt-2 text-center text-white bg-red-600 p-2 w-full rounded-lg"
                  >
                    Delete
                  </button>
                </div>
                {/* Ganti button Edit dan Delete dengan fungsi handleEdit dan handleDelete */}
                {/* <div className="flex justify-between px-4 md:px-8 mt-2">
                  <button onClick={() => handleEdit(fish)}>Edit</button>
                  <button onClick={() => handleDelete(fish.id)}>Delete</button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default privateRoute(StokIkan);
