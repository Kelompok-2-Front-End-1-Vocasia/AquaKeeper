import React from 'react';
import logoContainer from './ikan2.png'; 


const Dashboard = () => {
  return (
    <div className="main-container">
        <button className="logout-btn">Logout</button>
        <div className="dashboard-container">
        <div className="header">
          <div className="title-container">
            <div className="aquakeeper">Aqua<span className="keeper">Keeper</span></div>
            <div className="subtitle">Jaga Stok Ikanmu</div>
            <div className="description">
              Website ini bertujuan membantu para pengusaha ikan hias dalam mencatat jumlah stok ikan hias dan riwayat penjualannya.
            </div>
            <br />
            <button className="add-fish-btn">Tambah Ikan</button>
          </div>
          <div className="logo-container">
          <img src={logoContainer} alt="Logo" className="logo" />
          </div>
        </div>
      </div>

      <div className="menu-container">
        <div className="menu-text">Menu</div>
        <div className="menu-buttons-container">
          <button className="menu-btn aquarium-btn">Ikan di Aquarium</button>
          <button className="menu-btn sales-btn">Analisis Penjualan</button>
          <button className="menu-btn sold-btn">Ikan Terjual</button>
        </div>
      </div>

      <div className="table-container">
        {/* Tabel 1 */}
        <div className="fish-table">
          <img src="path/to/fish_image_1.jpg" alt="Fish 1" className="fish-image" />
          <div className="stock-info">
            <div>Total Stok: 600/1000</div>
            <div>Harga: 40rb</div>
          </div>
          <button className="add-stock-btn">Tambah Stok</button>
          <div className="detail-btn-container">
            <button className="detail-btn">Lihat Detail</button>
          </div>
        </div>

        {/* Tabel 2 */}
        <div className="fish-table">
          <img src="path/to/fish_image_2.jpg" alt="Fish 2" className="fish-image" />
          <div className="stock-info">
            <div>Total Stok: 800/1000</div>
            <div>Harga: 50rb</div>
          </div>
          <button className="add-stock-btn">Tambah Stok</button>
          <div className="detail-btn-container">
            <button className="detail-btn">Lihat Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
