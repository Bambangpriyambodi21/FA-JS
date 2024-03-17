

function deletePelanggan(){
    const id = document.getElementById('id').value;

    const tautan1 = "http://localhost:8082/pelanggan/"+id;

    fetch(tautan1, {
        method: "DELETE",
        headers: {
            "Content-Type": "text/plain"
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
}