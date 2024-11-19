const express = require("express");
const app = express();

const appBrand = "Aplikasi Manajemen Kesehatan";
const basicCollection = {
  appBrand,
  appName: `${appBrand} - by Amen Togu [50423150]`,
  appDesc: `${appBrand} ini adalah sebuah NodeJS Web Application yang diperuntukkan untuk Project Informatika Kesehatan. Aplikasi ini berguna untuk membuat daftar antrian, pendaftaran, pembuatan resep obat, dan lainnya untuk fasilitas kesehatan seperti Puskesmas, Rumah Sakit, dan fasilitas kesehatan lainnya.`,
  faskesName: "RS Sentra Medika - Depok", // Contoh
};

// Set View Engine
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { data: basicCollection });
});

// 404 Page if subdomain not found
app.use("/", (req, res) => {
  // res.sendStatus(404);
  // res.render("404");
});

// app.listen(443, "172.16.5.79", () => {
//   console.log("Server UP!");
// });

app.listen(443, () => {
  console.log("Server UP!");
});
