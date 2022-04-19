DATE & TIME FORMATING


-Membuat date, bulan, tahun sesuai keadaan sekarang :

			let tgl = new Date()
			let format_tgl = tgl.getDate() + "-" + (tgl.getMonth()+1) + "-" + tgl.getFullYear()
			console.log(format_tgl)

- membuat format seperti di atas tpi ditambahkan waktu :


				let tgl = new Date()
				let format_tgl = tgl.getFullYear() + "-" + (tgl.getMonth() + 1) + "-" + tgl.getDate() + " " + 
				tgl.getHours() + ":" + tgl.getMinutes() + ":" + tgl.getSeconds() 
				console.log(format_tgl)  ///2022-4-15 14:17:19
				
				
REGULAR EXPRESSION

(“pola yang digunakan untuk mencocokkan kombinasi karakter dalam string”. )
