function change_url() {
    // $('a').each((_, a) => {
    //     var href = a.href
    //     a.href = href.replace('blog.csdn.net', 'test-blog.csdn.net')
    // })
    
    var urls = document.getElementsByTagName('a')
    for (var v in urls) {
        var href = urls[v].href
        if (href != undefined) {
            if (href.indexOf('test-blog') < 0) {
                urls[v].href = href.replace('blog.csdn.net', 'test-blog.csdn.net')
            }
        }
    }
}

window.onload = function() {
    change_url()
}
