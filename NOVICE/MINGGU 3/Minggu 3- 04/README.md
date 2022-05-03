A. CALLBACK
Sebuah funcion yang dikrimkan sebagai parameter ke function yang lain. Ada yang menyebutkan Callback adalah sebuah function yang dieksekusi ketika function lain selesai dijalankan.


		const mhs = [
		    {
			"nama" : " Ike Adeli",
			 "Jurusan" : "Akutansi",
			 "Alamat" : "Pati",
		    },
		    {
			"nama" : "Umami Khamida Di Milinnia",
			 "Jurusan" : "Fiqh Ushul Fiqh",
			 "Alamat" : "Jepara",
		    },
		    {
			"nama" : "Nissa ",
			"Jurusan" : "Akutansi",
			"Alamat" : "Pati",
		    },
		];
		   mhs.forEach(m => console.log(m.nama)); // cara ini memanggil menggunakan higher order function yangmana parameter yang dipanggil berupa function juga.
		   


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
		
		
		
		
A.PROMISE
Object yang mempresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang.

Cara membuat Promise yang simple :

		
		let ditepati = true;
		const janji1 = new  Promise((resolve,reject)=>{

		    if (ditepati){
			resolve('janji ditepati');
		    }
		    else{
			reject('Ingkar janji..');
		    }
		});
		console.log(janji1);// cara memanggil promise 

		janji1
		.then(respone => console.log('OK!: ' + respone))
		.catch(respone => console.log('NOT OK!:' + respone)); // cara kedua memanggil promise 
		
		
		
Contoh Promise yabg lain :

		let ditepati = true;
		const janji2 = new Promise((resolve, reject) => {
		    if (ditepati){
			setTimeout(()=>{
			    resolve('Ditepati setelah beberapa waktu!');
			},2000);
		    }else{
			setTimeout(()=>{
			    resolve('Tidak ditepati!');
			},2000);//waktu tunggu adalah 2 detik
		} );
		console.log('mulai');
		console.log(janji2.then(() => console.log(janji2)));
		console.log ('selesai'); 

		//Hasilnya demikian jika menggunakan pemanggilan di atas.
		//mulai
		// Promise { <pending> }
		// selesai
		// Promise { 'Ditepati setelah beberapa waktu!' }

		janji2
		.finally(() => console.log('selesai menunggu!'))
		.then(response => console.log('OK!'+ response))
		.catch(response => console.log('OK! Gagal'+ response))

		//Jika memanggilnya demikian maka tidak akan di menampilkan apa yang diproses
		//selesai menunggu!
// OK!Ditepati setelah beberapa waktu!
