# Node-Slack-Client

## Usage

```js

  var NodeSlackClient = require('./NodeSlackClient');

  // slack message callback
  var onSlackMessage = function(msg) {

  }

  // init an object
  var slackClient = new NodeSlackClient("NEXT-bag", token, onSlackMessage);

  // send msg 
  slackClient.sendMessage('next bag in stock!', function messageSent() {
        
  });
```