import privateRoute from "../hoc/privateRoute";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Menu from "../components/isabel/Menu";
import { useState, useEffect } from "react";
import axios from "axios";
import { PieChart } from "react-minimal-pie-chart";

const AnalisisPenjualan = () => {
  const [totalStock, setTotalStock] = useState(0);
  const [totalSold, setTotalSold] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responseFishes = await axios.get("http://localhost:3000/fishes");
      const responseSales = await axios.get("http://localhost:3001/sales");

      const stock = responseFishes.data.reduce(
        (acc, fish) => acc + parseInt(fish.jumlah),
        0
      );
      setTotalStock(stock);

      const sold = responseSales.data.reduce(
        (acc, sale) => acc + parseInt(sale.quantity),
        0
      );
      setTotalSold(sold);
    } catch (error) {
      console.error("There was a problem fetching data:", error);
    }
  };

  // Data untuk Pie Chart
  const pieChartData = [
    { title: "Total Stock", value: totalStock, color: "#81FF1E" },
    { title: "Total Sold", value: totalSold, color: "#4318FF" },
  ];

  return (
    <div>
      <Navbar />
      <Header />

      <Menu />

      <h1 className="mr-24 ml-24 mt-8 font-bold text-[36px] opacity-50">
        Rekap Data
      </h1>

      <div className="flex flex-row justify-between gap-2 mt-4 mr-24 ml-24 pb-12">
        <div className="bg-white w-[300px] rounded-xl text-left">
          <h2 className="mt-3 px-5">
            Total Ikan Terjual <br />
            <span className="total-sold">{totalSold}</span> ikan
          </h2>
          <img
            src="/src/assets/saving.svg"
            alt=""
            className="w-[200px] mt-12 mx-auto"
            style={{ display: "block" }}
          />
        </div>

        <div className="bg-white w-[300px] rounded-xl text-left">
          <h2 className="mt-3 px-5">
            Total Stok Ikan <br />
            <span className="total-sold">{totalStock}</span> ikan
          </h2>
          <img
            src="/src/assets/boxes.svg"
            alt=""
            className="w-[200px] mt-12 mx-auto"
            style={{ display: "block" }}
          />
        </div>

        <div className="bg-white w-[300px] rounded-xl text-left ">
          <div className="mt-3 px-5">
            <h1>Persentase </h1>
            <div className="flex gap-3 mt-3">
              <img src="/src/assets/ikan-terjual.svg" alt="" />
              <p>Ikan Terjual</p>
            </div>
            <div className="flex gap-3 mt-3">
              <img src="/src/assets/stok-ikan.svg" alt="" />
              <p>Stok Ikan</p>
            </div>
          </div>
          <div style={{ width: "200px", height: "200px", margin: "40px auto" }}>
            <PieChart
              data={pieChartData}
              label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default privateRoute(AnalisisPenjualan);
