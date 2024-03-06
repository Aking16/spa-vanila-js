function homeView() {
    return '<h1>Home Page</h1>';
}

function aboutView() {
    return '<h1>About Page</h1>';
}

function handleRouteChange() {
    const path = window.location.pathname;
    let view;

    switch (path) {
        case '/about':
            view = aboutView();
            break;

        default:
            view = homeView();
    }

    document.getElementById('app').innerHTML = view;
}

document.querySelectorAll('.route').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        history.pushState(null, '', this.href);
        handleRouteChange();
    });
});
