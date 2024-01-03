import {
  Dropdown,
  DropdownItem,
  FileInput,
  Button,
  Label,
  Modal,
  TextInput,
} from "flowbite-react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import FishCard from "../components/FishCard";
import Navbar from "../components/Navbar";
import privateRoute from "../hoc/privateRoute";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { instance, instanceImg } from "../utils/instance";

const StokIkanKu = () => {
  const [openModal, setOpenModal] = useState(false);
  const [fishes, setFishes] = useState([]);
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [dataToUpdate, setDataToUpdate] = useState();
  const [idToUpdate, setIdToUpdate] = useState();
  const [namaIkan, setNamaIkan] = useState("");
  const [jumlahIkan, setJumlahIkan] = useState(0);
  const [hargaIkan, setHargaIkan] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedFished, setSearchedFished] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get("http://localhost:3000/fishes");
        setFishes(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const trySearch = () => {
    setSearching(true);
    const filteredFishes = fishes.filter((fish) =>
      fish.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedFished(filteredFishes);
  };

  const handleUpdate = async (id) => {
    const res = await instance.get(`http://localhost:3000/fishes/${id}`);
    setIsUpdating(true);
    setOpenModal(true);
    setDataToUpdate(res.data);
    setIdToUpdate(id);
    setNamaIkan(res.data.nama);
    setHargaIkan(res.data.harga);
    setJumlahIkan(res.data.jumlah);
  };

  const handleDelete = async (id) => {
    const res = await instance.delete(`http://localhost:3000/fishes/${id}`);
    window.location.reload();
  };

  const formik = useFormik({
    initialValues: {
      nama: "",
      harga: "",
      jumlah: "",
    },
    onSubmit: async (values, action) => {
      try {
        if (isUpdating) {
          if (image) {
            setIsLoading(true);
            const dataImg = new FormData();
            dataImg.append("file", image);
            dataImg.append("upload_preset", "aquakeeper");
            dataImg.append("cloud_name", "dhprwa6af");

            const resImg = await instanceImg
              .post(
                "https://api.cloudinary.com/v1_1/dhprwa6af/image/upload",
                dataImg
              )
              .then((res) => res);

            const dataForUpdate = {
              nama: namaIkan,
              jumlah: jumlahIkan,
              harga: hargaIkan,
              imgUrl: resImg.data.url,
            };

            const res = await instance.put(
              `http://localhost:3000/fishes/${idToUpdate}`,
              dataForUpdate
            );

            setNamaIkan(0);
            setHargaIkan(0);
            setJumlahIkan(0);

            console.log(res);
          } else {
            const dataForUpdate = {
              nama: namaIkan,
              jumlah: jumlahIkan,
              harga: hargaIkan,
              imgUrl: dataToUpdate.imgUrl,
            };

            const res = await instance.put(
              `http://localhost:3000/fishes/${idToUpdate}`,
              dataForUpdate
            );

            setNamaIkan(0);
            setHargaIkan(0);
            setJumlahIkan(0);

            console.log(res);
          }

          window.location.reload();
        } else {
          if (image) {
            setIsLoading(true);
            const dataImg = new FormData();
            dataImg.append("file", image);
            dataImg.append("upload_preset", "aquakeeper");
            dataImg.append("cloud_name", "dhprwa6af");

            const resImg = await instanceImg
              .post(
                "https://api.cloudinary.com/v1_1/dhprwa6af/image/upload",
                dataImg
              )
              .then((res) => res);

            const fishData = {
              nama: values.nama,
              harga: values.harga,
              jumlah: values.jumlah,
              imgUrl: resImg.data.url,
            };

            const res = await instance
              .post("http://localhost:3000/fishes", fishData)
              .then((res) => res);

            console.log({ status: res.status, statusText: res.statusText });
          } else {
            const fishData = {
              nama: values.nama,
              harga: values.harga,
              jumlah: values.jumlah,
              imgUrl: "/src/assets/ikon-ikan.png",
            };

            const res = await instance
              .post("http://localhost:3000/fishes", fishData)
              .then((res) => res);

            console.log({ status: res.status, statusText: res.statusText });
          }

          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
        action.resetForm();
      }
    },
  });

  function onCloseModal() {
    setOpenModal(false);
    setIsUpdating(false);
  }

  return (
    <>
      {openModal ? (
        <>
          <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
              <form onSubmit={formik.handleSubmit}>
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {isUpdating ? "Kelola data ikan" : "Tambah data ikan"}
                  </h3>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="nama" value="Nama ikan" />
                    </div>
                    <TextInput
                      id="nama"
                      placeholder="Masukkan nama ikan"
                      name="nama"
                      defaultValue={isUpdating ? dataToUpdate.nama : null}
                      onChange={
                        isUpdating
                          ? (e) => setNamaIkan(e.target.value)
                          : formik.handleChange
                      }
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="harga" value="Harga ikan" />
                    </div>
                    <TextInput
                      id="harga"
                      placeholder="Masukkan harga ikan"
                      name="harga"
                      type="number"
                      defaultValue={isUpdating ? dataToUpdate.harga : null}
                      onChange={
                        isUpdating
                          ? (e) => setHargaIkan(e.target.value)
                          : formik.handleChange
                      }
                    />
                  </div>
                  <div>
                    <div className="mb-3 block">
                      <Label htmlFor="jumlah" value="Jumlah ikan" />
                    </div>
                    <TextInput
                      id="jumlah"
                      defaultValue={isUpdating ? dataToUpdate.jumlah : null}
                      placeholder="Masukkan jumlah ikan"
                      type="number"
                      name="jumlah"
                      onChange={
                        isUpdating
                          ? (e) => setJumlahIkan(e.target.value)
                          : formik.handleChange
                      }
                    />
                  </div>
                  <div>
                    <div>
                      <Label
                        htmlFor="file-upload-helper-text"
                        value="Upload file"
                        className="mb-3 block"
                      />
                    </div>
                    <FileInput
                      id="file-upload-helper-text"
                      helperText="JPEG, JPG or PNG."
                      name="image"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>

                  <div className="w-full flex gap-2">
                    {isLoading ? (
                      <Button
                        className="bg-[#0D81D5] rounded-xl"
                        disabled
                        type="submit"
                      >
                        Uploading...
                      </Button>
                    ) : (
                      <Button className="bg-[#0D81D5] rounded-xl" type="submit">
                        {isUpdating ? "Update" : "Upload"}
                      </Button>
                    )}
                    {isLoading ? (
                      <Button
                        className={
                          isUpdating
                            ? "bg-red-500 rounded-xl"
                            : "bg-red-500 rounded-xl hidden"
                        }
                        onClick={() => {
                          handleDelete(idToUpdate);
                        }}
                        disabled
                      >
                        Hapus
                      </Button>
                    ) : (
                      <Button
                        className={
                          isUpdating
                            ? "bg-red-500 rounded-xl"
                            : "bg-red-500 rounded-xl hidden"
                        }
                        onClick={() => {
                          handleDelete(idToUpdate);
                        }}
                      >
                        Hapus
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </>
      ) : null}

      <div className="container mx-auto">
        <div className="w-[1240px] mx-auto sm:flex hidden justify-end"></div>
        <div className="h-[539px] mx-auto bg-[#0D81D5] sm:w-[1240px] sm:h-[431px] sm:mt-3 sm:rounded-[22px]">
          <Navbar></Navbar>
          <div className="w-[304px] sm:mt-1 flex mx-auto flex-col items-center sm:flex-row sm:w-full sm:px-[74px] sm:justify-between">
            <img src="/src/assets/fish-bowl-3.png" className="sm:order-1" />
            <div className="text-center sm:text-start text-white">
              <img
                src="/src/assets/AquaKeeper.png"
                className="hidden sm:block"
              />
              <div className="pt-4 pb-3 sm:pt-0 sm:pb-0 sm:mb-[26px] sm:mt-1">
                <h1 className="font-bold text-[32px] sm:text-[64px]">
                  Jaga Stok Ikanmu
                </h1>
              </div>
              <div className="sm:w-[700px]">
                <p className="font-medium text-[16px]">
                  Website ini bertujuan membantu para pengusaha ikan hias dalam
                  mencatat jumlah stok ikan hias dan riwayat penjualannya.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[360px] sm:w-[1240px] mx-auto">
          <div className="w-full flex flex-col items-center gap-[15px] my-[15px] sm:gap-[25px] sm:my-[25px]">
            <div className="w-full sm:hidden">
              <h1 className="text-[20px] font-medium ms-[25px]">Menu</h1>
            </div>
            <div className="flex flex-row gap-[7px] w-full justify-center sm:justify-between">
              <Link to={"/home"}>
                <button className="w-[99px] h-[30px] bg-[#0D81D5] text-white text-[9px] font-medium rounded-[30px] flex items-center shadow-md sm:w-[385px] sm:h-[75px] sm:text-[24px] sm:flex sm:items-center">
                  <img
                    src="/src/assets/ikan-badut.svg"
                    className="w-[18px] ms-3 bg-cover sm:w-[47px] sm:ms-12 sm:me-3"
                  />
                  <div className="mt-1 ms-2">
                    <div className="relative sm:static">
                      Ikan di
                      <span className="hidden sm:inline-block">Aquarium</span>
                    </div>
                    <div className="relative -top-1 sm:hidden">Aquarium</div>
                  </div>
                </button>
              </Link>
              <Link to={"/ikan-terjual"}>
                <button className="w-[99px] h-[30px] bg-[#0D81D5] text-white text-[9px] font-medium rounded-[30px] flex items-center shadow-md sm:w-[385px] sm:h-[75px] sm:text-[24px] sm:flex sm:items-center">
                  <img
                    src="/src/assets/dollar.svg"
                    className="w-[18px] ms-3 bg-cover sm:w-[47px] sm:ms-20 sm:me-3"
                  />
                  <div className=" ms-1">
                    <div>Ikan Terjual</div>
                  </div>
                </button>
              </Link>
              <Link to={"/analisis-penjualan"}>
                <button className="w-[99px] h-[30px] bg-[#0D81D5] text-white text-[9px] font-medium rounded-[30px] flex items-center shadow-md sm:w-[385px] sm:h-[75px] sm:text-[24px] sm:flex sm:items-center">
                  <img
                    src="/src/assets/growth.svg"
                    className="w-[18px] ms-3 bg-cover sm:w-[47px] sm:ms-12 sm:me-3"
                  />
                  <div className="ms-0">
                    <div>Analisis Penjualan</div>
                  </div>
                </button>
              </Link>
            </div>
            <div className="flex flex-row gap-[7px] w-full justify-between px-[25px] sm:px-0">
              <button
                className="w-[99px] h-[30px] bg-[#0D81D5] text-white text-[9px] font-medium rounded-[30px] flex items-center shadow-md sm:w-[385px] sm:h-[75px] sm:text-[24px]"
                onClick={() => setOpenModal(true)}
              >
                <img
                  src="/src/assets/plus.svg"
                  className="w-[11px] ms-3 bg-cover me-1 sm:w-[24px] sm:ms-14 sm:me-7"
                />
                <span>
                  Tambah <span className="sm:hidden">Ikan</span>
                  <span className="hidden sm:inline-block">Data Ikan</span>
                </span>
              </button>
              <div className="flex items-center relative">
                <input
                  type="text"
                  className="w-[118px] h-[28px] rounded-[30px] border-[#0D81D5] sm:w-[327px] sm:h-[75px] text-[10px] sm:text-[24px] sm:px-4 px-1"
                  placeholder="Cari nama ikan"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* ini search */}
                <button
                  className="absolute right-0 bg-[#0D81D5] h-[28px] rounded-[30px] w-8 text-white sm:h-[75px] sm:w-20"
                  onClick={trySearch}
                >
                  <IoSearchOutline className="ms-2 sm:text-4xl sm:ms-6"></IoSearchOutline>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[360px] mx-auto flex gap-[8px] justify-start flex-wrap ps-[25px] sm:w-[1240px] sm:ps-[15px] sm:gap-[30px] pb-3">
          {searching
            ? searchedFished.map((fish) => (
                <FishCard
                  key={fish.id}
                  fish={fish}
                  handleUpdate={handleUpdate}
                />
              ))
            : fishes.map((fish) => (
                <FishCard
                  key={fish.id}
                  fish={fish}
                  handleUpdate={handleUpdate}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default privateRoute(StokIkanKu);
