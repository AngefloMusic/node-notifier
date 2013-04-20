
var Notifier = require('../');

exports.testNotifier = function (test) {
  var notifier = new Notifier({
    APN: true,
    email: true,
    actions: ['comment', 'like'],
    tplPath: require('path').resolve(__dirname, './templates'),
    postmarkKey: 'POSTMARK_KEY',
    parseAppId: 'APP_ID',
    parseApiKey: 'MASTER_KEY'
  });

  var comment = {
    to: 'Tom',
    from: 'Harry'
  };

  notifier.use({
    parseChannels: ['USER_5093a266180b779762000005']
  });

  var options = {
    to: 'tom@madhums.me',
    subject: 'Harry says Hi to you',
    from: 'harry@madhums.me',
    locals: comment // should be the object containing the objects used in the templates
  };

  notifier.send('comment', options, function (err) {
    if (err) return console.log(err);
    console.log('Successfully sent Notifiaction!');
  });

  test.expect(1);
  test.ok(true, "this assertion should pass");
  test.done();
}
