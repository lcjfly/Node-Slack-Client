# Node-Slack-Client

## Usage

```js

  var NodeSlackClient = require('./NodeSlackClient');

  // slack message callback
  var onSlackMessage = function(msg) {

  }

  // init an object
  var slackClient = new NodeSlackClient(EVENT_NAME, process.env.SLACK_API_TOKEN, onSlackMessage);

  // send msg 
  slackClient.sendMessage(MESSAGE, function messageSent() {
        
  });
```