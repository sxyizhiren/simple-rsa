simple-rsa
==========

a simple rsa module,using for encode password.

Usage:
var RSATool=require('../lib/simple-rsa');
var encParam = {
    "e" : "10001",
    "n" : "856381005a1659cb02d13f3837ae6bb0fab86012effb3a41c8b84badce287759",
    "maxdigits" : 38,
    "text":"something"
};

RSATool.setMaxDigits(encParam.maxdigits);
var key=new RSATool.RSAKeyPair(encParam.e,"null",encParam.n);
return RSATool.encryptedString(key, encParam.text);

////////////////////////
setMaxDigits(d);

函数的参数d跟n的位数有关。关系是

d=n的十六进制位数/2+3

比如n是十六进制16位（对应二进制125~128位），d就设成19。


RSAKeyPair的第二个参数和解密有关，加密时随便写即可