$(document).ready(function(){
    var boxes = document.querySelectorAll('.box');
    var turn = true;
    var won = false;
    if(turn)
    {
        var html = "Turn for O"
        $(".turn h1").text(html);
    }
    counter = 0;
    var winPosibility = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    $(document).on('click', '.box', function(){
        if(turn)
        {
            $(this).html("O");
            turn = false;
            $(this).prop('disabled', true);
            var html = "Turn for X"
            $(".turn h1").text(html);
        }
        else {
            $(this).html("X")
            turn = true;      
            $(this).prop('disabled', true);
            var html = "Turn for O"
            $(".turn h1").text(html);
        }

        
        checkWinner();
        
        if((counter === 8) && (!won))
        {
            $(".turn h1").text(`The Game Is Draw.`);
        }
        counter++;
    });

    const checkWinner = () => {      
        for(const pattern of winPosibility)
        {
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
            if(pos1 != "" && pos2 != "" && pos3 != "")
            {
                if(pos1 === pos2 && pos2 === pos3)
                {
                    $(".boxes .box").prop('disabled', true);
                    $('.turn h1').text('');
                    $('.win h1').text(`${pos1} Won`);
                    won = true;
                }               
            }
        }
    }
});