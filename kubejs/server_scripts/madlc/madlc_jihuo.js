/**
 * 器官激活策略
 * 对应.tag('kubejs:active')
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ, Map):void>}
 */
const madlcorganActiveStrategies = {
    //资源库
    'madlc:energy_storage': function (player, organ, attributeMap) {
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + 300)
    },

    //喷气推进器（升级改良）
    'madlc:jet_propeller_gai': function (player, organ, attributeMap) {
            player.getPersistentData().putBoolean('madlcjetpropellergai', true)
            player.abilities.mayfly = true
            player.onUpdateAbilities()
    }}

var assign_organ_active = Object.assign(organActiveStrategies, madlcorganActiveStrategies)

/**
 * 器官激活唯一策略
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ, Map):void>}
 */
const madlcorganActiveOnlyStrategies = {
    
    //中枢芯片
    'madlc:cpu': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:machine')) {
                amplifier = amplifier + typeMap.get('kubejs:machine').length
     }
        let a = amplifier * 3
        let b = amplifier * 3
        let c = amplifier * 20
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, a)
        attributeMapValueAddition(attributeMap, global.ATTACK_UP, b)
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + c)
        },
    //魔力转化器
       'madlc:magic_monverter':function(player,organ,attributeMap) {
        let manaMax = player.getAttributeTotalValue('irons_spellbooks:max_mana')
        let a = manaMax / 2000
        let b = manaMax / 1000
        let c = manaMax / 20
        attributeMapValueAddition(attributeMap, global.CRITICAL_HIT, a)
        attributeMapValueAddition(attributeMap, global.CRITICAL_DAMAGE, b)
        attributeMapValueAddition(attributeMap, global.ATTACK_UP, c)
    }
}
var assign_organ_active_only = Object.assign(organActiveOnlyStrategies, madlcorganActiveOnlyStrategies)