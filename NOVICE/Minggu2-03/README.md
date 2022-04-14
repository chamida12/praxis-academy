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
   
   
				  
