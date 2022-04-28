A. CALLBACK
Sebuah funcion yang dikrimkan sebagai parameter ke function yang lain. Ada yang menyebutkan Callback adalah sebuah function yang dieksekusi ketika function lain selesai dijalankan.


Syncrhonus Callback:

		function halo(nama) {
		    alert('Halo, ${nama}');
		} // ini adalah function yang akan kita panggil sebagai parameter dari function lain.

		function tampilakanPesan(callback){
		    const nama = prompt('Masukan Nama : ');
		    callback(nama);
		}
		tampilakanPesan(halo);
		//jika memanggilnya seperti : tampilkanPesan(halo()); maka yang akan keluar adalah callback terlebih dahulu.
		
		

