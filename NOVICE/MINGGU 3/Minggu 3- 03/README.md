1. FUNCIONAL PROGRAMMING

Pendekatan lain yang cukup populer di dalam pengembangan perangkat lunak.
Dalam funcional programing terdapat konsep yaitu :

1. Isolated Funcions : di dalamnya tidak ada ketergantungan dari keadaan programnya. jika kita kita mempunya variabel di luar program jika masuk kedalam funcion jangan sampai funcion tersebut berubah. 

2.  Pure Functionas :fungsi yangmana inputnya sama menghasilkan output yang sama

3. Funcional with limited side effects : fungsi yang memiliki efek samping yang terbatas. Setiap ada perubahan kita yang mengnedalikan bukan tidak sengaja merubah karena tidak tau lingkupnya.

A. belajar dari web freeCodeCamp mengerjakan soal :
 Setiap member praxis menyukai teh, ada dua funcion yaitu "menyiapkanTeh" dan "mengambilTeh". Panggil fungsi "mengambilteh" untuk mengambil 40 teh dan dibagikan ke setiap mamber lalu simpan ke "teamteh"!!.
 
 

			const menyiapkanTeh = () => 'greentea';
			
			//arrow funcion. Ini adalah function yang mana memiliki fungsi mengembalikan greentea
			// function menyiapkanTeh() {
			//     return 'greentea';
			// } // cara membuat arrow function yang lain adalah demikian.



			//Selanjutnya kita buat function yang berbeda untuk menerima setiap gelas yang dibutuhkan bernama "mengambilTeh". 				selanjutnya kita buat array kosong lalu buat looping.

			const mengambilTeh = (jumlahGelas) => {
			    const tehcup = [];

			    //Setiap looping memasukan 1 gelas ke array kosong
			    for (let gelas = 1; gelas <= jumlahGelas; gelas += 1){
				const tehGelas = menyiapkanTeh();
				tehcup.push(tehGelas);
			    }
			    return tehcup;
			}
			 //kita buat variabel baru yang meyimpan jumlah teh yang akan disajikan.
			 const tehTeam = mengambilTeh(40)

			 //kita membuat variabel yang menyimpan isi file dan akan mencetak isi file apabila kita butuhkan saja.
			 
			 console.log(tehTeam);


B. Mamber Praxis memiliki  mood yang berbeda beda. Terkadang menginginkan blacktea kadang juga menginginkan greentea. Siapkan 27 gelas greeantea dan 13 gelas blacktea  simpan kedalam variabel teamBlackTea dan teamGreenTea.
catatan : data atau berapa jumlah teh dikirimkan sebagai parameter terakhir.




			const prepareGreenTea = () => 'greenTea';
			const prepareBlackTea = () => 'blackTea';
			// keduanya adalah function yang mengembalikan parameter greentea & blacktea.

			const getTea = (prepareTea, jumlahGelas) => {
			    const teaCups = [];
			  
			 // getTea termasuk higer order function dan prepare termasuk sebagai lambda. 
			 
			    for(let gelas = 1; gelas <= jumlahGelas; gelas += 1) {
			      const gelasTeh = prepareTea();
			      teaCups.push(gelasTeh);
			    }
			    return teaCups;
			  };

			  const teamBlacktea = getTea(prepareBlackTea, 27);
			  const teamGreentea = getTea(prepareGreenTea,13)
			  // memanggil parameter berupa function berupa prepareBlacktea & prepareGreenTea.
			  console.log( teamBlacktea, teamGreentea);
			  
			  
						 
Terdapat istilah-istilah yang ada dalam functional programing:


A.CALLBACK
 sebuah function yang kirim sebagai parameter kepada function yang lain atau dikembalikan sebagain retrun value dari sebuah function.
 
B.HIGER ORDER FUNCTION
function yang menerima function sebagai argumen atau mengembalikan function sebagai return valuenya.

C. LAMBDA
Sebuah function dikirimkan atau dikembalikan dari fincion yang lain.

D. Menghindari Mutasi(perubahan dalam functional0 dan side effects(hasil yang tidak kita inginkan)

 latihan :
 Melengkapi kode di dalam function  agar mengembalikan nilai dari fixvalue di + satu.
 
 
 		 var fixedvalue = 4
 		 function incrementer (){
 		 }
 		 
 		 
 melengkapi kode diatas dengan menambahkan 1. cara yang benar adalah :
 

		var fixvalue = 4;
		 function penjumlahan (){
		     return fixvalue +1;
		 }

		 console.log(penjumlahan());
		 
hasilnya adalah 5. berbeda jika kita menmabahkan seperti ini;

			var fixvalue = 4;
			 function penjumlahan (){
			     return fixvalue ++;
			 }

			 console.log(penjumlahan());
			 
			 
Maka hasilnya adalah 4. 


2. CURRYING 

Currying merupakan sebuah proses mengubah fungsi yang membutuhkan banyak argumen menjadi fungsi yang membawa mereka satu-persatu.

Perbedaan function dan curried versi function. Di bawah ini adalah function biasa :

		function multiply(a, b, c) {
		    return a * b * c;
		}
		console.log (multiply(1,2,3)); //6
		
		
Selanjutnya adalah pembuatan curried versi function dengan output yang sama:


		function multiply(a) {
		    return (b) => {
			return (c) => {
			    return a * b * c
			}
		    }
		}

		const mul1 = multiply(1);
		const mul2 = mul1(2);
		const result = mul2(3);
		console.log(result); //6
		
Selanjutnya menggunakan currying untuk membuat diskon untuk  pelanggan favorit. 

Mencari jumlah potongan harga dari 10 % diskon.
			
		function diskon(diskon) {
		    return (harga) => {
			return harga * diskon;
		    }
		}
		const sepuluhpersen = diskon(0.1);
		console.log(sepuluhpersen(500));
		

		


