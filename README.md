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

setMaxDigits(maxdigits);

函数的参数maxdigits跟n的位数有关。关系是

maxdigits=n的十六进制长度 + 3  

比如上面n的字符串长度是64，对应32字节的数值。maxdigits就是35，所以maxdigits必须大于35，可大不可小。

如果n是十六进制16位（对应长度32的字符串），maxdigits就设成19。可大不可小。


RSAKeyPair的第二个参数和解密有关，加密时随便写即可