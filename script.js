

async function getResponse() {
    const response = await fetch('https://api.freeapi.app/api/v1/public/randomusers/user/random');
    const data = await response.json();
    // console.log(data);

    document.querySelector('.profile-card').innerHTML = `
        <img src=${data.data.picture.medium} style="border-radius:50%">
        <p>${data.data.name.title} ${data.data.name.first} ${data.data.name.last}</p>
        <span style="width:100%; display:flex; justify-content:space-evenly"><p><strong>DOB: </strong>${data.data.dob.date}</p> <p><strong>Age: </strong>${data.data.dob.age}</p></span>
        <p><strong>Gender: </strong>${data.data.gender}</p>
        <p><strong>Email: </strong>${data.data.email}</p>
        <p><strong>Phone: </strong>${data.data.phone}</p>
        <p><strong>Address: </strong>${data.data.location.street.number},${data.data.location.street.name},${data.data.location.city},${data.data.location.country}</p>
    `
}
