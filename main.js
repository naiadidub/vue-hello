const app = new Vue (
    {
        el: "#app",
        data: {
            messaggio: 'ciao vue',
            src: 'https://i0.wp.com/fattoalatina.it/wp-content/uploads/2020/06/santa-maria-goretti.jpg?fit=750%2C430&ssl=1',
            activeClass: false,
            disactiveHidden: false,

            
        },
        methods: {
            changeTitle(){
                this.activeClass = true
            },
            strobo(){
                this.disactiveHidden = true
            }
        }

    }
)