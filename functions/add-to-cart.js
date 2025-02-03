exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  // Process data here
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Added to cart!" })
  };
};
