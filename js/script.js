var clicks = 1;
var clicks_2 = 1;

function menu_run() {
  
if (clicks == 1) {
  document.getElementById("menu_id").style.display= "block";
 clicks = 0;
} else if (clicks == 0) {
	document.getElementById("menu_id").style.display= "none";
	clicks = 1;
}

}

function close_sezon_open() {
	document.getElementById("yes_no_bg").style.display = "flex";
}

function close_sezon_close() {
	document.getElementById("yes_no_bg").style.display = "none";
}

var new_id2 = localStorage.getItem("emin_id_number2"); new_id2++
var new_sezonlar_1 = localStorage.getItem("emin_new_sezonlar");

function close_sezon() {
	if (document.getElementById("yes_no_input_sezon").value.length >= 1) {
	new_id2 += 0;
	localStorage.setItem("emin_id_number2", new_id2);
	
	new_sezon = localStorage.getItem("emin_new_gecmis_siparis");
	localStorage.setItem("emin_new_gecmis_sezon_" + new_id2 + "", new_sezon);
	localStorage.setItem("emin_new_gecmis_siparis", "");
	
	var fff = "'";
	
	var sezon_yili_raw = document.getElementById("yes_no_input_sezon").value;
	var sezon_yili = `'${sezon_yili_raw}'`;
	localStorage.setItem("emin_sezon_yillar" + new_id2 + "", sezon_yili);
	
	localStorage.setItem("emin_sezon_toplam_gelir_" + new_id2 + "", localStorage.getItem("emin_sezon_toplam_gelir"));
	localStorage.setItem("emin_sezon_toplam_gider_" + new_id2 + "", localStorage.getItem("emin_sezon_toplam_gider"));
	localStorage.setItem("emin_sezon_toplam_is_" + new_id2 + "", localStorage.getItem("emin_sezon_toplam_is"));
	
	var sezon_divss = '<div class="sezonlar_divs" onclick="localStorage.setItem(' + fff + 'emin_sezonlar_top_gelir' + fff + ', localStorage.getItem(' + fff + 'emin_sezon_toplam_gelir_' + new_id2 + '' + fff + ')); localStorage.setItem(' + fff + 'emin_sezonlar_top_gider' + fff + ', localStorage.getItem(' + fff + 'emin_sezon_toplam_gider_' + new_id2 + '' + fff + ')); localStorage.setItem(' + fff + 'emin_sezonlar_top_is' + fff + ', localStorage.getItem(' + fff + 'emin_sezon_toplam_is_' + new_id2 + '' + fff + ')); localStorage.setItem(' + fff + 'emin_sezonlar_top_kar' + fff + ', Math.floor(localStorage.getItem(' + fff + 'emin_sezonlar_top_gelir' + fff + ') - localStorage.getItem(' + fff + 'emin_sezonlar_top_gider' + fff + '))); localStorage.setItem(' + fff + 'emin_sezon_title' + fff + ', ' + sezon_yili + '); localStorage.setItem(' + fff + 'emin_new_gecmis_sezon' + fff + ', localStorage.getItem(' + fff + 'emin_new_gecmis_sezon_' + new_id2 + '' + fff + ')); location.href=' + fff + 'sezon.html' + fff + ';"><b id="sezon_years_id' + new_id2 + '"></b><b> Sezonu</b></div>';
	sezon_divss += new_sezonlar_1;
	localStorage.setItem("emin_new_sezonlar", sezon_divss);
	
	localStorage.setItem("emin_sezon_toplam_gelir", "");
	localStorage.setItem("emin_sezon_toplam_gider", "");
	localStorage.setItem("emin_sezon_toplam_is", "");
	
	location.reload();
	
	alert("" + sezon_yili + " Sezonu Kapatıldı");
	} else if (document.getElementById("yes_no_input_sezon").value.length < 1) {
		alert("Lütfen Bir Yıl Girin");
	}
}

function clear_data_open() {
	document.getElementById("yes_no_bg2").style.display = "flex";
}

function clear_data_close() {
	document.getElementById("yes_no_bg2").style.display = "none";
}

function clear_data() {
	var password_value = document.getElementById("yes_no_input_password").value;
	
	if (password_value == "umVQp6YfvC00qOomiuyk3mAj") {
		localStorage.clear();
		location.reload();
		alert("Tüm Veriler Silindi!");
		
	} else if (password_value != "umVQp6YfvC00qOomiuyk3mAj") {
		alert("Şifre Yanlış");
	}
}

var d_none = localStorage.getItem("emin_d_none");
var d_block = localStorage.getItem("emin_d_block");

function go_siparis() {
	if (localStorage.getItem("emin_d_none") == null) {
  localStorage.setItem("emin_d_none", "none");
  localStorage.setItem("emin_d_block", "block");
  localStorage.setItem("emin_new_cop_siparis", "");
  localStorage.setItem("emin_new_gecmis_siparis", "");
  localStorage.setItem("emin_onay_id_nn", "");
  localStorage.setItem("emin_onay_id2_nn", "");
  localStorage.setItem("emin_onay_id3_nn", "");
  localStorage.setItem("emin_s_cop1", "");
  localStorage.setItem("emin_new_siparis1", "");
  localStorage.setItem("emin_s_display1", "");
  localStorage.setItem("emin_id_number", "");
  localStorage.setItem("emin_input_siparis_onay1_id1", "");
  localStorage.setItem("emin_input_siparis_onay2_id1", "");
  localStorage.setItem("emin_input_siparis_onay3_id1", "");
  localStorage.setItem("emin_input_fiyat_onay1_id1", "");
  localStorage.setItem("emin_input_fiyat_onay2_id1", "");
  localStorage.setItem("emin_edit_onays_id1", "");
  localStorage.setItem("emin_onay_border_id1", "");
  localStorage.setItem("emin_onay_color_id1", "");
  localStorage.setItem("emin_new2_siparis1", "");
  localStorage.setItem("emin_s_edit_ids", "");
  localStorage.setItem("emin_edit_onays", "");
  localStorage.setItem("emin_new_sezonlar", "");
  localStorage.setItem("emin_sezon_toplam_gelir", "");
  localStorage.setItem("emin_sezon_toplam_gider", "");
  localStorage.setItem("emin_sezon_toplam_is", "");
  location.href = "siparis_ekle.html";
	}
}

function go_siparis_2() {
  location.href = "siparis_ekle.html";
}

function go_anasayfa() {
  location.href = "index.html";
}

function go_gecmis() {
	location.href= "gecmis_siparisler.html";
}

function go_cop() {
	location.href= "cop_kutusu.html";
}

function go_sezon() {
	location.href= "sezonlar.html";
}

function go_hakkinda() {
	location.href= "hakkinda.html";
}

/* save */

var sandalye = localStorage.getItem("emin_sandalye");
var masa = localStorage.getItem("emin_masa");
var cadir = localStorage.getItem("emin_cadir");
var cayocagi = localStorage.getItem("emin_cayocagi");
var projektor = localStorage.getItem("emin_projektor");
var telefon = localStorage.getItem("emin_telefon");
var isim = localStorage.getItem("emin_isim");
var tarih = localStorage.getItem("emin_tarih");
var fiyat = localStorage.getItem("emin_fiyat");
var aciklama = localStorage.getItem("emin_aciklama");
var adres = localStorage.getItem("emin_adres");
var new_siparis = localStorage.getItem("emin_new_siparis");
var id_number = localStorage.getItem("emin_id_number");
var onay_id1_nn = localStorage.getItem("emin_onay_id_nn");
var onay_id2_nn = localStorage.getItem("emin_onay_id2_nn");
var onay_id3_nn = localStorage.getItem("emin_onay_id3_nn");

var onay_border_id1 = localStorage.getItem("emin_onay_border_id1");
var onay_color_id1 = localStorage.getItem("emin_onay_color_id1");

var new_cop_siparis_1 = localStorage.getItem("emin_new_cop_siparis");
var new_gecmis_siparis_1 = localStorage.getItem("emin_new_gecmis_siparis");
var new_id = localStorage.getItem("emin_id_number"); new_id++
var sezon_gelir = localStorage.getItem("emin_sezon_toplam_gelir"); sezon_gelir++
var sezon_gider = localStorage.getItem("emin_sezon_toplam_gider"); sezon_gider++
var sezon_is = localStorage.getItem("emin_sezon_toplam_is"); sezon_is++

function add_siparis() {
	var sandalye_value = document.getElementById("sandalye_input").value;
	var masa_value = document.getElementById("masa_input").value;
	var cadir_value = document.getElementById("cadir_input").value;
	var cayocagi_value = document.getElementById("cayocagi_input").value;
	var projektor_value = document.getElementById("projektor_input").value;
	var telefon_value = document.getElementById("telefon_input").value;
	var isim_value = document.getElementById("isim_input").value;
	var tarih_value = document.getElementById("tarih_input").value;
	var aciklama_value = document.getElementById("aciklama_input").value;
	var adres_value = document.getElementById("adres_input").value;
	var fiyat_value = document.getElementById("fiyat_input").value;
	
	new_id += 0;
	localStorage.setItem("emin_id_number", new_id);
	
	localStorage.setItem("emin_sandalye" + new_id + "", sandalye_value);
	localStorage.setItem("emin_masa" + new_id + "", masa_value);
	localStorage.setItem("emin_cadir" + new_id + "", cadir_value);
	localStorage.setItem("emin_cayocagi" + new_id + "", cayocagi_value);
	localStorage.setItem("emin_projektor" + new_id + "", projektor_value);
	localStorage.setItem("emin_telefon" + new_id + "", telefon_value);
	localStorage.setItem("emin_isim" + new_id + "", isim_value);
	localStorage.setItem("emin_tarih" + new_id + "", tarih_value);
	localStorage.setItem("emin_aciklama" + new_id + "", aciklama_value);
	localStorage.setItem("emin_adres" + new_id + "", adres_value);
	localStorage.setItem("emin_fiyat" + new_id + "", fiyat_value);
	
	var fff = "'";
	
	new_onclick_1 = '' + fff + 'onay_div_id' + localStorage.getItem("emin_id_number") + '' + fff + '';
	localStorage.setItem("emin_onay_id_nn", new_onclick_1);
	
	new_onclick_2 = 'var a = document.getElementById(' + fff + 'siparis_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ').checked; var b = document.getElementById(' + fff + 'siparis_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ').checked; var c = document.getElementById(' + fff + 'siparis_onay3_id' + localStorage.getItem("emin_id_number") + '' + fff + ').checked; var a1 = document.getElementById(' + fff + 'fiyat_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ').checked; var b1 = document.getElementById(' + fff + 'fiyat_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ').checked; if (a == true && a1 == true) {localStorage.setItem(' + fff + 'emin_input_siparis_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_input_siparis_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_siparis_onay3_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_fiyat_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_input_fiyat_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_onay_border_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '2px solid red' + fff + '); localStorage.setItem(' + fff + 'emin_onay_color_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + 'red' + fff + '); location.reload();} else if (b == true && a1 == true) {localStorage.setItem(' + fff + 'emin_input_siparis_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_siparis_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_input_siparis_onay3_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_fiyat_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_input_fiyat_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_onay_border_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '2px solid yellow' + fff + '); localStorage.setItem(' + fff + 'emin_onay_color_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + 'red' + fff + '); location.reload();} else if (c == true && a1 == true) {localStorage.setItem(' + fff + 'emin_input_siparis_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_siparis_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_siparis_onay3_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_input_fiyat_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_input_fiyat_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_onay_border_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '2px solid green' + fff + '); localStorage.setItem(' + fff + 'emin_onay_color_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + 'red' + fff + '); location.reload();}  else if (a == true && b1 == true) {localStorage.setItem(' + fff + 'emin_input_siparis_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_input_siparis_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_siparis_onay3_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_fiyat_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_fiyat_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_onay_border_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '2px solid red' + fff + '); localStorage.setItem(' + fff + 'emin_onay_color_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + 'green' + fff + '); location.reload();} else if (b == true && b1 == true) {localStorage.setItem(' + fff + 'emin_input_siparis_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_siparis_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_input_siparis_onay3_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_fiyat_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_fiyat_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_onay_border_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '2px solid yellow' + fff + '); localStorage.setItem(' + fff + 'emin_onay_color_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + 'green' + fff + '); location.reload();} else if (c == true && b1 == true && document.getElementById(' + fff + 'tamamla_gider_input' + new_id + '' + fff + ').value.length < 1) {alert(' + fff + 'Lütfen Gider Girin' + fff + ')} else if (c == true && b1 == true && document.getElementById(' + fff + 'tamamla_gider_input' + new_id + '' + fff + ').value.length >= 1) {var gider = document.getElementById(' + fff + 'tamamla_gider_input' + new_id + '' + fff + ').value; localStorage.setItem(' + fff + 'emin_siparis_gider_' + new_id + '' + fff + ', gider); var gelir = localStorage.getItem(' + fff + 'emin_fiyat' + new_id + '' + fff + '); localStorage.setItem(' + fff + 'emin_siparis_gelir_' + new_id + '' + fff + ', gelir); sezon_gelir += Math.floor(gelir - 1); localStorage.setItem(' + fff + 'emin_sezon_toplam_gelir' + fff + ', sezon_gelir); sezon_gider += Math.floor(gider - 1); localStorage.setItem(' + fff + 'emin_sezon_toplam_gider' + fff + ', sezon_gider); sezon_is += 0; localStorage.setItem(' + fff + 'emin_sezon_toplam_is' + fff + ', sezon_is); localStorage.setItem(' + fff + 'emin_new2_siparis' + new_id + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_s_cop' + new_id + '' + fff + ', 1); localStorage.setItem(' + fff + 'emin_s_display' + new_id + '' + fff + ', ' + fff + 'none' + fff + '); new_gecmis_siparis_1 += localStorage.getItem(' + fff + 'emin_new_siparis' + localStorage.getItem('emin_id_number') + '' + fff + '); localStorage.setItem(' + fff + 'emin_new_gecmis_siparis' + fff + ', new_gecmis_siparis_1); localStorage.setItem(' + fff + 'emin_input_siparis_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_siparis_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_siparis_onay3_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_input_fiyat_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_fiyat_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_onay_border_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '2px solid green' + fff + '); localStorage.setItem(' + fff + 'emin_onay_color_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + 'green' + fff + '); alert(' + fff + 'Sipariş Tamamlandı' + fff + '); location.reload();} else if (a == true) {localStorage.setItem(' + fff + 'emin_input_siparis_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_input_siparis_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_siparis_onay3_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_onay_border_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '2px solid red' + fff + '); location.reload();} else if (b == true) {localStorage.setItem(' + fff + 'emin_input_siparis_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_siparis_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_input_siparis_onay3_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_onay_border_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '2px solid yellow' + fff + '); location.reload();} else if (c == true) {localStorage.setItem(' + fff + 'emin_input_siparis_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_siparis_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_siparis_onay3_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_onay_border_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '2px solid green' + fff + '); location.reload();} else if (a1 == true) {localStorage.setItem(' + fff + 'emin_input_fiyat_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_input_fiyat_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_onay_color_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + 'red' + fff + '); location.reload();} else if (b1 == true) {localStorage.setItem(' + fff + 'emin_input_fiyat_onay1_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_input_fiyat_onay2_id' + localStorage.getItem("emin_id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'emin_onay_color_id' + localStorage.getItem("emin_id_number") + '' + fff + ', ' + fff + 'green' + fff + '); location.reload();} else if (a == false && b == false && c == false && a1 == false && b1 == false) {alert(' + fff + 'Lütfen bir seçenek seçin' + fff + ');}'
	localStorage.setItem("emin_onay_id2_nn", new_onclick_2);
	
	new_onclick_3 = 'document.getElementById(' + fff + 'siparis_durum_id' + localStorage.getItem("emin_id_number") + '' + fff + ').style.border= localStorage.getItem(' + fff + 'emin_onay_border_id' + localStorage.getItem("emin_id_number") + '' + fff + '); document.getElementById(' + fff + 'fiyat_miktar_id' + localStorage.getItem("emin_id_number") + '' + fff + ').style.color= localStorage.getItem(' + fff + 'emin_onay_color_id' + localStorage.getItem("emin_id_number") + '' + fff + ');'
	localStorage.setItem("emin_onay_id3_nn", new_onclick_3);
	
	new_onclick_5 = "var sandalye_value = document.getElementById('sandalye_input').value;var masa_value = document.getElementById('masa_input').value;var cadir_value = document.getElementById('cadir_input').value;var cayocagi_value = document.getElementById('cayocagi_input').value;var projektor_value = document.getElementById('projektor_input').value;var telefon_value = document.getElementById('telefon_input').value;var isim_value = document.getElementById('isim_input').value;var tarih_value = document.getElementById('tarih_input').value;var aciklama_value = document.getElementById('aciklama_input').value;var adres_value = document.getElementById('adres_input').value;var fiyat_value = document.getElementById('fiyat_input').value;localStorage.setItem('emin_sandalye' + localStorage.getItem('emin_s_edit_ids') + '', sandalye_value);localStorage.setItem('emin_masa' + localStorage.getItem('emin_s_edit_ids') + '', masa_value);localStorage.setItem('emin_cadir' + localStorage.getItem('emin_s_edit_ids') + '', cadir_value);localStorage.setItem('emin_cayocagi' + localStorage.getItem('emin_s_edit_ids') + '', cayocagi_value);localStorage.setItem('emin_projektor' + localStorage.getItem('emin_s_edit_ids') + '', projektor_value);localStorage.setItem('emin_telefon' + localStorage.getItem('emin_s_edit_ids') + '', telefon_value);localStorage.setItem('emin_isim' + localStorage.getItem('emin_s_edit_ids') + '', isim_value);localStorage.setItem('emin_tarih' + localStorage.getItem('emin_s_edit_ids') + '', tarih_value);localStorage.setItem('emin_aciklama' + localStorage.getItem('emin_s_edit_ids') + '', aciklama_value);localStorage.setItem('emin_adres' + localStorage.getItem('emin_s_edit_ids') + '', adres_value);localStorage.setItem('emin_fiyat' + localStorage.getItem('emin_s_edit_ids') + '', fiyat_value);location.href='index.html'; alert('Sipariş Düzenlendi');";
	
	new_onclick_6 = 'localStorage.setItem(' + fff + 'emin_new2_siparis' + new_id + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'emin_s_cop' + new_id + '' + fff + ', 1); localStorage.setItem(' + fff + 'emin_s_display' + new_id + '' + fff + ', ' + fff + 'none' + fff + '); new_cop_siparis_1 += localStorage.getItem(' + fff + 'emin_new_siparis' + localStorage.getItem('emin_id_number') + '' + fff + '); localStorage.setItem(' + fff + 'emin_new_cop_siparis' + fff + ', new_cop_siparis_1); location.href=' + fff + 'index.html' + fff + '; alert(' + fff + 'Sipariş Silindi' + fff + ');';
	
	new_onclick_4 = '<div class="task_title"><center>Sipariş ' + localStorage.getItem("emin_id_number") + '</center></div><div class="siparis_miktar bg_gray"><input id="sandalye_input" class="siparis_left_input" type="Number" placeholder="Sandalye"></div><div class="siparis_adres bg_gray"><textarea id="adres_input" class="siparis_right_input" typte="Text" placeholder="Adres"></textarea></div><div class="siparis_miktar bg_white"><input id="masa_input" class="siparis_left_input" type="Number" placeholder="Masa"></div><div class="siparis_aciklama bg_white"><textarea id="aciklama_input" class="siparis_right_input" typte="Text" placeholder="Açıklama"></textarea></div><div class="siparis_miktar bg_gray" style="margin-top: -40px;"><input id="cadir_input" class="siparis_left_input" type="Number" placeholder="Çadır"></div><div class="siparis_miktar bg_white" style="margin-top: -20px;"><input id="cayocagi_input" class="siparis_left_input" type="Number" placeholder="Çay Ocağı"></div><div class="siparis_miktar bg_gray"><input id="projektor_input" class="siparis_left_input" type="Number" placeholder="Projektör"></div><div class="siparis_miktar bg_white"><input id="telefon_input" class="siparis_left_input" type="Number" placeholder="Telefon"></div><div class="siparis_miktar bg_gray"><input id="isim_input" class="siparis_left_input" type="Text" placeholder="İsim"></div><div class="siparis_miktar bg_white"><input id="tarih_input" class="siparis_left_input" type="Text" placeholder="Tarih"></div><div class="siparis_tutar bg_gray"><input id="fiyat_input" class="siparis_tutar_input" type="Number" placeholder="Fiyat"></div><div class="siparis_olustur" onclick="' + new_onclick_5 + '"><b>Siparişi Kaydet</b></div><div class="siparis_olustur" style="background-color: red;" onclick="' + new_onclick_6 + '"><b>Siparişi Sil</b></div><div class="anasayfa" onclick="go_anasayfa()"><b>Anasayfaya Dön</b></div>'
	localStorage.setItem("emin_edit_onays_id" + localStorage.getItem("emin_id_number") + "", new_onclick_4);
	
	new_siparis_1 = '<div id="tasktitle_id' + localStorage.getItem("emin_id_number") + '" class="task_title"><center class="baslik_class">Sipariş ' + localStorage.getItem("emin_id_number") + '</center></div><div id="siparis_durum_id' + localStorage.getItem("emin_id_number") + '" class="siparis_durum"><div id="miktar_sandalye_id' + localStorage.getItem("emin_id_number") + '" class="siparis_miktar bg_gray"><b>Sandalye: </b><span id="sandalye_id' + localStorage.getItem("emin_id_number") + '"></span></div><div id="siparis_id' + localStorage.getItem("emin_id_number") + '" class="siparis_adres bg_gray"><b><center>Adres</center></b><span id="adres_id' + localStorage.getItem("emin_id_number") + '"></span></div><div id="miktar_masa_id' + localStorage.getItem("emin_id_number") + '" class="siparis_miktar bg_white"><b>Masa: </b><span id="masa_id' + localStorage.getItem("emin_id_number") + '"></span></div><div id="siparis_aciklama_id' + localStorage.getItem("emin_id_number") + '" class="siparis_aciklama bg_white"><b><center>Açıklama</center></b><span id="aciklama_id' + localStorage.getItem("emin_id_number") + '"></span></div><div id="cadir_miktar_id' + localStorage.getItem("emin_id_number") + '" class="siparis_miktar bg_gray" style="margin-top: -40px;"><b>Çadır: </b><span id="cadir_id' + localStorage.getItem("emin_id_number") + '"></span></div><div id="cayocagi_miktar_id' + localStorage.getItem("emin_id_number") + '" class="siparis_miktar bg_white" style="margin-top: -20px;"><b>Çay Ocağı: </b><span id="cayocagi_id' + localStorage.getItem("emin_id_number") + '"></span></div><div id="projektor_miktar_id' + localStorage.getItem("emin_id_number") + '" class="siparis_miktar bg_gray"><b>Projektör: </b><span id="projektor_id' + localStorage.getItem("emin_id_number") + '"></span></div><div id="telefon_miktar_id' + localStorage.getItem("emin_id_number") + '" class="siparis_miktar bg_white"><b>Tel: </b><span id="telefon_id' + localStorage.getItem("emin_id_number") + '"></span></div><div id="isim_miktar_id' + localStorage.getItem("emin_id_number") + '" class="siparis_miktar bg_gray"><b>İsim: </b><span id="isim_id' + localStorage.getItem("emin_id_number") + '"></span></div><div id="tarih_miktar_id' + localStorage.getItem("emin_id_number") + '" class="siparis_miktar bg_white"><b>Tarih: </b><span id="tarih_id' + localStorage.getItem("emin_id_number") + '"></span></div><div id="fiyat_miktar_id' + localStorage.getItem("emin_id_number") + '" class="siparis_tutar bg_gray"><b>Fiyat: </b><span id="fiyat_id' + localStorage.getItem("emin_id_number") + '"></span><span style="user-select:none;"> ₺</span></div><div id="gider_miktar_id' + localStorage.getItem("emin_id_number") + '" class="siparis_tutar bg_white display_none"><b>Gider: </b><span id="gider_id' + localStorage.getItem("emin_id_number") + '"></span><span style="user-select:none;"> ₺</span></div><div id="siparis_edit_id' + localStorage.getItem("emin_id_number") + '"  onclick="if(localStorage.getItem(' + fff + 'emin_s_cop' + localStorage.getItem("emin_id_number") + '' + fff + ') == 0) {localStorage.setItem(' + fff + 'emin_s_edit_ids' + fff + ', ' + localStorage.getItem('emin_id_number') + ');localStorage.setItem(' + fff + 'emin_edit_onays' + fff + ', localStorage.getItem(' + fff + 'emin_edit_onays_id' + localStorage.getItem('emin_id_number') + '' + fff + '));location.href= ' + fff + 'siparis_edit.html' + fff + ';}" class="siparis_edit"><b>Düzenle</b></div><div id="siparis_onay_id' + localStorage.getItem("emin_id_number") + '"  onclick="if(localStorage.getItem(' + fff + 'emin_s_cop' + localStorage.getItem("emin_id_number") + '' + fff + ') == 0) {document.getElementById(' + localStorage.getItem('emin_onay_id_nn') + ').style.display=' + fff + 'block' + fff + ';}" class="siparis_onay"><b>Tamamla</b></div></div><div id="onay_div_id' + localStorage.getItem("emin_id_number") + '" class="onay_div"><div class="onay_div_in"><div class="onay_div_title bg_gray"><b>Sipariş</b></div><div class="onay_div_i_div bg_white" onclick="document.getElementById(' + fff + 'siparis_onay1_id' + new_id + '' + fff + ').checked= true;"><input id="siparis_onay1_id' + localStorage.getItem("emin_id_number") + '" class="onay_input" type="radio" name="siparis_onay"><label for="siparis_onay1_id' + localStorage.getItem("emin_id_number") + '">Tamamlanmadı</label></div><div class="onay_div_i_div bg_gray" onclick="document.getElementById(' + fff + 'siparis_onay2_id' + new_id + '' + fff + ').checked= true;"><input id="siparis_onay2_id' + localStorage.getItem("emin_id_number") + '" class="onay_input" type="radio" name="siparis_onay"><label for="siparis_onay2_id' + localStorage.getItem("emin_id_number") + '">Devam ediyor</label></div><div class="onay_div_i_div bg_white" onclick="document.getElementById(' + fff + 'siparis_onay3_id' + new_id + '' + fff + ').checked= true;"><input id="siparis_onay3_id' + localStorage.getItem("emin_id_number") + '" class="onay_input" type="radio" name="siparis_onay"><label for="siparis_onay3_id' + localStorage.getItem("emin_id_number") + '">Tamamlandı</label></div></div><div class="onay_div_in"><div class="onay_div_title bg_white"><b>Fiyat</b></div><div class="onay_div_i_div2 bg_gray" onclick="document.getElementById(' + fff + 'fiyat_onay1_id' + new_id + '' + fff + ').checked= true;"><input id="fiyat_onay1_id' + localStorage.getItem("emin_id_number") + '" class="onay_input" type="radio" name="fiyat_onay"><label for="fiyat_onay1_id' + localStorage.getItem("emin_id_number") + '">Ödenmedi</label></div><div class="onay_div_i_div2 bg_white" onclick="document.getElementById(' + fff + 'fiyat_onay2_id' + new_id + '' + fff + ').checked= true;"><input id="fiyat_onay2_id' + localStorage.getItem("emin_id_number") + '" class="onay_input" type="radio" name="fiyat_onay"><label for="fiyat_onay2_id' + localStorage.getItem("emin_id_number") + '">Ödendi</label></div></div><div id="tamamla_gider_id' + new_id + '" class="tamamla_gider bg_gray"><b>Gider</b><br><input id="tamamla_gider_input' + new_id + '" type="number"></input></div><div class="onay_div_kaydet" onclick="' + localStorage.getItem("emin_onay_id2_nn") + '"><b>Kaydet</b></div></div>';
	localStorage.setItem("emin_new_siparis" + new_id + "", new_siparis_1);
	localStorage.setItem("emin_new2_siparis" + new_id + "", new_siparis_1);
	
	localStorage.setItem("emin_s_cop" + new_id + "", 0);

    location.href = "index.html";

    alert("Sipariş Oluşturuldu");	
}

function edit() {
	document.getElementById("tasks_div").innerHTML= localStorage.getItem("emin_edit_onays");
	
	var numbers = localStorage.getItem("emin_s_edit_ids");

	document.getElementById("sandalye_input").value= localStorage.getItem("emin_sandalye" + numbers + "");
	document.getElementById("masa_input").value= localStorage.getItem("emin_masa" + numbers + "");
	document.getElementById("cadir_input").value= localStorage.getItem("emin_cadir" + numbers + "");
	document.getElementById("cayocagi_input").value= localStorage.getItem("emin_cayocagi" + numbers + "");
	document.getElementById("projektor_input").value= localStorage.getItem("emin_projektor" + numbers + "");
	document.getElementById("telefon_input").value= localStorage.getItem("emin_telefon" + numbers + "");
	document.getElementById("isim_input").value= localStorage.getItem("emin_isim" + numbers + "");
	document.getElementById("tarih_input").value= localStorage.getItem("emin_tarih" + numbers + "");
	document.getElementById("aciklama_input").value= localStorage.getItem("emin_aciklama" + numbers + "");
	document.getElementById("adres_input").value= localStorage.getItem("emin_adres" + numbers + "");
	document.getElementById("fiyat_input").value= localStorage.getItem("emin_fiyat" + numbers + "");

}

function cop_kutusu() {
	document.getElementById("tasks_div").innerHTML= localStorage.getItem("emin_new_cop_siparis");
	
	var run_number = 0;
	
	setInterval(function option_div() {
		run_number += 0; run_number++
	document.getElementById("siparis_durum_id" + run_number + "").style.border= "2px solid black";
	document.getElementById("fiyat_miktar_id" + run_number + "").style.color= "black";
	
	document.getElementById("sandalye_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_sandalye" + run_number + ""));
	document.getElementById("masa_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_masa" + run_number + ""));
	document.getElementById("cadir_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_cadir" + run_number + ""));
	document.getElementById("cayocagi_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_cayocagi" + run_number + ""));
	document.getElementById("projektor_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_projektor" + run_number + ""));
	document.getElementById("telefon_id" + run_number + "").innerText= localStorage.getItem("emin_telefon" + run_number + "");
	document.getElementById("isim_id" + run_number + "").innerText= localStorage.getItem("emin_isim" + run_number + "");
	document.getElementById("tarih_id" + run_number + "").innerText= localStorage.getItem("emin_tarih" + run_number + "");
	document.getElementById("aciklama_id" + run_number + "").innerText= localStorage.getItem("emin_aciklama" + run_number + "");
	document.getElementById("adres_id" + run_number + "").innerText= localStorage.getItem("emin_adres" + run_number + "");
	document.getElementById("fiyat_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_fiyat" + run_number + ""));
	
	document.getElementById("siparis_edit_id" + run_number + "").style.display= "none";
	document.getElementById("siparis_onay_id" + run_number + "").style.display= "none";
	
	}, 10);
}

function gecmis_siparisler() {
	document.getElementById("tasks_div").innerHTML= localStorage.getItem("emin_new_gecmis_siparis");
	
	var run_number = 0;
	
	setInterval(function option_div() {
		run_number += 0; run_number++
	document.getElementById("siparis_durum_id" + run_number + "").style.border= "2px solid green";
	document.getElementById("fiyat_miktar_id" + run_number + "").style.color= "green";
	document.getElementById("gider_miktar_id" + run_number + "").style.color= "red";
	document.getElementById("gider_miktar_id" + run_number + "").style.display= "block";
	
	document.getElementById("sandalye_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_sandalye" + run_number + ""));
	document.getElementById("masa_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_masa" + run_number + ""));
	document.getElementById("cadir_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_cadir" + run_number + ""));
	document.getElementById("cayocagi_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_cayocagi" + run_number + ""));
	document.getElementById("projektor_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_projektor" + run_number + ""));
	document.getElementById("telefon_id" + run_number + "").innerText= localStorage.getItem("emin_telefon" + run_number + "");
	document.getElementById("isim_id" + run_number + "").innerText= localStorage.getItem("emin_isim" + run_number + "");
	document.getElementById("tarih_id" + run_number + "").innerText= localStorage.getItem("emin_tarih" + run_number + "");
	document.getElementById("aciklama_id" + run_number + "").innerText= localStorage.getItem("emin_aciklama" + run_number + "");
	document.getElementById("adres_id" + run_number + "").innerText= localStorage.getItem("emin_adres" + run_number + "");
	document.getElementById("fiyat_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_fiyat" + run_number + "")).toLocaleString("en-US");
	document.getElementById("gider_id" + run_number + "").innerText= "-" +  Math.floor(localStorage.getItem("emin_siparis_gider_" + run_number + "")).toLocaleString("en-US");
	
	document.getElementById("siparis_edit_id" + run_number + "").style.display= "none";
	document.getElementById("siparis_onay_id" + run_number + "").style.display= "none";
	
	}, 10);
}

function sezonlar() {
	document.getElementById("sezonlar_div_id").innerHTML= localStorage.getItem("emin_new_sezonlar");
	
	var run_number = Number(localStorage.getItem("emin_id_number"));
	
	setInterval(function option_div() {
	
	document.getElementById("sezon_years_id" + run_number + "").innerText = localStorage.getItem("emin_sezon_yillar" + run_number + "");
	
	run_number--;
	
	}, 1);
}

function sezon() {
	
	document.getElementById("sezon_gelir").innerText= Math.floor(localStorage.getItem("emin_sezonlar_top_gelir")).toLocaleString("en-US") + " ₺";
	document.getElementById("sezon_gider").innerText= "-" + Math.floor(localStorage.getItem("emin_sezonlar_top_gider")).toLocaleString("en-US") + " ₺";
	document.getElementById("sezon_is").innerText= Math.floor(localStorage.getItem("emin_sezonlar_top_is"));
	document.getElementById("sezon_kar").innerText= Math.floor(localStorage.getItem("emin_sezonlar_top_kar")).toLocaleString("en-US") + " ₺";
	document.getElementById("tasks_div").innerHTML= localStorage.getItem("emin_new_gecmis_sezon");
	document.getElementById("sezon_title").innerText= localStorage.getItem("emin_sezon_title");
	
	var run_number = 0;
	
	setInterval(function option_div() {
		run_number += 0; run_number++
	document.getElementById("siparis_durum_id" + run_number + "").style.border= "2px solid green";
	document.getElementById("fiyat_miktar_id" + run_number + "").style.color= "green";
	document.getElementById("gider_miktar_id" + run_number + "").style.color= "red";
	document.getElementById("gider_miktar_id" + run_number + "").style.display= "block";
	
	document.getElementById("sandalye_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_sandalye" + run_number + ""));
	document.getElementById("masa_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_masa" + run_number + ""));
	document.getElementById("cadir_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_cadir" + run_number + ""));
	document.getElementById("cayocagi_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_cayocagi" + run_number + ""));
	document.getElementById("projektor_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_projektor" + run_number + ""));
	document.getElementById("telefon_id" + run_number + "").innerText= localStorage.getItem("emin_telefon" + run_number + "");
	document.getElementById("isim_id" + run_number + "").innerText= localStorage.getItem("emin_isim" + run_number + "");
	document.getElementById("tarih_id" + run_number + "").innerText= localStorage.getItem("emin_tarih" + run_number + "");
	document.getElementById("aciklama_id" + run_number + "").innerText= localStorage.getItem("emin_aciklama" + run_number + "");
	document.getElementById("adres_id" + run_number + "").innerText= localStorage.getItem("emin_adres" + run_number + "");
	document.getElementById("fiyat_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_fiyat" + run_number + "")).toLocaleString("en-US");
	document.getElementById("gider_id" + run_number + "").innerText= "-" +  Math.floor(localStorage.getItem("emin_siparis_gider_" + run_number + "")).toLocaleString("en-US");
	
	document.getElementById("siparis_edit_id" + run_number + "").style.display= "none";
	document.getElementById("siparis_onay_id" + run_number + "").style.display= "none";
	
	}, 10);
}

function export_data() {
        const data = JSON.stringify(localStorage, null, 2);
        const jsFile = `var localBackup = ${data};`;
        
        const blob = new Blob([jsFile], { type: "application/javascript" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "eminDATA.js";
        a.click();
        URL.revokeObjectURL(url);
    }

function save() {
	
	document.getElementById("add_1").style.display = d_none;
	document.getElementById("add_2").style.display = d_block;

	var siparisler_ekleme = document.getElementById("siparisler");
	siparisler_ekleme.innerHTML +=  localStorage.getItem("emin_new_siparis" + run_number + "");
	
	var run_number = 0;
	
	setInterval(function option_div() {
		run_number += 0; run_number++
	if(localStorage.getItem("emin_new2_siparis" + run_number + "") != null) {
	document.getElementById("siparisler").innerHTML +=  localStorage.getItem("emin_new2_siparis" + run_number + "");
	}

	document.getElementById("siparis_durum_id" + run_number + "").style.border= localStorage.getItem("emin_onay_border_id" + run_number + "");
	document.getElementById("fiyat_miktar_id" + run_number + "").style.color= localStorage.getItem("emin_onay_color_id" + run_number + "");
	
	document.getElementById("sandalye_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_sandalye" + run_number + ""));
	document.getElementById("masa_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_masa" + run_number + ""));
	document.getElementById("cadir_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_cadir" + run_number + ""));
	document.getElementById("cayocagi_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_cayocagi" + run_number + ""));
	document.getElementById("projektor_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_projektor" + run_number + ""));
	document.getElementById("telefon_id" + run_number + "").innerText= localStorage.getItem("emin_telefon" + run_number + "");
	document.getElementById("isim_id" + run_number + "").innerText= localStorage.getItem("emin_isim" + run_number + "");
	document.getElementById("tarih_id" + run_number + "").innerText= localStorage.getItem("emin_tarih" + run_number + "");
	document.getElementById("aciklama_id" + run_number + "").innerText= localStorage.getItem("emin_aciklama" + run_number + "");
	document.getElementById("adres_id" + run_number + "").innerText= localStorage.getItem("emin_adres" + run_number + "");
	document.getElementById("fiyat_id" + run_number + "").innerText= Math.floor(localStorage.getItem("emin_fiyat" + run_number + "")).toLocaleString("en-US");
	
	document.getElementById("tasktitle_id" + run_number + "").style.display= localStorage.getItem("emin_s_display" + run_number + "");
	document.getElementById("siparis_durum_id" + run_number + "").style.display= localStorage.getItem("emin_s_display" + run_number + "");
	}, 10);	
}

const myTimeout = setTimeout(timeout, 500);

function timeout() {
  document.getElementById("loading").style.display = "none";
}
