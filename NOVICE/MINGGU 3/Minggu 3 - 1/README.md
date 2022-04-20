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
			

