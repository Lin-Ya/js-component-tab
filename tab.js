function Tab (node){
  this.$node = $(node);
  this.init();
}
Tab.prototype = {
    constructor: Tab,
    init: function(){
      this.$btn = this.$node.find('.btn')
      this.$panel = this.$node.find('.panel')
      this.bind();
    },
    bind: function(){
      var _this = this;
      this.$btn.on('click', function(){
        let index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active')
        _this.$panel.eq(index).addClass('active').siblings().removeClass('active')
      })
    }
};

var tab1 = new Tab(document.querySelectorAll('.tab-container')[0]);
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1]);