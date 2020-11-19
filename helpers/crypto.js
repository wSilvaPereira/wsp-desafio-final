const crypto = require('crypto');

function getSalt(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, 16);
}

function sha512(senha, salt) {
  var hash = crypto.createHmac('sha512', salt); // Algoritmo de cripto sha512
  hash.update(senha);
  var hash = hash.digest('hex');
  return {
    salt,
    hash,
  };
}

function getPassAndSalt(password) {
  var salt = getSalt(16);
  var senhaESalt = sha512(password, salt); // Pegamos a senha e o salt
  // console.log(senhaESalt.hash, senhaESalt.salt);
  return { hash: senhaESalt.hash, salt: senhaESalt.salt };
}

function isLoginValid(userPass, salt, hash) {
  let userHash = sha512(userPass, salt);
  return hash === userHash.hash;
}

module.exports = { getPassAndSalt, isLoginValid };
