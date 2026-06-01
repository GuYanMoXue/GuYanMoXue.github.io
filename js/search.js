(function() {
  var searchInput = document.getElementById('search-input');
  var resultsContainer = document.getElementById('results-container');
  if (!searchInput || !resultsContainer) return;

  var searchData = [];

  fetch('/index.json')
    .then(function(res) { return res.json(); })
    .then(function(data) {
      searchData = data;
    });

  searchInput.addEventListener('input', function() {
    var query = this.value.toLowerCase().trim();
    resultsContainer.innerHTML = '';

    if (!query) return;

    var results = searchData.filter(function(item) {
      return item.title.toLowerCase().indexOf(query) !== -1 ||
             (item.content && item.content.toLowerCase().indexOf(query) !== -1);
    });

    results.slice(0, 10).forEach(function(item) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = item.permalink;
      a.textContent = item.title;
      li.appendChild(a);
      resultsContainer.appendChild(li);
    });
  });
})();
