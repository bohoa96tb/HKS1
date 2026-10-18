/* HSK Studio V5 – Phân biệt cặp từ dễ nhầm + trật tự từ tuyệt đối (Bài 16). Thêm vào tab Tổng quan. */
(function(){
if(typeof V==='undefined')return;
var P=[
{t:'得到 vs 收到',a:['得到','dédào','đạt được, giành được (sau nỗ lực)'],b:['收到','shōudào','nhận được (thứ người khác gửi)'],
 why:'得 = “được, thu về”, 到 = “tới nơi”: kết quả đạt được. 收 = “thu về từ tay người gửi”. Tâm lý: nói 得到 khi bạn muốn nhấn mạnh công sức; 收到 khi bạn xác nhận “đã tới tay mình”.',
 ex:['我得到了一个机会。','我收到了你的短信。'],tip:'Hỏi mình: có người GỬI không? Có → 收到. Không, là kết quả cố gắng/cơ hội → 得到.'},
{t:'读书 vs 看书',a:['读书','dúshū','đi học / học hành (nghĩa rộng)'],b:['看书','kànshū','đọc sách (hành động cụ thể)'],
 why:'读书 là cụm cố định chỉ việc “theo học”: 我姐在大学读书. 看书 là dùng mắt xem một cuốn sách.',
 ex:['我姐在这所大学读书。','我在书店看书。'],tip:'Có nơi học (大学/学校) đi kèm → 读书. Có cuốn sách trước mắt → 看书.'},
{t:'开车 vs 坐车',a:['开车','kāichē','lái xe (bạn cầm lái)'],b:['坐车','zuòchē','đi xe (bạn là hành khách)'],
 why:'开 = “vận hành”, 坐 = “ngồi”. Vai trò khác nhau: người điều khiển và người được chở.',
 ex:['我开车去学校。','我们坐车去车站。'],tip:'Tay bạn có đặt trên vô-lăng không? Có → 开车. Không → 坐车.'},
{t:'有时候 vs 的时候',a:['有时候','yǒu shíhou','đôi khi (tần suất)'],b:['……的时候','…de shíhou','lúc … / khi … (mốc thời gian)'],
 why:'有时候 độc lập, đứng đầu vế: “có lúc”. 的时候 luôn đứng SAU một cụm động từ/danh từ để tạo mốc.',
 ex:['有时候我们去北边吃饭。','下课的时候，我们在门口见。'],tip:'Cần chữ gì đứng TRƯỚC 的时候? Có → mốc. Không có gì trước → 有时候.'}];
var R=[
 ['Mốc + Phương vị','Mốc đứng trước, phương vị đứng sau: 学校右边, 车站北边. Không bao giờ đảo thành 右边学校.'],
 ['Trạng ngữ thời gian/địa điểm trước động từ','我们五点在门口见 (mốc giờ → nơi → động từ). Không nói 我们见在门口.'],
 ['Động từ năng nguyện + động từ chính','想 / 会 / 能 đứng ngay trước động từ chính: 我想开车去, không nói 我开车想去.']];
function spk(z){return V.audio?V.audio(z):''}
var ov=V.overview;V.overview=function(){var h=ov.apply(this,arguments),e=function(s){return V.esc?V.esc(s):s};
 var out='<section class="v-hero"><span class="v-eyebrow">PHÂN BIỆT SÂU</span><h1>Cặp từ dễ nhầm</h1><p>Hiểu bản chất rồi chọn từ, đừng học thuộc nghĩa tiếng Việt.</p></section>';
 P.forEach(function(p){out+='<section class="v-card v5-pair"><h3>'+e(p.t)+'</h3><div class="row"><div class="cell"><b lang="zh">'+p.a[0]+'</b>'+p.a[1]+'<br>'+e(p.a[2])+'</div><div class="cell"><b lang="zh">'+p.b[0]+'</b>'+p.b[1]+'<br>'+e(p.b[2])+'</div></div><p>'+e(p.why)+'</p>'+p.ex.map(function(x){return'<p lang="zh" class="hanzi-text">'+e(x)+' '+spk(x)+'</p>'}).join('')+'<p class="tip"><b>Mẹo loại trừ:</b> '+e(p.tip)+'</p></section>'});
 out+='<section class="v-card v5-pair"><h3>3 quy tắc vị trí tuyệt đối</h3>'+R.map(function(r){return'<p class="tip"><b>'+e(r[0])+'.</b> '+e(r[1])+'</p>'}).join('')+'</section>';
 return h+out};
})();

/* ===== Giảng sâu 24 từ Bài 16: bản chất · tâm lý · vị trí · bẫy loại trừ ===== */
(function(){
if(typeof Renderer==='undefined'||typeof AppStore==='undefined')return;
var W={
'右':['Chữ 右 gồm 又 (bàn tay) + 口 (miệng): tay phải là tay cầm đũa đưa lên miệng.','Dùng khi chỉ đường: người nghe cần định vị nhanh, nên luôn nói kèm mốc.','Mốc + 右边: 学校右边. Đi hướng: 往右走.','Đừng nói 右边学校. Khác 左 (có 工 – tay trái làm việc).'],
'得到':['得 = “thu về”, 到 = “tới nơi”: kết quả đã nằm trong tay.','Nhấn mạnh công sức hoặc may mắn bạn đã bỏ ra để có được.','得到 + kết quả/cơ hội/giúp đỡ: 得到帮助.','Có người gửi tới tay → 收到, không phải 得到.'],
'开车':['开 = vận hành, 车 = xe: bạn là người điều khiển.','Nói khi bạn chủ động đi bằng xe của mình, thường để giải thích cách di chuyển.','Chủ ngữ + 开车 + 去 + nơi: 我开车去书店.','Làm hành khách → 坐车. Không nói 开车 khi người khác lái.'],
