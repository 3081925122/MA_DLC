
/**
 * 器官实体掉落唯一策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const madlcEntityLootOnlyStrategies = {
    //微型分解工厂
    'madlc:micro_processing_factory': function (event, organ) {
        let player = event.getPlayer()
        let count = 1
        let a = maGetComputingPower(player)
        while (a--) {
            if (Math.random() < 0.1) {
                count++
            }
        }
        event.loot.forEach(loot => {
            loot.setCount(loot.getCount() * count)
        })
    },

}
var assign_entity_loot_only = Object.assign(entityLootOnlyStrategies, madlcEntityLootOnlyStrategies);