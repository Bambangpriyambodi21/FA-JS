// const tautan = "https://reqres.in/api/users"
const tautan = "http://localhost:8082/pelanggan"

function tambahPelanggan(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
      

    fetch(tautan, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email_pelanggan: email,
            password_pelanggan: password,
            nama_pelanggan: nama,
            alamat_pelanggan: alamat
        })
    })
    .then((result) => result.json())
    .then((data) => console.log(data))
}
