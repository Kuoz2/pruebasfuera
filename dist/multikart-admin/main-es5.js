function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Service/car-service-panaderia.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Service/car-service-panaderia.service.ts ***!
    \**********************************************************/

  /*! exports provided: CarServicePanaderiaService */

  /***/
  function srcAppServiceCarServicePanaderiaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarServicePanaderiaService", function () {
      return CarServicePanaderiaService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CarServicePanaderiaService = /*#__PURE__*/function () {
      function CarServicePanaderiaService() {
        _classCallCheck(this, CarServicePanaderiaService);

        this.cart = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null); //Bahiorsubject, valor inicial siempre

        this.currentDataCart$ = this.cart.asObservable(); //Observable con el valor actual
      }

      _createClass(CarServicePanaderiaService, [{
        key: "changeCart",
        value: function changeCart(newData) {
          //Obtener el valor actual
          console.log("lo que entra en el carro", newData);
          var listCart = this.cart.getValue(); //Si no es el primer item del carrito

          if (listCart) {
            //Buscamos si ya cargamos ese item en el carrito
            var objIndex = listCart.findIndex(function (obj) {
              return obj.id == newData.id;
            });
            var objcod = listCart.findIndex(function (obj) {
              return obj.pcodigo == "1111";
            });

            if (objIndex != -1 && objcod == -1) {
              //Si ya cargamos uno aumentamos su cantidad
              listCart[objIndex].quantity += 1;
            } else {
              listCart.push(newData); //cargamos el carrito
            }
          } else {
            //Si es el primer elemento se inicializa
            listCart = [];
            listCart.push(newData);
          }

          this.cart.next(listCart); //Enviamos el valor a todos los observables que esten esuchando al observable
        }
      }, {
        key: "removeElementCart",
        value: function removeElementCart(newData) {
          //Se obteiene el valor real del carrito
          var listCart = this.cart.getValue(); //Se busca el item del carrito que se quiere eliminar.

          var objIndex = listCart.findIndex(function (obj) {
            return obj.id == newData.id;
          });

          if (objIndex != -1) {
            //seteamos la cantidad en 1 ya que los arrays se modifican los valores por referencia, si volbemos agregar la cantidad se reniciara.
            listCart[objIndex].quantity = 1; //Eliminamos el array del carrito

            listCart.splice(objIndex, 1);
          }

          this.cart.next(listCart); //Enviamos el valor a todos los observables que esten escuchando al observable.
        }
      }]);

      return CarServicePanaderiaService;
    }();

    CarServicePanaderiaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function CarServicePanaderiaService_Factory() {
        return new CarServicePanaderiaService();
      },
      token: CarServicePanaderiaService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/Service/categorias.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/Service/categorias.service.ts ***!
    \***********************************************/

  /*! exports provided: CategoriasService */

  /***/
  function srcAppServiceCategoriasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasService", function () {
      return CategoriasService;
    });
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_Modulos_respuesta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../components/Modulos/respuesta */
    "./src/app/components/Modulos/respuesta.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategoriasService = /*#__PURE__*/function () {
      function CategoriasService(http, cookie) {
        _classCallCheck(this, CategoriasService);

        this.http = http;
        this.cookie = cookie;
        this.resiviendoinfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.UrlpruebaCategoria = 'https://multikart-norte.herokuapp.com/categories';
        this.UrlEstaravacio = 'https://multikart-norte.herokuapp.com/categories';
        this.resServ = _components_Modulos_respuesta__WEBPACK_IMPORTED_MODULE_3__["guardado"];
      } // Mostrar


      _createClass(CategoriasService, [{
        key: "mostrarcategorias",
        value: function mostrarcategorias() {
          return this.http.get(this.UrlpruebaCategoria);
        } // Por ID

      }, {
        key: "mostrarporID",
        value: function mostrarporID(id) {
          return this.http.get(this.UrlpruebaCategoria + '/' + id);
        } // Guardar

        /*async guardarcategorias(c) {
          await this.verificar.verificarSaveCate().subscribe((respuesta: respuesta) => {
             console.log(respuesta);
             if (respuesta.resultado != 'existe') { return; }
             if (respuesta.resultado == 'existe') {
        
               this.http.post<Categories>(this.UrlpruebaCategoria, c.value).subscribe( res => {
                  c.reset()
                  
                 this.resiviendoinfo.next(res)
                })
            }
           })
           return this.resiviendoinfo.asObservable()
          }*/

        /*  async guardainicialc(c){
            console.log("guardando ini cate", c)
            await this.verificar.verificarSaveCate().subscribe(async (respuesta: respuesta) => {
              console.log(respuesta);
              if (respuesta.resultado != 'existe') { return; }
              if (respuesta.resultado == 'existe') {
         
               await this.http.post<Categories>(this.UrlpruebaCategoria, c).subscribe( res => {
                if( Object.values(res)[0] == 'correctamente'){
                  c.reset()
              }
                 
                 })
              }
            })
          }*/
        // Editar

        /*async actualizarcategoria( cat: Categories) {
            await this.verificar.verificarEditCate().subscribe(async (res:respuesta) => {
              if(res.resultado != 'existe'){return}
              if(res.resultado == 'existe'){
               await this.http.put<Categories>(this.UrlpruebaCategoria + '/' + cat.id, cat).subscribe(res => {
                 if(Object.values(res)[0] == 'correctamente'){
                   alert('La categoría se actualizado, correctamente.')
                 }
               });;
              }
            })
        }*/
        //verifica si la categoria esta vacia y redige al link de ingreso de categorias.

      }, {
        key: "veri_categorias",
        value: function veri_categorias() {
          return this.http.get(this.UrlEstaravacio + '/verificar_blank_category');
        }
      }]);

      return CategoriasService;
    }();

    CategoriasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      factory: function CategoriasService_Factory() {
        return new CategoriasService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_0__["CookieService"]));
      },
      token: CategoriasService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/Service/hora-actual.service.ts":
  /*!************************************************!*\
    !*** ./src/app/Service/hora-actual.service.ts ***!
    \************************************************/

  /*! exports provided: valorReloj, HoraActualService */

  /***/
  function srcAppServiceHoraActualServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "valorReloj", function () {
      return valorReloj;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoraActualService", function () {
      return HoraActualService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // tslint:disable-next-line:class-name


    var valorReloj = function valorReloj() {
      _classCallCheck(this, valorReloj);
    };

    valorReloj.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function valorReloj_Factory() {
        return new valorReloj();
      },
      token: valorReloj,
      providedIn: "root"
    });

    var HoraActualService = /*#__PURE__*/function () {
      function HoraActualService() {
        _classCallCheck(this, HoraActualService);

        this.infofecha$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.clock = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
          return new Date();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1));
      }

      _createClass(HoraActualService, [{
        key: "getInfoReloj",
        value: function getInfoReloj() {
          var _this = this;

          this.clock.subscribe(function (t) {
            _this.hours = t.getHours();
            _this.hours = _this.hours ? _this.hours : 12;
            _this.vr = {
              hora: _this.hours,
              minutos: t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes().toString(),
              ampm: t.getHours() > 11 ? 'PM' : 'AM',
              // tslint:disable-next-line:max-line-length
              diaymes: t.toLocaleString('ja-JP', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              }).replace('.', '').replace('-', ' '),
              diadesemana: t.toLocaleString('es-CH', {
                weekday: 'long'
              }).replace('.', ''),
              segundo: t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds().toString()
            };

            _this.infofecha$.next(_this.vr);
          });
          return this.infofecha$.asObservable();
        }
      }]);

      return HoraActualService;
    }();
    /***/

  },

  /***/
  "./src/app/Service/ventas.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/Service/ventas.service.ts ***!
    \*******************************************/

  /*! exports provided: VentasService */

  /***/
  function srcAppServiceVentasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentasService", function () {
      return VentasService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_Modulos_Pagos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../components/Modulos/Pagos */
    "./src/app/components/Modulos/Pagos.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _websocket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./websocket.service */
    "./src/app/Service/websocket.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VentasService = /*#__PURE__*/function () {
      function VentasService(http, ngxspinner, socket) {
        _classCallCheck(this, VentasService);

        this.http = http;
        this.ngxspinner = ngxspinner;
        this.socket = socket;
        this.siguiendoresultado = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.informacion_arg = [];
        this.moduloVenta = new _components_Modulos_Pagos__WEBPACK_IMPORTED_MODULE_1__["actualizarPago"]();
        this.obteneritems2 = [];
        this.resultadoretornados = [];
        this.moduloVentaExport = new _components_Modulos_Pagos__WEBPACK_IMPORTED_MODULE_1__["PagoHecho"]();
        this.PruebaVentas = 'https://multikart-norte.herokuapp.com/sales';
        this.consu_code = 'https://multikart-norte.herokuapp.com/codes';
        this.almacenando = [];
      }

      _createClass(VentasService, [{
        key: "mostrarventas",
        value: function mostrarventas() {
          return this.http.get(this.PruebaVentas);
        }
      }, {
        key: "guardarventas",
        value: function guardarventas(vebta) {
          return this.http.post(this.PruebaVentas, vebta);
        }
      }, {
        key: "consultar_code",
        value: function consultar_code(code) {
          console.log('entra esto antes del guardar', code);
          return this.http.post(this.consu_code, code).subscribe(function (res) {
            console.log("servicio panaderia", res);
          });
        } //Actualizar el antiguo registro

      }, {
        key: "actualizar_voucher",
        value: function actualizar_voucher(code, id) {
          console.log("esta ingresando esta id", id);
          console.log("se esta actualizando este registro", code);
          return this.http.put(this.consu_code + '/' + id, code).subscribe(function (res) {
            console.log("actualizando", res);
          });
        }
      }, {
        key: "guardar_aqui",
        value: function guardar_aqui(b) {
          console.log(this.almacenando.length);
          this.almacenando.push(b);
          var SumTotal = 0;
          SumTotal = this.almacenando.reduce(function (a, b) {
            return a + b;
          });
          console.log("lo almacenado", SumTotal);
          this.moduloVentaExport.total = SumTotal;
          console.log("total service", this.moduloVentaExport.total);
          return this.moduloVentaExport.total;
        }
      }, {
        key: "guardarLimpiarVenta",
        value: function guardarLimpiarVenta() {
          this.almacenando.splice(0, this.almacenando.length);
        }
      }, {
        key: "argumentos_ingresado",
        value: function argumentos_ingresado(a) {
          this.informacion_arg.push(a);
          console.log("informacino ignresada", this.informacion_arg.push(a));
          return this.informacion_arg;
        }
      }, {
        key: "obtener_items2",
        value: function obtener_items2(a) {
          this.obteneritems2.push(a);
          console.log("items encontrador", this.moduloVenta);
          return this.obteneritems2;
        }
      }, {
        key: "acutalizarlosregistros",
        value: function acutalizarlosregistros() {
          var _this2 = this;

          this.obteneritems2.forEach(function (res) {
            console.log(res);
            res.voucher_vendido = true;

            _this2.http.put(_this2.consu_code + '/' + res.id, res).subscribe(function (res) {
              console.log('res', res);
            });
          });
        }
      }, {
        key: "emiitir_alsocket",
        value: function emiitir_alsocket() {
          this.socket.emitir_unescucha();
        }
      }, {
        key: "recuperaremitido",
        value: function recuperaremitido() {
          var _this3 = this;

          this.resultadoretornados.splice(0, this.resultadoretornados.length);
          this.socket.io.on('test2', function (a) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("emitiendo", a);
                      _context.next = 3;
                      return this.resultadoretornados.push(a);

                    case 3:
                      console.log('RESULTADO ON DEL SOCKET', this.resultadoretornados);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
          return this.resultadoretornados;
        }
      }]);

      return VentasService;
    }();

    VentasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      factory: function VentasService_Factory() {
        return new VentasService(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketService"]));
      },
      token: VentasService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/Service/voucher.service.ts":
  /*!********************************************!*\
    !*** ./src/app/Service/voucher.service.ts ***!
    \********************************************/

  /*! exports provided: VoucherService */

  /***/
  function srcAppServiceVoucherServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoucherService", function () {
      return VoucherService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VoucherService = /*#__PURE__*/function () {
      function VoucherService(http) {
        _classCallCheck(this, VoucherService);

        this.http = http; //de forma local se aran el ingreso.

        this.Pruebaurldetallevoucher = 'https://multikart-norte.herokuapp.com/voucher_details';
        this.PruebaUrlvoucher = 'https://multikart-norte.herokuapp.com/vouchers';
        this.PruebaUrlultvoucher = 'https://multikart-norte.herokuapp.com/vouchers/showlast';
        this.PruebaUrlVntMes = 'https://multikart-norte.herokuapp.com/show_date';
        this.PruebaUrlVentasTotal = 'https://multikart-norte.herokuapp.com/voucher_details/show_cantidad';
        this.PruebaUrlmespasado = 'https://multikart-norte.herokuapp.com/voucher_details/show_after_month';
        this.PruebaUrlproductosV = 'https://multikart-norte.herokuapp.com/voucher_details/producto_max_vend';
        this.PruebaUrltotalganacias = 'https://multikart-norte.herokuapp.com/voucher_details/las_ganancias_totales_meses';
        this.PruebaUrltotalganancias_FV = 'https://multikart-norte.herokuapp.com/vouchers/mostrar_ganancias_por_mes';
        this.PruebaUrlGuardarconfig = 'https://multikart-norte.herokuapp.com/config_vouchers';
        this.PruebaInformeXML = 'https://multikart-norte.herokuapp.com/archives';
        this.pruebaenvioxml = 'https://multikart-norte.herokuapp.com/archives/';
        this.prueba_perdidaxmes = 'https://multikart-norte.herokuapp.com/stocks/buscar_las_fechas_perdidas';
        this.prueba_inventarioperdida2 = 'https://multikart-norte.herokuapp.com/date_expirations/buscar_las_fechas_perdidas';
        this.todaslasperdidas = 'https://multikart-norte.herokuapp.com/date_expirations/todaslasperdidasdos';
        this.pruebatodaslasperdidasdinv1 = 'https://multikart-norte.herokuapp.com/stocks/todaslasperdiadasinvprim';
        this.pruebaquicksales = 'https://multikart-norte.herokuapp.com/quick_sales/ventarapida_fechas';
        this.totalventasrapidas = 'https://multikart-norte.herokuapp.com/quick_sales/totalventasrapidas';
        this.codeVoucher = 'https://multikart-norte.herokuapp.com/codes/no_mitidos';
        this.ultimoemitido = 'https://multikart-norte.herokuapp.com/codes/last_code';
      } // Ganancias totales del mes pasado.


      _createClass(VoucherService, [{
        key: "ganancia_mes_anterior",
        value: function ganancia_mes_anterior() {
          return this.http.get(this.PruebaUrlmespasado);
        } // Ganancias este mes

      }, {
        key: "cantidad_vendida",
        value: function cantidad_vendida() {
          return this.http.get(this.PruebaUrlVentasTotal);
        } // Lista de productos vendidos.

      }, {
        key: "p_vendidos",
        value: function p_vendidos() {
          return this.http.get(this.PruebaUrlproductosV);
        } // Productos de este mes

      }, {
        key: "vnts_mes",
        value: function vnts_mes() {
          return this.http.get(this.PruebaUrlVntMes);
        }
        /*crearvoucher(deta: DetalleVoucher){
          console.log(deta)
         this.verificar.verificarSaveVouchDetai().subscribe((res: respuesta) => {
           if (res.resultado != 'existe') { return; }
           if (res.resultado == 'existe') {
             console.log(res)
         return this.http.post<DetalleVoucher>(this.Pruebaurldetallevoucher, deta).subscribe(res => console.log(res));
        }
        })
        }
        */
        //  crearunvoucher(vouch: Voucher) {
        //  return  this.http.post<Voucher>(this.PruebaUrlvoucher, vouch);
        // }

      }, {
        key: "ultimovoucher",
        value: function ultimovoucher() {
          return this.http.get(this.PruebaUrlultvoucher);
        }
      }, {
        key: "mostratodo",
        value: function mostratodo() {
          return this.http.get(this.Pruebaurldetallevoucher);
        }
      }, {
        key: "mostrar_promise",
        value: function mostrar_promise() {
          return this.http.get(this.Pruebaurldetallevoucher).toPromise();
        }
      }, {
        key: "detalledeventa",
        value: function detalledeventa() {
          return this.http.get(this.Pruebaurldetallevoucher);
        }
      }, {
        key: "mostrarvoucher",
        value: function mostrarvoucher() {
          return this.http.get(this.PruebaUrlvoucher);
        } // Muesta todas las ganancias obtenidas asta ahora.

      }, {
        key: "muestra_todas_ganancias",
        value: function muestra_todas_ganancias() {
          return this.http.get(this.PruebaUrltotalganacias);
        } // Muesta el total de las ganancias este mes. CON LOS RESULTADOS Y EL MES.

      }, {
        key: "mostrar_ganancias_fv",
        value: function mostrar_ganancias_fv() {
          return this.http.get(this.PruebaUrltotalganancias_FV);
        } //Muestra las perdidas por mes.

      }, {
        key: "mostrar_perdidasXmes",
        value: function mostrar_perdidasXmes() {
          return this.http.get(this.prueba_perdidaxmes);
        }
      }, {
        key: "guardarcambios",
        value: function guardarcambios(d) {
          this.http.post(this.PruebaUrlGuardarconfig, d);
        } // Guardar el xml para enviarlo por email.

      }, {
        key: "PostANDSendXML",
        value: function PostANDSendXML(xml) {
          this.http.post(this.PruebaInformeXML, xml).subscribe(function (res) {
            console.log("envio", res);
          });
        } //Inventario 2 de perdidas.

      }, {
        key: "perdidas_inventario2",
        value: function perdidas_inventario2() {
          return this.http.get(this.prueba_inventarioperdida2);
        } //Muestra todas las perdidas

      }, {
        key: "todaslasperdiadsinventario2",
        value: function todaslasperdiadsinventario2() {
          return this.http.get(this.todaslasperdidas);
        } //Todas las perdidas del inventario primario.

      }, {
        key: "todaslasperdidasdinventario1",
        value: function todaslasperdidasdinventario1() {
          return this.http.get(this.pruebatodaslasperdidasdinv1);
        } //Todas las ventas rapidas

      }, {
        key: "ventasrapidas",
        value: function ventasrapidas() {
          return this.http.get(this.pruebaquicksales);
        } //Total de las ventas rapidas

      }, {
        key: "totalventasR",
        value: function totalventasR() {
          return this.http.get(this.totalventasrapidas);
        } //Busqueda del voucher emitidos

      }, {
        key: "buscaVoucherEmitido",
        value: function buscaVoucherEmitido() {
          return this.http.get(this.codeVoucher);
        } //encontrar los ultimos emitidos

      }, {
        key: "buscarultimosemitidos",
        value: function buscarultimosemitidos() {
          return this.http.get(this.ultimoemitido);
        }
      }]);

      return VoucherService;
    }();

    VoucherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function VoucherService_Factory() {
        return new VoucherService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      },
      token: VoucherService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/Service/websocket.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/Service/websocket.service.ts ***!
    \**********************************************/

  /*! exports provided: WebsocketService */

  /***/
  function srcAppServiceWebsocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsocketService", function () {
      return WebsocketService;
    });
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/build/esm/index.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WebsocketService = /*#__PURE__*/function () {
      function WebsocketService(cooki) {
        _classCallCheck(this, WebsocketService);

        this.cooki = cooki;
        this.outEvebt = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.Marcallback = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.io = socket_io_client__WEBPACK_IMPORTED_MODULE_0__["io"]('https://pruebasocketinject.herokuapp.com/', {
          withCredentials: false,
          autoConnect: true
        });
      }

      _createClass(WebsocketService, [{
        key: "emitir_unescucha",
        value: function emitir_unescucha() {
          this.io.emit('test');
        }
      }, {
        key: "emitodos",
        value: function emitodos() {
          var _this4 = this;

          this.io.on('test2', function (res) {
            console.log("emitiendo", res);
            _this4.databd = res;
          });
          return this.databd;
        }
      }]);

      return WebsocketService;
    }();

    WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function WebsocketService_Factory() {
        return new WebsocketService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]));
      },
      token: WebsocketService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_pages_pages_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/pages/pages.module */
    "./src/app/components/pages/pages.module.ts");

    var routes = [{
      path: '',
      component: _components_pages_pages_module__WEBPACK_IMPORTED_MODULE_1__["PagesModule"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.scss.shim.ngstyle */
    "./src/app/app.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 2, 0);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {
      cambiosP: "cambiosP"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.scss.shim.ngstyle.js":
  /*!****************************************************!*\
    !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
    \****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var devtools_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! devtools-detect */
    "./node_modules/devtools-detect/index.js");
    /* harmony import */


    var devtools_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devtools_detect__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(http) {
        _classCallCheck(this, AppComponent);

        this.http = http;
        this.cambiosP = true;
        this.title = 'paltanes';
      }
      /*intervalo(){
        const servio =this.categoria.mostrarcategorias().subscribe()
        const http = this.http
      setInterval(function() {
              http.get('https://multikart-norte.herokuapp.com/')
          console.log("hola", servio)
      }, 1000 * 60 * 20);
      
      }*/


      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // this.intervalo()
                    this.isloading = false; //document.onkeydown = function(){return false}
                    // document.oncontextmenu = function(){return false}
                    //await this.navegador_habierto()
                    //await window.addEventListener('devtoolschange', event => {
                    //console.log('Is DevTools open:', event.detail.isOpen);
                    //console.log('DevTools orientation:', event.detail.orientation);
                    //if(event.detail.isOpen == true)
                    //{
                    // window.location.href = "https://errorconsole.herokuapp.com/"
                    //}
                    //});
                    //this.analizar_token()

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } //Estara vacio las categorias?

      }, {
        key: "navegador_habierto",
        value: function navegador_habierto() {
          if (devtools_detect__WEBPACK_IMPORTED_MODULE_1__["isOpen"] == true) {
            window.location.href = "https://errorconsole.herokuapp.com/";
          }
        }
      }, {
        key: "navegador",
        value: function navegador() {
          if (window.navigator.appCodeName != "chrome") {}
        } //Muestra el contenido del token

      }, {
        key: "analizar_token",
        value: function analizar_token() {
          var tokentranformado = localStorage.getItem("ACCESS_TOKEN");
          var tranformartoken = tokentranformado.split('.')[1];
          var base64 = tranformartoken.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPlayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
        }
      }]);

      return AppComponent;
    }();
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _components_pages_panaderia_panaderia_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/pages/panaderia/panaderia.component.ngfactory */
    "./src/app/components/pages/panaderia/panaderia.component.ngfactory.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_service_windows_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/service/windows.service */
    "./src/app/shared/service/windows.service.ts");
    /* harmony import */


    var _shared_service_nav_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/service/nav.service */
    "./src/app/shared/service/nav.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng4-loading-spinner */
    "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
    /* harmony import */


    var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var _Service_hora_actual_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./Service/hora-actual.service */
    "./src/app/Service/hora-actual.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _components_pages_panaderia_panaderia_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/pages/panaderia/panaderia.component */
    "./src/app/components/pages/panaderia/panaderia.component.ts");
    /* harmony import */


    var _components_pages_pages_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/pages/pages.module */
    "./src/app/components/pages/pages.module.ts");
    /* harmony import */


    var _components_pages_pages_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/pages/pages-routing.module */
    "./src/app/components/pages/pages-routing.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ngx-ckeditor */
    "./node_modules/ngx-ckeditor/fesm2015/ngx-ckeditor.js");
    /* harmony import */


    var angularx_qrcode__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! angularx-qrcode */
    "./node_modules/angularx-qrcode/fesm2015/angularx-qrcode.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_print__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ngx-print */
    "./node_modules/ngx-print/fesm2015/ngx-print.js");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var ngx_barcode__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ngx-barcode */
    "./node_modules/ngx-barcode/index.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _components_pages_panaderia_panaderia_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["PanaderiaComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ɵsNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_11__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_12__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_12__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) {
        return [p0_0];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_service_windows_service__WEBPACK_IMPORTED_MODULE_14__["WindowRef"], _shared_service_windows_service__WEBPACK_IMPORTED_MODULE_14__["BrowserWindowRef"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _shared_service_windows_service__WEBPACK_IMPORTED_MODULE_14__["WINDOW"], _shared_service_windows_service__WEBPACK_IMPORTED_MODULE_14__["windowFactory"], [_shared_service_windows_service__WEBPACK_IMPORTED_MODULE_14__["WindowRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_service_nav_service__WEBPACK_IMPORTED_MODULE_15__["NavService"], _shared_service_nav_service__WEBPACK_IMPORTED_MODULE_15__["NavService"], [_shared_service_windows_service__WEBPACK_IMPORTED_MODULE_14__["WINDOW"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18__["Ng4LoadingSpinnerService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18__["Ng4LoadingSpinnerService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Service_hora_actual_service__WEBPACK_IMPORTED_MODULE_19__["HoraActualService"], _Service_hora_actual_service__WEBPACK_IMPORTED_MODULE_19__["HoraActualService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_21__["CookieService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_21__["CookieService"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], "serverApp", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵTRANSITION_ID"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_i"](p1_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_k"](p2_0, p2_1, p2_2)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵTRANSITION_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["APP_BASE_HREF"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () {
        return [[{
          path: "",
          component: _components_pages_panaderia_panaderia_component__WEBPACK_IMPORTED_MODULE_22__["PanaderiaComponent"]
        }], [{
          path: "",
          component: _components_pages_pages_module__WEBPACK_IMPORTED_MODULE_23__["PagesModule"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"], {
        scrollPositionRestoration: "enabled"
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_pages_pages_routing_module__WEBPACK_IMPORTED_MODULE_24__["PagesRoutingModule"], _components_pages_pages_routing_module__WEBPACK_IMPORTED_MODULE_24__["PagesRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_ckeditor__WEBPACK_IMPORTED_MODULE_27__["CKEditorModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_27__["CKEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angularx_qrcode__WEBPACK_IMPORTED_MODULE_28__["QRCodeModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_28__["QRCodeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18__["Ng4LoadingSpinnerModule"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18__["Ng4LoadingSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_spinner__WEBPACK_IMPORTED_MODULE_29__["NgxSpinnerModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_29__["NgxSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_print__WEBPACK_IMPORTED_MODULE_30__["NgxPrintModule"], ngx_print__WEBPACK_IMPORTED_MODULE_30__["NgxPrintModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_31__["InfiniteScrollModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_31__["InfiniteScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_barcode__WEBPACK_IMPORTED_MODULE_32__["NgxBarcodeModule"], ngx_barcode__WEBPACK_IMPORTED_MODULE_32__["NgxBarcodeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_pages_pages_module__WEBPACK_IMPORTED_MODULE_23__["PagesModule"], _components_pages_pages_module__WEBPACK_IMPORTED_MODULE_23__["PagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/components/Modulos/Pagos.ts":
  /*!*********************************************!*\
    !*** ./src/app/components/Modulos/Pagos.ts ***!
    \*********************************************/

  /*! exports provided: Pagos, PagoHecho, actualizarPago */

  /***/
  function srcAppComponentsModulosPagosTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pagos", function () {
      return Pagos;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagoHecho", function () {
      return PagoHecho;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "actualizarPago", function () {
      return actualizarPago;
    });

    var Pagos = function Pagos() {
      _classCallCheck(this, Pagos);
    };

    var PagoHecho = function PagoHecho() {
      _classCallCheck(this, PagoHecho);

      this.total = 0;
    };

    var actualizarPago = function actualizarPago() {
      _classCallCheck(this, actualizarPago);
    };
    /***/

  },

  /***/
  "./src/app/components/Modulos/respuesta.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/Modulos/respuesta.ts ***!
    \*************************************************/

  /*! exports provided: respuesta, guardado, stock_perdidos, ganancia_ateriores, proveedores_lista, resiviendo, resivendoMarca, dada */

  /***/
  function srcAppComponentsModulosRespuestaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "respuesta", function () {
      return respuesta;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "guardado", function () {
      return guardado;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stock_perdidos", function () {
      return stock_perdidos;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ganancia_ateriores", function () {
      return ganancia_ateriores;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "proveedores_lista", function () {
      return proveedores_lista;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "resiviendo", function () {
      return resiviendo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "resivendoMarca", function () {
      return resivendoMarca;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dada", function () {
      return dada;
    });

    var respuesta = function respuesta() {
      _classCallCheck(this, respuesta);

      this.resultado = '';
    };

    var guardado = function guardado() {
      _classCallCheck(this, guardado);

      this.guardado = '';
    };

    var stock_perdidos = function stock_perdidos() {
      _classCallCheck(this, stock_perdidos);

      this.stock_lost = 0;
    };

    var ganancia_ateriores = function ganancia_ateriores() {
      _classCallCheck(this, ganancia_ateriores);

      this.mes_anterior_es = 0;
    };

    var proveedores_lista = function proveedores_lista(nombre_provider) {
      _classCallCheck(this, proveedores_lista);

      this.nombre_provider = '';
      this.nombre_provider = nombre_provider;
    };

    var resiviendo = function resiviendo(id, cnombre, created_at) {
      _classCallCheck(this, resiviendo);

      this.id = id;
      this.cnombre = cnombre;
      this.created_at = created_at;
    };

    var resivendoMarca = function resivendoMarca(id, bnombre, created_at) {
      _classCallCheck(this, resivendoMarca);

      this.id = id;
      this.bnombre = bnombre;
      this.created_at = created_at;
    };

    var dada = function dada() {
      _classCallCheck(this, dada);
    };
    /***/

  },

  /***/
  "./src/app/components/pages/pages-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/pages/pages-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: PagesRoutingModule */

  /***/
  function srcAppComponentsPagesPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
      return PagesRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _panaderia_panaderia_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./panaderia/panaderia.component */
    "./src/app/components/pages/panaderia/panaderia.component.ts");

    var routes = [{
      path: '',
      component: _panaderia_panaderia_component__WEBPACK_IMPORTED_MODULE_1__["PanaderiaComponent"]
    }];

    var PagesRoutingModule = function PagesRoutingModule() {
      _classCallCheck(this, PagesRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/components/pages/pages.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/pages/pages.module.ts ***!
    \**************************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppComponentsPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });

    var PagesModule = function PagesModule() {
      _classCallCheck(this, PagesModule);
    };
    /***/

  },

  /***/
  "./src/app/components/pages/panaderia/panaderia.component.ngfactory.js":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/pages/panaderia/panaderia.component.ngfactory.js ***!
    \*****************************************************************************/

  /*! exports provided: RenderType_PanaderiaComponent, View_PanaderiaComponent_0, View_PanaderiaComponent_Host_0, PanaderiaComponentNgFactory */

  /***/
  function srcAppComponentsPagesPanaderiaPanaderiaComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_PanaderiaComponent", function () {
      return RenderType_PanaderiaComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PanaderiaComponent_0", function () {
      return View_PanaderiaComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PanaderiaComponent_Host_0", function () {
      return View_PanaderiaComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanaderiaComponentNgFactory", function () {
      return PanaderiaComponentNgFactory;
    });
    /* harmony import */


    var _panaderia_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./panaderia.component.scss.shim.ngstyle */
    "./src/app/components/pages/panaderia/panaderia.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _node_modules_ngx_barcode_ngx_barcode_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../node_modules/ngx-barcode/ngx-barcode.ngfactory */
    "./node_modules/ngx-barcode/ngx-barcode.ngfactory.js");
    /* harmony import */


    var ngx_barcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-barcode */
    "./node_modules/ngx-barcode/index.js");
    /* harmony import */


    var _shared_Pipe_busquedaprodutomarket_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/Pipe/busquedaprodutomarket.pipe */
    "./src/app/shared/Pipe/busquedaprodutomarket.pipe.ts");
    /* harmony import */


    var _panaderia_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./panaderia.component */
    "./src/app/components/pages/panaderia/panaderia.component.ts");
    /* harmony import */


    var _Service_categorias_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../Service/categorias.service */
    "./src/app/Service/categorias.service.ts");
    /* harmony import */


    var _Service_car_service_panaderia_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../Service/car-service-panaderia.service */
    "./src/app/Service/car-service-panaderia.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _Service_voucher_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../Service/voucher.service */
    "./src/app/Service/voucher.service.ts");
    /* harmony import */


    var _Service_ventas_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../Service/ventas.service */
    "./src/app/Service/ventas.service.ts");
    /* harmony import */


    var _Service_websocket_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../Service/websocket.service */
    "./src/app/Service/websocket.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_PanaderiaComponent = [_panaderia_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_PanaderiaComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_PanaderiaComponent,
      data: {}
    });

    function View_PanaderiaComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.cod_panaderia;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_PanaderiaComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["{{item.pvalor}"]))], null, null);
    }

    function View_PanaderiaComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.market;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_PanaderiaComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanaderiaComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanaderiaComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanaderiaComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.market == true;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.market == true;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.market == true;

        _ck(_v, 6, 0, currVal_2);
      }, null);
    }

    function View_PanaderiaComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", " ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.quantity;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.category.cnombre;
        var currVal_2 = _v.context.$implicit.pdescripcion;

        _ck(_v, 4, 0, currVal_1, currVal_2);

        var currVal_3 = _v.context.$implicit.pvalor;

        _ck(_v, 6, 0, currVal_3);
      });
    }

    function View_PanaderiaComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h5", [["class", "modal-title f-w-600"], ["id", "exampleModalLabel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lista de productos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _v.context.$implicit.dismiss("Cross click") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\xD7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 25, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 8, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "label", [["for", "buscarcboleta"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Buscar Voucher"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "input", [["class", "form-control"], ["id", "buscarboletaPana"], ["name", "buscarboleta"], ["placeholder", "Ingrese el C\xF3digo del voucher si se emitio en panaderia"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("click" === en) {
          var pd_4 = _co.busquedaPan() !== false;
          ad = pd_4 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_5 = (_co.buscarpanaderia = $event) !== false;
          ad = pd_5 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 15, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 14, "table", [["class", " table-bordered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["C\xF3digo del voucher"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Precio"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Origen"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 5, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_PanaderiaComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](29, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.guardarPanaderia(_co.buscarpanaderia) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Guardar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 31, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 30, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 18, "div", [["id", "tablaventa"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 11, "table", [["class", "table table-bordered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAN"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Nom"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Pres"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanaderiaComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 2, "div", [["class", "col text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "h2", [["class", "totalprice"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](53, null, ["Total: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 2, "div", [["class", "text-center bardcode "], ["id", "bardcode"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "ngx-barcode", [], null, null, null, _node_modules_ngx_barcode_ngx_barcode_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NgxBarcodeComponent_0"], _node_modules_ngx_barcode_ngx_barcode_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NgxBarcodeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 573440, null, 0, ngx_barcode__WEBPACK_IMPORTED_MODULE_5__["NgxBarcodeComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        displayValue: [0, "displayValue"],
        value: [1, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 6, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "button", [["class", "btn-info"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.guardarregistro() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["GUARDAR"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "button", [["class", "btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.imprimirvoleta("tablaventa", "totalprice", "bardcode") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["IMPRIMIR"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "button", [["class", "btn-secondary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _v.context.$implicit.dismiss("Cross click") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cerrar"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = "buscarboleta";
        var currVal_8 = _co.buscarpanaderia;

        _ck(_v, 13, 0, currVal_7, currVal_8);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 28, 0, _ck(_v, 29, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.consultarvoucher, _co.buscarpanaderia));

        _ck(_v, 28, 0, currVal_9);

        var currVal_17 = _co.items;

        _ck(_v, 50, 0, currVal_17);

        var currVal_19 = true;
        var currVal_20 = _co.codigobarra;

        _ck(_v, 56, 0, currVal_19, currVal_20);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending;

        _ck(_v, 10, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassUntouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassTouched;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPristine;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassDirty;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassValid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassInvalid;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPending;

        _ck(_v, 33, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);

        var currVal_18 = _co.totalPrice;

        _ck(_v, 53, 0, currVal_18);
      });
    }

    function View_PanaderiaComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_Pipe_busquedaprodutomarket_pipe__WEBPACK_IMPORTED_MODULE_6__["BusquedaprodutomarketPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["content", 2]], null, 0, null, View_PanaderiaComponent_1)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 27, "div", [["class", "container"], ["id", "contendor-inicial"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 26, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 25, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, ":svg:svg", [["version", "1.1"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, ":svg:defs", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, ":svg:filter", [["id", "gooey"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, ":svg:feGaussianBlur", [["in", "SourceGraphic"], ["result", "blur"], ["stdDeviation", "5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, ":svg:feColorMatrix", [["in", "blur"], ["result", "highContrastGraphic"], ["type", "matrix"], ["values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, ":svg:feComposite", [["in", "SourceGraphic"], ["in2", "highContrastGraphic"], ["operator", "atop"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 5, ":svg:svg", [["version", "1.1"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, ":svg:defs", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, ":svg:filter", [["id", "gooey"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, ":svg:feGaussianBlur", [["in", "SourceGraphic"], ["result", "blur"], ["stdDeviation", "5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, ":svg:feColorMatrix", [["in", "blur"], ["result", "highContrastGraphic"], ["type", "matrix"], ["values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, ":svg:feComposite", [["in", "SourceGraphic"], ["in2", "highContrastGraphic"], ["operator", "atop"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 12, "button", [["id", "gooey-button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.crecimiento() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" INICIAR "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 10, "span", [["class", "bubbles"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "span", [["class", "bubble"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "span", [["class", "bubble"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "span", [["class", "bubble"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "span", [["class", "bubble"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "span", [["class", "bubble"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "span", [["class", "bubble"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "span", [["class", "bubble"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "span", [["class", "bubble"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 0, "span", [["class", "bubble"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "span", [["class", "bubble"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 66, "div", [["class", "container-fluid  mx-0"], ["id", "contenedor"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 65, "form", [["class", " d-inline"], ["name", "calculater"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 0, "input", [["autocomplete", "off"], ["class", "form-control"], ["id", "visor"], ["name", "visor"], ["readonly", ""], ["type", "textfield"], ["value", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"], ["style", "width: 100%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block primeralinea"], ["onclick", "document.calculater.visor.value+='7'"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block primeralinea"], ["onclick", "document.calculater.visor.value+='8'"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["8"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block primeralinea"], ["onclick", "document.calculater.visor.value+='9'"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["9"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block simbolos"], ["onclick", "document.calculater.visor.value+='/'"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["/"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block primeralinea"], ["onclick", "document.calculater.visor.value+='4'"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["4"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block primeralinea"], ["onclick", "document.calculater.visor.value+='5'"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["5"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block primeralinea"], ["onclick", "document.calculater.visor.value+='6'"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["6"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block simbolos"], ["onclick", "document.calculater.visor.value+='*'"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block primeralinea"], ["onclick", "document.calculater.visor.value+='1'"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block primeralinea"], ["onclick", "document.calculater.visor.value+='2'"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block primeralinea"], ["onclick", "document.calculater.visor.value+='3'"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block simbolos"], ["onclick", "document.calculater.visor.value+='-'"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block primeralinea"], ["onclick", "document.calculater.visor.value+='0'"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block simbolos"], ["onclick", "document.calculater.visor.value=eval(document.calculater.visor.value)"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["="])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block simbolos"], ["onclick", "document.calculater.visor.value=''"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["C"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 2, "div", [["class", "col-xs col-3 mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block simbolos"], ["onclick", "document.calculater.visor.value+='+'"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["+"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 2, "div", [["class", "col mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block guardar_valor"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.guardarnumero(_co.Cnumero) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Guardar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 2, "div", [["class", "col mx-0 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 1, "button", [["class", "btn btn-lg btn-block buscar-valor"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.open(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ver&Buscar"]))], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPending;

        _ck(_v, 31, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    function View_PanaderiaComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-panaderia", [], null, null, null, View_PanaderiaComponent_0, RenderType_PanaderiaComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _panaderia_component__WEBPACK_IMPORTED_MODULE_7__["PanaderiaComponent"], [_Service_categorias_service__WEBPACK_IMPORTED_MODULE_8__["CategoriasService"], _Service_car_service_panaderia_service__WEBPACK_IMPORTED_MODULE_9__["CarServicePanaderiaService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"], _Service_voucher_service__WEBPACK_IMPORTED_MODULE_12__["VoucherService"], _Service_ventas_service__WEBPACK_IMPORTED_MODULE_13__["VentasService"], _Service_websocket_service__WEBPACK_IMPORTED_MODULE_14__["WebsocketService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var PanaderiaComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-panaderia", _panaderia_component__WEBPACK_IMPORTED_MODULE_7__["PanaderiaComponent"], View_PanaderiaComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/pages/panaderia/panaderia.component.scss.shim.ngstyle.js":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/pages/panaderia/panaderia.component.scss.shim.ngstyle.js ***!
    \*************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsPagesPanaderiaPanaderiaComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".fundo-mod[_ngcontent-%COMP%] {\n  background-color: #17a2b8;\n}\n\n.margem[_ngcontent-%COMP%] {\n  padding: 1%;\n  border-radius: 5px;\n}\n\n.mesmo-tamanho[_ngcontent-%COMP%] {\n  border-radius: 1px;\n}\n\n.display[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\n#visor[_ngcontent-%COMP%] {\n  font-family: \"Press Start 2P\", cursive;\n}\n\n#historico[_ngcontent-%COMP%] {\n  font-family: \"Press Start 2P\", cursive;\n}\n\n#titulo[_ngcontent-%COMP%] {\n  font-family: \"Lobster\", cursive;\n}\n\n.borda[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 9px black;\n  border-radius: 3px;\n  transition: border 0.2s ease-in-out;\n}\n\n.centro[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n@media screen and (max-width: 600px) {\n  .guardar_valor[_ngcontent-%COMP%] {\n    font-weight: bold;\n    background-color: #fcff62;\n    font-size: 5mm !important;\n  }\n\n  .buscar-valor[_ngcontent-%COMP%] {\n    font-weight: bold;\n    background-color: #ff6459f8;\n    font-size: 5mm !important;\n  }\n\n  #contenedor[_ngcontent-%COMP%] {\n    position: sticky;\n    border: solid chocolate;\n    background-color: #6c5ce7;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .primeralinea[_ngcontent-%COMP%], .primeralinea[_ngcontent-%COMP%]:hover, .primeralinea[_ngcontent-%COMP%]:active, .primeralinea[_ngcontent-%COMP%]:visited {\n    background-color: #4e95ff;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    height: 2.4cm;\n    text-align: center;\n    font-size: 1cm;\n    border-radius: 0%;\n    border: solid white !important;\n  }\n\n  .simbolos[_ngcontent-%COMP%] {\n    background-color: #ffac3e;\n  }\n\n  .btn-primary[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:active, .btn-primary[_ngcontent-%COMP%]:visited {\n    border: solid;\n    background-color: #8682ac !important;\n  }\n\n  #visor[_ngcontent-%COMP%] {\n    font-family: \"Press Start 2P\", cursive;\n    font-size: 1cm;\n    height: 2cm;\n    width: 100%;\n  }\n}\n\nsvg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4000px;\n  left: -4000px;\n}\n\n#gooey-button[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 2rem;\n  border: none;\n  color: #0c1016;\n  filter: url(\"#gooey\");\n  position: relative;\n  background-color: #00FF80;\n  margin-top: 50%;\n  margin-bottom: 50%;\n  margin-left: 50%;\n  margin-right: 50%;\n  display: flex;\n}\n\n#gooey-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n#gooey-button[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n#gooey-button[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  background-color: #00FF80;\n  border-radius: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  z-index: -1;\n}\n\n#gooey-button[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]:nth-child(1) {\n  left: 95px;\n  width: 25px;\n  height: 25px;\n  -webkit-animation: move-1 3.02s infinite;\n  animation: move-1 3.02s infinite;\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\n#gooey-button[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]:nth-child(2) {\n  left: 70px;\n  width: 25px;\n  height: 25px;\n  -webkit-animation: move-2 3.04s infinite;\n  animation: move-2 3.04s infinite;\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n#gooey-button[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]:nth-child(3) {\n  left: 99px;\n  width: 25px;\n  height: 25px;\n  -webkit-animation: move-3 3.06s infinite;\n  animation: move-3 3.06s infinite;\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n\n#gooey-button[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]:nth-child(4) {\n  left: 23px;\n  width: 25px;\n  height: 25px;\n  -webkit-animation: move-4 3.08s infinite;\n  animation: move-4 3.08s infinite;\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s;\n}\n\n#gooey-button[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]:nth-child(5) {\n  left: 85px;\n  width: 25px;\n  height: 25px;\n  -webkit-animation: move-5 3.1s infinite;\n  animation: move-5 3.1s infinite;\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n\n#gooey-button[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]:nth-child(6) {\n  left: 78px;\n  width: 25px;\n  height: 25px;\n  -webkit-animation: move-6 3.12s infinite;\n  animation: move-6 3.12s infinite;\n  -webkit-animation-delay: 1.2s;\n  animation-delay: 1.2s;\n}\n\n#gooey-button[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]:nth-child(7) {\n  left: 19px;\n  width: 25px;\n  height: 25px;\n  -webkit-animation: move-7 3.14s infinite;\n  animation: move-7 3.14s infinite;\n  -webkit-animation-delay: 1.4s;\n  animation-delay: 1.4s;\n}\n\n#gooey-button[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]:nth-child(8) {\n  left: 70px;\n  width: 25px;\n  height: 25px;\n  -webkit-animation: move-8 3.16s infinite;\n  animation: move-8 3.16s infinite;\n  -webkit-animation-delay: 1.6s;\n  animation-delay: 1.6s;\n}\n\n#gooey-button[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]:nth-child(9) {\n  left: 13px;\n  width: 25px;\n  height: 25px;\n  -webkit-animation: move-9 3.18s infinite;\n  animation: move-9 3.18s infinite;\n  -webkit-animation-delay: 1.8s;\n  animation-delay: 1.8s;\n}\n\n#gooey-button[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]:nth-child(10) {\n  left: 22px;\n  width: 25px;\n  height: 25px;\n  -webkit-animation: move-10 3.2s infinite;\n  animation: move-10 3.2s infinite;\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n\n@-webkit-keyframes move-1 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -94px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes move-1 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -94px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes move-2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -55px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes move-2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -55px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes move-3 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -115px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes move-3 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -115px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes move-4 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -61px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes move-4 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -61px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes move-5 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -106px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes move-5 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -106px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes move-6 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -74px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes move-6 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -74px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes move-7 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -59px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes move-7 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -59px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes move-8 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -114px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes move-8 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -114px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes move-9 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -124px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes move-9 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -124px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes move-10 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -80px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes move-10 {\n  0% {\n    transform: translate(0, 0);\n  }\n  99% {\n    transform: translate(0, -80px);\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 0;\n  }\n}\n\n.r-link[_ngcontent-%COMP%] {\n  display: var(--rLinkDisplay, inline-flex) !important;\n}\n\n.r-link[href][_ngcontent-%COMP%] {\n  color: var(--rLinkColor) !important;\n  -webkit-text-decoration: var(--rLinkTextDecoration, none) !important;\n          text-decoration: var(--rLinkTextDecoration, none) !important;\n}\n\n.r-list[_ngcontent-%COMP%] {\n  padding-left: var(--rListPaddingLeft, 0) !important;\n  margin-top: var(--rListMarginTop, 0) !important;\n  margin-bottom: var(--rListMarginBottom, 0) !important;\n  list-style: var(--rListListStyle, none) !important;\n}\n\n\n\n.menu[_ngcontent-%COMP%] {\n  --rLinkColor: var(--menuLinkColor, currentColor);\n}\n\n.menu__link[_ngcontent-%COMP%] {\n  display: var(--menuLinkDisplay, block);\n}\n\n\n\n.menu__link[_ngcontent-%COMP%]:focus {\n  outline: var(--menuLinkOutlineWidth, 2px) solid var(--menuLinkOutlineColor, currentColor);\n  outline-offset: var(--menuLinkOutlineOffset);\n}\n\n\n\n.menu[_ngcontent-%COMP%]:hover   .menu__link[_ngcontent-%COMP%]:not(:hover) {\n  --rLinkColor: var(--menuLinkColorUnactive, rgba(22, 22, 22, .35));\n}\n\n\n\n.menu[_ngcontent-%COMP%] {\n  background-color: var(--menuBackgroundColor, #f0f0f0);\n  box-shadow: var(--menuBoxShadow, 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24));\n}\n\n.menu__list[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.menu__link[_ngcontent-%COMP%] {\n  padding: var(--menuLinkPadding, 1.5rem 2.5rem);\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n\n\n.text-underlined[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  will-change: color;\n  transition: color 0.25s ease-out;\n}\n\n.text-underlined[_ngcontent-%COMP%]::before, .text-underlined[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 0;\n  height: 3px;\n  background-color: var(--textUnderlinedLineColor, currentColor);\n  will-change: width;\n  transition: width 0.1s ease-out;\n  position: absolute;\n  bottom: 0;\n}\n\n.text-underlined[_ngcontent-%COMP%]::before {\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.text-underlined[_ngcontent-%COMP%]::after {\n  right: 50%;\n  transform: translateX(50%);\n}\n\n.text-underlined[_ngcontent-%COMP%]:hover::before, .text-underlined[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n  transition-duration: 0.2s;\n}\n\n\n\n.page__custom-settings[_ngcontent-%COMP%] {\n  --menuBackgroundColor: #6c5ce7;\n  --menuLinkColor: #fff;\n  --menuLinkColorUnactive: #241c69;\n  --menuLinkOutlineOffset: -.5rem;\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;\n  margin: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.page[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  max-width: 640px;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  margin: auto;\n}\n\n.page__menu[_ngcontent-%COMP%]:nth-child(n+2) {\n  margin-top: 3rem;\n}\n\n.substack[_ngcontent-%COMP%] {\n  border: 1px solid #EEE;\n  background-color: #fff;\n  width: 100%;\n  max-width: 480px;\n  height: 280px;\n  margin: 1rem auto;\n}\n\n.linktr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 2rem;\n  text-align: center;\n}\n\n.linktr__goal[_ngcontent-%COMP%] {\n  background-color: #d1f6ff;\n  color: #083170;\n  box-shadow: rgba(8, 49, 112, 0.24) 0px 2px 8px 0px;\n  border-radius: 2rem;\n  padding: 0.75rem 1.5rem;\n}\n\n.r-link[_ngcontent-%COMP%] {\n  --uirLinkDisplay: var(--rLinkDisplay, inline-flex);\n  --uirLinkTextColor: var(--rLinkTextColor);\n  --uirLinkTextDecoration: var(--rLinkTextDecoration, none);\n  display: var(--uirLinkDisplay) !important;\n  color: var(--uirLinkTextColor) !important;\n  -webkit-text-decoration: var(--uirLinkTextDecoration) !important;\n          text-decoration: var(--uirLinkTextDecoration) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wYW5hZGVyaWEvQzpcXFVzZXJzXFxrdW96MlxccHJ1ZWJhZGVwcm95ZWN0by9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXHBhbmFkZXJpYVxccGFuYWRlcmlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL3BhbmFkZXJpYS9wYW5hZGVyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtBQ0FKOztBRElFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDREo7O0FESUU7RUFDRSxrQkFBQTtBQ0RKOztBREtBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FDRko7O0FESUE7RUFDRSxzQ0FBQTtBQ0RGOztBREdBO0VBQ0Usc0NBQUE7QUNBRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FEQ0E7RUFFRSwyQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUNBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUU7RUFDRTtJQUNFLGlCQUFBO0lBQ0EseUJBQUE7SUFDQSx5QkFBQTtFQ0dKOztFRERFO0lBQ0UsaUJBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0VDSUo7O0VEQUQ7SUFFQyxnQkFBQTtJQUNBLHVCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7RUNFQTs7RURBRjtJQUNFLHlCQUFBO0VDR0E7O0VEREY7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSw4QkFBQTtFQ0lBOztFREZGO0lBQ0UseUJBQUE7RUNLQTs7RUREQTtJQUNFLGFBQUE7SUFDQSxvQ0FBQTtFQ0lGOztFRERBO0lBQ0Usc0NBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUNJRjtBQUNGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQUY7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNHRjs7QUREQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ1EsZ0NBQUE7RUFDUiw2QkFBQTtFQUNRLHFCQUFBO0FDSVY7O0FERkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNRLGdDQUFBO0VBQ1IsNkJBQUE7RUFDUSxxQkFBQTtBQ0tWOztBREhBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDUSxnQ0FBQTtFQUNSLDZCQUFBO0VBQ1EscUJBQUE7QUNNVjs7QURKQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ1EsZ0NBQUE7RUFDUiw2QkFBQTtFQUNRLHFCQUFBO0FDT1Y7O0FETEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNRLCtCQUFBO0VBQ1IsMkJBQUE7RUFDUSxtQkFBQTtBQ1FWOztBRE5BO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDUSxnQ0FBQTtFQUNSLDZCQUFBO0VBQ1EscUJBQUE7QUNTVjs7QURQQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ1EsZ0NBQUE7RUFDUiw2QkFBQTtFQUNRLHFCQUFBO0FDVVY7O0FEUkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNRLGdDQUFBO0VBQ1IsNkJBQUE7RUFDUSxxQkFBQTtBQ1dWOztBRFRBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDUSxnQ0FBQTtFQUNSLDZCQUFBO0VBQ1EscUJBQUE7QUNZVjs7QURWQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ1EsZ0NBQUE7RUFDUiwyQkFBQTtFQUNRLG1CQUFBO0FDYVY7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDYUY7RURYQTtJQUNFLDhCQUFBO0VDYUY7RURYQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ2FGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLDhCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLDhCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLDhCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLCtCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLCtCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLDhCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLDhCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLCtCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLCtCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLDhCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLDhCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLDhCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLDhCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLCtCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLCtCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLCtCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLCtCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLDhCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDWUY7RURWQTtJQUNFLDhCQUFBO0VDWUY7RURWQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRSxvREFBQTtBQ1lGOztBRFRBO0VBQ0UsbUNBQUE7RUFDQSxvRUFBQTtVQUFBLDREQUFBO0FDWUY7O0FEVEE7RUFDRSxtREFBQTtFQUNBLCtDQUFBO0VBQ0EscURBQUE7RUFDQSxrREFBQTtBQ1lGOztBRFJBOzs7O0NBQUE7O0FBTUE7RUFDRSxnREFBQTtBQ1VGOztBRFBBO0VBQ0Usc0NBQUE7QUNVRjs7QURQQTs7Q0FBQTs7QUFJQTtFQUNFLHlGQUFBO0VBQ0EsNENBQUE7QUNTRjs7QUROQTs7Q0FBQTs7QUFJQTtFQUNFLGlFQUFBO0FDUUY7O0FETEE7Ozs7Q0FBQTs7QUFNQTtFQUNFLHFEQUFBO0VBQ0Esa0dBQUE7QUNPRjs7QURKQTtFQUNFLGFBQUE7QUNPRjs7QURKQTtFQUNFLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ09GOztBREpBOzs7O0NBQUE7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQ0FBQTtBQ0tGOztBREZBOztFQUVFLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDhEQUFBO0VBRUEsa0JBQUE7RUFDQSwrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtBQ0dGOztBREFBO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0FDR0Y7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7QUNHRjs7QURBQTs7RUFFRSxXQUFBO0VBQ0EseUJBQUE7QUNHRjs7QURBQTs7OztDQUFBOztBQU1BO0VBQ0UsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUNFRjs7QURDQTs7OztDQUFBOztBQU1BO0VBQ0UsMEhBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURHQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQUY7O0FER0E7RUFDSSxrREFBQTtFQUNBLHlDQUFBO0VBQ0EseURBQUE7RUFFQSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0VBQUE7VUFBQSx3REFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wYW5hZGVyaWEvcGFuYWRlcmlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLmZ1bmRvLW1vZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDE2MiwgMTg0KTtcclxuICAgICAgICBcclxuICB9XHJcblxyXG4gIC5tYXJnZW0ge1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBcclxuICB9XHJcbiAgLm1lc21vLXRhbWFuaG8ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5kaXNwbGF5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuI3Zpc29ye1xyXG4gIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xyXG59XHJcbiNoaXN0b3JpY297XHJcbiAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XHJcbn1cclxuI3RpdHVsb3tcclxuICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xyXG59XHJcbi5ib3JkYXtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDlweCBibGFjaztcclxuICBib3gtc2hhZG93OiAwIDNweCA5cHggYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyIC4ycyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2VudHJvIHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmd1YXJkYXJfdmFsb3J7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmZjYyO1xyXG4gICAgICBmb250LXNpemU6IDVtbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJ1c2Nhci12YWxvcntcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY0NTlmODtcclxuICAgICAgZm9udC1zaXplOiA1bW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgXHJcblxyXG4gI2NvbnRlbmVkb3J7XHJcblxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm9yZGVyOiBzb2xpZCBjaG9jb2xhdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNWNlNztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wcmltZXJhbGluZWEsIC5wcmltZXJhbGluZWE6aG92ZXIsIC5wcmltZXJhbGluZWE6YWN0aXZlLCAucHJpbWVyYWxpbmVhOnZpc2l0ZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlOTVmZjtcclxufVxyXG4uYnRue1xyXG4gIGhlaWdodDogMi40Y207XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMWNtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gIGJvcmRlcjogc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uc2ltYm9sb3N7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWMzZTtcclxufVxyXG4gICBcclxuXHJcbiAgLmJ0bi1wcmltYXJ5LCAuYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICAgIGJvcmRlcjogc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY4MmFjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gXHJcbiAgI3Zpc29ye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDFjbTtcclxuICAgIGhlaWdodDogMmNtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gXHJcbiBcclxuICBcclxuICB9XHJcblxyXG5zdmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC00MDAwcHg7XHJcbiAgbGVmdDogLTQwMDBweDtcclxufVxyXG5cclxuI2dvb2V5LWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMGMxMDE2O1xyXG4gIGZpbHRlcjogdXJsKFwiI2dvb2V5XCIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBGRjgwO1xyXG4gIG1hcmdpbi10b3A6IDUwJTtcclxuICBtYXJnaW4tYm90dG9tOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiNnb29leS1idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI2dvb2V5LWJ1dHRvbiAuYnViYmxlcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG4jZ29vZXktYnV0dG9uIC5idWJibGVzIC5idWJibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEZGODA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuI2dvb2V5LWJ1dHRvbiAuYnViYmxlcyAuYnViYmxlOm50aC1jaGlsZCgxKSB7XHJcbiAgbGVmdDogOTVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtMSAzLjAycyBpbmZpbml0ZTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS0xIDMuMDJzIGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG59XHJcbiNnb29leS1idXR0b24gLmJ1YmJsZXMgLmJ1YmJsZTpudGgtY2hpbGQoMikge1xyXG4gIGxlZnQ6IDcwcHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLTIgMy4wNHMgaW5maW5pdGU7XHJcbiAgICAgICAgICBhbmltYXRpb246IG1vdmUtMiAzLjA0cyBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxufVxyXG4jZ29vZXktYnV0dG9uIC5idWJibGVzIC5idWJibGU6bnRoLWNoaWxkKDMpIHtcclxuICBsZWZ0OiA5OXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS0zIDMuMDZzIGluZmluaXRlO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBtb3ZlLTMgMy4wNnMgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuI2dvb2V5LWJ1dHRvbiAuYnViYmxlcyAuYnViYmxlOm50aC1jaGlsZCg0KSB7XHJcbiAgbGVmdDogMjNweDtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtNCAzLjA4cyBpbmZpbml0ZTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS00IDMuMDhzIGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG59XHJcbiNnb29leS1idXR0b24gLmJ1YmJsZXMgLmJ1YmJsZTpudGgtY2hpbGQoNSkge1xyXG4gIGxlZnQ6IDg1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLTUgMy4xcyBpbmZpbml0ZTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS01IDMuMXMgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG4jZ29vZXktYnV0dG9uIC5idWJibGVzIC5idWJibGU6bnRoLWNoaWxkKDYpIHtcclxuICBsZWZ0OiA3OHB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS02IDMuMTJzIGluZmluaXRlO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBtb3ZlLTYgMy4xMnMgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbn1cclxuI2dvb2V5LWJ1dHRvbiAuYnViYmxlcyAuYnViYmxlOm50aC1jaGlsZCg3KSB7XHJcbiAgbGVmdDogMTlweDtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtNyAzLjE0cyBpbmZpbml0ZTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS03IDMuMTRzIGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjRzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjRzO1xyXG59XHJcbiNnb29leS1idXR0b24gLmJ1YmJsZXMgLmJ1YmJsZTpudGgtY2hpbGQoOCkge1xyXG4gIGxlZnQ6IDcwcHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLTggMy4xNnMgaW5maW5pdGU7XHJcbiAgICAgICAgICBhbmltYXRpb246IG1vdmUtOCAzLjE2cyBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS42cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS42cztcclxufVxyXG4jZ29vZXktYnV0dG9uIC5idWJibGVzIC5idWJibGU6bnRoLWNoaWxkKDkpIHtcclxuICBsZWZ0OiAxM3B4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS05IDMuMThzIGluZmluaXRlO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBtb3ZlLTkgMy4xOHMgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuOHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuOHM7XHJcbn1cclxuI2dvb2V5LWJ1dHRvbiAuYnViYmxlcyAuYnViYmxlOm50aC1jaGlsZCgxMCkge1xyXG4gIGxlZnQ6IDIycHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLTEwIDMuMnMgaW5maW5pdGU7XHJcbiAgICAgICAgICBhbmltYXRpb246IG1vdmUtMTAgMy4ycyBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS0xIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC05NHB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmUtMSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgfVxyXG4gIDk5JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtOTRweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS0yIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01NXB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZS0yIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01NXB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLTMge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gIH1cclxuICA5OSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTExNXB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZS0zIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMTVweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS00IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02MXB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZS00IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02MXB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLTUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gIH1cclxuICA5OSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwNnB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZS01IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMDZweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS02IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC03NHB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZS02IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC03NHB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLTcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gIH1cclxuICA5OSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTU5cHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBtb3ZlLTcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gIH1cclxuICA5OSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTU5cHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUtOCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgfVxyXG4gIDk5JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTE0cHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBtb3ZlLTgge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gIH1cclxuICA5OSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTExNHB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLTkge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gIH1cclxuICA5OSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEyNHB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZS05IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMjRweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS0xMCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgfVxyXG4gIDk5JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtODBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmUtMTAge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gIH1cclxuICA5OSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTgwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuLnItbGlua3tcclxuICBkaXNwbGF5OiB2YXIoLS1yTGlua0Rpc3BsYXksIGlubGluZS1mbGV4KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uci1saW5rW2hyZWZde1xyXG4gIGNvbG9yOiB2YXIoLS1yTGlua0NvbG9yKSAhaW1wb3J0YW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdmFyKC0tckxpbmtUZXh0RGVjb3JhdGlvbiwgbm9uZSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnItbGlzdHtcclxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXJMaXN0UGFkZGluZ0xlZnQsIDApICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogdmFyKC0tckxpc3RNYXJnaW5Ub3AsIDApICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tckxpc3RNYXJnaW5Cb3R0b20sIDApICFpbXBvcnRhbnQ7XHJcbiAgbGlzdC1zdHlsZTogdmFyKC0tckxpc3RMaXN0U3R5bGUsIG5vbmUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKlxyXG49PT09PVxyXG5DT1JFIFNUWUxFU1xyXG49PT09PVxyXG4qL1xyXG5cclxuLm1lbnV7XHJcbiAgLS1yTGlua0NvbG9yOiB2YXIoLS1tZW51TGlua0NvbG9yLCBjdXJyZW50Q29sb3IpO1xyXG59XHJcblxyXG4ubWVudV9fbGlua3tcclxuICBkaXNwbGF5OiB2YXIoLS1tZW51TGlua0Rpc3BsYXksIGJsb2NrKTtcclxufVxyXG5cclxuLyogXHJcbmZvY3VzIHN0YXRlIFxyXG4qL1xyXG5cclxuLm1lbnVfX2xpbms6Zm9jdXN7XHJcbiAgb3V0bGluZTogdmFyKC0tbWVudUxpbmtPdXRsaW5lV2lkdGgsIDJweCkgc29saWQgdmFyKC0tbWVudUxpbmtPdXRsaW5lQ29sb3IsIGN1cnJlbnRDb2xvcik7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IHZhcigtLW1lbnVMaW5rT3V0bGluZU9mZnNldCk7XHJcbn1cclxuXHJcbi8qIFxyXG5mYWRpbmcgc2libGluZ3NcclxuKi9cclxuXHJcbi5tZW51OmhvdmVyIC5tZW51X19saW5rOm5vdCg6aG92ZXIpe1xyXG4gIC0tckxpbmtDb2xvcjogdmFyKC0tbWVudUxpbmtDb2xvclVuYWN0aXZlLCByZ2JhKDIyLCAyMiwgMjIsIC4zNSkpO1xyXG59XHJcblxyXG4vKlxyXG49PT09PVxyXG5QUkVTRU5UQVRJT04gU1RZTEVTXHJcbj09PT09XHJcbiovXHJcblxyXG4ubWVudXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51QmFja2dyb3VuZENvbG9yLCAjZjBmMGYwKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1tZW51Qm94U2hhZG93LCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIC4xMiksIDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgLjI0KSk7XHJcbn1cclxuXHJcbi5tZW51X19saXN0e1xyXG4gIGRpc3BsYXk6IGZsZXg7ICBcclxufVxyXG5cclxuLm1lbnVfX2xpbmt7XHJcbiAgcGFkZGluZzogdmFyKC0tbWVudUxpbmtQYWRkaW5nLCAxLjVyZW0gMi41cmVtKTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi8qIFxyXG49PT09PVxyXG5URVhUIFVOREVSTElORURcclxuPT09PT1cclxuKi9cclxuXHJcbi50ZXh0LXVuZGVybGluZWR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIHdpbGwtY2hhbmdlOiBjb2xvcjtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAuMjVzIGVhc2Utb3V0OyAgXHJcbn1cclxuXHJcbi50ZXh0LXVuZGVybGluZWQ6OmJlZm9yZSwgXHJcbi50ZXh0LXVuZGVybGluZWQ6OmFmdGVye1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dFVuZGVybGluZWRMaW5lQ29sb3IsIGN1cnJlbnRDb2xvcik7XHJcblxyXG4gIHdpbGwtY2hhbmdlOiB3aWR0aDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAuMXMgZWFzZS1vdXQ7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi50ZXh0LXVuZGVybGluZWQ6OmJlZm9yZXtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyBcclxufVxyXG5cclxuLnRleHQtdW5kZXJsaW5lZDo6YWZ0ZXJ7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTsgXHJcbn1cclxuXHJcbi50ZXh0LXVuZGVybGluZWQ6aG92ZXI6OmJlZm9yZSwgXHJcbi50ZXh0LXVuZGVybGluZWQ6aG92ZXI6OmFmdGVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcclxufVxyXG5cclxuLypcclxuPT09PT1cclxuU0VUVElOR1NcclxuPT09PT1cclxuKi9cclxuXHJcbi5wYWdlX19jdXN0b20tc2V0dGluZ3N7XHJcbiAgLS1tZW51QmFja2dyb3VuZENvbG9yOiAjNmM1Y2U3O1xyXG4gIC0tbWVudUxpbmtDb2xvcjogI2ZmZjtcclxuICAtLW1lbnVMaW5rQ29sb3JVbmFjdGl2ZTogIzI0MWM2OTtcclxuICAtLW1lbnVMaW5rT3V0bGluZU9mZnNldDogLS41cmVtOyBcclxufVxyXG5cclxuLypcclxuPT09PT1cclxuREVNT1xyXG49PT09PVxyXG4qL1xyXG5cclxuYm9keXtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPcGVuIFNhbnMsIFVidW50dSwgRmlyYSBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDsgIFxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wYWdle1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWF4LXdpZHRoOiA2NDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IC43NXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAuNzVyZW07XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucGFnZV9fbWVudTpudGgtY2hpbGQobisyKXtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcblxyXG5cclxuLnN1YnN0YWNre1xyXG4gIGJvcmRlcjoxcHggc29saWQgI0VFRTsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gIGhlaWdodDogMjgwcHg7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87O1xyXG59XHJcblxyXG4ubGlua3Rye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmt0cl9fZ29hbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyNDYsIDI1NSk7XHJcbiAgY29sb3I6IHJnYig4LCA0OSwgMTEyKTtcclxuICBib3gtc2hhZG93OiByZ2IoOCA0OSAxMTIgLyAyNCUpIDBweCAycHggOHB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIHBhZGRpbmc6IC43NXJlbSAxLjVyZW07XHJcbn1cclxuXHJcbi5yLWxpbmt7XHJcbiAgICAtLXVpckxpbmtEaXNwbGF5OiB2YXIoLS1yTGlua0Rpc3BsYXksIGlubGluZS1mbGV4KTtcclxuICAgIC0tdWlyTGlua1RleHRDb2xvcjogdmFyKC0tckxpbmtUZXh0Q29sb3IpO1xyXG4gICAgLS11aXJMaW5rVGV4dERlY29yYXRpb246IHZhcigtLXJMaW5rVGV4dERlY29yYXRpb24sIG5vbmUpO1xyXG5cclxuICAgIGRpc3BsYXk6IHZhcigtLXVpckxpbmtEaXNwbGF5KSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLXVpckxpbmtUZXh0Q29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHZhcigtLXVpckxpbmtUZXh0RGVjb3JhdGlvbikgIWltcG9ydGFudDtcclxufSIsIi5mdW5kby1tb2Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xufVxuXG4ubWFyZ2VtIHtcbiAgcGFkZGluZzogMSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1lc21vLXRhbWFuaG8ge1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG59XG5cbi5kaXNwbGF5IHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbiN2aXNvciB7XG4gIGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmU7XG59XG5cbiNoaXN0b3JpY28ge1xuICBmb250LWZhbWlseTogXCJQcmVzcyBTdGFydCAyUFwiLCBjdXJzaXZlO1xufVxuXG4jdGl0dWxvIHtcbiAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBjdXJzaXZlO1xufVxuXG4uYm9yZGEge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDlweCBibGFjaztcbiAgYm94LXNoYWRvdzogMCAzcHggOXB4IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2VudHJvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmd1YXJkYXJfdmFsb3Ige1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZmNjI7XG4gICAgZm9udC1zaXplOiA1bW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idXNjYXItdmFsb3Ige1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY0NTlmODtcbiAgICBmb250LXNpemU6IDVtbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2NvbnRlbmVkb3Ige1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgYm9yZGVyOiBzb2xpZCBjaG9jb2xhdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZjNWNlNztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnByaW1lcmFsaW5lYSwgLnByaW1lcmFsaW5lYTpob3ZlciwgLnByaW1lcmFsaW5lYTphY3RpdmUsIC5wcmltZXJhbGluZWE6dmlzaXRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlOTVmZjtcbiAgfVxuXG4gIC5idG4ge1xuICAgIGhlaWdodDogMi40Y207XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMWNtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgIGJvcmRlcjogc29saWQgd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaW1ib2xvcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWMzZTtcbiAgfVxuXG4gIC5idG4tcHJpbWFyeSwgLmJ0bi1wcmltYXJ5OmhvdmVyLCAuYnRuLXByaW1hcnk6YWN0aXZlLCAuYnRuLXByaW1hcnk6dmlzaXRlZCB7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY4MmFjICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjdmlzb3Ige1xuICAgIGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAxY207XG4gICAgaGVpZ2h0OiAyY207XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNDAwMHB4O1xuICBsZWZ0OiAtNDAwMHB4O1xufVxuXG4jZ29vZXktYnV0dG9uIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMGMxMDE2O1xuICBmaWx0ZXI6IHVybChcIiNnb29leVwiKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBGRjgwO1xuICBtYXJnaW4tdG9wOiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNnb29leS1idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jZ29vZXktYnV0dG9uIC5idWJibGVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbiNnb29leS1idXR0b24gLmJ1YmJsZXMgLmJ1YmJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEZGODA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgei1pbmRleDogLTE7XG59XG5cbiNnb29leS1idXR0b24gLmJ1YmJsZXMgLmJ1YmJsZTpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA5NXB4O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS0xIDMuMDJzIGluZmluaXRlO1xuICBhbmltYXRpb246IG1vdmUtMSAzLjAycyBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cblxuI2dvb2V5LWJ1dHRvbiAuYnViYmxlcyAuYnViYmxlOm50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDcwcHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLTIgMy4wNHMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogbW92ZS0yIDMuMDRzIGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4jZ29vZXktYnV0dG9uIC5idWJibGVzIC5idWJibGU6bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogOTlweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtMyAzLjA2cyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlLTMgMy4wNnMgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbiNnb29leS1idXR0b24gLmJ1YmJsZXMgLmJ1YmJsZTpudGgtY2hpbGQoNCkge1xuICBsZWZ0OiAyM3B4O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS00IDMuMDhzIGluZmluaXRlO1xuICBhbmltYXRpb246IG1vdmUtNCAzLjA4cyBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcbn1cblxuI2dvb2V5LWJ1dHRvbiAuYnViYmxlcyAuYnViYmxlOm50aC1jaGlsZCg1KSB7XG4gIGxlZnQ6IDg1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLTUgMy4xcyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlLTUgMy4xcyBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4jZ29vZXktYnV0dG9uIC5idWJibGVzIC5idWJibGU6bnRoLWNoaWxkKDYpIHtcbiAgbGVmdDogNzhweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtNiAzLjEycyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlLTYgMy4xMnMgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xuICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XG59XG5cbiNnb29leS1idXR0b24gLmJ1YmJsZXMgLmJ1YmJsZTpudGgtY2hpbGQoNykge1xuICBsZWZ0OiAxOXB4O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS03IDMuMTRzIGluZmluaXRlO1xuICBhbmltYXRpb246IG1vdmUtNyAzLjE0cyBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuNHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMS40cztcbn1cblxuI2dvb2V5LWJ1dHRvbiAuYnViYmxlcyAuYnViYmxlOm50aC1jaGlsZCg4KSB7XG4gIGxlZnQ6IDcwcHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLTggMy4xNnMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogbW92ZS04IDMuMTZzIGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS42cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjZzO1xufVxuXG4jZ29vZXktYnV0dG9uIC5idWJibGVzIC5idWJibGU6bnRoLWNoaWxkKDkpIHtcbiAgbGVmdDogMTNweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtOSAzLjE4cyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlLTkgMy4xOHMgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjhzO1xuICBhbmltYXRpb24tZGVsYXk6IDEuOHM7XG59XG5cbiNnb29leS1idXR0b24gLmJ1YmJsZXMgLmJ1YmJsZTpudGgtY2hpbGQoMTApIHtcbiAgbGVmdDogMjJweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtMTAgMy4ycyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlLTEwIDMuMnMgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUtMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICA5OSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC05NHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmUtMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICA5OSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC05NHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS0yIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDk5JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTU1cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZS0yIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDk5JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTU1cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLTMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgOTklIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTE1cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZS0zIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDk5JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTExNXB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS00IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDk5JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTYxcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZS00IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDk5JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTYxcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLTUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgOTklIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTA2cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZS01IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDk5JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwNnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS02IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDk5JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTc0cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZS02IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDk5JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTc0cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLTcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgOTklIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTlweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlLTcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgOTklIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTlweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUtOCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICA5OSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMTRweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlLTgge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgOTklIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTE0cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLTkge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgOTklIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTI0cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZS05IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDk5JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEyNHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS0xMCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICA5OSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC04MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmUtMTAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgOTklIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtODBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLnItbGluayB7XG4gIGRpc3BsYXk6IHZhcigtLXJMaW5rRGlzcGxheSwgaW5saW5lLWZsZXgpICFpbXBvcnRhbnQ7XG59XG5cbi5yLWxpbmtbaHJlZl0ge1xuICBjb2xvcjogdmFyKC0tckxpbmtDb2xvcikgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB2YXIoLS1yTGlua1RleHREZWNvcmF0aW9uLCBub25lKSAhaW1wb3J0YW50O1xufVxuXG4uci1saXN0IHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1yTGlzdFBhZGRpbmdMZWZ0LCAwKSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiB2YXIoLS1yTGlzdE1hcmdpblRvcCwgMCkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tckxpc3RNYXJnaW5Cb3R0b20sIDApICFpbXBvcnRhbnQ7XG4gIGxpc3Qtc3R5bGU6IHZhcigtLXJMaXN0TGlzdFN0eWxlLCBub25lKSAhaW1wb3J0YW50O1xufVxuXG4vKlxuPT09PT1cbkNPUkUgU1RZTEVTXG49PT09PVxuKi9cbi5tZW51IHtcbiAgLS1yTGlua0NvbG9yOiB2YXIoLS1tZW51TGlua0NvbG9yLCBjdXJyZW50Q29sb3IpO1xufVxuXG4ubWVudV9fbGluayB7XG4gIGRpc3BsYXk6IHZhcigtLW1lbnVMaW5rRGlzcGxheSwgYmxvY2spO1xufVxuXG4vKiBcbmZvY3VzIHN0YXRlIFxuKi9cbi5tZW51X19saW5rOmZvY3VzIHtcbiAgb3V0bGluZTogdmFyKC0tbWVudUxpbmtPdXRsaW5lV2lkdGgsIDJweCkgc29saWQgdmFyKC0tbWVudUxpbmtPdXRsaW5lQ29sb3IsIGN1cnJlbnRDb2xvcik7XG4gIG91dGxpbmUtb2Zmc2V0OiB2YXIoLS1tZW51TGlua091dGxpbmVPZmZzZXQpO1xufVxuXG4vKiBcbmZhZGluZyBzaWJsaW5nc1xuKi9cbi5tZW51OmhvdmVyIC5tZW51X19saW5rOm5vdCg6aG92ZXIpIHtcbiAgLS1yTGlua0NvbG9yOiB2YXIoLS1tZW51TGlua0NvbG9yVW5hY3RpdmUsIHJnYmEoMjIsIDIyLCAyMiwgLjM1KSk7XG59XG5cbi8qXG49PT09PVxuUFJFU0VOVEFUSU9OIFNUWUxFU1xuPT09PT1cbiovXG4ubWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnVCYWNrZ3JvdW5kQ29sb3IsICNmMGYwZjApO1xuICBib3gtc2hhZG93OiB2YXIoLS1tZW51Qm94U2hhZG93LCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpKTtcbn1cblxuLm1lbnVfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWVudV9fbGluayB7XG4gIHBhZGRpbmc6IHZhcigtLW1lbnVMaW5rUGFkZGluZywgMS41cmVtIDIuNXJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qIFxuPT09PT1cblRFWFQgVU5ERVJMSU5FRFxuPT09PT1cbiovXG4udGV4dC11bmRlcmxpbmVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWxsLWNoYW5nZTogY29sb3I7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2Utb3V0O1xufVxuXG4udGV4dC11bmRlcmxpbmVkOjpiZWZvcmUsXG4udGV4dC11bmRlcmxpbmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dFVuZGVybGluZWRMaW5lQ29sb3IsIGN1cnJlbnRDb2xvcik7XG4gIHdpbGwtY2hhbmdlOiB3aWR0aDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4xcyBlYXNlLW91dDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5cbi50ZXh0LXVuZGVybGluZWQ6OmJlZm9yZSB7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4udGV4dC11bmRlcmxpbmVkOjphZnRlciB7XG4gIHJpZ2h0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xufVxuXG4udGV4dC11bmRlcmxpbmVkOmhvdmVyOjpiZWZvcmUsXG4udGV4dC11bmRlcmxpbmVkOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuXG4vKlxuPT09PT1cblNFVFRJTkdTXG49PT09PVxuKi9cbi5wYWdlX19jdXN0b20tc2V0dGluZ3Mge1xuICAtLW1lbnVCYWNrZ3JvdW5kQ29sb3I6ICM2YzVjZTc7XG4gIC0tbWVudUxpbmtDb2xvcjogI2ZmZjtcbiAgLS1tZW51TGlua0NvbG9yVW5hY3RpdmU6ICMyNDFjNjk7XG4gIC0tbWVudUxpbmtPdXRsaW5lT2Zmc2V0OiAtLjVyZW07XG59XG5cbi8qXG49PT09PVxuREVNT1xuPT09PT1cbiovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3BlbiBTYW5zLCBVYnVudHUsIEZpcmEgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wYWdlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5wYWdlX19tZW51Om50aC1jaGlsZChuKzIpIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cblxuLnN1YnN0YWNrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0VFRTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIGhlaWdodDogMjgwcHg7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xufVxuXG4ubGlua3RyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGlua3RyX19nb2FsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZjZmZjtcbiAgY29sb3I6ICMwODMxNzA7XG4gIGJveC1zaGFkb3c6IHJnYmEoOCwgNDksIDExMiwgMC4yNCkgMHB4IDJweCA4cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbn1cblxuLnItbGluayB7XG4gIC0tdWlyTGlua0Rpc3BsYXk6IHZhcigtLXJMaW5rRGlzcGxheSwgaW5saW5lLWZsZXgpO1xuICAtLXVpckxpbmtUZXh0Q29sb3I6IHZhcigtLXJMaW5rVGV4dENvbG9yKTtcbiAgLS11aXJMaW5rVGV4dERlY29yYXRpb246IHZhcigtLXJMaW5rVGV4dERlY29yYXRpb24sIG5vbmUpO1xuICBkaXNwbGF5OiB2YXIoLS11aXJMaW5rRGlzcGxheSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLXVpckxpbmtUZXh0Q29sb3IpICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdmFyKC0tdWlyTGlua1RleHREZWNvcmF0aW9uKSAhaW1wb3J0YW50O1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/components/pages/panaderia/panaderia.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/pages/panaderia/panaderia.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PanaderiaComponent */

  /***/
  function srcAppComponentsPagesPanaderiaPanaderiaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanaderiaComponent", function () {
      return PanaderiaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Service_car_service_panaderia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../Service/car-service-panaderia.service */
    "./src/app/Service/car-service-panaderia.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/categorias.service */
    "./src/app/Service/categorias.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_Service_voucher_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/Service/voucher.service */
    "./src/app/Service/voucher.service.ts");
    /* harmony import */


    var src_app_Service_ventas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/Service/ventas.service */
    "./src/app/Service/ventas.service.ts");
    /* harmony import */


    var src_app_Service_websocket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/Service/websocket.service */
    "./src/app/Service/websocket.service.ts");

    var PanaderiaComponent = /*#__PURE__*/function () {
      function PanaderiaComponent(categori, // private productos: ProductserviceService,
      carservice, //esto debe ser cambiado mas adelante y crear uno independiente.
      cd, modalService, spinner, consultarcode, code_consu, wwbsocket) {
        _classCallCheck(this, PanaderiaComponent);

        this.categori = categori;
        this.carservice = carservice;
        this.cd = cd;
        this.modalService = modalService;
        this.spinner = spinner;
        this.consultarcode = consultarcode;
        this.code_consu = code_consu;
        this.wwbsocket = wwbsocket;
        this.UnCodExiste = [];
        this.nuevosItems = [];
        this.n7 = "7";
        this.n8 = "8";
        this.n9 = "9";
        this.ndiv = "/";
        this.n4 = "4";
        this.n5 = "5";
        this.n6 = "6";
        this.npor = "*";
        this.n1 = "1";
        this.n2 = "2";
        this.n3 = "3";
        this.nrest = "-";
        this.n0 = "0";
        this.nigual = "=";
        this.nC = "C";
        this.nmas = "+";
        this.valorVisor = 0;
        this.semantieneoculto = true;
        this.total = 0;
        this.ultimoTotal = 0;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.codigobarra = 0;
        this.buscarmarket = "";
        this.totalQuantity = 0;
        this.totalPrice = 0;
      }

      _createClass(PanaderiaComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          document.getElementById('contenedor').hidden = true; // this.buscarvoucheremitido()

          this.spinner.show('spinnerdashcategori');
          this.obtenerCategorias();
          this.consultarvoucher = this.code_consu.recuperaremitido();
          this.consultar(); //this.obtenerproductos()

          this.carservice.currentDataCart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$)).subscribe(function (x) {
            if (x) {
              console.log("cantidad ", x);
              _this5.items = x;
              _this5.totalQuantity = x.length;
              _this5.totalPrice = x.reduce(function (sum, current) {
                return sum + (current.pvalor || current.product.pvalor) * current.quantity;
              }, 0);

              _this5.cd.markForCheck();
            }
          });
        }
      }, {
        key: "crecimiento",
        value: function crecimiento() {
          document.getElementById('contenedor').hidden = true;
          document.getElementById('contendor-inicial').hidden = true;
          var elemento = document.getElementById('contenedor');
          this.agrandar(elemento);
        }
      }, {
        key: "agrandar",
        value: function agrandar(elemento) {
          document.getElementById('contenedor').hidden = false;
          document.getElementById('gooey-button').hidden = true;
        }
      }, {
        key: "open",
        value: function open(content) {
          var _this6 = this;

          console.log('return en el open', this.consultar());
          this.consultar();

          if (this.consultar() === undefined) {
            this.buscarvoucheremitido();
          }

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'xl '
          }).result.then(function (result) {
            _this6.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this6.closeResult = "Dismissed ".concat(_this6.getDismissReason(reason));
          });
        }
      }, {
        key: "boxClick",
        value: function boxClick(a, b) {
          var precionado = window.document.getElementById('checatecogira' + b);
          var inpudisable = window.document.getElementById('fproducto');
          console.log("valor box", precionado.value);
          this.elemento_click = a;
          console.log("numero", this.elemento_click);
          return this.elemento_click;
        }
      }, {
        key: "desabilitiar",
        value: function desabilitiar(i) {
          var precionado = window.document.getElementById('checatecogira' + i);

          if (precionado.checked) {
            precionado.checked = false;
          }

          this.elemento_click = "";
          console.log(precionado.value);
          return;
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        } //obtenerproductos(){
        //return this.productos.products().subscribe(res =>{   this.producto = res; console.log("productos", this.producto)})
        //}

      }, {
        key: "obtenerCategorias",
        value: function obtenerCategorias() {
          var _this7 = this;

          this.categori.mostrarcategorias().subscribe(function (res) {
            _this7.categorias = res;

            _this7.spinner.hide('spinnerdashcategori');
          });
        }
      }, {
        key: "buscarvoucheremitido",
        value: function buscarvoucheremitido() {
          var _this8 = this;

          return this.consultarcode.buscaVoucherEmitido().subscribe(function (res) {
            _this8.consultarvoucher = res;
          });
        }
      }, {
        key: "verificar_si",
        value: function verificar_si(a) {
          console.log("cambiar el vengo de", a);

          for (var i in a) {
            if (!a[i].vengo_de) {
              return Object.assign(a, {
                vengo_de: 'si'
              });
            }
          }
        }
      }, {
        key: "keynoexiste",
        value: function keynoexiste(a) {}
      }, {
        key: "guardarregistro",
        value: function guardarregistro() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this9 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log("se guardan", this.items);
                    this.consultarcode.buscarultimosemitidos().subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var nuevoregistro, i, code, h, zfill, _code;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                res ? null : res = {
                                  id: 0
                                };
                                this.codigovoucher = res;
                                nuevoregistro = [];
                                console.log(this.verificar_si(this.items));
                                _context3.next = 6;
                                return nuevoregistro.push(this.verificar_si(this.items));

                              case 6:
                                console.log('nuevosd registros', nuevoregistro[0]);

                                if (!(this.nuevosItems.length != 0)) {
                                  _context3.next = 29;
                                  break;
                                }

                                _context3.t0 = regeneratorRuntime.keys(this.nuevosItems);

                              case 9:
                                if ((_context3.t1 = _context3.t0()).done) {
                                  _context3.next = 29;
                                  break;
                                }

                                i = _context3.t1.value;

                                if (!this.nuevosItems[i].product) {
                                  Object.assign(this.nuevosItems[i], {
                                    product: {
                                      id: this.nuevosItems[i].id
                                    }
                                  });
                                  console.log("agregandi", this.nuevosItems[i]);
                                }

                                code = {
                                  hora_emision: '3',
                                  market: this.nuevosItems[i].market,
                                  panaderia: this.nuevosItems[i].market,
                                  //product_id: this.nuevosItems[i].product.id ,
                                  pcodigo: this.nuevosItems[i].pcodigo,
                                  cod_market: this.nuevosItems[i].cod_market,
                                  cod_panaderia: this.nuevosItems[i].cod_market,
                                  pvalor: this.nuevosItems[i].pvalor
                                };

                                if (!(this.nuevosItems[i].id !== 1)) {
                                  _context3.next = 21;
                                  break;
                                }

                                console.log('entro en el valor que no es igual a 0', code);
                                Object.assign(code, {
                                  id: this.nuevosItems[i].id
                                });
                                this.code_consu.actualizar_voucher(code, this.nuevosItems[i].id);
                                _context3.next = 19;
                                return this.apretar();

                              case 19:
                                _context3.next = 27;
                                break;

                              case 21:
                                console.log('entro si el valor es 0', code);
                                code.market = true;
                                code.panaderia = true;
                                this.code_consu.consultar_code(code);
                                _context3.next = 27;
                                return this.apretar();

                              case 27:
                                _context3.next = 9;
                                break;

                              case 29:
                                /*for(const d in this.items){
                                  Object.assign(nuevoregistro[0][d], {cod_panaderia: this.codigovoucher.id})
                                    if(this.items[d].market  == true && this.items[d].panaderia == false && this.items[d].cod_market == this.items[d].cod_panaderia ){
                                      console.log("items 1", nuevoregistro[0][d])
                                        const code ={hora_emision: '3',
                                          market: nuevoregistro[0][d].market,
                                          panaderia: nuevoregistro[0][d].market,
                                          product_id: nuevoregistro[0][d].product.id,
                                          cod_market: nuevoregistro[0][d].cod_market,
                                          cod_panaderia: nuevoregistro[0][d].cod_market,
                                          pvalor: nuevoregistro[0][d].pvalor
                                        }
                                        console.log("Registro a guardar", code)
                                          this.code_consu.consultar_code(code)
                                          
                                    }
                                  }*/
                                console.log("items vacios", this.nuevosItems);

                                if (!(this.nuevosItems.length === 0)) {
                                  _context3.next = 49;
                                  break;
                                }

                                _context3.t2 = regeneratorRuntime.keys(nuevoregistro[0]);

                              case 32:
                                if ((_context3.t3 = _context3.t2()).done) {
                                  _context3.next = 49;
                                  break;
                                }

                                h = _context3.t3.value;
                                console.log("antes de for", nuevoregistro[0][h]);
                                Object.assign(nuevoregistro[0][h], {
                                  cod_panaderia: this.codigovoucher.id
                                });

                                if (!(nuevoregistro[0][h].panaderia == true && nuevoregistro[0][h].market == false && nuevoregistro[0][h].cod_market == 0 && nuevoregistro[0][h].vengo_de == undefined)) {
                                  _context3.next = 47;
                                  break;
                                }

                                zfill = function zfill(number, width) {
                                  var numberOutput = Math.abs(number);
                                  /* Valor absoluto del número */

                                  var length = number.toString().length;
                                  /* Largo del número */

                                  var zero = "0";
                                  /* String de cero */

                                  if (width <= length) {
                                    if (number < 0) {
                                      return "-" + numberOutput.toString();
                                    } else {
                                      return numberOutput.toString();
                                    }
                                  } else {
                                    if (number < 0) {
                                      return "-" + zero.repeat(width - length) + numberOutput.toString();
                                    } else {
                                      return zero.repeat(width - length) + numberOutput.toString();
                                    }
                                  }
                                };

                                this.codigobarra = this.codigovoucher.id;
                                _code = {
                                  hora_emision: '3',
                                  panaderia: nuevoregistro[0][h].panaderia,
                                  market: nuevoregistro[0][h].market,
                                  //product_id: nuevoregistro[0][h].id,
                                  pcodigo: nuevoregistro[0][h].pcodigo,
                                  cod_market: 0,
                                  cod_panaderia: nuevoregistro[0][h].cod_panaderia,
                                  pvalor: nuevoregistro[0][h].pvalor
                                };
                                console.log('se esta guardando para imprimr el primer voucher', _code);
                                this.code_consu.consultar_code(_code);
                                this.nCode = zfill(this.codigobarra, 13);
                                _context3.next = 45;
                                return this.apretar();

                              case 45:
                                _context3.next = 47;
                                return this.imprimirVoucherMiniMarket(this.nCode);

                              case 47:
                                _context3.next = 32;
                                break;

                              case 49:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });
                    /*if(i.cod_panaderia != 0){
                      var code ={hora_emision: '3',
                      panaderia: true,
                      market:true,
                      product_id: i.id,
                      cod_market: i.cod_panaderia,
                      cod_panaderia: i.cod_panaderia,
                      
                    }*/
                    // return this.code_consu.consultar_code(code)

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "imprimirVoucherMiniMarket",
        value: function imprimirVoucherMiniMarket(nCode) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this10 = this;

            var system, data, align, position, font, height;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    system = 4;
                    /* Barcode system, defined as "m" at https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=128 */

                    data = nCode;
                    /* Barcode data, according to barcode system */

                    console.log("info de la data", data);
                    align = 1;
                    /* 0, 1, 2 */

                    position = 2;
                    /* Text position: https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=125 */

                    font = 0;
                    /* Font for HRI characters: https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=126 */

                    height = 50;
                    /* Set barcode height: https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=127*/

                    /*
                    BTPrinter.connect(function(data){
                        console.log("Success");
                        console.log(data)
                      },function(err){
                        console.log("Error");
                        console.log(err)
                      }, "IposPrinter");
                    BTPrinter.printBarcode(function(data){
                    console.log("Success");
                    console.log(data);
                    },function(err){
                    console.log("Error");
                    console.log(err);
                    }, system, data, align, position, font, height);
                    BTPrinter.printTextSizeAlign(function(data){
                                          console.log("Success");
                                          console.log(data)
                                      },function(err){
                                          console.log("Error");
                                          console.log(err)
                                      }, "String to Print",'0','0')//string, size, align
                    BTPrinter.disconnect(function(data){
                    console.log("Success");
                    console.log(data)
                    },function(err){
                    console.log("Error");
                    console.log(err)
                    }, "IposPrinter");
                    */

                    _context5.next = 9;
                    return this.items.forEach(function (res) {
                      Object.assign(res, {
                        id: +1
                      });
                      console.log(res);

                      _this10.carservice.removeElementCart(res);
                    });

                  case 9:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "verificar_codmarket",
        value: function verificar_codmarket(a) {
          for (var i in a) {
            if (a[i].cod_market != 0) {
              this.UnCodExiste.push(a[i].cod_market);
            }

            console.log("arreglo", this.UnCodExiste);
          }

          for (var u in a) {
            if (a[u].cod_market == 0) {
              a[u].cod_market = this.UnCodExiste[0];
              Object.assign(a[u], {
                cod_panaderia: this.UnCodExiste[0]
              });
            }
          }

          return a;
        }
      }, {
        key: "guardarPanaderia",
        value: function guardarPanaderia(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this11 = this;

            var _iterator, _step, i;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    //Lee si hay un pago realizado en la panaderia y rellena la tabla
                    console.log("items ya en entrantes en panaderia", this.consultarvoucher);
                    _iterator = _createForOfIteratorHelper(this.consultarvoucher);

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        i = _step.value;

                        if (i.cod_market == a && i.market == true && i.pcodigo == "1111" && i.voucher_vendido == false) {
                          console.log("primera decision", i.cod_market);
                          Object.assign(i, {
                            cod_market: i.cod_market
                          });
                          Object.assign(i, {
                            vengo_de: 'si'
                          });
                          this.mandarcarro(i, i.cod_panaderia, i.market);
                        }

                        if (i.cod_market == a && i.market == true && i.pcodigo != "1111" && i.voucher_vendido == false) {
                          console.log("segund decision", i.cod_market);
                          Object.assign(i, {
                            cod_market: i.cod_market
                          });
                          Object.assign(i, {
                            vengo_de: 'si'
                          });
                          this.mandarcarro(i.product, i.cod_panaderia, i.market);
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                    _context6.next = 5;
                    return this.verificar_codmarket(this.items);

                  case 5:
                    this.items.forEach(function (resp) {
                      _this11.nuevosItems.push(resp);
                    });
                    console.log("nuevos items subidos", this.nuevosItems);
                    return _context6.abrupt("return", this.items);

                  case 8:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "mandarcarro",
        value: function mandarcarro(product, _b, market) {
          //manda los productos del voucher.
          console.log('productos desde el minimarket a la panaderia', product);

          if (product.quantity === undefined) {
            Object.assign(product, {
              quantity: 1
            });
          }

          if (product.category == undefined) {
            Object.assign(product, {
              category: {
                cnombnre: 'sin categoria'
              }
            });
          }

          if (market !== undefined && market === true) {
            Object.assign(product, {
              market: market
            });
          } else {
            Object.assign(product, {
              market: false
            });
            Object.assign(product, {
              panaderia: true
            });
          }

          delete product.sinventario;
          delete product.sinventario2;
          console.log("cantidad ", product); //Object.assign(product, {cod_market:})

          if (product.pcodigo || product.product.pcodigo) {
            Object.assign(product, {
              sinventario: true
            });
          } else {
            Object.assign(product, {
              sinventario2: false
            });
          }

          console.log(product);
          var data = product;
          var elemento = {
            quantity: 1
          };

          if (data.quantity >= elemento.quantity) {
            this.carservice.changeCart(data);
          } else {
            var cambio = Object.assign(product, elemento);
            this.carservice.changeCart(cambio);
          }
        }
      }, {
        key: "mandarcarro_primeraforma",
        value: function mandarcarro_primeraforma(product, _b, market) {
          var vouchercodigo;
          console.log("items en vandeja", this.items);
          Object.assign(product, {
            cod_market: 0
          });

          if (product.quantity == undefined) {
            Object.assign(product, {
              quantity: 1
            });
          }

          if (product.category == undefined) {
            Object.assign(product, {
              category: {
                cnombnre: 'sin categoria'
              }
            });
          }

          if (market != undefined && market == true) {
            Object.assign(product, {
              market: market
            });
          } else {
            Object.assign(product, {
              market: false
            });
            Object.assign(product, {
              panaderia: true
            });
          }

          delete product.sinventario;
          delete product.sinventario2;
          console.log("cantidad ", product); //Object.assign(product, {cod_market:})

          if (product.pcodigo || product.product.pcodigo) {
            Object.assign(product, {
              sinventario: true
            });
          } else {
            Object.assign(product, {
              sinventario2: false
            });
          }

          console.log(product);
          var data = product;
          var elemento = {
            quantity: 1
          };

          if (data.quantity >= elemento.quantity) {
            this.carservice.changeCart(data);
          } else {
            var cambio = Object.assign(product, elemento);
            this.carservice.changeCart(cambio);
          }
        }
      }, {
        key: "imprimirvoleta",
        value: function imprimirvoleta(tabla, totalprice, bardcode) {
          var data = '<head>' + '<style type="text/css">' + '@page {  size: 58mm 100mm;' + 'height: 58mm;' + 'width: 100mm; ' + 'margin: 0;}' + 'h2{   font-size: 28px;\n position: center;\n }' + 'td,\n' + 'th,\n' + 'tr,\n' + 'table {\n' + 'margin: auto;' + '  border-collapse: collapse;\n' + '}\n' + '\n' + 'td.producto,\n' + 'th.producto {\n' + '  font-size: 25px;\n' + '  font-family: \\\'Times New Roman\\\', serif;\n' + '  width: 100px;\n' + '  max-width: 80px;\n' + '}\n' + '.centrarCaja {\n' + 'margin: 0;' + '  position:center;\n' + '}\n' + 'td.cantidad,\n' + 'th.cantidad {\n' + '  width: 80px;\n' + 'font-size: 30px;\n' + 'font-family:Times New Roman, serif;\n' + '  max-width: 80px;\n' + '  word-break: break-all;\n' + 'margin: auto;\n' + '}\n' + '\n' + 'td.precio,\n' + 'th.precio {\n' + 'text-align: center;\n' + 'font-size: 30px;\n' + '  width: 110px;\n' + '  max-width: 110mm;\n' + '  word-break: 100mm;\n' + '}\n' + '\n' + '.centrado {\n' + '  text-align: center;\n' + '  align-content: center;\n' + '}\n' + '.totalprice { text-align: center;}' + '.bardcode {text-align: center}' + '\n' + '\n' + '.ticket {\n' + '  width: 570px;\n' + '  max-width: 600px;\n' + '}' + '\n' + 'img {\n' + 'width: 356px;\n' + 'filter: brightness(50%);' + 'display:block;' + 'margin: auto;' + '  height: 200px;' + '}' + '</style>' + '<title></title></head>' + '<body >' + '<div style="  text-align: center">' + window.document.getElementById(bardcode).innerHTML + '</div>' + '</body>';
          var mywindow = window.open('', '_blank');
          mywindow.opener;
          mywindow.document.open();
          mywindow.document.write(data);
          mywindow.document.close();

          mywindow.onload = function () {
            mywindow.focus();
            mywindow.print();
          };
        }
      }, {
        key: "guardarnumero",
        value: function guardarnumero(Cnumero) {
          console.log(Cnumero);
          var valor = document.getElementById('visor');
          console.log("valor", valor.value);
          var newProduct = {};
          Object.assign(newProduct, {
            pcodigo: "1111",
            pvalor: valor.value,
            quantity: 1,
            id: 1,
            category: {
              cnombre: 'sin categoria'
            },
            cod_market: 0
          });
          var a = 1;
          var b = false;
          console.log("guardarnumero", newProduct);
          this.mandarcarro(newProduct, a, b);
          var limpiar = document.getElementById('visor');
          limpiar.value = '';
          this.valorVisor = 0;
          this.operacao = "";
        }
      }, {
        key: "botao",
        value: function botao(dado) {
          var agora = new Date();
          var data = document.getElementById("visor");
          var auxiliar = data.value; // auxiliar recebe o valor pressionado no visor

          var info = document.getElementById("visor"); // visor recebe o valor de auxiliar e concatena com dado

          info.value = auxiliar + dado;
          var mierda = document.getElementById("visor");
          mierda.value = auxiliar + dado;
          this.valorVisor = parseInt(mierda.value); //document.getElementById("historico").innerHTML = agora.getHours();
          // mostrar a saudação acima do visor

          var hora = agora.getHours();

          if (hora >= 0 && hora <= 12) {
            document.getElementById("historico").textContent = "Bom dia";
          }

          if (hora >= 13 && hora <= 17) {
            document.getElementById("historico").textContent = "Boa tarde";
          }

          if (hora >= 18 && hora <= 23) {
            document.getElementById("historico").textContent = "Boa noite";
          }
        }
      }, {
        key: "btn_soma",
        value: function btn_soma(caracter) {
          this.numeroA = this.valorVisor;
          this.operacao = "+";
          this.calcular(caracter);
          this.limpar(); //document.getElementById("historico").innerHTML += operacao;
        }
      }, {
        key: "btn_subtrai",
        value: function btn_subtrai(caracter) {
          this.numeroA = this.valorVisor;
          this.operacao = "-";
          this.calcular(caracter);
          this.limpar();
        }
      }, {
        key: "btn_multiplica",
        value: function btn_multiplica(caracter) {
          this.numeroA = this.valorVisor;
          this.operacao = "*";
          this.calcular(caracter);
          this.limpar();
        }
      }, {
        key: "btn_divide",
        value: function btn_divide(caracter) {
          this.numeroA = this.valorVisor;
          this.operacao = "/";
          this.calcular(caracter);
          this.limpar();
        }
      }, {
        key: "reset",
        value: function reset(nC) {
          // limpar visor
          var limpiar = document.getElementById('visor');
          limpiar.value = '';
          this.valorVisor = 0;
          this.operacao = "";
        }
      }, {
        key: "limpar",
        value: function limpar() {
          var data = document.getElementById('visor');
          data.value = '';
        }
      }, {
        key: "btn_igual",
        value: function btn_igual(nigual) {
          this.numeroB = this.valorVisor;
          this.calcular(this.numeroB);
        }
      }, {
        key: "calcular",
        value: function calcular(operacao) {
          // faz o calculo, pega o resultado e colocar no visor
          //document.getElementById('visor').value = eval(resultado);
          //document.getElementById('visor').value = resultado;
          //document.getElementById('visor').value = eval(valorVisor);
          console.log(this.numeroB);

          switch (operacao) {
            case "+":
              this.total = parseFloat(this.numeroA) + parseFloat(this.numeroB);
              break;

            case "-":
              this.total = parseFloat(this.numeroA) - parseFloat(this.numeroB);
              break;

            case "*":
              this.total = parseFloat(this.numeroA) * parseFloat(this.numeroB);
              break;

            case "/":
              this.total = parseFloat(this.numeroA) / parseFloat(this.numeroB);
              break;
          }

          this.ultimoTotal = this.total;
          this.reset(this.numeroA);
          var DATO = document.getElementById('visor');
          DATO.value = this.total.toString();
          this.valorVisor = this.ultimoTotal;
          console.log("valor", this.valorVisor);
        }
      }, {
        key: "busquedaPan",
        value: function busquedaPan() {
          /*cordova.plugins.barcodeScanner.scan(
              function (result) {
                           var variable =  <HTMLInputElement> document.getElementById("buscarboletaPana")
                        /  variable.value = result.text
              },
              function (error) {
                  alert("Scanning failed: " + error);
              },
              {
                  preferFrontCamera : true, // iOS and Android
                  showFlipCameraButton : true, // iOS and Android
                  showTorchButton : true, // iOS and Android
                  torchOn: true, // Android, launch with the torch switched on (if available)
                 saveHistory: true, // Android, save scan history (default false)
                  prompt : "Place a barcode inside the scan area", // Android
                  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                  formats : "QR_CODE,PDF_417,UPC_A, UPC_E,EAN_8,EAN_13,CODE_128", // default: all but PDF_417 and RSS_EXPANDED
                  orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
                  disableAnimations : true, // iOS
                  disableSuccessBeep: false // iOS and Android
              }
              );
            */
        }
      }, {
        key: "apretar",
        value: function apretar() {
          console.log('enviando solicitudes');
          this.code_consu.emiitir_alsocket();
        }
      }, {
        key: "consultar",
        value: function consultar() {
          // this.consultarvoucher.splice(0, this.consultarvoucher.length)
          this.consultarvoucher = this.wwbsocket.emitodos();
          console.log('numero de busqueda', this.consultarvoucher);
          return this.consultarvoucher;
        }
      }]);

      return PanaderiaComponent;
    }();
    /***/

  },

  /***/
  "./src/app/shared/Pipe/busquedaprodutomarket.pipe.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/Pipe/busquedaprodutomarket.pipe.ts ***!
    \***********************************************************/

  /*! exports provided: BusquedaprodutomarketPipe */

  /***/
  function srcAppSharedPipeBusquedaprodutomarketPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusquedaprodutomarketPipe", function () {
      return BusquedaprodutomarketPipe;
    });

    var BusquedaprodutomarketPipe = /*#__PURE__*/function () {
      function BusquedaprodutomarketPipe() {
        _classCallCheck(this, BusquedaprodutomarketPipe);
      }

      _createClass(BusquedaprodutomarketPipe, [{
        key: "transform",
        value: function transform(value, args) {
          //Esta condicional almacena lo buscado.
          var voucherpanaderia = [];
          console.log('el ingreso de busqueda', args);
          console.log('valores de busqueda', args);

          if (args == '') {
            return [];
          }

          if (typeof args != 'undefined') {
            console.log('entrante panaderia', args);

            for (var p in value) {
              if (value[p].cod_market.toString().indexOf(args) > -1 && value[p].market == true && value[p].panaderia == false && value[p].cod_market == args) {
                console.log(value[p]);
                voucherpanaderia.push(value[p]);
              }
            }

            return voucherpanaderia;
          }

          return [];
        }
      }]);

      return BusquedaprodutomarketPipe;
    }();
    /***/

  },

  /***/
  "./src/app/shared/service/nav.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/service/nav.service.ts ***!
    \***********************************************/

  /*! exports provided: NavService */

  /***/
  function srcAppSharedServiceNavServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavService", function () {
      return NavService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _windows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./windows.service */
    "./src/app/shared/service/windows.service.ts");

    var NavService = /*#__PURE__*/function () {
      function NavService(window) {
        _classCallCheck(this, NavService);

        this.window = window;
        this.collapseSidebar = false;
        this.MENUITEMS = [{
          path: '/dashboard/default',
          rol: 'administrador',
          title: 'Dashboard',
          icon: 'home',
          type: 'link',
          badgeType: 'primary',
          active: false
        }, {
          title: 'Productos',
          icon: 'box',
          rol: '',
          type: 'sub',
          active: false,
          children: [{
            path: '/products/physical/lista-editar',
            rol: '',
            title: 'Inventario',
            type: 'link'
          }, {
            path: '/products/physical/add-product',
            rol: '',
            title: 'Agregar producto',
            type: 'link'
          }, {
            path: '/products/physical/proveedor',
            rol: '',
            title: 'Proveedor',
            type: 'link'
          }, {
            path: '/products/physical/promociones',
            rol: '',
            title: 'Promociones',
            type: 'link'
          }, {
            path: '/products/physical/impuestos',
            rol: '',
            title: 'Impuestos',
            type: 'link'
          }, {
            path: '/products/physical/marca',
            rol: '',
            title: 'Marcas',
            type: 'link'
          }, {
            path: '/products/physical/category',
            rol: '',
            title: 'Categoría',
            type: 'link'
          }, {
            path: '/vencimiento',
            rol: '',
            title: 'Vencidos',
            type: 'link'
          }, {
            path: '/codigo',
            rol: 'administrador',
            title: 'Código',
            type: 'link'
          }, {
            path: '/presupuesto',
            rol: 'administrador',
            title: 'Presupuesto',
            type: 'link'
          }]
        }, {
          title: 'Pagos',
          icon: 'clipboard',
          rol: '',
          type: 'sub',
          active: false,
          children: [{
            path: '/pages/create-voucher',
            rol: '',
            title: 'Crear Pago',
            type: 'link'
          }, {
            path: '/pages/lista-pago',
            rol: '',
            title: 'Lista Pagos',
            type: 'link'
          }, {
            path: '/pages/medio-pago',
            rol: '',
            title: 'Medio de pago',
            type: 'link'
          }, {
            path: '/pages/app-pago',
            rol: '',
            title: 'App de pago',
            type: 'link'
          }, {
            path: '/pages/boleta',
            rol: 'administrador',
            title: 'Boleta',
            type: 'link'
          }, {
            path: '/pages/imagenesventa',
            rol: '',
            title: 'Minimarket',
            type: 'link'
          }, {
            path: '/pages/comparar',
            rol: 'administrador',
            title: 'Comparación',
            type: 'link'
          }, {
            path: '/pages/buqueda',
            rol: '',
            title: 'Voucher emitido',
            type: 'link'
          }, {
            path: '/pages/panaderia',
            rol: '',
            title: 'Voucher Panaderia',
            type: 'link'
          }]
        }, {
          title: 'Usuarios',
          rol: 'administrador',
          icon: 'user-plus',
          type: 'sub',
          active: false,
          children: [{
            path: '/users/create-user',
            rol: 'administrador',
            title: 'Crear usuario',
            type: 'link'
          }]
        }, {
          title: 'Mermas',
          type: 'sub',
          rol: '',
          icon: 'book',
          active: false,
          children: [{
            path: '/merma/ingresar',
            rol: '',
            title: 'Situación',
            type: 'link'
          }, {
            path: '/merma/solucion-merma',
            rol: '',
            title: 'Solucion Mrm',
            type: 'link'
          }]
        }, {
          title: 'botonesnavegacion',
          type: 'sub',
          rol: '',
          icon: 'eye',
          active: false,
          children: [{
            path: '/pruebanavegacion/botoncillo',
            rol: '',
            title: 'navegable',
            type: 'link'
          }]
        }]; // Array

        this.items = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.MENUITEMS);
        this.onResize();

        if (this.screenWidth < 991) {
          this.collapseSidebar = true;
        }
      } // Windows width


      _createClass(NavService, [{
        key: "onResize",
        value: function onResize(event) {
          this.screenWidth = window.innerWidth;
        }
      }]);

      return NavService;
    }();

    NavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function NavService_Factory() {
        return new NavService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_windows_service__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]));
      },
      token: NavService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/shared/service/windows.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/service/windows.service.ts ***!
    \***************************************************/

  /*! exports provided: WINDOW, WindowRef, BrowserWindowRef, windowFactory, browserWindowProvider, windowProvider, WINDOW_PROVIDERS */

  /***/
  function srcAppSharedServiceWindowsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WINDOW", function () {
      return WINDOW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WindowRef", function () {
      return WindowRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrowserWindowRef", function () {
      return BrowserWindowRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "windowFactory", function () {
      return windowFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "browserWindowProvider", function () {
      return browserWindowProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "windowProvider", function () {
      return windowProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function () {
      return WINDOW_PROVIDERS;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* Create a new injection token for injecting the window into a component. */


    var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('WindowToken');
    /* Define abstract class for obtaining reference to the global window object. */

    var WindowRef = /*#__PURE__*/function () {
      function WindowRef() {
        _classCallCheck(this, WindowRef);
      }

      _createClass(WindowRef, [{
        key: "nativeWindow",
        get: function get() {
          throw new Error('Not implemented.');
        }
      }]);

      return WindowRef;
    }();
    /* Define class that implements the abstract class and returns the native window object. */


    var BrowserWindowRef = /*#__PURE__*/function (_WindowRef) {
      _inherits(BrowserWindowRef, _WindowRef);

      var _super = _createSuper(BrowserWindowRef);

      function BrowserWindowRef() {
        _classCallCheck(this, BrowserWindowRef);

        return _super.call(this);
      }

      _createClass(BrowserWindowRef, [{
        key: "nativeWindow",
        get: function get() {
          return window;
        }
      }]);

      return BrowserWindowRef;
    }(WindowRef);
    /* Create an factory function that returns the native window object. */


    function windowFactory(browserWindowRef, platformId) {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
      }

      return new Object();
    }
    /* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */


    var browserWindowProvider = {
      provide: WindowRef,
      useClass: BrowserWindowRef
    };
    /* Create an injectable provider that uses the windowFactory function for returning the native window object. */

    var windowProvider = {
      provide: WINDOW,
      useFactory: windowFactory,
      deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
    };
    /* Create an array of providers. */

    var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      HEROKU_APP_NAME: 'multikart-norte'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
        return console.error(err);
      });
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\kuoz2\pruebadeproyecto\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map