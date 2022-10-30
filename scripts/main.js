// const allEvents = [
//     EventType.AdminRequestEvent,
// EventType.BlockBuildBeginEvent,
// EventType.BlockBuildEndEvent,
// EventType.BlockDestroyEvent,
// EventType.BlockInfoEvent,
// EventType.BuildDamageEvent,
// EventType.BuildingCommandEvent,
// EventType.BuildSelectEvent,
// EventType.BuildTeamChangeEvent,
// EventType.ClientCreateEvent,
// EventType.ClientLoadEvent,
// EventType.ClientPreConnectEvent,
// EventType.ConfigEvent,
// EventType.ConnectionEvent,
// EventType.ConnectPacketEvent,
// EventType.ContentInitEvent,
// EventType.CoreChangeEvent,
// EventType.CoreItemDeliverEvent,
// EventType.DepositEvent,
// EventType.DisposeEvent,
// EventType.FileTreeInitEvent,
// EventType.GameOverEvent,
// EventType.HostEvent,
// EventType.LaunchItemEvent,
// EventType.LineConfirmEvent,
// EventType.LoseEvent,
// EventType.MapMakeEvent,
// EventType.MapPublishEvent,
// EventType.MenuOptionChooseEvent,
// EventType.MusicRegisterEvent,
// EventType.PayloadDropEvent,
// EventType.PickupEvent,
// EventType.PlayerBanEvent,
// EventType.PlayerChatEvent,
// EventType.PlayerConnect,
// EventType.PlayerConnectionConfirmed,
// EventType.PlayerIpBanEvent,
// EventType.PlayerIpUnbanEvent,
// EventType.PlayerJoin,
// EventType.PlayerLeave,
// EventType.PlayerUnbanEvent,
// EventType.PlayEvent,
// EventType.ResearchEvent,
// EventType.ResetEvent,
// EventType.ResizeEvent,
// EventType.SaveLoadEvent,
// EventType.SaveWriteEvent,
// EventType.SchematicCreateEvent,
// EventType.SectorCaptureEvent,
// EventType.SectorInvasionEvent,
// EventType.SectorLaunchEvent,
// EventType.SectorLoseEvent,
// EventType.ServerLoadEvent,
// EventType.StateChangeEvent,
// EventType.TapEvent,
// EventType.TileChangeEvent,
// EventType.TilePreChangeEvent,
// EventType.Trigger,
// EventType.TurnEvent,
// EventType.TurretAmmoDeliverEvent,
// EventType.UnitChangeEvent,
// EventType.UnitControlEvent,
// EventType.UnitCreateEvent,
// EventType.UnitDestroyEvent,
// EventType.UnitDrownEvent,
// EventType.UnitSpawnEvent,
// EventType.UnitUnloadEvent,
// EventType.UnlockEvent,
// EventType.WaveEvent,
// EventType.WinEvent,
// EventType.WithdrawEvent,
// EventType.WorldLoadBeginEvent,
// EventType.WorldLoadEndEvent,
// EventType.WorldLoadEvent
// ]

// allEvents.forEach((e)=>{
//     Events.on(e, event => {
//         try{
//             Vars.ui.hudfrag.showToast(`Event Trigger: ` + e);
//             Log.warn(`Event Trigger: ` +  e);
//         }catch(ex){
//             Log.warn(`Event Trigger: ` + e);
//         }
//     })
// })
const pos = new Vec2(-1, -1);
var playerTeam = Vars.state.rules.defaultTeam;
var poly = UnitTypes.poly;

Events.on(EventType.PlayEvent, e => {
    var unit = poly.create(playerTeam);
    unit.health = 99999;
    unit.set(pos.x + Tmp.v1.x, pos.y + Tmp.v1.y);
    unit.add();
    Vars.ui.hudfrag.showToast(`Created 1 Poly`);
})