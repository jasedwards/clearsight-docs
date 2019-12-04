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
                    <a href="index.html" data-type="index-link">Clearsight Apps Framework</a>
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
                                    <li class="link ">
                                        <a href="additional-documentation/deployment.html" data-type="entity-link" data-context-id="additional">Deployment</a>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/sanity-checks-and-safety.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-9bdedf60d34eb1266264e388ade570da"' : 'data-target="#xs-additional-page-9bdedf60d34eb1266264e388ade570da"' }>
                                                <span class="link-name">Sanity Checks and Safety</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-9bdedf60d34eb1266264e388ade570da"' : 'id="xs-additional-page-9bdedf60d34eb1266264e388ade570da"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/sanity-checks-and-safety/before-committing-your-code.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Before Committing Your Code</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/technical-specifications.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-01b5e98c6fab07401fe47b6ffb12befc"' : 'data-target="#xs-additional-page-01b5e98c6fab07401fe47b6ffb12befc"' }>
                                                <span class="link-name">Technical Specifications</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-01b5e98c6fab07401fe47b6ffb12befc"' : 'id="xs-additional-page-01b5e98c6fab07401fe47b6ffb12befc"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/technical-specifications/numeric-input-control.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Numeric Input Control</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/technical-specifications/lookup.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Lookup</a>
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
                                <a href="modules/AlertModule.html" data-type="entity-link">AlertModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AlertModule-b12f0f6330e6ada3c586bc8597efd81a"' : 'data-target="#xs-components-links-module-AlertModule-b12f0f6330e6ada3c586bc8597efd81a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlertModule-b12f0f6330e6ada3c586bc8597efd81a"' :
                                            'id="xs-components-links-module-AlertModule-b12f0f6330e6ada3c586bc8597efd81a"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppDecoratorModule.html" data-type="entity-link">AppDecoratorModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppDecoratorModule-eea4f3fe17b6735d3685c3dbbcbd025c"' : 'data-target="#xs-injectables-links-module-AppDecoratorModule-eea4f3fe17b6735d3685c3dbbcbd025c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppDecoratorModule-eea4f3fe17b6735d3685c3dbbcbd025c"' :
                                        'id="xs-injectables-links-module-AppDecoratorModule-eea4f3fe17b6735d3685c3dbbcbd025c"' }>
                                        <li class="link">
                                            <a href="injectables/AppDecoratorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppDecoratorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AutoCollapsibleModule.html" data-type="entity-link">AutoCollapsibleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AutoCollapsibleModule-5148546cbd859373b4383bc2233b5407"' : 'data-target="#xs-components-links-module-AutoCollapsibleModule-5148546cbd859373b4383bc2233b5407"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AutoCollapsibleModule-5148546cbd859373b4383bc2233b5407"' :
                                            'id="xs-components-links-module-AutoCollapsibleModule-5148546cbd859373b4383bc2233b5407"' }>
                                            <li class="link">
                                                <a href="components/DynamicMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AutoCollapsibleModule-5148546cbd859373b4383bc2233b5407"' : 'data-target="#xs-directives-links-module-AutoCollapsibleModule-5148546cbd859373b4383bc2233b5407"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AutoCollapsibleModule-5148546cbd859373b4383bc2233b5407"' :
                                        'id="xs-directives-links-module-AutoCollapsibleModule-5148546cbd859373b4383bc2233b5407"' }>
                                        <li class="link">
                                            <a href="directives/AutoCollapsibleDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AutoCollapsibleDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ButtonTitleModule.html" data-type="entity-link">ButtonTitleModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ButtonTitleModule-9f3947f48a2ba6d72970458279c10a6b"' : 'data-target="#xs-directives-links-module-ButtonTitleModule-9f3947f48a2ba6d72970458279c10a6b"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ButtonTitleModule-9f3947f48a2ba6d72970458279c10a6b"' :
                                        'id="xs-directives-links-module-ButtonTitleModule-9f3947f48a2ba6d72970458279c10a6b"' }>
                                        <li class="link">
                                            <a href="directives/ButtonTitleDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonTitleDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CodeDependencyModule.html" data-type="entity-link">CodeDependencyModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CodeDependencyModule-43327251185aea7c6fcaae70041636f3"' : 'data-target="#xs-injectables-links-module-CodeDependencyModule-43327251185aea7c6fcaae70041636f3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CodeDependencyModule-43327251185aea7c6fcaae70041636f3"' :
                                        'id="xs-injectables-links-module-CodeDependencyModule-43327251185aea7c6fcaae70041636f3"' }>
                                        <li class="link">
                                            <a href="injectables/CodeDependencyService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CodeDependencyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ColorPickerModule.html" data-type="entity-link">ColorPickerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ColorPickerModule-a26e5c7591b90a03bb661a4c71694332"' : 'data-target="#xs-components-links-module-ColorPickerModule-a26e5c7591b90a03bb661a4c71694332"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ColorPickerModule-a26e5c7591b90a03bb661a4c71694332"' :
                                            'id="xs-components-links-module-ColorPickerModule-a26e5c7591b90a03bb661a4c71694332"' }>
                                            <li class="link">
                                                <a href="components/ColorPaletteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColorPaletteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ColorPickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColorPickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ColorSliderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColorSliderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ColorPickerModule-a26e5c7591b90a03bb661a4c71694332"' : 'data-target="#xs-injectables-links-module-ColorPickerModule-a26e5c7591b90a03bb661a4c71694332"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ColorPickerModule-a26e5c7591b90a03bb661a4c71694332"' :
                                        'id="xs-injectables-links-module-ColorPickerModule-a26e5c7591b90a03bb661a4c71694332"' }>
                                        <li class="link">
                                            <a href="injectables/ColorPickerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ColorPickerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConditionBuilderModule.html" data-type="entity-link">ConditionBuilderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConditionBuilderModule-8406ebf55c6dbdb6d4f0e7b0e6b6113e"' : 'data-target="#xs-components-links-module-ConditionBuilderModule-8406ebf55c6dbdb6d4f0e7b0e6b6113e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConditionBuilderModule-8406ebf55c6dbdb6d4f0e7b0e6b6113e"' :
                                            'id="xs-components-links-module-ConditionBuilderModule-8406ebf55c6dbdb6d4f0e7b0e6b6113e"' }>
                                            <li class="link">
                                                <a href="components/CbBetweenDateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbBetweenDateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbBetweenNumberComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbBetweenNumberComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbBetweenStringComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbBetweenStringComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbComparisonDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbComparisonDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbComparisonFieldComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbComparisonFieldComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbComparisonListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbComparisonListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbConditionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbConditionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbConditionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbConditionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbControlComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbControlComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbControlMultidomainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbControlMultidomainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbGroupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbGroupsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbGroupsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbSingleDateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbSingleDateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbSingleNumberComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbSingleNumberComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CbSingleStringComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CbSingleStringComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ConditionBuilderModule-8406ebf55c6dbdb6d4f0e7b0e6b6113e"' : 'data-target="#xs-injectables-links-module-ConditionBuilderModule-8406ebf55c6dbdb6d4f0e7b0e6b6113e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConditionBuilderModule-8406ebf55c6dbdb6d4f0e7b0e6b6113e"' :
                                        'id="xs-injectables-links-module-ConditionBuilderModule-8406ebf55c6dbdb6d4f0e7b0e6b6113e"' }>
                                        <li class="link">
                                            <a href="injectables/ComparisonDialogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ComparisonDialogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfirmDialogModule.html" data-type="entity-link">ConfirmDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfirmDialogModule-76d8cb6d0700f94fd7c9a80dd38202e3"' : 'data-target="#xs-components-links-module-ConfirmDialogModule-76d8cb6d0700f94fd7c9a80dd38202e3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfirmDialogModule-76d8cb6d0700f94fd7c9a80dd38202e3"' :
                                            'id="xs-components-links-module-ConfirmDialogModule-76d8cb6d0700f94fd7c9a80dd38202e3"' }>
                                            <li class="link">
                                                <a href="components/ConfirmDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ConfirmDialogModule-76d8cb6d0700f94fd7c9a80dd38202e3"' : 'data-target="#xs-injectables-links-module-ConfirmDialogModule-76d8cb6d0700f94fd7c9a80dd38202e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConfirmDialogModule-76d8cb6d0700f94fd7c9a80dd38202e3"' :
                                        'id="xs-injectables-links-module-ConfirmDialogModule-76d8cb6d0700f94fd7c9a80dd38202e3"' }>
                                        <li class="link">
                                            <a href="injectables/ConfirmDialogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConfirmDialogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DateFormatterModule.html" data-type="entity-link">DateFormatterModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DateFormatterModule-add7767edb61089bf6c168e53e49110d"' : 'data-target="#xs-injectables-links-module-DateFormatterModule-add7767edb61089bf6c168e53e49110d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DateFormatterModule-add7767edb61089bf6c168e53e49110d"' :
                                        'id="xs-injectables-links-module-DateFormatterModule-add7767edb61089bf6c168e53e49110d"' }>
                                        <li class="link">
                                            <a href="injectables/DateFormatterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DateFormatterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DateModule.html" data-type="entity-link">DateModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DeleteReasonDialogModule.html" data-type="entity-link">DeleteReasonDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DeleteReasonDialogModule-fd9d8510c1478eca1e28de11b29c275c"' : 'data-target="#xs-components-links-module-DeleteReasonDialogModule-fd9d8510c1478eca1e28de11b29c275c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DeleteReasonDialogModule-fd9d8510c1478eca1e28de11b29c275c"' :
                                            'id="xs-components-links-module-DeleteReasonDialogModule-fd9d8510c1478eca1e28de11b29c275c"' }>
                                            <li class="link">
                                                <a href="components/DeleteReasonDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeleteReasonDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DeleteReasonDialogModule-fd9d8510c1478eca1e28de11b29c275c"' : 'data-target="#xs-injectables-links-module-DeleteReasonDialogModule-fd9d8510c1478eca1e28de11b29c275c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DeleteReasonDialogModule-fd9d8510c1478eca1e28de11b29c275c"' :
                                        'id="xs-injectables-links-module-DeleteReasonDialogModule-fd9d8510c1478eca1e28de11b29c275c"' }>
                                        <li class="link">
                                            <a href="injectables/DeleteReasonDialogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DeleteReasonDialogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DialogShellModule.html" data-type="entity-link">DialogShellModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DialogShellModule-5ecf3fcda942d195e6d22987ef605176"' : 'data-target="#xs-components-links-module-DialogShellModule-5ecf3fcda942d195e6d22987ef605176"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DialogShellModule-5ecf3fcda942d195e6d22987ef605176"' :
                                            'id="xs-components-links-module-DialogShellModule-5ecf3fcda942d195e6d22987ef605176"' }>
                                            <li class="link">
                                                <a href="components/DialogShellComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DomainFilterModule.html" data-type="entity-link">DomainFilterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-DomainFilterModule-ee004021d02ad233330f5c9e3bfbd2c9"' : 'data-target="#xs-pipes-links-module-DomainFilterModule-ee004021d02ad233330f5c9e3bfbd2c9"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-DomainFilterModule-ee004021d02ad233330f5c9e3bfbd2c9"' :
                                            'id="xs-pipes-links-module-DomainFilterModule-ee004021d02ad233330f5c9e3bfbd2c9"' }>
                                            <li class="link">
                                                <a href="pipes/DomainFilterPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DomainFilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DomainListModule.html" data-type="entity-link">DomainListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DomainListModule-da37ed44c084817f295ff49303b0d34c"' : 'data-target="#xs-components-links-module-DomainListModule-da37ed44c084817f295ff49303b0d34c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DomainListModule-da37ed44c084817f295ff49303b0d34c"' :
                                            'id="xs-components-links-module-DomainListModule-da37ed44c084817f295ff49303b0d34c"' }>
                                            <li class="link">
                                                <a href="components/DomainListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DomainListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DragDropModule.html" data-type="entity-link">DragDropModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DragDropModule-bb45958acc4b0229d56fc9e9c25f2966"' : 'data-target="#xs-directives-links-module-DragDropModule-bb45958acc4b0229d56fc9e9c25f2966"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DragDropModule-bb45958acc4b0229d56fc9e9c25f2966"' :
                                        'id="xs-directives-links-module-DragDropModule-bb45958acc4b0229d56fc9e9c25f2966"' }>
                                        <li class="link">
                                            <a href="directives/DragDropDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DragDropDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DraggableDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DraggableDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DraggableHelperDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DraggableHelperDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DualListModule.html" data-type="entity-link">DualListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DualListModule-aadd2d5c38e44373b6fb5361bafc7d4e"' : 'data-target="#xs-components-links-module-DualListModule-aadd2d5c38e44373b6fb5361bafc7d4e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DualListModule-aadd2d5c38e44373b6fb5361bafc7d4e"' :
                                            'id="xs-components-links-module-DualListModule-aadd2d5c38e44373b6fb5361bafc7d4e"' }>
                                            <li class="link">
                                                <a href="components/DualListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DualListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DualListModule-aadd2d5c38e44373b6fb5361bafc7d4e"' : 'data-target="#xs-directives-links-module-DualListModule-aadd2d5c38e44373b6fb5361bafc7d4e"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DualListModule-aadd2d5c38e44373b6fb5361bafc7d4e"' :
                                        'id="xs-directives-links-module-DualListModule-aadd2d5c38e44373b6fb5361bafc7d4e"' }>
                                        <li class="link">
                                            <a href="directives/DualListDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DualListDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ListActionDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListActionDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SourceListDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SourceListDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TargetListDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">TargetListDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditorControlModule.html" data-type="entity-link">EditorControlModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EditorControlModule-27dbbd8fcea1c434b1b8d316a3b2583d"' : 'data-target="#xs-components-links-module-EditorControlModule-27dbbd8fcea1c434b1b8d316a3b2583d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditorControlModule-27dbbd8fcea1c434b1b8d316a3b2583d"' :
                                            'id="xs-components-links-module-EditorControlModule-27dbbd8fcea1c434b1b8d316a3b2583d"' }>
                                            <li class="link">
                                                <a href="components/EditorControlComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditorControlComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntitySearchModule.html" data-type="entity-link">EntitySearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EntitySearchModule-f1efe2b198998dc43ee90af23e43d150"' : 'data-target="#xs-components-links-module-EntitySearchModule-f1efe2b198998dc43ee90af23e43d150"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EntitySearchModule-f1efe2b198998dc43ee90af23e43d150"' :
                                            'id="xs-components-links-module-EntitySearchModule-f1efe2b198998dc43ee90af23e43d150"' }>
                                            <li class="link">
                                                <a href="components/EntityManagerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntityManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntitySearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntitySearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-EntitySearchModule-f1efe2b198998dc43ee90af23e43d150"' : 'data-target="#xs-directives-links-module-EntitySearchModule-f1efe2b198998dc43ee90af23e43d150"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-EntitySearchModule-f1efe2b198998dc43ee90af23e43d150"' :
                                        'id="xs-directives-links-module-EntitySearchModule-f1efe2b198998dc43ee90af23e43d150"' }>
                                        <li class="link">
                                            <a href="directives/EntitySearchDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntitySearchDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExportModule.html" data-type="entity-link">ExportModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ExportModule-cb03f126e1ce29fe1ad024f52b0661f8"' : 'data-target="#xs-injectables-links-module-ExportModule-cb03f126e1ce29fe1ad024f52b0661f8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExportModule-cb03f126e1ce29fe1ad024f52b0661f8"' :
                                        'id="xs-injectables-links-module-ExportModule-cb03f126e1ce29fe1ad024f52b0661f8"' }>
                                        <li class="link">
                                            <a href="injectables/ExportService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ExportService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FocusOnLoadModule.html" data-type="entity-link">FocusOnLoadModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-FocusOnLoadModule-706fc87ca05c6a41692386fbc21efef2"' : 'data-target="#xs-directives-links-module-FocusOnLoadModule-706fc87ca05c6a41692386fbc21efef2"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-FocusOnLoadModule-706fc87ca05c6a41692386fbc21efef2"' :
                                        'id="xs-directives-links-module-FocusOnLoadModule-706fc87ca05c6a41692386fbc21efef2"' }>
                                        <li class="link">
                                            <a href="directives/FocusOnLoadDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">FocusOnLoadDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormattersModule.html" data-type="entity-link">FormattersModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GridLayoutModule.html" data-type="entity-link">GridLayoutModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-GridLayoutModule-fd433e3d7f1309356fdff7314db730cc"' : 'data-target="#xs-directives-links-module-GridLayoutModule-fd433e3d7f1309356fdff7314db730cc"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-GridLayoutModule-fd433e3d7f1309356fdff7314db730cc"' :
                                        'id="xs-directives-links-module-GridLayoutModule-fd433e3d7f1309356fdff7314db730cc"' }>
                                        <li class="link">
                                            <a href="directives/FreezeHeaderDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">FreezeHeaderDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ListLayoutDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListLayoutDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TableLayoutDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableLayoutDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ItemListNavigatorModule.html" data-type="entity-link">ItemListNavigatorModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ItemListNavigatorModule-1925a60480405db46e58e9cf1f63487b"' : 'data-target="#xs-directives-links-module-ItemListNavigatorModule-1925a60480405db46e58e9cf1f63487b"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ItemListNavigatorModule-1925a60480405db46e58e9cf1f63487b"' :
                                        'id="xs-directives-links-module-ItemListNavigatorModule-1925a60480405db46e58e9cf1f63487b"' }>
                                        <li class="link">
                                            <a href="directives/ItemListNavigatorDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemListNavigatorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NavigatorControlDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigatorControlDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/KeyPressModule.html" data-type="entity-link">KeyPressModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-KeyPressModule-59453e9aeac0fea21b56fd74cd506d7f"' : 'data-target="#xs-directives-links-module-KeyPressModule-59453e9aeac0fea21b56fd74cd506d7f"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-KeyPressModule-59453e9aeac0fea21b56fd74cd506d7f"' :
                                        'id="xs-directives-links-module-KeyPressModule-59453e9aeac0fea21b56fd74cd506d7f"' }>
                                        <li class="link">
                                            <a href="directives/KeyPressDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">KeyPressDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListNavigatorModule.html" data-type="entity-link">ListNavigatorModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ListNavigatorModule-ff7d7f4538837a2f9af60e343123e74c"' : 'data-target="#xs-directives-links-module-ListNavigatorModule-ff7d7f4538837a2f9af60e343123e74c"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ListNavigatorModule-ff7d7f4538837a2f9af60e343123e74c"' :
                                        'id="xs-directives-links-module-ListNavigatorModule-ff7d7f4538837a2f9af60e343123e74c"' }>
                                        <li class="link">
                                            <a href="directives/ListNavigatorDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListNavigatorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ListNavigatorItemDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListNavigatorItemDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NumberFormatterModule.html" data-type="entity-link">NumberFormatterModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NumberFormatterModule-edd7a73e98905e9efd0b5c10c1819eea"' : 'data-target="#xs-injectables-links-module-NumberFormatterModule-edd7a73e98905e9efd0b5c10c1819eea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NumberFormatterModule-edd7a73e98905e9efd0b5c10c1819eea"' :
                                        'id="xs-injectables-links-module-NumberFormatterModule-edd7a73e98905e9efd0b5c10c1819eea"' }>
                                        <li class="link">
                                            <a href="injectables/NumberFormatterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NumberFormatterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PinToModule.html" data-type="entity-link">PinToModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-PinToModule-9039aa7758f86f7dfb36dd206a8f9463"' : 'data-target="#xs-directives-links-module-PinToModule-9039aa7758f86f7dfb36dd206a8f9463"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-PinToModule-9039aa7758f86f7dfb36dd206a8f9463"' :
                                        'id="xs-directives-links-module-PinToModule-9039aa7758f86f7dfb36dd206a8f9463"' }>
                                        <li class="link">
                                            <a href="directives/PinToDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">PinToDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResizePanelModule.html" data-type="entity-link">ResizePanelModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ResizePanelModule-a79c3b3ee52730bef801b4c7f40e2baf"' : 'data-target="#xs-directives-links-module-ResizePanelModule-a79c3b3ee52730bef801b4c7f40e2baf"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ResizePanelModule-a79c3b3ee52730bef801b4c7f40e2baf"' :
                                        'id="xs-directives-links-module-ResizePanelModule-a79c3b3ee52730bef801b4c7f40e2baf"' }>
                                        <li class="link">
                                            <a href="directives/ResizePanelDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResizePanelDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SelectModule.html" data-type="entity-link">SelectModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SelectModule-f4ae734f7b8d30620219668621171f7a"' : 'data-target="#xs-directives-links-module-SelectModule-f4ae734f7b8d30620219668621171f7a"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SelectModule-f4ae734f7b8d30620219668621171f7a"' :
                                        'id="xs-directives-links-module-SelectModule-f4ae734f7b8d30620219668621171f7a"' }>
                                        <li class="link">
                                            <a href="directives/SelectDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UnsavedChangesDialogModule.html" data-type="entity-link">UnsavedChangesDialogModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UnsavedChangesDialogModule-325d658a1298257175d404a7d72952c7"' : 'data-target="#xs-injectables-links-module-UnsavedChangesDialogModule-325d658a1298257175d404a7d72952c7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UnsavedChangesDialogModule-325d658a1298257175d404a7d72952c7"' :
                                        'id="xs-injectables-links-module-UnsavedChangesDialogModule-325d658a1298257175d404a7d72952c7"' }>
                                        <li class="link">
                                            <a href="injectables/UnsavedChangesDialogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UnsavedChangesDialogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/FocusOnLoadDirective.html" data-type="entity-link">FocusOnLoadDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ListNavigatorDirective.html" data-type="entity-link">ListNavigatorDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ListNavigatorItemDirective.html" data-type="entity-link">ListNavigatorItemDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NavigatorControlDirective.html" data-type="entity-link">NavigatorControlDirective</a>
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
                                <a href="classes/AppNavigation.html" data-type="entity-link">AppNavigation</a>
                            </li>
                            <li class="link">
                                <a href="classes/CloseRecentItemEvent.html" data-type="entity-link">CloseRecentItemEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cmyk.html" data-type="entity-link">Cmyk</a>
                            </li>
                            <li class="link">
                                <a href="classes/ComparisonFactory.html" data-type="entity-link">ComparisonFactory</a>
                            </li>
                            <li class="link">
                                <a href="classes/ComparisonProxy.html" data-type="entity-link">ComparisonProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConditionFactory.html" data-type="entity-link">ConditionFactory</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConditionProxy.html" data-type="entity-link">ConditionProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConditionTypeHelper.html" data-type="entity-link">ConditionTypeHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConvertableElement.html" data-type="entity-link">ConvertableElement</a>
                            </li>
                            <li class="link">
                                <a href="classes/CriteriaConvert.html" data-type="entity-link">CriteriaConvert</a>
                            </li>
                            <li class="link">
                                <a href="classes/CriteriaProxy.html" data-type="entity-link">CriteriaProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateBetweenComparisonProxy.html" data-type="entity-link">DateBetweenComparisonProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateComparisonBaseProxy.html" data-type="entity-link">DateComparisonBaseProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteReasonBase.html" data-type="entity-link">DeleteReasonBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/ElementHelper.html" data-type="entity-link">ElementHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntitySearchDataModel.html" data-type="entity-link">EntitySearchDataModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntitySearchDataModelFactory.html" data-type="entity-link">EntitySearchDataModelFactory</a>
                            </li>
                            <li class="link">
                                <a href="classes/FieldComparisonProxy.html" data-type="entity-link">FieldComparisonProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/FieldDateComparisonProxy.html" data-type="entity-link">FieldDateComparisonProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/FieldDateValueProxy.html" data-type="entity-link">FieldDateValueProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterDataProxy.html" data-type="entity-link">FilterDataProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/FixedDateComparisonProxy.html" data-type="entity-link">FixedDateComparisonProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/FixedDateValueProxy.html" data-type="entity-link">FixedDateValueProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/GroupConditionProxy.html" data-type="entity-link">GroupConditionProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Hsla.html" data-type="entity-link">Hsla</a>
                            </li>
                            <li class="link">
                                <a href="classes/Hsva.html" data-type="entity-link">Hsva</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListComparisonProxy.html" data-type="entity-link">ListComparisonProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListItem.html" data-type="entity-link">ListItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListNavigator.html" data-type="entity-link">ListNavigator</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewEntityDialogBase.html" data-type="entity-link">NewEntityDialogBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewEntityService.html" data-type="entity-link">NewEntityService</a>
                            </li>
                            <li class="link">
                                <a href="classes/NumberConstants.html" data-type="entity-link">NumberConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/NumericBetweenComparisonProxy.html" data-type="entity-link">NumericBetweenComparisonProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/NumericComparisonProxy.html" data-type="entity-link">NumericComparisonProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/OnClosedEvent.html" data-type="entity-link">OnClosedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/OnDeleteFavoritesEvent.html" data-type="entity-link">OnDeleteFavoritesEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/OpenRecentItemEvent.html" data-type="entity-link">OpenRecentItemEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/OutsideClickHandler.html" data-type="entity-link">OutsideClickHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/PortalEventHandler.html" data-type="entity-link">PortalEventHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostClientInfo.html" data-type="entity-link">PostClientInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostLicensedApps.html" data-type="entity-link">PostLicensedApps</a>
                            </li>
                            <li class="link">
                                <a href="classes/RelativeDateComparisonProxy.html" data-type="entity-link">RelativeDateComparisonProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/RelativeDateValueProxy.html" data-type="entity-link">RelativeDateValueProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveRecentItemEvent.html" data-type="entity-link">RemoveRecentItemEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/Rgba.html" data-type="entity-link">Rgba</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectBase.html" data-type="entity-link">SelectBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetRecentItemsEvent.html" data-type="entity-link">SetRecentItemsEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/SimpleComparisonProxy.html" data-type="entity-link">SimpleComparisonProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringBetweenComparisonProxy.html" data-type="entity-link">StringBetweenComparisonProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringComparisonProxy.html" data-type="entity-link">StringComparisonProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/ToggleMobileMenu.html" data-type="entity-link">ToggleMobileMenu</a>
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
                                    <a href="injectables/AppDecoratorService.html" data-type="entity-link">AppDecoratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CbDragDropService.html" data-type="entity-link">CbDragDropService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClearsightPortalEventHandlerService.html" data-type="entity-link">ClearsightPortalEventHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CodeDependencyHandler.html" data-type="entity-link">CodeDependencyHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CodeDependencyService.html" data-type="entity-link">CodeDependencyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ColorPickerService.html" data-type="entity-link">ColorPickerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComparisonDialogService.html" data-type="entity-link">ComparisonDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfirmDialogService.html" data-type="entity-link">ConfirmDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DateFormatterService.html" data-type="entity-link">DateFormatterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeleteReasonDialogService.html" data-type="entity-link">DeleteReasonDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeviceService.html" data-type="entity-link">DeviceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExportService.html" data-type="entity-link">ExportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InitialValuesService.html" data-type="entity-link">InitialValuesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadScriptService.html" data-type="entity-link">LoadScriptService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStorageService.html" data-type="entity-link">LocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MediaService.html" data-type="entity-link">MediaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MockPortalEventHandlerService.html" data-type="entity-link">MockPortalEventHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MultiLookupConditionService.html" data-type="entity-link">MultiLookupConditionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NumberFormatterService.html" data-type="entity-link">NumberFormatterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PortalEventHandlerService.html" data-type="entity-link">PortalEventHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PreferenceService.html" data-type="entity-link">PreferenceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UnsavedChangesDialogService.html" data-type="entity-link">UnsavedChangesDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidKeysService.html" data-type="entity-link">ValidKeysService</a>
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
                                <a href="interfaces/ActivateAppMessage.html" data-type="entity-link">ActivateAppMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppBranding.html" data-type="entity-link">AppBranding</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppModel.html" data-type="entity-link">AppModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppPath.html" data-type="entity-link">AppPath</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppUrlMapping.html" data-type="entity-link">AppUrlMapping</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CloseAppMessage.html" data-type="entity-link">CloseAppMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CloseHandler.html" data-type="entity-link">CloseHandler</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColorOutput.html" data-type="entity-link">ColorOutput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColumnDefinition.html" data-type="entity-link">ColumnDefinition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataAttribute.html" data-type="entity-link">DataAttribute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataChangeNotifier.html" data-type="entity-link">DataChangeNotifier</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataElement.html" data-type="entity-link">DataElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Declaration.html" data-type="entity-link">Declaration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogInfo.html" data-type="entity-link">DialogInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Domain.html" data-type="entity-link">Domain</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DualListDragDrop.html" data-type="entity-link">DualListDragDrop</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DualListSelection.html" data-type="entity-link">DualListSelection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Field.html" data-type="entity-link">Field</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GridColumnResult.html" data-type="entity-link">GridColumnResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GridDefinition.html" data-type="entity-link">GridDefinition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GridOptions.html" data-type="entity-link">GridOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICloseAppHook.html" data-type="entity-link">ICloseAppHook</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICodeDepdendencyInvalidatedRequest.html" data-type="entity-link">ICodeDepdendencyInvalidatedRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICodeDepdendencyInvalidatedResponse.html" data-type="entity-link">ICodeDepdendencyInvalidatedResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICodeDependencyFieldUpdate.html" data-type="entity-link">ICodeDependencyFieldUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICodeDependencyHandler.html" data-type="entity-link">ICodeDependencyHandler</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICodeDependencyMessage.html" data-type="entity-link">ICodeDependencyMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICodeDependencyStateUpdate.html" data-type="entity-link">ICodeDependencyStateUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfirmDialogService.html" data-type="entity-link">IConfirmDialogService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEditorOption.html" data-type="entity-link">IEditorOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEntity.html" data-type="entity-link">IEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEntitySearchComponent.html" data-type="entity-link">IEntitySearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewEntityService.html" data-type="entity-link">INewEntityService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InitialValuesResult.html" data-type="entity-link">InitialValuesResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LicensedAppModel.html" data-type="entity-link">LicensedAppModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewEntityConfig.html" data-type="entity-link">NewEntityConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NumberPattern.html" data-type="entity-link">NumberPattern</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PostParameter.html" data-type="entity-link">PostParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestLicensedAppsMessage.html" data-type="entity-link">RequestLicensedAppsMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RowDefinition.html" data-type="entity-link">RowDefinition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServerAppLicense.html" data-type="entity-link">ServerAppLicense</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TextElement.html" data-type="entity-link">TextElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WindowEvent.html" data-type="entity-link">WindowEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/XmlDocObject.html" data-type="entity-link">XmlDocObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/XmlElement.html" data-type="entity-link">XmlElement</a>
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