var q = "",
	id;


q = window.getSelection().toString();
q = encodeURIComponent(q);

document.getElementById("yauc").setAttribute("src","http://www.ohigedokoro.xyz/ig/yahoo-auction-gadget.html?q=" + q);

