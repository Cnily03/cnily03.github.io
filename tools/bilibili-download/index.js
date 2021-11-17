const queryParam = (function () {
    let searchTxt = window.location.search.substring(1);
    let searchArr = searchTxt.split('&');
    let obj = {};
    searchArr.forEach(query => {
        const p = query.split('=');
        if (p.length - 1 && p[0]) {
            obj[unescape(p[0])] = unescape(p[1]);
        }
    });
    return obj;
})()
/* const */
const api = {
    qualities: {
        '4K': 120,
        '1080p60': 116,
        '1080p+': 112,
        '1080p': 80,
        '720p60': 74,
        '720p': 64,
        '480p': 32,
        '360p': 16
    },
    videoInfo: 'https://api.bilibili.com/x/web-interface/view?',
    videoUrl: 'https://api.bilibili.com/x/player/playurl?'
};
const texts = {
    // (已弃用)获取url参数p
    page: "p=(function(){let t=window.location.search.substring(1),a=t.split('&'),j={};a.forEach(y=>{let h=y.split('=');if(h.length-1&&h[0]){j[h[0]]=h[1];}});return j.p;})();p=p?p-1:0;",
    // 获取videoInfo
    // %s1 %s2
    /**
     * @q videoInfo 的 pages 数组
     * @qd 视频标题
     */
    pages: "await new Promise((c)=>{$.ajax({url:'%s1'+'bvid='+bvid,dataType:'json',success:(t)=>{c(t.data)}})}).then(d=>{q=d.pages;qd=d.title;});"
        .replace(/%s1/, api.videoInfo),
    //定义一些函数
    /**
     * @aj 引入js
     * @sf 通过网址获取后缀名
     * @uni 将字符串的全角字符转为 unicode 编码
     * @fFn 去掉文件名不支持的字符串
     * @dlr 通过rpc下载
     * @dlu 通过url下载单个文件
     * @dlp 接收一个参数p，下载该P，若没有参数则直接下载当前p
     * @dlpm 接收2个参数u,v，下载u-v
     * @op 在控制台输出分P列表，当前P高亮
     * @pr 有多P时prompt
     */
    def: {
        aj: "aj=(ur)=>{let ns=document.createElement('script');ns.setAttribute('type','text/javascript');ns.setAttribute('src',ur);document.getElementsByTagName('head')[0].appendChild(ns);};",
        sf: "sf=(t)=>{let tt=t.replace(/\\?.*/,'').split('.');return '.'+tt[tt.length-1];};",
        /**
         * @ug url args
         * @fn filename
         */
        uni: "uni=(t)=>{let tt='';for(let i=0;i<t.length;i++){let _t=t[i];tt+=(/[^\\x00-\\xFF]/.test(_t)?'\\\\u'+_t.charCodeAt().toString(16).padStart(4,'0'):_t);};return tt;};",
        fFn: "fFn=(t)=>{return t.replace(/[\\u002a\\u002e\\u003f\\u0022\\u003c\\u003e\\u007c\\u002f\\u005c]/g,'_');};",
        dlr: "dlr=async(rpcu,rpcmth,ug,fn)=>{for(let i=0;i<ug.length;i++){var sfx=sf(ug[i]);rqd={id:bvid+'-'+new Date().getTime(),method:'aria2.addUri',params:[[ug[i]],{out:fn+(ug.length-1?' Part '+i.toString().padStart(ug.length.toString().length,'0'):'')+sfx,referer: window.location.href}]};if(['POST','GET'].indexOf(rpcmth))rqd.params=window.btoa(uni(JSON.stringify(rqd.params)));await new Promise((r)=>{$.ajax({url:rpcu,data: ['POST','GET'].indexOf(rpcmth)?rqd:JSON.stringify(rqd),type:rpcmth,contentType:'application/json-rpc',dataType:'json',success:(_d)=>{_d.result?rpc_s++:rpc_f++;r();},error:()=>{rpc_f++;r();}})})}};",
        dlu: "dlu=async(ug,fn)=>{var sfx=sf(ug[0]);uo=window.URL||window.webkitURL||window;aE=document.createElementNS('http://www.w3.org/1999/xhtml','a');dlSingle=(url)=>{return new Promise((resolve)=>{let x=new XMLHttpRequest();x.open('GET',url,true);x.responseType='blob';x.onload=()=>{if(x.status===200)resolve(x.response);};x.send();})};dlFiles=async(uS)=>{var ar=[];for(let i=0;i<uS.length;i++){try{let dT=await dlSingle(uS[i]);ar.push({name:i.toString().padStart(uS.length.toString().length,'0')+sfx,blob:new Blob([dT])});}catch(e){}};return ar;};it=await dlFiles(ug);if(it.length-1){zp=new JSZip();it.forEach(item=>{if(item)zp.file(item.name,item.blob);});zp.generateAsync({type:'blob'}).then((cnt)=>{aE.href=uo.createObjectURL(cnt);aE.download=fn;aE.click();uo.revokeObjectURL(aE.href);});}else if(it.length){aE.href=uo.createObjectURL(it[0].blob);aE.download=fn+sfx;aE.click();uo.revokeObjectURL(aE.href);}else alert('下载失败！')};",
        // s1 s2-qn&fourk
        dlp: "dlp=async(d=0,mth=0)=>{await new Promise((c)=>{$.ajax({url:'%s1cid='+q[d?d-1:0].cid+'&%s2&bvid='+bvid,dataType:'json',success:(t)=>{c(t.data.durl)}})}).then(d=>{gu=[];d.forEach(de=>{gu.push(de.url)});});if(mth){return [gu,bvid+'_p'+d.toString().padStart(q.length.toString().length,'0')+' '+fFn(d?q[d-1].part:qd)];}else{dlu(gu,bvid+'_p'+d+' '+fFn(d?q[d-1].part:qd));alert('已发送下载！请等待后台下载完成。');}};"
            .replace(/%s1/, api.videoUrl),
        dlpm: "dlpm=async(ps)=>{rpcu=window.rpcu||'http://localhost:6800/jsonrpc';rpcmth=window.rpcmth||'POST';_rpcu=prompt('请输入RPC地址\\n（默认：'+rpcu+'）');if(_rpcu!=null){rpcu=_rpcu||rpcu;_t=0;do{_rpcmth=prompt((_t?'输入错误！只能输入 POST 或 GET\\n\\n':'')+'请输入RPC请求方法 POST | GET\\n（默认：'+rpcmth+'）');['POST','GET',''].includes(_rpcmth==null?'':_rpcmth.toUpperCase())?(rpcmth=_rpcmth||rpcmth,_t=0):_t=1;}while(_t);if(_rpcmth!=null){rpc_s=rpc_f=0;for(let i=0;i<ps.length;i++){let _p=ps[i];let _t=await dlp(_p,1);await dlr(rpcu,rpcmth,_t[0],_t[1])};alert(rpc_s?'已尝试发送\\n- 成功 '+rpc_s+' | 失败 '+rpc_f+'\\n请在你的RPC客户端查看下载。':'发送失败，你可以尝试这样做：\\n- 检查你的RPC客户端是否开启\\n- 检查RPC地址是否为 '+rpcu+'\\n- 检查RPC请求方法是否为 '+rpcmth);}}};",
        op: "op=()=>{st='color:#FFF;background-color:#0055BA;border-radius:10%;font-size:larger';sp='color:#FFF;background-color:green;border-radius:20%;';sq='color:#FFF;background-color:#0055BA;border-radius:20%;';sh='color:#FFF;background-color:#C63;border-radius:20%;margin-left:10px;';console.clear();console.info('%c 分P列表 ',st);q.forEach(l=>{console.info('%c '+l.page.toString().padStart(q.length.toString().length,'0') +' %c '+l.part+' ',l.page-1==p?sq:sp,l.page-1==p?sh:'margin-left:10px;');});};",
        pr: "pr=(rp='')=>{o=rp+'请在下框中输入你要下载的分集\\n（如输入「1,2,7-9,15」）\\n单次下载超过32集可能会有账号风险\\n- 分集列表已输出至控制台';f = prompt(o);if(f!==null){if(f=='')dlp(p + 1);else{pS=[],flg=1;ppS=(_t)=>{_t&&flg&&_t<=q.length?(pS.includes(_t)?null:pS.push(_t)):flg=0;};ff=f.split(',');ff.forEach(fE=>{fE.includes('-')?(()=>{let rr=fE.split('-');u=parseInt(rr[0])||0;v=parseInt(rr[1])||0;let _t=u;u=u>v?v:u;v=v>_t?v:_t;for(let i=u;i<=v;i++){ppS(i);}})():ppS(parseInt(fE));});if(pS.length&&flg){if(pS.length<=32){pS.sort((a,b)=>{return a-b;});pS.length-1?dlpm(pS):dlp(pS[0]);}else{pr('为了您的账号安全，单次下载请不要超过32集。\\n\\n')}}else {pr('输入格式错误或者分P不存在，请重新输入！\\n\\n')}}}};"
    },
    // 运行命令
    runCmd: "aj('https://stuk.github.io/jszip/dist/jszip.min.js');op();if(q.length-1)pr();else dlp();"
};
// handle params
var query = queryParam.query || '';
var quality = queryParam.quality || '1080p+';
var jstype = queryParam.jstype || 'full';
const qs = [query, quality, jstype];
quality = api.qualities[quality];
var videoPath = null,
    cidPram = null;
if (query.length) {
    query = query.replace(/(.*\/)|(\?.*)/g, '')
    query = query.length - 1 ? (
        ['av', 'bv'].includes(query.slice(0, 2).toLowerCase()) ?
        query.slice(2, query.length) :
        query
    ) : query;

    var idType = /^[0-9]*$/.test(query) ? 'aid' : 'bvid';

    videoPath = "https://b23.tv/" + (idType == 'aid' ? 'av' : 'BV') + query;
    if (idType == 'bvid') query = 'BV' + query;
    cidParam = idType + '=' + query;
}
//gen string in 'eval()'
const putAsync = (str) => {
    return "(async()=>{%s})()".replace(/%s/, str);
}
const zipTxt = (t) => {
    function needTransf(str) { // str 是单个字符
        return /[^\x00-\xFF]/.test(str)
    }
    var tt = "";
    for (let i = 0; i < t.length; i++) {
        const str = t[i];
        tt += (needTransf(str) ?
            '\\u' + str.charCodeAt().toString(16).padStart(4, '0') :
            str);
    }
    return "eval(window.atob('" + window.btoa(tt) + "'))";
}
var genEvalStr = {
    full: () => {
        // auto
        var jstxt = {
            pages: texts.pages,
            def: texts.def.aj + texts.def.sf + texts.def.uni + texts.def.fFn + texts.def.dlr + texts
                .def.dlu +
                texts.def.dlp.replace(/%s2/, 'qn=' + quality +
                    (quality == api.qualities['4K'] ? '&fourk=1' : '')
                ) + texts.def.dlpm + texts.def.op + texts.def.pr,
            runCmd: texts.runCmd
        };
        // cur
        let curjs = texts.def.aj + texts.def.sf + texts.def.fFn + texts.def.dlu +
            "aj('https://stuk.github.io/jszip/dist/jszip.min.js');await new Promise((c)=>{$.ajax({url:'%s1cid='+cid+'&%s2&bvid='+bvid,dataType:'json',success:(t)=>{c(t.data.durl)}})}).then(d=>{gu=[];d.forEach(de=>{gu.push(de.url)});});dlu(gu,bvid+'_p'+p+' '+fFn(document.querySelector('span.tit').innerText));alert('已发送下载！请等待后台下载完成。');"
            .replace(/%s1/, api.videoUrl)
            .replace(/%s2/, 'qn=' + quality +
                (quality == api.qualities['4K'] ? '&fourk=1' : '')
            );
        // return
        return {
            auto: putAsync(jstxt.pages + jstxt.def + jstxt.runCmd),
            cur: putAsync(curjs)
        };
    },
    min: () => {
        // full 的 js 去掉 aj, 放入js文件中，并嵌套一个函数
        let pathArr = window.location.href.split('/');
        pathArr[pathArr.length - 1] = '';
        var path = pathArr.join('/');

        function putJs(jsPath, functionName) {
            return texts.def.aj + "aj('" + path + jsPath + "');setTimeout(()=>{" + functionName +
                "('%s');".replace(/%s/, 'qn=' + quality +
                    (quality == api.qualities['4K'] ? '&fourk=1' : '')
                ) + "},2000);";
        }
        return {
            auto: putAsync(putJs('quote/dlbili-auto.js', 'dlbiliAuto')),
            cur: putAsync(putJs('quote/dlbili-cur.js', 'dlbiliCur'))
        }
    }
}

function jstypeHandle(value) {
    jstype = value;
    var jstypes = ['full', 'min'];
    document.querySelector('input[name=jstype][value=' + value + ']').checked = true;
    document.querySelector('#output-' + value).style.display = '';
    jstypes.splice(jstypes.indexOf(value), 1);
    document.querySelector('#output-' + jstypes[0]).style.display = 'none';
}

function updateOutput() {
    document.querySelector('#output-full #auto').value = zipTxt(genEvalStr.full().auto);
    document.querySelector('#output-full #cur').value = zipTxt(genEvalStr.full().cur);
    document.querySelector('#output-min #auto').value = zipTxt(genEvalStr.min().auto);
    document.querySelector('#output-min #cur').value = zipTxt(genEvalStr.min().cur);
}
// 页面渲染
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('input[name=jstype][value=full]').onchange = () => jstypeHandle('full');
    document.querySelector('input[name=jstype][value=min]').onchange = () => jstypeHandle('min');
    document.querySelector('select[name=quality]').onchange = () => {
        quality = document.querySelectorAll('select[name=quality] option')[
            document.querySelector('select[name=quality]').selectedIndex
        ].value;
        quality = api.qualities[quality];
        updateOutput();
    };
    // 表单选择
    document.querySelector('input[name=query]').value = qs[0];
    document.querySelector('select[name=quality]').options[
        Object.keys(api.qualities).indexOf(qs[1])
    ].selected = true;
    jstypeHandle(qs[2]);
    // JS输出
    updateOutput();
})