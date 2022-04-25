Artikel 5 :

Buat objek dengan menggunakan new  kata kunci.
Tentukan properti dan metode untuk objek yang dibuat menggunakan thiskata kunci.

		function Buah(jenis){
		  this.jenis = jenis;
		  this.warna = 'tidak diketahui';
		  this.getInformasi = getBuahInformasi;

		}

		function getBuahInformasi(){
		  return 'ini ' + this.jenis + ' warnanya adalah ' + this.warna + '.';

		}

		let Semangka = new Buah('semangka inul');//objek
		console.log(Semangka.getInformasi());

		Semangka.warna = 'Merah';
		console.log(Semangka.getInformasi());//ini semangka inul warnanya adalah Merah.

