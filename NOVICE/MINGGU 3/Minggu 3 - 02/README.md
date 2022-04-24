	1. CLASS

Class adalah template untuk membuat objek. Class dapat dipanggil apabila sudah dideklarasikan terlebih dahulu.
 	A.CARA MEMBUAT CLASS 
 	
 	
Membuat class sama halnya dengan cara membuat objek. Gunakan kata kunci classuntuk membuat kelas.

Selalu tambahkan metode bernama constructor():

			class anak {
			  constructor(nama, tahunLahir) {
			    this.nama = nama;
			    this.tahunLahir = tahunLahir;
			  }
			}
			
Disini saya membuat class yang bernama anak dan constructor yang memiliki parameter nama dan tahun lahir. 
Jika ingin memanggilnya maka harus membuat objek terlebih dahulu seperti ini :


			let Anak1 = new anak ("chami",1999);
			let Anak2 = new anak ( "Ummu", 2003);
			
Disini saya membuat dua objek yaitu anak1 dan 2. Yang memiliki argumen demikian untuk memanggil parameter dalam constructor.

	B. CLASS METHOD 
Cara membuat metode class. Disini saya akan membuat method class bernama "chek" yang fungsinya untuk mengetahui berapa tahun seorang santri itu mondok.

			class santri {
			  constructor(nama,tahunMasuk){
			    this.nama = nama;
			    this.tahunMasuk = tahunMasuk;
			  }
			  chek(x) {
			    return x - this.tahunMasuk;
			  }
			}

			let date = new Date();// date bagian ini adalah properti yang tidak boleh diubah
			let tahunMasuk = date.getFullYear();

			let Santri1 = new santri("Anis", 2012);
			

Untuk menampilkannya di html kita mempunyai 2 cara. Cara yang saya gunakan adalah demikian :

			<!DOCTYPE html>
			<html>
			<body>

			  <p id="demo"></p>


			<script>
			class santri {
			  constructor(nama,tahunMasuk){
			    this.nama = nama;
			    this.tahunMasuk = tahunMasuk;
			  }
			  chek(x) {
			    return x - this.tahunMasuk;
			  }
			}

			let date = new Date();
			let tahunMasuk = date.getFullYear();

			let Santri1 = new santri("Anis", 2012);

			document.getElementById("demo").innerHTML=
			"Saya sudah Mondok selama " + Santri1.chek(tahunMasuk) + " tahun.";
			</script>

			</body>
			</html>
			
			
			
Dan jika ingin memanggilnya di terminal bisa menggunakan console.log :

			console.log("Saya sudah Mondok selama " + Santri1.chek(tahunMasuk) + " tahun.");

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


2. Prototype methods
		
		class rectangle {
		    constructor(tinggi, lebar){
			this.tinggi = tinggi;
			this.lebar = lebar;
		    
		}
		get kalkulasi(){
		    return this.kalkulasiluas();
		}

		 kalkulasiluas(){
		    return this.panjang * this.tinggi;
		}
		 }

		const nilai = new rectangle(10, 10);
		console.log(nilai.kalkulasi);







		

