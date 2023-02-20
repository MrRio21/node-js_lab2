let fs =require ("fs");

let productDB =JSON.parse(fs.readFileSync("products.json","utf-8")) 
console.log(productDB)  //to convert the json data 

console.log(productDB[1]);

// ------------task 2
// to connect 
const http = require("http");
const server =http.createServer (function(request,response){
  //  response.write("hi I'm here");
    const urls= request.url.split('/');
    // switch(urls[1]){
    //     case "home":
    //        // response.setHeader({'Content-type':'text/html'})
    //         let home=fs.readFileSync('home.html','utf-8');
    //         response.write(home);
    //           break;
    //         case "products":
    //             let products=JSON.stringify(productDB);
    //             response.write(products);
    //     }
        if(urls[1]=="home"){
            let home=fs.readFileSync("index.html",'utf-8');
            response.write(home);
        }
    
        else if (urls[1]=="products"&& !urls[2] ){
            let products =JSON.stringify(productDB)
            response.write(products);
    
        }
    
        else if (urls[1]=="products" && parseInt(urls[2])){
            let id = urls[2]-1
            selectedProduct= productDB[id];
            let product =JSON.stringify(selectedProduct)
            response.write(product);
            
        }   
         else
        {
            response.writeHead(404);
            response.write('<h1>notfound</h1>')
        }
   
        response.end();
})

// our server listen on port 4000
server.listen(4000, function(){
    console.log(" start server");
})

