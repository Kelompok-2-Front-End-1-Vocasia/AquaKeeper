const Header = () => {
  return (
    <>
      <div className="bg-header p-8 md:p-16 lg:p-24 xl:p-32 flex flex-col md:flex-row justify-evenly items-center md:ml-24 md:mr-24 rounded-3xl">
        <div className="mt-24 pl-10 mb-8">
          <img src="/src/assets/AquaKeeper.png" alt="AquaKeeper" />
          <h1 className="font-bold text-6xl text-white mt-5">
            Jaga Stok Ikanmu
          </h1>
          <p className="text-white text-base mt-6">
            Website ini bertujuan membantu para pengusaha ikan hias dalam
            mencatat
            <br /> jumlah stok ikan hias dan riwayat penjualannya.{" "}
          </p>
        </div>
        <div>
          <img
            src="/src/assets/fish-bowl.png"
            alt="Ikan Hias"
            className="  mt-6"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
