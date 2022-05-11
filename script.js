
        function mastery(skill,minutesDay,goal,weekdays){
        
            let goalMinutes= goal*60;
            let days;
            let onlyWeekdays;
            let years;
            if (weekdays=="yes"){
                days= goalMinutes/minutesDay;
                years=parseInt(days/250);
                return "It would take you " + days + " weekdays or about "+years  + " year(s) and" +days-250 + " days to reach " + goal + " hours practicing " + skill + " for " + minutesDay + " minutes per day";
                
                
            }else if(weekdays=="no"){
                days= goalMinutes/minutesDay;
                years=parseInt(days/365);
                return "It would take you " + days + " days (including weekends) or about "+years  + " year(s) to reach " + goal + " hours practicing " + skill + " for " + minutesDay + " minutes per day";
                
                
            }
            
        }
    
        function printMastery(){
            let skill = document.getElementById("skillName").value;
            let minutesDay = document.getElementById("dailyMinutes").value;
            let goal = document.getElementById("goalHours").value;
            let weekdays = document.forms.calculator.weekdays.value;
            
            
            
            document.getElementById("output").innerHTML= mastery(skill,minutesDay,goal,weekdays);
        }