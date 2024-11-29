document.addEventListener("scroll", () => {
    const items = document.querySelectorAll(".biography_item");
    const windowHeight = window.innerHeight;

    let closestItem = null; // 画面中央に最も近いアイテム
    let closestDistance = Infinity; // 最小距離の初期値

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;

        // 要素の中心と画面中央の距離を計算
        const distance = Math.abs(itemCenter - windowHeight / 2);

        // 最も近いアイテム更新
        if (distance < closestDistance) {
            closestDistance = distance;
            closestItem = item;
        }
    });

    // すべてのアイテムからactive削除
    items.forEach(item => item.classList.remove("active"));

    // 最も近いアイテムにのみactive付与
    if (closestItem) {
        closestItem.classList.add("active");
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const strengthSection = document.querySelector(".strength_list");
    const strengthItems = document.querySelectorAll(".strength_item");
  
    const onScroll = () => {
      const sectionTop = strengthSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight - 200) {
        strengthItems.forEach((item) => item.classList.add("show"));
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); 
  });
