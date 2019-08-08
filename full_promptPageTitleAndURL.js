javascript:(
	/*
		「現ページタイトル＆URL取得」
		
		現在開いているページのタイトルとURLをプロンプトウィンドウに表示して取得。
		ニコ動・ニコ静・pixiv（イラスト、小説、ユーザーページ）の場合は専用の短縮URL化。
	*/
	() => {
		let url = location.href;
		const esc = s => s.replace(/([\.\/])/g, String.raw`\$1`);
		const nPtn = String.raw`^https?://(?:www.nicovideo.jp/watch/|seiga.nicovideo.jp/seiga/)([si]m\d+)`;
		const pPtn = '^https?://www.pixiv.net/';
		const nReg = new RegExp(`${esc(nPtn)}.*$`);
		let pReg = new RegExp(esc(pPtn));
		if (url.match(nReg)) {
			url = url.replace(nReg, 'https://nico.ms/$1');
		} else if (url.match(pReg)) {
			const f = [
				['member.php', 'id', 'u'],
				['member_illust.php', 'illust_id', 'i'],
				['novel/show.php', 'id', 'n']
			];
			for (let i=0; i<f.length; i++) {
				pReg = new RegExp(String.raw`${esc(pPtn)}${f[i][0]}\?(?:[^&]+&)?${f[i][1]}=(\d+).*$`);
				// console.log(pReg);
				if (url.match(pReg)) {
					url = url.replace(pReg, `https://pixiv.net/${f[i][2]}/$1`);
					break;
				}
			}
		}; // minifier.org用セミコロン
		prompt('Title + URL', `${document.title} ${url}`);
	}
	/*
		2019/08/08
		v1.0.1
		・なんか強そうな書き方に挑戦。
		
		2018/07/05
		v1.0.0
		・公開。
	*/
)();