const url = require('url')

const address = 'https://www.meuovo.com.br/catalog?produtos=ovo-caipira'
const parsedUrl = new url.URL(address)

console.log(parsedUrl.hash);
console.log(parsedUrl.host);
console.log(parsedUrl.hostname);
console.log(parsedUrl.href);
console.log(parsedUrl.origin);
console.log(parsedUrl.password);
console.log(parsedUrl.pathname);
console.log(parsedUrl.searchParams.get('produtos'));
console.log(parsedUrl.searchParams);
console.log(parsedUrl.search);