javascript:(
	/*
		Twitterで選択している画像をオリジナルのサイズで別窓に開く（現在の1つだけ）
		選択するまでもなく複数いっぺんに開くなら「twitter画像原寸ボタン」が最高:
		https://chrome.google.com/webstore/detail/twitter%E7%94%BB%E5%83%8F%E5%8E%9F%E5%AF%B8%E3%83%9C%E3%82%BF%E3%83%B3/kmcomcgcopagkhcbmcmcfhpcmdolfijg
		あとアイコン画像は無理
	*/
	function() {
		var s = document.querySelector(".media-image").src;
		s = s.replace(/(:large)?$/, ":orig");
		window.open(s);
	}
)();