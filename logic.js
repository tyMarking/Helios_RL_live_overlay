    /*

    Coded by Slumware(#9370)
    Please follow me on YouTube and Twitch

	Moddified by TotallyNotARobit#3556
	Please don't follow me on YouTube and Twitch

    */
    const ws = new WebSocket('ws://localhost:49122');
		const half_bar_thickness = 4
    const diamond_length = 8
    function orangeResetAll() {

      //$("div[id^='orange-player-']").text('')
      $('#orange-team-name').text('')
      $("#orange-player-1, #orange-player-2, #orange-player-3").addClass('d-none')
      $('#orange-player-1-p-bar, #orange-player-2-p-bar, #orange-player-3-p-bar').width('0%')
    }

    function blueResetAll() {
      //$("div[id^='blue-player-']").text('')
      $('#blue-team-name').text('')
      $("#blue-player-1, #blue-player-2, #blue-player-3").addClass('d-none')

      $('#blue-player-1-p-bar, #blue-player-2-p-bar, #blue-player-3-p-bar').width('0%')
    }

    function resetBars() {
      return
      var c = document.getElementById("b3-pos-canvas");
      var ctx = c.getContext("2d");
      // Create gradient
      var red_green_grd = ctx.createLinearGradient(-50, 15, 348, 15);
      red_green_grd.addColorStop(0, "red");
      red_green_grd.addColorStop(1, "green");
      ctx.fillStyle = red_green_grd;
      ctx.fillRect(0, 0, 348, 30);
      // Draw bar
      var left_bar = Math.max(0, (150 + (150*0))-half_bar_thickness);
      ctx.fillStyle = 'black';
      ctx.fillRect(left_bar, 0, 2*half_bar_thickness, 25);


      var c = document.getElementById("b2-pos-canvas");
      var ctx = c.getContext("2d");
      // Create gradient
      var red_green_grd = ctx.createLinearGradient(-50, 15, 348, 15);
      red_green_grd.addColorStop(0, "red");
      red_green_grd.addColorStop(1, "green");
      ctx.fillStyle = red_green_grd;
      ctx.fillRect(0, 0, 348, 30);
      // Draw bar
      var left_bar = Math.max(0, (150 + (150*0))-half_bar_thickness);
      ctx.fillStyle = 'black';
      ctx.fillRect(left_bar, 0, 2*half_bar_thickness, 25);


      var c = document.getElementById("b1-pos-canvas");
      var ctx = c.getContext("2d");
      // Create gradient
      var red_green_grd = ctx.createLinearGradient(-50, 15, 348, 15);
      red_green_grd.addColorStop(0, "red");
      red_green_grd.addColorStop(1, "green");
      ctx.fillStyle = red_green_grd;
      ctx.fillRect(0, 0, 348, 30);
      // Draw bar
      var left_bar = Math.max(0, (150 + (150*0))-half_bar_thickness);
      ctx.fillStyle = 'black';
      ctx.fillRect(left_bar, 0, 2*half_bar_thickness, 25);


      var c = document.getElementById("o3-pos-canvas");
      var ctx = c.getContext("2d");
      // Create gradient
      var red_green_grd = ctx.createLinearGradient(-50, 15, 348, 15);
      red_green_grd.addColorStop(1, "red");
      red_green_grd.addColorStop(0, "green");
      ctx.fillStyle = red_green_grd;
      ctx.fillRect(0, 0, 348, 30);
      // Draw bar
      var left_bar = Math.max(0, (150 + (-150*0))-half_bar_thickness);
      ctx.fillStyle = 'black';
      ctx.fillRect(left_bar, 0, 2*half_bar_thickness, 25);

      var c = document.getElementById("o2-pos-canvas");
      var ctx = c.getContext("2d");
      // Create gradient
      var red_green_grd = ctx.createLinearGradient(-50, 15, 348, 15);
      red_green_grd.addColorStop(1, "red");
      red_green_grd.addColorStop(0, "green");
      ctx.fillStyle = red_green_grd;
      ctx.fillRect(0, 0, 348, 30);
      // Draw bar
      var left_bar = Math.max(0, (150 + (-150*0))-half_bar_thickness);
      ctx.fillStyle = 'black';
      ctx.fillRect(left_bar, 0, 2*half_bar_thickness, 25);

      var c = document.getElementById("o1-pos-canvas");
      var ctx = c.getContext("2d");
      // Create gradient
      var red_green_grd = ctx.createLinearGradient(-50, 15, 348, 15);
      red_green_grd.addColorStop(1, "red");
      red_green_grd.addColorStop(0, "green");
      ctx.fillStyle = red_green_grd;
      ctx.fillRect(0, 0, 348, 30);
      // Draw bar
      var left_bar = Math.max(0, (150 + (-150*0))-half_bar_thickness);
      ctx.fillStyle = 'black';
      ctx.fillRect(left_bar, 0, 2*half_bar_thickness, 25);
    }

    function xMath(x) {
      var xCoord = (190 / x)
      return xCoord;
    }

    function yMath(y) {
      var yCoord = (150 / y)
      return yCoord;
    }

    var dataSet = [
              [0, 0],
            ];


    var w = 380,
      h = 300;

    // calculate max/min for x and y here if necessary

    var xScale = d3.scale.linear()
      .domain([-5140, 4074])
      .range([0, w]);

    var yScale = d3.scale.linear()
      .domain([5140, -4074])
      .range([0, h]);

    var svg = d3.select("#mapy")
      .append("svg")
      .attr("width", w + 80) //was + 100
      .attr("height", h + 65) //was + 100
      .append('svg:g')
      .attr('transform', 'translate(15,15)');



    svg.selectAll("circle")
      .data(dataSet)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return xScale(d[0]);
      })
      .attr("cy", function (d) {
        return yScale(d[1]);
      })
      .attr("r", 4);

    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
      .tickSize(1);

    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      .tickSize(1);


    ws.onopen = () => {
      //  ws.send('Message From Client')
    }

    ws.onerror = (error) => {
      console.log(`WebSocket error: ${error}`)
    }

    ws.onmessage = (e) => {

      var jEvent = JSON.parse(event.data);


      //console.log(jEvent.data)


      if (jEvent.event == "game:update_state") {

		//helios test
		//console.log(jEvent.data.helios_test)

        //gonna be used in a few spots
        var teamData = jEvent.data.game.teams

        //console.log(jEvent.data.game.hasWinner)
        if (jEvent.data.game.hasWinner == true) { // || jEvent.data.game.isReplay == true will be added on prod
          $('#main-ui').addClass('invisible');
          // $('#logo_div').addClass('invisible');
          document.getElementById("logo_div").style.display='none';


          // document.getElementById("ha_logo").style.visibility=hidden;
          //console.log(jEvent.data.game.isReplay)

        } else {

          //show the ui
          $('#main-ui').removeClass('invisible');
          // $('#logo_div').removeClass('invisible');
          // $('#ha_logo').removeClass('invisible');
          document.getElementById("logo_div").style.display='flex';
          // document.getElementById("ha_div").style.visibility=initial;
          // hidden

          //time
          var gameTime = jEvent.data.game.time
          var round = Math.round(gameTime)

          function myTime(time) {

            var min = ~~((time % 3600) / 60);
            var sec = time % 60;
            var sec_min = "";
            sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
            sec_min += "" + sec;
            return sec_min;
          }
          $('#timer').text(myTime(round))

          //team names
          var blueName = _.get(teamData, [0, 'name'])
          var orangeName = _.get(teamData, [1, 'name'])

		  //var blueName = jEvent.data.helios_test


          if (blueName.length > 1 && orangeName.length > 1) {
            $('#blue-team-name').text(blueName)
            $('#blue-team-name').removeClass('d-none')
            $('#orange-team-name').text(orangeName)
            $('#orange-team-name').removeClass('d-none')
          }


          //score
          //var blueScore = 9
		  var blueScore = _.get(teamData, [0, 'score'])
          var orangeScore = _.get(teamData, [1, 'score'])

          $('#blue-score').text(blueScore)
          $('#orange-score').text(orangeScore)

          //overtime logic
          if (jEvent.data.game.isOT == true) {
            $('#overtime-text').removeClass('d-none')
          } else {
            $('#overtime-text').addClass('d-none')
          }

          //ball pos
          /*var ballArr = [jEvent.data.game.ballX, jEvent.data.game.ballY]
          var ballPos = xScale(jEvent.data.game.ballX) + ', ' + yScale(jEvent.data.game.ballY)

          var my_transform = d3Transform()
            .translate(ballPos)


          svg.selectAll("circle")
            .attr('transform', my_transform)
            .attr("cx", function (d) {
              return xScale(d[0]);
            })
            .attr("cy", function (d) {
              return yScale(d[1]);
            })
            .attr("r", 4);*/


          //console.log(ballPos)

          /* svg.selectAll("circle")
             .data([ballArr])
             .enter()
             .append("circle")
             .attr("cx", function (d) {
               return xScale(d[0]);
             })
             .attr("cy", function (d) {
               return yScale(d[1]);
             })
             .attr("r", 4);*/


          //active player logic
          var activeTarget = jEvent.data.game.target;
          var playerList = jEvent.data.players;
          var activePlayerData = _.get(playerList, activeTarget);


          if (activeTarget.length > 1) {


            if (activePlayerData.team == 0) {
              $('#blue-team-active').removeClass('invisible');
              $('#orange-team-active').addClass('invisible');

              $('#blue-active-name').text(activePlayerData.name)
              $('#blue-active-speed').text(activePlayerData.speed)
              $('#blue-active-goals').text(activePlayerData.goals)
              $('#blue-active-demos').text(activePlayerData.demos)
              $('#blue-active-shots').text(activePlayerData.shots)
              $('#blue-active-saves').text(activePlayerData.saves)
              $('#blue-active-assists').text(activePlayerData.assists)
              $('#blue-active-touches').text(activePlayerData.touches)
              $('#blue-active-score').text(activePlayerData.score)
              $('#blue-active-boost').text(activePlayerData.boost)
              $('#blue-active-p-bar').height(activePlayerData.boost + "%")


            } else if (activePlayerData.team == 1) {
              $('#orange-team-active').removeClass('invisible');
              $('#blue-team-active').addClass('invisible');

              $('#orange-active-name').text(activePlayerData.name)
              $('#orange-active-speed').text(activePlayerData.speed)
              $('#orange-active-goals').text(activePlayerData.goals)
              $('#orange-active-demos').text(activePlayerData.demos)
              $('#orange-active-shots').text(activePlayerData.shots)
              $('#orange-active-saves').text(activePlayerData.saves)
              $('#orange-active-assists').text(activePlayerData.assists)
              $('#orange-active-touches').text(activePlayerData.touches)
              $('#orange-active-score').text(activePlayerData.score)
              $('#orange-active-boost').text(activePlayerData.boost)
              $('#orange-active-p-bar').height(activePlayerData.boost + "%")

            } else {
              console.log('oopsie')
            }

          } else {
            $('#blue-team-active').addClass('invisible');
            $('#orange-team-active').addClass('invisible');
          }

          //all player logic

          //blue
          var team0 = _.filter(playerList, {
            'team': 0
          })
          //orange
          var team1 = _.filter(playerList, {
            'team': 1
          })




          //does blue team exist?
          if (team0 != undefined) {
            //it does

            //blue players btw
            var blue1 = _.get(team0, [0])
            var blue2 = _.get(team0, [1])
            var blue3 = _.get(team0, [2])

            if (blue1 != undefined && blue2 != undefined && blue3 != undefined) {

              $("div[id^='blue-player-']").removeClass('d-none')


              // var size;
              // var desired_width = 50;
              // var resizer = $("#hidden-resizer");
              //
              // resizer.html("This is a really long name it is annoying");
              //
              // while(resizer.width() > desired_width) {
              //   size = parseInt(resizer.css("font-size"), 10);
              //   resizer.css("font-size", size - 1);
              // }
              //
              // $("#target-location").css("font-size", size).html(resizer.html());


              $('#blue-player-3').removeClass('d-none')
              // $('#blue-player-3-name').text("12345678901234567814321423432".substring(0,19))
              $('#blue-player-3-name').text(blue3.name.substring(0,19))
              $('#blue-player-3-goals').text(blue3.goals)
              $('#blue-player-3-shots').text(blue3.shots)
              $('#blue-player-3-saves').text(blue3.saves)
              $('#blue-player-3-assists').text(blue3.assists)
              $('#blue-player-3-boost').text(blue3.boost)
              $('#blue-player-3-p-bar').width((3.5 * blue3.boost) +"px")
              // $('#blue-player-3-name').text(blue3.boost)


              $('#blue-player-2').removeClass('d-none')
              $('#blue-player-2-name').text(blue2.name.substring(0,19))
              $('#blue-player-2-goals').text(blue2.goals)
              $('#blue-player-2-shots').text(blue2.shots)
              $('#blue-player-2-saves').text(blue2.saves)
              $('#blue-player-2-assists').text(blue2.assists)
              $('#blue-player-2-boost').text(blue2.boost)
              $('#blue-player-2-p-bar').width((3.5 * blue2.boost) +"px")

              //remove invis for p1 and do other shit
              $('#blue-player-1').removeClass('d-none')
              $('#blue-player-1-name').text(blue1.name.substring(0,19))
              $('#blue-player-1-goals').text(blue1.goals)
              $('#blue-player-1-shots').text(blue1.shots)
              $('#blue-player-1-saves').text(blue1.saves)
              $('#blue-player-1-assists').text(blue1.assists)
              $('#blue-player-1-boost').text(blue1.boost)
              $('#blue-player-1-p-bar').width((3.5 * blue1.boost) +"px")





            } else if (blue1 != undefined && blue2 != undefined && blue3 == undefined) {

              $('#blue-player-1').removeClass('d-none')
              $('#blue-player-1-name').text(blue1.name.substring(0,19))
              $('#blue-player-1-goals').text(blue1.goals)
              $('#blue-player-1-shots').text(blue1.shots)
              $('#blue-player-1-saves').text(blue1.saves)
              $('#blue-player-1-assists').text(blue1.assists)
              $('#blue-player-1-boost').text(blue1.boost)
              $('#blue-player-1-p-bar').width((3.5 * blue1.boost) +"px")

              $('#blue-player-2').removeClass('d-none')
              $('#blue-player-2-name').text(blue2.name.substring(0,19))
              $('#blue-player-2-goals').text(blue2.goals)
              $('#blue-player-2-shots').text(blue2.shots)
              $('#blue-player-2-saves').text(blue2.saves)
              $('#blue-player-2-assists').text(blue2.assists)
              $('#blue-player-2-boost').text(blue2.boost)
              $('#blue-player-2-p-bar').width((3.5 * blue2.boost) +"px")

             /* $('#blue-player-3').addClass('d-none');
              $("div[id^='blue-player-3']").text('')
              $('#blue-player-3-p-bar').width('0%')*/

            } else if (blue1 != undefined && blue2 == undefined && blue3 == undefined) {

              $('#blue-player-1').removeClass('d-none')
              $('#blue-player-1-name').text(blue1.name.substring(0,19))
              $('#blue-player-1-goals').text(blue1.goals)
              $('#blue-player-1-shots').text(blue1.shots)
              $('#blue-player-1-saves').text(blue1.saves)
              $('#blue-player-1-assists').text(blue1.assists)
              $('#blue-player-1-boost').text(blue1.boost)
              $('#blue-player-1-p-bar').width((3.5 * blue1.boost) +"px")

              /*$('#blue-player-2').addClass('d-none');
              $("div[id^='blue-player-2']").text('')
              $('#blue-player-2-p-bar').width('0%')

              $('#blue-player-3').addClass('d-none');
              $("div[id^='blue-player-3']").text('')
              $('#blue-player-3-p-bar').width('0%')*/

            }

          } else {
            blueResetAll()
          }

          //does orange team exist?
          if (team1 != undefined) {
            //it does

            //orange players btw
            var orange1 = _.get(team1, [0])
            var orange2 = _.get(team1, [1])
            var orange3 = _.get(team1, [2])

            if (orange1 != undefined && orange2 != undefined && orange3 != undefined) {

              $("div[id^='orange-player-']").removeClass('d-none')

              $('#orange-player-3').removeClass('d-none')
              $('#orange-player-3-name').text(orange3.name.substring(0,19))
              $('#orange-player-3-goals').text(orange3.goals)
              $('#orange-player-3-shots').text(orange3.shots)
              $('#orange-player-3-saves').text(orange3.saves)
              $('#orange-player-3-assists').text(orange3.assists)
              $('#orange-player-3-boost').text(orange3.boost)
              $('#orange-player-3-p-bar').width((3.5 * orange3.boost) +"px")


              $('#orange-player-2').removeClass('d-none')
              $('#orange-player-2-name').text(orange2.name.substring(0,19))
              $('#orange-player-2-goals').text(orange2.goals)
              $('#orange-player-2-shots').text(orange2.shots)
              $('#orange-player-2-saves').text(orange2.saves)
              $('#orange-player-2-assists').text(orange2.assists)
              $('#orange-player-2-boost').text(orange2.boost)
              $('#orange-player-2-p-bar').width((3.5 * orange2.boost) +"px")

              //remove invis for p1 and do other shit
              $('#orange-player-1').removeClass('d-none')
              $('#orange-player-1-name').text(orange1.name.substring(0,19))
              $('#orange-player-1-goals').text(orange1.goals)
              $('#orange-player-1-shots').text(orange1.shots)
              $('#orange-player-1-saves').text(orange1.saves)
              $('#orange-player-1-assists').text(orange1.assists)
              $('#orange-player-1-boost').text(orange1.boost)
              $('#orange-player-1-p-bar').width((3.5 * orange1.boost) +"px")





            } else if (orange1 != undefined && orange2 != undefined && orange3 == undefined) {

              $('#orange-player-1').removeClass('d-none')
              $('#orange-player-1-name').text(orange1.name.substring(0,19))
              $('#orange-player-1-goals').text(orange1.goals)
              $('#orange-player-1-shots').text(orange1.shots)
              $('#orange-player-1-saves').text(orange1.saves)
              $('#orange-player-1-assists').text(orange1.assists)
              $('#orange-player-1-boost').text(orange1.boost)
              $('#orange-player-1-p-bar').width((3.5 * orange1.boost) +"px")

              $('#orange-player-2').removeClass('d-none')
              $('#orange-player-2-name').text(orange2.name.substring(0,19))
              $('#orange-player-2-goals').text(orange2.goals)
              $('#orange-player-2-shots').text(orange2.shots)
              $('#orange-player-2-saves').text(orange2.saves)
              $('#orange-player-2-assists').text(orange2.assists)
              $('#orange-player-2-boost').text(orange2.boost)
              $('#orange-player-2-p-bar').width((3.5 * orange2.boost) +"px")

              /*$('#orange-player-3').addClass('d-none');
              $("div[id^='orange-player-3']").text('')
              $('#orange-player-3-p-bar').width('0%')*/

            } else if (orange1 != undefined && orange2 == undefined && orange3 == undefined) {

              $('#orange-player-1').removeClass('d-none')
              $('#orange-player-1-name').text(orange1.name.substring(0,19))
              $('#orange-player-1-goals').text(orange1.goals)
              $('#orange-player-1-shots').text(orange1.shots)
              $('#orange-player-1-saves').text(orange1.saves)
              $('#orange-player-1-assists').text(orange1.assists)
              $('#orange-player-1-boost').text(orange1.boost)
              $('#orange-player-1-p-bar').width((3.5 * orange1.boost) +"px")

             /* $('#orange-player-2').addClass('d-none');
              $("div[id^='orange-player-2']").text('')
              $('#orange-player-2-p-bar').width('0%')

              $('#orange-player-3').addClass('d-none');
              $("div[id^='orange-player-3']").text('')
              $('#orange-player-3-p-bar').width('0%')*/

            }

          } else {
            orangeResetAll()
          }

        }

      }

      //is the match over?
      else if (jEvent.event == "game:podium_start" || jEvent.event == "game:match_ended") {
        console.log('match ended / podium')
        $('#main-ui').addClass('invisible');
        // $('#logo_div').addClass('invisible');
        document.getElementById("logo_div").style.display='none';

        // document.getElementById("ha_logo").style.visibility=hidden;

        blueResetAll()
        orangeResetAll()
        resetBars()
      }
			else if (jEvent.event == "analysis:update") {

					var data = jEvent.data;
					var player_pos = data.player_pos;
          var players = data.players;
          // $('#blue-player-1-name').text(player_pos[0])
          // $('#blue-player-2-name').text(player_pos[1])
          // $('#blue-player-3-name').text(player_pos[2])
          // $('#orange-player-1-name').text(player_pos[3])
          // $('#orange-player-2-name').text(player_pos[4])
          // $('#orange-player-3-name').text(player_pos[5])

					var c = document.getElementById("b1-pos-canvas");
					var ctx = c.getContext("2d");
          //Clear canvas
          ctx.clearRect(0, 0, c.width, c.height);
          //Draw line
          var red_green_grd = ctx.createLinearGradient(-100, 15, 300, 15);
          red_green_grd.addColorStop(0, "red");
          red_green_grd.addColorStop(1, "green");
          ctx.fillStyle = red_green_grd;
					ctx.fillRect(0, 1, 300, 8);
          ctx.fillStyle = 'black';
          ctx.fillRect(0, 0, 300, 1);
          ctx.fillRect(0, 0, 1, 8);
          ctx.fillRect(300, 0, 1, 8);
          ctx.fillRect(0, 8, 300, 1);
					// Draw pointer
					ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.moveTo(c.width*player_pos[0], 9);
          ctx.lineTo(c.width*player_pos[0] + 8, 9 + 14);
          ctx.lineTo(c.width*player_pos[0] - 8, 9 + 14);
          ctx.fill();


					var c = document.getElementById("b2-pos-canvas");
          var ctx = c.getContext("2d");
          //Clear canvas
          ctx.clearRect(0, 0, c.width, c.height);
          //Draw line
          var red_green_grd = ctx.createLinearGradient(-100, 15, 300, 15);
          var red_green_grd = ctx.createLinearGradient(-100, 15, 300, 15);
          red_green_grd.addColorStop(0, "red");
          red_green_grd.addColorStop(1, "green");
          ctx.fillStyle = red_green_grd;
          ctx.fillRect(0, 1, 300, 8);
          ctx.fillStyle = 'black';
          ctx.fillRect(0, 0, 300, 1);
          ctx.fillRect(0, 0, 1, 8);
          ctx.fillRect(300, 0, 1, 8);
          ctx.fillRect(0, 8, 300, 1);
					// Draw pointer
					ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.moveTo(c.width*player_pos[1], 9);
          ctx.lineTo(c.width*player_pos[1] + 8, 9 + 14);
          ctx.lineTo(c.width*player_pos[1] - 8, 9 + 14);
          ctx.fill();


					var c = document.getElementById("b3-pos-canvas");
          var ctx = c.getContext("2d");
          //Clear canvas
          ctx.clearRect(0, 0, c.width, c.height);
          //Draw line
          var red_green_grd = ctx.createLinearGradient(-100, 15, 300, 15);
          red_green_grd.addColorStop(0, "red");
          red_green_grd.addColorStop(1, "green");
          ctx.fillStyle = red_green_grd;
					ctx.fillRect(0, 1, 300, 8);
          ctx.fillStyle = 'black';
          ctx.fillRect(0, 0, 300, 1);
          ctx.fillRect(0, 0, 1, 8);
          ctx.fillRect(300, 0, 1, 8);
          ctx.fillRect(0, 8, 300, 1);
					// Draw pointer
					ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.moveTo(c.width*player_pos[2], 9);
          ctx.lineTo(c.width*player_pos[2] + 8, 9 + 14);
          ctx.lineTo(c.width*player_pos[2] - 8, 9 + 14);
          ctx.fill();



					var c = document.getElementById("o1-pos-canvas");
          var ctx = c.getContext("2d");
          //Clear canvas
          ctx.clearRect(0, 0, c.width, c.height);
          //Draw line
          var red_green_grd = ctx.createLinearGradient(0, 15, 300, 15);
          red_green_grd.addColorStop(0, "green");
          red_green_grd.addColorStop(1, "red");
          ctx.fillStyle = red_green_grd;
					ctx.fillRect(0, 1, 300, 8);
          ctx.fillStyle = 'black';
          ctx.fillRect(0, 0, 300, 1);
          ctx.fillRect(0, 0, 1, 8);
          ctx.fillRect(300, 0, 1, 8);
          ctx.fillRect(0, 8, 300, 1);
					// Draw pointer
					ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.moveTo(c.width - c.width*player_pos[3], 9);
          ctx.lineTo(c.width - c.width*player_pos[3] + 8, 9 + 14);
          ctx.lineTo(c.width - c.width*player_pos[3] - 8, 9 + 14);
          ctx.fill();


					var c = document.getElementById("o2-pos-canvas");
          var ctx = c.getContext("2d");
          //Clear canvas
          ctx.clearRect(0, 0, c.width, c.height);
          //Draw line
          var red_green_grd = ctx.createLinearGradient(0, 15, 300, 15);
          red_green_grd.addColorStop(0, "green");
          red_green_grd.addColorStop(1, "red");
          ctx.fillStyle = red_green_grd;
					ctx.fillRect(0, 1, 300, 8);
          ctx.fillStyle = 'black';
          ctx.fillRect(0, 0, 300, 1);
          ctx.fillRect(0, 0, 1, 8);
          ctx.fillRect(300, 0, 1, 8);
          ctx.fillRect(0, 8, 300, 1);
					// Draw pointer
					ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.moveTo(c.width - c.width*player_pos[4], 9);
          ctx.lineTo(c.width - c.width*player_pos[4] + 8, 9 + 14);
          ctx.lineTo(c.width - c.width*player_pos[4] - 8, 9 + 14);
          ctx.fill();


					var c = document.getElementById("o3-pos-canvas");
          var ctx = c.getContext("2d");
          //Clear canvas
          ctx.clearRect(0, 0, c.width, c.height);
          //Draw line
          var red_green_grd = ctx.createLinearGradient(0, 15, 300, 15);
          red_green_grd.addColorStop(0, "green");
          red_green_grd.addColorStop(1, "red");
          ctx.fillStyle = red_green_grd;
          ctx.fillRect(0, 1, 300, 8);
          ctx.fillStyle = 'black';
          ctx.fillRect(0, 0, 300, 1);
          ctx.fillRect(0, 0, 1, 8);
          ctx.fillRect(300, 0, 1, 8);
          ctx.fillRect(0, 8, 300, 1);
					// Draw pointer
					ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.moveTo(c.width - c.width*player_pos[5], 9);
          ctx.lineTo(c.width - c.width*player_pos[5] + 8, 9 + 14);
          ctx.lineTo(c.width - c.width*player_pos[5] - 8, 9 + 14);
          ctx.fill();

			}
	  /*
	  else if (jEvent.event == "analysis:new_game") {
		  $('#blue-player-3-name').text(jEvent.data)
	  }*/
    }
    resetBars()
