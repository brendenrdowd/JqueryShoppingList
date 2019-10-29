function addItem() {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        const item = $('#shopping-list-entry').val()
        $('.shopping-list').append(`<li><span class="shopping-item">${item}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`)
        this.reset()
    })
}

function removeItem() {
    $('.shopping-list').on('click','.shopping-item-delete',function (event) {
        this.closest('li').remove()
        // this.parentNode.parentNode.remove() //probably not the "correct" way
    })
}

function checkItem(){
    $('.shopping-list').on('click','.shopping-item-toggle',function(event){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    })
}

// DOM Ready
$(function () {
    $(addItem)
    $(removeItem)
    $(checkItem)
})
