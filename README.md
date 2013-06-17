simple-rsa
==========

a simple rsa module,using for encode password.

Usage:
var RSATool=require('../lib/simple-rsa');
var encParam = {
    "e" : "10001",
    "n" : "856381005a1659cb02d13f3837ae6bb0fab86012effb3a41c8b84badce287759",
    "maxdigits" : "19",
    "text":"something"
};

RSATool.setMaxDigits(encParam.maxdigits*2);
var key=new RSATool.RSAKeyPair(encParam.e,"null",encParam.n);
return RSATool.encryptedString(key, encParam.text);

//setMaxDigits的值大于n的十六进制位数/2+3，maxdigits就再除以2，即maxdigits>(n.length/2+3)/2.
//RSAKeyPair的第二个参数是解密用的字符串，加密时随便写即可
