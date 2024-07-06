/****************************************************
 * OPOTIONAL *
 ****************************************************/



bot.use((ctx, next) => {

    // Untuk memanipulasi Context atau ctx dapat dilakukan disini
    // Jika kalian kurang pemahaman atau masih ragu-ragu biarkan tetap kosong
  
    return next();
  
  })
  
  bot.on('location', ctx => {
    let anu = ctx.message.location
    let lat = anu.latitude
    let long = anu.longitude
    ctx.replyIt(`ℹ️ <b>Loc</b> : <code>${lat} ${long}</code>`)
  })
  
  
  
