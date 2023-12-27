import { useState, useEffect } from "react";
import axios from "axios";
// import ImageUploadComponent from "../components/unggahFoto";

function FishComponent() {
  const [fishes, setFishes] = useState([]);
  const [newFish, setNewFish] = useState({ nama: "", harga: "", jumlah: "" });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3002/fishes");
      setFishes(response.data);
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFish({ ...newFish, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newFish.id) {
        await axios.put(`http://localhost:3002/fishes/${newFish.id}`, newFish);
      } else {
        await axios.post("http://localhost:3002/fishes", newFish);
      }
      setNewFish({ id: "", nama: "", harga: "", jumlah: "" });
      fetchData();
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
    setNewFish({
      id: fish.id,
      nama: fish.nama,
      harga: fish.harga,
      jumlah: fish.jumlah,
    });
  };

  return (
    <div>
      <h1>List of Fishes</h1>
      <ul>
        {fishes.map((fish) => (
          <li key={fish.id}>
            {fish.nama} - Harga: {fish.harga} - Jumlah: {fish.jumlah}
            <button onClick={() => handleEdit(fish)}>Edit</button>
            <button onClick={() => handleDelete(fish.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nama"
          value={newFish.nama}
          onChange={handleInputChange}
          placeholder="Nama"
        />
        <input
          type="number"
          name="harga"
          value={newFish.harga}
          onChange={handleInputChange}
          placeholder="Harga"
        />
        <input
          type="number"
          name="jumlah"
          value={newFish.jumlah}
          onChange={handleInputChange}
          placeholder="Jumlah"
        />
        <button type="submit">{newFish.id ? "Update" : "Add"} Fish</button>
      </form>

      
    </div>
  );
}

export default FishComponent;
