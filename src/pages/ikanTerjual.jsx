// import  { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [fishes, setFishes] = useState([]);

//   // Fungsi untuk menambah data penjualan dan mengurangi stok ikan yang terjual
//   const addSale = async (fishId, quantity) => {
//     try {
//       const fishToUpdate = fishes.find((fish) => fish.id === fishId);
//       if (fishToUpdate) {
//         const updatedFish = { ...fishToUpdate, stock: fishToUpdate.stock - quantity };
//         await axios.put(`http://localhost:3002/fishes/${fishId}`, updatedFish);
//         // Lakukan juga HTTP request untuk menyimpan data penjualan ke endpoint sales
//       }
//     } catch (error) {
//       console.error('There was a problem adding sale:', error);
//     }
//   };

//   // Contoh penggunaan: Menambah penjualan baru
//   const handleAddSale = () => {
//     addSale(1, 5); // Menambah penjualan ikan Nemo sebanyak 5
//   };

//   return (
//     <div className="App">
//       <button onClick={handleAddSale}>Tambah Penjualan</button>
//       {/* Komponen atau tampilan lainnya */}
//       <SalesRecord />
//     </div>
//   );
// }

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

// export default App;




import { useState, useEffect } from 'react';
import axios from 'axios';

const SalesRecord = () => {
  const [fishesSold, setFishesSold] = useState([]);
  const [date, setDate] = useState('');
  const [fishId, setFishId] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    // Lakukan pengambilan data ikan atau catatan penjualan sebelumnya saat komponen dimuat
    fetchSalesRecord();
  }, []);

  const fetchSalesRecord = async () => {
    try {
      const response = await axios.get('http://localhost:3003/sales'); // Ganti URL dengan endpoint yang sesuai
      setFishesSold(response.data);
    } catch (error) {
      console.error('There was a problem fetching the sales record:', error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3003/sales', {
        date,
        fishId,
        quantity: parseInt(quantity), // Pastikan kuantitas yang dimasukkan berupa angka
      });
      setDate('');
      setFishId('');
      setQuantity('');
      fetchSalesRecord(); // Ambil kembali data terbaru setelah menambahkan catatan baru
    } catch (error) {
      console.error('There was a problem adding the sales record:', error);
    }
  };

  return (
    <div>
      <h1>Sales Record</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Fish ID:
          <input type="text" value={fishId} onChange={(e) => setFishId(e.target.value)} />
        </label>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <h2>Sales Record List</h2>
      <ul>
        {fishesSold.map((sale) => (
          <li key={sale.id}>
            Date: {sale.date} - Fish ID: {sale.fishId} - Quantity: {sale.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesRecord;
