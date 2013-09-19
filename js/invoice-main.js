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
         ,int10: [9520, 530]
         ,thanks: [10730, 790]
      }
    });

    $('#int-one')
        .on('click',function()
        {
            sound.play('int1');
        })

    $('#int-two')
        .on('click',function()
        {
            sound.play('int2');
        })

    $('#int-three')
        .on('click',function()
        {
            sound.play('int3');
        })

    $('#int-four')
        .on('click',function()
        {
            sound.play('int4');
        })

    $('#int-five')
        .on('click',function()
        {
            sound.play('int5');
        })

    $('#int-six')
        .on('click',function()
        {
            sound.play('int6');
        })

    $('#int-seven')
        .on('click',function()
        {
            sound.play('int7');
        })

    $('#int-eight')
        .on('click',function()
        {
            sound.play('int8');
        })

    $('#int-nine')
        .on('click',function()
        {
            sound.play('int9');
        })

    $('#int-ten')
        .on('click',function()
        {
            sound.play('int10');
        })

    $('#int-thanks')
        .on('click',function()
        {
            sound.play('thanks');
        })


    $(document)
        .on('keydown',function(e)
        {
            console.log(e);
        });

});

$(window)
    .load(function()
    {

    });
