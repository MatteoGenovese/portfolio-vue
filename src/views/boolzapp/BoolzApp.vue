<template>
    <div class="boolzapp">



            <div class="visual-message">
                <div class="visual-message_text">
                    <span class="fi fi-gb"></span>
                    This page is designed for viewing on desktop screens and may not be compatible with smaller devices. I recommend accessing this page from a computer for the best browsing experience, or using the zoom out function to adjust the display of the content.
                    <br>
                    <br>
                    ------------------------------
                    <br>
                    <br>
                    <span class="fi fi-it"></span>
                    Questa pagina è progettata per essere visualizzata su schermi desktop e potrebbe non essere compatibile con dispositivi più piccoli. Ti suggerisco di accedere a questa pagina da un computer per un'esperienza di navigazione ottimale, oppure di utilizzare la funzione di zoom indietro per adattare la visualizzazione del contenuto.
    
                </div>
            </div>

        <div class="" id="left-container">

            <div class="h60px" id="user">
                <img src="../../assets/boolzapp/avatar_io.jpg" alt="Sofia" class="avatar-small">
                <span class="flex-grow">Sofia</span>
                <div class="icon"><i class="fa-solid fa-circle-notch"></i></div>
                <div class="icon"><i class="fa-solid fa-message"></i></div>
                <div class="icon"><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>


            <div class="" id="app-notification">
                <div class="bell-container centering-content">
                    <i class="fa-solid fa-bell-slash "></i>
                </div>
                <div class="">
                    <div>Ricevi notifiche di nuovi messaggi</div>
                    <a href="#">Attiva notifiche desktop</a>
                </div>
            </div>

            <div class="h60px" id="search-box">
                <div class="input-group">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" class="form-control" placeholder="Cerca o inizia una nuova chat"
                        aria-label="Cerca o inizia una nuova chat" id="search-input" v-model="searchString">
                </div>
            </div>



            <div id="contacts-container">
                <div v-for="(contact, index) in contacts" :key="index" class="contact" @click="changeIndex(index)"
                    @mouseover="higlightContact(index)" :class="{
                        'd-none': !includesLowerCase(getName(index), searchString),
                        'hover': highlightedIndex == index,
                    }">
                    <div class="centering-content avatar-medium">
                        <img :src="require(`../../assets/boolzapp/avatar${contact.avatar}.jpg`)" class="round-image"
                            alt="getName(index)">
                    </div>
                    <div class="preview-container">
                        <div class="inline">
                            <div>{{ getName(index) }}</div>
                            <div class="last-message">{{ returnObject(index).date }}</div>
                        </div>
                        <div>
                            <div>{{ returnObject(index).message }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div id="right-container">
            <div id="chat-contact">
                <div class="h50px">
                    <img :src="require(`../../assets/boolzapp/avatar${contacts[activeIndex].avatar}.jpg`)"
                        :alt="contacts[activeIndex].name" id="main-avatar">
                </div>
                <span class="flex-grow">{{ contacts[activeIndex].name }}</span>
                <div class="icon"><i class="fa-solid fa-circle-notch"></i></div>
                <div class="icon"><i class="fa-solid fa-message"></i></div>
                <div class="icon"><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>

            <div class="flex-grow" id="message-box" @click="resetMenuMessage()">
                <div id="message-container">

                    <div v-for="(message, messageIndex) in contacts[activeIndex].messages" :key="messageIndex" :class="{
                        'message-sent': message.status === 'sent',
                        'message-received': message.status === 'received',
                        'd-none': message.status === 'deleted'
                    }">

                        <div class="message inline">
                            <span>{{ message.message }}</span>
                            <a href="" @click.prevent="showMessageMenu(messageIndex)" @mouseleave="noMoreHover()">
                                <i class="fa-solid fa-chevron-down"></i>
                            </a>

                            <div class="" :class="{
                                'd-none': messageMenuIndex != messageIndex,
                                'box': messageMenuIndex == messageIndex
                            }">
                                <div>Message info</div>
                                <a href="#" @click="deleteMessage(messageMenuIndex)">Delete Message</a>
                            </div>
                        </div>
                        <div class="message-time align-self-end">
                            {{ message.date }}
                        </div>
                    </div>
                </div>
            </div>


            <div id="send-messages">
                <div class="icon d-flex justify-content-center"><i class="fa-solid fa-face-smile "></i></div>

                <input type="text" class="input-text" placeholder="Scrivi un messaggio" aria-label="Scrivi un messaggio"
                    v-model="message" @keyup.enter="sendNewMessage(message)">

                <div class="icon d-flex justify-content-center"><i class="fa-solid fa-microphone "></i></div>
            </div>
        </div>
    </div>


</template>

<script>

import moment from 'moment';


export default {
    methods: {


        getImgUrl: function (indexElement) {
            return `../../assets/boolzapp/avatar${this.contacts[indexElement].avatar}.jpg`;
        },
        getName: function (indexElement) {
            return this.contacts[indexElement].name;
        },
        changeIndex: function (indexElement) {
            this.activeIndex = indexElement;
            this.messageMenuIndex = null;
        },
        sendNewMessage: function (newMessage) {
            this.contacts[this.activeIndex].messages.push({
                date: moment().format("DD/MM/YYYY hh:mm:ss"),
                message: newMessage,
                status: 'sent',
            });
            this.message = "";
            setTimeout(this.haveNewReply, 1000);
        },
        haveNewReply: function () {
            this.contacts[this.activeIndex].messages.push({
                date: moment().format("DD/MM/YYYY hh:mm:ss"),
                message: 'OK!!',
                status: 'received',
            });
        },
        includesLowerCase: function (inputString, stringToSearch) {
            if (inputString.toLowerCase().includes(stringToSearch.toLowerCase()))
                return true;
            else
                return false;
        },
        higlightContact: function (newIndex) {
            this.highlightedIndex = newIndex;
        },
        showMessageMenu: function (newIndex) {
            if (this.messageMenuIndex == newIndex) {
                this.messageMenuIndex = null;
                this.hover = false;
            } else {
                this.messageMenuIndex = newIndex;
                this.hover = true;
            }
        },
        resetMenuMessage: function () {
            if (this.messageMenuIndex != null && this.hover == false)
                this.messageMenuIndex = null;
        },
        noMoreHover: function () {
            this.hover = false;
        },
        deleteMessage: function (indexPassed) {
            this.contacts[this.activeIndex].messages[indexPassed].status = "deleted"
        },
        returnObject: function (indexPassed) {
            var lastIndex = this.contacts[indexPassed].messages.length - 1
            if (this.contacts[indexPassed].messages.length > 0) {
                return this.contacts[indexPassed].messages[lastIndex]
            } else {
                return {
                    date: "",
                    message: "Nessun nuovo messaggio",
                    status: '',
                }
            }
        }
    },
    data() {
        return {
            activeIndex: 0,
            highlightedIndex: 0,
            messageMenuIndex: null,
            hover: false,
            message: "",
            searchString: "",
            hover: false,
            displayFunctionality: false,
            contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
                ],
            }
            ]
        }
    },
}
</script>

<style lang="scss" >

@import "../../sass/boolzapp/app.scss";


.boolzapp {



    height: 90vh;
        width: 80vw;
        min-width: 800px;
        margin: 5vh auto;
        display: flex;
        background-color: #429488;
        .visual-message{
            display: none;
            @include respond(tab-port) {
                display: inline-block;
                padding: 5rem;
                width: 100%;
                height: 100vh;
                background: rgba(0, 0, 0, 0.9);
                position: fixed;
                z-index: 10000;
                color: white;
            }
            &__text{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                text-align: center;
                font-size: 2.5rem!important;

                @include respond(tab-port) { 
                    font-size: 2rem!important;                
                }
                @include respond(phone) {
                    font-size: 1.5rem!important;
                }


                }
            }
        @include respond(tab-port) {
            margin: 0;
            
        }
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        margin-right: 0;
        margin-left: 0;
        padding-right: 0;
        padding-left: 0;
    }

    // .boolzapp {
    //     height: 90vh;
    //     width: 80vw;
    //     min-width: 800px;
    //     margin: 5vh auto;
    //     display: flex;
    //     background-color: #429488;
    // }

    #user,
    #app-notification,
    #search-box,
    .contact,
    #chat-contact,
    #send-messages {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        width: 100%;
        padding: 10px;
    }

    #left-container {
        width: 35%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #right-container {
        width: 65%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #contacts-container {
        flex-grow: 1;
    }

    .centering-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .centering-content>img {
        width: 100%;
    }

    .input-group {
        display: flex;
        align-items: center;
    }


    /* .form-control {
        width: 60%;
    } */

    .flex-grow {
        flex-grow: 1;
    }

    .icon {
        width: 30px;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
    }

    #app-notification {
        background-color: #8EDAFC;
        height: 70px;
        justify-content: flex-start;
    }

    #contacts-container {
        background-color: #FFFFFF;
    }

    .preview-container {
        display: flex;
        flex-direction: column;
    }

    .inline {
        display: flex;
        justify-content: space-between;
    }

    #message-container {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 0 auto;
        padding: 30px 0;
    }

    .message-received,
    .message-sent {
        border-radius: 5px;
        padding: 10px 10px;
        margin-top: 20px;
        width: 35%;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .message-received {
        background-color: #FFFFFF;
        align-self: flex-start;
    }

    .message-sent {
        background-color: #D5F9BA;
        align-self: flex-end;
    }


    /* modifiche ------------------------------------------------------------------ */

    .header-wrapper {
        position: absolute;
        top: 0;
        height: 150px;
        width: 100%;
        background: #429488;
        z-index: 0;
    }

    #user,
    #right-container,
    #chat-contact {
        background-color: #EAEAEA;
    }

    body {
        background: #D9DBD5;
    }

    .main-wrapper {
        position: absolute;
        margin-top: 50px;
        width: 100%;
        z-index: 1;
    }

    .container {
        margin-top: 30px;
    }

    #main-avatar {
        height: 40px;
        width: 40px;
        min-width: 40px;
        border-radius: 50%;
    }

    .avatar-image {
        height: 40px;
        width: 40px;
    }

    .round-image {
        border-radius: 50%;
    }

    #main-user {
        height: 50px;
    }

    .h50px {
        height: 50px;
    }

    .h60px {
        height: 60px;
    }

    .h70px {
        height: 70px;
    }

    #left-container .bell-container {
        height: 50px;
        width: 50px;
        color: #8EDAFC;
        background: #FFFFFF;
        border-radius: 50%;
    }

    #left-container .last-message,
    .message-time {
        font-size: 0.75rem;
    }

    .preview-container {
        display: flex;
        flex-direction: column;
        padding-left: 12px;
        width: 100%;
    }

    #main-user span {
        margin-left: 12px;
    }

    .avatar-small {
        height: 40px;
        width: 40px;
        min-width: 40px;
        border-radius: 50%;
    }

    .avatar-medium {
        height: 50px;
        width: 50px;
        min-width: 50px;
        border-radius: 50%;
    }

    .bg-color {
        background-color: #FFFFFF;
    }

    #search-image {
        height: calc(1.5em + 0.75rem + 2px);
    }

    #message-box {
        background-image: url("../../assets/boolzapp/mine.jpg");
        width: 100%;
    }

    #send-messages {
        background-color: #F3EEEA;
    }

    .d-none {
        display: none;
    }

    .box {
        position: absolute;
        top: 30px;
        right: 0;
        background-color: #ffffff;
        margin: 10px 20px;
        z-index: 1;
        display: flex;
        flex-direction: column;
    }

    .box>* {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 30px;
    }

    .box div:hover {
        background-color: rgb(223, 223, 223);
    }

    .hover {
        background-color: rgb(223, 223, 223);
    }

    .input-text {
        width: 50%;
        height: 50%;
        padding: 1rem 2rem;
        border-radius: 1rem;
    }
}
</style>