import privateRoute from "../hoc/privateRoute";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Menu from "../components/menu";
import { useState, useEffect } from "react";
import axios from "axios";

const SalesRecord = () => {
  const [fishesSold, setFishesSold] = useState([]);
  const [date, setDate] = useState("");
  const [fishId, setFishId] = useState("");
  const [quantity, setQuantity] = useState("");

  // Fetch the fishes data to retrieve the fish object
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    fetchSalesRecord();
    fetchFishes();
  }, []);

  const fetchFishes = async () => {
    try {
      const response = await axios.get("http://localhost:3002/fishes");
      setFishes(response.data);
    } catch (error) {
      console.error("There was a problem fetching the fishes:", error);
    }
  };

  const fetchSalesRecord = async () => {
    try {
      const response = await axios.get("http://localhost:3003/sales");
      setFishesSold(response.data);
    } catch (error) {
      console.error("There was a problem fetching the sales record:", error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const newSale = {
        date,
        fishId,
        quantity: parseInt(quantity),
      };

      // Fetch the fish by ID to get the current quantity
      const fishResponse = await axios.get(
        `http://localhost:3002/fishes/${fishId}`
      );
      const selectedFish = fishResponse.data;

      // Find the selected fish object from the fetched fishes
      // const selectedFish = fishes.find((fish) => fish.id === fishId);

      if (selectedFish && selectedFish.jumlah !== undefined) {
        const updatedQuantity = selectedFish.jumlah - parseInt(quantity);
        // Update jumlah stok ikan using the selected fish object

        if (!isNaN(updatedQuantity)) {
          await axios.patch(`http://localhost:3002/fishes/${fishId}`, {
            jumlah: updatedQuantity,
          });

          await axios.post("http://localhost:3003/sales", newSale);

          setDate("");
          setFishId("");
          setQuantity("");
          fetchSalesRecord();

          // await axios.patch(`http://localhost:3002/fishes/${fishId}`, {
          //   jumlah: selectedFish.jumlah - parseInt(quantity),
          // });
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
       
      <form onSubmit={handleFormSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Fish ID:
          <input
            type="text"
            value={fishId}
            onChange={(e) => setFishId(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <h2>Sales Record List</h2>
      <ul>
        {fishesSold.map((sale) => (
          <li key={sale.id}>
            Date: {sale.date} - Fish ID: {sale.fishId} - Quantity:{" "}
            {sale.quantity}
          </li>
        ))}
      </ul>
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
