
namespace TinyWars.MultiFreeRoom {
    import Lang         = Utility.Lang;
    import Notify       = Utility.Notify;
    import ProtoTypes   = Utility.ProtoTypes;
    import MpwProxy     = MultiPlayerWar.MpwProxy;
    import IMpwWarInfo  = ProtoTypes.MultiPlayerWar.IMpwWarInfo;

    type OpenDataForMfrWarInfoPanel = {
        warInfo: IMpwWarInfo;
    }
    export class MfrWarInfoPanel extends GameUi.UiPanel<OpenDataForMfrWarInfoPanel> {
        protected readonly _LAYER_TYPE   = Utility.Types.LayerType.Scene;
        protected readonly _IS_EXCLUSIVE = true;

        private static _instance: MfrWarInfoPanel;

        private _tabSettings    : TinyWars.GameUi.UiTab<DataForTabItemRenderer>;
        private _labelMenuTitle : TinyWars.GameUi.UiLabel;
        private _btnContinueWar : TinyWars.GameUi.UiButton;
        private _btnBack        : TinyWars.GameUi.UiButton;

        public static show(openData: OpenDataForMfrWarInfoPanel): void {
            if (!MfrWarInfoPanel._instance) {
                MfrWarInfoPanel._instance = new MfrWarInfoPanel();
            }
            MfrWarInfoPanel._instance.open(openData);
        }
        public static async hide(): Promise<void> {
            if (MfrWarInfoPanel._instance) {
                await MfrWarInfoPanel._instance.close();
            }
        }

        public constructor() {
            super();

            this.skinName = "resource/skins/multiFreeRoom/MfrWarInfoPanel.exml";
        }

        protected _onOpened(): void {
            this._setUiListenerArray([
                { ui: this._btnBack,        callback: this._onTouchedBtnBack },
                { ui: this._btnContinueWar, callback: this._onTouchedBtnStartGame },
            ]);
            this._setNotifyListenerArray([
                { type: Notify.Type.LanguageChanged,    callback: this._onNotifyLanguageChanged },
            ]);
            this._tabSettings.setBarItemRenderer(TabItemRenderer);

            this._btnBack.setTextColor(0x00FF00);
            this._btnContinueWar.setTextColor(0x00FF00);

            const warInfo = this._getOpenData().warInfo;
            this._tabSettings.bindData([
                {
                    tabItemData : { name: Lang.getText(Lang.Type.B0002) },
                    pageClass   : MfrWarBasicSettingsPage,
                    pageData    : {
                        warInfo
                    } as OpenDataForMfrWarBasicSettingsPage,
                },
                {
                    tabItemData: { name: Lang.getText(Lang.Type.B0003) },
                    pageClass  : MfrWarAdvancedSettingsPage,
                    pageData    : {
                        warInfo
                    } as OpenDataForMfrWarAdvancedSettingsPage,
                },
            ]);

            this._updateComponentsForLanguage();
        }

        protected async _onClosed(): Promise<void> {
            this._tabSettings.clear();
        }

        ////////////////////////////////////////////////////////////////////////////////
        // Event callbacks.
        ////////////////////////////////////////////////////////////////////////////////
        private _onTouchedBtnBack(e: egret.TouchEvent): void {
            this.close();
            MfrMyWarListPanel.show();
        }

        private _onTouchedBtnStartGame(e: egret.TouchEvent): void {
            const warInfo = this._getOpenData().warInfo;
            if (warInfo) {
                MpwProxy.reqMpwCommonContinueWar(warInfo.warId);
            }
        }

        private _onNotifyLanguageChanged(e: egret.Event): void {
            this._updateComponentsForLanguage();
        }

        ////////////////////////////////////////////////////////////////////////////////
        // View functions.
        ////////////////////////////////////////////////////////////////////////////////
        private _updateComponentsForLanguage(): void {
            this._labelMenuTitle.text   = Lang.getText(Lang.Type.B0024);
            this._btnBack.label         = Lang.getText(Lang.Type.B0146);
            this._btnContinueWar.label  = Lang.getText(Lang.Type.B0401);
        }
    }

    type DataForTabItemRenderer = {
        name: string;
    }

    class TabItemRenderer extends GameUi.UiTabItemRenderer<DataForTabItemRenderer> {
        private _labelName: GameUi.UiLabel;

        protected dataChanged(): void {
            const data = this.data.tabItemData;
            this._labelName.text = data.name;
        }
    }
}
