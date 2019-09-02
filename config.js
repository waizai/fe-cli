


const { NODE_ENV } = process.env;
const [isDevelopment, isProduction] = [NODE_ENV === 'development', NODE_ENV === 'production'];
const port = 9000;




module.exports = {
    isDevelopment,
    isProduction,
    port
}