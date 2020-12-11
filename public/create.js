var input_words=document.getElementById("filter-words");
var inputs_selectedwords=input_words.options[input_words.selectedIndex].value;
// var data = require('./../database.json');
var coder=0;

// var checkWord = require('check-word/index.js');
// var words     = checkWord('en');

var word_array=[ ];

function tell_idv_blank(idx)
{
    if(idx=='')
    {
    alert("somethings in the fills is empty");
    return 1;
    }
    else return 0;
}

// function tell_blank_main(){
//     //1 = true
//     if(
//         tell_idv_blank(inputs_selectedtime)==1
//         ||
//         tell_idv_blank(inputs_selectedwords)==1
//         ||
//         tell_idv_blank()==1

//     )
//     {
//         return 1;
//     }
//     else
//     return 0;
    
// }

var add_button = document.getElementById('wording-button');
var box_text=document.getElementById('word-container');
add_button.onclick=function()
{
    // console.log("click work");
    input_words=document.getElementById("filter-words");
    inputs_selectedwords=input_words.options[input_words.selectedIndex].value;

   
    var input_idv_word=document.getElementById("wording-input");
    var inputs_add_word=input_idv_word.value.toLowerCase();
    
    // console.log(inputs_add_word);
    if(tell_idv_blank(inputs_add_word)==0 && /^[a-zA-Z]+$/.test(inputs_add_word) && inputs_selectedwords!='')
    {
        // if(words.check(inputs_add_word))
        // {
            console.log(/^[a-zA-Z]+$/.test(inputs_add_word));
            var p_new=document.createElement('p');
            p_new.classList.add('container-words');
            var p_text;
            if(word_array.length===0)
            p_text=document.createTextNode(inputs_add_word);
            else
            p_text=document.createTextNode(","+inputs_add_word);
            word_array.push(inputs_add_word);
            p_new.appendChild(p_text);
            box_text.appendChild(p_new);
            console.log(word_array);
            input_idv_word.value="";
        // }
    //     else
    //     alert('your enter context not the English word please try again');
    }
    else
    {
        alert("you text incorrect format; included some symbol or you not select the upper part");
    }
    input_words=document.getElementById("filter-words");
    inputs_selectedwords=input_words.options[input_words.selectedIndex].value;
    if(word_array.length==inputs_selectedwords)
    {
        var buttonofdone=document.getElementById("done");
        buttonofdone.style.display="flex";
    }
    else
    {
        var buttonofdone=document.getElementById("done");
        buttonofdone.style.display="none";
    }
}

var done_button=document.getElementById('done');
done_button.onclick=function(){

    input_words=document.getElementById("filter-words");
    inputs_selectedwords=input_words.options[input_words.selectedIndex].value;


    if(word_array>=inputs_selectedwords)
    {
        coder++;
        var postRequest = new XMLHttpRequest();
        var reqURL = "/create/add";
        postRequest.open('POST', reqURL);
        var reqBody = JSON.stringify({
            word_count: inputs_selectedwords,
            words: word_array
        });
        
        // var code_nu=Object.keys(data).length;
        // var code_number=code_nu-1;

        postRequest.setRequestHeader('Content-Type', 'application/json');
        // postRequest.addEventListener('load', function (event) 
        // {
        // var addingpharse=document.getElementById(coding);
        // var new_code=document.createElement('h5');
        // new_code.classList.add('code-element');
        // // var text_code=document.createTextNode("code: "+code_number);
        // var text_code=document.createTextNode("code: xxxxx");
        // new_code.appendChild(text_code);
        // var new_url=document.createElement('h5');
        // new_url.classList.add('code-element');
        // // var text_url=document.createTextNode("url: "+window.location.href+"/"+code_number);
        // var text_url=document.createTextNode("url: "+window.location.href+"/xx");
        // new_url.appendChild(text_url);
        // // addingpharse.appendChild(new_code);
        // // addingpharse.appendChild(new_url);
        
        // });
        postRequest.send(reqBody);
        var addingpharse=document.getElementById('coding');
        var new_code=document.createElement('h5');
        new_code.classList.add('code-element');
        // var text_code=document.createTextNode("code: "+code_number);
        var text_code=document.createTextNode("code: "+coder);
        new_code.appendChild(text_code);
        var new_url=document.createElement('h5');
        new_url.classList.add('code-element');
        // var text_url=document.createTextNode("url: "+window.location.href+"/"+code_number);
        var current_url=window.location.href;
        var array_url=current_url.split("/");
        var final_url=array_url[0]+"//"+array_url[2]+"/"+coder;
        var text_url=document.createTextNode("url: "+final_url);
        new_url.appendChild(text_url);
        addingpharse.appendChild(new_code);
        addingpharse.appendChild(new_url);
        var firstpage=document.getElementsByClassName('create_one');
        var fp=firstpage[0];
        var secondpage=document.getElementsByClassName('hidden_share');
        var sp=secondpage[0];
        fp.style.display="none";
        sp.style.display="flex";
    }
}

var cancel_button=document.getElementById('cancel')
cancel_button.onclick=function()
{
    var home_button=document.getElementById('link_home');
    home_button.click();
}


