        // bar

        let container = document.getElementById('container')

            // mode

                document.body.style.background = 'white'

                function set_mode(){
                    if(document.body.style.background == 'white'){
                        document.body.style.background = 'blue'
                    }
                    else if(document.body.style.background == 'blue'){
                        document.body.style.background = 'white'
                    }
                    console.log('setmode')
                }



            // back
                let screen = 0

                let back = document.getElementById('back')
                back.style.display = 'none'

                function get_back(){
                    if(screen == 1){
                        hello.style.display = 'block'
                        lp_setting.style.display = 'none'
                        back.style.display = 'none'
                        console.log('getback')
                    }
                    if(screen == 2){
                        players_list.style.display = 'none'
                        lp_setting.style.display = ''
                        console.log('getback')
                        screen = 1
                    }
                    if(screen == 3){
                        players.style.display = 'none'
                        blue_player.style.display = 'none'
                        red_player.style.display = 'none'
                        blue_2_player.style.display = 'none'
                        red_2_player.style.display = 'none'
                        blue_4_1_player.style.display = 'none'
                        red_4_1_player.style.display = 'none'
                        blue_4_2_player.style.display = 'none'
                        red_4_2_player.style.display = 'none'
                        players_list.style.display = ''
                        screen = 2
                    }
                }

        // hello

        let hello = document.getElementById('hello')

        function start_playing(){
            hello.style.display = 'none'
            back.style.display = 'inline'
            console.log('startplaying')
            screen = 1
        }



        

        // lp_setting
            
            let lp_setting = document.getElementById('lp_setting')
            let global_lp = 0


            // show lp_setting_list
                lp_setting.style.display = 'none'

                function show_lp_setting_list(){
                    lp_setting.style.display = ''
                    console.log('show_lp_setting_list')
                    screen = 1
                }

            // set_lp_setting
                function set_lp_setting(number){
                    global_lp = number
                    console.log(`lp is ${global_lp}`)
                }

        // players list 
            let players_list = document.getElementById('players_list')

            players_list.style.display = 'none'

            function show_players_list(){
                players_list.style.display = ''
                lp_setting.style.display = 'none'
                console.log('show_players_list')
                screen = 2
            }


        
        // players

            let players = document.getElementById('players')

            players.style.display = 'none'

            // blue player

                let blue_player = document.getElementById('blue_player')
                let blue_player_lp = document.getElementById('blue_player_lp')
                let increase_blue_player_lp = document.getElementById('increase_blue_player_lp')
                let reduse_blue_player_lp = document.getElementById('reduse_blue_player_lp')
            
                // show 

                blue_player.style.display = 'none'

                function show_blue_player(){
                    players.style.display = ''
                    blue_player.style.display = 'grid'
                    players_list.style.display = 'none'
                    screen = 3
                    if(blue_player_lp.innerHTML == ''){
                        console.log(global_lp)
                        blue_player_lp.innerHTML = global_lp
                    }
                }

            // red player

                let red_player = document.getElementById('red_player')
                let red_player_lp = document.getElementById('red_player_lp')
                let increase_red_player_lp = document.getElementById('increase_red_player_lp')
                let reduse_red_player_lp = document.getElementById('reduse_red_player_lp')
            
                // show 

                red_player.style.display = 'none'

                function show_red_player(){
                    players.style.display = ''
                    red_player.style.display = 'grid'
                    players_list.style.display = 'none'
                    screen = 3
                    if( red_player_lp.innerHTML == '' ){
                        console.log(global_lp)
                        red_player_lp.innerHTML = global_lp
                    } 
                }

            // 2 players

                // blue 2 player

                let blue_2_player = document.getElementById('blue_2_player')
                let blue_2_player_lp = document.getElementById('blue_2_player_lp')
                let increase_blue_2_player_lp = document.getElementById('increase_blue_2_player_lp')
                let reduse_blue_2_player_lp = document.getElementById('reduse_blue_2_player_lp')
            
                // show 

                blue_2_player.style.display = 'none'

                function show_blue_2_player(){
                    players.style.display = ''
                    blue_2_player.style.display = 'grid'
                    players_list.style.display = 'none'
                    screen = 3
                    if(blue_2_player_lp.innerHTML == ''){
                        console.log(global_lp)
                        blue_2_player_lp.innerHTML = global_lp
                    }
                }

                // red 2 player

                    let red_2_player = document.getElementById('red_2_player')
                    let red_2_player_lp = document.getElementById('red_2_player_lp')
                    let increase_red_2_player_lp = document.getElementById('increase_red_2_player_lp')
                    let reduse_red_2_player_lp = document.getElementById('reduse_red_2_player_lp')
                
                    // show 

                    red_2_player.style.display = 'none'

                    function show_red_2_player(){
                        players.style.display = ''
                        red_2_player.style.display = 'grid'
                        players_list.style.display = 'none'
                        screen = 3
                        if(red_2_player_lp.innerHTML == ''){
                            console.log(global_lp)
                            red_2_player_lp.innerHTML = global_lp
                        }  
                    }
            // 2 players

                // blue 1 

                let blue_4_1_player = document.getElementById('blue_4_1_player')
                let blue_4_1_player_lp = document.getElementById('blue_4_1_player_lp')
                let increase_blue_4_1_player_lp = document.getElementById('increase_blue_4_1_player_lp')
                let reduse_blue_4_1_player_lp = document.getElementById('reduse_blue_4_1_player_lp')
            
                // show 

                blue_4_1_player.style.display = 'none'

                function show_blue_4_1_player(){
                    players.style.display = ''
                    blue_4_1_player.style.display = 'grid'
                    players_list.style.display = 'none'
                    screen = 3
                    if(blue_4_1_player_lp.innerHTML == ''){
                        console.log(global_lp)
                        blue_4_1_player_lp.innerHTML = global_lp 
                    }
                }

                // red 1 

                    let red_4_1_player = document.getElementById('red_4_1_player')
                    let red_4_1_player_lp = document.getElementById('red_4_1_player_lp')
                    let increase_red_4_1_player_lp = document.getElementById('increase_red_4_1_player_lp')
                    let reduse_red_4_1_player_lp = document.getElementById('reduse_red_4_1_player_lp')
                
                    // show 

                    red_4_1_player.style.display = 'none'

                    function show_red_4_1_player(){
                        players.style.display = ''
                        red_4_1_player.style.display = 'grid'
                        players_list.style.display = 'none'
                        screen = 3
                        if( red_4_1_player_lp.innerHTML == ''){
                            console.log(global_lp)
                            red_4_1_player_lp.innerHTML = global_lp
                        }
                    }
                
                // blue 2

                let blue_4_2_player = document.getElementById('blue_4_2_player')
                let blue_4_2_player_lp = document.getElementById('blue_4_2_player_lp')
                let increase_blue_4_2_player_lp = document.getElementById('increase_blue_4_2_player_lp')
                let reduse_blue_4_2_player_lp = document.getElementById('reduse_blue_4_2_player_lp')
            
                // show 

                blue_4_2_player.style.display = 'none'

                function show_blue_4_2_player(){
                    players.style.display = ''
                    blue_4_2_player.style.display = 'grid'
                    players_list.style.display = 'none'
                    screen = 3
                    if(blue_4_2_player_lp.innerHTML == ''){
                        console.log(global_lp)
                        blue_4_2_player_lp.innerHTML = global_lp
                    }
                }

                // red 2 

                    let red_4_2_player = document.getElementById('red_4_2_player')
                    let red_4_2_player_lp = document.getElementById('red_4_2_player_lp')
                    let increase_red_4_2_player_lp = document.getElementById('increase_red_4_2_player_lp')
                    let reduse_red_4_2_player_lp = document.getElementById('reduse_red_4_2_player_lp')
                
                    // show 

                    red_4_2_player.style.display = 'none'

                    function show_red_4_2_player(){
                        players.style.display = ''
                        red_4_2_player.style.display = 'grid'
                        players_list.style.display = 'none'
                        screen = 3
                        if(red_4_2_player_lp.innerHTML == ''){
                            console.log(global_lp)
                            red_4_2_player_lp.innerHTML = global_lp
                        }
                    }
                
                


        // change lp

            function change_lp(player , increase , reduse){
                let result = (+player.innerHTML + +increase.value - +reduse.value )
                console.log(+player.innerHTML)
                console.log(+increase.value)
                console.log(+reduse.value)
                console.log(+result)
                if( result < 0 ){
                    result = 0
                }
                player.innerHTML = +result
                if(result >= 2500){
                    player.style.color = 'green'
                }
                else if(result >= 1500){
                        player.style.color = 'greenyellow'
                }
                else if( result >= 500){
                    player.style.color = 'yellow'
                }
                else {
                    player.style.color = 'red'
                }
                increase.value = ''
                reduse.value = ''
            }





        // test

        console.log('____________________' )
        console.log('js working')
        console.log('____________________')