const express = require("express");
const app = express();

const appBrand = "Aplikasi Manajemen Kesehatan";
const basicCollection = {
  appBrand,
  appName: `${appBrand} - by Amen Togu [50423150]`,
  appDesc: `${appBrand} adalah sebuah NodeJS Web Application yang diperuntukkan untuk Project Informatika Kesehatan. Aplikasi ini berguna untuk membuat daftar antrian, pendaftaran, pembuatan resep obat, dan lainnya untuk fasilitas kesehatan seperti Puskesmas, Rumah Sakit, dan fasilitas kesehatan lainnya.`,
};

// Set View Engine
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { data: basicCollection });
});

// 404 Page if subdomain not found
app.use("", (req, res) => {
  res.sendStatus(404);
});
app.listen(5000, () => {
  console.log("Server UP!");
});
