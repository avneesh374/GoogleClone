const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
});

function search(){
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input +"&rlz=1C1RLNS_enIN931IN931&oq=" + input +"&aqs=chrome..69i57j46i39j46i131i175i199i433i512j46i175i199i512j0i512j46i175i199i512j0i512j46i175i199i512j0i512.3554j0j15&sourceid=chrome&ie=UTF-8"
}