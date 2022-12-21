window.onscroll=function(){
    if (document.body.scrollTop > 1450 || document.documentElement.scrollTop > 1450) {
        document.querySelector("#backToTop").style.display="flex"
    } else {
        document.querySelector("#backToTop").style.display = "none";
    }
}

const app = Vue.createApp({
    data() {
        return {
            loginData:{
                status:false,
                userName:"Silvester",
                userImg:"./images/userImg.jpg",
            },
            eventArea: [
                "寒假營隊專區", "競賽專區", "學生自辦", "免費專區", "檢定證照", "精選專區"
            ],
            aboutUs: ["網頁說明", "關於Lucker", "與我們聯繫"],
            info: [
                {
                    buttonName: "重要訊息",
                    infoItems: ["日期", "項目"],
                    infoDetails: [
                        {
                            date: "2022年12月25日",
                            subject: "伺服器維修通知"
                        },
                        {
                            date: "2023年1月1日",
                            subject: "元旦營業時間調整通知"
                        },
                    ],
                    show: true,
                },
                {
                    buttonName: "優惠資訊",
                    infoItems: ["日期", '項目'],
                    infoDetails: [
                        {
                            date: "2022年12月25日",
                            subject: "聖誕節特惠！把握時間全站85折！"
                        },
                        {
                            date: "2023年1月21日",
                            subject: "喜慶春節！指定課程輸入優惠碼享折扣！"
                        },
                        {
                            date: "2023年2月20日",
                            subject: "降價通知！微積分課程優惠中！"
                        },
                    ],
                    show: false,
                },
                {
                    buttonName: "學習資源",
                    infoItems: ['項目'],
                    infoDetails: [
                        {
                            date: "",
                            subject: "<a href='https://www.toeic.com.tw/'  target='_blank'>多益官方線上課程</a>"
                        },
                        {
                            date: "",
                            subject: "<a href='https://snapask.com/zh-tw/'  target='_blank'>Snapask</a>"
                        },
                        {
                            date: "",
                            subject: "<a href='https://tw.voicetube.com/?ref=logo'  target='_blank'>VoiceTube</a>"
                        },
                        {
                            date: "",
                            subject: "<a href='https://learning.cloud.edu.tw/onlinelearning/#gsc.tab=0'  target='_blank'>教育雲</a>"
                        },
                    ],
                    show: false,
                },
            ],
            infoSelectedIndex: 0,
            popular: [
                {
                    imgPath: "./images/popular.jpg",
                    title: "召集大一新鮮人！你的學習歷程可以幫助更多人！",
                    startTime: `2022年11月16號`,
                    endTime: `2023年1月29號`,
                    location: "線上",
                    fee: "免費",
                    hashtag: ["#學習歷程 ", "#徵件比賽 "]
                },
            ],
            showedPopular: [],
            freeStuff: [
                {
                    imgPath: "./images/free/2022第六屆周夢蝶詩獎.jpg",
                    title: "2022第六屆周夢蝶詩獎",
                    startTime: `2022年09月03日`,
                    endTime: `2023年1月31號`,
                    location: "線上",
                    fee: "免費",
                    hashtag: ["#文史哲學群 "]
                },
                {
                    imgPath: "./images/free/第六屆林佛兒獎.jpg",
                    title: "第六屆林佛兒獎",
                    startTime: `2022年10月14日`,
                    endTime: `2023年1月16號`,
                    location: "線上",
                    fee: "免費",
                    hashtag: ["#文史哲學群 ", "#社會與心理學群 "]
                },
                {
                    imgPath: "./images/free/2023年第十九屆全國電子設計創意競賽.jpeg",
                    title: "2023年第十九屆全國電子設計創意競賽",
                    startTime: `2023年03月25日`,
                    endTime: ``,
                    location: "線上",
                    fee: "免費",
                    hashtag: ["#資訊學群 ", "#工程學群 "]
                },
                {
                    imgPath: "./images/free/中藥概論.jpg",
                    title: "中藥概論（2022冬季班）",
                    startTime: `2022年12月12日`,
                    endTime: `2023年03月13日`,
                    location: "線上",
                    fee: "免費",
                    hashtag: ["#醫藥衛生學群 "]
                },
                {
                    imgPath: "...",
                    title: "...",
                    startTime: `...`,
                    endTime: `...`,
                    location: "...",
                    fee: "...",
                    hashtag: ["..."]
                },
            ],
            showedFreeStuff: [],
            campEvents: [
                {
                    imgPath: "./images/campEvents/python.png",
                    title: "Python程式設計營",
                    startTime: `2023年2月6日`,
                    endTime: `2023年2月8日`,
                    location: "國立台北商業大學",
                    fee: "5600元",
                    hashtag: ["#資訊學群 "]
                },
                {
                    imgPath: "./images/campEvents/shinchan.png",
                    title: "物闖？廣治一家！ 2023亞大物治營",
                    startTime: `2023年2月6日`,
                    endTime: `2023年2月9日`,
                    location: "亞洲大學校園",
                    fee: "4500元(早鳥)/4800元/團報請洽粉專",
                    hashtag: ["#數理化學群 ", "#醫藥衛生學群 "]
                },
                {
                    imgPath: "./images/campEvents/winterCamp.jpg",
                    title: "臺藝冬令營",
                    startTime: `2023年1月30日`,
                    endTime: `2023年2月10日`,
                    location: "台灣藝術大學",
                    fee: "3600~7000元",
                    hashtag: ["#建築與設計學群 ", "#藝術學群 "]
                },
                {
                    imgPath: "./images/campEvents/medicalWinterCamp.jpg",
                    title: "高中醫學營",
                    startTime: `2023年1月30日`,
                    endTime: `2023年2月2日`,
                    location: "中國醫藥大學",
                    fee: "8000元",
                    hashtag: ["#醫藥衛生學群 "]
                },
                {
                    imgPath: "...",
                    title: "...",
                    startTime: `...`,
                    endTime: `...`,
                    location: "...",
                    fee: "...",
                    hashtag: ["..."]
                },
            ],
            showedcampEvents: [],
            featuredEvents: [
                {
                    imgPath: "./images/featuredEvents/FM-交大-微積分 (1).png",
                    title: "FM-微積分（一）",
                    startTime: `2021年11月15日`,
                    endTime: `2030年12月31日`,
                    location: "線上",
                    fee: "免費",
                    hashtag: ["#數理化學群"]
                },
                {
                    imgPath: "./images/featuredEvents/FM-東海-人類的故事-課程圖片-2.png",
                    title: "FM-人類的故事",
                    startTime: `2021年11月15日`,
                    endTime: `2030年12月31日`,
                    location: "線上",
                    fee: "免費",
                    hashtag: ["#數理化學群"]
                },
                {
                    imgPath: "./images/featuredEvents/圖解表達力.jpg",
                    title: "圖解表達力：用心智圖思維，簡化複雜問題",
                    startTime: `2021年5月24日`,
                    endTime: ``,
                    location: "線上",
                    fee: "3600元",
                    hashtag: ["#數理化學群"]
                },
                {
                    imgPath: "./images/featuredEvents/聽我台灣的聲音ss.jpg",
                    title: "聽我台灣的聲音（111高中自主學習）",
                    startTime: `2022年7月1日`,
                    endTime: `2023年6月30日`,
                    location: "線上",
                    fee: "免費",
                    hashtag: ["#藝術學群"]
                },
                {
                    imgPath: "...",
                    title: "...",
                    startTime: `...`,
                    endTime: `...`,
                    location: "...",
                    fee: "...",
                    hashtag: ["..."]
                },
            ],
            showedFeaturedEvents: [],
            socialLink: [
                {
                    name: "Facebook",
                    link: "https://www.facebook.com/luckertw",
                    imgPath: "./images/footer-fb.png",
                },
                {
                    name: "Instagram",
                    link: "https://www.instagram.com/eport_lucker/",
                    imgPath: "./images/footer-ig.png",
                },
                {
                    name: "Youtube",
                    link: "https://www.youtube.com/channel/UC-YOu1WQQppd8GkvPefGQGA",
                    imgPath: "./images/footer-yt.png",
                },
            ]
        }
    },
    methods: {
        toggleInfoDetails(x) {
            this.info.forEach(target => {
                target.show = false
            })
            this.info[x].show=true
            this.infoSelectedIndex = x
            console.log(this.info)
        },
        backToTop(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        logOff(){
            this.loginData.staus=false
        },
        logIn(){
            this.loginData.status=true
        }
    },
    computed: {
        popularLength() {
            return this.popular.length
        },
        freeStuffLength() {
            return this.freeStuff.length
        },
        campEventsLength() {
            return this.campEvents.length
        },
        featuredEventsLength() {
            return this.featuredEvents.length
        }
    },
    mounted() {
        if (this.popularLength < 4) {
            this.showedPopular = this.popular
        } else {
            for (i = 0; i <= 3; i++) {
                this.showedPopular.push(this.popular[i])
            }
        }

        if (this.freeStuffLength < 4) {
            this.showedFreeStuff = this.showedFreeStuff
        } else {
            for (i = 0; i <= 3; i++) {
                this.showedFreeStuff.push(this.freeStuff[i])
            }
        }

        if (this.campEventsLength < 4) {
            this.showedFreeStuff = this.showedFreeStuff
        } else {
            for (i = 0; i <= 3; i++) {
                this.showedcampEvents.push(this.campEvents[i])
            }
        }

        if (this.featuredEventsLength < 4) {
            this.showedFeaturedEvents = this.featuredEvents
        } else {
            for (i = 0; i <= 3; i++) {
                this.showedFeaturedEvents.push(this.featuredEvents[i])
            }
        }
    }
})

app.mount("#app")