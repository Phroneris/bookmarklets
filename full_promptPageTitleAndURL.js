javascript:(
	/*
		「現ページタイトル＆URL取得」

		現在開いているページのタイトルとURLをプロンプトウィンドウに表示して取得。
		ニコ動・ニコ静・pixiv（イラスト、小説、ユーザーページ）の場合は専用の短縮URL化。
	*/
	() => {
		let url = location.href;
		const esc = s => s.replace(/([\.\/])/g, String.raw`\$1`);
		const nPtn = String.raw`^(https?)://(?:www.nicovideo.jp/watch|seiga.nicovideo.jp/(?:seiga|watch))/((?:sm|nm|im|mg)\d+)`;
		const pPtn = '^(https?)://www.pixiv.net/';
		const nReg = new RegExp(`${esc(nPtn)}.*$`);
		let pReg = new RegExp(esc(pPtn));
		if (nReg.test(url)) {
			url = url.replace(nReg, '$1://nico.ms/$2');
		} else if (pReg.test(url)) {
			const urlType = [
				['NEW', 'i', 'artworks'],
				['NEW', 'u', 'users'],
				['OLD', 'n', 'novel/show.php', 'id']
			];
			for (let i=0, ut; (ut=urlType[i]); i++) {
				pReg = ut[0]=='NEW'
						? new RegExp(String.raw`${esc(pPtn)}${ut[2]}\/(\d+).*$`)
						: new RegExp(String.raw`${esc(pPtn)}${ut[2]}\?(?:[^&]+&)?${ut[3]}=(\d+).*$`);
				// console.log(pReg);
				if (pReg.test(url)) {
					url = url.replace(pReg, `$1://pixiv.net/${ut[1]}/$2`);
					break;
				}
			}
		}; // minifier.org用セミコロン
		prompt('Title + URL', `${document.title} ${url}`);
	}
	/*
		2020/02/04
		v1.1.0
		・pixivのURL変更に対応。

		2019/08/20
		v1.0.2
		・ニコ動のnmとニコ静のmgに対応。
		・SSL対応を保持するように変更。
		・軽微な変更。

		2019/08/08
		v1.0.1
		・なんか強そうな書き方に挑戦。

		2018/07/05
		v1.0.0
		・公開。
	*/
)();