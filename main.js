function myFunction()
{
    let item1=parseInt(document.getElementById("item1").value);
    let item2=parseInt(document.getElementById("item2").value); 
    let z=parseInt(item2/100*item1);
    document.getElementById("item3").value=z;

    var text=item1+z;
    document.getElementById("item4").value=text;
    document.getElementById("ans").innerText="Your Total   :    "+text;
}