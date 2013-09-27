simple-rsa
==========

install:

npm install simple-rsa



a simple rsa module,using for encode password.

Usage:

var RSATool=require('../lib/simple-rsa');

var encParam = {

    "e" : "10001",
	
    "n" : "856381005a1659cb02d13f3837ae6bb0fab86012effb3a41c8b84badce287759",
	
};

var encryptor=RSATool.Encryptor(encParam.e,encParam.n);

var pass1=encryptor('12345');

var pass2=encryptor('this is a test!');


参考资料：

http://www.ohdave.com/rsa/
