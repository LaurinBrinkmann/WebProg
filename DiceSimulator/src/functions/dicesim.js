const { app } = require('@azure/functions');

app.http('dicesim', {
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS', 'HEAD'],
    authLevel: 'anonymous',
    handler: async (request) => {
        const dieCount = request.query.get('diceCount') || 0;
        const eyeCount = request.query.get('eyeCount') || 0;
        let eyeTotal = 0;
        let dice = new Array(dieCount);


        for (let i = 0; i < dieCount; i++) {

            let die = Math.floor(Math.random() * eyeCount) + 1;
            eyeTotal += die;
            dice[i] = die;
        }

        if(dieCount == 0 || eyeCount == 0 || isNaN(dieCount) || isNaN(eyeCount)){
            return { status: 400, body: 'Bad Request: Please enter correct values!' };
        }

        return { status: 200, body: `throw: ${dice} \n total: ${eyeTotal}` };
    }
});
