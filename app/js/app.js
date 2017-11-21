(function(namespace) {

  // Call Example Request
  // request({title: 'Jurassic Park'}).then(function(response) {

  //   namespace.filmdata = JSON.parse(response);

  //   processData();

  // }).catch(function(error) {
  //   console.log(error);
  // });

  // Process the Data received from the Request
  function processData() {
    var movies = namespace.filmdata.results;
    var container = document.getElementById('container');

    movies.forEach(function(movie) {
      var card = document.createElement('div');
      card.classList.add('card');
      card.classList.add('col');
      card.classList.add('span_3_of_12');

      // Create Card Headline
      var headline = document.createElement('div');
      headline.classList.add('card-headline');
      headline.innerHTML = movie.title;
      card.append(headline);

      // Create Card Content
      var content = document.createElement('div');
      content.classList.add('card-content');
      content.innerHTML = movie.overview;
      card.append(content);

      // Add Card to Container
      container.append(card);
    });
  }

  // Request with Promise
  function request(options) {
    // Variables
    var option = options || {};
    var title = options.title || '';
    if (!title == '') {
      title = title.replace(/\s/g, "%20");
      console.log(title);
    } else {
      console.log('no title!');
      return;
    }
    var lang = options.lang || 'en-US';

    var key = '579680975c0a476a8906708b0cc45739';
    var url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${title}&page=1&include_adult=false`;
    // -> End Declaration

    return new Promise(function (resolve, reject) {
      var rq = new XMLHttpRequest();
      rq.open('GET', url);
      rq.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(rq.response);
        } else {
          reject({
            status: this.status,
            statusText: rq.statusText
          });
        }
      };
      rq.onerror = function () {
        reject({
            status: this.status,
            statusText: rq.statusText
          });
        };
        rq.send();
      });
    }

  namespace.sendRequest = request;

}(window))