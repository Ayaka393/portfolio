// イントロダクション

document.addEventListener("DOMContentLoaded", function() {
    // 既にアニメーションが実行されたか確認 
    if (!sessionStorage.getItem("introShown")) {
        // 名前の表示を開始
        const nameElement = document.getElementById("intro_name");
        const garland = document.getElementById("garland");
        const wrapper = document.querySelector(".intro_wrapper");

        // 名前フェードイン
        nameElement.classList.add("fade-in");

        // ガーランドのアニメーション
        garland.classList.add("garland");

        // ガーランドが上に戻った後、ページ遷移
        setTimeout(function() {
            wrapper.classList.add("fade-out");
               setTimeout(function() {
                   window.location.href = "index.html"; 
               }, 500); // フェードアウト後にページ遷移
        }, 2300); // 遷移開始

        // アニメーションが実行されたことをフラグに設定
        sessionStorage.setItem("introShown", "true");
    } else {
        // アニメーションが既に実行されていた場合、アニメーション要素を非表示にしてホームページを表示
        document.querySelector(".intro_wrapper").style.display = "none";
    }
});

/*　アイテムのフェードイン */
$(function(){
    $(window).scroll(function (){
        $(".fadein").each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 50){
              $(this).addClass("active");
            }
        });
    });
});

$(function() {
    $(" .sns_icon_item,.logo_item, .app_icon_item,.flyer_item,.ad_item").each(function(i) {
        if (window.innerWidth >= 830) {
                if (i < 3) {
                    $(this).addClass("active"); 
                }
            }
        if (window.innerWidth < 830) {
                if (i < 2) {
                    $(this).addClass("active"); 
                }
            }            
    });
    $(window).scroll(function() {
        $(".sns_icon_item,.logo_item, .app_icon_item,.flyer_item,.ad_item").each(function(i) {
                if (window.innerWidth >= 830) {
                    if (i >= 3) { 
                        var position = $(this).offset().top;
                        var scroll = $(window).scrollTop();
                        var windowHeight = $(window).height();
                        if (scroll > position - windowHeight ) {
                        $(this).addClass("active").dequeue();                  
                        }
                    }
                }
                if (window.innerWidth < 830) {
                    if (i >= 2) { 
                        var position = $(this).offset().top;
                        var scroll = $(window).scrollTop();
                        var windowHeight = $(window).height();
                        if (scroll > position - windowHeight ) {
                        $(this).addClass("active").dequeue();                  
                        }
                    }
                }                    
        });
    });
});

$(function() {
    $(".sns_header_item").each(function(i) {
        if (i < 2) {
            $(this).addClass("active"); 
        }
    });
    $(window).scroll(function() {
        $(".sns_header_item").each(function(i) {
            if (i >= 2) { 
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 100) {
                        $(this).addClass("active").dequeue();
                }
            }
        });
    });
});


// ハンバーガーメニュー
const hamburgerButton = document.querySelector('.mobile_menu_icon'); 
const menu = document.querySelector('.mobile_menu');

function toggleMenu(event) {
    event.stopPropagation();   //イベントが伝播しないようにしてる
    menu.classList.toggle('active');
}

hamburgerButton.addEventListener('click', toggleMenu);

// 画面のどこかをクリックしたらメニューを閉じる
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburgerButton.contains(event.target)) {
        menu.classList.remove('active');
    }
}); 



/*　新しいタブを開くのを抑制　*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            if (window.innerWidth <= 830) {
                if (link.target === '_blank') {
                    event.preventDefault(); // デフォルトの動作を停止
                    window.location.href = link.href; // 同じタブでリンクを開く
                }
            }
        });
    });
});


/* スクロールさせる　*/
document.addEventListener("DOMContentLoaded", function() {
    // 既にアニメーションが実行されたか確認 sessionStorageを利用
    if (!sessionStorage.getItem("introShown")) {

        window.addEventListener('load', function() {
        const overlay = document.querySelector('.overlay');
    
                // 3秒後にフェードアウト
                setTimeout(() => {
                overlay.style.opacity = '0';
                setTimeout(() => overlay.style.display = 'none', 500); // アニメーション後に非表示
                }, 2500); // 3秒後に非表示
            });
          // アニメーションが実行されたことをフラグに設定
          sessionStorage.setItem("introShown", "true"); 
    }
    else {
        // アニメーションが既に実行されていた場合、アニメーション要素を非表示にしてホームページを表示
        document.querySelector(".overlay").style.display = "none";
    }});




    