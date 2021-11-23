window.onload = function(){
    document.getElementById('home').style.display = "block";
    document.getElementById('homeTab').className += " active";
}

function openTab(event, tabName) {
    let i, tabContent, tab;
    
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace(" active", "");
    }

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }