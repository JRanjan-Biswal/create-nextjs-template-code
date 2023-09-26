/*
* target : takes querySelector => e.g: #id, .class, tagname(h1, div, etc.)
* topOffset : top padding with repect to window height when scrolling into view => e.g: 45, 100 (take numbers)
*
* handleSmoothScroll : simple function that scrolls smoothly to its target... takes queryselectors as an argument
*
*
* handleSmoothScrollWithtopOffset : handles smooth scrolling with top padding (offset padding) when scrolling.. 
* take query selectors and offset as arguments 
*/


function handleSmoothScroll(target) {
    let ele = document.querySelector(target);
    ele.scrollIntoView();
}

function handleSmoothScrollWithtopOffset(target, topOffset) {
    window.scrollTo({
        behavior: 'smooth',
        top:
            document.querySelector(target).getBoundingClientRect().top -
            document.body.getBoundingClientRect().top -
            topOffset,
    })
}

export default {
    handleSmoothScroll,
    handleSmoothScrollWithtopOffset
}