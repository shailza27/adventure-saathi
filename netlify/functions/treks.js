exports.handler = async function () {

const response = await fetch(process.env.GOOGLE_SCRIPT_URL);

const data = await response.json();

return {
statusCode: 200,
headers: {
"Access-Control-Allow-Origin": "*"
},
body: JSON.stringify(data)
};

};
