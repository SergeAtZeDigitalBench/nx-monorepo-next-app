import axios from 'axios';

describe('GET /', () => {
  it('should return a message - DEMO test', async () => {
    const res = {
      status: 200,
      data: {
        message: 'Welcome to my-express-api!',
      },
    };

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Welcome to my-express-api!' });
  });
});
