Kasus 1 'kucing':

		const methodKucing = {
		  makan: function (porsi){
		this.lapar += porsi;
		this.lelah -= porsi ;

		console.log('Enak,Pusy kenyang');
		  },
		  bermain: function (jam) {
		this.lelah += jam;
		this.lapar += jam;

		console.log('Pusy lelah');
		  },
		  begadang : function(jam){
		this.mengantuk += jam;
		console.log('Pusy Mengantuk');
		  },
		  Tidur : function(jam){
		    this.mengantuk -= jam;
		  console.log('Pusy sudah segar')
		  }
		 
		};

		function kucing (lapar,lelah,mengantuk){
		  let kucing = Object.create(methodKucing);
		  kucing.lapar = lapar;
		  kucing.lelah = lelah;
		  kucing.mengantuk = mengantuk;

		  return kucing;
		}

		let Pusy = kucing(10,5,2);
		
		
		
2. KASUS 2 "DAFTAR BUKU"
