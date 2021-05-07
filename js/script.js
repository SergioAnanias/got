$('document').ready(function(){
    const stark = 362;
    const targaryen = 378;
    const lannister = 229;
    const baratheon = 17;
    $('#stark').on('click', function(){

        $.get(`https://anapioficeandfire.com/api/houses/${stark}`, function(data){
            console.log(data)
        }, 'JSON');
    });
});