function bankaCalistir(){
    let inputs = ["Hoşgeldiniz! Ne Yapmak İstersiniz","1-Bakiye Sorgulama","2-Para Çekme","3 - Para Yatırma","4-Çıkış"]
    let bakiye = 1000
    let para = bakiye
    let onay = confirm("Hoşgeldiniz Devam Etmek İçin Tamam`a Basın")



    while(onay == true){
        let soru = Number(prompt(inputs[0] + "\n" + inputs[1] + "\n" + inputs[2] + "\n" + inputs[3] + "\n" + inputs[4]))

        if(soru == 1){
            alert(`Bakiyeniz : ${para}₺`)
        }else if(soru == 2){
            let paraCekme = Number(prompt("Ne Kadar Çekmek İstersiniz?"))
            if(paraCekme <= para){
                alert(`${paraCekme}₺ Para Çektiniz. Güncel Bakiyeniz ${para - paraCekme}₺`)
            }else{
                alert("Yetersiz Bakiye")
            }
        }else if(soru == 3){
            let paraYatirma = Number(prompt("Kaç Para Yatırmak İstiyorsunuz?"))
            alert(`${paraYatirma}₺ Para Yatırdınız. Güncel Bakineyiz : ${para + paraYatirma}₺`)
        }else if(soru == 4){
            alert("Başarıyla Çıkış Yaptınız")
            break
        }
    }
}

bankaCalistir()

----------------------------------------------------------------------------------------------

// function hexCode(){
//     let karakterler = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//     let hexCodeArr = []

//     for(let i = 0; i < 6 ; i++){
//         let random = Math.floor(Math.random() * karakterler.length)
//         hexCodeArr.push(karakterler[random])
//     }return `#${hexCodeArr.join("")}`
// }
// console.log(hexCode())
