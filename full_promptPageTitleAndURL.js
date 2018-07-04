javascript:(
	/*
		開いているページのタイトルとURLをプロンプトウィンドウに表示して取得
		ニコ動・ニコ静・pixiv（イラスト、小説、ユーザーページ）の場合は専用の短縮URL化
	*/
	function() {
		var url = location.href;
		var pre = '^https?://';
		var esc = function(s) { return s.replace(/([\.\/])/g, '\\$1') };
		var nptn = pre + '(?:www.nicovideo.jp/watch/|seiga.nicovideo.jp/seiga/)([si]m\\d+)';
		var pptn = pre + 'www.pixiv.net/';
		var nreg = new RegExp(esc(nptn)+'.*$');
		var preg = new RegExp(esc(pptn));
		if (url.match(nreg)) {
			url = url.replace(nreg, 'http://nico.ms/$1')
		} else if (url.match(preg)) {
			var f = [
				['member.php', 'id', 'u'],
				['member_illust.php', 'illust_id', 'i'],
				['novel/show.php', 'id', 'n']
			];
			for (var i=0; i<f.length; i++) {
				preg = new RegExp(esc(pptn + f[i][0] + '\\?(?:[^&]+&)?' + f[i][1] + '=(\\d+)') + '.*$');
				if (url.match(preg)) {
					url = url.replace(preg, 'https://pixiv.net/' + f[i][2] + '/$1');
					break
				}
			}
		}
		prompt('Title%20+%20URL', document.title + ' ' + url)
	}
)();