var e=document.querySelector(".container"),l=document.querySelector(".append-row"),t=document.querySelector(".remove-row"),r=document.querySelector(".append-column"),n=document.querySelector(".remove-column"),c=document.querySelector(".field"),d=4,o=4;l.addEventListener("click",function(){if(d<10){l.disabled=!1,d++;for(var e=c.insertRow(),t=0;t<c.rows[0].cells.length;t++)e.insertCell()}d>=10&&(l.disabled=!0)}),t.addEventListener("click",function(){if(d>2){t.disabled=!1,d--;var e=c.querySelectorAll("tr");e[e.length-1].remove()}d<=2&&(t.disabled=!0)}),r.addEventListener("click",function(){o<10&&(r.disabled=!1,o++,function(e){for(var l=e.querySelectorAll("table tr"),t=0;t<l.length;t++){var r=document.createElement("td");l[t].append(r)}}(e)),o>=10&&(r.disabled=!0)}),n.addEventListener("click",function(){o>2&&(n.disabled=!1,o--,function(e){for(var l=e.querySelectorAll("table tr"),t=0;t<l.length;t++)l[t].cells[l[t].cells.length-1].remove()}(e)),o<=2&&(n.disabled=!0)});
//# sourceMappingURL=index.f8cd7e46.js.map
