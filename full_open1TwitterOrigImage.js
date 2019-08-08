javascript:(
	/*
		「Twitter画像原寸表示」
		
		Twitterで選択している画像をオリジナルのサイズで別窓に開く（現在の1つだけ）。
		選択するまでもなく複数いっぺんに開くなら「twitter画像原寸ボタン」が最高:
		https://chrome.google.com/webstore/detail/twitter%E7%94%BB%E5%83%8F%E5%8E%9F%E5%AF%B8%E3%83%9C%E3%82%BF%E3%83%B3/kmcomcgcopagkhcbmcmcfhpcmdolfijg
		意図していなかったが、アイコンやヘッダーの画像も別窓表示可能。
	*/
	() => {
		const l = document.querySelectorAll('[role="listitem"]').length;
		const q = l==0 ? '[aria-modal="true"]' : `[role="listitem"]:nth-of-type(${document.URL.replace(/.*\/photo\/(\d)/, '$1')})`;
		const s = document.querySelector(`${q} img`).src.replace(/\?format=(\w+)&name=\w+$/, '.$1:orig');
		window.open(s);
	}
	/*
		2019/08/08
		v1.1.0
		・2019年夏のTwitterUI改変に対応。
		・なんか強そうな書き方に挑戦。
		
		2018/07/05
		v1.0.0
		・公開。
	*/
)();