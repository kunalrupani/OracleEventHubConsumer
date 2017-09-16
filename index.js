var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient({"kafkaHost": '129.158.70.108:6667'}),
    consumer = new Consumer(
        client,
        [
            { topic: 'bigdata003-mytopic', offset: 100}
        ],
        {
            autoCommit: false,
            fromOffset: true
        }
    );

    consumer.on('message', function (message) {
    tweet = JSON.parse(message.value);
    console.log(tweet.text);
});