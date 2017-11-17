var focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
var focusedElementBeforeModal;

function trapEscapeKey(obj, evt) {
    if (evt.which == 27) {
        var o = obj.find('*');
        var cancelElement;
        cancelElement = o.filter("#cancel")
        cancelElement.click();
        evt.preventDefault();
    }
}

function trapTabKey(obj, evt) {
    if (evt.which == 9) {
        var o = obj.find('*');
        var focusableItems;
        focusableItems = o.filter(focusableElementsString).filter(':visible')
        var focusedItem;
        focusedItem = $(':focus');
        var numberOfFocusableItems;
        numberOfFocusableItems = focusableItems.length
        var focusedItemIndex;
        focusedItemIndex = focusableItems.index(focusedItem);
        if (evt.shiftKey) {
            if (focusedItemIndex == 0) {
                focusableItems.get(numberOfFocusableItems - 1).focus();
                evt.preventDefault();
            }
        } else {
            if (focusedItemIndex == numberOfFocusableItems - 1) {
                focusableItems.get(0).focus();
                evt.preventDefault();
            }
        }
    }
}

function setInitialFocusModal(obj) {
    var o = obj.find('*');
    var focusableItems;
    focusableItems = o.filter(focusableElementsString).filter(':visible').first().focus();
}

function setFocusToFirstItemInModal(obj){
    var o = obj.find('*');
    o.filter(focusableElementsString).filter(':visible').first().focus();
}

function showModal(obj) {
    obj2 = $(obj);
    $('#mainPage').attr('aria-hidden', 'true'); // mark the main page as hidden
    $('#modalOverlay').css('display', 'block'); // insert an overlay to prevent clicking and make a visual change to indicate the main apge is not available
    $(obj).css('display', 'block'); // make the modal window visible
    $(obj).attr('aria-hidden', 'false'); // mark the modal window as visible

    $(obj).keydown(function(event) {
        trapEscapeKey($(this), event);
    })
    $('body').on('focusin','#mainPage',function() {
        setFocusToFirstItemInModal(obj2);
    })
    focusedElementBeforeModal = $(':focus');
    setFocusToFirstItemInModal(obj2);
}

function hideModal(obj) {
    $(obj).closest('.modal').css('display', 'none');
    $(obj).closest('.modal').attr('aria-hidden', 'true');
    $('#modalOverlay').css('display', 'none');
    $('#mainPage').attr('aria-hidden', 'false');
    $('body').off('focusin','#mainPage');
    focusedElementBeforeModal.focus();
}