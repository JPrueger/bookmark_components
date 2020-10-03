<template>
    <div class="container">
        <div v-if="error" class="info">{{error}}</div>

        <div v-if="loading" class="info">Lade...</div>

        <div v-if="post">
            <div class="detail" v-bind:class="{ 'is-edit-mode': editMode }">

                <!-- Hier haben wir die normale Ansicht, wenn nicht bearbeitet wird (je nachdem auf was die Variable "editMode" gesetzt ist) -->
                <div v-if="editMode === false">
                    <h1>{{post.title}}</h1> 

                    <p class="teaser">
                        {{post.teaser}}
                    </p>

                    <div class="wrapper">
                        <p>
                            {{post.content}}
                        </p>
                    </div>
                </div>

                <!-- Hier haben wir die Ansicht, wenn wir im Bearbeitungsmodus sind (selbe Daten, nur jetzt mit Eingabefeldern) -->
                <div v-else>
                    <form action="#" v-on:submit="updatePost">
                        <h1>Post bearbeiten</h1>

                        <h1>
                            <input type="text" class="input" v-model="post.title" placeholder="Titel" />
                        </h1> 

                        <p class="teaser">
                            <input type="text" class="input" v-model="post.teaser" placeholder="Teaser" />
                        </p>

                        <div class="wrapper">
                            <p>
                                <textarea v-model="post.content" class="input" rows="20" placeholder="Content"></textarea>
                            </p>
                        </div>

                        <input type="submit" class="btn btn-success" value="Speichern" />
                    </form>
                </div>
                
                <p v-if="editMode == false">
                    <button type="button" v-on:click="setEditMode()">Bearbeiten</button> &nbsp;&nbsp;
                    <button type="button" v-on:click="deletePost(post.id)">Löschen</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import postDataService from '@/services/postDataService';

export default {
    name: 'PostDetail',
    data: () => ({
        // daten
        post: null,

        // hilfsvariablen 
        loading: false,
        error: null,
        editMode: false,
    }),

    methods: {
        // ändere einfach die Variable editMode auf "true", um oben das Formular mit Hilfe von "v-if" anzuzeigen
        setEditMode: function() {
            this.editMode = true;
        },

        updatePost: function(e) {
            // das "Standardverhalten" von form-submit verhindern (sonst würde die Seite neu laden)
            e.preventDefault();
            
            // hol die aktuelle post ID, die in der URL steht
            const postIdFromUrl = this.$route.params.postId;

            // ruf nun den Speicherservice auf und übergib die aktuelle Post id und den aktuellen Status von post (da wir im Formular an "post" binden, sind dort die Werte aktuell was in unserem Formular steht). Das senden wir nun mit der Bitte umein Update an unsere API.
            postDataService.update(postIdFromUrl, this.post)
                           .then((post) => {
                                // sichergehen, dass wir unsere Ansicht auf die aktuellsten Daten anpassen
                                this.post = post;

                                // den Bearbeitungsmodus wieder deaktivieren
                                this.editMode = false;
                           })
                           .catch((error) => {
                               alert('FEHLER: '+ error);
                           });
        },

        deletePost: function(postId) {
            // ruf nun den Löscheservice auf und übergib die aktuelle Post id
            postDataService.delete(postId)
                           .then(() => {
                                // wenn wir den Post gelöscht haben, gibt es nichts mehr anzuzeigen.
                                // in diesem Fall möchten wir einfach wieder zur Startseite navigieren
                                // um "programmatisch" (also nicht über einen speziellen Link) zu navigieren, könnt ihr diese Funktion verwenden
                                this.$router.push('/');
                           })
                           .catch((error) => {
                               alert('FEHLER: '+ error);
                           });
        },
    },

    // lade den korrekten Post beim Laden der Komponente
    created() {
        // hol die aktuelle post ID, die in der URL steht
        const postIdFromUrl = this.$route.params.postId;

        // zeige "ladestatus an"
        this.loading = true;

        // hol den korrekten Post
        postDataService.find(postIdFromUrl)
                       // wenn das Versprechen eingelöst wird (alles hat funktioniert in der API)
                       .then((post) => {
                           this.post = post;

                           // Loading status zurücksetzen
                           this.loading = false;
                       })
                       // falls es einen Fehler gibt, wollen wir ihn fangen (catch)
                       .catch((error) => {
                           // setze den Fehler in unsere Komponenten Variable "error" (um sie anzuzeigen)
                           this.error = error;
                        
                           // lösche den Ladestatus
                           this.loading = false; 
                       })
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/variables.scss';

    .detail {
        margin-top:40px;
        margin-bottom:40px;

        .teaser {
            margin:0;
            font-size:0.9em;
            color:$fontColorLight1;
            margin-bottom:15px;
        }

        .wrapper {
            margin:20px 0;
            background:$boxColor;
            padding:20px 30px;
        }

        &.is-edit-mode {
            background:$secondaryColor;
            padding:30px;

            .wrapper {
                background:transparent;
                padding:0;
                margin:0;
            }
        }
    }

    .info {
        text-align:center;
        padding:50px 0;
        font-size:1.2rem;
    }
    
</style>
