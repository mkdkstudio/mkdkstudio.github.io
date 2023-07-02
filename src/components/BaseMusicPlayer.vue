<template>
    <div>
        <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1645815742%3Fsecret_token%3Ds-YukGgWiEcps&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true"></iframe>
    </div>
</template>
  
<script>
export default {
    props: {
        iframeSrc: {
            type: String,
            required: true,
        },
    },
};
</script>
