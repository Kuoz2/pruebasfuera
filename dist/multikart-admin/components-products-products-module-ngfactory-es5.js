(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-products-products-module-ngfactory"], {
  /***/
  "./src/app/components/products/products.module.ngfactory.js":
  /*!******************************************************************!*\
    !*** ./src/app/components/products/products.module.ngfactory.js ***!
    \******************************************************************/

  /*! exports provided: ProductsModuleNgFactory */

  /***/
  function srcAppComponentsProductsProductsModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModuleNgFactory", function () {
      return ProductsModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _products_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./products.module */
    "./src/app/components/products/products.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _physical_marca_marca_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./physical/marca/marca.component.ngfactory */
    "./src/app/components/products/physical/marca/marca.component.ngfactory.js");
    /* harmony import */


    var _physical_category_category_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./physical/category/category.component.ngfactory */
    "./src/app/components/products/physical/category/category.component.ngfactory.js");
    /* harmony import */


    var _physical_add_product_add_product_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./physical/add-product/add-product.component.ngfactory */
    "./src/app/components/products/physical/add-product/add-product.component.ngfactory.js");
    /* harmony import */


    var _physical_impuestos_impuestos_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./physical/impuestos/impuestos.component.ngfactory */
    "./src/app/components/products/physical/impuestos/impuestos.component.ngfactory.js");
    /* harmony import */


    var _physical_listaproducto_listaproducto_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./physical/listaproducto/listaproducto.component.ngfactory */
    "./src/app/components/products/physical/listaproducto/listaproducto.component.ngfactory.js");
    /* harmony import */


    var _provideer_provideer_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./provideer/provideer.component.ngfactory */
    "./src/app/components/products/provideer/provideer.component.ngfactory.js");
    /* harmony import */


    var _physical_promociones_promociones_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./physical/promociones/promociones.component.ngfactory */
    "./src/app/components/products/physical/promociones/promociones.component.ngfactory.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng2_completer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng2-completer */
    "./node_modules/ng2-completer/esm2015/ng2-completer.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ks89/angular-modal-gallery */
    "./node_modules/@ks89/angular-modal-gallery/fesm2015/ks89-angular-modal-gallery.js");
    /* harmony import */


    var _shared_service_windows_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../shared/service/windows.service */
    "./src/app/shared/service/windows.service.ts");
    /* harmony import */


    var _shared_service_nav_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../shared/service/nav.service */
    "./src/app/shared/service/nav.service.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-ckeditor */
    "./node_modules/ngx-ckeditor/fesm2015/ngx-ckeditor.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/components/products/products-routing.module.ts");
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ngx-dropzone-wrapper */
    "./node_modules/ngx-dropzone-wrapper/dist/ngx-dropzone-wrapper.es5.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _physical_marca_marca_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./physical/marca/marca.component */
    "./src/app/components/products/physical/marca/marca.component.ts");
    /* harmony import */


    var _physical_category_category_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./physical/category/category.component */
    "./src/app/components/products/physical/category/category.component.ts");
    /* harmony import */


    var _physical_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./physical/add-product/add-product.component */
    "./src/app/components/products/physical/add-product/add-product.component.ts");
    /* harmony import */


    var _physical_impuestos_impuestos_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./physical/impuestos/impuestos.component */
    "./src/app/components/products/physical/impuestos/impuestos.component.ts");
    /* harmony import */


    var _physical_listaproducto_listaproducto_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./physical/listaproducto/listaproducto.component */
    "./src/app/components/products/physical/listaproducto/listaproducto.component.ts");
    /* harmony import */


    var _provideer_provideer_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./provideer/provideer.component */
    "./src/app/components/products/provideer/provideer.component.ts");
    /* harmony import */


    var _physical_promociones_promociones_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./physical/promociones/promociones.component */
    "./src/app/components/products/physical/promociones/promociones.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var ProductsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_products_module__WEBPACK_IMPORTED_MODULE_1__["ProductsModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _physical_marca_marca_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MarcaComponentNgFactory"], _physical_category_category_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CategoryComponentNgFactory"], _physical_add_product_add_product_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["AddProductComponentNgFactory"], _physical_impuestos_impuestos_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ImpuestosComponentNgFactory"], _physical_listaproducto_listaproducto_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ListaproductoComponentNgFactory"], _provideer_provideer_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ProvideerComponentNgFactory"], _physical_promociones_promociones_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["PromocionesComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_10__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_10__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_10__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_10__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_10__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_10__["ɵsNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_completer__WEBPACK_IMPORTED_MODULE_13__["LocalDataFactory"], ng2_completer__WEBPACK_IMPORTED_MODULE_13__["LocalDataFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_completer__WEBPACK_IMPORTED_MODULE_13__["RemoteDataFactory"], ng2_completer__WEBPACK_IMPORTED_MODULE_13__["RemoteDataFactory"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_completer__WEBPACK_IMPORTED_MODULE_13__["CompleterService"], ng2_completer__WEBPACK_IMPORTED_MODULE_13__["CompleterService"], [ng2_completer__WEBPACK_IMPORTED_MODULE_13__["LocalDataFactory"], ng2_completer__WEBPACK_IMPORTED_MODULE_13__["RemoteDataFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["HAMMER_GESTURE_CONFIG"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_17__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_service_windows_service__WEBPACK_IMPORTED_MODULE_18__["WindowRef"], _shared_service_windows_service__WEBPACK_IMPORTED_MODULE_18__["BrowserWindowRef"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _shared_service_windows_service__WEBPACK_IMPORTED_MODULE_18__["WINDOW"], _shared_service_windows_service__WEBPACK_IMPORTED_MODULE_18__["windowFactory"], [_shared_service_windows_service__WEBPACK_IMPORTED_MODULE_18__["WindowRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_service_nav_service__WEBPACK_IMPORTED_MODULE_19__["NavService"], _shared_service_nav_service__WEBPACK_IMPORTED_MODULE_19__["NavService"], [_shared_service_windows_service__WEBPACK_IMPORTED_MODULE_18__["WINDOW"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_17__["ɵk"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_17__["ɵb"], [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_17__["ɵj"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbActiveModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbActiveModal"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_ckeditor__WEBPACK_IMPORTED_MODULE_21__["CKEditorModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_21__["CKEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _products_routing_module__WEBPACK_IMPORTED_MODULE_23__["ProductsRoutingModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_23__["ProductsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_completer__WEBPACK_IMPORTED_MODULE_13__["Ng2CompleterModule"], ng2_completer__WEBPACK_IMPORTED_MODULE_13__["Ng2CompleterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__["ɵa"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__["ɵn"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__["ɵn"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__["ɵw"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__["ɵy"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__["ɵy"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__["ɵbd"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__["Ng2SmartTableModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__["Ng2SmartTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_25__["DropzoneModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_25__["DropzoneModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_17__["GalleryModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_17__["GalleryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _products_module__WEBPACK_IMPORTED_MODULE_1__["ProductsModule"], _products_module__WEBPACK_IMPORTED_MODULE_1__["ProductsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTES"], function () {
        return [[{
          path: "",
          children: [{
            path: "physical/marca",
            component: _physical_marca_marca_component__WEBPACK_IMPORTED_MODULE_27__["MarcaComponent"],
            data: _products_routing_module__WEBPACK_IMPORTED_MODULE_23__["ɵ0"]
          }, {
            path: "physical/category",
            component: _physical_category_category_component__WEBPACK_IMPORTED_MODULE_28__["CategoryComponent"],
            data: _products_routing_module__WEBPACK_IMPORTED_MODULE_23__["ɵ1"]
          }, {
            path: "physical/add-product",
            component: _physical_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_29__["AddProductComponent"],
            data: _products_routing_module__WEBPACK_IMPORTED_MODULE_23__["ɵ2"]
          }, {
            path: "physical/impuestos",
            component: _physical_impuestos_impuestos_component__WEBPACK_IMPORTED_MODULE_30__["ImpuestosComponent"],
            data: _products_routing_module__WEBPACK_IMPORTED_MODULE_23__["ɵ3"]
          }, {
            path: "physical/lista-editar",
            component: _physical_listaproducto_listaproducto_component__WEBPACK_IMPORTED_MODULE_31__["ListaproductoComponent"],
            data: _products_routing_module__WEBPACK_IMPORTED_MODULE_23__["ɵ4"]
          }, {
            path: "physical/proveedor",
            component: _provideer_provideer_component__WEBPACK_IMPORTED_MODULE_32__["ProvideerComponent"],
            data: _products_routing_module__WEBPACK_IMPORTED_MODULE_23__["ɵ5"]
          }, {
            path: "physical/promociones",
            component: _physical_promociones_promociones_component__WEBPACK_IMPORTED_MODULE_33__["PromocionesComponent"],
            data: _products_routing_module__WEBPACK_IMPORTED_MODULE_23__["ɵ6"]
          }]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_17__["ɵj"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_25__["DROPZONE_CONFIG"], _products_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"], [])]);
    });
    /***/

  }
}]);
//# sourceMappingURL=components-products-products-module-ngfactory-es5.js.map