(function(){
	
	var req = new XMLHttpRequest();
	req.open("GET","http://route.showapi.com/255-1?showapi_appid=42245&showapi_sign=4c0b2ff613004aba89ecb56a43d604fb");
	req.send();
	req.onload = function(){
		var datas = JSON.parse(req.response);
		var contentlist = datas.showapi_res_body.pagebean.contentlist;
		console.log(contentlist);
		Content(document.getElementById("mainContent"),contentlist);
	};
	
	
	function Content(superEle,contentlist){
		if(!contentlist){
			return;
		}
		contentlist.forEach(function(data){
			var userinfo = document.createElement("section");
			userinfo.className = "userInfo";
			var headerImage = document.createElement("div");
			headerImage.className = "headerImage";
			headerImage.style.background = "url("+data.profile_image+") no-repeat center";
			userinfo.appendChild(headerImage);
			var userName = document.createElement("div");
			var userNameH3 = document.createElement("h3");
			userNameH3.innerHTML = data.name;
			var userNameP = document.createElement("p");
			userNameP.innerHTML = data.create_time;
			userName.appendChild(userNameH3);
			userName.appendChild(userNameP);
			userinfo.appendChild(userName);
			
			var pageTitle = document.createElement("section");
			pageTitle.className = pageTitle;
			pageTitle.innerHTML = data.text
			var mediaContent = document.createElement("section");
			mediaContent.className = mediaContent;
			mediaContent.innerHTML = "这是内容";
			
			var tools = document.createElement("section");
			tools.className = tools;
			var toolsul = document.createElement("ul");
			var li1 = document.createElement("li");
			var li2 = document.createElement("li");
			var li3 = document.createElement("li");
			var li4 = document.createElement("li");
			
			var img1 = document.createElement("img");
			img1.src = "images/shenhe_ding_pic_an.png";
			var img2 = document.createElement("img");
			img2.src = "images/shenhe_ding_pic_an.png";
			var img3 = document.createElement("img");
			img3.src = "images/shenhe_ding_pic_an.png";
			var img4 = document.createElement("img");
			img4.src = "images/shenhe_ding_pic_an.png";
			
			var span1 = document.createElement("span");
			span1.innerHTML = data.love;
			var span2 = document.createElement("span");
			span2.innerHTML = data.love;
			var span3 = document.createElement("span");
			span3.innerHTML = data.love;
			var span4 = document.createElement("span");
			span4.innerHTML = data.love;
			
			li1.appendChild(img1);
			li2.appendChild(img2);
			li3.appendChild(img3);
			li4.appendChild(img4);
			
			li1.appendChild(span1);
			li2.appendChild(span2);
			li3.appendChild(span3);
			li4.appendChild(span4);
			
			toolsul.appendChild(li1);
			toolsul.appendChild(li2);
			toolsul.appendChild(li3);
			toolsul.appendChild(li4);
			tools.appendChild(toolsul);
			
			superEle.appendChild(userinfo);
			superEle.appendChild(pageTitle);
			superEle.appendChild(mediaContent);
			superEle.appendChild(tools);
		});
	}
	
	
	
	
})();
