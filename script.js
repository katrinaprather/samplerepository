$(document).ready(function(){
	$('#movie-search-form').submit(function(){
		var movieSearchTerm =$('#movieInput').val();

		var searchURL ='http://api.themoviedb.org/3/search/movie?query='+movieSearchTerm+'&api_key=fec8b5ab27b292a68294261bb21b04a5'

		$.getJSON(searchURL, function(movieData){
			console.log(movieData.results[0]);
			
			var movieHTML="";
			
			for(i=0; i<movieData.results.length; i++){
				console.log(movieHTML);
				var title = movieData.results[i].title;
				var overview=movieData.results[0].overview;
				var posterPath = movieData.results[i].poster_path;
				var releaseDate = movieData.results[i].release_date;
				movieHTML += '<div class="movie">';
				movieHTML += '<img src="http://image.tmdb.org/t/p/w300/' +posterPath+'">';
				movieHTML += '</div>';
			}

			$('#now-playing-wrapper').html(movieHTML);
			console.log(overview);

		});
		
	});


});