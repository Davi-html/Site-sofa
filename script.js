let imgSofa = '/assets/img-sofa.png' 
let gifSofa = '/assets/sofa-360.gif'


function escopo() {
    document.querySelector('.img-sofa').src = imgSofa
    
    let auxi = imgSofa
    imgSofa = gifSofa
    gifSofa = auxi
}
