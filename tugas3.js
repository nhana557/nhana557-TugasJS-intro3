const channelTv = (saluran) =>{
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      const listChannel = ['Antv', 'Gtv', 'TransTv', 'Sctv', 'Trans7'];
      let nomorSaluran = listChannel.filter((item, i) =>{
        return i == saluran - 1;
      }).toString()
      if(nomorSaluran){
        resolve(nomorSaluran)
      }else{
        reject(new Error('saluran tidak tersedia'))
      }
    }, 500)
  })
}
channelTv(3)
  .then(cek =>{
  console.log(cek)
})
  .catch(err =>{
    console.log(err.message)
})

// jadwal tanyangan 
const jadwalPenyiaran = (saluran) =>{
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
    const jadwal = [
            [
              "Gtv",
              "06.00WIB : SpongeBob SquarePants Movie",
              "08.00WIB : Zak Strom",
              "10.00WIB : Buletin iNews Siang (L)",
              "11.00WIB : SpongeBob SquarePants Movie",
            ],
            [
              "Sctv",
              "06.00WIB : Menembus Mata Batin The Series (MVO)",
              "07.00WIB : Jejak Kriminal",
              "08.00WIB : Sinema Horor Asia - Vengeance",
              "10.00WIB : Aku Titipkan Cinta",
              "11.00WIB : Rabbids Invasion",
            ]
  ]
  const search = jadwal.find((item, i) =>{
    return i == saluran;
  })
      if(search){
        resolve(jadwal[saluran].join("\n"));
      }else{
        reject("channel tidak di temukan");
      }
    }, 1000)
  })
}

jadwalPenyiaran(channel("Rcti"))
.then(value =>{
  console.log(value)
})
.catch(err =>{
  console.log(err)
})

function channel(channel){
  switch(channel){
    case "Gtv":
      channel = 0
      break;
    case "Sctv":
      channel = 1;
      break;
    default :
      channel = 2;
      break
  }
  return channel;
}