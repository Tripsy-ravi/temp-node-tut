// console.log(global);
//
// global.setTimeout(() => {
//     console.log('in the timeout');
//     clearInterval(int);
// }, 3000);
//
// const int = setInterval(() => {
//     console.log('Just Go To Hell');
// },1000);

// console.log(__dirname);
// console.log(__filename);

// const imp = require('os');
//
// console.log(imp.platform(),imp.homedir());
const fs = require('fs')

// fs.readFile('/Users/tripa/Desktop/Palak_Gurrani_assignment.docx' , (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data.toString())
// });

// fs.writeFile('/Users/tripa/Desktop/Palak_Gurrani_assignment.docx','Hello World, The matter of writing this letter to you is to tell the pain of a mother that I am seeing from last 2-3 months since I have changed my location in the city. Actually in front of my house there used to live a family comprising of a married couple and their one daughter and a son. The mother name is Shruti and she is a patient of schizophrenic disease. You know it’s a serious psychological disorder and it’s very difficult to behave normally in such type of diseases but the main problem arises when even your family cannot understand your grievances. \n' +
//     'Shruti’s kids always complaints of her that she always used to listen strange sounds and commands and orders them to do something which makes no sense. She used to doubt their actions and daily activities as like they are doing some illegal acts and trying to ruin the reputations of their family by indulging in bad activities like wandering around with opposite gender or trying to go against their family rituals. This has created a lot of miscommunication between them and as a result they both very rarely faces their mom and used to stay away from her. They never take their mom to their school functions and always keep their things away from their mom.\n' +
//     'Her husband used to scold her in front of everyone due to her actions. Knowing that she is not doing all of this intentionally, he used to think that she is pretending to be a schizophrenic patient for doing all this. Her absence of feeling and emotions sometimes left him frustrated as many times she smiles on unhappy incidents and starts crying on enjoying moments. Her thought issue makes him speechless when she abruptly jumps over topic to topic. She tries to control herself but her husband seems to be so tired that he used to travel alone everywhere and never wants his wife to accompany him.\n' +
//     'Her strange manner, pacing around, posturing or shaking forward and backward for no reason makes all of them full of shame and they used to keep her at home as many times as possible and also her Delusions of keeping tracked or watched by someone makes them so dejected that they didn’t allow him to meet someone other than them. They decided that it is preferable that Shruti should talk and be with her imaginary persons so that they should not be ashamed in front of someone.\n' +
//     'It\'s understandable that it’s tough for all of them to handle all this behavior of Shruti but they should understand that she is also a human and she also deserves love and care. Her daughter complaint about her instability and her strictness over their freedom but what about her love being a mother. Her husband used to scold her in front of everyone for so many things but what about her sacrifices that she has made from last so many years and continuing even in such condition.\n' +
//     'I see her every evening sitting at the terrace weeping so badly and there was not a single one to console her from her family. One thing I understood from this. Disease and pains never hurts but it’s your close ones. They can make you happy through their love and care and they can make you depressed through their negligence. She is a mother, a wife for her family but they treat her none less than a patient rather than treating her as their family and that is the biggest dilemma.\n',() => {
//        console.log('file was written');
// });
// if(!fs.existsSync('/Users/tripa/Desktop/Node-JS')) {
//     fs.mkdir('/Users/tripa/Desktop/Node-JS', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// }
// else{
//     fs.rmdir('/Users/tripa/Desktop/Node-JS', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// }

// const http = require('http');
//
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
//
//     res.setHeader('Content-Type', 'text/html');
//
//     let path = './views/';
//     switch(req.url){
//         case '/':
//             path += 'index.html';
//             break;
//         case '/about':
//             path += 'about.html';
//             break;
//         default:
//             path += '404.html'
//             break;
//     }
//
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {
//             res.write(data);
//             res.end();
//         }
//     });
// });
//
// server.listen(3000,'localhost',() => {
//     console.log('listening for request on port 3000');
// });

// const peter = 'Peter';
// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }
//
// sayHi(peter);

// const name = require('./people.js');
//
// const sayHi = require('./names.js');
//
// sayHi(name.john);
// sayHi(name.peter);
//
// console.log(name)

// require('./names.js');
// const data = require('./people.js');
//
// console.log(data);

// const os = require('os');
//
// const user = os.userInfo();
// console.log(user);
//
// console.log(`The System Uptime is ${os.uptime()} seconds`)
//
// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS);

// const path = require('path');
//
// console.log(path.sep);
//
// const filePath = path.join('/content/','subfolder','test.txt');
//
// console.log(filePath);
//
// const base = path.basename(filePath)
// console.log(base);
//
// const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
// console.log(absolute);

// const { readFileSync,writeFileSync } = require('fs');
//
// const first = readFileSync('./content/subfolder/first.txt','utf8')
// const second = readFileSync('./content/subfolder/second.txt','utf8')
//
// console.log(first,second);

// const http = require('http')
//
// const server = http.createServer((req,res) =>{
//     if(req.url === '/') {
//         res.end('Welcoe to our home page')
//     }
//     if(req.url === '/about'){
//         res.end('Here is our short history')
//     }
//     res.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find the page you are looking for</p>
//         <a href="/">back home</a>
//     `)
// })
//
// server.listen(5000);

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);