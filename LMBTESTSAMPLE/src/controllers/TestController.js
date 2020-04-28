const TestService = require('../services/TestService');

class TestController {

    static async testSample(event) {
        console.log("");
        console.log("CONTROLLER:testSample:");
        try {
            let payload = event;

            let result = await TestService.testData(payload);

            console.log("response::" + JSON.stringify(result));
            return TestService.buildResponse(result, "TEST");
        } catch (error) {
            console.log(error);
            return TestService.buildErrorResponse(event, error);
        }
    }
}

module.exports = TestController;