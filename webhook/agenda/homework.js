export default ({ agenda, webhook }) => {
    agenda.define('register homework', job => {
        const { homework } = job.attrs.data;
        console.log(homework);

        webhook.send({
            attachments: [{
                color: "#36a64f",
                title: '오늘의 과제',
                text: homework
            }]
        })
            .then(res => {
                console.log('slack web hook result::', res);
            })
            .catch(err => {
                console.error('slack web hook error::', err)
            })
    });
}