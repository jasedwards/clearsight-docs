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
                    <a href="index.html" data-type="index-link">Dashboards</a>
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
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Additional Info</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/dashboards.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-71db4c36178baf9fcc5c90d675a70379"' : 'data-target="#xs-additional-page-71db4c36178baf9fcc5c90d675a70379"' }>
                                                <span class="link-name">Dashboards</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-71db4c36178baf9fcc5c90d675a70379"' : 'id="xs-additional-page-71db4c36178baf9fcc5c90d675a70379"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/dashboards/adding-a-widget-to-dashboards.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Adding a widget to dashboards</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/dashboards/adding-a-footer-and-actions-to-your-widget.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Adding a Footer and Actions to Your Widget</a>
                                            </li>
                                        </ul>
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
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-203b257b43d9d42f0e952e4681ec6a1b"' : 'data-target="#xs-components-links-module-AppModule-203b257b43d9d42f0e952e4681ec6a1b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-203b257b43d9d42f0e952e4681ec6a1b"' :
                                            'id="xs-components-links-module-AppModule-203b257b43d9d42f0e952e4681ec6a1b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BIReportsWidgetModule.html" data-type="entity-link">BIReportsWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BIReportsWidgetModule-c30d8ddabd14c8efb60ed5dab8127b57"' : 'data-target="#xs-components-links-module-BIReportsWidgetModule-c30d8ddabd14c8efb60ed5dab8127b57"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BIReportsWidgetModule-c30d8ddabd14c8efb60ed5dab8127b57"' :
                                            'id="xs-components-links-module-BIReportsWidgetModule-c30d8ddabd14c8efb60ed5dab8127b57"' }>
                                            <li class="link">
                                                <a href="components/BiReportsWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BiReportsWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BiReportsWidgetPersonalizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BiReportsWidgetPersonalizationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BIReportsWidgetModule-c30d8ddabd14c8efb60ed5dab8127b57"' : 'data-target="#xs-injectables-links-module-BIReportsWidgetModule-c30d8ddabd14c8efb60ed5dab8127b57"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BIReportsWidgetModule-c30d8ddabd14c8efb60ed5dab8127b57"' :
                                        'id="xs-injectables-links-module-BIReportsWidgetModule-c30d8ddabd14c8efb60ed5dab8127b57"' }>
                                        <li class="link">
                                            <a href="injectables/BIReportDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BIReportDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChartWidgetModule.html" data-type="entity-link">ChartWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChartWidgetModule-4ac98d3d973636d092b0d89a630daabc"' : 'data-target="#xs-components-links-module-ChartWidgetModule-4ac98d3d973636d092b0d89a630daabc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChartWidgetModule-4ac98d3d973636d092b0d89a630daabc"' :
                                            'id="xs-components-links-module-ChartWidgetModule-4ac98d3d973636d092b0d89a630daabc"' }>
                                            <li class="link">
                                                <a href="components/ChartDetailsWrapperComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartDetailsWrapperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GridChartWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridChartWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LagChartWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LagChartWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LinearGaugeWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinearGaugeWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PersonalizeChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonalizeChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RadialGaugeWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RadialGaugeWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SimpleChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SimpleChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ChartWidgetModule-4ac98d3d973636d092b0d89a630daabc"' : 'data-target="#xs-injectables-links-module-ChartWidgetModule-4ac98d3d973636d092b0d89a630daabc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChartWidgetModule-4ac98d3d973636d092b0d89a630daabc"' :
                                        'id="xs-injectables-links-module-ChartWidgetModule-4ac98d3d973636d092b0d89a630daabc"' }>
                                        <li class="link">
                                            <a href="injectables/AreaChartConverterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AreaChartConverterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BubbleChartConverterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BubbleChartConverterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ChartConverterFactoryService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ChartConverterFactoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ChartDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ChartDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ChartDetailsExportService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ChartDetailsExportService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ChartLoaderService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ChartLoaderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ChartSeriesDetailsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ChartSeriesDetailsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DefaultConverterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DefaultConverterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GridToFolderOpenerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GridToFolderOpenerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LineChartConverterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LineChartConverterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LinearGaugeConverterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LinearGaugeConverterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MultiChartConverterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MultiChartConverterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PieChartConverterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PieChartConverterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RadialGaugeConverterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RadialGaugeConverterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountryIntelligenceWidgetModule.html" data-type="entity-link">CountryIntelligenceWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CountryIntelligenceWidgetModule-0af33a7fbec0488278e7f248449d63fa"' : 'data-target="#xs-components-links-module-CountryIntelligenceWidgetModule-0af33a7fbec0488278e7f248449d63fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CountryIntelligenceWidgetModule-0af33a7fbec0488278e7f248449d63fa"' :
                                            'id="xs-components-links-module-CountryIntelligenceWidgetModule-0af33a7fbec0488278e7f248449d63fa"' }>
                                            <li class="link">
                                                <a href="components/CountryIntelligenceWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CountryIntelligenceWidgetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardsModule.html" data-type="entity-link">DashboardsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardsModule-e264cbd85a685d8dbb19f50c57626740"' : 'data-target="#xs-components-links-module-DashboardsModule-e264cbd85a685d8dbb19f50c57626740"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardsModule-e264cbd85a685d8dbb19f50c57626740"' :
                                            'id="xs-components-links-module-DashboardsModule-e264cbd85a685d8dbb19f50c57626740"' }>
                                            <li class="link">
                                                <a href="components/AddContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddPageDialogueComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddPageDialogueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditPageDialogueComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditPageDialogueComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DashboardsModule-e264cbd85a685d8dbb19f50c57626740"' : 'data-target="#xs-injectables-links-module-DashboardsModule-e264cbd85a685d8dbb19f50c57626740"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DashboardsModule-e264cbd85a685d8dbb19f50c57626740"' :
                                        'id="xs-injectables-links-module-DashboardsModule-e264cbd85a685d8dbb19f50c57626740"' }>
                                        <li class="link">
                                            <a href="injectables/AddPageDialogueService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AddPageDialogueService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DashboardService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DashboardService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DashboardsDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DashboardsDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DashboardsEffects.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DashboardsEffects</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EditPageDialogueService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EditPageDialogueService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ScrollerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ScrollerService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-DashboardsModule-e264cbd85a685d8dbb19f50c57626740"' : 'data-target="#xs-pipes-links-module-DashboardsModule-e264cbd85a685d8dbb19f50c57626740"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-DashboardsModule-e264cbd85a685d8dbb19f50c57626740"' :
                                            'id="xs-pipes-links-module-DashboardsModule-e264cbd85a685d8dbb19f50c57626740"' }>
                                            <li class="link">
                                                <a href="pipes/DashboardsSecurityAccessPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardsSecurityAccessPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentsFolderViewerModule.html" data-type="entity-link">DocumentsFolderViewerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DocumentsFolderViewerModule-2a5be398d2590038450e96bd6824096a"' : 'data-target="#xs-components-links-module-DocumentsFolderViewerModule-2a5be398d2590038450e96bd6824096a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DocumentsFolderViewerModule-2a5be398d2590038450e96bd6824096a"' :
                                            'id="xs-components-links-module-DocumentsFolderViewerModule-2a5be398d2590038450e96bd6824096a"' }>
                                            <li class="link">
                                                <a href="components/DocumentsFolderViewerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DocumentsFolderViewerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DocumentsFolderViewerPersonalizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DocumentsFolderViewerPersonalizationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DocumentsFolderViewerModule-2a5be398d2590038450e96bd6824096a"' : 'data-target="#xs-injectables-links-module-DocumentsFolderViewerModule-2a5be398d2590038450e96bd6824096a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DocumentsFolderViewerModule-2a5be398d2590038450e96bd6824096a"' :
                                        'id="xs-injectables-links-module-DocumentsFolderViewerModule-2a5be398d2590038450e96bd6824096a"' }>
                                        <li class="link">
                                            <a href="injectables/documentsfolderviewerDataservice.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>documentsfolderviewerDataservice</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DynamicAnalysisWidgetModule.html" data-type="entity-link">DynamicAnalysisWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DynamicAnalysisWidgetModule-4cfc0e564fe691541b075a4bc34f05b1"' : 'data-target="#xs-components-links-module-DynamicAnalysisWidgetModule-4cfc0e564fe691541b075a4bc34f05b1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DynamicAnalysisWidgetModule-4cfc0e564fe691541b075a4bc34f05b1"' :
                                            'id="xs-components-links-module-DynamicAnalysisWidgetModule-4cfc0e564fe691541b075a4bc34f05b1"' }>
                                            <li class="link">
                                                <a href="components/DynamicAnalysisWidgetChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicAnalysisWidgetChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DynamicAnalysisWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicAnalysisWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DynamicAnalysisWidgetPersonalizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicAnalysisWidgetPersonalizationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DynamicAnalysisWidgetTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicAnalysisWidgetTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DynamicAnalysisWidgetModule-4cfc0e564fe691541b075a4bc34f05b1"' : 'data-target="#xs-injectables-links-module-DynamicAnalysisWidgetModule-4cfc0e564fe691541b075a4bc34f05b1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DynamicAnalysisWidgetModule-4cfc0e564fe691541b075a4bc34f05b1"' :
                                        'id="xs-injectables-links-module-DynamicAnalysisWidgetModule-4cfc0e564fe691541b075a4bc34f05b1"' }>
                                        <li class="link">
                                            <a href="injectables/DynamicAnalysisWidgetDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DynamicAnalysisWidgetDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmailNotificationWidgetModule.html" data-type="entity-link">EmailNotificationWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EmailNotificationWidgetModule-20de3dbf0c815d4d74c5464a238a27a3"' : 'data-target="#xs-components-links-module-EmailNotificationWidgetModule-20de3dbf0c815d4d74c5464a238a27a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EmailNotificationWidgetModule-20de3dbf0c815d4d74c5464a238a27a3"' :
                                            'id="xs-components-links-module-EmailNotificationWidgetModule-20de3dbf0c815d4d74c5464a238a27a3"' }>
                                            <li class="link">
                                                <a href="components/EmailNotificationWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmailNotificationWidgetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EmailNotificationWidgetModule-20de3dbf0c815d4d74c5464a238a27a3"' : 'data-target="#xs-injectables-links-module-EmailNotificationWidgetModule-20de3dbf0c815d4d74c5464a238a27a3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmailNotificationWidgetModule-20de3dbf0c815d4d74c5464a238a27a3"' :
                                        'id="xs-injectables-links-module-EmailNotificationWidgetModule-20de3dbf0c815d4d74c5464a238a27a3"' }>
                                        <li class="link">
                                            <a href="injectables/EmailNotificationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EmailNotificationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilterDataModule.html" data-type="entity-link">FilterDataModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FilterDataModule-9b094c9bdaefb6cc92c5502b22cbb739"' : 'data-target="#xs-components-links-module-FilterDataModule-9b094c9bdaefb6cc92c5502b22cbb739"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FilterDataModule-9b094c9bdaefb6cc92c5502b22cbb739"' :
                                            'id="xs-components-links-module-FilterDataModule-9b094c9bdaefb6cc92c5502b22cbb739"' }>
                                            <li class="link">
                                                <a href="components/AdvancedFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdvancedFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BasicFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BasicFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterDataComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterDataComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MonthlyAnalysisWidgetModule.html" data-type="entity-link">MonthlyAnalysisWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MonthlyAnalysisWidgetModule-dffe7bc72842c08d6e35803a7013f2c8"' : 'data-target="#xs-components-links-module-MonthlyAnalysisWidgetModule-dffe7bc72842c08d6e35803a7013f2c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MonthlyAnalysisWidgetModule-dffe7bc72842c08d6e35803a7013f2c8"' :
                                            'id="xs-components-links-module-MonthlyAnalysisWidgetModule-dffe7bc72842c08d6e35803a7013f2c8"' }>
                                            <li class="link">
                                                <a href="components/MonthlyAnalysisWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MonthlyAnalysisWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MonthlyAnalysisWidgetPersonalizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MonthlyAnalysisWidgetPersonalizationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MonthlyAnalysisWidgetModule-dffe7bc72842c08d6e35803a7013f2c8"' : 'data-target="#xs-injectables-links-module-MonthlyAnalysisWidgetModule-dffe7bc72842c08d6e35803a7013f2c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MonthlyAnalysisWidgetModule-dffe7bc72842c08d6e35803a7013f2c8"' :
                                        'id="xs-injectables-links-module-MonthlyAnalysisWidgetModule-dffe7bc72842c08d6e35803a7013f2c8"' }>
                                        <li class="link">
                                            <a href="injectables/MonthlyAnalysisDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MonthlyAnalysisDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyCalendarWidgetModule.html" data-type="entity-link">MyCalendarWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MyCalendarWidgetModule-58792efc6f639ef5a3e7f7a791e89b80"' : 'data-target="#xs-components-links-module-MyCalendarWidgetModule-58792efc6f639ef5a3e7f7a791e89b80"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyCalendarWidgetModule-58792efc6f639ef5a3e7f7a791e89b80"' :
                                            'id="xs-components-links-module-MyCalendarWidgetModule-58792efc6f639ef5a3e7f7a791e89b80"' }>
                                            <li class="link">
                                                <a href="components/MyCalendarWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyCalendarWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyCalenderWidgetPersonalizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyCalenderWidgetPersonalizationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MyCalendarWidgetModule-58792efc6f639ef5a3e7f7a791e89b80"' : 'data-target="#xs-injectables-links-module-MyCalendarWidgetModule-58792efc6f639ef5a3e7f7a791e89b80"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MyCalendarWidgetModule-58792efc6f639ef5a3e7f7a791e89b80"' :
                                        'id="xs-injectables-links-module-MyCalendarWidgetModule-58792efc6f639ef5a3e7f7a791e89b80"' }>
                                        <li class="link">
                                            <a href="injectables/MyCalendarPersonalizationOptions.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MyCalendarPersonalizationOptions</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MyCalendarWidgetDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MyCalendarWidgetDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MyCalendarWidgetGlobalization.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MyCalendarWidgetGlobalization</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyFavoriteDocumentsModule.html" data-type="entity-link">MyFavoriteDocumentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MyFavoriteDocumentsModule-ebba61e7d218d8e2d8791c10087af665"' : 'data-target="#xs-components-links-module-MyFavoriteDocumentsModule-ebba61e7d218d8e2d8791c10087af665"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyFavoriteDocumentsModule-ebba61e7d218d8e2d8791c10087af665"' :
                                            'id="xs-components-links-module-MyFavoriteDocumentsModule-ebba61e7d218d8e2d8791c10087af665"' }>
                                            <li class="link">
                                                <a href="components/MyFavoriteDocumentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyFavoriteDocumentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyFavoriteDocumentsPersonalizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyFavoriteDocumentsPersonalizationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MyFavoriteDocumentsModule-ebba61e7d218d8e2d8791c10087af665"' : 'data-target="#xs-injectables-links-module-MyFavoriteDocumentsModule-ebba61e7d218d8e2d8791c10087af665"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MyFavoriteDocumentsModule-ebba61e7d218d8e2d8791c10087af665"' :
                                        'id="xs-injectables-links-module-MyFavoriteDocumentsModule-ebba61e7d218d8e2d8791c10087af665"' }>
                                        <li class="link">
                                            <a href="injectables/MyFavoriteDocumentsDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MyFavoriteDocumentsDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyLinksWidgetModule.html" data-type="entity-link">MyLinksWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MyLinksWidgetModule-285639a054139baff7516f3ce88f428b"' : 'data-target="#xs-components-links-module-MyLinksWidgetModule-285639a054139baff7516f3ce88f428b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyLinksWidgetModule-285639a054139baff7516f3ce88f428b"' :
                                            'id="xs-components-links-module-MyLinksWidgetModule-285639a054139baff7516f3ce88f428b"' }>
                                            <li class="link">
                                                <a href="components/EditFolderToolbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditFolderToolbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyLinksToolbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyLinksToolbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyLinksWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyLinksWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewFolderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewFolderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewLinkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewLinkComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MyLinksWidgetModule-285639a054139baff7516f3ce88f428b"' : 'data-target="#xs-injectables-links-module-MyLinksWidgetModule-285639a054139baff7516f3ce88f428b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MyLinksWidgetModule-285639a054139baff7516f3ce88f428b"' :
                                        'id="xs-injectables-links-module-MyLinksWidgetModule-285639a054139baff7516f3ce88f428b"' }>
                                        <li class="link">
                                            <a href="injectables/MyLinksDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MyLinksDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyReportsWidgetModule.html" data-type="entity-link">MyReportsWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MyReportsWidgetModule-a848d795d8aaa3d3c99f0113a70c8d03"' : 'data-target="#xs-components-links-module-MyReportsWidgetModule-a848d795d8aaa3d3c99f0113a70c8d03"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyReportsWidgetModule-a848d795d8aaa3d3c99f0113a70c8d03"' :
                                            'id="xs-components-links-module-MyReportsWidgetModule-a848d795d8aaa3d3c99f0113a70c8d03"' }>
                                            <li class="link">
                                                <a href="components/MyReportsPersonalizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyReportsPersonalizationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyReportsWidgetAditionalDataComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyReportsWidgetAditionalDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyReportsWidgetAlertsGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyReportsWidgetAlertsGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyReportsWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyReportsWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyReportsWidgetStatusBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyReportsWidgetStatusBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MyReportsWidgetModule-a848d795d8aaa3d3c99f0113a70c8d03"' : 'data-target="#xs-injectables-links-module-MyReportsWidgetModule-a848d795d8aaa3d3c99f0113a70c8d03"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MyReportsWidgetModule-a848d795d8aaa3d3c99f0113a70c8d03"' :
                                        'id="xs-injectables-links-module-MyReportsWidgetModule-a848d795d8aaa3d3c99f0113a70c8d03"' }>
                                        <li class="link">
                                            <a href="injectables/MyReportsWidgetService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MyReportsWidgetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyViewsWidgetModule.html" data-type="entity-link">MyViewsWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MyViewsWidgetModule-11966390b4ddb5da0e68c6c9522da8c8"' : 'data-target="#xs-components-links-module-MyViewsWidgetModule-11966390b4ddb5da0e68c6c9522da8c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyViewsWidgetModule-11966390b4ddb5da0e68c6c9522da8c8"' :
                                            'id="xs-components-links-module-MyViewsWidgetModule-11966390b4ddb5da0e68c6c9522da8c8"' }>
                                            <li class="link">
                                                <a href="components/ActionPlanAlertModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActionPlanAlertModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyViewsWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyViewsWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyViewsWidgetPersonalizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyViewsWidgetPersonalizationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MyViewsWidgetModule-11966390b4ddb5da0e68c6c9522da8c8"' : 'data-target="#xs-injectables-links-module-MyViewsWidgetModule-11966390b4ddb5da0e68c6c9522da8c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MyViewsWidgetModule-11966390b4ddb5da0e68c6c9522da8c8"' :
                                        'id="xs-injectables-links-module-MyViewsWidgetModule-11966390b4ddb5da0e68c6c9522da8c8"' }>
                                        <li class="link">
                                            <a href="injectables/MyViewsWidgetService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MyViewsWidgetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewsWidgetModule.html" data-type="entity-link">NewsWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NewsWidgetModule-3bccb07ce74f8f3f86b72495f07566f2"' : 'data-target="#xs-components-links-module-NewsWidgetModule-3bccb07ce74f8f3f86b72495f07566f2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NewsWidgetModule-3bccb07ce74f8f3f86b72495f07566f2"' :
                                            'id="xs-components-links-module-NewsWidgetModule-3bccb07ce74f8f3f86b72495f07566f2"' }>
                                            <li class="link">
                                                <a href="components/NewsWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsWidgetPersonalizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsWidgetPersonalizationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NewsWidgetModule-3bccb07ce74f8f3f86b72495f07566f2"' : 'data-target="#xs-injectables-links-module-NewsWidgetModule-3bccb07ce74f8f3f86b72495f07566f2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NewsWidgetModule-3bccb07ce74f8f3f86b72495f07566f2"' :
                                        'id="xs-injectables-links-module-NewsWidgetModule-3bccb07ce74f8f3f86b72495f07566f2"' }>
                                        <li class="link">
                                            <a href="injectables/NewsDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NewsDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PendingApprovalWidgetModule.html" data-type="entity-link">PendingApprovalWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PendingApprovalWidgetModule-8a3ebc5e5d5dbe4a4078ec93204225ab"' : 'data-target="#xs-components-links-module-PendingApprovalWidgetModule-8a3ebc5e5d5dbe4a4078ec93204225ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PendingApprovalWidgetModule-8a3ebc5e5d5dbe4a4078ec93204225ab"' :
                                            'id="xs-components-links-module-PendingApprovalWidgetModule-8a3ebc5e5d5dbe4a4078ec93204225ab"' }>
                                            <li class="link">
                                                <a href="components/PendingApprovalWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PendingApprovalWidgetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PendingApprovalWidgetModule-8a3ebc5e5d5dbe4a4078ec93204225ab"' : 'data-target="#xs-injectables-links-module-PendingApprovalWidgetModule-8a3ebc5e5d5dbe4a4078ec93204225ab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PendingApprovalWidgetModule-8a3ebc5e5d5dbe4a4078ec93204225ab"' :
                                        'id="xs-injectables-links-module-PendingApprovalWidgetModule-8a3ebc5e5d5dbe4a4078ec93204225ab"' }>
                                        <li class="link">
                                            <a href="injectables/PendingApprovalWidgetService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PendingApprovalWidgetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RiskMapWidgetModule.html" data-type="entity-link">RiskMapWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RiskMapWidgetModule-402d0a5a1e53abd23eb4a87cc71507ed"' : 'data-target="#xs-components-links-module-RiskMapWidgetModule-402d0a5a1e53abd23eb4a87cc71507ed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RiskMapWidgetModule-402d0a5a1e53abd23eb4a87cc71507ed"' :
                                            'id="xs-components-links-module-RiskMapWidgetModule-402d0a5a1e53abd23eb4a87cc71507ed"' }>
                                            <li class="link">
                                                <a href="components/RiskMapWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RiskMapWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RiskMapWidgetPersonalizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RiskMapWidgetPersonalizationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RiskMapWidgetModule-402d0a5a1e53abd23eb4a87cc71507ed"' : 'data-target="#xs-injectables-links-module-RiskMapWidgetModule-402d0a5a1e53abd23eb4a87cc71507ed"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RiskMapWidgetModule-402d0a5a1e53abd23eb4a87cc71507ed"' :
                                        'id="xs-injectables-links-module-RiskMapWidgetModule-402d0a5a1e53abd23eb4a87cc71507ed"' }>
                                        <li class="link">
                                            <a href="injectables/RiskMapWidgetDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RiskMapWidgetDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WidgetsModule.html" data-type="entity-link">WidgetsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WidgetsModule-7c74a2d63e73cc5c4bb50caade91039f"' : 'data-target="#xs-components-links-module-WidgetsModule-7c74a2d63e73cc5c4bb50caade91039f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WidgetsModule-7c74a2d63e73cc5c4bb50caade91039f"' :
                                            'id="xs-components-links-module-WidgetsModule-7c74a2d63e73cc5c4bb50caade91039f"' }>
                                            <li class="link">
                                                <a href="components/WidgetContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetPersonalizeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetPersonalizeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-WidgetsModule-7c74a2d63e73cc5c4bb50caade91039f"' : 'data-target="#xs-directives-links-module-WidgetsModule-7c74a2d63e73cc5c4bb50caade91039f"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-WidgetsModule-7c74a2d63e73cc5c4bb50caade91039f"' :
                                        'id="xs-directives-links-module-WidgetsModule-7c74a2d63e73cc5c4bb50caade91039f"' }>
                                        <li class="link">
                                            <a href="directives/WidgetSizerDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetSizerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/WidgetToggleDecoratorDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetToggleDecoratorDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WidgetTemplatesModule.html" data-type="entity-link">WidgetTemplatesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-WidgetTemplatesModule-5c2a68cb86dfe289908e2300f4f13bf0"' : 'data-target="#xs-directives-links-module-WidgetTemplatesModule-5c2a68cb86dfe289908e2300f4f13bf0"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-WidgetTemplatesModule-5c2a68cb86dfe289908e2300f4f13bf0"' :
                                        'id="xs-directives-links-module-WidgetTemplatesModule-5c2a68cb86dfe289908e2300f4f13bf0"' }>
                                        <li class="link">
                                            <a href="directives/WidgetActionsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetActionsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/WidgetFooterDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetFooterDirective</a>
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
                                <a href="classes/ChartTypeMapper.html" data-type="entity-link">ChartTypeMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChartWidgetBase.html" data-type="entity-link">ChartWidgetBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardsServiceBase.html" data-type="entity-link">DashboardsServiceBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/dynamicAnalysisData.html" data-type="entity-link">dynamicAnalysisData</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchDataAction.html" data-type="entity-link">FetchDataAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchDataFailureAction.html" data-type="entity-link">FetchDataFailureAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchDataSuccessAction.html" data-type="entity-link">FetchDataSuccessAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterDataBase.html" data-type="entity-link">FilterDataBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/NameValuePair.html" data-type="entity-link">NameValuePair</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshRunCompletedAction.html" data-type="entity-link">RefreshRunCompletedAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshStatusAction.html" data-type="entity-link">RefreshStatusAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshStatusFailureAction.html" data-type="entity-link">RefreshStatusFailureAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshStatusSuccessAction.html" data-type="entity-link">RefreshStatusSuccessAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/RunAction.html" data-type="entity-link">RunAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/RunFailureAction.html" data-type="entity-link">RunFailureAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/RunSuccessAction.html" data-type="entity-link">RunSuccessAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/StopAction.html" data-type="entity-link">StopAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/StopFailureAction.html" data-type="entity-link">StopFailureAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/StopSuccessAction.html" data-type="entity-link">StopSuccessAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/WidgetComponentBase.html" data-type="entity-link">WidgetComponentBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/WidgetModule.html" data-type="entity-link">WidgetModule</a>
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
                                    <a href="injectables/AddPageDialogueService.html" data-type="entity-link">AddPageDialogueService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdvancedFilterDataService.html" data-type="entity-link">AdvancedFilterDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdvancedFilterLookupService.html" data-type="entity-link">AdvancedFilterLookupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdvancedFilterMultiLookupService.html" data-type="entity-link">AdvancedFilterMultiLookupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AreaChartConverterService.html" data-type="entity-link">AreaChartConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BIReportDataService.html" data-type="entity-link">BIReportDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BubbleChartConverterService.html" data-type="entity-link">BubbleChartConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChartConverterFactoryService.html" data-type="entity-link">ChartConverterFactoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChartDataService.html" data-type="entity-link">ChartDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChartDetailsExportService.html" data-type="entity-link">ChartDetailsExportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChartLoaderService.html" data-type="entity-link">ChartLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChartSeriesDetailsService.html" data-type="entity-link">ChartSeriesDetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardPageLookupService.html" data-type="entity-link">DashboardPageLookupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardsDataService.html" data-type="entity-link">DashboardsDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardsEffects.html" data-type="entity-link">DashboardsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardService.html" data-type="entity-link">DashboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DefaultConverterService.html" data-type="entity-link">DefaultConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/documentsfolderviewerDataservice.html" data-type="entity-link">documentsfolderviewerDataservice</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DynamicAnalysisWidgetDataService.html" data-type="entity-link">DynamicAnalysisWidgetDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EditPageDialogueService.html" data-type="entity-link">EditPageDialogueService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailNotificationService.html" data-type="entity-link">EmailNotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FolderDistributionLookupService.html" data-type="entity-link">FolderDistributionLookupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GridToFolderOpenerService.html" data-type="entity-link">GridToFolderOpenerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LinearGaugeConverterService.html" data-type="entity-link">LinearGaugeConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LineChartConverterService.html" data-type="entity-link">LineChartConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerEffectsService.html" data-type="entity-link">LoggerEffectsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MonthlyAnalysisDataService.html" data-type="entity-link">MonthlyAnalysisDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MultiChartConverterService.html" data-type="entity-link">MultiChartConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MyCalendarPersonalizationOptions.html" data-type="entity-link">MyCalendarPersonalizationOptions</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MyCalendarWidgetDataService.html" data-type="entity-link">MyCalendarWidgetDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MyCalendarWidgetGlobalization.html" data-type="entity-link">MyCalendarWidgetGlobalization</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MyFavoriteDocumentsDataService.html" data-type="entity-link">MyFavoriteDocumentsDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MyLinksActionsService.html" data-type="entity-link">MyLinksActionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MyLinksDataService.html" data-type="entity-link">MyLinksDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MyReportsEffects.html" data-type="entity-link">MyReportsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MyReportsWidgetService.html" data-type="entity-link">MyReportsWidgetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MyViewsWidgetService.html" data-type="entity-link">MyViewsWidgetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewsDataService.html" data-type="entity-link">NewsDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PendingApprovalWidgetService.html" data-type="entity-link">PendingApprovalWidgetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PieChartConverterService.html" data-type="entity-link">PieChartConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RadialGaugeConverterService.html" data-type="entity-link">RadialGaugeConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RiskMapWidgetDataService.html" data-type="entity-link">RiskMapWidgetDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScrollerService.html" data-type="entity-link">ScrollerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetCommunicatorService.html" data-type="entity-link">WidgetCommunicatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetLoaderService.html" data-type="entity-link">WidgetLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetRefreshService.html" data-type="entity-link">WidgetRefreshService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetsEffects.html" data-type="entity-link">WidgetsEffects</a>
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
                                <a href="interfaces/AddDashboardAction.html" data-type="entity-link">AddDashboardAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddWidget.html" data-type="entity-link">AddWidget</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AlertGridRow.html" data-type="entity-link">AlertGridRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/App.html" data-type="entity-link">App</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BIConfiguration.html" data-type="entity-link">BIConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BIReportItem.html" data-type="entity-link">BIReportItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChangeWidgetOption.html" data-type="entity-link">ChangeWidgetOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChangeWidgetPosition.html" data-type="entity-link">ChangeWidgetPosition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChangeWidgetPositionSucceed.html" data-type="entity-link">ChangeWidgetPositionSucceed</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartConverter.html" data-type="entity-link">ChartConverter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartGridDetailsMessage.html" data-type="entity-link">ChartGridDetailsMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartWidget.html" data-type="entity-link">ChartWidget</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartWidgetConfig.html" data-type="entity-link">ChartWidgetConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartWidgetData.html" data-type="entity-link">ChartWidgetData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartWidgetDataReturnValue.html" data-type="entity-link">ChartWidgetDataReturnValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartWidgetObj.html" data-type="entity-link">ChartWidgetObj</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CopyDashboardAction.html" data-type="entity-link">CopyDashboardAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Dashboard.html" data-type="entity-link">Dashboard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardMessagesLoaded.html" data-type="entity-link">DashboardMessagesLoaded</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardPagePermission.html" data-type="entity-link">DashboardPagePermission</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardSelected.html" data-type="entity-link">DashboardSelected</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardsState.html" data-type="entity-link">DashboardsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardWidgetsLoaded.html" data-type="entity-link">DashboardWidgetsLoaded</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataForWidgetLoaded.html" data-type="entity-link">DataForWidgetLoaded</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditDashboardAction.html" data-type="entity-link">EditDashboardAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailNotificationWidgetConfig.html" data-type="entity-link">EmailNotificationWidgetConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailPageMapping.html" data-type="entity-link">EmailPageMapping</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Entity.html" data-type="entity-link">Entity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterWidgetData.html" data-type="entity-link">FilterWidgetData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FolderItem.html" data-type="entity-link">FolderItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IActiveId.html" data-type="entity-link">IActiveId</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListItem.html" data-type="entity-link">ListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoadDashboardMessages.html" data-type="entity-link">LoadDashboardMessages</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoadWidgetsForDashboard.html" data-type="entity-link">LoadWidgetsForDashboard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MyReportConfiguration.html" data-type="entity-link">MyReportConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MyReportsState.html" data-type="entity-link">MyReportsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MyViewsMessageDetails.html" data-type="entity-link">MyViewsMessageDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Part.html" data-type="entity-link">Part</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RemoveDashboard.html" data-type="entity-link">RemoveDashboard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RemoveWidget.html" data-type="entity-link">RemoveWidget</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResetWidgetData.html" data-type="entity-link">ResetWidgetData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SaveDashboardAction.html" data-type="entity-link">SaveDashboardAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SaveWidget.html" data-type="entity-link">SaveWidget</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SortDashboardsAction.html" data-type="entity-link">SortDashboardsAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ToggleWidgetExpanded.html" data-type="entity-link">ToggleWidgetExpanded</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ToggleWidgetExpandedPayload.html" data-type="entity-link">ToggleWidgetExpandedPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateTitleForWidget.html" data-type="entity-link">UpdateTitleForWidget</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateWidgetConfiguration.html" data-type="entity-link">UpdateWidgetConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateWidgetConfigurationSuccess.html" data-type="entity-link">UpdateWidgetConfigurationSuccess</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserRole.html" data-type="entity-link">UserRole</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/View.html" data-type="entity-link">View</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ViewMessageResponse.html" data-type="entity-link">ViewMessageResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ViewRecord.html" data-type="entity-link">ViewRecord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ViewsWidgetConfig.html" data-type="entity-link">ViewsWidgetConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetComponent.html" data-type="entity-link">WidgetComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetDataPayload.html" data-type="entity-link">WidgetDataPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetPositionAction.html" data-type="entity-link">WidgetPositionAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetPositionReceived.html" data-type="entity-link">WidgetPositionReceived</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetRefresh.html" data-type="entity-link">WidgetRefresh</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetSchema.html" data-type="entity-link">WidgetSchema</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetsState.html" data-type="entity-link">WidgetsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetToRefresh.html" data-type="entity-link">WidgetToRefresh</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});