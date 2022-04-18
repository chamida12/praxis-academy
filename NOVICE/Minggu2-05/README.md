1.OBJECT


		
		const person = { //objek adalah person yang mana termasuk sebagai variabel yg dapat menampung banyak elemen
		    firstName: "John",
		    lastName: "Doe",
		    age: 50,
		    eyeColor: "blue"
		  };
		console.log (person.firstName + "is" + person.age + "years old");  

ada dua cara dalam mengakses objek ataupun property dalam objek :

		objectName.propertyName 
		objectName["propertyName"]

		contoh :

		person.firstName
		person["firstName"]
		
A. FUNCTION YANG ADA DALAM OBJECT (METHOD)

		var orang = {
		    nama : 'Umami Khamida D.M',
		    umur : 22,
		    Kesibukan : 'belajar coding',
		    sapa : function(){
			return ' Hai, nama saya ' + this.nama + ' usia saya ' + this.umur + ' tahun, dan saya sekarang sedang ' + this.Kesibukan + ' di Praxis Academy.';
		    }
		} 

// kita bisa memanggilnya di console dengan cara:
		//orang.sapa
// maka akan muncul:
// " Hai, nama saya Umami Khamida D.M usia saya 22 tahun, dan saya sekarang sedang belajar coding di Praxis Academy."

Disini function yang berupa sapa disebut sebagai method.




B. CARA MEMBUAT OBJECT

//OBJECT LITERAL
sebagaimana pembuatan object di atas

//CARA MEMBUAT OBJECT DENGAN CONSTRUCTOR

			function mahasiswa (nama,email, jurusan){
			    this.nama = nama;
			    this.email = email;
			    this.jurusan = jurusan;
			}
			var mhs1 = new mahasiswa('chami', 'adadeh@gmail.com','fiqh ushul fiqh');
			

//CARA MEMBUAT OBJECT DENGAN FUNCTION DECLARATION

			function buatobjectmhs(nama,email,jurusan){
			    var mhs = {};
			    mhs.nama = nama;
			    mhs.email = email;
			    mhs.jurusan = jurusan ;
			    return mhs;
			}

			var mhs2 = buatobjectmhs('chami','adadeh@gmail.com', 'fiqh ushul fiqh');
			
			
2.ITERABLELS<BELUM>















3.MAP & SET

A.Menggunakan objek sebagai kunci adalah salah satu fitur Map.

			let chami = {nama : "chami"};
			let mapchami = new Map ();
			mapchami.set (chami,123);
			alert (mapchami.get(chami));
			
dapat dichek menggunakan console.

