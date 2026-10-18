/* HSK Studio V5 – Dual-voice orchestrator. Nạp SAU script chính (cần TTS, V). */
(function(){
if(!('speechSynthesis' in window)||typeof TTS==='undefined')return;
var KEY='HSK_V5_VOICE';
var M=/(yunxi|yunjian|yunyang|yunhao|kangkang|li-?mu|liang|danny|zhiwei|wei-?ming|male|nam|mạnh|hoai|nam minh)/i;
var F=/(xiaoxiao|xiaoyi|xiaohan|huihui|yaoyao|tingting|ting-ting|meijia|mei-?jia|yu-?shu|sinji|lili|female|nữ|hoaimy|linh|google)/i;
function cfg(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return{}}}
function save(c){try{localStorage.setItem(KEY,JSON.stringify(c))}catch(e){}}
function pool(lang){return speechSynthesis.getVoices().filter(function(v){return v.lang.replace('_','-').toLowerCase().indexOf(lang)===0})}
function pick(lang,g){var p=pool(lang),n=function(v){return v.name+' '+v.voiceURI};
  var hit=p.filter(function(v){return(g==='m'?M:F).test(n(v))&&!(g==='m'?F:M).test(n(v).replace(/google/i,''))});
  hit.sort(function(a,b){return (/natural|online|neural/i.test(b.name)?1:0)-(/natural|online|neural/i.test(a.name)?1:0)});
  return hit[0]||null}
var API=window.V5Voice={
  /* 'f'|'m' cho vai A/B; mặc định A=Nữ, B=Nam; hội thoại có thể khai báo d.voices={A:'m',B:'f'} */
  gender:function(sp){var d=(typeof V!=='undefined'&&V.d)||{},c=cfg(),ov=c[d.id]||d.voices||{};
    return ov[sp]||(sp==='B'?'m':'f')},
  swap:function(){var d=V.d;if(!d)return;var c=cfg();c[d.id]={A:API.gender('B'),B:API.gender('A')};save(c);
    if(V.msg)V.msg('Đã đổi giọng: '+d.speakers.A+' = '+(c[d.id].A==='m'?'Nam':'Nữ')+', '+d.speakers.B+' = '+(c[d.id].B==='m'?'Nam':'Nữ'));
    Renderer.renderCurrentView()},
  decorate:function(u){
    var it=TTS.queue&&TTS.queue[TTS.currentIndex];if(!it)return;
    var zh=(it.lang||'').indexOf('zh')===0;
    if(it.speaker){ /* hội thoại: giọng bản xứ theo vai */
      var g=API.gender(it.speaker),v=pick('zh',g)||pick('zh','f')||pick('zh','m');
      var distinct=pick('zh','m')&&pick('zh','f');
      if(v)u.voice=v;
      if(!distinct){u.pitch=g==='m'?0.72:1.25;u.rate=(u.rate||1)*(g==='m'?0.96:1.02)} /* thiếu giọng → điều biến cao độ */
      else u.pitch=1;
      document.querySelectorAll('.v5-speaking').forEach(function(e){e.classList.remove('v5-speaking')});
      if(it.dialogTurn!=null){var el=document.getElementById('v-turn-'+it.dialogTurn);if(el){el.classList.add('v5-speaking');el.scrollIntoView({block:'center',behavior:'smooth'})}}
    }else if(zh){var t=pick('zh','f');if(t)u.voice=t;u.pitch=1.05} /* giảng giải: tiếng Hoa do cô giáo đọc */
    else{var tv=pick('vi','f')||u.voice;if(tv)u.voice=tv;u.pitch=1;u.rate=(u.rate||1)*0.95} /* giọng giáo viên */
  }};
var orig=speechSynthesis.speak;
speechSynthesis.speak=function(u){try{API.decorate(u);
  u.addEventListener('start',function(){document.body.classList.add('v5-playing')});
  ['end','error','pause'].forEach(function(e){u.addEventListener(e,function(){document.body.classList.remove('v5-playing')})})}catch(e){}
  return orig.call(this,u)};
