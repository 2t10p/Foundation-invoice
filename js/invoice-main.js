$(function()
{
    var sound = new Howl({
      urls: ['audio/one-to-ten.mp3', 'audio/one-to-ten.ogg'],
      sprite: {
          int1: [450, 500]
         ,int2: [1430, 500]
         ,int3: [2650, 500]
         ,int4: [3550, 500]
         ,int5: [4900, 600]
         ,int6: [5900, 600]
         ,int7: [6700, 550]
         ,int8: [7750, 500]
         ,int9: [8770, 530]
         ,int10:  [9520, 530]
         ,thanks: [10730, 790]
         ,sit:    [11540, 550]
      }
    });

    $('#say-one')
        .on('click',function()
        {
            sound.play('int1');
        })

    $('#say-two')
        .on('click',function()
        {
            sound.play('int2');
        })

    $('#say-three')
        .on('click',function()
        {
            sound.play('int3');
        })

    $('#say-four')
        .on('click',function()
        {
            sound.play('int4');
        })

    $('#say-five')
        .on('click',function()
        {
            sound.play('int5');
        })

    $('#say-six')
        .on('click',function()
        {
            sound.play('int6');
        })

    $('#say-seven')
        .on('click',function()
        {
            sound.play('int7');
        })

    $('#say-eight')
        .on('click',function()
        {
            sound.play('int8');
        })

    $('#say-nine')
        .on('click',function()
        {
            sound.play('int9');
        })

    $('#say-ten')
        .on('click',function()
        {
            sound.play('int10');
        })

    $('#say-thanks')
        .on('click',function()
        {
            sound.play('thanks');
        })

    $('#say-sit')
        .on('click',function()
        {
            sound.play('sit');
        })

    var doPlayAudio = function()
    {
            sound.play('sit');

    }; 


    $(document)
        .on('keydown',function(e)
        {
            if(95 < e.keyCode && e.keyCode < 106 ) 
            {
                doPlayAudio(e.keyCode);
            }

            if(47 < e.keyCode && e.keyCode < 58 ) 
            {
                console.log(e.keyCode);
                doPlayAudio(e.keyCode);
            }
        });

});

$(window)
    .load(function()
    {

    });
