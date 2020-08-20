function animate(obj, target, callback) {
    // 让元素只有一个定时器：先清除以前的定时器，只保留当前的一个定时器
    clearInterval(obj.timer)
        // 给不同的元素指定不同的定时器
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // if (callback) {
            //     callback();
            // }
            callback && callback;
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}