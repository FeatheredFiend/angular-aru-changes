function getCountJob(status, Job_Data) {
    var occurs = 0;
    
    for (var i=0; i<Job_Data.length; i++) {
      if ( 'status' in Job_Data[i] && Job_Data[i].status === status ) occurs++;
      console.warn("passed");
    }
 
    return occurs;
  }
  function getCountBuilding(name, Building_Data) {
    var occurs = 0;
    
    for (var i=0; i<Building_Data.length; i++) {
      if ( 'name' in Building_Data[i] && Building_Data[i].name === name ) occurs++;
      console.warn("name");
    }
 
    return occurs;
  }