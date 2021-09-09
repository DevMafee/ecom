// Import the Commerce module
import Commerce from '@chec/commerce.js';

// Create a Commerce instance
let commerce = null;
function getCommerce(commercePublicKey){
    if(commerce){
        return commerce;
    }else{
        const publicKey = commercePublicKey || process.env.COMMERCE_PUBLIC_KEY;
        const devEnvironment = process.env.NODE_ENV === 'development';
        if(devEnvironment && !publicKey){
            throw Error('Commerce Public Key is Not Defined');
        }

        commerce = new Commerce(publicKey, devEnvironment);
        return commerce;
    }
}

export default getCommerce;