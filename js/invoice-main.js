$(function()
{
    var _getInvoiceList = {
         'month':'9-10'
        ,'prize-1':[46486534]
        ,'prize-2':[06509701]
        ,'prize-3':[73803836, 48342247, 12784009]
        ,'prize-4':[316,226]
        ,'attention':[534,701,836,247,009,316,226]
    };    

    var sound = new Howl({
       urls:   ['audio/one-to-ten.ogg']
      ,sprite: {
          int1: [450, 500]
         ,int2: [1430, 500]
         ,int3: [2650, 500]
         ,int4: [3550, 500]
         ,int5: [4900, 600]
         ,int6: [5900, 600]
         ,int7: [6700, 550]
         ,int8: [7750, 500]
         ,int9: [8770, 530]
         ,int0: [9520, 530]
         ,thk:  [10730, 790]
         ,sit:  [11540, 550]
      }
      ,volume:[2]  
    });

    var mj_say_zero = new Howl({
        urls:['audio/mj-zero.ogg']
    });

    var mj_say_attention = new Howl({
        urls:['audio/mj-attention.ogg']
    });

    var mj_say_ouch = new Howl({
        urls:['audio/mj-ouch.ogg']
    });

    var mj_say_wrong = new Howl({
        urls:['audio/mj-wrong.ogg']
    });

    var doPlayAudio = function(strPadNum)
    {
        var intPadNum = parseInt(strPadNum);

        if($.inArray(intPadNum, [1,2,3,4,5,6,7,8,9]) != -1)
        {
            sound.play("int"+intPadNum);
        }
        else
        {
            mj_say_zero.play();
        }
    }; 

    var doAppendNum = function(inputNum)
    {
        var inputBar = $('#input-invoice-num'); 
        inputBar.html(inputBar.html() + inputNum);
    };    

    var doSetInputBar = function(strDisplayContent)
    {
        $('#input-invoice-num').text(strDisplayContent);
    };

    var doCheckPrize = function(intInputNum, arrPrizeList)
    {
        var arrAttentionList = arrPrizeList['attention'];

        if($.inArray(intInputNum, arrAttentionList) != -1)
        {
            return true;
        }
        return false;
    };

    $('#numpad li a')
        .on('click',function(e)
        {
            var inputNum = this.getAttribute("data-numpad");
            var eleInputBar = $('#input-invoice-num');

            var isShowInfo = $.data(document.body, 'isInformation');
            if(isShowInfo)
            {
                doSetInputBar('');
                $.data(document.body, 'isInformation', false); 
            }

            if(eleInputBar.text().match(/\D/) != null)
            {
                doSetInputBar('');
                $.data(document.body, 'isInformation', false); 
            }

            if(inputNum.match(/^\d+$/) != null)
            {
                doAppendNum(inputNum);
                doPlayAudio(inputNum);
            }

            if(eleInputBar.text().match(/^\d{3}$/) != null)
            {
                var intInputNum = parseInt(eleInputBar.text());
                var arrPrizeList = _getInvoiceList;
                var isPrizeMatch = doCheckPrize(intInputNum, arrPrizeList);

                if (isPrizeMatch)
                {
                    mj_say_ouch.play();
                    doSetInputBar("有機會");
                    $.data(document.body, 'isInformation', true); 
                }
                else
                {
                    mj_say_wrong.play();
                    doSetInputBar("沒中");
                    $.data(document.body, 'isInformation', true); 
                }
            }
        });

    $(document)
        .on('keydown',function(e)
        {
            var inputNum = String.fromCharCode(e.keyCode) ;
            var eleInputBar = $('#input-invoice-num');

            var isShowInfo = $.data(document.body, 'isInformation');
            if(isShowInfo)
            {
                doSetInputBar('');
                $.data(document.body, 'isInformation', false); 
            }

            if(eleInputBar.text().match(/\D/) != null)
            {
                doSetInputBar('');
                $.data(document.body, 'isInformation', false); 
            }

            if(inputNum.match(/^\d+$/) != null)
            {
                doAppendNum(inputNum);
                doPlayAudio(inputNum);
            }

            if(eleInputBar.text().match(/^\d{3}$/) != null)
            {
                var intInputNum = parseInt(eleInputBar.text());
                var arrPrizeList = _getInvoiceList;
                var isPrizeMatch = doCheckPrize(intInputNum, arrPrizeList);

                if (isPrizeMatch)
                {
                    mj_say_ouch.play();
                    doSetInputBar("有機會");
                    $.data(document.body, 'isInformation', true); 
                }
                else
                {
                    mj_say_wrong.play();
                    doSetInputBar("沒中");
                    $.data(document.body, 'isInformation', true); 
                }
            }
        });

});

$(window)
    .load(function()
    {

    });
