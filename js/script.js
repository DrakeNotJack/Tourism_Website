function filterContent(category) {
    const items = document.querySelectorAll('.item');

    if (category === 'all') {
        items.forEach(item => {
            item.style.display = 'block'; // 显示所有内容
        });
    } else {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block'; // 显示匹配类别的内容
            } else {
                item.style.display = 'none'; // 隐藏其他内容
            }
        });
    }
}

// 获取所有筛选按钮
const filterButtons = document.querySelectorAll('.filter-btn');

// 为每个按钮添加点击事件
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除所有按钮的激活状态
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // 给当前点击的按钮添加激活状态
        button.classList.add('active');

        // 获取按钮的 data-filter 属性值
        const filterValue = button.getAttribute('data-filter');
        filterContent(filterValue); // 调用过滤函数
    });
});

// 默认显示全部内容
filterContent('all');
