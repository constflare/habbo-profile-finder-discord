        const kisi = args.slice(0).join(" ")
        if(!kisi) return message.channel.send('Lütfen bir kullanıcı adı yazınız.')
        const bilgiler = 'https://www.habbo.com.tr/api/public/users?name=' + kisi
        const profil = 'https://www.habbo.com.tr/profile/' + kisi
        axios
        .get(bilgiler)
        .then((res) => {
            console.log(res.data)
        const mottosu = res.data.motto || "Kullanıcının Mottosu Bulunmuyor"
        const embed = new MessageEmbed()
        .setTitle(kisi + ' Adlı kullanıcının avatarı')
        .setURL(profil)
        .addField('Durum (true = Çevrimiçi | false = Çevrimdışı)', res.data.online)
        .addFields(
            { name: 'Motto', value: mottosu },
            { name: '\u200B', value: '\u200B' },
            { name: 'Son Giriş Tarihi', value: res.data.lastAccessTime, inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Kayıt Olma Tarihi', value: res.data.memberSince, inline: true },
            
        )
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Rozetler', value: 'Rozetleri görüntülemek için "i!rozet kullanıcı" komutunu kullanın.', inline: true },
        )
        .setImage('https://www.habbo.com.tr/habbo-imaging/avatarimage?hb=image&user=' + kisi)
        .setTimestamp()
        .setFooter('Coded by const#0001', 'https://www.habboxwiki.com/wiki/images/thumb/7/73/HabboApp.png/300px-HabboApp.png');
        
        message.channel.send(embed)

        .catch((err) => {
            console.error('Hata:', err)
    
        })
    })
    .catch((err) => {
        console.error('Hata:', err)
        message.channel.send('Girdiğiniz kullanıcı bulunamadı veya profili görünmezde')

    })
    }
}
