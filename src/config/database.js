// database.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import mysql2 from "mysql2";  // Mengimpor mysql2 menggunakan import

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  dialectModule: mysql2,  // Gunakan mysql2 yang sudah diimport
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Koneksi ke database berhasil.");
  } catch (error) {
    console.error("Tidak dapat terhubung ke database:", error);
  }
};

// Uji koneksi
testConnection();

export default sequelize;
