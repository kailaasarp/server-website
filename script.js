const discordServer = "CFyCDZ3V8T"

const discordCount = document.querySelector(".discord-mem-count")
const tab = document.querySelector(".main-content-image")
const tabTitle = document.getElementById("main-content-title")
const tabDesc =document.getElementById("main-content-title-desc")



fetch( `https://discord.com/api/v9/invites/${discordServer}?with_counts=true&with_expiration=true`)
  .then((response) => response.json())
  .then((data) => discordCount.textContent = data.approximate_member_count);
  

setInterval(()=>{
    fetch( `https://discord.com/api/v9/invites/${discordServer}?with_counts=true&with_expiration=true`)
    .then((response) => response.json())
    .then((data) => discordCount.textContent = data.approximate_member_count);
},20000)

function tabSlection(id){
  switch(id){
    case "1":
      console.log("one")
      // document.getElementById("div1").classList.add("classToBeAdded");
      tab.style.backgroundImage="url(./images/cars.png)"
      tabTitle.innerHTML="Supercars"
      tabDesc.innerHTML="Unleash the power of luxury and speed in Kailaasa with our collection of custom supercars. Browse, download, and race to the top!"
      removeSelected()
      document.getElementById(id).classList.add("tab-selected")
      
      break;
    case "2":
      console.log("two")
      tab.style.backgroundImage="url(./images/gang.png)"
      tabTitle.innerHTML="Gangs"
      tabDesc.innerHTML="Take over the city with our gang mods. Rule the streets and dominate the competition in Kailaasa."
      removeSelected()
      document.getElementById(id).classList.add("tab-selected")
      break;
    case "3":
      console.log("three")
      tab.style.backgroundImage="url(./images/peds.png)"
      tabTitle.innerHTML="Peds"
      tabDesc.innerHTML="Customize your world with additional peds and characters for a more diverse and dynamic environment."
      removeSelected()
      document.getElementById(id).classList.add("tab-selected")
      break;
    case "4":
      console.log("four")
      tab.style.backgroundImage="url(./images/heist-content.png)"
      tabTitle.innerHTML="Heists"
      tabDesc.innerHTML="Experience the thrill of high-stakes robberies in Kailaasa with our collection of custom heist mods."
      removeSelected()
      document.getElementById(id).classList.add("tab-selected")
      break;
    default:
      break;
  }
}


function removeSelected(){
  const allElements = document.querySelectorAll('*');
    allElements.forEach((element) => {
      element.classList.remove('tab-selected');
    });
}