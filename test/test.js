var RSATool=require('../lib/simple-rsa');

function encry(encParam){
    return RSATool.Encryptor(encParam.e,encParam.n)(encParam.text);
}

var param = {
    "e" : "10001",
    "n" : "856381005a1659cb02d13f3837ae6bb0fab86012effb3a41c8b84badce287759",
    "text":"something"
}


param.text="12345678";
console.log("81b792412e3f0751d5e756ad5313d7680aa9057f4de2211528adb8abaa88e05c"===encry(param));

param.text="usb";
console.log("0a218c68d84f9d578ce182f20a513ed07c18334f1517b2491a3556a28e587fc2"===encry(param));