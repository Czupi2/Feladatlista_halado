let illeszto_string="";
let elemszam=0;
let osztaly="/";
let osztaly1="/";
let osztaly2="/";
let osztaly3="/";
let event_value="";
$("#add_button").click(() => {
  elemszam++;
  illeszto_string='<div class="list_item"><li class="item '+elemszam+'">'+$("#todo_szoveg").val()+'</li>';
  illeszto_string=illeszto_string+'<input type="image" class="okey_button '+elemszam+'" src="./elemek/646195_done_ok_right_success_tick_icon.svg"></input>';
  illeszto_string=illeszto_string+'<input type="image" class="del_button '+elemszam+'" src="./elemek/3643729_bin_delete_garbage_rubbish_trash_icon.svg"></input>';
  illeszto_string=illeszto_string+'</div>';
  $("ul").append(illeszto_string);
 });
 $("ul").click((elem) => {
  event_value=elem.target.className;
   if (event_value.slice(0,11)==='okey_button') {
     /* if this is the okey_button  */
      osztaly=".item."+event_value.slice(12);
      $(osztaly).css('text-decoration','line-through');
   } else {
     if (event_value.slice(0,10)==='del_button') {
       /* if this is the del_button */
       osztaly1=".item."+event_value.slice(11);
       osztaly2=".okey_button."+event_value.slice(11);
       osztaly3=".del_button."+event_value.slice(11);
       $(osztaly3).remove();
       $(osztaly2).remove();
       $(osztaly1).remove();
     }
   }
});  