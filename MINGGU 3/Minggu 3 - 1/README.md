1.OOP
Pemrograman berorientasi objek (Inggris: object-oriented programming disingkat OOP) merupakan paradigma pemrograman berdasarkan konsep "objek", yang dapat berisi data, dalam bentuk field atau dikenal juga sebagai atribut; serta kode, dalam bentuk fungsi/prosedur atau dikenal juga sebagai method.


2. PROTOTYPE
Pemrograman berbasis prototipe adalah gaya pemrograman berorientasi objek di mana penggunaan kembali perilaku (dikenal sebagai pewarisan) dilakukan melalui proses penggunaan kembali objek yang ada yang berfungsi sebagai prototipe. Model ini juga dapat dikenal sebagai prototypal, prototype-oriented, classless, atau instance-based programming

3. MENGGABUNGKAN 2 OBJECT 
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
			
			
			
