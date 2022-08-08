const cekHariKerja = (day) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
            let cek = dataDay.find((item) =>{
                return item == day ;
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 1000)
    })
}

cekHariKerja("Minggu")
// then disini berfungsi untuk menangkap ketika nilai  promise resolved
 .then(value =>{
    console.log(`${value} hari kerja`)
})
// catch berfungsi untuk menangkap ketika nilai promise rejected
 .catch(err =>{
    console.log(err.message)
})

async function getDay() {
    // try berfungsi untuk meriksa dan mengeksekusi code jika tidak error
    try{
        const hari = currentHari()
        const day = await cekHariKerja(hari)
        return day;
    }
    // ketika code di dalam blok try error akan di ambil dan dieksekusi di blok catch
    catch(error){
        return error.message
    }
}

getDay().then(value =>{
    console.log(`${value} hari kerja`)
});

function currentHari(){
    let cek = new Date().getDay()
    switch(cek) {
        case 1:
            cek ="Senin"
            break;
        case 2:
            cek = "Selasa"
            break;
        case 3:
            cek = "Rabu"
            break;
        case 4:
            cek = "Kamis";
            break;
        case 5:
            cek = "Jumat"
            break;
        case 6:
            cek = "Sabtu"
            break
        case 7:
            cek = "Minggu"
            break;
        default:
            cek =  "bukan hari"
            break
    }
    return cek
}
