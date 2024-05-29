/***************************
 * MENGHUBUNGKAN KE SPREADSHEET  *
 ***************************/

var ssid = 'URL_ATAU_ID_SPREADSHEET'; //ID SPREADSHEET atau URLNYA

var db = new miniSheetDB2.init(ssid, 'Sheet1', {     // Nama Sheet
    col_length: 12, // jumlah kolom SESUAIKAN
    row_start: 2, // baris kolom dimulai, biarlah bang
    json: true
});