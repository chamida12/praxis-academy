ERROR HANDLING


A.Error Handling Dalam Promise.
Menggunakan Try dan Catch

Error Handling dalam promise dapat ditangkap menggunakan .then dan .catch seperti berikut 

		function cobaPromise (){
		    return new Promise ((resolve, reject) =>{
			const waktu = 3000;
			if (waktu > 5000) {
			    setTimeout(() => {
				resolve('selesai');

			    },2000);
			}else {
			    reject('kelamaan!');
			}
		    })
		    
		}
		const coba = cobaPromise();
		coba
		    .then(() => console.log(coba))
		    .catch(err => console.error(err))
		    
Hasilnya adalah reject yangmana erornya ditangkap oleh catch. 
