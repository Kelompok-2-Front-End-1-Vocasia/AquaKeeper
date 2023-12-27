// import privateRoute from "../hoc/privateRoute";
// import Navbar from "../components/Navbar";
// import Header from "../components/Header";
// import Menu from "../components/menu";

// const analisisPenjualan = () => {
//   return (
//     <>
//     <div>
//     <Navbar />
//     <Header />

//     <Menu />
//     </div>
    
//     </>
//   )
// }

// export default privateRoute(analisisPenjualan);

// import  { useState, useEffect } from "react";
// import axios from "axios";

// const StockAndSales = () => {
//   const [totalStock, setTotalStock] = useState(0);
//   const [totalSold, setTotalSold] = useState(0);

//   useEffect(() => {
//     fetchTotalStock();
//     fetchTotalSold();
//   }, []);

//   const fetchTotalStock = async () => {
//     try {
//       const response = await axios.get("http://localhost:3002/fishes");

//       // Menghitung total stok ikan dari data yang diterima
//       const stock = response.data.reduce((acc, fish) => acc + parseInt(fish.jumlah), 0);
//       setTotalStock(stock);
//     } catch (error) {
//       console.error("There was a problem fetching the total stock:", error);
//     }
//   };

//   const fetchTotalSold = async () => {
//     try {
//       const response = await axios.get("http://localhost:3003/sales");

//       // Menghitung total ikan yang terjual dari data yang diterima
//       const sold = response.data.reduce((acc, sale) => acc + parseInt(sale.quantity), 0);
//       setTotalSold(sold);
//     } catch (error) {
//       console.error("There was a problem fetching the total sold:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Total Stok Ikan: {totalStock}</h2>
//       <h2>Total Ikan Terjual: {totalSold}</h2>
//     </div>
//   );
// };

// export default StockAndSales;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';

const StockAndSales = () => {
  const [totalStock, setTotalStock] = useState(0);
  const [totalSold, setTotalSold] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responseFishes = await axios.get('http://localhost:3002/fishes');
      const responseSales = await axios.get('http://localhost:3003/sales');

      const stock = responseFishes.data.reduce((acc, fish) => acc + parseInt(fish.jumlah), 0);
      setTotalStock(stock);

      const sold = responseSales.data.reduce((acc, sale) => acc + parseInt(sale.quantity), 0);
      setTotalSold(sold);
    } catch (error) {
      console.error('There was a problem fetching data:', error);
    }
  };

  // Data untuk Pie Chart
  const pieChartData = [
    { title: 'Total Stock', value: totalStock, color: 'blue' },
    { title: 'Total Sold', value: totalSold, color: 'red' },
  ];

  return (
    <div>
      <h2>Total Stok Ikan: {totalStock}</h2>
      <h2>Total Ikan Terjual: {totalSold}</h2>
      <div style={{ width: '300px', height: '300px' }}>
        <PieChart
          data={pieChartData}
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
        />
      </div>
    </div>
  );
};

export default StockAndSales;


