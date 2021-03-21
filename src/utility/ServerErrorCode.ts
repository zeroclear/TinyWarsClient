
namespace TinyWars.Utility {
export const enum ServerErrorCode {
    NoError = 0,

    ServerDisconnect0001,               // 服务器维护

    MpwManager0000,
    MpwManager0001,
    MpwManager0002,
    MpwManager0003,
    MpwManager0004,
    MpwManager0005,
    MpwManager0006,
    MpwManager0007,

    ReplayManager0000,
    ReplayManager0001,

    BwRandomNumberManager0000,
    BwRandomNumberManager0001,

    BwDrawVoteManagerInit0000,

    BwPlayerManagerInit0000,
    BwPlayerManagerInit0001,
    BwPlayerManagerInit0002,
    BwPlayerManagerInit0003,
    BwPlayerManagerInit0004,
    BwPlayerManagerInit0005,
    BwPlayerManagerInit0006,

    BwFogMapInit0000,
    BwFogMapInit0001,
    BwFogMapInit0002,
    BwFogMapInit0003,
    BwFogMapInit0004,
    BwFogMapInit0005,
    BwFogMapInit0006,
    BwFogMapInit0007,

    BwFogMapResetMapFromPath0000,
    BwFogMapResetMapFromPath0001,
    BwFogMapResetMapFromPath0002,
    BwFogMapResetMapFromPath0003,

    BwTileMapInit0000,
    BwTileMapInit0001,
    BwTileMapInit0002,
    BwTileMapInit0003,
    BwTileMapInit0004,
    BwTileMapInit0005,
    BwTileMapInit0006,

    BwUnitMapInit0000,
    BwUnitMapInit0001,
    BwUnitMapInit0002,
    BwUnitMapInit0003,
    BwUnitMapInit0004,
    BwUnitMapInit0005,
    BwUnitMapInit0006,
    BwUnitMapInit0007,
    BwUnitMapInit0008,
    BwUnitMapInit0009,
    BwUnitMapInit0010,
    BwUnitMapInit0011,
    BwUnitMapInit0012,
    BwUnitMapInit0013,
    BwUnitMapInit0014,
    BwUnitMapInit0015,
    BwUnitMapInit0016,
    BwUnitMapInit0017,

    BwUnitInit0000,
    BwUnitInit0001,
    BwUnitInit0002,
    BwUnitInit0003,
    BwUnitInit0004,
    BwUnitInit0005,

    BwTileDeserialize0000,
    BwTileDeserialize0001,
    BwTileDeserialize0002,
    BwTileDeserialize0003,
    BwTileDeserialize0004,
    BwTileDeserialize0005,
    BwTileDeserialize0006,
    BwTileDeserialize0007,
    BwTileDeserialize0008,
    BwTileDeserialize0009,
    BwTileDeserialize0010,
    BwTileDeserialize0011,
    BwTileDeserialize0012,
    BwTileDeserialize0013,
    BwTileDeserialize0014,

    BwPlayerInit0000,
    BwPlayerInit0001,
    BwPlayerInit0002,
    BwPlayerInit0003,
    BwPlayerInit0004,
    BwPlayerInit0005,
    BwPlayerInit0006,
    BwPlayerInit0007,
    BwPlayerInit0008,
    BwPlayerInit0009,
    BwPlayerInit0010,
    BwPlayerInit0011,
    BwPlayerInit0012,
    BwPlayerInit0013,

    BwFieldInit0000,
    BwFieldInit0001,
    BwFieldInit0002,
    BwFieldInit0003,

    BwCommonSettingManagerInit0000,
    BwCommonSettingManagerInit0001,
    BwCommonSettingManagerInit0002,
    BwCommonSettingManagerInit0003,
    BwCommonSettingManagerInit0004,
    BwCommonSettingManagerInit0005,
    BwCommonSettingManagerInit0006,
    BwCommonSettingManagerInit0007,
    BwCommonSettingManagerInit0008,
    BwCommonSettingManagerInit0009,
    BwCommonSettingManagerInit0010,
    BwCommonSettingManagerInit0011,
    BwCommonSettingManagerInit0012,
    BwCommonSettingManagerInit0013,

    BwTurnManagerInit0000,
    BwTurnManagerInit0001,
    BwTurnManagerInit0002,
    BwTurnManagerInit0003,
    BwTurnManagerInit0004,

    StoreForMapExtraData0000,
    StoreForMapExtraData0001,
    StoreForMapExtraData0002,

    StoreForMpwOngoingWar0000,
    StoreForMpwOngoingWar0001,

    StoreForReplay0000,
    StoreForReplay0001,
    StoreForReplay0002,
    StoreForReplay0003,

    StoreForScwOngoingWar0000,
    StoreForScwOngoingWar0001,

    User0000,
    User0001,

    UserManager0000,
    UserManager0001,
    UserManager0002,
    UserManager0003,
    UserManager0004,
    UserManager0005,
    UserManager0006,
    UserManager0007,
    UserManager0008,
    UserManager0009,
    UserManager0010,
    UserManager0011,

    MapManager0000,
    MapManager0001,
    MapManager0002,
    MapManager0003,
    MapManager0004,
    MapManager0005,
    MapManager0006,
    MapManager0007,
    MapManager0008,
    MapManager0009,
    MapManager0010,
    MapManager0011,
    MapManager0012,
    MapManager0013,
    MapManager0014,
    MapManager0015,
    MapManager0016,
    MapManager0017,

    McrManager0000,
    McrManager0001,
    McrManager0002,
    McrManager0003,
    McrManager0004,
    McrManager0005,
    McrManager0006,
    McrManager0007,
    McrManager0008,
    McrManager0009,
    McrManager0010,

    MfrManager0000,
    MfrManager0001,
    MfrManager0002,
    MfrManager0003,
    MfrManager0004,
    MfrManager0005,
    MfrManager0006,
    MfrManager0007,

    BwWarBaseInit0000,
    BwWarBaseInit0001,
    BwWarBaseInit0002,
    BwWarBaseInit0003,
    BwWarBaseInit0004,

    MrwWarInit0000,
    MrwWarInit0001,
    MrwWarInit0002,
    MrwWarInit0003,
    MrwWarInit0004,
    MrwWarInit0005,
    MrwWarInit0006,
    MrwWarInit0007,
    MrwWarInit0008,
    MrwWarInit0009,

    McwWarInit0000,
    McwWarInit0001,
    McwWarInit0002,
    McwWarInit0003,
    McwWarInit0004,
    McwWarInit0005,
    McwWarInit0006,
    McwWarInit0007,
    McwWarInit0008,
    McwWarInit0009,

    MfwWarInit0000,

    MpwWarBaseInit0000,

    TwWarInitByMapRawData0000,

    WarEventFullDataValidation0000,
    WarEventFullDataValidation0001,
    WarEventFullDataValidation0002,
    WarEventFullDataValidation0003,
    WarEventFullDataValidation0004,
    WarEventFullDataValidation0005,
    WarEventFullDataValidation0006,
    WarEventFullDataValidation0007,
    WarEventFullDataValidation0008,
    WarEventFullDataValidation0009,
    WarEventFullDataValidation0010,
    WarEventFullDataValidation0011,
    WarEventFullDataValidation0012,
    WarEventFullDataValidation0013,
    WarEventFullDataValidation0014,
    WarEventFullDataValidation0015,
    WarEventFullDataValidation0016,

    WarRuleValidation0000,
    WarRuleValidation0001,
    WarRuleValidation0002,
    WarRuleValidation0003,
    WarRuleValidation0004,
    WarRuleValidation0005,
    WarRuleValidation0006,
    WarRuleValidation0007,
    WarRuleValidation0008,
    WarRuleValidation0009,

    WarRuleGlobalParamsValidation0000,

    PlayerRuleValidation0000,
    PlayerRuleValidation0001,
    PlayerRuleValidation0002,
    PlayerRuleValidation0003,
    PlayerRuleValidation0004,
    PlayerRuleValidation0005,
    PlayerRuleValidation0006,
    PlayerRuleValidation0007,
    PlayerRuleValidation0008,
    PlayerRuleValidation0009,
    PlayerRuleValidation0010,
    PlayerRuleValidation0011,
    PlayerRuleValidation0012,
    PlayerRuleValidation0013,
    PlayerRuleValidation0014,

    UnitDataValidation0000,
    UnitDataValidation0001,
    UnitDataValidation0002,
    UnitDataValidation0003,
    UnitDataValidation0004,
    UnitDataValidation0005,
    UnitDataValidation0006,
    UnitDataValidation0007,
    UnitDataValidation0008,
    UnitDataValidation0009,
    UnitDataValidation0010,
    UnitDataValidation0011,
    UnitDataValidation0012,
    UnitDataValidation0013,
    UnitDataValidation0014,
    UnitDataValidation0015,
    UnitDataValidation0016,

    MapRawDataValidation0000,
    MapRawDataValidation0001,
    MapRawDataValidation0002,
    MapRawDataValidation0003,
    MapRawDataValidation0004,
    MapRawDataValidation0005,
    MapRawDataValidation0006,
    MapRawDataValidation0007,
    MapRawDataValidation0008,

    IllegalRequest0000,
    IllegalRequest0001,
    IllegalRequest0002,
    IllegalRequest0003,

    MsgBroadcastAddMessage0000,
    MsgBroadcastAddMessage0001,
    MsgBroadcastAddMessage0002,
    MsgBroadcastAddMessage0003,
    MsgBroadcastAddMessage0004,
    MsgBroadcastAddMessage0005,
    MsgBroadcastAddMessage0006,

    MsgBroadcastDeleteMessage0000,
    MsgBroadcastDeleteMessage0001,
    MsgBroadcastDeleteMessage0002,
    MsgBroadcastDeleteMessage0003,

    MsgBroadcastDoBroadcast0000,
    MsgBroadcastDoBroadcast0001,

    MsgBroadcastGetMessageList0000,

    MsgChangeLogAddMessage0000,
    MsgChangeLogAddMessage0001,
    MsgChangeLogAddMessage0002,
    MsgChangeLogAddMessage0003,

    MsgChangeLogModifyMessage0000,
    MsgChangeLogModifyMessage0001,
    MsgChangeLogModifyMessage0002,
    MsgChangeLogModifyMessage0003,
    MsgChangeLogModifyMessage0004,

    MsgChangeLogGetMessageList0000,

    MsgChatAddMessage0000,
    MsgChatAddMessage0001,
    MsgChatAddMessage0002,
    MsgChatAddMessage0003,
    MsgChatAddMessage0004,

    MsgChatUpdateReadProgress0000,
    MsgChatUpdateReadProgress0001,
    MsgChatUpdateReadProgress0002,
    MsgChatUpdateReadProgress0003,
    MsgChatUpdateReadProgress0004,
    MsgChatUpdateReadProgress0005,
    MsgChatUpdateReadProgress0006,
    MsgChatUpdateReadProgress0007,
    MsgChatUpdateReadProgress0008,

    MsgMapGetBriefData0000,
    MsgMapGetBriefData0001,
    MsgMapGetBriefData0002,

    MsgMapGetEnabledBriefDataList0000,
    MsgMapGetEnabledBriefDataList0001,

    MsgMapGetEnabledRawDataList0000,
    MsgMapGetEnabledRawDataList0001,

    MsgMapGetRawData0000,
    MsgMapGetRawData0001,
    MsgMapGetRawData0002,

    MsgMeGetMapData0000,
    MsgMeGetMapData0001,
    MsgMeGetMapData0002,
    MsgMeGetMapData0003,

    MsgMeGetMapDataList0000,

    MsgMeGetSubmittedWarRuleList0000,

    MsgMeSubmitMap0000,
    MsgMeSubmitMap0001,
    MsgMeSubmitMap0002,
    MsgMeSubmitMap0003,
    MsgMeSubmitMap0004,
    MsgMeSubmitMap0005,

    MsgMeSubmitWarRule0000,
    MsgMeSubmitWarRule0001,
    MsgMeSubmitWarRule0002,
    MsgMeSubmitWarRule0003,
    MsgMeSubmitWarRule0004,
    MsgMeSubmitWarRule0005,
    MsgMeSubmitWarRule0006,
    MsgMeSubmitWarRule0007,
    MsgMeSubmitWarRule0008,

    MsgMmSetMapEnabled0000,
    MsgMmSetMapEnabled0001,
    MsgMmSetMapEnabled0002,
    MsgMmSetMapEnabled0003,
    MsgMmSetMapEnabled0004,
    MsgMmSetMapEnabled0005,
    MsgMmSetMapEnabled0006,
    MsgMmSetMapEnabled0007,
    MsgMmSetMapEnabled0008,

    MsgMmGetReviewingMaps0000,
    MsgMmGetReviewingMaps0001,
    MsgMmGetReviewingMaps0002,
    MsgMmGetReviewingMaps0003,

    MsgMmGetReviewingWarRuleList0000,
    MsgMmGetReviewingWarRuleList0001,
    MsgMmGetReviewingWarRuleList0002,
    MsgMmGetReviewingWarRuleList0003,

    MsgMmReviewMap0000,
    MsgMmReviewMap0001,
    MsgMmReviewMap0002,
    MsgMmReviewMap0003,
    MsgMmReviewMap0004,
    MsgMmReviewMap0005,
    MsgMmReviewMap0006,
    MsgMmReviewMap0007,
    MsgMmReviewMap0008,
    MsgMmReviewMap0009,

    MsgMmReviewWarRule0000,
    MsgMmReviewWarRule0001,
    MsgMmReviewWarRule0002,
    MsgMmReviewWarRule0003,
    MsgMmReviewWarRule0004,
    MsgMmReviewWarRule0005,
    MsgMmReviewWarRule0006,
    MsgMmReviewWarRule0007,
    MsgMmReviewWarRule0008,
    MsgMmReviewWarRule0009,
    MsgMmReviewWarRule0010,
    MsgMmReviewWarRule0011,

    MsgMmSetMapAvailability0000,
    MsgMmSetMapAvailability0001,
    MsgMmSetMapAvailability0002,
    MsgMmSetMapAvailability0003,
    MsgMmSetMapAvailability0004,
    MsgMmSetMapAvailability0005,
    MsgMmSetMapAvailability0006,
    MsgMmSetMapAvailability0007,
    MsgMmSetMapAvailability0008,
    MsgMmSetMapAvailability0009,

    MsgMmSetMapTag0000,
    MsgMmSetMapTag0001,
    MsgMmSetMapTag0002,
    MsgMmSetMapTag0003,
    MsgMmSetMapTag0004,
    MsgMmSetMapTag0005,
    MsgMmSetMapTag0006,
    MsgMmSetMapTag0007,

    MsgMcrCreateRoom0000,
    MsgMcrCreateRoom0001,
    MsgMcrCreateRoom0002,
    MsgMcrCreateRoom0003,
    MsgMcrCreateRoom0004,
    MsgMcrCreateRoom0005,
    MsgMcrCreateRoom0006,
    MsgMcrCreateRoom0007,
    MsgMcrCreateRoom0008,
    MsgMcrCreateRoom0009,
    MsgMcrCreateRoom0010,
    MsgMcrCreateRoom0011,
    MsgMcrCreateRoom0012,
    MsgMcrCreateRoom0013,
    MsgMcrCreateRoom0014,
    MsgMcrCreateRoom0015,
    MsgMcrCreateRoom0016,
    MsgMcrCreateRoom0017,
    MsgMcrCreateRoom0018,
    MsgMcrCreateRoom0019,

    MsgMcrDeletePlayer0000,
    MsgMcrDeletePlayer0001,
    MsgMcrDeletePlayer0002,
    MsgMcrDeletePlayer0003,
    MsgMcrDeletePlayer0004,
    MsgMcrDeletePlayer0005,
    MsgMcrDeletePlayer0006,
    MsgMcrDeletePlayer0007,

    MsgMcrDeleteRoom0000,
    MsgMcrDeleteRoom0001,
    MsgMcrDeleteRoom0002,
    MsgMcrDeleteRoom0003,

    MsgMcrExitRoom0000,
    MsgMcrExitRoom0001,
    MsgMcrExitRoom0002,
    MsgMcrExitRoom0003,
    MsgMcrExitRoom0004,
    MsgMcrExitRoom0005,

    MsgMcrGetRoomInfo0000,

    MsgMcrJoinRoom0000,
    MsgMcrJoinRoom0001,
    MsgMcrJoinRoom0002,
    MsgMcrJoinRoom0003,
    MsgMcrJoinRoom0004,
    MsgMcrJoinRoom0005,
    MsgMcrJoinRoom0006,
    MsgMcrJoinRoom0007,
    MsgMcrJoinRoom0008,
    MsgMcrJoinRoom0009,
    MsgMcrJoinRoom0010,
    MsgMcrJoinRoom0011,
    MsgMcrJoinRoom0012,
    MsgMcrJoinRoom0013,
    MsgMcrJoinRoom0014,
    MsgMcrJoinRoom0015,
    MsgMcrJoinRoom0016,
    MsgMcrJoinRoom0017,
    MsgMcrJoinRoom0018,
    MsgMcrJoinRoom0019,
    MsgMcrJoinRoom0020,

    MsgMcrSetReady0000,
    MsgMcrSetReady0001,
    MsgMcrSetReady0002,
    MsgMcrSetReady0003,
    MsgMcrSetReady0004,
    MsgMcrSetReady0005,

    MsgMcrSetSelfSettings0000,
    MsgMcrSetSelfSettings0001,
    MsgMcrSetSelfSettings0002,
    MsgMcrSetSelfSettings0003,
    MsgMcrSetSelfSettings0004,
    MsgMcrSetSelfSettings0005,
    MsgMcrSetSelfSettings0006,
    MsgMcrSetSelfSettings0007,
    MsgMcrSetSelfSettings0008,
    MsgMcrSetSelfSettings0009,
    MsgMcrSetSelfSettings0010,
    MsgMcrSetSelfSettings0011,
    MsgMcrSetSelfSettings0012,
    MsgMcrSetSelfSettings0013,
    MsgMcrSetSelfSettings0014,
    MsgMcrSetSelfSettings0015,
    MsgMcrSetSelfSettings0016,

    MsgMcrSetWarRule0000,
    MsgMcrSetWarRule0001,
    MsgMcrSetWarRule0002,
    MsgMcrSetWarRule0003,
    MsgMcrSetWarRule0004,
    MsgMcrSetWarRule0005,
    MsgMcrSetWarRule0006,
    MsgMcrSetWarRule0007,
    MsgMcrSetWarRule0008,
    MsgMcrSetWarRule0009,
    MsgMcrSetWarRule0010,
    MsgMcrSetWarRule0011,
    MsgMcrSetWarRule0012,
    MsgMcrSetWarRule0013,
    MsgMcrSetWarRule0014,
    MsgMcrSetWarRule0015,
    MsgMcrSetWarRule0016,

    MsgMcrStartWar0000,
    MsgMcrStartWar0001,
    MsgMcrStartWar0002,
    MsgMcrStartWar0003,
    MsgMcrStartWar0004,
    MsgMcrStartWar0005,
    MsgMcrStartWar0006,
    MsgMcrStartWar0007,
    MsgMcrStartWar0008,
    MsgMcrStartWar0009,
    MsgMcrStartWar0010,
    MsgMcrStartWar0011,

    MsgMfrCreateRoom0000,
    MsgMfrCreateRoom0001,
    MsgMfrCreateRoom0002,
    MsgMfrCreateRoom0003,
    MsgMfrCreateRoom0004,
    MsgMfrCreateRoom0005,
    MsgMfrCreateRoom0006,
    MsgMfrCreateRoom0007,
    MsgMfrCreateRoom0008,
    MsgMfrCreateRoom0009,
    MsgMfrCreateRoom0010,
    MsgMfrCreateRoom0011,
    MsgMfrCreateRoom0012,
    MsgMfrCreateRoom0013,
    MsgMfrCreateRoom0014,
    MsgMfrCreateRoom0015,
    MsgMfrCreateRoom0016,
    MsgMfrCreateRoom0017,
    MsgMfrCreateRoom0018,
    MsgMfrCreateRoom0019,

    MsgMfrExitRoom0000,
    MsgMfrExitRoom0001,
    MsgMfrExitRoom0002,
    MsgMfrExitRoom0003,
    MsgMfrExitRoom0004,
    MsgMfrExitRoom0005,

    MsgMfrDeletePlayer0000,
    MsgMfrDeletePlayer0001,
    MsgMfrDeletePlayer0002,
    MsgMfrDeletePlayer0003,
    MsgMfrDeletePlayer0004,
    MsgMfrDeletePlayer0005,
    MsgMfrDeletePlayer0006,
    MsgMfrDeletePlayer0007,

    MsgMfrDeleteRoom0000,
    MsgMfrDeleteRoom0001,
    MsgMfrDeleteRoom0002,
    MsgMfrDeleteRoom0003,

    MsgMfrGetRoomInfo0000,

    MsgMfrJoinRoom0000,
    MsgMfrJoinRoom0001,
    MsgMfrJoinRoom0002,
    MsgMfrJoinRoom0003,
    MsgMfrJoinRoom0004,
    MsgMfrJoinRoom0005,
    MsgMfrJoinRoom0006,
    MsgMfrJoinRoom0007,
    MsgMfrJoinRoom0008,
    MsgMfrJoinRoom0009,
    MsgMfrJoinRoom0010,
    MsgMfrJoinRoom0011,
    MsgMfrJoinRoom0012,
    MsgMfrJoinRoom0013,
    MsgMfrJoinRoom0014,
    MsgMfrJoinRoom0015,
    MsgMfrJoinRoom0016,
    MsgMfrJoinRoom0017,
    MsgMfrJoinRoom0018,
    MsgMfrJoinRoom0019,
    MsgMfrJoinRoom0020,

    MsgMfrSetReady0000,
    MsgMfrSetReady0001,
    MsgMfrSetReady0002,
    MsgMfrSetReady0003,
    MsgMfrSetReady0004,
    MsgMfrSetReady0005,

    MsgMfrSetSelfSettings0000,
    MsgMfrSetSelfSettings0001,
    MsgMfrSetSelfSettings0002,
    MsgMfrSetSelfSettings0003,
    MsgMfrSetSelfSettings0004,
    MsgMfrSetSelfSettings0005,
    MsgMfrSetSelfSettings0006,
    MsgMfrSetSelfSettings0007,
    MsgMfrSetSelfSettings0008,
    MsgMfrSetSelfSettings0009,
    MsgMfrSetSelfSettings0010,
    MsgMfrSetSelfSettings0011,
    MsgMfrSetSelfSettings0012,
    MsgMfrSetSelfSettings0013,
    MsgMfrSetSelfSettings0014,

    MsgMfrStartWar0000,
    MsgMfrStartWar0001,
    MsgMfrStartWar0002,
    MsgMfrStartWar0003,
    MsgMfrStartWar0004,
    MsgMfrStartWar0005,
    MsgMfrStartWar0006,
    MsgMfrStartWar0007,
    MsgMfrStartWar0008,

    MsgMpwActionPlayerDeleteUnit0000,
    MsgMpwActionPlayerDeleteUnit0001,
    MsgMpwActionPlayerDeleteUnit0002,
    MsgMpwActionPlayerDeleteUnit0003,
    MsgMpwActionPlayerDeleteUnit0004,
    MsgMpwActionPlayerDeleteUnit0005,
    MsgMpwActionPlayerDeleteUnit0006,
    MsgMpwActionPlayerDeleteUnit0007,
    MsgMpwActionPlayerDeleteUnit0008,
    MsgMpwActionPlayerDeleteUnit0009,
    MsgMpwActionPlayerDeleteUnit0010,
    MsgMpwActionPlayerDeleteUnit0011,

    MsgMpwActionPlayerEndTurn0000,
    MsgMpwActionPlayerEndTurn0001,
    MsgMpwActionPlayerEndTurn0002,
    MsgMpwActionPlayerEndTurn0003,
    MsgMpwActionPlayerEndTurn0004,
    MsgMpwActionPlayerEndTurn0005,
    MsgMpwActionPlayerEndTurn0006,
    MsgMpwActionPlayerEndTurn0007,
    MsgMpwActionPlayerEndTurn0008,
    MsgMpwActionPlayerEndTurn0009,

    MsgMpwActionPlayerProduceUnit0000,
    MsgMpwActionPlayerProduceUnit0001,
    MsgMpwActionPlayerProduceUnit0002,
    MsgMpwActionPlayerProduceUnit0003,
    MsgMpwActionPlayerProduceUnit0004,
    MsgMpwActionPlayerProduceUnit0005,
    MsgMpwActionPlayerProduceUnit0006,
    MsgMpwActionPlayerProduceUnit0007,
    MsgMpwActionPlayerProduceUnit0008,
    MsgMpwActionPlayerProduceUnit0009,
    MsgMpwActionPlayerProduceUnit0010,
    MsgMpwActionPlayerProduceUnit0011,
    MsgMpwActionPlayerProduceUnit0012,
    MsgMpwActionPlayerProduceUnit0013,
    MsgMpwActionPlayerProduceUnit0014,
    MsgMpwActionPlayerProduceUnit0015,
    MsgMpwActionPlayerProduceUnit0016,
    MsgMpwActionPlayerProduceUnit0017,
    MsgMpwActionPlayerProduceUnit0018,
    MsgMpwActionPlayerProduceUnit0019,
    MsgMpwActionPlayerProduceUnit0020,
    MsgMpwActionPlayerProduceUnit0021,
    MsgMpwActionPlayerProduceUnit0022,
    MsgMpwActionPlayerProduceUnit0023,

    MsgMpwActionPlayerSurrender0000,
    MsgMpwActionPlayerSurrender0001,
    MsgMpwActionPlayerSurrender0002,
    MsgMpwActionPlayerSurrender0003,
    MsgMpwActionPlayerSurrender0004,
    MsgMpwActionPlayerSurrender0005,
    MsgMpwActionPlayerSurrender0006,
    MsgMpwActionPlayerSurrender0007,
    MsgMpwActionPlayerSurrender0008,
    MsgMpwActionPlayerSurrender0009,

    MsgMpwActionPlayerVoteForDraw0000,
    MsgMpwActionPlayerVoteForDraw0001,
    MsgMpwActionPlayerVoteForDraw0002,
    MsgMpwActionPlayerVoteForDraw0003,
    MsgMpwActionPlayerVoteForDraw0004,
    MsgMpwActionPlayerVoteForDraw0005,
    MsgMpwActionPlayerVoteForDraw0006,
    MsgMpwActionPlayerVoteForDraw0007,
    MsgMpwActionPlayerVoteForDraw0008,
    MsgMpwActionPlayerVoteForDraw0009,

    MsgMpwActionUnitAttackTile0000,
    MsgMpwActionUnitAttackTile0001,
    MsgMpwActionUnitAttackTile0002,
    MsgMpwActionUnitAttackTile0003,
    MsgMpwActionUnitAttackTile0004,
    MsgMpwActionUnitAttackTile0005,
    MsgMpwActionUnitAttackTile0006,
    MsgMpwActionUnitAttackTile0007,
    MsgMpwActionUnitAttackTile0008,
    MsgMpwActionUnitAttackTile0009,
    MsgMpwActionUnitAttackTile0010,
    MsgMpwActionUnitAttackTile0011,
    MsgMpwActionUnitAttackTile0012,
    MsgMpwActionUnitAttackTile0013,
    MsgMpwActionUnitAttackTile0014,
    MsgMpwActionUnitAttackTile0015,
    MsgMpwActionUnitAttackTile0016,

    MsgMpwActionUnitAttackUnit0000,
    MsgMpwActionUnitAttackUnit0001,
    MsgMpwActionUnitAttackUnit0002,
    MsgMpwActionUnitAttackUnit0003,
    MsgMpwActionUnitAttackUnit0004,
    MsgMpwActionUnitAttackUnit0005,
    MsgMpwActionUnitAttackUnit0006,
    MsgMpwActionUnitAttackUnit0007,
    MsgMpwActionUnitAttackUnit0008,
    MsgMpwActionUnitAttackUnit0009,
    MsgMpwActionUnitAttackUnit0010,
    MsgMpwActionUnitAttackUnit0011,
    MsgMpwActionUnitAttackUnit0012,
    MsgMpwActionUnitAttackUnit0013,
    MsgMpwActionUnitAttackUnit0014,
    MsgMpwActionUnitAttackUnit0015,
    MsgMpwActionUnitAttackUnit0016,

    MsgMpwActionUnitBeLoaded0000,
    MsgMpwActionUnitBeLoaded0001,
    MsgMpwActionUnitBeLoaded0002,
    MsgMpwActionUnitBeLoaded0003,
    MsgMpwActionUnitBeLoaded0004,
    MsgMpwActionUnitBeLoaded0005,
    MsgMpwActionUnitBeLoaded0006,
    MsgMpwActionUnitBeLoaded0007,
    MsgMpwActionUnitBeLoaded0008,
    MsgMpwActionUnitBeLoaded0009,
    MsgMpwActionUnitBeLoaded0010,

    MsgMpwActionUnitBuildTile0000,
    MsgMpwActionUnitBuildTile0001,
    MsgMpwActionUnitBuildTile0002,
    MsgMpwActionUnitBuildTile0003,
    MsgMpwActionUnitBuildTile0004,
    MsgMpwActionUnitBuildTile0005,
    MsgMpwActionUnitBuildTile0006,
    MsgMpwActionUnitBuildTile0007,
    MsgMpwActionUnitBuildTile0008,
    MsgMpwActionUnitBuildTile0009,
    MsgMpwActionUnitBuildTile0010,
    MsgMpwActionUnitBuildTile0011,
    MsgMpwActionUnitBuildTile0012,

    MsgMpwActionUnitCaptureTile0000,
    MsgMpwActionUnitCaptureTile0001,
    MsgMpwActionUnitCaptureTile0002,
    MsgMpwActionUnitCaptureTile0003,
    MsgMpwActionUnitCaptureTile0004,
    MsgMpwActionUnitCaptureTile0005,
    MsgMpwActionUnitCaptureTile0006,
    MsgMpwActionUnitCaptureTile0007,
    MsgMpwActionUnitCaptureTile0008,
    MsgMpwActionUnitCaptureTile0009,
    MsgMpwActionUnitCaptureTile0010,
    MsgMpwActionUnitCaptureTile0011,
    MsgMpwActionUnitCaptureTile0012,
    MsgMpwActionUnitCaptureTile0013,

    MsgMpwActionUnitDive0000,
    MsgMpwActionUnitDive0001,
    MsgMpwActionUnitDive0002,
    MsgMpwActionUnitDive0003,
    MsgMpwActionUnitDive0004,
    MsgMpwActionUnitDive0005,
    MsgMpwActionUnitDive0006,
    MsgMpwActionUnitDive0007,
    MsgMpwActionUnitDive0008,
    MsgMpwActionUnitDive0009,
    MsgMpwActionUnitDive0010,
    MsgMpwActionUnitDive0011,

    MsgMpwActionUnitDropUnit0000,
    MsgMpwActionUnitDropUnit0001,
    MsgMpwActionUnitDropUnit0002,
    MsgMpwActionUnitDropUnit0003,
    MsgMpwActionUnitDropUnit0004,
    MsgMpwActionUnitDropUnit0005,
    MsgMpwActionUnitDropUnit0006,
    MsgMpwActionUnitDropUnit0007,
    MsgMpwActionUnitDropUnit0008,
    MsgMpwActionUnitDropUnit0009,
    MsgMpwActionUnitDropUnit0010,

    MsgMpwActionUnitJoinUnit0000,
    MsgMpwActionUnitJoinUnit0001,
    MsgMpwActionUnitJoinUnit0002,
    MsgMpwActionUnitJoinUnit0003,
    MsgMpwActionUnitJoinUnit0004,
    MsgMpwActionUnitJoinUnit0005,
    MsgMpwActionUnitJoinUnit0006,
    MsgMpwActionUnitJoinUnit0007,
    MsgMpwActionUnitJoinUnit0008,
    MsgMpwActionUnitJoinUnit0009,
    MsgMpwActionUnitJoinUnit0010,
    MsgMpwActionUnitJoinUnit0011,

    MsgMpwActionUnitLaunchFlare0000,
    MsgMpwActionUnitLaunchFlare0001,
    MsgMpwActionUnitLaunchFlare0002,
    MsgMpwActionUnitLaunchFlare0003,
    MsgMpwActionUnitLaunchFlare0004,
    MsgMpwActionUnitLaunchFlare0005,
    MsgMpwActionUnitLaunchFlare0006,
    MsgMpwActionUnitLaunchFlare0007,
    MsgMpwActionUnitLaunchFlare0008,
    MsgMpwActionUnitLaunchFlare0009,
    MsgMpwActionUnitLaunchFlare0010,
    MsgMpwActionUnitLaunchFlare0011,
    MsgMpwActionUnitLaunchFlare0012,
    MsgMpwActionUnitLaunchFlare0013,
    MsgMpwActionUnitLaunchFlare0014,
    MsgMpwActionUnitLaunchFlare0015,

    MsgMpwActionUnitLaunchSilo0000,
    MsgMpwActionUnitLaunchSilo0001,
    MsgMpwActionUnitLaunchSilo0002,
    MsgMpwActionUnitLaunchSilo0003,
    MsgMpwActionUnitLaunchSilo0004,
    MsgMpwActionUnitLaunchSilo0005,
    MsgMpwActionUnitLaunchSilo0006,
    MsgMpwActionUnitLaunchSilo0007,
    MsgMpwActionUnitLaunchSilo0008,
    MsgMpwActionUnitLaunchSilo0009,
    MsgMpwActionUnitLaunchSilo0010,
    MsgMpwActionUnitLaunchSilo0011,
    MsgMpwActionUnitLaunchSilo0012,
    MsgMpwActionUnitLaunchSilo0013,
    MsgMpwActionUnitLaunchSilo0014,

    MsgMpwActionUnitLoadCo0000,
    MsgMpwActionUnitLoadCo0001,
    MsgMpwActionUnitLoadCo0002,
    MsgMpwActionUnitLoadCo0003,
    MsgMpwActionUnitLoadCo0004,
    MsgMpwActionUnitLoadCo0005,
    MsgMpwActionUnitLoadCo0006,
    MsgMpwActionUnitLoadCo0007,
    MsgMpwActionUnitLoadCo0008,
    MsgMpwActionUnitLoadCo0009,
    MsgMpwActionUnitLoadCo0010,

    MsgMpwActionUnitProduceUnit0000,
    MsgMpwActionUnitProduceUnit0001,
    MsgMpwActionUnitProduceUnit0002,
    MsgMpwActionUnitProduceUnit0003,
    MsgMpwActionUnitProduceUnit0004,
    MsgMpwActionUnitProduceUnit0005,
    MsgMpwActionUnitProduceUnit0006,
    MsgMpwActionUnitProduceUnit0007,
    MsgMpwActionUnitProduceUnit0008,
    MsgMpwActionUnitProduceUnit0009,
    MsgMpwActionUnitProduceUnit0010,
    MsgMpwActionUnitProduceUnit0011,
    MsgMpwActionUnitProduceUnit0012,

    MsgMpwActionUnitSupplyUnit0000,
    MsgMpwActionUnitSupplyUnit0001,
    MsgMpwActionUnitSupplyUnit0002,
    MsgMpwActionUnitSupplyUnit0003,
    MsgMpwActionUnitSupplyUnit0004,
    MsgMpwActionUnitSupplyUnit0005,
    MsgMpwActionUnitSupplyUnit0006,
    MsgMpwActionUnitSupplyUnit0007,
    MsgMpwActionUnitSupplyUnit0008,
    MsgMpwActionUnitSupplyUnit0009,
    MsgMpwActionUnitSupplyUnit0010,
    MsgMpwActionUnitSupplyUnit0011,

    MsgMpwActionUnitSurface0000,
    MsgMpwActionUnitSurface0001,
    MsgMpwActionUnitSurface0002,
    MsgMpwActionUnitSurface0003,
    MsgMpwActionUnitSurface0004,
    MsgMpwActionUnitSurface0005,
    MsgMpwActionUnitSurface0006,
    MsgMpwActionUnitSurface0007,
    MsgMpwActionUnitSurface0008,
    MsgMpwActionUnitSurface0009,
    MsgMpwActionUnitSurface0010,
    MsgMpwActionUnitSurface0011,

    MsgMpwActionUnitUseCoSkill0000,
    MsgMpwActionUnitUseCoSkill0001,
    MsgMpwActionUnitUseCoSkill0002,
    MsgMpwActionUnitUseCoSkill0003,
    MsgMpwActionUnitUseCoSkill0004,
    MsgMpwActionUnitUseCoSkill0005,
    MsgMpwActionUnitUseCoSkill0006,
    MsgMpwActionUnitUseCoSkill0007,
    MsgMpwActionUnitUseCoSkill0008,
    MsgMpwActionUnitUseCoSkill0009,
    MsgMpwActionUnitUseCoSkill0010,

    MsgMpwActionUnitWait0000,
    MsgMpwActionUnitWait0001,
    MsgMpwActionUnitWait0002,
    MsgMpwActionUnitWait0003,
    MsgMpwActionUnitWait0004,
    MsgMpwActionUnitWait0005,
    MsgMpwActionUnitWait0006,
    MsgMpwActionUnitWait0007,
    MsgMpwActionUnitWait0008,

    MsgMpwCommonContinueWar0000,
    MsgMpwCommonContinueWar0001,
    MsgMpwCommonContinueWar0002,
    MsgMpwCommonContinueWar0003,

    MsgMpwCommonHandleBoot0000,
    MsgMpwCommonHandleBoot0001,

    MsgMpwCommonSyncWar0000,
    MsgMpwCommonSyncWar0001,
    MsgMpwCommonSyncWar0002,
    MsgMpwCommonSyncWar0003,

    MsgMpwWatchContinueWar0000,
    MsgMpwWatchContinueWar0001,
    MsgMpwWatchContinueWar0002,

    MsgMpwWatchDeleteWatcher0000,
    MsgMpwWatchDeleteWatcher0001,
    MsgMpwWatchDeleteWatcher0002,
    MsgMpwWatchDeleteWatcher0003,
    MsgMpwWatchDeleteWatcher0004,
    MsgMpwWatchDeleteWatcher0005,

    MsgMpwWatchHandleRequest0000,
    MsgMpwWatchHandleRequest0001,
    MsgMpwWatchHandleRequest0002,
    MsgMpwWatchHandleRequest0003,
    MsgMpwWatchHandleRequest0004,
    MsgMpwWatchHandleRequest0005,
    MsgMpwWatchHandleRequest0006,
    MsgMpwWatchHandleRequest0007,

    MsgMpwWatchMakeRequest0000,
    MsgMpwWatchMakeRequest0001,
    MsgMpwWatchMakeRequest0002,
    MsgMpwWatchMakeRequest0003,
    MsgMpwWatchMakeRequest0004,
    MsgMpwWatchMakeRequest0005,
    MsgMpwWatchMakeRequest0006,
    MsgMpwWatchMakeRequest0007,

    MsgMrrGetMaxConcurrentCount0000,

    MsgMrrGetMyRoomPublicInfoList0000,
    MsgMrrGetMyRoomPublicInfoList0001,

    MsgMrrGetRoomPublicInfo0000,
    MsgMrrGetRoomPublicInfo0001,

    MsgMrrSetBannedCoIdList0000,
    MsgMrrSetBannedCoIdList0001,
    MsgMrrSetBannedCoIdList0002,
    MsgMrrSetBannedCoIdList0003,
    MsgMrrSetBannedCoIdList0004,
    MsgMrrSetBannedCoIdList0005,
    MsgMrrSetBannedCoIdList0006,
    MsgMrrSetBannedCoIdList0007,
    MsgMrrSetBannedCoIdList0008,
    MsgMrrSetBannedCoIdList0009,
    MsgMrrSetBannedCoIdList0010,
    MsgMrrSetBannedCoIdList0011,
    MsgMrrSetBannedCoIdList0012,
    MsgMrrSetBannedCoIdList0013,
    MsgMrrSetBannedCoIdList0014,
    MsgMrrSetBannedCoIdList0015,
    MsgMrrSetBannedCoIdList0016,
    MsgMrrSetBannedCoIdList0017,

    MsgMrrSetMaxConcurrentCount0000,
    MsgMrrSetMaxConcurrentCount0001,
    MsgMrrSetMaxConcurrentCount0002,

    MsgMrrSetSelfSettings0000,
    MsgMrrSetSelfSettings0001,
    MsgMrrSetSelfSettings0002,
    MsgMrrSetSelfSettings0003,
    MsgMrrSetSelfSettings0004,
    MsgMrrSetSelfSettings0005,
    MsgMrrSetSelfSettings0006,
    MsgMrrSetSelfSettings0007,
    MsgMrrSetSelfSettings0008,
    MsgMrrSetSelfSettings0009,
    MsgMrrSetSelfSettings0010,
    MsgMrrSetSelfSettings0011,
    MsgMrrSetSelfSettings0012,
    MsgMrrSetSelfSettings0013,
    MsgMrrSetSelfSettings0014,
    MsgMrrSetSelfSettings0015,

    MsgReplayGetData0000,
    MsgReplayGetData0001,

    MsgReplaySetRating0000,
    MsgReplaySetRating0001,

    MsgScrContinueWar0000,
    MsgScrContinueWar0001,

    MsgScrCreateCustomWar0000,
    MsgScrCreateCustomWar0001,
    MsgScrCreateCustomWar0002,
    MsgScrCreateCustomWar0003,
    MsgScrCreateCustomWar0004,
    MsgScrCreateCustomWar0005,

    MsgScrCreateWar0000,
    MsgScrCreateWar0001,
    MsgScrCreateWar0002,
    MsgScrCreateWar0003,
    MsgScrCreateWar0004,
    MsgScrCreateWar0005,
    MsgScrCreateWar0006,
    MsgScrCreateWar0007,
    MsgScrCreateWar0008,
    MsgScrCreateWar0009,
    MsgScrCreateWar0010,
    MsgScrCreateWar0011,
    MsgScrCreateWar0012,
    MsgScrCreateWar0013,
    MsgScrCreateWar0014,
    MsgScrCreateWar0015,
    MsgScrCreateWar0016,
    MsgScrCreateWar0017,
    MsgScrCreateWar0018,

    MsgScrDeleteWar0000,

    MsgScrSaveWar0000,
    MsgScrSaveWar0001,
    MsgScrSaveWar0002,

    MsgUserGetPublicInfo0000,
    MsgUserGetPublicInfo0001,

    MsgUserGetSettings0000,

    MsgUserLogin0000,                   // socket已有user id
    MsgUserLogin0001,                   // 账号不合法
    MsgUserLogin0002,                   // 已处于已登录的状态
    MsgUserLogin0003,                   // 密码不合法
    MsgUserLogin0004,
    MsgUserLogin0005,                   // 账号不存在
    MsgUserLogin0006,                   // 账号或密码不正确
    MsgUserLogin0007,                   // 账号权限设定不存在
    MsgUserLogin0008,                   // 账号无权登录

    MsgUserRegister0000,                // 账号不合法
    MsgUserRegister0001,                // 账号已存在
    MsgUserRegister0002,                // 已处于已登录的状态
    MsgUserRegister0003,                // 密码不合法
    MsgUserRegister0004,                // 昵称不合法
    MsgUserRegister0005,                // 昵称已被使用

    MsgUserSetDiscordId0000,

    MsgUserSetNickname0000,             // 昵称不合法
    MsgUserSetNickname0001,             // 昵称已被使用

    MsgUserSetPassword0000,
    MsgUserSetPassword0001,
    MsgUserSetPassword0002,

    MsgUserSetPrivilege0000,
    MsgUserSetPrivilege0001,
    MsgUserSetPrivilege0002,
    MsgUserSetPrivilege0003,
    MsgUserSetPrivilege0004,

    MsgUserSetSettings0000,
    MsgUserSetSettings0001,
    MsgUserSetSettings0002,
}
}
