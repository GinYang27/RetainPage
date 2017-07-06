<div ng-if="ctrl.exploreItems.length !== 0">
    <ul layout="row" layout-wrap layout-align-sm="center center" layout-align-xs="center center">
        <gd-preview-box class="ic-gd-preview-box" ng-repeat="PreviewBox in ctrl.exploreItems | orderBy:sequence" preview-box="PreviewBox" on-finish-render="ngRepeatFinished"></gd-preview-box>
    </ul>
</div>
