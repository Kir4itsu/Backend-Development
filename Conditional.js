let hour = 23;  // Jam 23 (11 malam)
let greeting = '';  // Pesan salam kosong

if (hour < 18) {
  greeting = "Hari Baik";  // Jika jam kurang dari 18, tampilkan "Hari Baik"
} else if (hour < 22) {
  greeting = "Hari Normal";  // Jika jam kurang dari 22 tapi lebih dari 18, tampilkan "Hari Normal"
} else {
  greeting = "Hari Buruk";  // Jika jam lebih dari 22, tampilkan "Hari Buruk"
}

console.log(greeting);  // Output: "Hari Buruk"
