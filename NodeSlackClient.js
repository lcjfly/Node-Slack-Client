module.exports = function(eventName, t, onMessage) { // t -> token
    var slackClient = require('slack-client'),
    RtmClient = slackClient.RtmClient,
    RTM_EVENTS = require('slack-client').RTM_EVENTS,
    RTM_CLIENT_EVENTS = require('slack-client').CLIENT_EVENTS.RTM;
    
    var token = process.env.SLACK_API_TOKEN || 'xoxb-37378494434-TyroFe4OWkKpO4c1NCjVL69e',
        rtm = new RtmClient(token, {logLevel: 'info'});
    
    rtm.start();
    
    rtm.on(RTM_CLIENT_EVENTS.RTM_CONNECTION_OPENED, function () {
      rtm.sendMessage(eventName+': node-slack-client connect to slack successfully!', 'D13AHGWMS', function messageSent() {
        // optionally, you can supply a callback to execute once the message has been sent
      });
    });
    
    rtm.on(RTM_EVENTS.MESSAGE, function (message) {
        onMessage(message.text);
    });
    
    this.sendMessage = function(message, callback) {
        rtm.sendMessage(message, 'D13AHGWMS', function messageSent() {
            // optionally, you can supply a callback to execute once the message has been sent
            callback();
        });
    }
}