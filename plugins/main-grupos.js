import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://qu.ax/cXEr.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Hola!, te invito a formar parte de la comunidad de 
> SON GOKU / TEAM

>  Enlace Grupo 🌙TeamShining🌙

*👑* ${group}

*◆━━━━━━━▣✦▣━━━━━━━━◆ *

> ⚠️ Enlace anulado? entre aquí! 

Canal :
*🪐* ${canal}
*◆━━━━━━━▣✦▣━━━━━━━━◆ *
> TEAM MoonLight Team

> CANAL 
https://whatsapp.com/channel/0029Vablj8M05MUnustq3q1S 

> GRUPO https://chat.whatsapp.com/GpbF3JCTEr2CSj3zLJ1IQj 


> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler
