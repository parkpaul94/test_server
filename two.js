const http = require('http');
const Twitter = require('twitter');

const keys = {
    consumer_key: 'jvXo7vL37dYd6zCXYtQ9H3uPS',
    consumer_secret: 'FbLRwCQdB2GCla9rZ7fyVIK5Avl6wqIA5AWBGPuPtivu8ur6ZR',
    access_token_key: '987094835336220673-yIT852fcFWtDLsmtdm2WAymRhmq0cc2',
    access_token_secret: 'ZGT7wLzXho7wUBr3dLVinTl0kHWG5j8bmOd9x2YFdAELB',
  }

const twitterClient = new Twitter(keys);

const server7500 = http.createServer(function(request, response) {
    if (request.url ==='/') {
        response.end('Home Page\n')
    }
    if (request.url === '/portfolio') {
        response.end('Portfolio Page\n')
    }
    if (request.url === '/tweets') {
        var params = {screen_name: 'realdonaldtrump'};
        return twitterClient.get('statuses/user_timeline', params, function(err, tweets) {
        response.end(JSON.stringify(tweets[0].text));
    })
    }
})

server7500.listen(7500);