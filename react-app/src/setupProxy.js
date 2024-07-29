const createProxyMiddleware=require('http-proxy-middleware');
const {env}=require('process');

const target="https://localhost:7195/";

const context=[
    "/api/HackersAPI/GetStories"
];

module.exports = function(app)
{
    const appProxy= createProxyMiddleware(context,{
    target:target,
    secure: false
});

app.use(appProxy)
}