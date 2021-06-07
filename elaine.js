var axios = require("axios").default;
const fs = require("fs");

var options = {
  method: 'GET',
  url: 'https://graph.facebook.com/17843819167049166/top_media?fields=id,comments_count,like_count,caption,timestamp,permalink&user_id=17841448403832794&access_token=EAAElYok7bHcBAEBRNpMUcJiK3GH8l1TVNO9kE7NTURjfQmSs25hNBAZCRmWfJZA2nCneFz9oxv9hE4NPKuIW56UhjZBHOonC7IDodgtmHiD3Or1bn29NRXoXSnLK9KJbVBCMYZBDibaadBEEzm5VhesE3H8REzgdVLXCX6hhUSXgJbmKTvDOLsmZBrVytaSquaSbUXBMwVLrKWJhKZBQUh8JWfEj1r4M4ZD',
};

axios.request(options).then(function (response) {
    const responseJson = JSON.stringify(response.data);
    fs.writeFile("result.json", responseJson, "utf8", err => {
        if(err) console.log(err);
    });
}).catch(function (error) {
	console.error(error);
});