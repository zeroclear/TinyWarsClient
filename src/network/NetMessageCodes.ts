
namespace TinyWars.Network {
export enum Codes {
C_Heartbeat = 0,
S_Heartbeat = 1,
C_Register = 2,
S_Register = 3,
C_Login = 4,
S_Login = 5,
C_Logout = 6,
S_Logout = 7,
S_Error = 9,
S_ServerDisconnect = 11,
S_NewestConfigVersion = 13,
C_GetUserPublicInfo = 20,
S_GetUserPublicInfo = 21,
C_UserChangeNickname = 22,
S_UserChangeNickname = 23,
C_UserChangeDiscordId = 24,
S_UserChangeDiscordId = 25,
C_UserGetOnlineUsers = 26,
S_UserGetOnlineUsers = 27,
C_MapGetEnabledExtraDataList = 40,
S_MapGetEnabledExtraDataList = 41,
C_MapGetExtraData = 42,
S_MapGetExtraData = 43,
C_MapGetRawData = 44,
S_MapGetRawData = 45,
C_MeGetDataList = 50,
S_MeGetDataList = 51,
C_MeGetData = 52,
S_MeGetData = 53,
C_MeSaveMap = 54,
S_MeSaveMap = 55,
C_MmChangeAvailability = 100,
S_MmChangeAvailability = 101,
C_MmReloadAllMaps = 102,
S_MmReloadAllMaps = 103,
C_MmMergeMap = 104,
S_MmMergeMap = 105,
C_MmDeleteMap = 106,
S_MmDeleteMap = 107,
C_MmGetReviewingMaps = 108,
S_MmGetReviewingMaps = 109,
C_MmReviewMap = 110,
S_MmReviewMap = 111,
C_McrCreateWar = 1001,
S_McrCreateWar = 1002,
C_McrExitWar = 1003,
S_McrExitWar = 1004,
C_McrGetJoinedWaitingInfos = 1005,
S_McrGetJoinedWaitingInfos = 1006,
C_McrGetUnjoinedWaitingInfos = 1007,
S_McrGetUnjoinedWaitingInfos = 1008,
C_McrJoinWar = 1009,
S_McrJoinWar = 1010,
C_McrGetJoinedOngoingInfos = 1011,
S_McrGetJoinedOngoingInfos = 1012,
C_McrContinueWar = 1013,
S_McrContinueWar = 1014,
C_McrGetReplayInfos = 1015,
S_McrGetReplayInfos = 1016,
C_McrGetReplayData = 1017,
S_McrGetReplayData = 1018,
C_McwWatchMakeRequest = 1031,
S_McwWatchMakeRequest = 1032,
C_McwWatchHandleRequest = 1033,
S_McwWatchHandleRequest = 1034,
C_McwWatchDeleteWatcher = 1035,
S_McwWatchDeleteWatcher = 1036,
C_McwWatchGetUnwatchedWarInfos = 1037,
S_McwWatchGetUnwatchedWarInfos = 1038,
C_McwWatchGetOngoingWarInfos = 1039,
S_McwWatchGetOngoingWarInfos = 1040,
C_McwWatchGetRequestedWarInfos = 1041,
S_McwWatchGetRequestedWarInfos = 1042,
C_McwWatchGetWatchedWarInfos = 1043,
S_McwWatchGetWatchedWarInfos = 1044,
C_McwWatchContinueWar = 1045,
S_McwWatchContinueWar = 1046,
C_McwPlayerBeginTurn = 1101,
S_McwPlayerBeginTurn = 1102,
C_McwPlayerEndTurn = 1103,
S_McwPlayerEndTurn = 1104,
C_McwPlayerSurrender = 1105,
S_McwPlayerSurrender = 1106,
C_McwPlayerProduceUnit = 1107,
S_McwPlayerProduceUnit = 1108,
C_McwPlayerDeleteUnit = 1109,
S_McwPlayerDeleteUnit = 1110,
C_McwPlayerVoteForDraw = 1111,
S_McwPlayerVoteForDraw = 1112,
C_McwPlayerSyncWar = 1113,
S_McwPlayerSyncWar = 1114,
C_McwUnitWait = 1151,
S_McwUnitWait = 1152,
C_McwUnitBeLoaded = 1153,
S_McwUnitBeLoaded = 1154,
C_McwUnitCaptureTile = 1155,
S_McwUnitCaptureTile = 1156,
C_McwUnitAttack = 1157,
S_McwUnitAttack = 1158,
C_McwUnitDrop = 1159,
S_McwUnitDrop = 1160,
C_McwUnitBuildTile = 1161,
S_McwUnitBuildTile = 1162,
C_McwUnitDive = 1163,
S_McwUnitDive = 1164,
C_McwUnitSurface = 1165,
S_McwUnitSurface = 1166,
C_McwUnitJoin = 1167,
S_McwUnitJoin = 1168,
C_McwUnitLaunchFlare = 1169,
S_McwUnitLaunchFlare = 1170,
C_McwUnitLaunchSilo = 1171,
S_McwUnitLaunchSilo = 1172,
C_McwUnitProduceUnit = 1173,
S_McwUnitProduceUnit = 1174,
C_McwUnitSupply = 1175,
S_McwUnitSupply = 1176,
C_McwUnitLoadCo = 1177,
S_McwUnitLoadCo = 1178,
C_McwUnitUseCoSkill = 1179,
S_McwUnitUseCoSkill = 1180,
C_ScrCreateWar = 1501,
S_ScrCreateWar = 1502,
C_ScrGetSaveSlotInfoList = 1503,
S_ScrGetSaveSlotInfoList = 1504,
C_ScrContinueWar = 1505,
S_ScrContinueWar = 1506,
C_ScrSaveWar = 1507,
S_ScrSaveWar = 1508,
}}
