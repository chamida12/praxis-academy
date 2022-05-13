Penggunaan Callbck secara nyata dan AJAX dengan cara membuat web Library Film.


1. Mendownload apk Postman
2. Membuat API key di OMDb API. Dengan cara :

		chamida@chamida-Vostro-3401:~$ sudo snap install postman
		[sudo] password for chamida: 
		postman (v9/stable) 9.16.0 from Postman, Inc. (postman-inc✓) installed
		
3. Membutuhkan web Bootstap. Membukanya dan klik get started lalu pilih bagian starter tamplate. Copy bagian kode dan pindahkan ke html.

		<!doctype html>
		<html lang="en">
		  <head>
		    <!-- Required meta tags -->
		    <meta charset="utf-8">
		    <meta name="viewport" content="width=device-width, initial-scale=1">

		    <!-- Bootstrap CSS -->
		    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 	   integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

		    <title>Hello, world!</title>
		  </head>
		  <body>
		    <h1>Hello, world!</h1>

		    <!-- Optional JavaScript; choose one of the two! -->

		    <!-- Option 1: Bootstrap Bundle with Popper -->
		    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>  GANTI BAGIAN INI DENGAN JEQUERY CDN PILIH BAGIAN MINIFIED

		    <!-- Option 2: Separate Popper and Bootstrap JS -->
		    <!--
		    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
		    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
		    -->
		  </body>
		 
		</html>






BERIKUT INI ADALAH CODE FILE JS UNTUK MENGAMBIL DATA FILM UNTUK WEB YANG KITA BUAT 


		$.ajax({
		    url:'http://www.omdbapi.com/?apikey=f4d9892a&s=avengers',
		    success:results => {
			const movies = results.Search;
			let cards = '';
			movies.forEach(m => {
			    cards +=` <div class="col-md-4 my-5">
				        <div class="card" >
				            <img src="${m.Poster}" class="card-img-top">
				             <div class="card-body">
				                 <h5 class="card-title">${m.Title}</h5>
				                 <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
				                  <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
				                  data-bs-target="#movieDetailModal"data-imdbid="${m.imdbID}">Detail Film</a>
				          </div>
				        </div>
			    
				    </div>`;
			    
			});
			$('.movie-container').html(cards);

			//Ketika Tombol detail di klik
			$('.modal-detail-button').on('click',function(){
			   $.ajax({
			       url:'http://www.omdbapi.com/?apikey=f4d9892a&i=' + $(this).data('imdbid'),
			       success: m => {
				   const movieDetail = `<div class="container-fluid">
				                        <div class="row">
				                            <div class="col-md-3">
				                            <img src="${m.Poster}" class="img-fluid">
				                            </div>
				                            <div class="col-md">
				                            <ul class="list-group">
				                                <li class="list-group-item">
				                                <h4>${m.Title}(${m.Year})</h4></li>
				                                <li class="list-group-item"><strong> Director : </strong> 
				                                ${m.Director}</li>
				                                <li class="list-group-item"><strong> Actors : </strong> 
				                                ${m.Actors}</li>
				                                <li class="list-group-item"><strong> Runtime : </strong> 
				                                ${m.Runtime}</li>
				                                <li class="list-group-item"><strong>Plot : </strong><br> 
				                                ${m.Plot} </li>
				                            </ul>
				                            </div>
				                        </div>
				                        </div>`;
				                $('.modal-body').html(movieDetail);
				
			       },
			       error:(e) => {
				console.log(e.responseText);
			    }
			   });
			});
		    },

		    error:(e) => {
        console.log(e.responseText);
    }
});







BERIKUT ADALAH CODE HTML UNTUK MENYAMBUNGKANNYA:



			<!doctype html>
			<html lang="en">
			  <head>
			    <!-- Required meta tags -->
			    <meta charset="utf-8">
			    <meta name="viewport" content="width=device-width, initial-scale=1">

			    <!-- Bootstrap CSS -->
			    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

			    <title>Library Film</title>
			  </head>

			  <body>

			    <div class="container">
			      <div class=" row m-5 ">
				<div class="col">
				  <h1> Library Film</h1>
				</div>
			      </div>


			      <div class="row movie-container">
			       
			      </div>

			    </div>
			    

			 <!-- Awal Modal -->


			<!-- Modal -->
			<div class="modal fade" id="movieDetailModal" tabindex="-1" 
			aria-labelledby="movieDetailModalLabel" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">

				</button>
			      </div>
			      <div class="modal-body">
			       
			      </div>
			      <div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				
			      </div>
			    </div>
			  </div>
			</div>

			 <!-- Akhir Modal -->





    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
     integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
     integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" 
     crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
     integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
      crossorigin="anonymous"></script>
      <script src="latihan.js"></script>
   
  </body>
</html>

