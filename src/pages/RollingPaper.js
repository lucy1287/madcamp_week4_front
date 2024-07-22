import imagesLoaded from 'imagesloaded';

export function resizeGridItem(item) {
    const grid = document.getElementsByClassName("grid")[0];
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
}

export function resizeAllGridItems() {
    const allItems = document.getElementsByClassName("item");
    for (let x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
    }
}

export function resizeInstance(instance) {
    const item = instance.elements[0];
    resizeGridItem(item);
}

export function initializeGrid() {
    window.onload = resizeAllGridItems;
    window.addEventListener("resize", resizeAllGridItems);

    const allItems = document.getElementsByClassName("item");
    for (let x = 0; x < allItems.length; x++) {
        imagesLoaded(allItems[x], resizeInstance);
    }
}
