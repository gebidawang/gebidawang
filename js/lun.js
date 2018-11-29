window.onload=function (ev) {
    lun_bo();
    let w = parseInt($('.win').width());
    $('.cir').css({
        left:(w/2-35)+'px'
    })
};

let t = 0;

function lun_bo() {
        t++;
        if (t >= 100) {
            let w = parseInt($('.win').width());
            let l = parseInt($('.imgs').css('marginLeft'));
            let m = 20;
            let c = -l / w + 1;
            let y = w / m;
            let s = 0;
            function lun_one() {
                s++;
                $('.win .imgs').css({
                    marginLeft: l-y*s + 'px'
                });
                let nei = window.requestAnimationFrame(lun_one);
                if (s>=m){
                    console.log(s);
                    c++;
                    window.cancelAnimationFrame(nei);
                    console.log(c);
                    if(c>=5){
                        console.log('123456789');
                        c=1;
                        $('.win .imgs').css({
                    marginLeft: 0
                });}
                    }
            }
                lun_one();
                t = 0;
            }
        window.requestAnimationFrame(lun_bo);
        }