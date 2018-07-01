
namespace GameUi {
    export namespace Component {
        export abstract class UiPanel extends eui.Component {
            protected abstract readonly _layerType: LayerType;
            protected abstract readonly _isAlone  : boolean;

            protected _uiListeners    : { ui: egret.DisplayObject, callback: ((e: egret.TouchEvent) => void), thisObject?: any }[];
            protected _notifyListeners: Utility.Notify.Listener[];
            protected _notifyPriority = 0;

            private _isChildrenCreated   = false;
            private _isAllSkinPartsAdded = false;
            private _isCalledOpen        = false;

            private _isEverOpened        = false;
            private _isOpening           = false;

            private _isAutoAdjustHeight = false;
            private _isTouchMaskEnabled = false;
            protected _handlerForTouchMask: () => void;

            private _touchMask: eui.Group;

            protected constructor() {
                super();

                this.addEventListener(egret.Event.COMPLETE, this._onAllSkinPartsAdded, this);
                this.addEventListener(egret.Event.ADDED_TO_STAGE, this._onAddedToStage, this);
            }

            protected childrenCreated(): void {
                super.childrenCreated();

                this._isChildrenCreated = true;
                this._doOpen();
            }

            private _onAllSkinPartsAdded(): void {
                this.removeEventListener(egret.Event.COMPLETE, this._onAllSkinPartsAdded, this);

                this._isAllSkinPartsAdded = true;
                this._doOpen();
            }

            private _onAddedToStage(): void {
                this.removeEventListener(egret.Event.ADDED_TO_STAGE, this._onAddedToStage, this);
                this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this._onRemovedFromStage, this);

                this._doOpen();
            }

            private _onRemovedFromStage(): void {
                this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this._onRemovedFromStage, this);
                this.addEventListener(egret.Event.ADDED_TO_STAGE, this._onAddedToStage, this);
            }

            ////////////////////////////////////////////////////////////////////////////////
            // Functions for open self.
            ////////////////////////////////////////////////////////////////////////////////
            public open(): void {
                const layer = StageManager.getLayer(this._layerType);
                (!this._isAlone) && (layer.removeAllPanels(this));
                (!this.parent) && (layer.addChild(this));

                this._isCalledOpen = true;
                this._doOpen();
            }

            private _doOpen(): void {
                if (this._checkIsReadyForOpen()) {
                    this._isCalledOpen = false;

                    this._setAutoAdjustHeightEnabled(this._isAutoAdjustHeight);
                    this._setTouchMaskEnabled(this._isTouchMaskEnabled);

                    if (!this._isEverOpened) {
                        this._isEverOpened = true;
                        this._onFirstOpened();
                    }

                    if (!this._isOpening) {
                        this._isOpening = true;
                        this._registerListeners();
                    }

                    this._onOpened();
                }
            }

            protected _onFirstOpened(): void {
            }

            protected _onOpened(): void {
            }

            private _checkIsReadyForOpen(): boolean {
                return (this.stage != null)
                    && (this._isChildrenCreated)
                    && (this._isAllSkinPartsAdded)
                    && (this._isCalledOpen);
            }

            ////////////////////////////////////////////////////////////////////////////////
            // Functions for close self.
            ////////////////////////////////////////////////////////////////////////////////
            public close(): void {
                this._doClose();
            }

            private _doClose(): void {
                (this.parent) && (this.parent.removeChild(this));

                if (this._isOpening) {
                    this._isOpening = false;
                    this._unregisterListeners();
                }

                this._onClosed();
            }

            protected _onClosed(): void {
            }

            ////////////////////////////////////////////////////////////////////////////////
            // Other functions.
            ////////////////////////////////////////////////////////////////////////////////
            public checkIsAutoAdjustHeight(): boolean {
                return this._isAutoAdjustHeight;
            }

            protected _setAutoAdjustHeightEnabled(enabled = true): void {
                this._isAutoAdjustHeight = enabled;

                if (enabled) {
                    this.height = StageManager.getStage().stageHeight;
                }
            }

            protected _setTouchMaskEnabled(enabled = true): void {
                this._isTouchMaskEnabled = enabled;

                if (!enabled) {
                    (this._touchMask) && (this._touchMask.parent) && (this._touchMask.parent.removeChild(this._touchMask));
                } else {
                    if (!this._touchMask) {
                        const newMask        = new eui.Group();
                        newMask.width        = StageManager.DESIGN_WIDTH;
                        newMask.height       = StageManager.DESIGN_MAX_HEIGHT;
                        newMask.touchEnabled = true;
                        newMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchedTouchMask, this);
                        this._touchMask = newMask;
                    }
                    this.addChildAt(this._touchMask, 0);
                }
            }

            private _onTouchedTouchMask(e: egret.TouchEvent): void {
                this._handlerForTouchMask && this._handlerForTouchMask();
            }

            private _registerListeners(): void {
                if (this._notifyListeners) {
                    Utility.Notify.addEventListeners(this._notifyListeners, this);
                }
                if (this._uiListeners) {
                    for (const event of this._uiListeners) {
                        event.ui.addEventListener(egret.TouchEvent.TOUCH_TAP, event.callback, event.thisObject || this);
                    }
                }
            }

            private _unregisterListeners(): void {
                if (this._notifyListeners) {
                    Utility.Notify.removeEventListeners(this._notifyListeners, this);
                }
                if (this._uiListeners) {
                    for (const event of this._uiListeners) {
                        event.ui.removeEventListener(egret.TouchEvent.TOUCH_TAP, event.callback, event.thisObject || this);
                    }
                }
            }
        }
    }
}
