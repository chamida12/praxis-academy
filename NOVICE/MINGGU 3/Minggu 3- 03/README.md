FUNCIONAL PROGRAMMING

Pendekatan lain yang cukup populer di dalam pengembangan perangkat lunak.
Dalam funcional programing terdapat konsep yaitu :

1. Isolated Funcions : di dalamnya tidak ada ketergantungan dari keadaan programnya. jika kita kita mempunya variabel di luar program jika masuk kedalam funcion jangan sampai funcion tersebut berubah. 

2.  Pure Functionas :fungsi yangmana inputnya sama menghasilkan output yang sama

3. Funcional with limited side effects : fungsi yang memiliki efek samping yang terbatas. Setiap ada perubahan kita yang mengnedalikan bukan tidak sengaja merubah karena tidak tau lingkupnya.

A. belajar dari web freeCodeCamp mengerjakan soal :
 Setiap member praxis menyukai teh, ada dua funcion yaitu "menyiapkanTeh" dan "mengambilTeh". Panggil fungsi "mengambilteh" untuk mengambil 40 teh dan dibagikan ke setiap mamber lalu simpan ke "teamteh"!!.
 
 

			const menyiapkanTeh = () => 'greentea';
			
			//arrow funcion. Ini adalah function yang mana memiliki fungsi mengembalikan greentea
			// function menyiapkanTeh() {
			//     return 'greentea';
			// } // cara membuat arrow function yang lain adalah demikian.



			//Selanjutnya kita buat function yang berbeda untuk menerima setiap gelas yang dibutuhkan bernama "mengambilTeh". 				selanjutnya kita buat array kosong lalu buat looping.

			const mengambilTeh = (jumlahGelas) => {
			    const tehcup = [];

			    //Setiap looping memasukan 1 gelas ke array kosong
			    for (let gelas = 1; gelas <= jumlahGelas; gelas += 1){
				const tehGelas = menyiapkanTeh();
				tehcup.push(tehGelas);
			    }
			    return tehcup;
			}
			 //kita buat variabel baru yang meyimpan jumlah teh yang akan disajikan.
			 const tehTeam = mengambilTeh(40)

			 //kita membuat variabel yang menyimpan isi file dan akan mencetak isi file apabila kita butuhkan saja.
			 
			 console.log(tehTeam);


B. Mamber Praxis memiliki  mood yang berbeda beda. Terkadang menginginkan blacktea kadang juga menginginkan greentea. Siapkan 27 gelas greeantea dan 13 gelas blacktea  simpan kedalam variabel teamBlackTea dan teamGreenTea.
catatan : data atau berapa jumlah teh dikirimkan sebagai parameter terakhir.




			const prepareGreenTea = () => 'greenTea';
			const prepareBlackTea = () => 'blackTea';
			// keduanya adalah function yang mengembalikan parameter greentea & blacktea.

			const getTea = (prepareTea, jumlahGelas) => {
			    const teaCups = [];
			  
			 // getTea termasuk higer order function dan prepare termasuk sebagai lambda. 
			 
			    for(let gelas = 1; gelas <= jumlahGelas; gelas += 1) {
			      const gelasTeh = prepareTea();
			      teaCups.push(gelasTeh);
			    }
			    return teaCups;
			  };

			  const teamBlacktea = getTea(prepareBlackTea, 27);
			  const teamGreentea = getTea(prepareGreenTea,13)
			  // memanggil parameter berupa function berupa prepareBlacktea & prepareGreenTea.
			  console.log( teamBlacktea, teamGreentea);
			  
			  
						 
Terdapat istilah-istilah yang ada dalam functional programing.
A.CALLBACK
 sebuah function yang kirim sebagai parameter kepada function yang lain atau dikembalikan sebagain retrun value dari sebuah function.
 
B.HIGER ORDER FUNCTION
function yang menerima function sebagai argumen atau mengembalikan function sebagai return valuenya.

C. LAMBDA
Sebuah function dikirimkan atau dikembalikan dari fincion yang lain.
