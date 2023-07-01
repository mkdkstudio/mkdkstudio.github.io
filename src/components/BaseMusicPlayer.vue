<template>
    <div class="music-player">
        <audio ref="audioPlayer" controls>
            <!-- Utilize o caminho correto do arquivo MP3 na pasta assets -->
            <source v-for="(song, index) in songs" :key="index" :src="getMusicPath(song.url)" :title="song.title">
        </audio>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            songs: [
                {
                    url: 'mkdk-action-guitar-song.mp3', // Caminho relativo ao arquivo MP3 na pasta assets
                    title: 'Song 1'
                }
                // Adicione mais músicas conforme necessário
            ]
        };
    },
    methods: {
        getMusicPath(url) {
            // Obtenha o caminho correto do arquivo MP3 na pasta assets
            console.log('@/assets/' + url);
            return require('~/assets/music/' + url).default;
        },
        play() {
            this.$refs.audioPlayer.play();
        },
        pause() {
            this.$refs.audioPlayer.pause();
        }
    }
};
</script>

<style>
.music-player {
    width: 100%;
    height: 400px;
    background-color: #f9f9f9;
    /* Cor de fundo para destacar o componente */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
  