let search = document.getElementById('search');

search.onclick = function(element) {
    query = {'text': '',
             maxResults: 5
            }

    chrome.history.search(query,
                          (results) => {
                              for (const val of results) {
                                  console.log(val);
                              }
                          })
}
