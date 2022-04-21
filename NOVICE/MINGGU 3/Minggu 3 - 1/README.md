1.OOP
Pemrograman berorientasi objek (Inggris: object-oriented programming disingkat OOP) merupakan paradigma pemrograman berdasarkan konsep "objek", yang dapat berisi data, dalam bentuk field atau dikenal juga sebagai atribut; serta kode, dalam bentuk fungsi/prosedur atau dikenal juga sebagai method.


2.  MENGGABUNGKAN 2 OBJECT 
-CONTOH MEMBUAT GAME NGAJI

//CARA MENGHUBUNGKAN DUA OBJECT FUNCTION DECLARATION & OBJECT LITERAL

			const methodSantri = {
			    makan: function (porsi){
				this.energingaji += porsi;
				console.log('Halo ${this.nama}, selamat makan!');
			    },
			    ngaji : function (jam) {
				this.energingaji -= jam;
				console.log('Halo ${this.nama}, Selamat bermain');
			    },
			    tidur : function(jam){
				this.energingaji += jam * 2;
				console.log('Halo ${this.nama}, selamat tidur!');
			    }
			   
			};
			//Di atas adalah contoh object Informasi
			//Dan di bawah adalah object fanction declaration 

			function santri (nama,energingaji){
			    let santri = {};
			    santri.nama = nama;
			    santri.energingaji = energingaji;
			    santri.makan = methodSantri.makan;
			    santri.ngaji = methodSantri.ngaji;
			    santri.tidur = methodSantri.tidur;
			    
			    return santri;
			}

			let chami = santri('chami', 20);
			let anis = santri('anis',30);



			// cara chek menggunakan console di chrome

			//ketik 
			chami 
			//maka akan muncul informasi chami. 
			Object { nama: "chami", energingaji: 20, makan: makan(porsi), ngaji: ngaji(jam), tidur: tidur(jam)
			 }
			//selanjutnya seperti di bawah ini :
			chami.ngaji(6) 
			//maksudnya adalah chami mengaji selama 6 jam.maka energi ngaji nya akan berkurang 
			Halo ${this.nama}, Selamat bermain latihan.js:10:17
			undefined
			//chek lagi
			chami
			//maka akan muncul energingaji yaitu 14 yangmana awalnya adalah 20
			Object { nama: "chami", energingaji: 14, makan: makan(porsi), ngaji: ngaji(jam), tidur: tidur(jam) }

			


3. MEMBUAT OBJECT.CREATE()	

   contoh :
   saya mengubah bagian ini soalnya sama dengan di atas.
			   // Menyambungkan dua object menggunakan object.create

			function santri (nama,energingaji){
			    let santri = Object.create(methodSantri);// perbedaan membuat object menggunakan {}; dan Object.create() jika 					menggunakan Object.create dapat menambahkan parameter di dalamnya 
			    santri.nama = nama;
			    santri.energingaji = energingaji;
			    
			    
			    return santri;
			}

			let chami = santri('chami', 20);
			let anis = santri('anis',30);

   
   

​hasil yang ditampilkanpun sama.
   
			   santri//chek
			function santri(nama, energingaji)

			chami.makan(8)//chek
			Halo ${this.nama}, selamat makan! latihan.js:4:17
			undefined
			chami//chek
			Object { nama: "chami", energingaji: 28 }

​

4. PROTOTYPE
Pemrograman berbasis prototipe adalah gaya pemrograman berorientasi objek di mana penggunaan kembali perilaku (dikenal sebagai pewarisan) dilakukan melalui proses penggunaan kembali objek yang ada yang berfungsi sebagai prototipe. Model ini juga dapat dikenal sebagai prototypal, prototype-oriented, classless, atau instance-based programming



//Menyambungkan contoh diatas yang mengelola 2 objek menjadi satu objek saja menggunakan protptype.


			function santri (nama,energi){
			  this.nama = nama;
			  this.energi = energi;
			}

			santri.prototype.makan = function(porsi){
			    this.energi += porsi;
			    return 'Halo ${this.nama, selamat makan!';
			}
			santri.prototype.ngaji = function(jam){
			    this.energi -= jam;
			    return 'Halo ${this.nama, semangat ngaji!';
			}
			santri.prototype.tidur = function(jam){
			    this.energi += jam;
			    return 'Halo ${this.nama, semoga mimpi indah!';
			}
			let chami = new santri ('chami',10);
		
//jika di chek maka akan muncul proto dalam keterangan object seperrti berikut :

			chami//chek
			Object { nama: "chami", energi: 10 }
			energi: 16
			nama: "chami"
			<prototype>: Object { makan: makan(porsi), ngaji: ngaji(jam), tidur: tidur(jam)
			, … } 

			chami.tidur(6)/chekk
			"Halo ${this.nama, semoga mimpi indah!"	
			


5.METODE OBJECT.ASSIGN()

object.assign () : menyalin semua properti dari satu atau lebih sumber objek ke target.

			const kamu = { a: 1, b: 2 };//object sumber untuk kamu(objek target)
			const aku = { c: 4, d: 5 };

			const retrunedBalik = Object.assign(kamu, aku);//obejct target dari objek sumber berupa (kamu,aku)

			console.log(kamu);
			// maka akan keluar Object { a: 1, b: 2, c: 4, d: 5 }

			console.log(retrunedBalik);
			// maka akan keluar Object { a: 1, b: 2, c: 4, d: 5 }
			

-Menggabungkan  Objek

			const bunga1 = {a : 1};
			const bunga2 = {b : 2};
			const bunga3 = {c : 3};


			const jumlah = Object.assign(bunga1,bunga2,bunga3);
			console.log (bunga1);//{ a: 1, b: 2, c: 3 } hasilnya akan otomatis sudah tersalin
			
			
-Menggabungakan objek dengan properti yang berbeda.

			//properti dibuat bebeda dalam o1,o2,o3.
			const o1 = { a: 1, b: 1, c: 1 };
			const o2 = { b: 2, c: 2 };
			const o3 = { c: 3 };

			const obj = Object.assign({}, o1, o2, o3);
			console.log(obj); // { a: 1, b: 2, c: 3 }
			
			
Disini properti yang di ambil sebagimana di atas.
	
6. FUNGSI KONSTRUKTOR (MEMBUAT OBJEK MENGGUNKAN FUNGSI)

sama seperti minggu ke-2 hari kelima tapi kali ini saya menggunakan const untuk membuat objek buka var.
				
				function Person(awal, akhir, umur,mata) {
				    this.awalNama = awal;
				    this.akhirNama = akhir;
				    this.umur = umur;
				    this.warnaMata = mata;
				  }

				  const Ibuku = new Person("susan", "Halimah", 40, "coklat");
				const Bapakku = new Person("Ahmad", "Sahal", 48, "hitam");
				
contoh lain ;

				function Hewan( nama ){
				    this.nama = nama;
				    this.getName = function(){
					return 'Hewan ini memiliki nama =>' + this.nama
				    }
				}
				var a = new Hewan('Monyet');
				console.log('a object ==>', a );
				console.log('a.getName() ==>', a.getName());
				console.log('a.constructor === Hewan', a.constructor === Hewan);
				



hasilnya adalah :

			// a object ==> Hewan { nama: 'Monyet', getName: [Function] }
			// a.getName() ==> Hewan ini memiliki nama =>Monyet
			// a.constructor === Hewan true
			
			
			
-Pewarisan yang dilakukan prototype

			cara membuat kalkulator umur :

			function Orang(Nama, job, tahunLahir){   
			    this.Nama= Nama;
			    this.job= job;
			    this.tahunLahir= tahunLahir;
			}
			Orang.prototype.kalkulatorUmur= function(){
			    console.log('Usia saat ini : '+(2022- this.tahunLahir));
			}
			// console.log(Orang.prototype);

			let Orang1 = new Orang('chami','Selebgram', 1999);
			// console.log(Orang1)
			let Orang2 = new Orang('Anis','Gamers', 1997);
			// console.log(Orang2)

			Orang1.kalkulatorUmur();
			Orang2.kalkulatorUmur();
			
			
Disini saya membuat objek 'Orang1' & 'Orang2' menggunakan fungsi konstruktor Orang. Ketika kita memanggil Orang1.kalkulatorUmur() maka pertama-tama yang akan di chek ada di objek1 atau tidak. jika ada maka prototipe berupa Orang.prototype.kalkulatorUmur akan mewarisakan properti yang dia punya sehingga dapat mengkalkulasi umur seseorang.


contoh lain memanggil menggunakan greeting:

			function Person(name) {
			    this.name = name;
			}
			Person.prototype.aku = function() {
			    return "Hi, I'm " + this.name + "!";
			}
			let p1 = new Person('chami');
			let greeting = p1.aku();
			console.log(greeting);



Contoh Lain :

			function Karyawan(namaDepan,namaBelakang)  
			{  
			  this.namaDepan = namaDepan;
			  this.namaBelakang = namaBelakang;
			}  
			  
			Karyawan.prototype.namaLengkap=function()  
			  {
			    return this.namaDepan+" "+this.namaBelakang; 
			  } 
			  
			var Karyawan1=new Karyawan("Syafak ","Udin");  
			var Kaeyawan2=new Karyawan("Nissa", "Anisa");  

			console.log(Karyawan1.namaLengkap());//cara memanggil 

