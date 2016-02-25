myapp.directive('formcomponents',[function () {
    var addfields = function(component){
    var textbox = {
      title:'textbox',
      placeholder: 'name'
    };
    var textArea = {
      title:'textArea',
      placeholder: 'name'
    };
    var checkbox = {
      title:'checkbox',
      placeholder: 'name'
    };
    var radiobutton = {
      title:'radiobutton',
      placeholder: 'name'
    };
    var template = '';
        switch(component) {
            case 'textbox':
                template = textbox;
                break;
            case 'textArea':
                template = textArea;
                break;
            case 'checkbox':
                template = checkbox;
                break;
            case 'radiobutton':
                template = radiobutton;
                break;
        }
        return template;
  }
    return {
      template:'<div class="myclass">{{data}}</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope: {
              addComponent: "&"
          },
      link:function(scope, element, attr){
          scope.data = attr.component;
          var addComponentReference = scope.addComponent();
          element.on('click',function(){
            addComponentReference(addfields(scope.data));
          })
      }
    };
}]);