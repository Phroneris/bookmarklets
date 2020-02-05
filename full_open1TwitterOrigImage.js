javascript:(
	/*
		「Twitter画像原寸表示」

		Twitter内で閲覧している画像をオリジナルのサイズで別窓に開く（現在の1つだけ）。
		閲覧するまでもなく複数いっぺんに開くなら「twitter画像原寸ボタン」が最高↓
		https://chrome.google.com/webstore/detail/kmcomcgcopagkhcbmcmcfhpcmdolfijg
		意図していなかったが、アイコンやヘッダーの画像も別窓表示可能。
	*/
	() => {
		window.open(document.querySelector(`${document.querySelectorAll('[role="listitem"]').length==0 ? '[aria-modal="true"]' : `[role="listitem"]:nth-of-type(${document.URL.match(/.*\/photo\/(\d)/)[1]})`} img`).src.replace(/\?format=(\w+)&name=\w+$/, '.$1:orig'));
	}
	/*
		2020/02/05
		v1.1.1
		・「twitter画像原寸ボタン」のURLを短縮。
		・各変数の使用が一度きりなので思い切って圧縮。
		・軽微な変更。

		2019/08/08
		v1.1.0
		・2019年夏のTwitterUI改変に対応。
		・なんか強そうな書き方に挑戦。

		2018/07/05
		v1.0.0
		・公開。
	*/
)();