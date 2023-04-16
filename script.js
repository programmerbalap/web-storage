const tampilDataBaru = document.getElementById('databaru');
const tampilDataLama = document.getElementById('datalama');

const getData = () => {
    const namaDepan = document.getElementById('namaDepan').value;
    const namaBelakang = document.getElementById('namaBelakang').value;
    const gender = document.getElementById('gender').value;
    const alamat = document.getElementById('alamat').value;
    if (namaDepan == "" || namaBelakang == "" || gender == "" || alamat == "") {
        return false;
    }
    return {
        namaDepan,
        namaBelakang,
        gender,
        alamat
    };
}

let data = [];
const pushData = (item) => {
    data.push(item);
    localStorage.setItem('data', JSON.stringify(data));

}

function deleteData() {
    data.splice(0, data.length);
    localStorage.setItem('data', JSON.stringify(data));
}


function tampilkanData() {
    const result = document.getElementById('result');
    result.innerHTML = ""
    const getData = JSON.parse(localStorage.getItem('data'));
    getData.forEach((dta, index) => {
        const ul = document.createElement('ul');
        ul.innerHTML = `
        <li>Nama Lengkap :  ${dta.namaDepan} ${dta.namaBelakang}</li>
        <li>Jenis Kelamin : ${dta.gender}</li>
        <li>Alamat : ${dta.alamat}</li>
        `;
        result.appendChild(ul);
    })
}

let dataSession = [];
const pushDataSession = (item) => {
    dataSession.push(item);
    sessionStorage.setItem('data', JSON.stringify(dataSession));
}

function deleteDataSession() {
    dataSession.splice(0, dataSession.length);
    sessionStorage.setItem('data', JSON.stringify(dataSession));
}

function tampilkanDataSession() {
    const result = document.getElementById('result');
    result.innerHTML = ""
    const getDataSession = JSON.parse(sessionStorage.getItem('data'));
    console.log(getDataSession)
    getDataSession.forEach((dta, index) => {
        const ul = document.createElement('ul');
        ul.innerHTML = `
        <li>Nama Lengkap :  ${dta.namaDepan} ${dta.namaBelakang}</li>
        <li>Jenis Kelamin : ${dta.gender}</li>
        <li>Alamat : ${dta.alamat}</li>
        `;
        result.appendChild(ul);
    })
}

let dataCookie = [];
const pushDataCookie = (item) => {
    dataCookie.push(item);
    browser.cookies.set(JSON.stringify(dataCookie));
}

function deleteDataCookie() {
    dataCookie.splice(0, dataCookie.length);
    browser.cookies.set('data', JSON.stringify(dataCookie));
}

function tampilkanDataCookie() {
    const result = document.getElementById('result');
    result.innerHTML = ""
    const getDataCookie = JSON.parse(browser.cookies.get('data'));
    console.log(getDataCookie)
    getDataCookie.forEach((dta, index) => {
        const ul = document.createElement('ul');
        ul.innerHTML = `
        <li>Nama Lengkap :  ${dta.namaDepan} ${dta.namaBelakang}</li>
        <li>Jenis Kelamin : ${dta.gender}</li>
        <li>Alamat : ${dta.alamat}</li>
        `;
        result.appendChild(ul);
    })
}

tampilDataBaru.addEventListener('click', function () {
    const penyimpanan = document.getElementById('penyimpanan').value;
    if (penyimpanan == "local") {
        deleteData();
        if (getData()) {
            pushData(getData());
            tampilkanData()
        } else {
            const result = document.getElementById('result');
            result.innerHTML = ""
        }
    } else if (penyimpanan == "cookie") {
        const result = document.getElementById('result');
        result.innerHTML = ""
        console.log("cookie")

        // Assalamualaikum kak bagian ini saya sengaja di comman kak karena tidak dapat mengeset cookie kak

        // deleteDataCookie();
        // if (getData()) {
        //     pushDataCookie(getData());
        //     // tampilkanDataCookie()
        // } else {
        //     const result = document.getElementById('result');
        //     result.innerHTML = ""
        // }
    } else {
        deleteDataSession();
        if (getData()) {
            pushDataSession(getData());
            tampilkanDataSession()
        } else {
            const result = document.getElementById('result');
            result.innerHTML = ""
        }
    }
});

tampilDataLama.addEventListener('click', function () {
    const penyimpanan = document.getElementById('penyimpanan').value;
    if (penyimpanan == "local") {
        if (getData()) {
            pushData(getData());
            tampilkanData()
        }
    } else if (penyimpanan == "cookie") {
        const result = document.getElementById('result');
        result.innerHTML = ""
        console.log('cookie')
        // if (getData()) {
        //     pushDataCookie(getData());
        //     tampilkanDataCookie()
        // }
    } else {
        if (getData()) {
            pushDataSession(getData());
            tampilkanDataSession()
        }
    }
});