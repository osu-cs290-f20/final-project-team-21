/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name:Thanaruch Chaisupat
 * Email:Chaisupt@oregonstate.edu
 */

 //sec1.1

 var modal_sell=document.getElementById('sell-something-modal');
 var button_sell_orange=document.getElementById('sell-something-button');
 button_sell_orange.onclick=function ()
 {
    modal_sell.style.display="block";
 }

 //sec1.2
 var modal_closebutt=document.getElementById('modal-close');
 var modal_cancelbutt=document.getElementById('modal-cancel');
//post info
 var input_textp=document.getElementById('post-text-input');
 var input_photop=document.getElementById('post-photo-input');
 var input_pricep=document.getElementById('post-price-input');
 var input_cityp=document.getElementById('post-city-input');


 function closeclearfill()
 {
    //hide back/close window 
    modal_sell.style.display="none";
     //set val back
     input_textp.value='';
     input_photop.value='';
     input_pricep.value='';
     input_cityp.value='';
     //change the condition back to default
     document.getElementById('post-condition-new').click();
 }

 modal_closebutt.onclick=function()
 {
    closeclearfill();
 }

modal_cancelbutt.onclick=function()
{
    closeclearfill();
}
window.onclick=function(event)
{
    if(event.target==modal_sell)
    {
        closeclearfill();
    }
}

//1.3
function tell_condition(){
    var selectedcondition=document.querySelector('input[name="post-condition"]:checked');
    return selectedcondition.value;
}

function tell_idv_blank(idx)
{
    if(idx=='')
    {
    alert("somethings in the text fill is empty");
    return 1;
    }
    else return 0;
}

function tell_blank(){
    //1 = true
    if(
        tell_idv_blank(input_textp.value)==1
        ||
        tell_idv_blank(input_cityp.value)==1
        ||
        tell_idv_blank(input_photop.value)==1
        ||
        tell_idv_blank(input_pricep.value)==1
    )
    {
        return 1;
    }
    else
    return 0;
    
}

function check_city(city_list,current_city)
{
    var x=0;
    for(i=0;i<city_list.options.length;i++)
    {
        if(city_list.options[i].value==current_city)
        x=1;
    }
    return x;
}

var modal_create_post=document.getElementById('modal-accept');
modal_create_post.onclick=function()
{
    if(tell_blank()==1)
    {
        return;
    }
    //outest count 1st div
    var poster=document.createElement('div');
    poster.classList.add('post');
    poster.setAttribute('data-price',input_pricep.value);
    poster.setAttribute('data-city',input_cityp.value);
    poster.setAttribute('data-condition',tell_condition());
    
    //2div
    var content_con=document.createElement('div');
    content_con.classList.add('post-contents');

    //innest

        //1stdiv
        var imge=document.createElement('div');
        imge.classList.add('post-image-container');
        var innertimg=document.createElement('img');
        innertimg.src=input_photop.value;
        innertimg.alt=input_textp.value;
        imge.appendChild(innertimg);


        //2nddiv
        var infot=document.createElement('div');
        infot.classList.add('post-info-container');
            var aa=document.createElement('a');
            aa.href="#";
            aa.classList.add('post-title');
            var textINaa=document.createTextNode(input_textp.value);
            aa.appendChild(textINaa);
                //if not work using
                //  aa.append(input_textp.value);
            var spanone=document.createElement('span');
            spanone.classList.add('post-price');
            var textONspanone=document.createTextNode("$"+input_pricep.value);
            spanone.appendChild(textONspanone);
                //if not work using
                //  spanone.append("$"+input_pricep.value);
            var spantwo=document.createElement('span');
            spantwo.classList.add('post-city');
            var textONspantwo=document.createTextNode("("+input_cityp.value+")");
            spantwo.appendChild(textONspantwo);
                //if not work using
                //  spantwo.append(input_cityp.value);
            //put in infot
            infot.appendChild(aa);
            infot.appendChild(spanone);
            infot.appendChild(spantwo);



    //combine stage
    poster.appendChild(content_con);
    content_con.appendChild(imge);
    content_con.appendChild(infot);

    // //pubish stage
    // var containers=event.currentTarget;
    // var posted_container=containers.querySelector('#posts');
    // posted_container.appendChild(poster);
    // var testt=document.createTextNode("testtest");
    // var test=document.createElement('div');
    // test.appendChild(testt);
    var posted_container=document.getElementById("posts");
    posted_container.appendChild(poster);

    //after this line checking city list
    var citylist=document.getElementById('filter-city');
    if(check_city(citylist,input_cityp.value)==0)
    {
        var newcity=document.createElement('option');
        var textof_city=document.createTextNode(input_cityp.value);
        newcity.appendChild(textof_city);
        citylist.appendChild(newcity);
    }
    
//************************ */
    closeclearfill();
}

//2
function correction_array(mainarray,idvarray)
{
    var numofpost=document.getElementsByClassName("post").length;
    for(i=0;i<numofpost;i++)
    {
        if(mainarray[i]==1)
        {
            if(idvarray[i]==0)
            mainarray[i]=0;
        }
    }
}


// function search_name()
// {
//     var input2_textfill=document.getElementById("filter-text");
//     var input2_filtertext=input2_textfill.value.toUpperCase();
//     var input2_section=document.getElementById("posts");
//     var input2_eachpost=document.getElementsByClassName("post");
//     var posted=input2_section.getElementsByClassName("post-title");
//     var txtvalue;
//     for(i=0; i<posted.length; i++)
//     {
//         txtvalue= posted[i].textContent || posted[i].innerText;
//         if(txtvalue.toUpperCase().indexOf(input2_filtertext)>-1)
//         {
//             input2_eachpost[i].style.display="";
//         }
//         else
//         {
//             input2_eachpost[i].style.display="none";
//         }
//     }
//     // if(input2_textfill.value=='')
//     // {
//     //     for(i=0; i<input2_eachpost.length; i++)
//     //     {
//     //         input2_eachpost[i].style.display="";
//     //     }
//     // }

// }

function searchwa_name(mainarray)
{
    if(document.getElementById("filter-text").value!='')
    {
    var input2_textfill=document.getElementById("filter-text");
    var input2_filtertext=input2_textfill.value.toUpperCase();
    var input2_section=document.getElementById("posts");
    var input2_eachpost=document.getElementsByClassName("post");
    var posted=input2_section.getElementsByClassName("post-title");
    var txtvalue;

    var idvarray=[];
    var numofpost=document.getElementsByClassName("post").length;
    for(i=0; i<numofpost; i++)
    {
        idvarray.push(0);
    }


    for(i=0; i<posted.length; i++)
    {
        txtvalue= posted[i].textContent || posted[i].innerText;
        if(txtvalue.toUpperCase().indexOf(input2_filtertext)>-1)
        {
            // input2_eachpost[i].style.display="";
            idvarray[i]=1;
        }
        else
        {
            // input2_eachpost[i].style.display="none";
            idvarray[i]=0;
        }
    }
    correction_array(mainarray,idvarray);
    }
}


// function search_city()
// {
    
    // var input3_textfill=document.getElementById("filter-city");
    // var input3_selectedcity=input3_textfill.options[input3_textfill.selectedIndex].value;
    // var input3_section=document.getElementById("posts");
    // var input3_eachpost=document.getElementsByClassName("post");
    // var user_value;
    // // console.log(input3_selectedcity);
    // // if(input3_selectedcity=="")
    // // {
    // //     // console.log("Any work");
    // //     for(i=0; i<input3_eachpost.length; i++)
    // //     {
    // //         input3_eachpost[i].style.display="";
    // //     }
    // // }
    // // else
    // // {
    // for(i=0; i<input3_eachpost.length; i++)
    // {
    //     user_value=input3_eachpost[i].getAttribute("data-city");
    //     if(user_value==input3_selectedcity)
    //     {
    //         input3_eachpost[i].style.display="";
    //     }
    //     else
    //     {
    //         input3_eachpost[i].style.display="none";
    //     }
    // }
    // // }
// }

function searchwa_city(mainarray)
{
    var input3_textfill=document.getElementById("filter-city");
    var input3_selectedcity=input3_textfill.options[input3_textfill.selectedIndex].value;
    if(input3_selectedcity!="")
    {
    
    var input3_section=document.getElementById("posts");
    var input3_eachpost=document.getElementsByClassName("post");
    var user_value;

    var idvarray=[];
    var numofpost=document.getElementsByClassName("post").length;
    for(i=0; i<numofpost; i++)
    {
        idvarray.push(0);
    }
    // console.log(input3_selectedcity);
    // if(input3_selectedcity=="")
    // {
    //     // console.log("Any work");
    //     for(i=0; i<input3_eachpost.length; i++)
    //     {
    //         input3_eachpost[i].style.display="";
    //     }
    // }
    // else
    // {
    for(i=0; i<input3_eachpost.length; i++)
    {
        user_value=input3_eachpost[i].getAttribute("data-city");
        if(user_value==input3_selectedcity)
        {
            idvarray[i]=1;
        }
        else
        {
            idvarray[i]=0;
        }
    }
    correction_array(mainarray,idvarray);
    // }
    }
}

// function search_price()
// {
//     var inputs_max=document.getElementById("filter-max-price").value;
//     var inputs_min=document.getElementById("filter-min-price").value;
//     var pricedata;
//     var inputs_eachpost=document.getElementsByClassName("post");
//     if(inputs_max=='' && inputs_min=='')
//     return;
//     //have min
//     if(inputs_max=='' && inputs_min!='')
//     {
//         for(i=0; i<inputs_eachpost.length; i++)
//         {
//             pricedata=parseInt(inputs_eachpost[i].getAttribute("data-price"));
//             if(pricedata>=inputs_min)
//                 inputs_eachpost[i].style.display="";
//             else
//                 inputs_eachpost[i].style.display="none";
//         }
//     }
//     //have max
//     if(inputs_max!='' && inputs_min=='')
//     {
//         for(i=0; i<inputs_eachpost.length; i++)
//         {
//             pricedata=parseInt(inputs_eachpost[i].getAttribute("data-price"));
//             if(pricedata<=inputs_max)
//                 inputs_eachpost[i].style.display="";
//             else
//                 inputs_eachpost[i].style.display="none";
//         }
//     }
//     //have both
//     if(inputs_max!='' && inputs_min!='')
//     {
//         for(i=0; i<inputs_eachpost.length; i++)
//         {
//             pricedata=parseInt(inputs_eachpost[i].getAttribute("data-price"));
//             if(pricedata<=inputs_max && pricedata>=inputs_min)
//                 inputs_eachpost[i].style.display="";
//             else
//                 inputs_eachpost[i].style.display="none";
//         }
//     }
// }

function searchwa_price(mainarray)
{
    var idvarray=[];
    var numofpost=document.getElementsByClassName("post").length;
    for(i=0; i<numofpost; i++)
    {
        idvarray.push(0);
    }
    
    var inputs_max=document.getElementById("filter-max-price").value;
    var inputs_min=document.getElementById("filter-min-price").value;
    var pricedata;
    var inputs_eachpost=document.getElementsByClassName("post");
    if(inputs_max=='' && inputs_min=='')
    return;
    //have min
    if(inputs_max=='' && inputs_min!='')
    {
        for(i=0; i<inputs_eachpost.length; i++)
        {
            pricedata=parseInt(inputs_eachpost[i].getAttribute("data-price"));
            if(pricedata>=inputs_min)
                idvarray[i]=1;
            else
                idvarray[i]=0;
        }
    }
    //have max
    if(inputs_max!='' && inputs_min=='')
    {
        for(i=0; i<inputs_eachpost.length; i++)
        {
            pricedata=parseInt(inputs_eachpost[i].getAttribute("data-price"));
            if(pricedata<=inputs_max)
                idvarray[i]=1;
            else
                idvarray[i]=0;
        }
    }
    //have both
    if(inputs_max!='' && inputs_min!='')
    {
        for(i=0; i<inputs_eachpost.length; i++)
        {
            pricedata=parseInt(inputs_eachpost[i].getAttribute("data-price"));
            if(pricedata<=inputs_max && pricedata>=inputs_min)
                idvarray[i]=1;
            else
                idvarray[i]=0;
        }
    }
    correction_array(mainarray,idvarray);
}

function empty_condi()
{
    var box_new=document.getElementById("filter-condition-new");
    var box_excellent=document.getElementById("filter-condition-excellent");
    var box_good=document.getElementById("filter-condition-good");
    var box_fair=document.getElementById("filter-condition-fair");
    var box_poor=document.getElementById("filter-condition-poor");
    if(box_new.checked || box_excellent.checked || box_good.checked || box_fair.checked || box_poor.checked)
    return false;
    else
    return true;
}

function check_each(condi, array, checker,role)
{
    if(condi.checked)
    {
        if(condi.value==checker)
        {
            array[role]=1;
        }
    }
}

function search_eachcon(role, array, post_condition)
{
    var box_new=document.getElementById("filter-condition-new");
    var box_excellent=document.getElementById("filter-condition-excellent");
    var box_good=document.getElementById("filter-condition-good");
    var box_fair=document.getElementById("filter-condition-fair");
    var box_poor=document.getElementById("filter-condition-poor");
    check_each(box_new,array,post_condition,role);
    check_each(box_excellent,array,post_condition,role);
    check_each(box_good,array,post_condition,role);
    check_each(box_fair,array,post_condition,role);
    check_each(box_poor,array,post_condition,role);
    
}

// function search_condition()
// {
//     if(empty_condi())
//     return;
    
    
//     var numofpost=document.getElementsByClassName("post").length;
//     var postarray=[];
//     for(i=0; i<numofpost; i++)
//     {
//         postarray.push(0);
//     }

//     var posted=document.getElementsByClassName("post");
//     for(i=0; i<numofpost; i++)
//     {
//         search_eachcon(i,postarray,posted[i].getAttribute("data-condition"));
//     }

//     for(i=0; i<numofpost; i++)
//     {
//         if(postarray[i]==1)
//         {
//             posted[i].style.display="";
//         }
//         if(postarray[i]==0)
//         {
//             posted[i].style.display="none";
//         }
//     }

// }

function searchwa_condition(mainarray)
{
    if(empty_condi())
    return;
    
    
    var numofpost=document.getElementsByClassName("post").length;
    var postarray=[];
    for(i=0; i<numofpost; i++)
    {
        postarray.push(0);
    }

    var posted=document.getElementsByClassName("post");
    for(i=0; i<numofpost; i++)
    {
        search_eachcon(i,postarray,posted[i].getAttribute("data-condition"));
    }
    correction_array(mainarray,postarray);
    
    

}

function displayerr(mainarray)
{
    var posted=document.getElementsByClassName("post");
    var numofpost=document.getElementsByClassName("post").length;
    for(i=0; i<numofpost; i++)
    {
        if(mainarray[i]==1)
        {
            posted[i].style.display="";
        }
        if(mainarray[i]==0)
        {
            posted[i].style.display="none";
        }
    }
}

var filter_search_button=document.getElementById("filter-update-button");
filter_search_button.onclick=function()
{
    for(i=0; i<document.getElementsByClassName("post").length; i++)
        {
            document.getElementsByClassName("post")[i].style.display="";
        }
        var numofpost=document.getElementsByClassName("post").length;
        var mainarray=[];

        for(i=0; i<numofpost; i++)
        {
            mainarray.push(1);
        }

        
    // search_name();
    // if(document.getElementById("filter-city").options[document.getElementById("filter-city").selectedIndex].value!='')
    // search_city();
    // search_price();
    // search_condition();

    searchwa_name(mainarray);
    searchwa_city(mainarray);
    searchwa_price(mainarray);
    searchwa_condition(mainarray);

    displayerr(mainarray);
}

