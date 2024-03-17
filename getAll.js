// import axios from "axios";

// const req = new XMLHttpRequest();
// req.open("GET", "http://localhost:8082/pelanggan");
// req.send;
// req.onload = () => {
//     if(req.status === 200){
//         console.log(req.response);
//     }
// }

// async function main(){
//     const response = await axios({
//         method: 'GET',
//         URL: 'https://pokeapi.co/api/v2/pokemon/ditto'
//     });
// }

// main()

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(response => response.json())
// .then(data => console.log(data))

// async function getUser() {
//     try {
//       const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
// }

// const tautan = "https://pokeapi.co/api/v2/pokemon/"
const tautan = "http://localhost:8082/pelanggan"
const resultContainer = document.getElementById('result-container');

fetch(tautan)
.then((data) => data.json())
.then((result) => 
// console.log(result)

// resultContainer.innerHTML=JSON.stringify(result)

result.forEach((pelanggan) => {
    const row = resultContainer.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = pelanggan.id_pelanggan;
    cell3.innerHTML = pelanggan.nama_pelanggan;
    cell2.innerHTML = pelanggan.email_pelanggan;
  })
);
  