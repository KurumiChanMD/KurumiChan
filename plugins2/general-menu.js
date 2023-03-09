import jimp from 'jimp'
import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'
import { apivisit } from './kanghit.js'

const defaultMenu = {
  before: `
Hi kak %name 👋

Date: %date
Time: %time
Runtime: %uptime
%readmore`,
  header: '*%category*',
  body: '• %cmd %islimit %isPremium',
  footer: '',
  after: `Bantu Follow Kak :\nTikTok : @pnggilajacn\nInstagram : @pnggilajacn\nGithub : Chandra-XD`,
}

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {}
  
  try {
    let name = m.pushName || conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta'
    })
    let time = d.toLocaleTimeString(locale, { timeZone: 'Asia/Jakarta' })
    time = time.replace(/[.]/g, ':')
    let _uptime
    if (process.send) {
      process.send('uptime')
      _uptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(cita)).buffer()
    let uptime = clockString(_uptime)
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    
    
if (teks == '404') {
let groups = Object.keys(await conn.groupFetchAllParticipating())
let chats = Object.keys(await conn.chats)
let block = await conn.fetchBlocklist()
let hit_kabeh = await fetch(`https://api.countapi.xyz/hit/ItsukaChan/visits`)
let hk = await hit_kabeh.json()

let to = new Date('Maret 13, 2023 00:00:00')
let now = new Date().getTime()
let distance = to - now
let days = Math.floor( distance / (1000 * 60 * 60 * 24));
let hours = Math.floor( distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
let minute = Math.floor( distance % (1000 * 60 * 60) / (1000 * 60))
let second = Math.floor( distance % (1000 * 60) / 1000)
let judul = `*${ucapan()} ${conn.getName(m.sender)}*

*INFO BOT*
•> Aktif selama ${uptime}
•> *${hk.value}* Total Hit
•> *${groups.length}* Grup
•> *${chats.length - groups.length}* Chat Pribadi
•> *${Object.keys(global.db.data.users).length}* Pengguna
•> ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}
•> *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
•> *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned

*NOTE :*
_Beri jeda minimal 10 detik kak saat menggunakan bot._`
let sections = [{
        title: `Menuju Ultah Owner : ${days} Hari ${hours} Jam ${minute} Menit ${second} Detik`,
        rows: [
          { title: 'Allmenu Bot', rowId: `${_p}? all`},
          { title: 'Status Bot', rowId: `${_p}status`},
          { title: 'Stats Bot', rowId: `${_p}stats`},
          { title: 'Speed Bot', rowId: `${_p}speed`},
          { title: 'Script Bot', rowId: `${_p}sc`},
          { title: 'Owner Bot', rowId: `${_p}owner`},
          { title: 'Rules Bot', rowId: `${_p}rules`},
          { title: 'Rental Bot', rowId: `${_p}rental`},
          { title: 'Support Bot', rowId: `${_p}donasi`},
          { title: 'Thanks To', rowId: `${_p}ttq`},
        ]
        }]
let listMessage = {
      text: judul,
      footer: `Rest Api: _https://pnggilajacn.my.id/bot_\nGrup Bot: _https://pnggilajacn.my.id/group_`,
      mentions: await conn.parseMention(judul),
      title: '',
      buttonText: "Continue ⎙",
      sections
    }
return conn.sendMessage(m.chat, listMessage, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'}, message: { pollCreationMessage: { name: `Simple Bot WhatsApp` } } }, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
await apivisit
}

    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag].toUpperCase()) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                .replace(/%isPremium/g, menu.premium ? 'Ⓟ' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      me: conn.getName(conn.user.jid),
      name, date, time,
      readmore: readMore
    }
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    // const pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => './src/avatar_contact.png')
    // if (m.isGroup) return conn.sendButton(m.chat, text.trim(), conn.getName(conn.user.jid), pp, [['Speedtest', _p + 'ping'], ['Owner', _p + 'owner']], m)
    //conn.sendHydrated(m.chat, text.trim(), conn.getName(conn.user.jid), await genProfile(conn, m), 'https://youtube.com/channel/UC0hs_I8N3JntK5vO6KogavQ', 'YouTube', null, null, [['Speedtest', _p + 'ping'], ['Owner', _p + 'owner']], m)
let templateButtons = [
    {index: 1, urlButton: {displayText: 'sᴀᴡᴇʀɪᴀ', url: `https://saweria.co/pnggilajacn` }},
    {index: 2, urlButton: {displayText: 'ᴛʀᴀᴋᴛᴇᴇʀ', url: `https://trakteer.id/pnggilajacn` }},
    {index: 3, quickReplyButton: {displayText: 'ʀᴜʟᴇs', id: '.rules'}},
    {index: 4, quickReplyButton: {displayText: 'ᴏᴡɴᴇʀ', id: '.owner'}},
]
let aemve = pickRandom([`https://github.com/Chandra-XD/cn-grabbed-result/raw/main/media/video/amv1.mp4`, `https://storage.${global.baseURL}/file/yae-miko.mp4`])
let videomessage = {
video: { url: aemve },
gifPlayback: true,
gifAttribution: ~~(Math.random() * 2),
caption: text.trim(),
footer: wm,
templateButtons: templateButtons
}
conn.sendMessage(m.chat, videomessage, { quoted: m, ephemeralExpiration: global.ephemeral, forwardingScore: 99999, isForwarded: true })
await apivisit
  } catch (e) {
    m.reply('An error occurred')
    throw e
  }
  }
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(allmenu|menu|help|\?)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

async function genProfile(conn, m) {
  let font = await jimp.loadFont('./names.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read(thumbnailUrl.getRandom()),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'
    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())
    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}

function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Ohayou...'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Ohayou...'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Konnichiwa...'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Konnichiwa...'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Konbanwa...'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Konbanwa...'
        } else {
          ucapanWaktu = 'Konbanwa'
        }	
        return ucapanWaktu
}