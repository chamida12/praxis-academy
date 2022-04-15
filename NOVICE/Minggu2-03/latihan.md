
LATIHAN :

A.MEMBUAT RAMALAN MENGGUNAKAN FUNCTION :


			function tellFortune(Pekerjaan, lokasi, pasangan, jumlahanak) {
			  var ramalan = 'Anda akan menjadi' + Pekerjaan + ' di ' + lokasi + ' dan anda anak menikah dengan ' +
			 pasangan + ' ' + ' dan anda akan memiliki ' + jumlahanak+ ' anak.';
			  console.log(ramalan);
			}

			tellFortune('Progemer', 'Jogja', 'Ayu', 4 ); 
			//Anda akan menjadiProgemer di Jogja dan anda anak menikah dengan Ayu  dan anda akan memiliki 4 ana
			
B. CARA MENCARI TEMPERATUR TUBUH


			//MENCARI CELCIUS KE FAHRENHEIT
			function celsiusToFahrenheit(celsius) {
			  var celsiusInF = (celsius*9)/5 + 32;
			  console.log(celsius + '°C is ' + celsiusInF + '°F');
			}

			//CARA MENCARI FAHRENHEIT KE CELCIUS
			function fahrenheitToCelsius(fahrenheit) {
			  var fahrenheitInC = ((fahrenheit - 32)*5)/9;
			  console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
			}

			celsiusToFahrenheit(38);//cara memanggil //38°C is 100.4°F latihan.js:4:11

			fahrenheitToCelsius(98);//cara memanggil//98°F is 36.666666666666664°C
