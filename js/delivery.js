//<Document Actions>==============================================================================

document.addEventListener('click', function (e) {
    documentActions(e)
});

function documentActions(e) {
    let targetElement = e.target;
    
    // Иконка корзины
    if (targetElement.classList.contains('top-menu__cart')) {
        openCart();
    };

    // Кнопка "Очистить все" в корзине.
    if (targetElement.classList.contains('cartClearAll')) {
        clearAllItems();
    };

    // Кнопка "Добавить" в корзине.
    if (targetElement.classList.contains('addCartItem')) {
        addItem(targetElement);
    };

    // Кнопка "Убрать" в корзине.
    if (targetElement.classList.contains('delCartItem')) {
        deleteItem(targetElement);
    };

    // Открытие popup-а.
    if (targetElement.classList.contains('popup-opener')) {
        const dataAtribute = targetElement.dataset.popup_open;
        let popup = document.querySelector(dataAtribute);
        popupOpen(popup, e);
        e.preventDefault();
    };
};

//</Document Actions>==============================================================================

//<Shopping cart>==============================================================================

// Запрет на открытие "Оформления заказа", если корзина пуста
if (cartData !== null) {
    if (cartMakeOffer.classList.contains('_none-cart-data')) {
        cartMakeOffer.classList.remove('_none-cart-data');
    }
    cartMakeOffer.classList.add('_has-cart-data');
} else {
    if (cartMakeOffer.classList.contains('_has-cart-data')) {
        cartMakeOffer.classList.remove('_has-cart-data');
    }
    cartMakeOffer.classList.add('_none-cart-data');
};

changeCartIconNumber();

//</Shopping cart>==============================================================================

//<Pre-loader>==============================================================================

document.body.onload = function () {
    setTimeout(() => {
        let pageLoading = document.querySelector('.page-loading');
        if (!pageLoading.classList.contains('_loaded')) {
            pageLoading.classList.add('_loaded');
            document.body.classList.remove('_lock');
        };
    }, 1000)
};

//</Pre-loader>==============================================================================
