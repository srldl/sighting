angular.module("formula").run(["$templateCache", function($templateCache) {$templateCache.put("formula/bootstrap3.html","<form class=\"form-horizontal\" ng-if=\"form.fieldsets\"><header ng-if=\"form.title\" class=\"page-header\" style=\"margin-top: -10px\"><h2>{{ form.title }}</h2></header><ul class=\"nav nav-tabs\"><li ng-repeat=\"fieldset in form.fieldsets\" ng-if=\"form.fieldsets.length > 1\" ng-class=\"{ active: fieldset.active }\"><a href=\"\" ng-click=\"form.activate(fieldset)\">{{ fieldset.title }}</a></li></ul><fieldset ng-repeat=\"fieldset in form.fieldsets\" ng-if=\"fieldset.active\" style=\"border: 1px solid #ddd; border-radius: 0 0 5px 5px; border-top: 0; padding: 15px; padding-bottom: 0;\"><div ng-repeat=\"field in fieldset.fields\" ng-show=\"field.visible\" formula:field-definition=\"\"><div ng-if=\"field.typeOf(\'input\')\" title=\"{{ field.description }}\" class=\"form-group has-feedback\"><label for=\"{{ field.uid }}\" class=\"col-sm-3 control-label\">{{ field.title }}</label><div class=\"col-sm-9\" ng-class=\"{ \'has-error\': field.error, \'has-success\': field.valid, \'has-warning\': (field.required && field.value === null) }\"><div ng-if=\"!field.typeOf(\'select\')\"><input class=\"form-control input-md\" formula:field=\"field\"><div ng-if=\"!field.typeOf(\'checkbox\') && (field.error || field.valid)\"><span ng-if=\"field.valid\" class=\"glyphicon glyphicon-ok form-control-feedback\"></span> <span ng-if=\"field.error\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span></div></div><select ng-if=\"field.typeOf(\'select\')\" class=\"form-control input-md\" formula:field=\"field\"><option ng-repeat=\"value in field.values\" value=\"{{ value.id }}\">{{ value.label }}</option></select><span class=\"help-block\">{{ field.error || field.description }}</span></div></div><div ng-if=\"field.typeOf(\'object\')\"><div class=\"panel\" ng-class=\"{ \'panel-danger\': field.error, \'panel-success\': field.valid }\" formula:field=\"field\"><div class=\"panel-heading\">{{ field.title }}</div><div class=\"panel-body\"><div ng-repeat=\"field in field.fields\" ng-show=\"field.visible\"><formula:field-instance field=\"field\"></formula:field-instance></div></div></div></div><div ng-if=\"field.typeOf(\'array\')\"><div formula:field=\"field\"><div ng-if=\"field.typeOf(\'fieldset\')\" class=\"panel\" ng-class=\"{ \'panel-danger\': field.error, \'panel-success\': field.valid }\"><div class=\"panel-heading\">{{ field.title }} ({{ field.values.length || 0 }})</div><ul class=\"list-group\"><li class=\"list-group-item\" ng-repeat=\"value in field.values\"><fieldset><legend style=\"border: none; margin-bottom: 10px; text-align: right;\"><span ng-class=\"{ \'text-danger\': !value.valid, \'text-success\': value.valid }\" class=\"pull-left\" ng-if=\"!value.visible\">{{ value.fields | formulaInlineValues }}</span> <button style=\"font-family: monospace;\" class=\"btn btn-sm btn-info\" ng-click=\"field.itemToggle($index)\" type=\"button\" title=\"{{ value.visible ? form.i18n.minimize[1] : form.i18n.maximize[1] }}\">{{ value.visible ? \'_\' : \'‾\' }}</button> <button class=\"btn btn-sm btn-danger\" ng-click=\"field.itemRemove($index)\" type=\"button\" title=\"{{ form.i18n.remove[1] }}\">X</button></legend><div ng-repeat=\"field in field.fields\" ng-show=\"value.visible\"><formula:field-instance field=\"value.fields[$index]\" ng-show=\"value.fields[$index].visible\"></formula:field-instance></div></fieldset></li></ul><div class=\"panel-footer clearfix has-feedback\" ng-class=\"{ \'has-error\': field.error, \'has-success\': field.valid }\"><span class=\"help-block\"><span>{{ field.error || field.description }}</span> <button class=\"btn btn-sm btn-primary pull-right\" ng-click=\"field.itemAdd()\" type=\"button\" title=\"{{ form.i18n.add[1] }}\">{{ form.i18n.add[0] }}</button></span></div></div><div ng-if=\"field.typeOf(\'field\')\" class=\"panel\" ng-class=\"{ \'panel-danger\': field.error, \'panel-success\': field.valid }\"><div class=\"panel-heading\">{{ field.title }}</div><ul class=\"list-group\"><li class=\"list-group-item\" ng-repeat=\"value in field.values\"><div class=\"input-group\"><input formula:field=\"value\" class=\"form-control input-md\"> <span class=\"input-group-btn\"><button class=\"btn btn-danger\" ng-click=\"field.itemRemove($index)\" type=\"button\" title=\"{{ form.i18n.remove[1] }}\">X</button></span></div></li></ul><div class=\"panel-footer clearfix has-feedback\" ng-class=\"{ \'has-error\': field.error, \'has-success\': field.valid }\"><span class=\"help-block\"><span>{{ field.error || field.description }}</span> <button class=\"btn btn-sm btn-primary pull-right\" ng-click=\"field.itemAdd()\" type=\"button\" title=\"{{ form.i18n.add[1] }}\">{{ form.i18n.add[0] }}</button></span></div></div></div></div></div></fieldset><div class=\"has-feedback\" ng-class=\"{ \'has-error\': !form.valid, \'has-success\': form.valid }\" style=\"margin-top: 10px;\"><span class=\"help-block\"><span ng-if=\"form.errors\" title=\"{{ form.errors.join(\'\\n\') }}\">{{ form.i18n.invalid | formulaReplace : { count: form.errors.length } }}</span><div class=\"btn-group pull-right\"><button type=\"button\" class=\"btn btn-info\" ng-click=\"form.validate()\" title=\"{{ form.i18n.validate[1] }}\">{{ form.i18n.validate[0] }}</button> <button type=\"button\" class=\"btn btn-success\" ng-class=\"{ disabled: !form.valid }\" ng-click=\"form.save()\" title=\"{{ form.i18n.save[1] }}\">{{ form.i18n.save[0] }}</button></div></span></div></form><div ng-if=\"!form.fieldsets\" class=\"alert alert-info\" style=\"text-align: center; overflow: hidden;\"><span>Loading schema...</span></div>");
$templateCache.put("formula/default.html","<form class=\"formula\" ng-if=\"form.fieldsets\"><header ng-if=\"form.title\">{{ form.title }}</header><nav ng-if=\"form.fieldsets.length > 1\"><a ng-repeat=\"fieldset in form.fieldsets\" ng-class=\"{ active: fieldset.active }\" href=\"\" ng-click=\"form.activate(fieldset)\">{{ fieldset.title }}</a></nav><fieldset ng-repeat=\"fieldset in form.fieldsets\" ng-if=\"fieldset.active\"><legend ng-if=\"fieldset.title\">{{ fieldset.title }}</legend><div ng-repeat=\"field in fieldset.fields\" ng-show=\"field.visible\" formula:field-definition=\"\"><div ng-if=\"field.typeOf(\'input\')\" title=\"{{ field.description }}\" ng-class=\"{ valid: field.valid, error: field.error, required: (field.required && field.value === null) }\"><label for=\"{{ field.uid }}\">{{ field.title }}</label> <input formula:field=\"field\"> <span>{{ field.error || field.description }}</span></div><div ng-if=\"field.typeOf(\'object\')\"><fieldset formula:field=\"field\"><legend>{{ field.title }}</legend><div ng-repeat=\"field in field.fields\" ng-show=\"field.visible\"><formula:field-instance field=\"field\"></formula:field-instance></div></fieldset></div><div ng-if=\"field.typeOf(\'array\')\"><div formula:field=\"field\"><fieldset ng-class=\"{ valid: field.valid, error: field.error }\"><legend>{{ field.title }} ({{ field.values.length || 0 }})</legend><ul ng-if=\"field.typeOf(\'fieldset\')\"><li ng-repeat=\"value in field.values\"><fieldset ng-class=\"{ valid: value.valid }\"><legend><span ng-if=\"!value.visible\">{{ value.fields | formulaInlineValues }}</span> <a href=\"\" class=\"toggle\" ng-click=\"field.itemToggle($index)\" title=\"{{ value.visible ? form.i18n.minimize[1] : form.i18n.maximize[1] }}\">{{ value.visible ? \'_\' : \'‾\' }}</a> <a href=\"\" class=\"remove\" ng-click=\"field.itemRemove($index)\" title=\"{{ form.i18n.remove[1] }}\">X</a></legend><div ng-repeat=\"subfield in field.fields\" ng-show=\"value.visible\"><formula:field-instance field=\"value.fields[$index]\" ng-show=\"value.fields[$index].visible\"></formula:field-instance></div></fieldset></li><li><span>{{ field.error || field.description }}</span> <button class=\"add\" ng-click=\"field.itemAdd()\" type=\"button\" title=\"{{ form.i18n.add[1] }}\"><strong>+</strong> {{ form.i18n.add[0] }}</button></li></ul><ul ng-if=\"field.typeOf(\'field\')\"><li ng-repeat=\"value in field.values\" ng-class=\"{ valid: value.valid, error: value.error }\"><input formula:field=\"value\"> <a href=\"\" class=\"remove\" ng-click=\"field.itemRemove($index)\" title=\"{{ form.i18n.remove[1] }}\">X</a> <span ng-if=\"value.error\">{{ value.error }}</span></li><li><span>{{ field.error || field.description }}</span> <button class=\"add\" ng-click=\"field.itemAdd()\" type=\"button\" title=\"{{ form.i18n.add[1] }}\"><strong>+</strong> {{ form.i18n.add[0] }}</button></li></ul></fieldset></div></div></div></fieldset><footer><span ng-if=\"form.errors\" title=\"{{ form.errors.join(\'\\n\') }}\">{{ form.i18n.invalid | formulaReplace : { count: form.errors.length } }}</span> <button ng-click=\"form.validate()\" title=\"{{ form.i18n.validate[1] }}\"><strong>&#10003;</strong> {{ form.i18n.validate[0] }}</button> <button ng-disabled=\"!form.valid\" ng-click=\"form.save()\" title=\"{{ form.i18n.save[1] }}\"><strong>&#9921;</strong> {{ form.i18n.save[0] }}</button></footer></form><div class=\"formula\" ng-if=\"!form.fieldsets\"><div class=\"loading\"><div class=\"spinner\"></div><span>Loading...</span></div></div>");}]);