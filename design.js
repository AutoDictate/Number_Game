var a = Math.floor(Math.random()*100);
var count=1;

function guessNum(){
    var val = parseInt(document.getElementById("number").value);
    //console.log(typeof(val));
    if(val==a)
    {
        if(count==1)
        {
            document.getElementById("res").textContent="Wow!, You Find It with Your First Attempt";
        }
        else 
        {
            
            document.getElementById("res").textContent="Congragulations!!! You Took "+count+' Try Find The Number';
        }
    }
    else if(val >a)
    {
        document.getElementById("res").textContent='Try Some Smaller number';
        count++;
    }
    else
    {
        document.getElementById("res").textContent='Try Some Greater number';
        count++;
    }
}