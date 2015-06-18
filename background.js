var q = "";

// How do I get ID to pass?
chrome.contextMenus.create({"title": "ヤフオク検索",
	"contexts": ["selection"],
	"onclick": function(ret) {
		q = ret.selection;
		alert(q);
		}});
