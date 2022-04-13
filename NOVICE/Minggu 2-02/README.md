----HARI KEDUA---
  
  <break></break>
  LATIHAN HARI KEDUA
  
 
  1.MEMAHAMI KODE SEDERHANA JAVASCRIPT
  		var x = 1;
		{
		  var x = 2;
		}
		console.log(x); 
 
 
 Pada bagian ini harus mencantumkan block statement yaitu {}

  - Menggabungkan 2 Strings
  
		  var a = "hello";
		var b = " word";

		c = a + b

		console.log (c)
		
 hasilnya akan keluar 
		 chamida@chamida-Vostro-3401:~/Scripts$ node latihan.js
		hello word
				 
  2.BELAJAR KATA KUNCI SWITCH
  
		const hari = 5;

		switch (hari) {
		  case 1:
		    console.log('senin');
		    break;
		  case 2:
		    console.log('selasa');
		    break;
		  case 3:
		    console.log('rabu');
		    break;
		  case 4:
		    console.log('kamis');
		    break;
		  case 5:
		    console.log('jumat');
		    break;
		  case 6:
		    console.log('sabtu');
		    break;
		  case 7:
		    console.log('minggu');
		    break;
		  default:
		    console.log('Maaf, harus angka 1 - 7');
		}


maka jika dibagian const kita menuliskan angka case yang ingin diketahui maka akan muncul keterangan dari case tersebut

CONTOH SOAL :

// diketahui pak maman memiliki 7 angkot

// angkot 1 dan angkot 2 adalah angkot yang belum berangkat

// angkot 3, 4, dan angkot 5 adalah angkot yang beroperasi dengan baik

// dan

// angkot 6 dan angkot 7 adalah angkot requestIdleCallback

// soal : pak maman ingin mengetahui angkot yang rusak

PENYELESAIAN :

		const angkot = 'rusak';

		switch (angkot) {
		  case 'rusak':
		    console.log('angkot 6 & 7 rusak')
		    break;
		  case 'baik':
		    console.log('angkot 3, 4 & 5 beroperasi dengan baik')
		    break;
		  case 'males':
		    console.log('angkot 1 & 2 belum berangkat ')
		    break;
		  
		  default:
		     console.log(`Maaf angkot pak maman hanya 7 ${angkot}.`);
		    break
		}
		
JIka mencari angkot yang rusak maka cukup mencari const angkot = rusak ( const switch ='case yang dicari')

   3. EXCEPTION 
  Exception adalah suatu mekanisme yang dilakukan oleh bebarpa bahasa pemrograman untuk mendeskripsikan apa yang harus dilakukan jika terdapat kondisi yang tidak diinginkan seperti eror.
  

  A. TRY ... CATCH.
  try untuk mengechek program tersebut ada kesalahan atau tidak.
  
  
---- Loops and Iteration----

  4. LOOP
  
Perulangan pada JavaScript 


  A. FOR
menggunakan 
for([inisialisasi]; [kondisi]; [eksekusi iterasi]) {}


   - Inisialisasi adalah saat pertama kali kita mendeklarasi sebuah nilai awal, dimana nilai awal akan berubah selama belum memenuhi syarat kondisi.
   

   - Kondisi berfungsi untuk mengecek perubahan yang terjadi setiap kali terjadi eksekusi iterasi perulangan dengan menggunakan operator perbandingan.
   
   - Eksekusi Iterasi proses akhir setiap kali terjadi eksekusi iterasi, biasanya digunakan untuk proses penambahan (increment) atau 
   pengurangan (decrement).
   

   CONTOH :
 - jika kita ingin menghitung 1-10 menggunakan loop dengan cara :
  
	  		for(let i = 1; i < 10; i++) {
   				 console.log(i);
							}
 
 jadi disini kita menulis angka yang akan di hitung di bagian inisialisasi untuk awal. lalu menambahkan angka yang akan dihitung. bisa di ubah kurang dari ataupun lebih dari.
 
 - jika kita ingin mengulang kata yang sama hingga 10 kali juga bisa menggunakan for dengan cara :
 
			  for(let i = 1; i < 10; i++) {
			    console.log("ulang");
			}
			
    Dengan cara ini kita mengubah bagian console.lognya dengan string.
    
  - Menggunakan For kedalam html
  lihat di file for.html
  
  
  B.WHILE
  
				 let n = 0;
				let x = 0;
				while (n < 3) {
				  n++;
				  x += n;
				}
 n disini akan menambahkan nilai pada x. 

  - Penggunaan do .. while
  
				  let i = 0;
				do {
				  i += 1;
				  console.log(i);
				} while (i < 5);



  C.BREAK STETMENT
  
  Perintah break adalah perintah yang digunakan untuk berhenti dari suatu perulangan.
  
				  let i = 0;

				while (i < 6) {
				  if (i === 3) {
				    break;
				  }
				  i = i + 1;
				}

				console.log(i);
	
  Jika diberi break maka bila di run akan muncul 3 karena break membatasi. tetapi jika tidak di berikan break maka jika dirun akan muncul 6 karena tidak dibatasi.
  
  
  
  D.FOR ... IN STATEMENT
  
				const person = {namadepan:"John", namabelakang:"Doe", umur:25}; 

				let txt = "";
				for (let x in person) {
				  txt += person[x] + " ";
				} {console.log(txt)}
				
				
  E.FOR IN DALAM ARRAYS
  
  
			       var a=[5,4,3,2,1];       // pembuatan array
				var b;                   // variabel penampung
				for (b in a)
				{
  				 console.log("Isi array a adalah: "+a[b]);
				}
  
  F. ARRAY
 Pada javascript, array dapat kita buat dengan tanda kurung siku ([...]).
  
