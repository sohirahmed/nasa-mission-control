const request = require('supertest');
const app = require('../../app');
const {
    mongoConnect,
    mongoDisconnect
} = require('../../services/mongo.js')


describe('Launches API' , () => {
    beforeAll( async() => {
        await mongoConnect()
    })

    afterAll(async () => {
        await mongoDisconnect();
        await new Promise(res => setTimeout(res, 500));
});

    describe('Test GET /launches', () => {
    test('It should respond with 200 success', async () => {
        await request(app)
            .get('/v1/launches')
            .expect(200)
            .expect('Content-Type', /json/);
    });
});
describe('Test POST /launch' ,()=>{
    const completeLaunchData = {
            mission: 'USS Enterprise ',
            rocket: 'NCC 1701-D',
            launchDate: 'December 27, 2030',
            target: 'Kepler-62 f'   
    }
    const launchDataWithout = {
            mission: 'USS Enterprise ',
            rocket: 'NCC 1701-D',
            target: 'Kepler-62 f'
    }
    const launchDateWithInvalidDate = {
            mission: 'USS Enterprise ',
            rocket: 'NCC 1701-D',
            launchDate: 'AHMED',
            target: 'Kepler-62 f'   
    }

    test('It should respond with 201 created', async () => {
        const response = await request(app)
        .post('/v1/launches')
        .send(completeLaunchData)
        .expect(201)
        .expect('Content-Type', /json/);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(responseDate).toBe(requestDate)    

    expect(response.body).toMatchObject(launchDataWithout)   
        
    })

    test('It should catch missing required properties', async() => {
        const response = await request(app)
        .post('/v1/launches')
        .send(launchDataWithout)
        .expect(400)
        .expect('Content-Type', /json/);

    expect(response.body).toStrictEqual({
        error: 'Missing required launch property'
    })    
    })
    test('It should catch invalid dates',async () => {
        const response = await request(app)
        .post('/v1/launches')
        .send(launchDateWithInvalidDate)
        .expect(400)
        .expect('Content-Type', /json/)
    
    expect(response.body).toStrictEqual({
        error: 'Invalid launch date'
    })    
    })
})

})




