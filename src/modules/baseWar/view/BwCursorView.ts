
namespace TinyWars.BaseWar {
    import Types                = Utility.Types;
    import GridIndexHelpers     = Utility.GridIndexHelpers;
    import Helpers              = Utility.Helpers;
    import Notify               = Utility.Notify;
    import Lang                 = Utility.Lang;
    import DamageCalculator     = Utility.DamageCalculator;
    import GridIndex            = Types.GridIndex;
    import ActionPlannerState   = Types.ActionPlannerState;

    const { width: _GRID_WIDTH, height: _GRID_HEIGHT } = Utility.ConfigManager.getGridSize();
    const _PULSE_IN_DURATION                    = 150;
    const _PULSE_OUT_DURATION                   = 150;
    const _PULSE_INTERVAL_DURATION              = 300;
    const _TARGET_FRAME_DURATION                = 100;
    const _DRAG_FIELD_SQUARED_TRIGGER_DISTANCE  = 400;
    const _IMG_SOURCE_FOR_NORMAL_CORNER         = "c04_t03_s01_f01";
    const _IMG_SOURCES_FOR_TARGET               = [
        `c04_t03_s02_f01`,
        `c04_t03_s02_f02`,
        `c04_t03_s02_f03`,
        `c04_t03_s02_f04`,
    ];

    const _UPPER_LEFT_CORNER_OUTER_X    = -6;
    const _UPPER_LEFT_CORNER_OUTER_Y    = -6;
    const _UPPER_LEFT_CORNER_INNER_X    = 4;
    const _UPPER_LEFT_CORNER_INNER_Y    = 4;
    const _UPPER_RIGHT_CORNER_OUTER_X   = _GRID_WIDTH + 6;
    const _UPPER_RIGHT_CORNER_OUTER_Y   = -6;
    const _UPPER_RIGHT_CORNER_INNER_X   = _GRID_WIDTH - 4;
    const _UPPER_RIGHT_CORNER_INNER_Y   = 4;
    const _LOWER_LEFT_CORNER_OUTER_X    = -6;
    const _LOWER_LEFT_CORNER_OUTER_Y    = _GRID_HEIGHT + 6;
    const _LOWER_LEFT_CORNER_INNER_X    = 4;
    const _LOWER_LEFT_CORNER_INNER_Y    = _GRID_HEIGHT - 4;
    const _LOWER_RIGHT_CORNER_OUTER_X   = _GRID_WIDTH  + 6;
    const _LOWER_RIGHT_CORNER_OUTER_Y   = _GRID_HEIGHT + 6;
    const _LOWER_RIGHT_CORNER_INNER_X   = _GRID_WIDTH  - 4;
    const _LOWER_RIGHT_CORNER_INNER_Y   = _GRID_HEIGHT - 4;

    const _DAMAGE_CON_WIDTH     = 140;
    const _DAMAGE_CON_HEIGHT    = 60;

    export class BwCursorView extends eui.Group {
        private _cursor                 : BwCursor;
        private _mapSize                : Types.MapSize;
        private _actionPlanner          : BwActionPlanner;
        private _frameIndexForImgTarget = 0;

        private _currGlobalTouchPoints      = new Map<number, Types.Point>();
        private _prevGlobalTouchPoints      = new Map<number, Types.Point>();
        private _touchIdForTouchingCursor   : number;
        private _initialGlobalTouchPoint    : Types.Point;
        private _isTouchMovedOrMultiple     : boolean;

        private _conForAll              = new egret.DisplayObjectContainer();
        private _conForNormal           = new egret.DisplayObjectContainer();
        private _conForTarget           = new egret.DisplayObjectContainer();
        private _conForSiloArea         = new egret.DisplayObjectContainer();
        private _conForDamage           = new egret.DisplayObjectContainer();
        private _imgUpperLeftCorner     = new GameUi.UiImage(_IMG_SOURCE_FOR_NORMAL_CORNER);
        private _imgUpperRightCorner    = new GameUi.UiImage(_IMG_SOURCE_FOR_NORMAL_CORNER);
        private _imgLowerLeftCorner     = new GameUi.UiImage(_IMG_SOURCE_FOR_NORMAL_CORNER);
        private _imgLowerRightCorner    = new GameUi.UiImage(_IMG_SOURCE_FOR_NORMAL_CORNER);
        private _imgTarget              = new GameUi.UiImage(_IMG_SOURCES_FOR_TARGET[this._frameIndexForImgTarget]);
        private _imgSiloArea            = new GameUi.UiImage(`c04_t03_s03_f01`);
        private _labelDamage            = new GameUi.UiLabel();

        public constructor() {
            super();

            this.addChild(this._conForAll);
            this._initConForNormal();
            this._initConForTarget();
            this._initConForSiloArea();
            this._initConForDamage();
        }

        public init(cursor: BwCursor): void {
            if (!this._cursor) {
                this._cursor    = cursor;
                this._mapSize   = cursor.getMapSize();
                this.width      = this._mapSize.width * _GRID_WIDTH;
                this.height     = this._mapSize.height * _GRID_HEIGHT;
            }
        }
        public fastInit(cursor: BwCursor): void {
            this._cursor = cursor;
        }

        public startRunningView(): void {
            const field         = this._cursor.getWar().getField();
            this._actionPlanner = field.getActionPlanner();

            Notify.addEventListener(Notify.Type.ZoomableContentsMoved, this._onNotifyZoomableContentsMoved, this);
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,             this._onTouchBegin,             this);
            this.addEventListener(egret.TouchEvent.TOUCH_CANCEL,            this._onTouchCancel,            this);
            this.addEventListener(egret.TouchEvent.TOUCH_END,               this._onTouchEnd,               this);
            this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,   this._onTouchReleaseOutside,    this);

            this.updateView();

            this._startNormalAnimation();
            this._startTargetAnimation();
        }
        public stopRunningView(): void {
            this._stopNormalAnimation();
            this._stopTargetAnimation();

            Notify.removeEventListener(Notify.Type.ZoomableContentsMoved, this._onNotifyZoomableContentsMoved, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,              this._onTouchBegin,             this);
            this.removeEventListener(egret.TouchEvent.TOUCH_CANCEL,             this._onTouchCancel,            this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END,                this._onTouchEnd,               this);
            this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,    this._onTouchReleaseOutside,    this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,               this._onTouchMove,              this);
            this._currGlobalTouchPoints.clear();
            this._prevGlobalTouchPoints.clear();
            this._initialGlobalTouchPoint   = null;
            this._isTouchMovedOrMultiple    = null;
            this._touchIdForTouchingCursor  = null;
            this._cursor                    = null;
        }

        public updateView(): void {
            this._updatePos();
            this._updateConForNormal();
            this._updateConForTarget();
            this._updateConForSiloArea();
            this._updateConForDamage();
        }

        public setVisibleForConForNormal(visible: boolean): void {
            this._conForNormal.visible = visible;
        }
        public setVisibleForConForTarget(visible: boolean): void {
            this._conForTarget.visible = visible;
        }
        public setVisibleForConForSiloArea(visible: boolean): void {
            this._conForSiloArea.visible = visible;
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        // Callbacks.
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        private _onNotifyZoomableContentsMoved(e: egret.Event): void {
            const touchPoints = this._currGlobalTouchPoints;
            if ((this._touchIdForTouchingCursor != null) && (touchPoints.size === 1)) {
                const point         = touchPoints.values().next().value as Types.Point;
                const gridIndex     = this._getGridIndexByGlobalXY(point.x, point.y);
                const currGridIndex = this._cursor.getGridIndex();
                if (!GridIndexHelpers.checkIsEqual(gridIndex, currGridIndex)) {
                    this._isTouchMovedOrMultiple = true;
                    Notify.dispatch(Notify.Type.BwCursorDragged, {
                        current     : currGridIndex,
                        draggedTo   : gridIndex,
                    } as Notify.Data.BwCursorDragged);
                }
            }
        }

        private _onTouchBegin(e: egret.TouchEvent): void {
            const touchId   = e.touchPointID;
            if (this._currGlobalTouchPoints.size <= 0) {
                this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
                this._initialGlobalTouchPoint   = { x: e.stageX, y: e.stageY };
                this._isTouchMovedOrMultiple    = false;
                this._touchIdForTouchingCursor  = GridIndexHelpers.checkIsEqual(this._cursor.getGridIndex(), this._getGridIndexByLocalXY(e.localX, e.localY))
                    ? touchId
                    : undefined
            }

            if (this._currGlobalTouchPoints.size <= 1) {
                this._currGlobalTouchPoints.set(touchId, { x: e.stageX, y: e.stageY });
                this._prevGlobalTouchPoints.set(touchId, { x: e.stageX, y: e.stageY });
            }
            if (this._currGlobalTouchPoints.size >= 2) {
                this._isTouchMovedOrMultiple = true;
            }
        }
        private _onTouchEnd(e: egret.TouchEvent): void {
            this._removeTouch(e.touchPointID);
        }
        private _onTouchCancel(e: egret.TouchEvent): void {
            this._removeTouch(e.touchPointID);
        }
        private _onTouchReleaseOutside(e: egret.TouchEvent): void {
            this._removeTouch(e.touchPointID);
        }
        private _onTouchMove(e: egret.TouchEvent): void {
            const touchId               = e.touchPointID;
            const currGlobalTouchPoints = this._currGlobalTouchPoints;
            if (currGlobalTouchPoints.has(touchId)) {
                this._isTouchMovedOrMultiple = (this._isTouchMovedOrMultiple)
                    || (Helpers.getSquaredPointDistance(e.stageX, e.stageY, this._initialGlobalTouchPoint.x, this._initialGlobalTouchPoint.y) > _DRAG_FIELD_SQUARED_TRIGGER_DISTANCE);
                currGlobalTouchPoints.set(touchId, { x: e.stageX, y: e.stageY });

                if (currGlobalTouchPoints.size > 1) {
                    Notify.dispatch(Notify.Type.BwFieldZoomed, {
                        current : currGlobalTouchPoints,
                        previous: this._prevGlobalTouchPoints,
                    } as Notify.Data.BwFieldZoomed);
                } else {
                    if (this._touchIdForTouchingCursor != null) {
                        const gridIndex     = this._getGridIndexByLocalXY(e.localX, e.localY);
                        const currGridIndex = this._cursor.getGridIndex();
                        if (!GridIndexHelpers.checkIsEqual(gridIndex, currGridIndex)) {
                            this._isTouchMovedOrMultiple = true;
                            Notify.dispatch(Notify.Type.BwCursorDragged, {
                                current     : currGridIndex,
                                draggedTo   : gridIndex,
                            } as Notify.Data.BwCursorDragged);
                        }
                    } else {
                        if (this._isTouchMovedOrMultiple) {
                            Notify.dispatch(Notify.Type.BwFieldDragged, {
                                current : currGlobalTouchPoints.values().next().value,
                                previous: this._prevGlobalTouchPoints.values().next().value,
                            } as Notify.Data.BwFieldDragged);
                        }
                    }
                }

                this._prevGlobalTouchPoints.set(touchId, { x: e.stageX, y: e.stageY });
            }
        }
        private _removeTouch(touchId: number): void {
            this._prevGlobalTouchPoints.delete(touchId);

            const currGlobalTouchPoints = this._currGlobalTouchPoints;
            if (currGlobalTouchPoints.has(touchId)) {
                currGlobalTouchPoints.delete(touchId);

                const hasTouchedCursor = this._touchIdForTouchingCursor != null;
                if (!currGlobalTouchPoints.has(this._touchIdForTouchingCursor)) {
                    this._touchIdForTouchingCursor = null;
                }
                if (!currGlobalTouchPoints.size) {
                    this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
                    if (!this._isTouchMovedOrMultiple) {
                        Notify.dispatch(Notify.Type.BwCursorTapped, {
                            current : this._cursor.getGridIndex(),
                            tappedOn: this._getGridIndexByGlobalXY(this._initialGlobalTouchPoint.x, this._initialGlobalTouchPoint.y),
                        } as Notify.Data.BwCursorTapped);
                    } else {
                        if (hasTouchedCursor) {
                            Notify.dispatch(Notify.Type.BwCursorDragEnded);
                        }
                    }
                    this._initialGlobalTouchPoint = null;
                }
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        // Functions for view.
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        private _updatePos(): void {
            this._conForAll.x = this._cursor.getGridX() * _GRID_WIDTH;
            this._conForAll.y = this._cursor.getGridY() * _GRID_HEIGHT;
        }

        private _updateConForNormal(): void {
            const actionPlanner = this._actionPlanner;
            if (actionPlanner) {
                const con       = this._conForNormal;
                const gridIndex = this._cursor.getGridIndex();
                const state     = actionPlanner.getState();

                if (state === ActionPlannerState.Idle) {
                    con.visible = true;

                } else if (state === ActionPlannerState.ExecutingAction) {
                    con.visible = true;

                } else if (state === ActionPlannerState.MakingMovePath) {
                    con.visible = !actionPlanner.getFocusUnit().checkCanAttackTargetAfterMovePath(actionPlanner.getMovePath(), gridIndex);

                } else if (state === ActionPlannerState.ChoosingAction) {
                    con.visible = true;

                } else if (state === ActionPlannerState.ChoosingAttackTarget) {
                    con.visible = !actionPlanner.checkHasAttackableGridAfterMove(gridIndex);

                } else if (state === ActionPlannerState.ChoosingDropDestination) {
                    con.visible = true;

                } else if (state === ActionPlannerState.ChoosingFlareDestination) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ChoosingSiloDestination) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ChoosingProductionTarget) {
                    con.visible = true;

                } else if (state === ActionPlannerState.PreviewingAttackableArea) {
                    con.visible = true;

                } else if (state === ActionPlannerState.PreviewingMovableArea) {
                    con.visible = true;

                } else {
                    // TODO
                }
            }
        }
        private _updateConForTarget(): void {
            const actionPlanner = this._actionPlanner;
            if (actionPlanner) {
                const con       = this._conForTarget;
                const gridIndex = this._cursor.getGridIndex();
                const state     = actionPlanner.getState();

                if (state === ActionPlannerState.Idle) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ExecutingAction) {
                    con.visible = false;

                } else if (state === ActionPlannerState.MakingMovePath) {
                    con.visible = actionPlanner.getFocusUnit().checkCanAttackTargetAfterMovePath(actionPlanner.getMovePath(), gridIndex);

                } else if (state === ActionPlannerState.ChoosingAction) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ChoosingAttackTarget) {
                    con.visible = actionPlanner.checkHasAttackableGridAfterMove(gridIndex);

                } else if (state === ActionPlannerState.ChoosingDropDestination) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ChoosingFlareDestination) {
                    con.visible = true;

                } else if (state === ActionPlannerState.ChoosingSiloDestination) {
                    con.visible = true;

                } else if (state === ActionPlannerState.ChoosingProductionTarget) {
                    con.visible = false;

                } else if (state === ActionPlannerState.PreviewingAttackableArea) {
                    con.visible = false;

                } else if (state === ActionPlannerState.PreviewingMovableArea) {
                    con.visible = false;

                } else {
                    // TODO
                }
            }
        }
        private _updateConForSiloArea(): void {
            const actionPlanner = this._actionPlanner;
            if (actionPlanner) {
                const con       = this._conForSiloArea;
                const gridIndex = this._cursor.getGridIndex();
                const state     = actionPlanner.getState();

                if (state === ActionPlannerState.Idle) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ExecutingAction) {
                    con.visible = false;

                } else if (state === ActionPlannerState.MakingMovePath) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ChoosingAction) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ChoosingAttackTarget) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ChoosingDropDestination) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ChoosingFlareDestination) {
                    con.visible = true;

                } else if (state === ActionPlannerState.ChoosingSiloDestination) {
                    con.visible = true;

                } else if (state === ActionPlannerState.ChoosingProductionTarget) {
                    con.visible = false;

                } else if (state === ActionPlannerState.PreviewingAttackableArea) {
                    con.visible = false;

                } else if (state === ActionPlannerState.PreviewingMovableArea) {
                    con.visible = false;

                } else {
                    // TODO
                }
            }
        }
        private _updateConForDamage(): void {
            const actionPlanner = this._getActionPlanner();
            const con           = this._getConForDamage();
            if (!actionPlanner) {
                con.visible = false;
            } else {
                const cursor        = this._getCursor();
                const gridIndex     = cursor.getGridIndex();
                const labelDamage   = this._getLabelDamage();
                const state         = actionPlanner.getState();

                if (state === ActionPlannerState.Idle) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ExecutingAction) {
                    con.visible = false;

                } else if (state === ActionPlannerState.MakingMovePath) {
                    const war                           = cursor.getWar();
                    const focusUnitLoaded               = actionPlanner.getFocusUnitLoaded();
                    const [attackDamage, counterDamage] = DamageCalculator.getEstimatedBattleDamage(
                        war,
                        actionPlanner.getMovePath(),
                        focusUnitLoaded ? focusUnitLoaded.getUnitId() : undefined,
                        gridIndex
                    );
                    if (attackDamage == null) {
                        con.visible = false;
                    } else {
                        con.visible = true;
                        const target = war.getUnitMap().getUnitOnMap(gridIndex) || war.getTileMap().getTile(gridIndex);
                        labelDamage.text = `${Lang.getText(Lang.Type.B0077)}: ${attackDamage} / ${target.getCurrentHp()}\n`
                            + `${Lang.getText(Lang.Type.B0078)}: ${counterDamage == null ? `---` : counterDamage} / ${(actionPlanner.getFocusUnit()).getCurrentHp()}`;
                        this._updatePositionForConForDamage();
                    }

                } else if (state === ActionPlannerState.ChoosingAction) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ChoosingAttackTarget) {
                    const war                           = cursor.getWar();
                    const focusUnitLoaded               = actionPlanner.getFocusUnitLoaded();
                    const [attackDamage, counterDamage] = DamageCalculator.getEstimatedBattleDamage(
                        war,
                        actionPlanner.getMovePath(),
                        focusUnitLoaded ? focusUnitLoaded.getUnitId() : undefined,
                        gridIndex
                    );
                    if (attackDamage == null) {
                        con.visible = false;
                    } else {
                        con.visible         = true;
                        const target        = war.getUnitMap().getUnitOnMap(gridIndex) || war.getTileMap().getTile(gridIndex);
                        labelDamage.text    = `${Lang.getText(Lang.Type.B0077)}: ${attackDamage} / ${target.getCurrentHp()}\n`
                            + `${Lang.getText(Lang.Type.B0078)}: ${counterDamage == null ? `---` : counterDamage} / ${(actionPlanner.getFocusUnit()).getCurrentHp()}`;
                        this._updatePositionForConForDamage();
                    }

                } else if (state === ActionPlannerState.ChoosingDropDestination) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ChoosingFlareDestination) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ChoosingSiloDestination) {
                    con.visible = false;

                } else if (state === ActionPlannerState.ChoosingProductionTarget) {
                    con.visible = false;

                } else if (state === ActionPlannerState.PreviewingAttackableArea) {
                    con.visible = false;

                } else if (state === ActionPlannerState.PreviewingMovableArea) {
                    con.visible = false;

                } else {
                    // TODO
                }
            }
        }

        private _initConForNormal(): void {
            this._imgUpperLeftCorner.x = _UPPER_LEFT_CORNER_OUTER_X;
            this._imgUpperLeftCorner.y = _UPPER_LEFT_CORNER_OUTER_Y;
            this._conForNormal.addChild(this._imgUpperLeftCorner);

            this._imgUpperRightCorner.x         = _UPPER_RIGHT_CORNER_OUTER_X;
            this._imgUpperRightCorner.y         = _UPPER_RIGHT_CORNER_OUTER_Y;
            this._imgUpperRightCorner.rotation  = 90;
            this._conForNormal.addChild(this._imgUpperRightCorner);

            this._imgLowerLeftCorner.x          = _LOWER_LEFT_CORNER_OUTER_X;
            this._imgLowerLeftCorner.y          = _LOWER_LEFT_CORNER_OUTER_Y;
            this._imgLowerLeftCorner.rotation   = -90;
            this._conForNormal.addChild(this._imgLowerLeftCorner);

            this._imgLowerRightCorner.x         = _LOWER_RIGHT_CORNER_OUTER_X;
            this._imgLowerRightCorner.y         = _LOWER_RIGHT_CORNER_OUTER_Y;
            this._imgLowerRightCorner.rotation  = 180;
            this._conForNormal.addChild(this._imgLowerRightCorner);

            this._conForAll.addChild(this._conForNormal);
        }
        private _initConForTarget(): void {
            this._imgTarget.x = -_GRID_WIDTH;
            this._imgTarget.y = -_GRID_HEIGHT;
            this._conForTarget.addChild(this._imgTarget);

            this._conForAll.addChild(this._conForTarget);
        }
        private _initConForSiloArea(): void {
            this._imgSiloArea.x = -_GRID_WIDTH * 2;
            this._imgSiloArea.y = -_GRID_HEIGHT * 2;
            this._conForSiloArea.addChild(this._imgSiloArea);

            this._conForAll.addChild(this._conForSiloArea);
        }
        private _initConForDamage(): void {
            const imgBg         = new GameUi.UiImage("c04_t01_s02_f01");
            imgBg.scale9Grid    = new egret.Rectangle(9, 9, 2, 2);
            imgBg.width         = _DAMAGE_CON_WIDTH;
            imgBg.height        = _DAMAGE_CON_HEIGHT;
            imgBg.alpha         = 0.9;
            this._conForDamage.addChild(imgBg);

            const labelDamage           = this._labelDamage;
            labelDamage.size            = 18;
            labelDamage.width           = _DAMAGE_CON_WIDTH;
            labelDamage.height          = _DAMAGE_CON_HEIGHT;
            labelDamage.textAlign       = egret.HorizontalAlign.CENTER;
            labelDamage.verticalAlign   = egret.VerticalAlign.MIDDLE;
            this._conForDamage.addChild(labelDamage);

            this._conForDamage.x = (_GRID_WIDTH - _DAMAGE_CON_WIDTH) / 2;
            this._conForDamage.y = -_DAMAGE_CON_HEIGHT;
            this._conForAll.addChild(this._conForDamage);
        }

        private _startNormalAnimation(): void {
            this._stopNormalAnimation();

            egret.Tween.get(this._imgUpperLeftCorner, { loop: true })
                .set({ x: _UPPER_LEFT_CORNER_OUTER_X, y: _UPPER_LEFT_CORNER_OUTER_Y })
                .to({ x: _UPPER_LEFT_CORNER_INNER_X, y: _UPPER_LEFT_CORNER_INNER_Y }, _PULSE_IN_DURATION)
                .to({ x: _UPPER_LEFT_CORNER_OUTER_X, y: _UPPER_LEFT_CORNER_OUTER_Y }, _PULSE_OUT_DURATION)
                .wait(_PULSE_INTERVAL_DURATION);

            egret.Tween.get(this._imgUpperRightCorner, { loop: true })
                .set({ x: _UPPER_RIGHT_CORNER_OUTER_X, y: _UPPER_RIGHT_CORNER_OUTER_Y })
                .to({ x: _UPPER_RIGHT_CORNER_INNER_X, y: _UPPER_RIGHT_CORNER_INNER_Y }, _PULSE_IN_DURATION)
                .to({ x: _UPPER_RIGHT_CORNER_OUTER_X, y: _UPPER_RIGHT_CORNER_OUTER_Y }, _PULSE_OUT_DURATION)
                .wait(_PULSE_INTERVAL_DURATION);

            egret.Tween.get(this._imgLowerLeftCorner, { loop: true })
                .set({ x: _LOWER_LEFT_CORNER_OUTER_X, y: _LOWER_LEFT_CORNER_OUTER_Y })
                .to({ x: _LOWER_LEFT_CORNER_INNER_X, y: _LOWER_LEFT_CORNER_INNER_Y }, _PULSE_IN_DURATION)
                .to({ x: _LOWER_LEFT_CORNER_OUTER_X, y: _LOWER_LEFT_CORNER_OUTER_Y }, _PULSE_OUT_DURATION)
                .wait(_PULSE_INTERVAL_DURATION);

            egret.Tween.get(this._imgLowerRightCorner, { loop: true })
                .set({ x: _LOWER_RIGHT_CORNER_OUTER_X, y: _LOWER_RIGHT_CORNER_OUTER_Y })
                .to({ x: _LOWER_RIGHT_CORNER_INNER_X, y: _LOWER_RIGHT_CORNER_INNER_Y }, _PULSE_IN_DURATION)
                .to({ x: _LOWER_RIGHT_CORNER_OUTER_X, y: _LOWER_RIGHT_CORNER_OUTER_Y }, _PULSE_OUT_DURATION)
                .wait(_PULSE_INTERVAL_DURATION);
        }
        private _stopNormalAnimation(): void {
            egret.Tween.removeTweens(this._imgUpperLeftCorner);
            egret.Tween.removeTweens(this._imgUpperRightCorner);
            egret.Tween.removeTweens(this._imgLowerLeftCorner);
            egret.Tween.removeTweens(this._imgLowerRightCorner);
        }

        private _startTargetAnimation(): void {
            this._stopTargetAnimation();

            const totalFramesCount = _IMG_SOURCES_FOR_TARGET.length;
            egret.Tween.get(this._imgTarget, { loop: true })
                .wait(_TARGET_FRAME_DURATION)
                .call(() => {
                    ++this._frameIndexForImgTarget;
                    (this._frameIndexForImgTarget >= totalFramesCount) && (this._frameIndexForImgTarget = 0);
                    this._imgTarget.source = _IMG_SOURCES_FOR_TARGET[this._frameIndexForImgTarget];
                });
        }
        private _stopTargetAnimation(): void {
            this._frameIndexForImgTarget = 0;
            egret.Tween.removeTweens(this._imgTarget);
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        // Utils.
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        private _getGridXByLocalX(localX: number): number {
            let gridX = Math.floor(localX / _GRID_WIDTH);
            gridX = Math.max(gridX, 0);
            gridX = Math.min(gridX, this._mapSize.width - 1);
            return gridX;
        }
        private _getGridYByLocalY(localY: number): number {
            let gridY = Math.floor(localY / _GRID_HEIGHT);
            gridY = Math.max(gridY, 0);
            gridY = Math.min(gridY, this._mapSize.height - 1);
            return gridY;
        }
        private _getGridIndexByLocalXY(localX: number, localY: number): GridIndex {
            return { x: this._getGridXByLocalX(localX), y: this._getGridYByLocalY(localY) };
        }
        private _getGridIndexByGlobalXY(globalX: number, globalY: number): GridIndex {
            const point = this.globalToLocal(globalX, globalY);
            return this._getGridIndexByLocalXY(point.x, point.y);
        }

        protected _getCursor(): BwCursor {
            return this._cursor;
        }
        protected _getConForDamage(): egret.DisplayObjectContainer {
            return this._conForDamage;
        }
        protected _getLabelDamage(): GameUi.UiLabel {
            return this._labelDamage;
        }
        protected _getActionPlanner(): BwActionPlanner {
            return this._actionPlanner;
        }

        protected _updatePositionForConForDamage(): void {
            this._getConForDamage().y = (this._getCursor().getGridY() <= 0)
                ? _GRID_HEIGHT
                : -_DAMAGE_CON_HEIGHT;
        }
    }
}
