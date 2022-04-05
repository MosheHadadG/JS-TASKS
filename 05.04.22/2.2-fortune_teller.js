const tellFortune = function(jobTitle, location, partnerName, numberOfChildren){
  let sentece = `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children.`;
  return sentece;
}

console.log(tellFortune("programmer", "Tel Aviv", "Sharon", 2));