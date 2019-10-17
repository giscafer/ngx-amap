'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ngx-amap-demo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NgxAmapModule.html" data-type="entity-link">NgxAmapModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgxAmapModule-daa181832baeeb738003993922d2c626"' : 'data-target="#xs-components-links-module-NgxAmapModule-daa181832baeeb738003993922d2c626"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgxAmapModule-daa181832baeeb738003993922d2c626"' :
                                            'id="xs-components-links-module-NgxAmapModule-daa181832baeeb738003993922d2c626"' }>
                                            <li class="link">
                                                <a href="components/AmapInfoWindowComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapInfoWindowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgxAmapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgxAmapComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-NgxAmapModule-daa181832baeeb738003993922d2c626"' : 'data-target="#xs-directives-links-module-NgxAmapModule-daa181832baeeb738003993922d2c626"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-NgxAmapModule-daa181832baeeb738003993922d2c626"' :
                                        'id="xs-directives-links-module-NgxAmapModule-daa181832baeeb738003993922d2c626"' }>
                                        <li class="link">
                                            <a href="directives/AmapAutocompleteDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapAutocompleteDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapBezierCurveDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapBezierCurveDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapCircleDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapCircleDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapCircleMarkerDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapCircleMarkerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapEllipseDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapEllipseDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapHeatmapDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapHeatmapDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapMarkerClustererDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapMarkerClustererDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapMarkerDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapMarkerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapPolygonDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapPolygonDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapPolylineDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapPolylineDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapRectangleDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapRectangleDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapTextDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapTextDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapToolBarDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapToolBarDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AmapAutocompleteWrapper.html" data-type="entity-link">AmapAutocompleteWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/AmapDistrictSearchWrapper.html" data-type="entity-link">AmapDistrictSearchWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/AmapDrivingWrapper.html" data-type="entity-link">AmapDrivingWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/AmapGeocoderWrapper.html" data-type="entity-link">AmapGeocoderWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/AmapMouseToolWrapper.html" data-type="entity-link">AmapMouseToolWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/AmapPlaceSearchWrapper.html" data-type="entity-link">AmapPlaceSearchWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/AmapRidingWrapper.html" data-type="entity-link">AmapRidingWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/AmapTransferWrapper.html" data-type="entity-link">AmapTransferWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/AmapTruckDrivingWrapper.html" data-type="entity-link">AmapTruckDrivingWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/AmapWalkingWrapper.html" data-type="entity-link">AmapWalkingWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeFilter.html" data-type="entity-link">ChangeFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventBinder.html" data-type="entity-link">EventBinder</a>
                            </li>
                            <li class="link">
                                <a href="classes/KeyMap.html" data-type="entity-link">KeyMap</a>
                            </li>
                            <li class="link">
                                <a href="classes/Utils.html" data-type="entity-link">Utils</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AmapAutocompleteService.html" data-type="entity-link">AmapAutocompleteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapDistrictSearchService.html" data-type="entity-link">AmapDistrictSearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapDrivingService.html" data-type="entity-link">AmapDrivingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapGeocoderService.html" data-type="entity-link">AmapGeocoderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapMouseToolService.html" data-type="entity-link">AmapMouseToolService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapPlaceSearchService.html" data-type="entity-link">AmapPlaceSearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapRidingService.html" data-type="entity-link">AmapRidingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapTransferService.html" data-type="entity-link">AmapTransferService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapTruckDrivingService.html" data-type="entity-link">AmapTruckDrivingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapWalkingService.html" data-type="entity-link">AmapWalkingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BezierCurveService.html" data-type="entity-link">BezierCurveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CircleMarkerService.html" data-type="entity-link">CircleMarkerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CircleService.html" data-type="entity-link">CircleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DebugLoggerService.html" data-type="entity-link">DebugLoggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocumentRef.html" data-type="entity-link">DocumentRef</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EllipseService.html" data-type="entity-link">EllipseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HeatmapService.html" data-type="entity-link">HeatmapService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IconService.html" data-type="entity-link">IconService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InfoWindowService.html" data-type="entity-link">InfoWindowService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LabelService.html" data-type="entity-link">LabelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerService.html" data-type="entity-link">LoggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapAPILoaderService.html" data-type="entity-link">MapAPILoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapAPIService.html" data-type="entity-link">MapAPIService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MarkerClustererService.html" data-type="entity-link">MarkerClustererService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MarkerService.html" data-type="entity-link">MarkerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PixelService.html" data-type="entity-link">PixelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PluginLoaderService.html" data-type="entity-link">PluginLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PolygonService.html" data-type="entity-link">PolygonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PolylineService.html" data-type="entity-link">PolylineService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RectangleService.html" data-type="entity-link">RectangleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SizeService.html" data-type="entity-link">SizeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TextService.html" data-type="entity-link">TextService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToolBarService.html" data-type="entity-link">ToolBarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WindowRef.html" data-type="entity-link">WindowRef</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AddressComponent.html" data-type="entity-link">AddressComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AMapClass.html" data-type="entity-link">AMapClass</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AMapEvent.html" data-type="entity-link">AMapEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Autocomplete.html" data-type="entity-link">Autocomplete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AutocompleteOptions.html" data-type="entity-link">AutocompleteOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AutocompleteResult.html" data-type="entity-link">AutocompleteResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BezierCurve.html" data-type="entity-link">BezierCurve</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BezierCurveEditor.html" data-type="entity-link">BezierCurveEditor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BezierCurveEditorOptions.html" data-type="entity-link">BezierCurveEditorOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BezierCurveOptions.html" data-type="entity-link">BezierCurveOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Bounds.html" data-type="entity-link">Bounds</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BusinessArea.html" data-type="entity-link">BusinessArea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CAutocomplete.html" data-type="entity-link">CAutocomplete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CBezierCurve.html" data-type="entity-link">CBezierCurve</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CBezierCurveEditor.html" data-type="entity-link">CBezierCurveEditor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CBounds.html" data-type="entity-link">CBounds</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCircle.html" data-type="entity-link">CCircle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCircleMarker.html" data-type="entity-link">CCircleMarker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CDistrictSearch.html" data-type="entity-link">CDistrictSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CDriving.html" data-type="entity-link">CDriving</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CEditor.html" data-type="entity-link">CEditor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CEllipse.html" data-type="entity-link">CEllipse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CGeocoder.html" data-type="entity-link">CGeocoder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CHeatmap.html" data-type="entity-link">CHeatmap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CIcon.html" data-type="entity-link">CIcon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cinema.html" data-type="entity-link">Cinema</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CInfoWindow.html" data-type="entity-link">CInfoWindow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Circle.html" data-type="entity-link">Circle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CircleMarker.html" data-type="entity-link">CircleMarker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CircleMarkerOptions.html" data-type="entity-link">CircleMarkerOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CircleOptions.html" data-type="entity-link">CircleOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CityInfo.html" data-type="entity-link">CityInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CLngLat.html" data-type="entity-link">CLngLat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClusterStyle.html" data-type="entity-link">ClusterStyle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CMap.html" data-type="entity-link">CMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CMarker.html" data-type="entity-link">CMarker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CMarkerClusterer.html" data-type="entity-link">CMarkerClusterer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CMouseTool.html" data-type="entity-link">CMouseTool</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CPixel.html" data-type="entity-link">CPixel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CPlaceSearch.html" data-type="entity-link">CPlaceSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CPolygon.html" data-type="entity-link">CPolygon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CPolyline.html" data-type="entity-link">CPolyline</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CRectangle.html" data-type="entity-link">CRectangle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CRiding.html" data-type="entity-link">CRiding</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cross.html" data-type="entity-link">Cross</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CSize.html" data-type="entity-link">CSize</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CText.html" data-type="entity-link">CText</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CToolBar.html" data-type="entity-link">CToolBar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CTransfer.html" data-type="entity-link">CTransfer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CTruckDriving.html" data-type="entity-link">CTruckDriving</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CWalking.html" data-type="entity-link">CWalking</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Dining.html" data-type="entity-link">Dining</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Discount.html" data-type="entity-link">Discount</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/District.html" data-type="entity-link">District</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DistrictSearch.html" data-type="entity-link">DistrictSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DistrictSearchOptions.html" data-type="entity-link">DistrictSearchOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DistrictSearchResult.html" data-type="entity-link">DistrictSearchResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DriveRoute.html" data-type="entity-link">DriveRoute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DriveStep.html" data-type="entity-link">DriveStep</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Driving.html" data-type="entity-link">Driving</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DrivingOptions.html" data-type="entity-link">DrivingOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DrivingResult.html" data-type="entity-link">DrivingResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Editor.html" data-type="entity-link">Editor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ellipse.html" data-type="entity-link">Ellipse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EllipseOptions.html" data-type="entity-link">EllipseOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Geocode.html" data-type="entity-link">Geocode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Geocoder.html" data-type="entity-link">Geocoder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeocodeResult.html" data-type="entity-link">GeocodeResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeocoderOptions.html" data-type="entity-link">GeocoderOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeocoderResult.html" data-type="entity-link">GeocoderResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Groupbuy.html" data-type="entity-link">Groupbuy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Heatmap.html" data-type="entity-link">Heatmap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeatmapDataSet.html" data-type="entity-link">HeatmapDataSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeatmapDataUrl.html" data-type="entity-link">HeatmapDataUrl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeatmapLngLatData.html" data-type="entity-link">HeatmapLngLatData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeatmapOptions.html" data-type="entity-link">HeatmapOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Hotel.html" data-type="entity-link">Hotel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IClusterStyle.html" data-type="entity-link">IClusterStyle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Icon.html" data-type="entity-link">Icon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IIcon.html" data-type="entity-link">IIcon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IKeyMap.html" data-type="entity-link">IKeyMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILabel.html" data-type="entity-link">ILabel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMapAPILoaderConfig.html" data-type="entity-link">IMapAPILoaderConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InfoWindow.html" data-type="entity-link">InfoWindow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InfoWindowOptions.html" data-type="entity-link">InfoWindowOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPixel.html" data-type="entity-link">IPixel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPoiObject.html" data-type="entity-link">IPoiObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISize.html" data-type="entity-link">ISize</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LngLat.html" data-type="entity-link">LngLat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Map.html" data-type="entity-link">Map</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapOptions.html" data-type="entity-link">MapOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Marker.html" data-type="entity-link">Marker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarkerClusterer.html" data-type="entity-link">MarkerClusterer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarkerClustererOptions.html" data-type="entity-link">MarkerClustererOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarkerOptions.html" data-type="entity-link">MarkerOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MouseTool.html" data-type="entity-link">MouseTool</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Photo.html" data-type="entity-link">Photo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pixel.html" data-type="entity-link">Pixel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlaceSearch.html" data-type="entity-link">PlaceSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlaceSearchOptions.html" data-type="entity-link">PlaceSearchOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Poi.html" data-type="entity-link">Poi</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PoiList.html" data-type="entity-link">PoiList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Polygon.html" data-type="entity-link">Polygon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PolygonOptions.html" data-type="entity-link">PolygonOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Polyline.html" data-type="entity-link">Polyline</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PolylineOptions.html" data-type="entity-link">PolylineOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Rectangle.html" data-type="entity-link">Rectangle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RectangleOptions.html" data-type="entity-link">RectangleOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReGeocode.html" data-type="entity-link">ReGeocode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReGeocodePoi.html" data-type="entity-link">ReGeocodePoi</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReGeocodeResult.html" data-type="entity-link">ReGeocodeResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RenderObject.html" data-type="entity-link">RenderObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RideRoute.html" data-type="entity-link">RideRoute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RideStep.html" data-type="entity-link">RideStep</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Riding.html" data-type="entity-link">Riding</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RidingOptions.html" data-type="entity-link">RidingOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RidingResult.html" data-type="entity-link">RidingResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Road.html" data-type="entity-link">Road</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Scenic.html" data-type="entity-link">Scenic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchResult.html" data-type="entity-link">SearchResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Segment.html" data-type="entity-link">Segment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Size.html" data-type="entity-link">Size</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Text.html" data-type="entity-link">Text</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TextOptions.html" data-type="entity-link">TextOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tip.html" data-type="entity-link">Tip</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TMC.html" data-type="entity-link">TMC</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ToolBar.html" data-type="entity-link">ToolBar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ToolbarOptions.html" data-type="entity-link">ToolbarOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Transfer.html" data-type="entity-link">Transfer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TransferOptions.html" data-type="entity-link">TransferOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TransferPlan.html" data-type="entity-link">TransferPlan</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TransferResult.html" data-type="entity-link">TransferResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TruckDriving.html" data-type="entity-link">TruckDriving</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TruckDrivingOptions.html" data-type="entity-link">TruckDrivingOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ViaCity.html" data-type="entity-link">ViaCity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Walking.html" data-type="entity-link">Walking</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WalkingOptions.html" data-type="entity-link">WalkingOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WalkingResult.html" data-type="entity-link">WalkingResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WalkRoute.html" data-type="entity-link">WalkRoute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WalkStep.html" data-type="entity-link">WalkStep</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});