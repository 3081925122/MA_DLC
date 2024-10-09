/**
 * 器官右键事件唯一策略
 * @constant
 * @type {Object<string,function(Internal.ItemClickedEventJS, organ):void>}
 */
const madlcorganRightClickedOnlyStrategies = {
    //简陋红石熔炉
    'madlc:primitive_redstone_furnace': function (event, organ) {
        if (event.item != 'minecraft:coal') {
            return
        }
        let player = event.player
        let count = 50;
        if (player.persistentData.contains(resourceCount)) {
            count = player.persistentData.getInt(resourceCount) + count;
        }
        updateResourceCount(player, count)
        player.swing()
        event.item.shrink(1)
    },
}
var assign_organ_right_clicked_only = Object.assign(organRightClickedOnlyStrategies, madlcorganRightClickedOnlyStrategies)
