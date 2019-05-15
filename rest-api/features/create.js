module.exports.CreateTodo = (event, context, callback) => {
    const body = JSON.parse(event.body);
    const mockDB = body.to + "Mock Database";
    const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Go Serverless v1.0! Your function executed successfully!',
          input: event,
          todo: mockDB
        }),
    };
    callback(null, response);
};