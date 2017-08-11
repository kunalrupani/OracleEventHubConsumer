var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client('xx.xx.xx.xx:2181'),
    consumer = new Consumer(
        client,
        [
            { topic: 'paasproductmgmt-kKafkaTopic', partition: 0 }
        ],
        {
            autoCommit: false
        }
    );

    consumer.on('message', function (message) {
    console.log(message.value);
});