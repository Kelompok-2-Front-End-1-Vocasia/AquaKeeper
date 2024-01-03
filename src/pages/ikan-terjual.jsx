import privateRoute from "../hoc/privateRoute";
import Navbar from "../components/isabel/Navbar";
import Header from "../components/isabel/Header";
import Menu from "../components/isabel/Menu";
import { useState, useEffect } from "react";
import axios from "axios";

const SalesRecord = () => {
  const [fishesSold, setFishesSold] = useState([]);
  const [date, setDate] = useState("");
  const [fishId, setFishId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [fishes, setFishes] = useState([]); // State untuk menyimpan data ikan

  useEffect(() => {
    fetchSalesRecord();
    fetchFishes();
  }, []);

  const fetchFishes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/fishes");
      setFishes(response.data);
    } catch (error) {
      console.error("There was a problem fetching the fishes:", error);
    }
  };

  const fetchSalesRecord = async () => {
    try {
      const response = await axios.get("http://localhost:3001/sales");
      setFishesSold(response.data);
    } catch (error) {
      console.error("There was a problem fetching the sales record:", error);
    }
  };

  // Function untuk mendapatkan nama ikan berdasarkan ID
  const getFishNameById = (id) => {
    const selectedFish = fishes.find((fish) => fish.id === parseInt(id));
    return selectedFish ? selectedFish.nama : "N/A"; // Mengembalikan "N/A" jika ikan tidak ditemukan
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const newSale = {
        date,
        fishId,
        quantity: parseInt(quantity),
      };

      // Mengambil data ikan berdasarkan ID
      const fishResponse = await axios.get(
        `http://localhost:3000/fishes/${fishId}`
      );
      const selectedFish = fishResponse.data;

      if (selectedFish && selectedFish.jumlah !== undefined) {
        const updatedQuantity = selectedFish.jumlah - parseInt(quantity);

        if (!isNaN(updatedQuantity)) {
          await axios.patch(`http://localhost:3000/fishes/${fishId}`, {
            jumlah: updatedQuantity,
          });

          await axios.post("http://localhost:3001/sales", newSale);

          setDate("");
          setFishId("");
          setQuantity("");
          fetchSalesRecord();
        } else {
          console.error("Invalid quantity calculation");
        }
      } else {
        console.error("Selected fish not found or quantity not defined");
      }
    } catch (error) {
      console.error("There was a problem adding the sales record:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <Header />

      <Menu />

      <h1 className="mr-24 ml-24 mt-8 font-bold text-[36px] opacity-50">
        Penjualan Ikan
      </h1>

      <div className="bg-white mr-24 ml-24 rounded-xl p-4 mt-4">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-row justify-between"
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="date" className="font-bold mb-1">
              Date:
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="fishId" className="font-bold mb-1">
              Fish ID:
            </label>
            <input
              type="text"
              id="fishId"
              value={fishId}
              onChange={(e) => setFishId(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="quantity" className="font-bold mb-1">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded border border-gray-300"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl mt-6 p-4 mr-24 ml-24">
        <h2 className="mb-4 font-bold text-lg">Record Penjualan</h2>
        <table className="border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Fish ID</th>
              <th className="border border-gray-300 px-4 py-2">Nama Ikan</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {fishesSold.map((sale) => (
              <tr key={sale.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {sale.date}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {sale.fishId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {getFishNameById(sale.fishId)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {sale.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="bg-white rounded-xl mt-6 p-4 mr-24 ml-24">
        <h2 className="mb-4 font-bold text-lg">Record Penjualan</h2>
        <table className="border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Fish ID</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {fishesSold.map((sale) => (
              <tr key={sale.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {sale.date}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {sale.fishId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {sale.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {/* <h2>Sales Record List</h2>
      <ul>
        {fishesSold.map((sale) => (
          <li key={sale.id}>
            Date: {sale.date} - Fish ID: {sale.fishId} - Quantity:{" "}
            {sale.quantity}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default privateRoute(SalesRecord);

// import axios from 'axios';

// const SalesRecord = () => {
//   const [fishesSold, setFishesSold] = useState([]);
//   const [date, setDate] = useState('');
//   const [fishId, setFishId] = useState('');
//   const [quantity, setQuantity] = useState('');

//   useEffect(() => {
//     fetchSalesRecord();
//   }, []);

//   const fetchSalesRecord = async () => {
//     try {
//       const response = await axios.get('http://localhost:3003/sales');
//       setFishesSold(response.data);
//     } catch (error) {
//       console.error('There was a problem fetching the sales record:', error);
//     }
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post('http://localhost:3003/sales', {
//         date,
//         fishId,
//         quantity: parseInt(quantity),
//       });

//       // Kurangi jumlah ikan yang tersedia di endpoint /fishes berdasarkan quantity penjualan
//       await axios.patch(`http://localhost:3002/fishes/${fishId}`, {
//         jumlah: `-=${parseInt(quantity)}`,
//       });

//       setDate('');
//       setFishId('');
//       setQuantity('');
//       fetchSalesRecord();
//     } catch (error) {
//       console.error('There was a problem adding the sales record:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Sales Record</h1>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Date:
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//         </label>
//         <label>
//           Fish ID:
//           <input type="text" value={fishId} onChange={(e) => setFishId(e.target.value)} />
//         </label>
//         <label>
//           Quantity:
//           <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Sales Record List</h2>
//       <ul>
//         {fishesSold.map((sale) => (
//           <li key={sale.id}>
//             Date: {sale.date} - Fish ID: {sale.fishId} - Quantity: {sale.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SalesRecord;

// export default SalesRecord;

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const SalesRecord = () => {
//   const [fishesSold, setFishesSold] = useState([]);
//   const [date, setDate] = useState('');
//   const [fishId, setFishId] = useState('');
//   const [quantity, setQuantity] = useState('');

//   useEffect(() => {
//     // Lakukan pengambilan data ikan atau catatan penjualan sebelumnya saat komponen dimuat
//     fetchSalesRecord();
//   }, []);

//   const fetchSalesRecord = async () => {
//     try {
//       const response = await axios.get('http://localhost:3003/sales'); // Ganti URL dengan endpoint yang sesuai
//       setFishesSold(response.data);
//     } catch (error) {
//       console.error('There was a problem fetching the sales record:', error);
//     }
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post('http://localhost:3003/sales', {
//         date,
//         fishId,
//         quantity: parseInt(quantity), // Pastikan kuantitas yang dimasukkan berupa angka
//       });
//       setDate('');
//       setFishId('');
//       setQuantity('');
//       fetchSalesRecord(); // Ambil kembali data terbaru setelah menambahkan catatan baru
//     } catch (error) {
//       console.error('There was a problem adding the sales record:', error);
//     }
//   };

//   return (
//     <div>

//       <h1>Sales Record</h1>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Date:
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//         </label>
//         <label>
//           Fish ID:
//           <input type="text" value={fishId} onChange={(e) => setFishId(e.target.value)} />
//         </label>
//         <label>
//           Quantity:
//           <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Sales Record List</h2>
//       <ul>
//         {fishesSold.map((sale) => (
//           <li key={sale.id}>
//             Date: {sale.date} - Fish ID: {sale.fishId} - Quantity: {sale.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SalesRecord;
