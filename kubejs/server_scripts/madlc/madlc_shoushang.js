/**
 * 玩家承受伤害唯一处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingDamageEvent, organ, EntityHurtCustomModel):void>}
 */
const madlcorganPlayerBearOnlyStrategies = {
     //合金肋骨（左）
    'madlc:hejinleiguzuo': function (event, organ, data) {
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 1) {
            event.amount = event.amount - 1
            updateResourceCount(event.entity, count - 1)
        }
    },
    //合金肋骨（右）
    'madlc:hejinleiguyou': function (event, organ, data) {
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 1) {
            event.amount = event.amount * 0.9
            updateResourceCount(event.entity, count - 1)
        }
    }
}
    var assign_organ_player_bear_Only = Object.assign( organPlayerBearOnlyStrategies,  madlcorganPlayerBearOnlyStrategies)