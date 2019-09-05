var n = 0;
    function update_img(n) {
        // 隐藏全部
        $("#main").children().hide();
        //显示当前
        $('#main').children().eq(n).fadeIn();
        // 更新变量
    }

    //更改函数
    function change(){
        // 设置次数
        n = n>=6?0:n;
        update_img(n);
        n++;
    }

    timer1 = setInterval(change, 1500);

    // 监听鼠标进入,清除定时器
    $('#main').mouseenter(function () {
        clearInterval(timer1)
    });
    // 监听鼠标离开,开启定时器
    $('#main').mouseleave(function () {
        // 实在整不出来,假装实现了
        // window.location.reload();
        timer1 = setInterval(change, 1500);
    });

    // 监听鼠标点击事件
    $('#rightside').click(function () {
        n = n>=6?0:n;
        update_img(n);
        n++;
    });

    // 监听鼠标点击事件
    $('#leftside').click(function () {
        n = n<=-1?6:n;
        update_img(n);
        n--;
    });


    for(var i=0; i<6; i++){
        $('#ul').children().eq(i).click(function () {
        console.log(this);
        m = this.getAttribute("name");
        console.log(m);
        update_img(m-1);
    });
    }
