$('document').ready(function () {

    $('.house').on('click', function () {
        let id = $(this).attr("id")
        let src = $(this).attr("src")
        
        $.get(`https://anapioficeandfire.com/api/houses/${id}`, function(data){
            $('#house-details').html(`
            <div class="card offset-5 p-3" style="width: 20rem;">
                <img class="card-img-top" src="${src}"  alt="Card image cap"><div class="card-body">
                <h5 class="card-title text-center">Nombre de la casa:</h5>
                <h6 class="text-center">${data.name}</h6>
                <ul class='card-text'>
                    <li>Lema: ${data.words}</li>
                    <li>Titulos:</li>
                        <ul id="titles"></ul>
                    </ul>
            </div>`)
            for(let i of data.titles){
                $('#titles').append(`<li>${i}</li>`);
            }
        }, 'JSON');
    });
});
