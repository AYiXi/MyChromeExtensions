function click_more() {
    btn = document.getElementById('btn-readmore-zk')
    // console.log(btn)
    if (btn != null) {
        btn.click()
    }// } else {
    //     console.log(111)
    // }
}

function change_url() {
    // $('a').each((_, a) => {
    //     var href = a.href
    //     a.href = href.replace('blog.csdn.net', 'test-blog.csdn.net')
    // })

    var urls = document.getElementsByTagName('a')
    for (var v in urls) {
        var href = urls[v].href
        if (href != undefined) {
            urls[v].href = href.replace('blog.csdn.net', 'test-blog.csdn.net')
        }
    }
}

window.onload = function () {
    click_more()
    change_url()
}
