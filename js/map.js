var map = document.querySelector('#map');
var paths = document.querySelectorAll('.map__image a');
var links = document.querySelectorAll('.map__list a');

//Conditions to link up the list and the map
if (NodeList.prototype.forEach === undefined){
    NodeList.prototype.forEach = function (callback){
        [].forEach.call(this,callback)
    }
}
// For each active area, when the mouse hover on it, the area is active
//and when the mouse goes out of an area, this area is no more active
var activeArea = function(id){
    map.querySelectorAll('.is-active').forEach(function (item){
        item.classList.remove('is-active')
    });
    if (id != undefined){
        document.querySelector('#list-' + id).classList.add('is-active');
        document.querySelector('#Region-' + id).classList.add('is-active')
    }
};

//When we click on an area of the map, this sends us back to the google page
paths.forEach(function (path){
    path.addEventListener('mouseenter', function (e){
        var id = this.id.replace('Region-', '');
        activeArea(id)
    })
});

//When we click on a name of the list, this sends us back to the google page
links.forEach(function (link){
    link.addEventListener('mouseenter',function(){
        var id = this.id.replace('list-', '');
        activeArea(id)
    })
});

//When we hover the map area,
map.addEventListener('mouseover', function(){
    activeArea()
});