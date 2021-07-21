        const kisi = args.slice(0).join(" ")
        if(!kisi) return message.channel.send('Lütfen bir kullanıcı adı yazınız.')
        const bilgiler = 'https://www.habbo.com.tr/api/public/users?name=' + kisi
        axios
        .get(bilgiler)
        .then((res) => {
            console.log(res.data)
        

        const rozet0e = new MessageEmbed()
        .setTitle(res.data.selectedBadges[0].name)
        .addField('Rozet ID', res.data.selectedBadges[0].code)
        .setImage('https://images.habbo.com/c_images/album1584/' + res.data.selectedBadges[0].code + '.gif')

        message.channel.send(rozet0e)

        

        const rozet1e = new MessageEmbed()
        .setTitle(res.data.selectedBadges[1].name)
        .addField('Rozet ID', res.data.selectedBadges[1].code)
        .setImage('https://images.habbo.com/c_images/album1584/' + res.data.selectedBadges[1].code + '.gif')

        message.channel.send(rozet1e)


        .catch((err) => {
            console.error('Hata:', err)
    
        })

        const rozet2e = new MessageEmbed()
        .setTitle(res.data.selectedBadges[2].name)
        .addField('Rozet ID', res.data.selectedBadges[2].code)
        .setImage('https://images.habbo.com/c_images/album1584/' + res.data.selectedBadges[2].code + '.gif')

        message.channel.send(rozet2e)


        .catch((err) => {
            console.error('Hata:', err)
    
        })
        const rozet3e = new MessageEmbed()
        .setTitle(res.data.selectedBadges[3].name)
        .addField('Rozet ID', res.data.selectedBadges[3].code)
        .setImage('https://images.habbo.com/c_images/album1584/' + res.data.selectedBadges[3].code + '.gif')

        message.channel.send(rozet3e)


        .catch((err) => {
            console.error('Hata:', err)
    
        })

        const rozet4e = new MessageEmbed()
        .setTitle(res.data.selectedBadges[4].name)
        .addField('Rozet ID', res.data.selectedBadges[4].code)
        .setImage('https://images.habbo.com/c_images/album1584/' + res.data.selectedBadges[4].code + '.gif')

        message.channel.send(rozet4e)


        .catch((err) => {
            console.error('Hata:', err)
    
        })

    })

    .catch((err) => {
        console.error('Hata:', err)
        message.channel.send('Kullanıcının rozeti bulunmuyor')

    })


    }
}
