/***************************
 * wortifu :)  *
 ***************************/

const token = 'TOKEN_BOT';
const unlock = 'KODE_UNLOCK DARI WORTIFU'
const user = new Dualgram.userDB
const helper = new Dualgram.helper(unlock)
const button = Dualgram.button


const adminbot = 95344878 // rubah dengan ID telegram kamu ;
const idgrup = 95344878 // rubah dengan ID telegram kamu ;
const usernamebot = "USERNAME_BOT" // USERNAME BOT

/**
 * Deklarasi BOT / Library dibawah sini
 */

const bot = new Dualgram.init(token, {
  log_error: 95344878, //channel log error atau ID telegram kamu
  log_id: adminbot,
  username: usernamebot, //bot tidak akan merespon command di grup tanpa memanggil usernamenya
  prefix_command: './!$'  //prefix untuk menangkap teks sebagai command contoh : .ping , /ping, !ping
});

const version = Dualgram.version

Dualgram.defaultParse = 'HTML'
Dualgram.DoNotInviteMyBot = false
Dualgram.thumbnail = "https://telegra.ph/file/707741d53e9b615d6a283.jpg"

// cek informasi bot
function doPost(e) {
  bot.doPost(e)
}

function getMe() {
  let me = bot.tg.callApi("getMe", {})
  return Logger.log(me)
}

function setWebhook() {
  var url = "https://URL_DEPLOYMENT" // URL DEPLOYMENT SETELAH SETWEBHOOK
  var koneksi = 100
  var drop_pending = true // set false jika pending update ingin tetap di proses (Do With Your Risk)
  var r = bot.tg.callApi("setWebhook", { url: url, allowed_updates: [], drop_pending_updates: drop_pending, max_connections: koneksi })
  return Logger.log(helper.json(r))
}

// cek info hook bot
function getWebhookInfo() {
  let hasil = bot.tg.callApi("getWebhookInfo", {})
  return Logger.log(helper.json(hasil))
}

// hapus hook
function deleteWebhook() {
  let hasil = bot.tg.callApi("deleteWebhook", {})
  return Logger.log(helper.json(hasil))

}

