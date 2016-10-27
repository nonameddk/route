(function() {
    function Router() {
        this.routes = {};
        this.currentUrl = '';
    }
    Router.prototype.route = function(path, callback) {
        this.routes[path] = callback || function() {};
    };
    Router.prototype.refresh = function() {
        this.currentUrl = location.hash.slice(1) || '/';
        //console.log(this.currentUrl = location.hash.slice(1) || '/')
        this.routes[this.currentUrl]();
    };
    Router.prototype.init = function() {
        window.addEventListener('load', this.refresh.bind(this));
        window.addEventListener('hashchange', this.refresh.bind(this));
    }
    window.Router = new Router();
    window.Router.init();
})();