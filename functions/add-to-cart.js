exports.handler = async (event) => {
    try {
        if (event.httpMethod !== "POST") {
            return {
                statusCode: 405,
                body: JSON.stringify({ error: "Method Not Allowed" })
            };
        }

        const data = JSON.parse(event.body);

        if (!data.product_id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing product_id" })
            };
        }

        // Simulating adding to cart (You should integrate a real database)
        const responseMessage = {
            version: "v2",
            content: {
                messages: [
                    {
                        type: "text",
                        text: `✅ Product ID ${data.product_id} has been added to your cart!`
                    }
                ]
            }
        };

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(responseMessage)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to process request" })
        };
    }
};
