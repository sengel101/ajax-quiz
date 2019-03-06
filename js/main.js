//Run jQuery after the document is fully loaded.
$('#table1').hide();
$('#table2').hide();
$(document).ready(
    //The function that does the stuff.
    function () {
        //Make the AJAX call
        //$.ajax('http://api.tvmaze.com/singlesearch/shows?q=the+magicians&embed=episodes', {
    $("#button").click(function(){
        $('#table1').show();
        var showname=document.getElementById('show').value;  
        $.ajax('http://api.tvmaze.com/search/shows?q=' + showname, {
            method: "GET",
            dataType: "json"
        })
        //After the data comes back, use this function
            .done(
                function (data) {
                    //Add the name
                    $('#name').append(data.name);
                    //Add the episodes
                    data.forEach(function (show) {
                        $('#showList').append('<tr>'+
                            '<td>' + show.show.id + '</td>' +
                            '<td><input type="button" id="btn" value=' + show.show.name  + '></td>' +
                            '<td>' + show.show.summary + '</td>' +
                            +' </tr>')
            })
            $('#btn').click(function(){
                alert("Correct");
                var sh = $(this).val;
            })
        })
    }
)
        
        
    
      });
        
        
        
        
//	$.ajax('http://api.tvmaze.com/singlesearch/shows?q=' + showname + '&embed=episodes', {
//            method: "GET",
//            dataType: "json"
//        })
//        //After the data comes back, use this function
//            .done(
//                function (data) {
//                    //Add the name
//                    $('#name').append(data.name);
//                    //Add the episodes
//                    data._embedded.episodes.forEach(function (episode) {
//                        $('#episodeList').append('<tr>'+
//                            '<td>' + episode.season + '</td>' +
//                            '<td>' + episode.number + '</td>' +
//                            '<td>' + episode.name + '</td>' +
//                            '<td>' + episode.summary + '</td>' +
//                            +' </tr>')
//            })
//        })
//    }
//)
