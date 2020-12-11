var go_button=document.getElementById('go-button');
var codename;
var rawcode;
var current_url;
var array_url;
var final_url;

go_button.onclick=function()
{
    codename=document.getElementById('input-go')
    rawcode=codename.value;
    if(rawcode!="")
    {
    current_url=window.location.href;
    array_url=current_url.split("/");
    final_url=array_url[0]+"//"+array_url[2]+"/"+rawcode;
    console.log(final_url);
    var the_linker=document.getElementById('linker');
    var wokk=final_url.link(final_url);
    the_linker.innerHTML=wokk;
    }
    else
    alert("put you code in the box!!!");
}
