

const Header = () => {
  return (
    <>

<div className="bg-header p-2 md:p-8 lg:p-16 xl:p-16 flex flex-col md:flex-row justify-center md:justify-between items-center md:ml-4 md:mr-4 xl:ml-24 xl:mr-24 rounded-3xl">
  <div className="md:mt-12 md:pl-4 md:mb-5">
    <img src="/src/assets/AquaKeeper.png" alt="AquaKeeper" className="w-52 md:w-auto" />
    <h1 className="font-bold xl:text-5xl md:text-3xl text-white mt-5 text-center md:text-left">Jaga Stok Ikanmu</h1>
    <p className="text-white text-base mt-6 text-center md:text-left">Website ini bertujuan membantu para pengusaha ikan hias dalam mencatat jumlah stok ikan hias dan riwayat penjualannya.</p>
  </div>
  <div className="mt-6 md:mt-0">
    <img src="/src/assets/fish-bowl.png" alt="Ikan Hias" className=" " />
  </div>
</div>

      {/* <div className="bg-header p-8 md:p-16 lg:p-24 xl:p-32 flex flex-col md:flex-row justify-evenly items-center md:ml-24 md:mr-24 rounded-3xl">
        <div className="mt-24 pl-10 mb-8">
            <img src="/src/assets/AquaKeeper.png" alt="AquaKeeper"  />
            <h1 className="font-bold text-6xl text-white mt-5">Jaga Stok Ikanmu</h1>
            <p className="text-white text-base mt-6">Website ini bertujuan membantu para pengusaha ikan hias dalam mencatat<br />  jumlah stok ikan hias dan riwayat penjualannya. </p>
        </div>
        <div>
            <img src="/src/assets/fish-bowl.png" alt="Ikan Hias" className="  mt-6"  />
        </div>

    </div> */}
    </>
  )
}

export default Header