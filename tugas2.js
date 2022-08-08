/* 
    Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map
*/

const getMonth = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let error = true;
            const month = ['January', "Febuary", "Maret", "April", "Mei", "Juni", "Agustus", "September", "Oktober", "November", "Desember"]
            if(!error){
                resolve(month)
            }else{
                reject(`Sorry Data Not Found`)
            }
        }, 1000)

    })
}

const showMonth = async () =>{
    try{
        const month = await getMonth()
        month.map(data => console.log(data))
    
    }catch(err){
        console.log(err)
    }
}
showMonth();