module.exports = function(eventName, slackToken, channelID, onMessage) {
    var slackClient = require('slack-client'),
    RtmClient = slackClient.RtmClient,
    RTM_EVENTS = require('slack-client').RTM_EVENTS,
    RTM_CLIENT_EVENTS = require('slack-client').CLIENT_EVENTS.RTM;
    
    var TOKEN = process.env.SLACK_API_TOKEN || slackToken
        CHANNEL = process.env.SLACK_CHANNEL_ID || channelID,
        rtm = new RtmClient(slackToken, {logLevel: 'info'});
    
    rtm.start();
    
    rtm.on(RTM_CLIENT_EVENTS.RTM_CONNECTION_OPENED, function () {
      rtm.sendMessage(eventName+': node-slack-client connect to slack successfully!', CHANNEL, function messageSent() {
        // optionally, you can supply a callback to execute once the message has been sent
      });
    });
    
    rtm.on(RTM_EVENTS.MESSAGE, function (message) {
        onMessage(message.text);
    });
    
    this.sendMessage = function(message, callback) {
        rtm.sendMessage(message, CHANNEL, function messageSent() {
            // optionally, you can supply a callback to execute once the message has been sent
            callback();
        });
    }
}
