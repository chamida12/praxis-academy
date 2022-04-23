	1. CLASS

Class adalah template untuk membuat objek. Class dapat dipanggil apabila sudah dideklarasikan terlebih dahulu.
 
 	A.CLASS EXSPRESSION
 	
	 	let persegiPanjang = class {
	   	 constructor(tinggi,lebar){
		this.tinggi = tinggi;
		this.lebar = lebar;
	   	 }
		}
		console.log(persegiPanjang.name);
		
Ini adalah contoh class expresssion yang saya  tidak beri nama. yang mana dapat dipanggil dengan properti name. output yang akan keluar apabila class ecpression tidak diberi nama adalah //persegiPanjang


		let persegiPanjang = class luasPersegi2 {
		    constructor(tinggi, lebar) {
			this.tinggi = tinggi;
			this.lebar = lebar;
		    }
		}

		console.log(persegiPanjang.name) 
		
Ini adalah contoh class expression yang diberi nama berupa persegipanjang2.Maka yang keluar adalah nama dari class expression tersebut.
