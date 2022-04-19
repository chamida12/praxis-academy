----FUNCTION----


1. BUILT-IN FUNTION
  
   seperti:
   alert ();
   confrim ();
   prompt ();
   
 * Function untuk string:
   
   charAt () fungsinya untuk mengetahui ada karakter apa yang ada di dalam string
   
   
			var nama = "chami";
			console.log(nama.charAt(2));
		// a
			
  harus dituliskan di dalam function nomer berapa karakter string yang ingin diketahui.  maka jawabannya akan muncul dua karena js menghitung mulai dari 0.
  
  
  * Function untuk math (matematika)
  sin (), cos (),tan (), random () dll.
  
  2. Cara Membuat Function
  
  cara ada 2:
  
  * Function Declaration
  
  				function jumlahduabilangan(a, b){
				  var total;
				  total = a + b;

				  return total;
				}
				
  * Function Expression
  
  
				  var jumlahduabilangan = function(a,b){
				    var total;
				    total = a + b;
				  
				    return total;
				  } 
				  
  3. Cara Menjalankan Function
  
  cara menjalankannya dapat dengan 
  
  				alert(jumlahduabilangan(8,2))
  				dan
  			       console.log(jumlahduabilangan(8,2)	
  			       
  hal ini dapat dilihat dengan disambungkan ke html dengan:
  
   				<script src="namafile.js"></script>
   
   -Operasi penjumlahan menggunakan function 
   
				   function tambah (a,b){
				  return a + b ;
				}

				var a =parseInt(prompt("masukan nilai1:"));
				var b = parseInt(prompt("masukan nilai2 :"))
				var hasil = tambah(a,b);
				console.log(hasil);
				
  
  sama seperti sebelumnya , bahwa kode function kali ini bisa dijalankan dengan membuka html 
  parseInt untuk mengubah string ke interger. 	
  
  
  - memasukkan expresi dalam argumen.
  
				  function tambah (a,b){
				      return a + b ;
				    }
				    
				    var a =parseInt (prompt("masukan nilai1:"));
				    var b = parseInt(prompt("masukan nilai2 :"))
				    var hasil = tambah(a*4,b*5);
				    console.log(hasil);
				    
				    
   - memasukan function dalam argumen.
   			  
   			function kali(a,b){
			      return a * b ;
			    }

			function tambah (c,e){
			  return c + e;
			}

			var hasil = tambah(kali(5,5),kali(3,2));
			console.log(hasil);
			    
			// 31
			
			
  4. ARGUMENTS
  (array yang berisi nilai yang dikirimkan saat fungsi dipanggil)
  argumens beda dengan argumen di atas.
  
  
  
			  function tambah(){
			  var hasil = 0;
			  for( var i = 0; i<arguments.length; i++){
			    hasil += arguments[i]
			  }
			  return hasil;
			}

			var coba = tambah(1,2,3,4);
			console.log (coba);
			
			
  untuk mengatasi tidak adanya parameter
  
  5. Recursion ( memanggil dirinya sendiri)
  pada pemanggilan recursion harus ada perimtaan berhenti agar bisa berhenti. hal ini disebut base case
  - Base Case ( Kondisi akhir dari rekursif yang menghasilkan nilai 
  
  
  -CONTOH RECURSION TANPA BASE CASE 
  			
  			
  			function tampilAngka(n) {
  			    console.log(n);
  			    return tampilAngka(n-1)}
  			    
  			    tampilkan angka (10);
  			    
  -CONTOH RECURSTION DENGAN BASE CASE 
  
				function cetakangka(n) {
				  if( n === 10) {
				    return;  // base case adalah angka 10
				  }
				  console.log(n);
				  cetakangka(n-1); //untuk hitung mundur menggunakan kurang & untuk hitung normal menggunakan +
				}
				cetakangka(10);

