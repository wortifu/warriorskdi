/****************************************************
 * COMMAND DISINI *
 ****************************************************/

bot.start((ctx) => {
  ctx.replyIt("Started !!!");
});

bot.cmd("help", (ctx) => {
  let psn = "<b>✳️ Silahkan isi format berikut</b>\n\n";
  psn += "<code>TYPE ORDER : (REGULER/MANUAL/UNSPEK/SQM)\n";
  psn +=
    "NO TIKET : IN.../ -\nNO INET/TELP : (152../03..)\nSTO : (KDI/MJT/PAE)\nPENYEBAB GGN : (Putus crossing)\nPERBAIKAN GGN : (Ganti dc)\nTEKNISI : (Bheni - Joko)\nMATERIAL : (ont/stb/dc meter)\nLETAK PERBAIKAN :(ONT/STB/DROPCORE/ODP/ODC)</code>";
  psn += "\n\n<i>⚠️ bot tidak respon berarti data tidak direkam</i>";
  psn += "\n<i>ℹ️ Bantuan kirim wa tanpa save nomor > wortifubot.t.me</i>";
  ctx.replyIt(psn);
});

bot.hears(/^TYPE ORDER ?: ?(reguler|manual|sqm|unspek)\nNO TIKET ?: ?(inc?\d+|\-)?\nNO INET\/TELP ?: ?(15\d+|03\d+)\nSTO ?: ?(\w{3})\nPENYEBAB GGN ?: ?(.+)\nPERBAIKAN GGN ?: ?(.+)\nTEKNISI ?: ?(.+)\nMATERIAL ?: ?(.+)\nLETAK PERBAIKAN ?: ?(ONT|STB|DROPCORE|ODP|ODC)?/gmi, ctx => {
    if (ctx.chat.type === 'private') return ctx.replyIt("<b><i>❌ Maaf rekans, Laporan hanya di group tertentu yaa !</i></b>")
  
    let continuity = Dualgram.Discontinue(token, ctx.from.id, 2)
  if (continuity) return ctx.replyIt('<i>⛔️ Maaf rekan, Jangan di kirim bersamaan(spam) yaa.. kirim kembali dalam 5 detik</i>'); // blok update jika sudah melebihi 2x proses dengan id yg sama
  
    let type = ctx.match[1].toUpperCase()
    let tiket = ctx.match[2] ?? '-'
    let inet = "'" + ctx.match[3]
    let sektor = ctx.match[4].toUpperCase()
    let sebab = ctx.match[5]
    let solusi = ctx.match[6]
    let teknisi = ctx.match[7]
    let material = ctx.match[8] ?? '-'
    let letakperbaikan = ctx.match[9]
    let tgl = helper.formatDate(new Date(), 'dd/MM/YYYY')
    let jam = helper.formatDate(new Date(), 'HH:mm:ss')
  
    if (!letakperbaikan) return ctx.replyIt('<i>Mohon perbaiki formatnya yaa</i>😊 <b>'+ ctx.from.fullname + '</b>\n- Bantuan format tekan /help')
  
    try {
      db.add(inet, tiket, sebab, solusi, teknisi, tgl, jam, ctx.from.username, sektor, material, type, letakperbaikan)
      ctx.replyIt(`<i>🙏 <b>Terimakasih rekan ${ctx.from.fullname}</b></i>\n<i>✅ Data tersimpan ke database ></i> <code>A${db.last_row}</code>`)
    }
    catch (e) {
      let emror = helper.catchError(e, 'HTML')
    ctx.replyIt('❌ <i><b>something went wrong,</b> log error has been sent to adminbot, please wait ...</i>')
    return bot.tg.sendMessage(95344878, '<b>❌ ADA LOG EROR BANG :</b>\n\n' + emror + '\n' + e.message)
    }
  })
