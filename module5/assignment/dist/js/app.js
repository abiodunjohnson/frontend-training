"use strict";!function(){var t=document.getElementById("searchForm"),e=document.getElementById("searchInput"),n=document.getElementById("headerInfo"),i={img0:document.getElementById("img1"),img1:document.getElementById("img2"),img2:document.getElementById("img3")};t.addEventListener("submit",function(t){t.preventDefault(),n.textContent="Loading...",axios.get("http://api.giphy.com/v1/gifs/search?q="+e.value+"&api_key=jwSnPSGXDTp7oqP7M3e3HQvuSJQYj73G&limit=3").then(function(t){n.textContent="",t.data.data.forEach(function(t,e){i["img"+e].src=t.images.original.url})}).catch(function(t){console.log(t),n.textContent=t})})}();
//# sourceMappingURL=maps/app.js.map