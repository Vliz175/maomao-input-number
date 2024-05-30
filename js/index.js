// const form1 = document.getElementById("form1");
// const form2 = document.getElementById("form2");
// const submit = document.getElementById("submit");
// const akhirnya = document.getElementById("akhirnya");
// const benar = document.getElementById("benar");
// const salah = document.getElementById("salah");
// let pointAkhirnya;
// let pointBenar;
// let pointSalah;
// let mistake;

// //* Menambahkan class hide
// if (pointAkhirnya == 1) {
//   akhirnya.classList.add("hide");
// } else if (pointBenar == 1) {
//   benar.classList.add("hide");
// } else if (pointSalah == 1) {
//   salah.classList.add("hide");
// }

// submit.addEventListener("click", function () {
//   const data1 = form1.value;
//   const data2 = form2.value;

//   //* Penghapusan class hide
//   if (data1 == 1 && data2 == 2) {
//     if (mistake == 1) {
//       benar.classList.remove("hide");
//       location.href = "#akhirnya";
//       pointAkhirnya += 1;
//     } else {
//       benar.classList.remove("hide");
//       location.href = "#benar";
//       pointBenar += 1;
//     }
//   } else {
//     salah.classList.remove("hide");
//     location.href = "#salah";
//     mistake += 1;
//     pointSalah += 1;
//     return mistake;
//   }
// });
// console.log(mistake);

//* percobaan ke-2
const submit = document.getElementById("submit");
let mistake = 0;

submit.addEventListener("click", function () {
  const elements = [
    document.getElementById("benar"),
    document.getElementById("akhirnya"),
    document.getElementById("salah"),
  ];

  for (let i = 0; i < elements.length; i++) {
    if (!elements[i].classList.contains("hide")) {
      elements[i].classList.add("hide");
    }
  }

  const form1 = document.getElementById("form1").value;
  const form2 = document.getElementById("form2").value;

  if (form1 == 1 && form2 == 2) {
    if (mistake > 0) {
      const akhirnya = document.getElementById("akhirnya");
      akhirnya.classList.remove("hide");
      akhirnya.scrollIntoView();
    } else {
      const benar = document.getElementById("benar");
      benar.classList.remove("hide");
      document.getElementById("benar").scrollIntoView();
    }
  } else {
    const salah = document.getElementById("salah");
    salah.classList.remove("hide");
    document.getElementById("salah").scrollIntoView();
    mistake = 1;

    console.log(mistake);
  }
});
