const tautan = "http://localhost:8082/pelanggan"

function updatePelanggan(){
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
      

    fetch(tautan, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id_pelanggan: id,
            email_pelanggan: email,
            password_pelanggan: password,
            nama_pelanggan: nama,
            alamat_pelanggan: alamat
        })
    })
    .then((result) => result.json())
    .then((data) => console.log(data))
}