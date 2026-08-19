const CHUNGUSMEID = '1296462287007121418';

fetch(`https://api.lanyard.rest/v1/users/${CHUNGUSMEID}`)
    .then(r => r.json())
    .then(d => {
        const data = d.data;

        const pfp = document.getElementById('discord-pfp');
        pfp.src = `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`;

        const nameEl = document.getElementById('discord-name');
        nameEl.textContent = data.discord_user.username;
        nameEl.href = `https://discord.com/users/${data.discord_user.id}`;

        const statusEl = document.getElementById('discord-status');
        //wish told me to do this LMFAO

        const customStatus = data.activities?.find(a => a.type === 4);
        const emojiEl = document.getElementById('discord-status-emoji');

        if (customStatus) {
            emojiEl.textContent = customStatus.emoji?.name + customStatus.state  ?? '';
            maybeMarquee(textEl, textEl.textContent);
        } else {
            emojiEl.textContent = '';
        }
    })
    .catch(() => {

        const nameEl = document.getElementById('discord-name');
        nameEl.removeAttribute('href');
    });

    // THX @5quirre1