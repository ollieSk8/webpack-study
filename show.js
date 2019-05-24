// 操作 DOM 元素，把 content 显示到网页上
function show(content) {
    window.document.getElementById('app').innerText = 'Hello,' + content;
}

export default show;