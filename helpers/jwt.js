const jwt = require('jsonwebtoken');

const generarJWT = (uid) =>{

    return new Promise( ( resolve, reject )=>{

        const payload = {
            uid
        }
    
        jwt.sign( payload, process.env.JWT_SECRET, { expiresIn: '10m'},
        (err, token) =>{
            if ( err ) {
                console.log(err);
                reject('No se pudo generar el JWT');

            }else{
                resolve( token )
            }
        })
    });


}

module.exports = { generarJWT }