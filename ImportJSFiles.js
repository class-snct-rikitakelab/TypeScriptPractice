//
// HTMLに書き出すスクリプトを決める
// 小松
//

var SCRIPT_LOCATION = "script/";
var SCRIPT_LOCATION_MY_UTILITIES = SCRIPT_LOCATION + "MyUtilities/";
var SCRIPT_LOCATION_OBSERVER = SCRIPT_LOCATION + "Observer/";
var SCRIPT_LOCATION_SUBJECT = SCRIPT_LOCATION + "Subject/";


// スクリプトの場所にそのブロックの名前を付ける。SCRIPT_MAPのブロック名と一致させること。
var SCRIPT_LOCATION_MAP = {
    MyUtilities: SCRIPT_LOCATION_MY_UTILITIES,
    Observer: SCRIPT_LOCATION_OBSERVER,
    Subject: SCRIPT_LOCATION_SUBJECT,
};

//　追加するファイルをブロックに分けられる。LOCATION_MAPのブロック名と一致させること。
var SCRIPT_MAP = {
    MyUtilities:
	[
        "PhaserGame.js",
        "AssetLoader.js",
        "Assets.js",
        "Constants.js",
        "ContactManager.js",
        "SpriteObject.js",
	],

    Observer:
	[
        "Background.js",
        "Ground.js",
        "Star.js",
        "Player.js",
	],

    Subject:
    [
        "Score.js",
    ],
};



//
// ココから下は気にしない
//

//　スクリプト名を含めたアドレスをHTMLタグにして返す
function toHTML(address) {
	var FRONT	= '<script src = ';
	var REAR	= '></script>';
	return FRONT + address + REAR;
};

function write_out(block_name, file) {
	var location = SCRIPT_LOCATION_MAP[block_name];
	var filename = SCRIPT_MAP[block_name][file];
	var html_tag = toHTML(location + filename);
	document.write( html_tag );
};

//　リストのスクリプトを全て書き出す
for (var block_name in SCRIPT_LOCATION_MAP)
{
	var block_num = SCRIPT_MAP[block_name].length
	for (var file = 0; file < block_num; ++file)
	{	
		write_out(block_name, file);
	};
};

