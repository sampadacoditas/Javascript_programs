//function returning function 
function myfunc()
{
    function hello()
    {
        return "hell world";
    }
    return hello;
}
const ans=myfunc();
console.log(ans());
//55 doubt