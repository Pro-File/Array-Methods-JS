console.log("Connnected..");
// common functions :
function font(){
    document.writeln(`<style> html{background: linear-gradient(to left, #ff9f43, #fec957d7); font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 2rem; display: flex; justify-content: center; align-items: center;}</style>`);
}

function refresh(){
    document.writeln(`<br> <h3 style = "font-size : 15px; font-family : 'Hind', sans-serif;"> Press Ctrl+R OR Scroll Up to Reload the Page...</h3>`);
}

// Programs :
function Ap1()
{
    font();
    var html = document.querySelector("html");
    html.style.fontSize = "18px";
    var data = [ 
       { 
            name: "kashif", 
            rollNumber: "EP123", 
            marks: { 
                OS: 75, 
                AI: 79, 
                DLD: 85 
            }
        },
        { 
            name: "Raza", 
            rollNumber: "EP058", 
            marks: { 
                OS: 89, 
                AI: 68, 
                DLD: 71 
            }  
        }, 
        { 
            name: "Zubair", 
            rollNumber: "EP102", 
            marks: { 
                OS: 57, 
                AI: 45, 
                DLD: 60 
            }  
        } 
    ];
    data.forEach(function(element){
       document.writeln(`<br>---------------------------------------<br>`);
       document.writeln(`name - ${element.name} <br>`);
       document.writeln(`Roll Number -  ${element.rollNumber} <br>`); 
       document.writeln(`Marks : <br>`);
       document.writeln(`OS - ${element.marks.OS}<br>`);
       document.writeln(`AI - ${element.marks.AI}<br>`);
       document.writeln(`DLD - ${element.marks.DLD}<br>`);
    })

    refresh();
}

function Ap2(){
    font();
    var html = document.querySelector("html");
    html.style.fontSize = "18px";

    var data = [ 
        { 
                name: "Kashif", 
                age: 23, 
                experience: 5, 
                credit: 20000 
            }, 
            { 
                name: "Raza", 
                age: 18, 
                experience: 1.5, 
                credit: 12000 
            }, 
            { 
                name: "Zubair", 
                age: 37, 
                experience: 7, 
                credit: 45000 
            }
        ];
        
        data.forEach(function(element){
            document.writeln(`<br>Name : ${element.name}<br>`);
                document.writeln(`Age : ${element.age}<br>`);
                if(element.experience>4){
                    document.writeln(`Experince : ${element.experience}<br>`);
                    document.writeln(`Credit : ${element.credit+=10000}<br>`);
                }
                else{
                    document.writeln(`Experince : ${element.experience}<br>`);
                    document.writeln(`Credit : ${element.credit}<br>`);
                }
                document.writeln(`---------------------------------------<br>`);
        });
        
    refresh();
}

function Ap3(){
    font();
    var html = document.querySelector("html");
    html.style.fontSize = "18px";

    var cart = [
        {
            item: "bag",
            quantity: 2,
            price: 2000
        },
        {
            item: "data cable",
            quantity: 4,
            price: 500
        },
        {
            item: "shoes",
            quantity: 1,
            price: 4000
        }
    ];
    
    var total = cart.reduce(function(sum,element){
        return sum = sum + (element.quantity * element.price);
    },(sum=0));

    document.writeln(`---------------------------------------<br>`);
    document.writeln(`Total Amount = ${total}<br>`);
    document.writeln(`---------------------------------------<br>`);

    refresh();
}

function Ap4(){
    font();
    var html = document.querySelector("html");
    html.style.fontSize = "18px";

    var data = [ 
        { 
                item: "laptop", 
                quantity: 73 
            },
            { 
                item: "mobile", 
                quantity: 209 
            },
            { 
                item: "wallet", 
                quantity: 790 
            },
            { 
                item: "mac", 
                quantity: 0 
            }, 
            { 
                item: "handfree", 
                quantity: 1084 
            }
        ];

    var ItemStatus = data.every(function(currentElement){
    return currentElement.item > 0;
    });
    
    if(ItemStatus == false){
    document.writeln(`---------------------------------------<br>`);
    document.writeln(`Shipment is not Allowed <br>`);
    document.writeln(`---------------------------------------<br>`);
    }

    refresh();
}

function Ap5(){
    font();
    var html = document.querySelector("html");
    html.style.fontSize = "18px";

    var data = [ 
        { 
                name: "kashif", 
                rollNumber: "EP123", 
                marks: { 
                    OS: 75, 
                    AI: 79, 
                    DLD: 85 
                }  
            },
            { 
                name: "Raza", 
                rollNumber: "EP058", 
                marks: { 
                    OS: 89, 
                    AI: 68, 
                    DLD: 71 
                }  
            },
            { 
                name: "Zubair", 
                rollNumber: "EP102", 
                marks: { 
                    OS: 57, 
                    AI: 45, 
                    DLD: 60 
                }  
            }
        ];

    var FilteredData = data.filter(function(element){
        return element.marks.AI > 60;
    })
    
    FilteredData.forEach(function(element){
        document.writeln(`<br>---------------------------------------<br>`);
        document.writeln(`name - ${element.name} <br>`);
        document.writeln(`Roll Number -  ${element.rollNumber} <br>`); 
        document.writeln(`Marks : <br>`);
        document.writeln(`OS - ${element.marks.OS}<br>`);
        document.writeln(`AI - ${element.marks.AI}<br>`);
        document.writeln(`DLD - ${element.marks.DLD}<br>`);
    }) 

    refresh();
}