(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('some-lib-vladgulik', ['exports', '@angular/core'], factory) :
    (factory((global['some-lib-vladgulik'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SomeLibVladgulikService = /** @class */ (function () {
        function SomeLibVladgulikService() {
        }
        SomeLibVladgulikService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SomeLibVladgulikService.ctorParameters = function () { return []; };
        /** @nocollapse */ SomeLibVladgulikService.ngInjectableDef = i0.defineInjectable({ factory: function SomeLibVladgulikService_Factory() { return new SomeLibVladgulikService(); }, token: SomeLibVladgulikService, providedIn: "root" });
        return SomeLibVladgulikService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SomeLibVladgulikComponent = /** @class */ (function () {
        function SomeLibVladgulikComponent() {
        }
        /**
         * @return {?}
         */
        SomeLibVladgulikComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SomeLibVladgulikComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'some-lib-vladgulik',
                        template: "\n    <p>\n      some-lib-vladgulik works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        SomeLibVladgulikComponent.ctorParameters = function () { return []; };
        return SomeLibVladgulikComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SomeLibVladgulikModule = /** @class */ (function () {
        function SomeLibVladgulikModule() {
        }
        SomeLibVladgulikModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [SomeLibVladgulikComponent],
                        exports: [SomeLibVladgulikComponent]
                    },] }
        ];
        return SomeLibVladgulikModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.SomeLibVladgulikService = SomeLibVladgulikService;
    exports.SomeLibVladgulikComponent = SomeLibVladgulikComponent;
    exports.SomeLibVladgulikModule = SomeLibVladgulikModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29tZS1saWItdmxhZGd1bGlrLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc29tZS1saWItdmxhZGd1bGlrL2xpYi9zb21lLWxpYi12bGFkZ3VsaWsuc2VydmljZS50cyIsIm5nOi8vc29tZS1saWItdmxhZGd1bGlrL2xpYi9zb21lLWxpYi12bGFkZ3VsaWsuY29tcG9uZW50LnRzIiwibmc6Ly9zb21lLWxpYi12bGFkZ3VsaWsvbGliL3NvbWUtbGliLXZsYWRndWxpay5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTb21lTGliVmxhZGd1bGlrU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvbWUtbGliLXZsYWRndWxpaycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBzb21lLWxpYi12bGFkZ3VsaWsgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNvbWVMaWJWbGFkZ3VsaWtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvbWVMaWJWbGFkZ3VsaWtDb21wb25lbnQgfSBmcm9tICcuL3NvbWUtbGliLXZsYWRndWxpay5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NvbWVMaWJWbGFkZ3VsaWtDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU29tZUxpYlZsYWRndWxpa0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU29tZUxpYlZsYWRndWxpa01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3NDQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQiw0Q0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsMERBSVQ7cUJBRUY7Ozs7d0NBVkQ7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztxQkFDckM7O3FDQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9