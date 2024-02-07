mesmer_url = 'https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2015/09/49bbbchronomancer_artwork.jpg'
guardian_url = 'https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2015/09/c1d1adragonhunter_artwork.jpg'
necromancer_url = 'https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2015/09/eea54reaper_artwork.jpg'
ranger_url = 'https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2015/09/165d1Druid.jpg'
elementalist_url = 'https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2015/09/4ebd5tempest_artwork.jpg'
warrior_url = 'https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2015/09/3366eberserker_artwork.jpg'
thief_url = 'https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2015/09/b18a7Daredevil.jpg'
engineer_url = 'https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2015/09/4f891Scrapper_artwork1.jpg'
revenant_url = 'https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2015/09/98d4eshiro.jpg'

document.querySelector('#id10').addEventListener('mouseover', changeBG)

function changeBG(){
    document.querySelector('body').style.backgroundImage = `url(${mesmer_url})`;
    document.querySelector('body').style.backgroundRepeat = "no-repeat";
}
