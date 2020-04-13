const covid19ImpactEstimator = (data) => data;

export default covid19ImpactEstimator;

function calculator(){
  
        var reportedCases = Number(document.getElementById("reportedCases").value);
  
        var days = Number(document.getElementById("days").value);
  
     var x = days / 3;
  
     var y = 2**x;
  
     var result;
  
  var calc = document.getElementById("choice").value
  
        switch(calc){
            
            currentlyInfected : result = reportedCases * 10;
            
        break;
            
            severeImpact.currentlyInfected : result = reportedCases * 50;
            
        break;
            
            infectionsByRequestedTime : result = currentlyInfected * y; 
            
        break;

    }
