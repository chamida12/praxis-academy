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

 	C.CLASS EXSPRESSION
 	
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


2.Class Inheritance

Untuk membuat pewarisan kelas, gunakan extends kata kunci.

Kelas yang dibuat dengan pewarisan kelas mewarisi semua metode dari kelas lain:

		class santri {
		  constructor(nama){
		    this.nama = nama;
		  }
		  chek() {
		    return ' Nama saya' + this.nama;
		  }
		}

		class gender extends santri{ //extends untuk pewarisan
		  constructor(nama,jenis){
		    super(nama); //kita memanggil metode konstruktor induk dan mendapatkan akses ke properti dan metode induk.
		    this.gender = jenis;
		  }
		run (){
		  return this.chek() + ',saya adalah seorang' + this.gender;
		}
		}

		let santri1 = new gender(" ummu"," Perempuan");
		console.log (santri1.run());

		//output
		//Nama saya ummu, saya adalah seorang perempuan
		  

3. MENAMBAKAN GETTER DAN SETTER KEDALAM CLASS


		class Motor{
		  constructor(Merk) {
		    this.namaMotor = Merk;

		    
		  }
		  get nama(){
		    return this.namaMotor;
		  }
		  set nama(A){
		    this.namaMotor = A;

		  }
		}
		let motorku = new Motor ("Honda")

		console.log(motorku.nama);
		
		
Kita dapat menggunakan setter untuk mengganti namamerk tanpa menghapusnya dengan cara :

		motorku.nama = "Scoopy";
		
Dapat diletakkan dibawah let.

4. CLASS STATIS

		class Buah {
		  constructor(nama) {
		    this.nama = nama;
		  }
		  static hello(x) {
		    return "Ini " + x.nama;
		  }
		}

		let Buahku = new Buah("Melon");
		console.log(Buah.hello(Buahku)); //Ini Melon






5. Prototype methods
		
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



6. Menggunakan Object.setPrototypeOf(): 

		const Hewan = {
		  makan() {
		    console.log(`${this.name} memakan daging.`);
		  }
		};

		class Anjing {
		  constructor(name) {
		    this.name = name;
		  }
		}


		Object.setPrototypeOf(Anjing.prototype, Hewan);

		let d = new Anjing('Helly');
		d.makan(); //Helly memakan daging.




7. Class fields
“Class fields” adalah sebuah sintaks yang memungkinkan untuk menambahkan properti apa pun.


		class User {
		  name = "John";

		  sayHi() {
		    alert(`Hello, ${this.name}!`);
		  }
		}

		new User().sayHi(); 
		
Undang dengan cara sambungkan ke html.
