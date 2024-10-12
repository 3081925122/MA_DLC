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
     //机械肋骨（左）
     'madlc:mechanical_ribs_zuo': function (event, organ, data) {
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 20) {
            event.amount = event.amount - 10
            updateResourceCount(event.entity, count - 20)
        }
    },
    //合金肋骨（右）
    'madlc:hejinleiguyou': function (event, organ, data) {
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 1) {
            event.amount = event.amount * 0.9
            updateResourceCount(event.entity, count - 1)
        }
    },
    //机械肋骨（右）
    'madlc:mechanical_ribs_yuo': function (event, organ, data) {
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 10) {
            event.amount = event.amount * 0.6
            updateResourceCount(event.entity, count - 20)
        }
    }
}
    var assign_organ_player_bear_Only = Object.assign( organPlayerBearOnlyStrategies,  madlcorganPlayerBearOnlyStrategies)